import Sidebar from "../dashboard/Sidebar";
import Navbar from "../dashboard/Navbar";
import StatsSction from "../dashboard/StatsSection";
import "./DashboardPage.css";
import StatsSection from "../dashboard/StatsSection";
import ClusterStatus from "../dashboard/ClusterStatus";
import RecentDeployment from "../dashboard/RecentDeployment";
import ActivityFeed from "../dashboard/ActivityFeed";

function DashboardPage() {
  return (
    <div className="dashboard">


     <div className="dashboard-main">
    <div className="dashboard-content">

        <StatsSection />

        <div className="top-section">
            <ClusterStatus />
            <ActivityFeed />
        </div>

        <RecentDeployment />

    </div>
</div>
    </div>
  );
}

export default DashboardPage;