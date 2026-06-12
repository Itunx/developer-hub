import type { ReactNode } from "react";
 import Input from "../../Input";
 import Button from "../../Button";
import SocialLogin from "./SocialLogin";

const Card = ({ children }: { children: ReactNode }) => (
  <div className="card">{children}</div>
);

const LoginForm = () => {
  return (
    <Card>
      <h2>
        Welcome Back 👋
      </h2>

      <p>
        Sign in to continue
      </p>

      <form>
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
        />

        <Input
          label="Password"
          type="password"
          placeholder="********"
        />

        <Button
          text="Sign In"
          type="submit"
        />
      </form>

      <SocialLogin />
    </Card>
  );
};

export default LoginForm;