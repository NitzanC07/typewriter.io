import styles from "./sidebar.module.css";

type SidebarProps = {
  isVisibility: boolean;
};

function Sidebar({isVisibility}: SidebarProps) {
  const count = 100;
  return (
    <section className={`${styles.container} ${!isVisibility ? "exit" : ""}`} style={{ display: isVisibility ? "block" : "none" }}>
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
