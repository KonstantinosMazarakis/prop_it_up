import React, { Component } from 'react';
    
    
const PersonCard = props => {
        return (
<div>
    <ul>
        <h2>{props.firstname} {props.lastname}</h2>
        <li>Age: {props.age}</li>
        <li>Hair Color: {props.hairColor}</li>
        {/* <button onClick={() =>this.setState({age: this.state.age + 1}) }>Bithday Button for {this.props.firstname}</button> */}
    </ul>
</div>);
    }

    
export default PersonCard;
