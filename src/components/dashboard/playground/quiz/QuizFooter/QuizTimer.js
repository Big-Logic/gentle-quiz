import React, { useEffect, useState } from 'react';
const QuizTimer = ({
  handleTimerZero,
  timerUpdate,
  className,
  counterValue,
}) => {
  console.log('timer');
  let countVal = counterValue;
  const [countValue, setCountValue] = useState(counterValue);

  useEffect(() => {
    let timer;
    if (timerUpdate === 'init') {
      setCountValue(counterValue);
      timer = setInterval(() => {
        if (countVal === 0) {
          handleTimerZero();
        } else {
          setCountValue((prev) => {
            countVal = prev - 1;
            return prev - 1;
          });
        }
      }, 1000);
    } else if (timerUpdate === 'btclick') {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
      console.log('hi');
    };
  }, [timerUpdate, counterValue]);
  return <p className={className}>Remaining: {countValue}</p>;
};

export default QuizTimer;
