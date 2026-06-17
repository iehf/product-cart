"use client";

import classes from "./error.module.css";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <section className={classes.wrapper}>
      <h1 className={classes.title}>Something went wrong</h1>

      <p className={classes.text}>We could not load this page.</p>

      {process.env.NODE_ENV === "development" && (
        <details>
          <summary>Error details</summary>
          <pre>{error.message}</pre>
        </details>
      )}

      <button type="button" onClick={reset} className={classes.button}>
        Try again
      </button>
    </section>
  );
}
