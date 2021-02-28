import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0));

  const handleNextAnecdoteClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    console.log(random);
    setSelected(random); 
  }

  const handleVoteClick = () => {
    const newVotes = {...votes};
    newVotes[selected] += 1;
    console.log(newVotes);
    setVotes(newVotes);
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <Button onClick={handleVoteClick} text="vote"></Button>
      <Button onClick={handleNextAnecdoteClick} text="next anecdote"></Button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'HOLA'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)