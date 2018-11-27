import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <form id="login-form" >
        <input type="email" id="email"/>
        <input type="password" id="password"/>
        <button id="login-button"></button>
      </form>
     );
  }
}
export default LoginForm;
