import React, {Component} from 'react';
import './User.css';
import avatar from './imgs/avatar.png';

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
        render() {
            const {firstName, lastName, score, country, addScore, decreaseScore, removeUser} = this.props
            return (
                <div className="user-container">
                        <img src={avatar} className="avatar" alt="avatar"/>
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                        <p>{score}</p>
                        <p>{country}</p>
                        <button className="btn-score btn-score-plus" onClick={addScore}>+5</button>
                        <button className="btn-score btn-score-minus" onClick={decreaseScore}>-5</button>
                        <button className="btn-delete"><i className="fas fa-trash-alt" onClick={removeUser}></i></button>
        
                </div>
            )
        }
    }
   


export default User;