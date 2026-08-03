
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="social-login">
       <button className="signin-btn" onClick={() => navigate("/dashboard")}>Sign In</button>
       <p>Or </p>
      <button>Continue with GitHub</button>

      <button>Continue with Google</button>

      <p className="signup-text">
        Don't have an account?
        <button className="signup-btn">
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;

    