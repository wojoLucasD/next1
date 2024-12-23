import Link from "next/link";
import classes from "./main-header.module.css"
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";



export default function MainHeader() {

  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
        FOODIES
       </Link>
       
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">
            Foodies community
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
