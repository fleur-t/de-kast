"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [membershipNumber, setMembershipNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-10 text-slate-900">
      <section className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
            De Kast
          </p>
          <h1 className="text-3xl font-bold tracking-tight">Welkom</h1>
          <p className="mt-2 text-slate-600">
            Log in met je abonnementnummer.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-xl bg-emerald-50 p-4 text-emerald-800">
            Je bent ingelogd met nummer <strong>{membershipNumber}</strong>.
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="membership-number">
                Abonnement nummer
              </label>
              <input
                autoComplete="off"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-3 focus:ring-emerald-100"
                id="membership-number"
                inputMode="numeric"
                onChange={(event) => setMembershipNumber(event.target.value)}
                placeholder="Bijvoorbeeld 123456"
                required
                value={membershipNumber}
              />
            </div>
            <button className="w-full rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-3 focus:ring-emerald-200" type="submit">
              Inloggen
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
