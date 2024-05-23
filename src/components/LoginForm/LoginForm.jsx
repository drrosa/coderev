import { useState } from 'react';
import { Form, TextField, Button } from '@adobe/react-spectrum';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  function handleChange(inputValue, name) {
    setCredentials({ ...credentials, [name]: inputValue });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className='form-container login'>
        <Form autoComplete="off" onSubmit={handleSubmit} isRequired necessityIndicator="label">
          <TextField
            label="Email"
            type="text"
            name="email"
            value={credentials.email}
            onChange={(value) => handleChange(value, 'email')}
            isRequired
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={(value) => handleChange(value, 'password')}
            isRequired
          />
          <Button type="submit" variant="primary" style="fill" >LOG IN</Button>
        </Form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
