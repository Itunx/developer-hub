import Brand from "../Components/Login/Brand";
import Hero from "../Components/Login/Hero";
import FeatureGrid from "../Components/Login/FeatureGrid";
import LoginForm from "../Components/Login/LoginForm";

import "../App.css";
import "../index.css";
import PlatformStats from "../Components/Login/PlatformStats";
import PlatformDiagram from "../Components/Login/PlatformDiagram";

function Home() {
  return (
    <div className="app-container">

      {/* LEFT SIDE */}
   <div className="left-panel">

    <Brand />

    <div className="content-section">

        <div className="hero-container">
            <Hero />
            <PlatformDiagram />
        </div>

        <FeatureGrid />

        <PlatformStats />

    </div>

</div>
      {/* RIGHT SIDE */}
      <div className="right-panel">
        <LoginForm />
      </div>

    </div>
  );
}

export default Home;



