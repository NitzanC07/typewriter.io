import Link from "next/link";
import styles from "./main-link.module.css";

interface MainLinkProps {
  text: string;
  urlLink: string;
}

function MainLink({ text, urlLink }: MainLinkProps) {
  return (
    <div className={styles.linkContainer}>
      <Link className={styles.mainLink} href={urlLink} target="_blank">
        {/* <button className="mainButton">{text}</button> */}
        {text}
      </Link>
    </div>
  );
}

export default MainLink;
