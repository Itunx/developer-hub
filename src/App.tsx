import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/Login/LoginForm";
import DashboardLayout from "./Components/dashboard/DashboardLayout";
 import DashboardPage from "./Components/dashboard/dashboardPage";
import "./App.css";
import "./index.css";
import Home from "./Pages/Home";
import Applications from "./Pages/Applications";
import Deployments from "./Pages/Deployments";

export default function App() {
  return (
    <Router>
     <Routes>

  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/dashboard"
    element={
      <DashboardLayout>
        <DashboardPage />
      </DashboardLayout>
    }
  />

  <Route
    path="/dashboard/applications"
    element={
      <DashboardLayout>
        <Applications />
      </DashboardLayout>
    }
  />

  <Route
    path="/dashboard/deployments"
    element={
      <DashboardLayout>
        <Deployments />
      </DashboardLayout>
    }
  />

</Routes>
    </Router>
  );
}