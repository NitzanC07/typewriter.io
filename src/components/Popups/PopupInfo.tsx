import styles from "./popupInfo.module.css";
import Link from "next/link";
import closeIcon from "@/images/icons/closeButton_white.svg";
import Image from "next/image";
import CourseInfo from "@/types/courseInfo";

interface PopupDataProps {
  courseInfo: CourseInfo;
  closePopup: () => void;
}

function PopupInfo({ courseInfo, closePopup }: PopupDataProps) {

  console.log(courseInfo);
  

  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <button className={styles.closeBtn} onClick={closePopup}>
          <Image src={closeIcon} alt="close" width={40} />
        </button>
        <div className={styles.imageContainer}></div>
        <h2 className={styles.title}>{courseInfo.title}</h2>
        <p className={styles.description}>{courseInfo.description}</p>
        <div className={styles.linksBox}>
          <Link href={`/${courseInfo.id}`}>
            <button
              className={`secodaryButton ${courseInfo.activate ? "" : "secodaryButtonDisabled"}`}
              disabled={!courseInfo.activate}
            >
              להתחיל ללמוד
            </button>
          </Link>
          {!courseInfo.activate &&
            <Link href="https://mrng.to/l12AxCIwPA" target="_blank">
              <button className={`secodaryButton`}>לרכישת הקורס</button>
            </Link>
          }
        </div>
      </section>
    </section>
  );
}

export default PopupInfo;
