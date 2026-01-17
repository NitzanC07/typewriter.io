import { useState } from "react";
import styles from "./popupData.module.css";
import Link from "next/link";

interface PopupDataProps {
  handlePopup: () => void;
  title: string;
  content: string;
}

function PopupData({
  handlePopup,
  title,
  content
}: PopupDataProps) {
  
  
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <button className={styles.closeBtn} onClick={handlePopup}>
          X
        </button>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{content}</p>
        <Link className="secodaryButton" href="/course">להתחיל ללמוד</Link>
      </section>
    </section>
  );
}

export default PopupData;
