import "./ClusterStatus.css";

const ClusterStatus = () => {
  return (
    <section className="cluster-status">

      <div className="cluster-header">
        <h2>Cluster Status</h2>

        <span className="status healthy">
          ● Healthy
        </span>
      </div>

      <div className="cluster-row">
        <span>Cluster</span>
        <strong>Production</strong>
      </div>

      <div className="cluster-row">
        <span>Nodes</span>
        <strong>6 / 6 Ready</strong>
      </div>

      <div className="cluster-row">
        <span>Pods</span>
        <strong>154 Running</strong>
      </div>

      <div className="metric">

        <div className="metric-top">
          <span>CPU Usage</span>
          <strong>42%</strong>
        </div>

        <div className="progress">
          <div className="progress-fill cpu"></div>
        </div>

      </div>

      <div className="metric">

        <div className="metric-top">
          <span>Memory</span>
          <strong>61%</strong>
        </div>

        <div className="progress">
          <div className="progress-fill memory"></div>
        </div>

      </div>

      <div className="metric">

        <div className="metric-top">
          <span>Storage</span>
          <strong>34%</strong>
        </div>

        <div className="progress">
          <div className="progress-fill storage"></div>
        </div>

      </div>

      <div className="cluster-row last-row">
        <span>Last Sync</span>
        <strong>15 sec ago</strong>
      </div>

    </section>
  );
};

export default ClusterStatus;