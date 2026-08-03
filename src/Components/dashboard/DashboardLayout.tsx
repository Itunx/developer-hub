import  React  from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./DashboardLayout.css";

interface Props {
  children: React.ReactNode;
}

function DashboardLayout({ children }: Props) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;