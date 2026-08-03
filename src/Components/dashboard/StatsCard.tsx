import "./StatsCard.css";

type Props = {
  title: string;
  value: string;
  icon?: string;
};
function StatsCard({ title, value, icon }: Props) {
    return (
        <div className="stats-card">
            <div className="icon">{icon}</div>

            <h3>{value}</h3>

            <p>{title}</p>
        </div>
    );
}

export default StatsCard;