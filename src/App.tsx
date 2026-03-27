import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import animationData from "./assets/planets_basic.json";
import "./App.css";

function App() {
  const [isStopped, setIsStopped] = useState(false);

  const buttonStyle = {
    display: "block",
    margin: "10px auto",
  };
  const buttonRowStyle = {
    display: "inline-flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  };

  const { View, play, pause, setSpeed } = useLottie(
    {
      animationData,
      loop: true,
      autoplay: true,
    },
    { height: 400, width: 1080 },
  );

  useEffect(() => {
    setSpeed(0.2);
  }, [setSpeed]);

  useEffect(() => {
    if (isStopped) pause();
    else play();
  }, [isStopped, play, pause]);

  return (
    <div>
      <h2>Lottie Animation Test</h2>
      {View}
      <div style={buttonRowStyle}>
        <button style={buttonStyle} onClick={() => setIsStopped(!isStopped)}>
          play / stop
        </button>
      </div>
    </div>
  );
}

export default App;
