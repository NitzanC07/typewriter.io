import Link from "next/link";
import styles from "./card.module.css";
import { useEffect, useState } from "react";


type CardProps = {
    title: number;
    content?: string;
    link?: string;
}

function Card( { title, content, link }: CardProps) {

  return (
    <div className={`${styles.card}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>
        בואו לכתוב את העבר, ולבנות את העתיד בדרך מרתקת ויצירתית של פיתוח אתר
        אינטרנט אישי.
      </p>
      <Link className={styles.link} href="/course">אני רוצה ללמוד</Link>
    </div>
  );
}

export default Card;
