import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [redirecting, setRedirecting] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (username === 'Harshita' && password === 'harshita2003') {
      setErrorMessage('Login successful! Redirecting...');
      setRedirecting(true);
    } else {
      setErrorMessage('Username or password is wrong');
      setTimeout(() => setErrorMessage(''), 2000);
    }
  };

  useEffect(() => {
    if (redirecting) {
      const redirectTimer = setTimeout(() => {
        navigate('/loginform'); 
      }, 2000);

      return () => clearTimeout(redirectTimer);
    }
  }, [redirecting, navigate]);

  return (
    <div className='outerdiv'>
      <div className='logindiv'>
        <h2 className='heading'>Login</h2>
        <form className='loginform'>
          <input
            type='text'
            placeholder='Username'
            className='form-text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            className='form-text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className='label'>Show Password</label>
          <input
            type='checkbox'
            checked={showPassword}
            onChange={handlePasswordToggle}
          />
        </form>

        <button className='loginbutton' onClick={handleLogin}>
          Login
        </button>
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;
