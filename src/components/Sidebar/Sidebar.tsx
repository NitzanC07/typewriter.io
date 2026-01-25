import Link from "next/link";
import styles from "./sidebar.module.css";

type SidebarProps = {
  isVisibility: boolean;
};

function Sidebar({ isVisibility }: SidebarProps) {
  
  return (
    <section className={`${styles.container}`}>
      <Link href="/">חזרה לדף הבית</Link>
    </section>
  );
}

export default Sidebar;
