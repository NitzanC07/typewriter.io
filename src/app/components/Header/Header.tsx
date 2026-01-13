import styles from "./header.module.css";
import Image from "next/image";
import Logo from "./logo-ts.png";

function Header() {
  return (
    <header className="page-header">
      <h1 className={styles.logo}><Image src={Logo} alt="Typewriter.io" width={210} /></h1>
      <p>אפשרויות</p>
    </header>
  );
}

export default Header;
