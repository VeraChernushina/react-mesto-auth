import { useState } from 'react';

const Register = () => {
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
  };

  return (
    <>
      <div className="auth">
        <h2 className="auth__title">Регистрация</h2>
        <form className="auth__form">
          <input type="email" placeholder="Email" required />
          <input type="password" min="8" placeholder="Пароль" required />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
      <p className="auth__login-hint">Уже зарегистрированы? Войти</p>
    </>
  );
};

export default Register;
