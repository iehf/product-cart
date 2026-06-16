import styles from "@/components/CartSummary.module.css";

interface CartSummaryProps {
  subtotal: number;
  tax: number;
  grandTotal: number;
  coupon: boolean;
  onCoupon: () => void;
  variant: "page" | "modal";
}

const CartSummary = ({ subtotal, tax, grandTotal, coupon, onCoupon, variant }: CartSummaryProps) => {
  const cls = variant === "modal" ? styles.modal : styles.page;

  return (
    <div className={`${styles.summary} ${cls}`}>
      <div className={styles.row}>
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className={styles.row}>
        <span>Sales Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className={styles.row}>
        <span>Coupon</span>
        {coupon ? (
          <span className={styles.couponApplied}>Applied</span>
        ) : (
          <button className={styles.couponBtn} onClick={onCoupon}>
            Add Coupon
          </button>
        )}
      </div>
      <div className={styles.divider} />
      <div className={styles.totalRow}>
        <span>Grand total</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>
      <button className={styles.checkout}>Check out</button>
    </div>
  );
};

export default CartSummary;
