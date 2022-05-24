import React, { useEffect } from "react";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";

const dashbord = () => {
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
};

export default dashbord;