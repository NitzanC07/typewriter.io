import styles from './titleText.module.css';

interface TitleTextProps {
    title: string;
}

function TitleText({ title }: TitleTextProps) {
  return (
    <h3 className={styles.titleText}>{title}</h3>
  )
}

export default TitleText