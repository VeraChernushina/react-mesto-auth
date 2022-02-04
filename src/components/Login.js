const Login = () => {
  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form">
        <input type="email" placeholder="Email" required />
        <input type="password" min="8" placeholder="Пароль" required />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
