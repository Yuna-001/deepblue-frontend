import GoogleLoginButton from "../../components/buttons/GoogleLoginButton";
import OnboardingLayout from "../../components/layout/OnboardingLayout";

const AuthPage = () => {
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
        <GoogleLoginButton />
      </OnboardingLayout>
    </div>
  );
};

export default AuthPage;
