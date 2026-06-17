import Link from "next/link";
import classes from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={classes.wrapper}>
      <h1 className={classes.title}>404</h1>
      <p className={classes.text}>Page not found</p>

      <Link href="/" className={classes.link}>
        Go Home
      </Link>
    </section>
  );
}