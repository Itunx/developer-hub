import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/Login/LoginForm";
import DashboardLayout from "./Components/dashboard/DashboardLayout";
 import DashboardPage from "./Components/dashboard/dashboardPage";
import "./App.css";
import "./index.css";

function Home() {
  return (
    <div className="app-container">

      {/* LEFT SIDE */}
      <div className="left-panel">

      <div className="brand">
  <h1>
    Developer <span>Hub</span>
  </h1>

  <p className="brand-subtitle">
    Internal Developer Platform
  </p>
</div>
        <div className="hero-content">

          <div className="hero-badge">
            ✨ One Platform. Endless Possibilities.
          </div>

          <h2 className="hero-title">
            Build.
            <br />
            Deploy.
            <br />
            <span className="gradient-text">Scale.</span>
          </h2>
<p className="hero-description">
  A unified platform for developers to build<br /> amazing
  
  products, ship faster, and operate
  <br />
  <span className="villain-description">with confidence.</span>
</p>
          <div className="feature-list">

            <div className="feature-card">
              <div className="feature-icon">☸️</div>

              <div>
                <h3>Kubernetes Native</h3>
                <h5>Deploy and scale containers with ease.</h5>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⬢</div>

              <div>
                <h3>Terraform Automation</h3>
                <h5>Infrastructure as Code, done right.</h5>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">AWS</div>

              <div>
                <h3>AWS Cloud Integration</h3>
                <h5>Manage cloud infrastructure effortlessly.</h5>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">GH</div>

              <div>
                <h3>GitHub Integration</h3>
                <h5>Connect repositories and automate delivery.</h5>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="right-panel">
        <LoginForm />
      </div>

    </div>
  );
}

// function Dashboard() {
//   return <h1>Dashboard 🚀</h1>;
// }

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout><DashboardPage/></DashboardLayout>} />
      </Routes>
    </Router>
  );
}