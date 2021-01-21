import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../assets/css/SignUp.css';

export class SignUp extends React.Component {
  render() {
    return (
      <div className="up-form-container">
        <h1>SIGN UP</h1>
        <label>Username:</label>
        <input type="text" placeholder="Username" />
        <label>Password:</label>
        <input type="text" placeholder="Password" />
        <div>
          <Link to="/">
            <button>Sign in</button>
          </Link>
          <Link to="/sign-up">
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    );
  }
}
