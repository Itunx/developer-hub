import "./RecentDeployment.css";

const deployments = [
  {
    app: "payment-service",
    environment: "Production",
    status: "Success",
    user: "Babatunde",
    time: "2 min ago",
  },
  {
    app: "auth-service",
    environment: "Staging",
    status: "Success",
    user: "John",
    time: "15 min ago",
  },
  {
    app: "notification-api",
    environment: "Production",
    status: "Failed",
    user: "David",
    time: "45 min ago",
  },
  {
    app: "frontend-web",
    environment: "Production",
    status: "Success",
    user: "Sarah",
    time: "1 hr ago",
  },
];

const RecentDeployments = () => {
  return (
    <section className="recent-deployments">
      <div className="deployments-header">
        <h2>Recent Deployments</h2>
        <button>View All</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Application</th>
            <th>Environment</th>
            <th>Status</th>
            <th>Deployed By</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {deployments.map((deployment, index) => (
            <tr key={index}>
              <td>{deployment.app}</td>
              <td>{deployment.environment}</td>
              <td>
                <span
                  className={
                    deployment.status === "Success"
                      ? "status success"
                      : "status failed"
                  }
                >
                  {deployment.status}
                </span>
              </td>
              <td>{deployment.user}</td>
              <td>{deployment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RecentDeployments;