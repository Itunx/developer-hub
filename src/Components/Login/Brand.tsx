import Logo from "./logo";
import "./styles/Brand.css";

const Brand = () => {
  return (
    <div className="brand">
      <Logo />

      <div className="brand-content">
        <h1>
          Developer <span>Hub</span>
        </h1>

        <p className="brand-subtitle">
          Internal Developer Platform
        </p>
      </div>
    </div>
  );
};

export default Brand;