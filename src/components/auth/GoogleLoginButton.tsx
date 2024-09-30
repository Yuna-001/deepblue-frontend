import { FC } from "react";

const GoogleLoginButton: FC = () => {
  const handleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}
		&redirect_uri=${import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URI}
		&response_type=code
		&scope=email`;
  };

  return (
    <button onClick={handleLogin} className="p-5 bg-slate-200">
      구글로 시작하기
    </button>
  );
};

export default GoogleLoginButton;
