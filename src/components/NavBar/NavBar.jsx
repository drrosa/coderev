import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='Nav'>
      <span>Welcome, {user.name}</span>
      <h1>codeRev</h1>
      <Link to="" className='logout' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
