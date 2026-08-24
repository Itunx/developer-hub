
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-content">
      <div className="hero-badge">
        ✨ One Platform. Endless Possibilities.
      </div>

<h2 className="hero-title">
    Build.
    <br />
    Deploy.
    <br />
    Observe.
    <br />
    <span className="gradient-text">
        Scale.
    </span>
</h2>

      <p className="hero-description">
        A unified platform for developers to build
        <br />
        amazing products, ship faster, and operate
        <br />
        <span className="villain-description">
          with confidence.
        </span>
      </p>
    </div>
  );
};

export default Hero;