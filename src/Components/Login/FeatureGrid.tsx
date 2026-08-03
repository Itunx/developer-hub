import "./FeatureGrid.css";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "☸️",
    title: "Kubernetes Native",
    description: "Deploy and scale containers with ease.",
  },
  {
    icon: "⬢",
    title: "Terraform Automation",
    description: "Infrastructure as Code, done right.",
  },
  {
    icon: "AWS",
    title: "AWS Cloud Integration",
    description: "Manage cloud infrastructure effortlessly.",
  },
  {
    icon: "GH",
    title: "GitHub Integration",
    description: "Connect repositories and automate delivery.",
  },
];

const FeatureGrid = () => {
  return (
    <div className="feature-list">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeatureGrid;