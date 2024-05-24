import React, { useState, useEffect } from 'react';
import {
  Form,
  FormItem,
  FormBtnContainer,
  FormItemCheckbox,
  ErrorMessage,
} from '../index.styles';
import Icons from '../../../images/index';
import FormBtn from '../../buttons/formBtn';
import register from '../../../js/post/createUser.js';

export default function CreateAccountForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    venueManager: false,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Holidaze | Create account';
  }, []);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setError('');

    if (!user.name || !user.email || !user.password) {
      setError('Please fill in all fields');
      document.getElementById('usernameLabel').classList.add('error');
      document.getElementById('emailLabel').classList.add('error');
      document.getElementById('passwordLabel').classList.add('error');
      return;
    }

    if (user.password.length < 8) {
      setError('Password must be at least 8 characters long');
      document.getElementById('passwordLabel').classList.add('error');
      return;
    }

    if (!user.email.includes('@') || !user.email.endsWith('stud.noroff.no')) {
      setError('Please enter a valid email address');
      document.getElementById('emailLabel').classList.add('error');
      return;
    }

    try {
      const data = await register(user);

      if (!data) {
        setError('An error occurred. Please try again later');
      } else {
        console.log('User registered successfully:', data);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreateUser(e);
    }
  };

  return (
    <Form onKeyDown={handleKeyPress}>
      <FormItem>
        <label id="usernameLabel" htmlFor="username">
          Username
        </label>
        <input
          required
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
          name="username"
          id="username"
        />
        {error ? <Icons.UserError /> : <Icons.UserId />}
      </FormItem>
      <FormItem>
        <label id="emailLabel" htmlFor="email">
          Email
        </label>
        <input
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="email"
          name="email"
          id="email"
        />
        {error ? <Icons.EmailError /> : <Icons.Mail />}
      </FormItem>
      <FormItem>
        <label id="passwordLabel" htmlFor="password">
          Password
        </label>
        <input
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          minLength={8}
          type="password"
          name="password"
          id="password"
        />
        {error ? <Icons.PasswordError /> : <Icons.Password />}
      </FormItem>
      <FormItemCheckbox>
        <input
          onChange={(e) => setUser({ ...user, venueManager: e.target.checked })}
          type="checkbox"
        />
        <label htmlFor="">I want to be venue manager*</label>
      </FormItemCheckbox>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormBtnContainer>
        <FormBtn
          title="Create account"
          ariaLabel="Create account"
          onClick={handleCreateUser}
          Text="Create account"
        />
      </FormBtnContainer>
    </Form>
  );
}
