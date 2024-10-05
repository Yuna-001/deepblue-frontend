import { FC, ChangeEvent, useEffect, useState } from "react";

import OnboardingLayout from "../../components/layout/OnboardingLayout";
import Button from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { checkIsDuplicatedNickname, submitUserInfo } from "../../utils/api";
import useSurveyScoreStore from "../../store/surveyScore";

const NicknameSettingPage: FC = () => {
  const [nickname, setNickname] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  const surveyScore = useSurveyScoreStore((state) => state.surveyScore);

  const { mutate: mutateUserInfo } = useMutation({
    mutationFn: submitUserInfo,
  });

  const { mutate: mutateNicknameCheck } = useMutation({
    mutationFn: checkIsDuplicatedNickname,
    onSuccess: (data: { available: boolean }) => {
      if (!data.available) {
        setMessage("이미 사용중인 닉네임입니다. 다른 닉네임을 입력하세요.");
        setDisabled(true);
      } else {
        setMessage("사용이 가능한 닉네임입니다.");
        setDisabled(false);
      }
    },
    onError: () => {
      setMessage("닉네임 확인 중 오류가 발생했습니다. 다시 시도해주세요.");
      setDisabled(true);
    },
  });

  let inputFieldClasses =
    "h-12 w-full bg-navy-800 body1 text-navy-100 outline-none text-center rounded-lg border ";
  let messageClasses = "h-4 caption2 text-center py-2 ";

  if (message === "") {
    // 초기 상태
    inputFieldClasses += "border-navy-700";
  } else if (disabled) {
    // 불통
    inputFieldClasses += "border-error_color";
    messageClasses += "text-error_color";
  } else {
    // 통과
    inputFieldClasses += "border-point_color-mint";
    messageClasses += "text-point_color-mint";
  }

  const navigate = useNavigate();

  const handleSubmit = () => {
    let surveyLevel: number;

    if (surveyScore > 5) {
      surveyLevel = 1;
    } else if (surveyScore > 2) {
      surveyLevel = 2;
    } else {
      surveyLevel = 3;
    }

    mutateUserInfo({ surveyLevel, nickname });

    navigate("/tutorial/guide");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
    setHasChanged(true);
  };

  useEffect(() => {
    if (hasChanged) {
      if (/\s/.test(nickname)) {
        setMessage("닉네임에 공백을 포함할 수 없습니다.");
        setDisabled(true);
      } else if (nickname.length < 2 || nickname.length > 15) {
        setMessage("닉네임은 2자에서 15자 사이여야 합니다.");
        setDisabled(true);
      } else {
        mutateNicknameCheck(nickname);
      }
    }
  }, [nickname]);

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
