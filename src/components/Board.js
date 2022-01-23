import { useEffect, useState } from "react";
import Square from "./Square";


const rowStyle = {
  display: 'flex'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

export default function Board() {
  const [nextStep, setNextStep] = useState("X");
  const [reset, setReset] = useState(false);
  const [XArray, setXArray] = useState([]);
  const [OArray, setOArray] = useState([]);
  const [winner, setWinner] = useState("None");
  const [end, setEnd] = useState(false);

  const nextStepHandle = () => {
    nextStep === "X" ? setNextStep("O") : setNextStep("X");
  };

  const updateXO = (no) => {
    if (nextStep === "X") {
      setXArray([...XArray, no]);
    }
    if (nextStep === "O") {
      setOArray([...OArray, no]);
    }
  };

  useEffect(() => {
    const winnerArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 6],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    winnerArray.forEach((arr) => {
      if (XArray.length >= 3 && XArray.filter((r) => arr.includes(r)).length === 3) {
        setWinner("X!");
      }
      if (OArray.length >= 3 && OArray.filter((r) => arr.includes(r)).length === 3) {
        setWinner("O!");
      }
    });
  }, [XArray, OArray]);

  useEffect(() => {
    winner !== "None" && setEnd(true);
  }, [winner]);

  const handlereset = () => {
    setNextStep("X");
    setXArray([]);
    setOArray([]);
    setReset(true);
    setWinner("None");
    setEnd(false);
  };

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{nextStep}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner}</span>
      </div>
      <button style={buttonStyle} onClick={handlereset}>
        Reset
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square end={end} no={1} updateXO={updateXO} setReset={setReset} reset={reset} nextStep={nextStep} nextStepHandle={nextStepHandle} />
          <Square end={end} no={2} updateXO={updateXO} setReset={setReset} reset={reset} nextStep={nextStep} nextStepHandle={nextStepHandle} />
          <Square end={end} no={3} updateXO={updateXO} setReset={setReset} reset={reset} nextStep={nextStep} nextStepHandle={nextStepHandle} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square end={end} no={4} updateXO={updateXO} setReset={setReset} reset={reset} nextStep={nextStep} nextStepHandle={nextStepHandle} />
          <Square end={end} no={5} updateXO={updateXO} setReset={setReset} reset={reset} nextStep={nextStep} nextStepHandle={nextStepHandle} />
          <Square end={end} no={6} updateXO={updateXO} setReset={setReset} reset={reset} nextStep={nextStep} nextStepHandle={nextStepHandle} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square end={end} no={7} updateXO={updateXO} setReset={setReset} reset={reset} nextStep={nextStep} nextStepHandle={nextStepHandle} />
          <Square end={end} no={8} updateXO={updateXO} setReset={setReset} reset={reset} nextStep={nextStep} nextStepHandle={nextStepHandle} />
          <Square end={end} no={9} updateXO={updateXO} setReset={setReset} reset={reset} nextStep={nextStep} nextStepHandle={nextStepHandle} />
        </div>
      </div>
    </div>
  );
}
