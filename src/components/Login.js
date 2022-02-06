import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as auth from '../utils/auth';

const Login = (props) => {
  const [loginData, setLoginData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!loginData.email || !loginData.password) {
      return;
    }
    const { email, password } = loginData;
    auth.authorize(email, password).then((data) => {
      if (data.token) {
        setLoginData({
          email: '',
          password: '',
        });
        props.history.push('/');
      }
    });
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          min="8"
          placeholder="Пароль"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
