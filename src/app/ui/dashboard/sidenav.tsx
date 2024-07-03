import Link from "next/link";
import NavLinks from "./nav-links";
import styles from "./sidenav.module.scss";

export default function SideNav() {
  return (
    <div className={styles.container}>
      <Link className={styles.logoLink} href="/">
        <div>DS</div>
      </Link>
      <div className={styles.navLinksContainer}>
        <NavLinks />
        <div className={styles.placeholderBlock}></div>
      </div>
    </div>
  );
}
