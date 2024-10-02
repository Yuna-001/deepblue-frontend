import { FC } from "react";

import Button from "../components/buttons/Button";
import googleLogoImg from "../assets/images/google-logo.png";
import PageLayout from "../components/layout/PageLayout";

const AuthPage: FC = () => {
  const handleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}
		&redirect_uri=${import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URI}
		&response_type=code
		&scope=email`;
  };

  return (
    <div className="h-full w-full bg-auth -z-10">
      <PageLayout>
        <h1 className="absolute top-[140px] title1 text-navy-100">
          당신의 마음,
          <br /> 딥블루와 함께
          <br /> 더 깊이 알아가세요.
        </h1>
        <Button onClick={handleLogin} isLoginButton>
          <div className="flex flex-row justify-center gap-2">
            <img src={googleLogoImg} />
            <div>Google 계정으로 가입</div>
          </div>
        </Button>
      </PageLayout>
    </div>
  );
};

export default AuthPage;
