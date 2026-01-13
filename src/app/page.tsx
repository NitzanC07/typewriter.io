"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {
      
  const [isSidebarVisibility, setSidebarVisibility] = useState(false); 

  return (
    <div className={styles.page}>
      
      <main className={styles.mainContent}>
        {Array.from({ length: 100 }).map((_, index) => (
          <div key={index} className={styles.test}>TEST</div>
        ))}
      </main>
      <nav className={styles.navigator}>
        <button className={styles.menuButton} onClick={() => setSidebarVisibility(!isSidebarVisibility)}>M</button>
      </nav>
      {isSidebarVisibility && <Sidebar isVisibility={isSidebarVisibility} />}
    </div>
  );
}
