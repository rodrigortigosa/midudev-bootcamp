import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const GoodComments = ({good}) => {
  return <p>Good comments: {good}</p>
};

const NeutralComments = ({neutral}) => {
  return <p>Neutral comments: {neutral}</p>
};

const BadComments = ({bad}) => {
  return <p>Bad comments: {bad}</p>
};


const TotalComments = ({allComments}) => {
  return <p>All comments: {allComments}</p>
};

const Average = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if (total === 0){
    return <p>Average score: {total}</p>
  }
  else {
    return <p>Average score: {(good - bad) / total}</p>
  }
};

const Positive = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if (total === 0) {
    return <p>Positive percentage: {total}</p>
  }
  else {
    return <p>Positive percentage: {good / (total / 100)}%</p>
  }
}

const Statistics = ({good, neutral, bad}) => {
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
    <div>
      <h1>Statistics</h1>
      <GoodComments good={good}></GoodComments>
      <NeutralComments neutral={neutral}></NeutralComments>
      <BadComments bad={bad}></BadComments>
      <TotalComments allComments={good + neutral + bad}></TotalComments>
      <Average good={good} neutral={neutral} bad={bad}></Average>
      <Positive good={good} neutral={neutral} bad={bad}></Positive>
    </div>
    )
  }
  else {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

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
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)