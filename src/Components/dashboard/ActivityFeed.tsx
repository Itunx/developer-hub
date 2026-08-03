import "./ActivityFeed.css";

const activities = [
  {
    title: "payment-service deployed",
    description: "Deployment completed successfully",
    time: "2 min ago",
    type: "success",
  },
  {
    title: "Cluster autoscaled",
    description: "Scaled from 6 → 7 nodes",
    time: "8 min ago",
    type: "info",
  },
  {
    title: "Pod restarted",
    description: "payment-service-7d6f8",
    time: "15 min ago",
    type: "warning",
  },
  {
    title: "Namespace created",
    description: "analytics",
    time: "30 min ago",
    type: "info",
  },
  {
    title: "Database backup",
    description: "Backup completed successfully",
    time: "1 hr ago",
    type: "success",
  },
];

function ActivityFeed() {
  return (
    <section className="activity-feed">
      <div className="activity-header">
        <h2>Activity Feed</h2>
        <button>View All</button>
      </div>

      {activities.map((activity, index) => (
        <div className="activity-card" key={index}>
          <div className={`activity-dot ${activity.type}`}></div>

          <div className="activity-info">
            <h4>{activity.title}</h4>
            <p>{activity.description}</p>
          </div>

          <span>{activity.time}</span>
        </div>
      ))}
    </section>
  );
}

export default ActivityFeed;