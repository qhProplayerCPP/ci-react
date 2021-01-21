import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../assets/css/SignIn.css';
import { signIn } from '../ultis/ultis';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  login = () => {
    document.getElementById('check_user').style.display = 'none';
    let username = document.getElementById('username_box').value;
    let password = document.getElementById('password_box').value;
    signIn({ username: username, password: password }).then((data) => {
      if (data === true) {
        this.setState({ isLogin: true });
      } else {
        this.setState({ isLogin: false });
      }
    });
  };
  render() {
    return (
      <div className="in-form-container">
        <h1>TO DO APP</h1>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          id="username_box"
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              document.getElementById('sign-in-button').click();
            } else {
              this.login();
            }
          }}
        />
        <label>Password:</label>
        <input
          type="text"
          placeholder="Password"
          id="password_box"
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              document.getElementById('sign-in-button').click();
            } else {
              this.login();
            }
          }}
        />
        <p id="check_user" style={{ display: 'none', color: 'red' }}>
          User invalid
        </p>
        <div>
          <Link to={this.state.isLogin ? '/user' : '/'}>
            <button
              id="sign-in-button"
              onClick={() => {
                if (this.state.isLogin === true) {
                  document.getElementById('check_user').style.display = 'none';
                } else {
                  document.getElementById('check_user').style.display = 'block';
                }
              }}
            >
              Sign in
            </button>
          </Link>
          <Link to="/sign-up">
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    );
  }
}
