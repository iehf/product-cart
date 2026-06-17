import classes from "@/components/Spinner/Spinner.module.css"

const Spinner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.spinner} />
    </div>
  );
}

export default Spinner;