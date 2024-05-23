import { useState } from 'react';
import { Button } from '@adobe/react-spectrum';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className='authpage-wrapper'>
      <h1>{showSignUp ? 'Create an Account' : 'Log In'}</h1>
      { showSignUp
        ? <SignUpForm setUser={setUser} />
        : <LoginForm setUser={setUser} />
      }
      <div className='form-toggler-container'>
        <p>{showSignUp ? 'Already have an account?' : 'Don\'t have an account yet?'}</p>
        <Button variant='primary' style="outline" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</Button>
      </div>
    </div>
  );
}
