import React, { Component } from 'react'
import User from './User';
import './UserList.css';
import uuid from 'uuid/v4';
import Form from './Form';


class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = { users: [
            {
                id: uuid(),
                firstName: 'Michele',
                lastName: 'Zucca',
                score: 80,
                country: 'Italy'
            },
            {
                id: uuid(),
                firstName: 'Johanna',
                lastName: 'Lamu',
                score: 90,
                country: 'Finland'
            },
        
            {
                id: uuid(),
                firstName: 'Aurora',
                lastName: 'Zucca',
                score: 75,
                country: 'Finland'
            },
        
            {
                id: uuid(),
                firstName: 'Asabeneh',
                lastName: 'Yetayeh',
                score: 95,
                country: 'Ethiopia'
            }
        ]
        }
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount() {
        this.sortUsersByScore()
    }
    
    sortUsersByScore() {
      
        this.setState({
            users: this.state.users.sort((a, b) => {
                if(a.score > b.score) return -1;
                if(a.score < b.score) return 1;
                return 0
                
            })
        })
        console.log(this.state.users)


    }

    
    addUser(newUser) {
        this.setState({
            users: this.state.users.push(newUser)
               
        })
        console.log(this.state.users)
        this.componentDidMount()
         
    }
 
    addScore = (user) => {
        const index = this.state.users.indexOf(user);
        let newScore = user.score += 5
        console.log(index)
        console.log(user)
       if (index !== -1) {
           this.setState({
            score: newScore
           })
      }
      this.componentDidMount()
         
    }

    decreaseScore = (user) => {
        const index = this.state.users.indexOf(user);
        let newScore = user.score -= 5
        console.log(user)
       if (index !== -1) {
           this.setState({
            users: newScore
           })
      }
      this.componentDidMount()
      
      
    }
    
    removeUser = (id) => {
        this.setState({
            users : this.state.users.filter(user => user.id !== id)
        })
        console.log(this.state.users)

    } 
    render() {
        const formattedUsers = this.state.users.map((user) => (
            
            <User 
                    key= {user.id}
                    firstName = {user.firstName}
                    lastName= {user.lastName}
                    score = {user.score}
                    country = {user.country}
                    addScore = {()=>this.addScore(user)}
                    decreaseScore = {()=>this.decreaseScore(user)}
                    removeUser = {()=> this.removeUser(user.id)}
                     
                    />
                    
        ))
        return (
                 <div className="users-wrapper">
                     <Form addUser = {this.addUser}/>
                    {formattedUsers}
                </div>
        )
    }
}

export default UserList
