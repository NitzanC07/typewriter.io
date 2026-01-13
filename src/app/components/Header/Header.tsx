'use client';
import styles from "./header.module.css";
import Image from "next/image";
import Logo from "@/images/logos/logo-ts.png";

type HeaderProps = {
  setSidebarVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarVisibility: boolean;
}

function Header({isSidebarVisibility, setSidebarVisibility}: HeaderProps) {
   
  const handleClick = () => {
    console.log("clicked");
    setSidebarVisibility(!isSidebarVisibility);
  };

  return (
    <header className="page-header">
      <h1 className={styles.logo}><Image src={Logo} alt="Typewriter.io" width={210} /></h1>
      <button onClick={handleClick}>אפשרויות</button>
    </header>
  );
}

export default Header;
