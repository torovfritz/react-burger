import React, { Component } from 'react';
// import './Person.css';

const Person = (props) => {
    return (
        <div className="person">
            <p>Hi my name is {props.name} I'm {props.age} years old</p>
            {props.children}
        </div>
    );
}

export default Person;