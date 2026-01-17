"use client";
import styles from "./header.module.css";
import Image from "next/image";
import Logo from "@/images/logos/logo-ts.png";

interface HeaderProps {
  setSidebarVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarVisibility: boolean;
};

function Header({ setSidebarVisibility, isSidebarVisibility }: HeaderProps) {
  return (
    <header className="page-header">
      <h1 className={styles.logo}>
        <Image src={Logo} alt="Typewriter.io" width={210} />
      </h1>
      <div className={styles.user}>
        <button
          className={styles.menuButton}
          onClick={() => setSidebarVisibility(!isSidebarVisibility)}
        >
          M
        </button>
      </div>
    </header>
  );
}

export default Header;
