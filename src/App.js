import React, { useState } from 'react';
import Person from './Person/Person.js'
import './App.css';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: '29' },
      { name: 'Alex', age: '33' },
    ]
  });

  const [otherState, setOtherState] = useState('some other state');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Max', age: '30' },
        { name: 'Alexey', age: '33' },
      ]
    });
  }
  return (
    <div className="items">
      <button onClick={switchNameHandler}>Switch Names</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}>
        Hey!
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
    </div>
  );
}

export default App;

