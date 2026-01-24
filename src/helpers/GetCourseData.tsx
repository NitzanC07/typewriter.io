import path from "path";
import fs from "fs";
import { ModuleCourse } from "@/types/coursesTypes";

export default async function getCourseData(selectedCourse: string) {
  // * Function that read the data of the selected course as SSG method.
  // * Get the data from a local file inside the project structure.
  const filePath = path.join(process.cwd(), "/src/data", `/${selectedCourse}.json`);
  const fileData = fs.readFileSync(filePath, "utf-8");
  const courseData: ModuleCourse = JSON.parse(fileData);
  return courseData;
}