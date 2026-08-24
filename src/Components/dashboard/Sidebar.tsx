import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="logo">
        <h2>DevHub</h2>
        <p>Internal Developer Platform</p>
      </div>

      {/* Navigation */}
      <nav>
        <ul>

          {/* Dashboard */}
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive
                  ? "sidebar-item active"
                  : "sidebar-item"
              }
            >
              🏠 Dashboard
            </NavLink>
          </li>

          {/* Applications */}
          <li>
            <NavLink
              to="/dashboard/applications"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-item active"
                  : "sidebar-item"
              }
            >
              📦 Applications
            </NavLink>
          </li>

          {/* Deployments */}
          <li>
            <NavLink
              to="/dashboard/deployments"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-item active"
                  : "sidebar-item"
              }
            >
              🚀 Deployments
            </NavLink>
          </li>

          {/* Kubernetes */}
          <li>
            <NavLink
              to="/dashboard/kubernetes"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-item active"
                  : "sidebar-item"
              }
            >
              ⚙️ Kubernetes
            </NavLink>
          </li>

          {/* Monitoring */}
          <li>
            <NavLink
              to="/dashboard/monitoring"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-item active"
                  : "sidebar-item"
              }
            >
              📊 Monitoring
            </NavLink>
          </li>

          {/* Logs */}
          <li>
            <NavLink
              to="/dashboard/logs"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-item active"
                  : "sidebar-item"
              }
            >
              📜 Logs
            </NavLink>
          </li>

          {/* Teams */}
          <li>
            <NavLink
              to="/dashboard/teams"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-item active"
                  : "sidebar-item"
              }
            >
              👥 Teams
            </NavLink>
          </li>

          {/* Settings */}
          <li>
            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-item active"
                  : "sidebar-item"
              }
            >
              ⚙️ Settings
            </NavLink>
          </li>

        </ul>
      </nav>

      {/* User */}
      <div className="sidebar-user">
        <div className="avatar">
          BM
        </div>

        <div>
          <p>Babatunde</p>
          <small>Administrator</small>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;