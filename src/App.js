import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import LoginForm from './loginform';

class App extends React.Component {
    
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }
  
  // App functions that modify state
  signIn(username, password) {
    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  
  signOut() {
    // clear out user from state
    this.setState({user: null})
  }
  
  render() {
    
    return (
      <div>
        <h1></h1>
        { 
          (this.state.user) ? 
            <Welcome 
             user={this.state.user} 
             onSignOut={this.signOut.bind(this)} 
            />
          :
            <LoginForm 
             onSignIn={this.signIn.bind(this)} 
            />
        }
      </div>
    )
    
  }
  
}

export default App;
