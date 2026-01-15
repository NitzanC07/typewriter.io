import styles from "./popup.module.css";

type PopupProps = {
  handlePopup: () => void;
  title: string;
  content: string;
};
function Popup({ handlePopup, title, content }: PopupProps) {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <button className={styles.closeBtn} onClick={handlePopup}>X</button>
        <h1>{title}</h1>
        <p>{content}</p>
      </section>
    </section>
  );
}

export default Popup;
