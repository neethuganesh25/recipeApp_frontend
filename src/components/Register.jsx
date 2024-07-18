import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';
import Header from '../components/Header'
import './Register.css'

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (name.trim() === '') {
      setError('Name is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (username.trim() === '') {
      setError('Username is required');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      // Save user details to local storage
      const userDetails = { name, email, username, password };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));

      toast.success('Registration successful!');

      navigate('/login');
      setIsLoading(false);
    }, 1000);
  };

  return (
    
   <>
   <Header/>
    <div className="login-container container-fluid">
      <div className="row vh-100">
        <div className="col-md-6 d-md-flex align-items-center mt-2 justify-content-center">
          <img src="https://i.postimg.cc/vH4G2pV8/istockphoto-1440927302-612x612.jpg" alt="" 
            className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="form-box register p-4">
            {error && <p className="error text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
              <h1 className="text-center mb-4">Register</h1>
              <div className="input-box mb-3">
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-box mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
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
              <div className="input-box mb-3">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button className="btn btn-primary w-100" type="submit" disabled={isLoading}>
                {isLoading ? 'Registering...' : 'Register'}
              </button>
              <div className="register-link mt-3 text-center">
                <p>Already registered? <Link to="/login">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default Register;
