import { useState } from 'react';
import {
  useHref, useNavigate, Routes, Route,
} from 'react-router-dom';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { getUser } from '../../utilities/user-token';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();
  return (
      <main className="App">
        { user
          ? <Provider theme={defaultTheme} router={{ navigate, useHref }}>
              <NavBar user={user} setUser={setUser} />
              <Routes>
                <Route path="/orders/new" element={<NewOrderPage />} />
                <Route path="/orders" element={<OrderHistoryPage />} />
              </Routes>
            </Provider>
          : <AuthPage setUser={setUser} />
        }
      </main>
  );
}
