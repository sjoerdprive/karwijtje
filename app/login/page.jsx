"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const signInWithEmail = async (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  console.log(form.get("email"));
  // const { data, error } = await supabase.auth.signInWithOtp({
  //   email: "example@email.com",
  // });
};

export default function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [status, setStatus] = useState();

  console.log("status", status);

  const Status = () => {
    switch (status) {
      case "loading":
        return (
          <div className="spinner-border">
            <span className="visually-hidden">Laden...</span>
          </div>
        );
        break;
      case 500:
        return (
          <>
            <span className="text-danger">
              Er is iets misgegaan! Heb je nog geen account?{" "}
              <Link href="/signup">Meld je aan</Link>
            </span>
          </>
        );
      case 200:
        return (
          <p className="text-success">
            Account gevonden! Check je mail voor de login link.
          </p>
        );
        break;
    }
  };

  const onSubmit = (data) => {
    setStatus("loading");
    fetch("/api/login", { body: JSON.stringify(data), method: "POST" }).then(
      (res) => {
        setStatus(res.status);
      }
    );
  };
  return (
    <main className="d-flex center-content my-5">
      <div className="container d-flex center-content">
        <div className="row">
          <form
            style={{ width: "400px" }}
            method="post"
            className="p-5 card shadow"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>Log in</h1>
            <label className="input-group">
              <span aria-hidden="true" className="input-group-text">
                @
              </span>
              <span className="visually-hidden">Email</span>
              <input
                type="email"
                {...register("email")}
                placeholder="jouw@email.nl"
                aria-autocomplete="email"
                className="form-control"
              />
            </label>
            <button className="btn btn-primary mt-3">Log in</button>
            <div role="status">
              <Status />
            </div>
            <span>
              Nog geen account? <Link href="/signup">Meld je aan!</Link>{" "}
            </span>
          </form>
        </div>
      </div>
    </main>
  );
}
