import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  useEffect(() => {
    if (run) {
      const interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [run, time]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const formatTime = () => {
    let hrs = String(Math.floor(time / 3600)).padStart(2, "0");
    let mins = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    let secs = String(time % 60).padStart(2, "0");

    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div>
      <h1>{formatTime()}</h1>

      <button onClick={() => setRun(true)}>Start</button>
      <button onClick={() => setRun(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>

      <button onClick={() => setHistory([...history, formatTime()])}>
        Save
      </button>

      <h3>History</h3>
      {history.map((h, i) => (
        <p key={i}>{h}</p>
      ))}
    </div>
  );
}