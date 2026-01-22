import styles from "./messageBox.module.css";

interface MessageBoxProps {
    text: string
}

function MessageBox({text}: MessageBoxProps) {
  return (
    <div className={styles.messageBox}>
        <p>{text}</p>
    </div>
  )
}

export default MessageBox;
