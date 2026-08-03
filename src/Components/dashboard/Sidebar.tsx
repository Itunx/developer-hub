import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>DevHub</h2>
        <p>Internal Developer Platform</p>
      </div>

      <nav>

        <ul>

          <li>🏠 Dashboard</li>

          <li>📦 Applications</li>

          <li>🚀 Deployments</li>

          <li>☸ Kubernetes</li>

          <li>📊 Monitoring</li>

          <li>📜 Logs</li>

          <li>👥 Teams</li>

          <li>⚙ Settings</li>

        </ul>

      </nav>

      <div className="sidebar-user">
        <div className="avatar">BM</div>
        <div>
            <p>Babatunde</p>
            <small>Administrator</small>
        </div>
        
      </div>

    </aside>
  );
}

export default Sidebar;