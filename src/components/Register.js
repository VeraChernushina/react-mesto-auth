import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as auth from '../utils/auth';

const Register = (props) => {
  const [registrationData, setRegistrationData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = registrationData;
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
            value={registrationData.email || ''}
            onChange={handleChange}
            required
          />
          <input
            id="password"
            name="password"
            type="password"
            min="8"
            placeholder="Пароль"
            value={registrationData.password || ''}
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
