import { Component } from 'react';
import { Form, TextField, Button } from '@adobe/react-spectrum';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  };

  handleChange = (inputValue, name) => {
    this.setState({
      [name]: inputValue,
      error: '',
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <Form autoComplete="off" onSubmit={this.handleSubmit} isRequired necessityIndicator="label">
            <TextField
              label="Name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={(value) => this.handleChange(value, 'name')}
              isRequired
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={(value) => this.handleChange(value, 'email')}
              isRequired
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={(value) => this.handleChange(value, 'password')}
              isRequired
            />
            <TextField
              label="Confirm"
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={(value) => this.handleChange(value, 'confirm')}
              isRequired
            />
            <Button type="submit" variant="primary" disabled={disable}>SIGN UP</Button>
          </Form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
