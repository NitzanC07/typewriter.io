import styles from "./sidebar.module.css";

function Sidebar() {
  const count = 100;
  return (
    <section className={styles.container}>
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
