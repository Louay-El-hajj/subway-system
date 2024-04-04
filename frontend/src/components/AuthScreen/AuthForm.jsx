import React, { useState } from "react";
import axios from "axios";
import "../../styles/Auth/AuthForm.css";


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const endpoint = isLogin
      ? "http://127.0.0.1:8000/api/login"
      : "http://127.0.0.1:8000/api/registerPassenger";
    const data = isLogin ? { email, password } : { name, email, password }; 

    try {
      const response = await axios.post(endpoint, data);
      const token = response.data.token;
      localStorage.setItem('token', token); 
      console.log('Authentication successful', token);
    } catch (error) {
      setError(error.response.data.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={!isLogin} 
            />
          </div>
        )}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <button onClick={toggleForm}>
        {isLogin ? 'Need an account? Sign up' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default AuthForm;
