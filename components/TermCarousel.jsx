"use client";
import { useEffect, useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export default function TermCarousel({ terms, interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const itv = setInterval(() => {
      let termCount = terms.length - 1;

      setIndex((prev) => (prev + 1 < termCount ? prev + 1 : 0));
    }, interval);
    return () => {
      clearInterval(itv);
    };
  }, []);

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={terms[index]}
          nodeRef={ref}
          addEndListener={(done) => {
            ref.current.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          <span ref={ref} className="term-carousel">
            {terms[index]}
          </span>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}
