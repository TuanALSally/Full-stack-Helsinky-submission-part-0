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
        <Content 
          parts={[
            { name: part1, exercises: exercises1 },
            { name: part2, exercises: exercises2 },
            { name: part3, exercises: exercises3 }
          ]}
        />
        <Total 
          exercises={exercises1 + exercises2 + exercises3} 
        />
      </div>
    );
  }
  
  const Header = ({ course }) => {
    return <h1>{course}</h1>;
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map((part, index) => (
          <Part key={index} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    );
  }
  
  const Part = ({ name, exercises }) => {
    return (
      <p>
        {name} {exercises}
      </p>
    );
  }
  
  const Total = ({ exercises }) => {
    return <p>Number of exercises {exercises}</p>;
  }
  
  export default App;