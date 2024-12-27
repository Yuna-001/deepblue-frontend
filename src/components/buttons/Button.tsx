import { FC, ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  isLoginButton?: boolean;
  isOnboarding?: boolean;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  isLoginButton = false,
  isOnboarding = false,
  disabled = false,
}) => {
  let classes = "w-full h-12 text-center p-2 rounded-lg title4 ";

  if (isOnboarding) {
    classes += "absolute bottom-4 ";
  }

  if (isLoginButton) {
    classes += "bg-navy-100 text-navy-800";
  } else if (!disabled) {
    classes += "bg-gradient-custom text-navy-800";
  } else {
    classes += "bg-navy-700 text-navy-500";
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
