const Login = () => {
  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form">
        <label>
          Email
          <input type="email" required />
        </label>

        <label>
          Пароль
          <input type="password" min="8" required />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
