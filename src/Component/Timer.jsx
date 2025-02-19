import React, { useState, useEffect } from "react";

const Timer = () => {
  const [number, setNumber] = useState(10); 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setNumber((prev) => {
          if (prev <= 1) {
            clearInterval(interval); 
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval); 
  }, [isRunning]);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
    } else {
    
      setIsRunning(true); 
    }
  };
  const handleStop = () => {
    setIsRunning(false); 
  };
  return (
    <div>
      <div>{number > 0 ? `${number} seconds left` : "You have 0 seconds left!"}</div>
      <button onClick={handleStart} disabled={isRunning}>
        Start Timer
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;
