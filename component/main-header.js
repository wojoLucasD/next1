import Link from "next/link";
import classes from "./main-header.module.css"
import MainHeaderBackground from "./main-header-background";


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
            <Link href="/meals">Browse meals
            </Link>
          </li>
          <li>
            <Link href="/community">Foodie's community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
