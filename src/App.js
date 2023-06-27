import { useState, useEffect } from "react";

export default function App() {
  const initial = 4000;
  const [time, setTime] = useState(initial);
  const [stopTimer, setStopTimer] = useState(false);

  useEffect(() => {
    const setTimer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (time === 0 || stopTimer) {
      clearInterval(setTimer);
    }

    return () => clearInterval(setTimer);
  }, [time, stopTimer]);

  const handleStop = () => {
    setStopTimer(!stopTimer);
  };

  const handleReset = () => {
    setTime(initial);
  };

  const timeTransformer = (str) => {
    return str.toString().padStart(2, 0);
  };
  const hour = timeTransformer(Math.floor(time / 3600));

  const minute = timeTransformer(Math.floor((time % 3600) / 60));

  const seconds = timeTransformer(Math.ceil(time % 60));

  return (
    <div>
      <h1>Stop Watch</h1>
      <div
        style={{
          width: "220px",
          height: "100px",
          border: "2px solid black"
        }}
      >
        <h2>
          {hour}:{minute}:{seconds}
        </h2>
        <button
          onClick={handleStop}
          style={{
            backgroundColor: stopTimer ? "green" : "red",
            width: "70px",
            padding: "5px"
          }}
        >
          {stopTimer ? "resume" : "Stop"}
        </button>
        <button
          onClick={handleReset}
          style={{ backgroundColor: "orange", padding: "5px", width: "70px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
