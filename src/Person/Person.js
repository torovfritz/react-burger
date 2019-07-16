import React, { Component } from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <>
            <div className="Person">
                <p onClick={props.click}>Hi my name is {props.name} I'm {props.age} years old</p>
                {props.children}
                <input type="text" onChange={props.change} value={props.name} />
            </div>
        </>
    );
}

export default Person;