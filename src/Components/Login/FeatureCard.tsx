type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        {icon}
      </div>

      <div className="feature-content">
        <h3>{title}</h3>
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default FeatureCard;