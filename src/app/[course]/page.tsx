import path from "path";
import fs from "fs";
import styles from "./page.module.css";

async function getCourseData(selectedCourse: string) {
  // * Function that read the data of the selected course as SSG method.
  // * Get the data from a local file inside the project structure.
  const filePath = path.join(process.cwd(), "/data", `/${selectedCourse}.json`);
  const fileData = fs.readFileSync(filePath, "utf-8");
  const courseData = JSON.parse(fileData);
  return courseData;
}

export default function CoursePage() {
  return (
    <main className={styles.main}>
      <h2>שיעור 1</h2>
      <p>תוכן שיעור</p>
    </main>
  );
}
