import { useState } from 'react';
import {
  useHref, useNavigate,
} from 'react-router-dom';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { getUser } from '../../utilities/user-token';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();
  return (
    <Provider theme={defaultTheme} router={{ navigate, useHref }}>
      <main className="App">
        { user
          ? <>
              <NavBar user={user} setUser={setUser} />
            </>
          : <AuthPage setUser={setUser} />
        }
      </main>
    </Provider>
  );
}
