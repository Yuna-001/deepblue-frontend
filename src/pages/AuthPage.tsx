import { FC } from "react";
import Button from "../components/buttons/Button";

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
      <h1 className="absolute top-[140px]">
        당신의 마음,
        <br /> 딥블루와 함께
        <br /> 더 깊이 알아가세요.
      </h1>
      <Button onClick={handleLogin} additionalClasses="bg-navy-100">
        <div className="flex flex-row justify-center gap-2">
          <div>Google 계정으로 가입</div>
        </div>
      </Button>
    </div>
  );
};

export default AuthPage;
