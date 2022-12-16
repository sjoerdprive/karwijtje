'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignupPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) =>
    fetch("/api/signup", { body: JSON.stringify(data), method: "POST" });

  return (
    <main className="d-flex center-content my-5">
      <div className="container d-flex center-content">
        <div className="row">
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "400px" }}
            className="p-5 card shadow"
          >
            <h1>Meld je aan</h1>
            <p>
              We gebruiken jouw email adres alleen om jouw account te
              bevestigen. Je kan zelf kiezen welke berichten je krijgt in je
              <Link href="/account"> accountpagina</Link>.
            </p>
            <div className="mb-2">
              <label className="form-label" htmlFor="email-field">
                Email
              </label>
              <input
                id="email-field"
                {...register("email", {
                  required: "Email adres is verplicht",
                })}
                aria-invalid={errors.email ? "true" : "false"}
                type="email"
                className="form-control"
              />
              {errors.email && (
                <p className="text-danger" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <button className="btn btn-primary">Verstuur bevestiging</button>
            <p>
              Heb je al een account? <Link href="/login">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
