import Link from "next/link";
import styles from "./card.module.css";
import { useEffect, useState } from "react";


interface CardProps {
    title?: number;
    content?: string;
    link?: string;
}

function Card( { title, content, link }: CardProps) {

  return (
    <div className={`${styles.card}`}>
      <div className={styles.imageContainer}></div>
      <h3 className={styles.title}>בניית אתרי אינטרנט</h3>
      <p className={styles.content}>
        בואו לכתוב את העבר, ולבנות את העתיד בדרך מרתקת ויצירתית של פיתוח אתר
        אינטרנט אישי.
      </p>
      <Link className={styles.link} href="/course">אני רוצה ללמוד</Link>
    </div>
  );
}

export default Card;
