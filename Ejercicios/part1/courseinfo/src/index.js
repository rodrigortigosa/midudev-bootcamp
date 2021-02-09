import React from 'react';
import ReactDOM from 'react-dom';

//const Title = ({course}) => <h1>{course}</h1>;
const Header = ({course}) => {
  console.log({course});
  //const {course} = props;
  //const course = props.course;
  return <h1>{course}</h1>;
}

const Part = ({part, exercises}) => {
  console.log({part});
  console.log({exercises});
  return <p>{part}. Number of exercises: {exercises}</p>;
}

const Content = ({parts}) => {
  console.log({parts});
  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises}></Part>
      <Part part={parts[1].name} exercises={parts[1].exercises}></Part>
      <Part part={parts[2].name} exercises={parts[2].exercises}></Part>
    </div>
  );
};

const Total = ({parts}) => {
  return <p>Total number of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>;
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));