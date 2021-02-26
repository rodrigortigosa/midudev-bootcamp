import ReactDOM from 'react-dom';
import React, { useState } from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  if (text === "good") {
    return <p>Good comments: {value}</p>;
  }
  else if (text === "neutral") {
    return <p>Neutral comments: {value}</p>;
  }
  else if (text === "bad") {
    return <p>Bad comments: {value}</p>
  }
  else if (text === "all") {
    return <p>All comments: {value}</p>;
  }
  else if (text === "average") {
    const [good, neutral, bad] = value;
    const total = good + neutral + bad;
    if (total === 0){
      return <p>Average score: {total}</p>;
    }
    else {
      return <p>Average score: {(good - bad) / total}</p>;
    }
  }
  else if (text === "positive") {
    const [good, neutral, bad] = value;
    const total = good + neutral + bad;
    if (total === 0) {
      return <p>Positive percentage: {total}</p>;
    }
    else {
      return <p>Positive percentage: {good / (total / 100)}%</p>;
    }
  }
};

const Statistics = ({ good, neutral, bad }) => {
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
    <div>
      <h1>Statistics</h1>
      <Statistic text="good" value={good}></Statistic>
      <Statistic text="neutral" value={neutral}></Statistic>
      <Statistic text="bad" value={bad}></Statistic>
      <Statistic text="all" value={good + neutral + bad}></Statistic>
      <Statistic text="average" value={[good, neutral, bad]}></Statistic>
      <Statistic text="positive" value={[good, neutral, bad]}></Statistic>
    </div>
    );
  }
  else {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
  );
};

ReactDOM.render(<App />, 
  document.getElementById('root')
);