import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';
import Header from './Header';

function Login({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    setError('');

    const storedUser = JSON.parse(localStorage.getItem('userDetails'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      toast.success('Login successful!');
      handleLogin();
      navigate('/mainhome');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <Header />
      <div className="login-container container-fluid">
        <div className="row vh-100">
          <div className="col-md-6 mt-2 d-flex align-items-center justify-content-center">
            <img src="https://i.postimg.cc/vH4G2pV8/istockphoto-1440927302-612x612.jpg" alt="img"
              className="img-fluid border-5" 
              width={'100%'} />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="form-box login p-4">
              {error && <p className="error text-center">{error}</p>}
              <form onSubmit={onLogin}>
                <h1 className="text-center mb-4">Login</h1>
                <div className="input-box mb-3">
                  <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button className="btn btn-primary w-100" type="submit">
                  Login
                </button>
                <div className="register-link mt-3 text-center">
                  <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
