import React, { Component } from 'react';
// import './Person.css';

const Person = (props) => {
    return (
        <>
            <div className="person">
                <p onClick={props.click}>Hi my name is {props.name} I'm {props.age} years old</p>
                {props.children}
            </div>
            <input type="text" onChange={props.change} value={props.name} />
        </>
    );
}

export default Person;