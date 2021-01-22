import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <div>
      <nav>
        <ul className="nav-bar" style={{ listStyleType: 'none' }}>
          <li>
            <Link to="/user" style={{ margin: '0 3rem' }}>
              TO DO APP
            </Link>
          </li>
          <li>
            <Link to="/sign-up" style={{ margin: '0 3rem' }}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/" style={{ margin: '0 3rem' }}>
              Log out
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function SideBar() {
  return (
    <div className="side-bar">
      <img alt="day la ava" />
      <p>thong tin gi do</p>
      <p>thong tin gi do</p>
      <p>thong tin gi do</p>
    </div>
  );
}
