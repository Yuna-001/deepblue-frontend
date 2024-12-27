import { FC, ChangeEvent } from "react";

import OnboardingLayout from "../../components/layout/OnboardingLayout";
import Button from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { submitUserInfo } from "../../utils/api";
import useNicknameValidation from "../../hooks/useNicknameValidation";
import useSurveyLevel from "../../hooks/useSurveyLevel";

const NicknameSettingPage: FC = () => {
  const { nickname, disabled, message, setNickname, validateNickname } =
    useNicknameValidation();
  const { calculateSurveyLevel } = useSurveyLevel();

  const navigate = useNavigate();

  const { mutate: mutateUserInfo } = useMutation({
    mutationFn: submitUserInfo,
  });

  let inputFieldClasses =
    "h-12 w-full bg-navy-800 body1 text-navy-100 outline-none text-center rounded-lg border ";
  let messageClasses = "h-4 caption2 text-center py-2 ";

  if (message === "") {
    // 초기 상태
    inputFieldClasses += "border-navy-700";
  } else if (disabled) {
    inputFieldClasses += "border-error_color";
    messageClasses += "text-error_color";
  } else {
    inputFieldClasses += "border-point_color-mint";
    messageClasses += "text-point_color-mint";
  }

  const handleSubmit = () => {
    const surveyLevel = calculateSurveyLevel();
    mutateUserInfo({ surveyLevel, nickname });
    navigate("/tutorial/guide");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
    validateNickname(event.target.value);
  };

  return (
    <OnboardingLayout withBackArrow>
      <form
        className="h-full mb-36 flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <label className="title3 text-navy-100 mb-10" htmlFor="nickname">
          '폴라'에게
          <br />
          당신의 이름을 알려주세요.
        </label>
        <input
          type="text"
          id="nickname"
          placeholder="닉네임을 입력해주세요."
          className={inputFieldClasses}
          onChange={handleChange}
          value={nickname}
        />
        <div className={messageClasses}>{message || ""}</div>
      </form>
      <Button onClick={handleSubmit} disabled={disabled} isOnboarding>
        다음
      </Button>
    </OnboardingLayout>
  );
};

export default NicknameSettingPage;
