import Link from "next/link";
import styles from "./sidebar.module.css";

type SidebarProps = {
  isVisibility: boolean;
};

function Sidebar({isVisibility}: SidebarProps) {
  const count = 100;
  return (
    <section className={`${styles.container}`}>
      <Link href="/">חזרה לדף הבית</Link>
      <h3>תוכן עניינים</h3>
      <ul>
        {Array.from({ length: count }).map((_, index) => (
          <li key={index}>שיעור {index + 1}</li>
        ))}
      </ul>
    </section>
  );
}

export default Sidebar;
