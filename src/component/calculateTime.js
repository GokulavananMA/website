import React, { useState } from "react";

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  const calculateTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  setInterval(() => {
    const deadline = new Date("Feb 18, 2023").getTime();
    const currentTime = new Date().getTime();
    setTimeRemaining(deadline - currentTime);
  }, 1000);

  const { days, hours, minutes, seconds } = calculateTime(timeRemaining);

  return (
    <div className="flex items-center justify-center">
      <div className="text-center text-5xl font-bold text-sky-500">
        {days}:{hours}:{minutes}:{seconds}
      </div>
    </div>
  );
};

export default Countdown;