import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log("good click");
    setGood((prevGood) => prevGood + 1);
  };

  const handleNeutralClick = () => {
    console.log("neutral click");
    setNeutral((prevNeutral) => prevNeutral + 1);
  };
  
  const handleBadClick = () => {
    console.log("bad click");
    setBad((prevBad) => prevBad + 1);
  };


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text="good"></Button>
      <Button onClick={handleNeutralClick} text="neutral"></Button>
      <Button onClick={handleBadClick} text="bad"></Button>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)