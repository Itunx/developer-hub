import "./Deployments.css";

export default function Deployments() {
  return (
    <div className="deployments-page">

      {/* Header */}
      <div className="deployments-header">
        <div>
          <h1>Deployments</h1>
          <p>Track, manage and monitor your application deployments</p>
        </div>

        <button className="new-deployment-btn">
          + New Deployment
        </button>
      </div>

      {/* Deployment statistics */}
      <div className="deployment-stats">

        <div className="deployment-stat-card">
          <span>🚀</span>
          <h2>156</h2>
          <p>Total Deployments</p>
        </div>

        <div className="deployment-stat-card">
          <span>🟢</span>
          <h2>149</h2>
          <p>Successful</p>
        </div>

        <div className="deployment-stat-card">
          <span>🔵</span>
          <h2>5</h2>
          <p>Running</p>
        </div>

        <div className="deployment-stat-card">
          <span>🔴</span>
          <h2>2</h2>
          <p>Failed</p>
        </div>

      </div>

      {/* Deployment list */}
      <div className="deployments-container">

        {/* Search and filters */}
        <div className="deployments-toolbar">

          <input
            type="text"
            placeholder="Search deployments..."
          />

          <select>
            <option>All Environments</option>
            <option>Production</option>
            <option>Development</option>
            <option>Staging</option>
          </select>

          <select>
            <option>All Status</option>
            <option>Successful</option>
            <option>Running</option>
            <option>Failed</option>
          </select>

        </div>

        {/* Deployment table */}
        <table className="deployments-table">

          <thead>
            <tr>
              <th>Application</th>
              <th>Version</th>
              <th>Environment</th>
              <th>Status</th>
              <th>Deployed By</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>
                <strong>payment-service</strong>
                <span>REST API Service</span>
              </td>

              <td>v2.4.1</td>

              <td>Production</td>

              <td>
                <span className="deployment-status success">
                  ● Successful
                </span>
              </td>

              <td>Babatunde</td>

              <td>2 min ago</td>

              <td>
                <button className="view-btn">
                  View
                </button>
              </td>
            </tr>


            <tr>
              <td>
                <strong>user-service</strong>
                <span>User Management</span>
              </td>

              <td>v1.8.3</td>

              <td>Production</td>

              <td>
                <span className="deployment-status success">
                  ● Successful
                </span>
              </td>

              <td>Sarah</td>

              <td>15 min ago</td>

              <td>
                <button className="view-btn">
                  View
                </button>
              </td>
            </tr>


            <tr>
              <td>
                <strong>analytics-api</strong>
                <span>Analytics Service</span>
              </td>

              <td>v0.9.7</td>

              <td>Development</td>

              <td>
                <span className="deployment-status running">
                  ● Running
                </span>
              </td>

              <td>Michael</td>

              <td>45 min ago</td>

              <td>
                <button className="view-btn">
                  View
                </button>
              </td>
            </tr>


            <tr>
              <td>
                <strong>frontend-web</strong>
                <span>React Web Application</span>
              </td>

              <td>v3.2.0</td>

              <td>Production</td>

              <td>
                <span className="deployment-status success">
                  ● Successful
                </span>
              </td>

              <td>Babatunde</td>

              <td>1 hour ago</td>

              <td>
                <button className="view-btn">
                  View
                </button>
              </td>
            </tr>


            <tr>
              <td>
                <strong>reporting-service</strong>
                <span>Reporting Service</span>
              </td>

              <td>v1.0.5</td>

              <td>Production</td>

              <td>
                <span className="deployment-status failed">
                  ● Failed
                </span>
              </td>

              <td>David</td>

              <td>5 hours ago</td>

              <td>
                <button className="view-btn">
                  View
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}