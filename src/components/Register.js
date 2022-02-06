import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as auth from '../utils/auth';

const Register = (props) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = userData;
    auth.register(email, password).then((res) => {
      if (res.ok) {
        props.history.push('/sign-in');
      }
    });
  };

  return (
    <>
      <div className="auth">
        <h2 className="auth__title">Регистрация</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={userData.email || ''}
            onChange={handleChange}
            required
          />
          <input
            id="password"
            name="password"
            type="password"
            min="8"
            placeholder="Пароль"
            value={userData.password || ''}
            onChange={handleChange}
            required
          />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
      <Link to="/sign-in" className="auth__login-hint">
        Уже зарегистрированы? Войти
      </Link>
    </>
  );
};

export default withRouter(Register);
