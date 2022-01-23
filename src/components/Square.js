import { useEffect, useState } from "react"

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

export default function Square ({end, no,nextStep, nextStepHandle, reset, setReset, updateXO}){
  const [step, setStep] = useState('')
  
  const clickHandler = () => {
    reset && setReset(false)
    if(!end && !step){
      setStep(nextStep)
      nextStepHandle()
      updateXO(no)
    }

  }

  useEffect(()=>{
    reset && setStep('')
  },[reset])
    return (
      <div className="square" style={squareStyle} onClick={clickHandler}>
        {step}
      </div>
    );
}