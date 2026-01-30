import styles from "./paragraph.module.css";

interface ParagraphProps {
    text: string[];
}

function Paragraph({text}: ParagraphProps) {
  console.log(text);
  
  return (
    <div className={styles.paragraphContainer}>
      {text.map((para, index) => (
        <p key={index} className={styles.paragraph}>{para}</p>
      ))}
    </div>
  )
}

export default Paragraph