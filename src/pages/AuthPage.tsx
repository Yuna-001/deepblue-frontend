import { FC } from "react";
import GoogleLoginButton from "../components/auth/GoogleLoginButton";

const AuthPage: FC = () => {
  return (
    <div className="h-full w-full bg-auth -z-10">
      <GoogleLoginButton />
    </div>
  );
};

export default AuthPage;
