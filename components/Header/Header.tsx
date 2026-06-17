import classes from "@/components/Header/Header.module.css";
import CartIcon from "@/components/Cart/CartIcon";
import logoImg from "@/public/logo.png";
import Image from "next/image";
import NavLink from "@/components/Header/NavLink";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <div className={classes.left}>
          <Image src={logoImg} alt="logo" className={classes.logo} />
          <nav className={classes.nav}>
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
