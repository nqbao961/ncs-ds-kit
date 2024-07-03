import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <h1>Welcome</h1>
      <Link href="/dashboard">
        <span>Go to dashboard</span>
      </Link>
    </main>
  );
}
