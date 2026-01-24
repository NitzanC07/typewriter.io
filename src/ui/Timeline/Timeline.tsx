import styles from "./timeline.module.css";

function Timeline() {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        <ul className={styles.timelinePoints}>
          {[...Array(3)].map((_, index) => (
            <li className={styles.checkpoints} key={index}>
              {index % 2 === 0 ? (
                <div className={styles.dot1}></div>
              ) : (
                <div className={styles.dot2}></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Timeline;
