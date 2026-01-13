import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>שגיאה 404</h2>
        <p>עמוד לא נמצא</p>
      </main>
    </div>
  );
}