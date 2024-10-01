import { FC, ReactNode } from "react";

const Button: FC<{
  onClick: () => void;
  children: ReactNode;
  additionalClasses?: string;
  disabled?: boolean;
}> = ({ onClick, children, additionalClasses = "", disabled = false }) => {
  let classes = "w-full text-center p-2 absolute bottom-4 rounded-lg" + " ";

  if (additionalClasses) {
    // 입력받은 클래스가 있는 경우
    classes += additionalClasses;
  } else if (!disabled) {
    // 입력받은 클래스가 없고 활성 상태일 경우
    classes += "bg-gradient-custom ";
  } else {
    // 입력받은 클래스가 없고 비활성 상태일 경우
    classes += "";
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
