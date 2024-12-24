import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/buttons/Button";
import googleLogoImg from "../../assets/images/onboarding/google-logo.png";
import OnboardingLayout from "../../components/layout/OnboardingLayout";

const AuthPage: FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
    // client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}
    // &redirect_uri=${import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URI}
    // &response_type=code
    // &scope=email`;

    const token = localStorage.getItem("token");

    if (token === null) {
      navigate("/tutorial");
    } else {
      navigate("/main/home");
    }
  };

  return (
    <div className="h-full w-full bg-auth bg-cover bg-no-repeat">
      <OnboardingLayout>
        <div className=" text-navy-100 my-11">
          <p className="body">당신의 마음 속, 깊은 바다까지</p>
          <h1 className="title1 my-3">
            방문 밖이 어려운
            <br /> 사람들을 위한
            <br /> 동기부여 커뮤니티
          </h1>
        </div>
        <Button onClick={handleLogin} isLoginButton isOnboarding>
          <div className="flex flex-row justify-center gap-2">
            <img src={googleLogoImg} alt="구글 로고" />
            <div>Google 계정으로 계속하기</div>
          </div>
        </Button>
      </OnboardingLayout>
    </div>
  );
};

export default AuthPage;
