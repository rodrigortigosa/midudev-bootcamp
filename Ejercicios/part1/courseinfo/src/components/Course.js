const Header = ({course}) => {
  console.log({course});
  //const {course} = props;
  //const course = props.course;
  return <h1>{course}</h1>;
}

const Part = ({name, exercises}) => {
  console.log({name});
  console.log({exercises});
  return <p>{name}. Number of exercises: {exercises}</p>;
}

const Content = ({parts}) => {
  console.log({parts});
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

/*const Total = ({parts}) => {
  let total = 0;
  parts.forEach(part => {
    total = total + part.exercises;
  });
 
  return <p>Total number of exercises: {total}</p>;
};*/

const TotalExercises = ({parts}) => {
  const total = parts.reduce((a, b) => ({ exercises: a.exercises + b.exercises }));
  console.log('total exercises:', total.exercises);

  return <p>Total number of exercises: {total.exercises}</p>;
};

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <TotalExercises parts={course.parts}></TotalExercises>
    </div>
  );
};

export default Course;