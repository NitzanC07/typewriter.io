import Link from "next/link";
import styles from "./main-link.module.css";

interface MainLinkProps {
  text: string;
  urlLink: string;
}

function MainLink({ text, urlLink }: MainLinkProps) {
  return (
    <Link 
      className={styles.mainLink}
      href={urlLink} 
      target="_blank" 
    >
      <button className="mainButton">{text}</button>
    </Link>
  );
}

export default MainLink;
