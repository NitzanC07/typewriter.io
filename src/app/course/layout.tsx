"use client";
import styles from "./layoutCourse.module.css";
import { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarVisibility, setSidebarVisibility] = useState(false);
  return (
    <div className="page-frame">
      <Header
        setSidebarVisibility={setSidebarVisibility}
        isSidebarVisibility={isSidebarVisibility}
      />

      <main className="main">{children}</main>

      {isSidebarVisibility && <Sidebar isVisibility={isSidebarVisibility} />}
    </div>
  );
}
