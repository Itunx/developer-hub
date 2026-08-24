import "./FeatureGrid.css";
import FeatureCard from "./FeatureCard";

const FeatureGrid = () => {
    return (
        <section className="feature-grid">

            <FeatureCard
                icon="☸️"
                title="Kubernetes"
                description="Manage clusters and workloads"
            />

            <FeatureCard
                icon="☁️"
                title="AWS Cloud"
                description="Infrastructure at scale, secure and reliable"
            />

            <FeatureCard
                icon="🏗️"
                title="Terraform"
                description="Infrastructure as Code, done right"
            />

            <FeatureCard
                icon="🐳"
                title="Docker Registry"
                description="Store and manage container images"
            />

            <FeatureCard
                icon="◉"
                title="GitHub"
                description="Source control and automation"
            />

            <FeatureCard
                icon="📊"
                title="Monitoring"
                description="Observability and real-time insights"
            />

        </section>
    );
};

export default FeatureGrid;