import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    render() {
        return <div>
    <ul>
        <h2>{this.props.name}</h2>
        <li>Age: {this.props.age}</li>
        <li>Hair Color: {this.props.hairColor}</li>
    </ul>
</div>;
    }
}
    
export default PersonCard;
