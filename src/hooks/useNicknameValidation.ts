import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { checkIsDuplicatedNickname } from "../utils/api";

const useNicknameValidation = () => {
  const [nickname, setNickname] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);

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

  const validateNickname = (enteredNickname: string) => {
    if (/\s/.test(enteredNickname)) {
      setMessage("닉네임에 공백을 포함할 수 없습니다.");
      setDisabled(true);
    } else if (enteredNickname.length < 2 || enteredNickname.length > 15) {
      setMessage("닉네임은 2자에서 15자 사이여야 합니다.");
      setDisabled(true);
    } else {
      mutateNicknameCheck(enteredNickname);
    }
  };

  return { nickname, disabled, message, setNickname, validateNickname };
};

export default useNicknameValidation;
