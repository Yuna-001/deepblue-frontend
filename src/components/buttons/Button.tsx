import { FC, ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  isLoginButton?: boolean;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  isLoginButton = false,
  disabled = false,
}) => {
  let classes =
    "w-full h-12 text-center p-2 absolute bottom-4 rounded-lg title4" + " ";

  if (isLoginButton) {
    // 로그인 버튼인 경우
    classes += "bg-navy-100 text-navy-800";
  } else if (!disabled) {
    // 활성 상태일 경우
    classes += "bg-gradient-custom text-navy-800";
  } else {
    // 비활성 상태일 경우
    classes += "bg-navy-700 text-navy-500";
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
