import React, { Component } from 'react';
import LoginForm from './LoginForm';
import './Login.css';
export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row  login-form-container align-items-center justify-content-center">
          <div className="col-10 col-lg-4 col-md-4">
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
