'use client';
import styles from "./header.module.css";
import Image from "next/image";
import Logo from "@/images/logos/logo-ts.png";
import Icon from "@/images/logos/icon.png";

type HeaderProps = {
  username?: string;
}

function Header({username}: HeaderProps) {
   
  return (
    <header className="page-header">
      <h1 className={styles.logo}><Image src={Logo} alt="Typewriter.io" width={210} /></h1>
      <div className={styles.user}>
        <h2>{username}</h2>
        <Image src={Icon} alt="Typewriter.io" width={50} />
      </div>
    </header>
  );
}

export default Header;
