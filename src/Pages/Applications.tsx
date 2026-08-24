import "./Applications.css";

export default function Applications() {
  return (
    <div className="applications-page">
      <div className="applications-header">
        <div>
          <h1>Applications</h1>
          <p>Manage, monitor and deploy your applications</p>
        </div>

        <button className="new-application-btn">
          + New Application
        </button>
      </div>

      <div className="application-stats">
        <div className="application-stat-card">
          <span>📦</span>
          <h2>24</h2>
          <p>Total Applications</p>
        </div>

        <div className="application-stat-card">
          <span>🟢</span>
          <h2>22</h2>
          <p>Running</p>
        </div>

        <div className="application-stat-card">
          <span>⏸️</span>
          <h2>1</h2>
          <p>Paused</p>
        </div>

        <div className="application-stat-card">
          <span>🔴</span>
          <h2>1</h2>
          <p>Failed</p>
        </div>
      </div>

      <div className="applications-table-container">
        <div className="applications-toolbar">
          <input
            type="text"
            placeholder="Search applications..."
          />

          <select>
            <option>All Environments</option>
            <option>Production</option>
            <option>Development</option>
            <option>Staging</option>
          </select>

          <select>
            <option>All Status</option>
            <option>Running</option>
            <option>Paused</option>
            <option>Failed</option>
          </select>
        </div>

        <table className="applications-table">
          <thead>
            <tr>
              <th>Application</th>
              <th>Environment</th>
              <th>Status</th>
              <th>Version</th>
              <th>Last Deployment</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <strong>payment-service</strong>
                <span>REST API Service</span>
              </td>
              <td>Production</td>
              <td>
                <span className="status running">● Running</span>
              </td>
              <td>v2.4.1</td>
              <td>2 min ago</td>
              <td>
                <button>▶</button>
                <button>⋮</button>
              </td>
            </tr>

            <tr>
              <td>
                <strong>user-service</strong>
                <span>User Management</span>
              </td>
              <td>Production</td>
              <td>
                <span className="status running">● Running</span>
              </td>
              <td>v1.8.3</td>
              <td>15 min ago</td>
              <td>
                <button>▶</button>
                <button>⋮</button>
              </td>
            </tr>

            <tr>
              <td>
                <strong>analytics-api</strong>
                <span>Analytics Service</span>
              </td>
              <td>Development</td>
              <td>
                <span className="status running">● Running</span>
              </td>
              <td>v0.9.7</td>
              <td>45 min ago</td>
              <td>
                <button>▶</button>
                <button>⋮</button>
              </td>
            </tr>

            <tr>
              <td>
                <strong>frontend-web</strong>
                <span>React Web Application</span>
              </td>
              <td>Production</td>
              <td>
                <span className="status running">● Running</span>
              </td>
              <td>v3.2.0</td>
              <td>1 hour ago</td>
              <td>
                <button>▶</button>
                <button>⋮</button>
              </td>
            </tr>

            <tr>
              <td>
                <strong>notification-service</strong>
                <span>Notification Microservice</span>
              </td>
              <td>Staging</td>
              <td>
                <span className="status paused">● Paused</span>
              </td>
              <td>v1.1.0</td>
              <td>3 hours ago</td>
              <td>
                <button>▶</button>
                <button>⋮</button>
              </td>
            </tr>

            <tr>
              <td>
                <strong>reporting-service</strong>
                <span>Reporting & Export</span>
              </td>
              <td>Production</td>
              <td>
                <span className="status failed">● Failed</span>
              </td>
              <td>v1.0.5</td>
              <td>5 hours ago</td>
              <td>
                <button>▶</button>
                <button>⋮</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}