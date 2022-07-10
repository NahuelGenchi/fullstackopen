const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
};

const Content = (props) => {
  return (
    <>
      <p>{props.partfirst} {props.exercicesfirst}</p>
      <p>{props.partsecond} {props.exercisessecond}</p>
      <p>{props.partthird} {props.exercisesthird}</p>
    </>
  );
};

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercicesfirst + props.exercisessecond + props.exercisesthird}</p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content partfirst={part1} exercicesfirst={exercises1} partsecond={part2} exercisessecond={exercises2} partthird={part3} exercisesthird={exercises3} />
      <Total exercicesfirst={exercises1} exercisessecond={exercises2} exercisesthird={exercises3} />
    </div>
  );
};

export default App;
