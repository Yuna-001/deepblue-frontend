import { FC, useState, useEffect } from "react";

const RemainingTime: FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    // 두 자리 숫자로 변환하는 함수 (ex. 5 -> 05)
    const formatTime = (time: number) => {
      return time < 10 ? `0${time}` : time.toString();
    };

    // 자정까지 남은 시간 계산 함수
    const calculateTimeRemaining = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // 자정(24:00)으로 설정

      const timeDiff = midnight.getTime() - now.getTime();

      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeRemaining(
        `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`,
      );
    };

    // 1초마다 타이머 업데이트
    const timerId = setInterval(calculateTimeRemaining, 1000);

    // 컴포넌트 언마운트 시 인터벌 클리어
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="body1 text-navy-100 flex flex-row flex-start gap-2 items-center w-[132px]">
      <div>남은 시간</div>
      <div>{timeRemaining}</div>
    </div>
  );
};

export default RemainingTime;
