"use client";
import styles from "./page.module.css";

export default function Home() {
      
  return (
    <div className={styles.page}>
      <main className={styles.mainContent}>
        {Array.from({ length: 100 }).map((_, index) => (
          <div key={index} className={styles.test}>TEST</div>
        ))}
      </main>
    </div>
  );
}
