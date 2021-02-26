import ReactDOM from 'react-dom';
import React, { useState } from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  if (text === "good") {
    return value;
  }
  else if (text === "neutral") {
    return value;
  }
  else if (text === "bad") {
    return value;
  }
  else if (text === "all") {
    return value;
  }
  else if (text === "average") {
    const [good, neutral, bad] = value;
    const total = good + neutral + bad;
    if (total === 0){
      return total;
    }
    else {
      const result = (good - bad) / total;
      return result.toFixed(1);
    }
  }
  else if (text === "positive") {
    const [good, neutral, bad] = value;
    const total = good + neutral + bad;
    if (total === 0) {
      return total;
    }
    else {
      const result = good / (total / 100);
      return result.toFixed(1) + "%";
    }
  }
};

const Statistics = ({ good, neutral, bad }) => {
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>Good comments:</td>
            <td><Statistic text="good" value={good}></Statistic></td>
          </tr>
          <tr>
            <td>Neutral comments:</td>
            <td><Statistic text="neutral" value={neutral}></Statistic></td>
            </tr>
          <tr>
            <td>Bad comments:</td>
            <td><Statistic text="bad" value={bad}></Statistic></td>
          </tr>
          <tr>
            <td>All comments:</td>
            <td><Statistic text="all" value={good + neutral + bad}></Statistic></td>
            </tr>
          <tr>
            <td>Average score:</td>
            <td><Statistic text="average" value={[good, neutral, bad]}></Statistic></td>
          </tr>
          <tr>
            <td>Positive percentage:</td>
            <td><Statistic text="positive" value={[good, neutral, bad]}></Statistic></td>
          </tr>
        </tbody>
      </table>
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