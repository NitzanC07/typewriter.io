import styles from "./paragraph.module.css";

interface ParagraphProps {
    text: string;
}

function Paragraph({text}: ParagraphProps) {
  return (
    <p className={styles.paragraph}>{text}</p>
  )
}

export default Paragraph