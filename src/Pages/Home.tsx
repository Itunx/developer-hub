import Brand from "../Components/Login/Brand";
import Hero from "../Components/Login/Hero";
import FeatureGrid from "../Components/Login/FeatureGrid";
import LoginForm from "../Components/Login/LoginForm";
import PlatformStats from "../Components/Login/PlatformStats";
import PlatformDiagram from "../Components/Login/PlatformDiagram";

import "./Home.css";
import "../index.css";

function Home() {
    return (
        <div className="app-container">

            {/* LEFT SIDE */}
            <div className="left-panel">

                <Brand />

                <div className="content-section">

                    {/* HERO AREA */}
                    <div className="hero-layout">

                        <div className="hero-main">
                            <Hero />
                        </div>

                        <div className="hero-diagram">
                            <PlatformDiagram />
                        </div>

                    </div>

                    {/* FEATURES */}
                    <FeatureGrid />

                    {/* PLATFORM STATS */}
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