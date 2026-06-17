import classes from "@/components/Cart/CartSummary.module.css";

interface CartSummaryProps {
  subtotal: number;
  tax: number;
  grandTotal: number;
  coupon: boolean;
  onCoupon: () => void;
  variant: "page" | "modal";
}

const CartSummary = ({ subtotal, tax, grandTotal, coupon, onCoupon, variant }: CartSummaryProps) => {
  const cls = variant === "modal" ? classes.modal : classes.page;

  return (
    <div className={`${classes.summary} ${cls}`}>
      <div className={classes.row}>
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className={classes.row}>
        <span>Sales Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className={classes.row}>
        <span>Coupon</span>
        {coupon ? (
          <span className={classes.couponApplied}>Applied</span>
        ) : (
          <button className={classes.couponBtn} onClick={onCoupon}>
            Add Coupon
          </button>
        )}
      </div>
      <div className={classes.divider} />
      <div className={classes.totalRow}>
        <span>Grand total</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>
      <button className={classes.checkout}>Check out</button>
    </div>
  );
};

export default CartSummary;
