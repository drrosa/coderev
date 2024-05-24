import { Link } from 'react-router-dom';
import { Button } from '@adobe/react-spectrum';
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
      {/* eslint-disable-next-line react/style-prop-object */}
      <Link to="" ><Button variant='negative' style="fill" onPress={handleLogOut}>Log Out</Button></Link>
    </nav>
  );
}
