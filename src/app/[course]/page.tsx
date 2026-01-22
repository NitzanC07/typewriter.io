import path from "path";
import fs from "fs";
import styles from "./page.module.css";
import { ModuleCourse } from "@/types/coursesTypes";

async function getCourseData(selectedCourse: string) {
  // * Function that read the data of the selected course as SSG method.
  // * Get the data from a local file inside the project structure.
  const filePath = path.join(process.cwd(), "/data", `/${selectedCourse}.json`);
  const fileData = fs.readFileSync(filePath, "utf-8");
  const courseData: ModuleCourse = JSON.parse(fileData);
  return courseData;
}

export default async function CoursePage( { params, } : { params: Promise<{ course: string }> } ) {
  const { course } = await params;

  // if (!params.course) {
  //   throw new Error("No course selected");    
  // }
  
  const courseData = await getCourseData(course);
  // const courseData = use(getCourseData)(params.course); // Use the use hook here
  console.log(courseData);

  
  return (
    <main className={styles.main}>
      <h2>שיעור 1</h2>
      <p>תוכן שיעור {courseData.courseId}</p>
    </main>
  );
}
