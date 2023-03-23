import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  console.log("target date", new Date(targetDate));
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  console.log(new Date());
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  console.log("Days", days);
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  console.log("hours", hours);
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  console.log("minutes", minutes);
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
