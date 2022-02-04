const Login = () => {
  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form">
        <input type="email" placeholder="Email" required />
        <input type="password" min="8" placeholder="Пароль" required />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
