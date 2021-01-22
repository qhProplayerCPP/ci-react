import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../assets/css/User.css';
import { AddItemBox } from './AddItemBox';
import { SideBar, NavBar } from './Bar';

export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props,
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <div style={{ display: 'flex' }}>
          <SideBar />
          <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '80%', width: '80%' }}>
            <AddItemBox />
          </div>
        </div>
      </div>
    );
  }
}
