import './App.css';
import { signUp, addToDo } from './ultis/ultis';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { User } from './components/User';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
