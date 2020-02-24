import React, { Component } from 'react'
import './Form.css';
import uuid from 'uuid/v4';


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
                        
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        e.target.reset();
        const newUser = {id: uuid(), ...this.state}
        this.props.addUser(newUser);

    }


    handleChange = (event) => {
        
        const {value, name} = event.target
            this.setState({[name]: value})

        
    }
   
  
    render() {

 
        return (
                
            <form onSubmit={this.handleSubmit}>
                
            <input className="input" 
            value={this.state.firstName} 
            name="firstName" placeholder="user firstname" 
            onChange={this.handleChange} required></input>   

            <input className="input" 
            value={this.state.lastName} 
            name="lastName"placeholder="user lastname" 
            onChange={this.handleChange} required></input>
            
            <input className="input" 
            value={this.state.score} 
            name="score" placeholder="user score" 
            onChange={this.handleChange} required></input>

            <input className="input" 
            value={this.state.country} 
            name="country" placeholder="user country" 
            onChange={this.handleChange} required></input>

            <button className="btn-add-user" onClick={()=>this.addUser}>Add User</button>
            <p className="warning"></p>

            </form>
           
        )
    }
}

export default Form
