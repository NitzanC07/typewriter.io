import styles from "./page.module.css";
// import getCourseData from "@/helpers/GetCourseData";
import courseData from "@/data/course-web-development.json";
import Timeline from "@/ui/Timeline/Timeline";
import Paragraph from "@/components/Paragraph/Paragraph";

export default function CoursePage() {
  // const { course } = await params;
  // const courseData = await getCourseData(course);
  
 
  return (
    <section className={styles.main}>

      <h2>{courseData.courseContent[0].lessons[0].sections[0].sectionTitle}</h2>
      

      <Timeline />
    </section>
  );
}
