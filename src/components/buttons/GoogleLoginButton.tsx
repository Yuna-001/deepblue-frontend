import { useNavigate } from "react-router-dom";
import Button from "./Button";
import googleLogoImg from "../../assets/images/onboarding/google-logo.png";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const token = localStorage.getItem("token");

    if (token === null) {
      navigate("/tutorial");
    } else {
      navigate("/main/home");
    }
  };

  return (
    <Button onClick={handleLogin} isLoginButton isOnboarding>
      <div className="flex flex-row justify-center gap-2">
        <img src={googleLogoImg} alt="구글 로고" />
        <div>Google 계정으로 계속하기</div>
      </div>
    </Button>
  );
};

export default GoogleLoginButton;
