import React, { Component }  from 'react';

class LoginForm extends React.Component {
    // Using a class based component here because we're accessing DOM refs
    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      this.props.onSignIn(username, password)
    }
    
    render() {
        const {classes} = this.props;
      return (
        <form onSubmit={this.handleSignIn.bind(this)}>
          <h3>USERNAME: put any text and PASSWORD: put any text</h3>
          <input type="text" ref="username" placeholder="enter you username" />
          <input type="password" ref="password" placeholder="enter password" />
          <input type="submit" value="Login" />
        </form>
      )
    }
  
  }

  export default LoginForm;
