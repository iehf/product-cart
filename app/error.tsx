"use client";

import styles from "./error.module.css";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Something went wrong</h1>

      <p className={styles.text}>We could not load this page.</p>

      {process.env.NODE_ENV === "development" && (
        <details>
          <summary>Error details</summary>
          <pre>{error.message}</pre>
        </details>
      )}

      <button type="button" onClick={reset} className={styles.button}>
        Try again
      </button>
    </section>
  );
}
