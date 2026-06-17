import styles from "@/components/Header/Header.module.css";
import CartIcon from "@/components/Cart/CartIcon";
import logoImg from "@/public/logo.png";
import Image from "next/image";
import NavLink from "@/components/Header/NavLink";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Image src={logoImg} alt="logo" className={styles.logo} />
          <nav className={styles.nav}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/cart">Cart</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>
        </div>
        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
