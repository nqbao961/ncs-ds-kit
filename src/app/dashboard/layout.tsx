import SideNav from "../ui/dashboard/sidenav";
import styles from "./dashboard.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navContainer}>
        <SideNav />
      </div>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
}
