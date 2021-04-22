import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json())
    .catch((error) => {
      console.error(error);
    });
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Авторизация на сайте</h1>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>
            <p>Логин:</p>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
          </label>
        </div>
        <div className="form-control">
          <label>
            <p>Пароль:</p>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <div className="btn btn-block">
          <button type="submit">войти</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
