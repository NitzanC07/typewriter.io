import styles from "./popupData.module.css";
import Link from "next/link";
import closeIcon from "@/images/icons/closeButton_white.svg";
import Image from "next/image";

interface PopupDataProps {
  handlePopup: () => void;
  title: string;
  content: string;
  activate: boolean;
}

function PopupData({ handlePopup, title, content, activate }: PopupDataProps) {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <button className={styles.closeBtn} onClick={handlePopup}>
          <Image src={closeIcon} alt="close" width={40} />
        </button>
        <div className={styles.imageContainer}></div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{content}</p>
        <div className={styles.linksBox}>
          <Link href="/course">
            <button
              className={`secodaryButton ${activate ? "" : "secodaryButtonDisabled"}`}
              disabled={!activate}
            >
              להתחיל ללמוד
            </button>
          </Link>
          {!activate &&
            <Link href="https://mrng.to/l12AxCIwPA" target="_blank">
              <button className={`secodaryButton`}>לרכישת הקורס</button>
            </Link>
          }
        </div>
      </section>
    </section>
  );
}

export default PopupData;
