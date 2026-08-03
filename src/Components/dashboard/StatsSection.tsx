import "./StatsSection.css";
import StatsCard from "./StatsCard";

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        <StatsCard
          title="Applications"
          value="24"
          icon="📦"
        />

        <StatsCard
          title="Deployments"
          value="156"
          icon="🚀"
        />

        <StatsCard
          title="Kubernetes Clusters"
          value="6"
          icon="☸️"
        />

        <StatsCard
          title="System Health"
          value="99.9%"
          icon="💚"
        />
      </div>
    </section>
  );
}

export default StatsSection;