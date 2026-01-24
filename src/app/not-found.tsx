import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>שגיאה 404</h2>
        <p>עמוד לא נמצא</p>
        <Link href="/">חזרה לדף הבית</Link>
      </main>
    </div>
  );
}