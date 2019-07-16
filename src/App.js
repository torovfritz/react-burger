import React, { Component } from 'react';
import Person from './Person/Person.js'
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: '29' },
      { name: 'Alex', age: '33' },
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: '30' },
        { name: 'Alexey', age: '33' },
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: '30' },
        { name: 'Alexey', age: '33' },
      ]
    });
  }

  render() {
    return (
      <div className="items">
        <button onClick={() => this.switchNameHandler('Huy')}>Switch Names</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Max!!!')} // More conventional
          change={this.nameChangeHandler}
        >
          Hey!
          </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
      </div>
    );
  }
}

export default App;
