import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../assets/css/SignUp.css';
import { signUp } from '../ultis/ultis';

export class SignUp extends React.Component {
  signup = () => {
    let username = document.getElementById('username_box').value;
    let password = document.getElementById('password_box').value;
    if (username === '' || password === '') {
      alert('Input invalid');
    } else {
      signUp({ username: username, password: password }).catch((e) => {
        alert('Existed');
      });
    }
  };
  render() {
    return (
      <div className="up-form-container">
        <h1>SIGN UP</h1>
        <label>Username:</label>
        <input type="text" placeholder="Username" id="username_box" />
        <label>Password:</label>
        <input type="text" placeholder="Password" id="password_box" />
        <div>
          <Link to="/">
            <button>Sign in</button>
          </Link>
          <Link to="/sign-up">
            <button onClick={this.signup}>Sign up</button>
          </Link>
        </div>
      </div>
    );
  }
}
