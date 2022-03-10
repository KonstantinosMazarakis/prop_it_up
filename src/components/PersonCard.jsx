import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            age: this.props.age
        }
    }
    render() {
        return <div>
    <ul>
        <h2>{this.props.firstname} {this.props.lastname}</h2>
        <li>Age: {this.state.age}</li>
        <li>Hair Color: {this.props.hairColor}</li>
        <button onClick={() =>this.setState({age: this.state.age + 1}) }>Bithday Button for {this.props.name}</button>
    </ul>
</div>;
    }
}
    
export default PersonCard;
