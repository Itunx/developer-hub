import LoginForm from "./Components/Login/LoginForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="left-panel">
        <div className="brand">
          <h1>Developer Hub</h1>
          <p>Internal Developer Platform</p>
        </div>

        <div className="hero-content">
          <h2>Build. Deploy. Scale.</h2>

          <p>
            A unified platform for developers to build amazing products,
            ship faster, and operate with confidence.
          </p>
        </div>
      </div>

      <div className="right-panel">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;