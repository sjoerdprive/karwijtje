"use client";
import { useEffect, useState } from "react";
import transactions from "#/data/transactions";
import TermCarousel from "./TermCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function () {
  const [offer, setOffer] = useState({ offer: "Heitje", counter: "Karwijtje" });

  useEffect(() => {
    const itv = setInterval(() => {
      setOffer(transactions());
      return () => {
        clearInterval(itv);
      };
    }, 5000);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <span
          style={{ height: "200px" }}
          className="h3 p-5 d-flex center-content col-5 bg-secondary rounded shadow"
        >
          <TermCarousel interval={0} terms={[offer?.offer]} />
        </span>
        <span className="px-2 d-flex center-content col-2">
          <FontAwesomeIcon icon={faArrowRightArrowLeft} size="2x" />
        </span>
        <span
          style={{ height: "200px" }}
          className="h3  p-5 d-flex center-content col-5 bg-secondary rounded shadow"
        >
          <TermCarousel interval={0} terms={[offer?.counter]} />
        </span>
      </div>
    </div>
  );
}
