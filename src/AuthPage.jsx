import axios from 'axios';

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios.post(
      'http://localhost:3001/authenticate',
      { username: value }
    ).then(r => props.onAuth({ ...r.data, secret: value }))
      .catch(e => console.log('error', e))
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome sur Simeso 👋</div>

        <div className="form-subtitle">Définissez un nom d'utilisateur pour commencer</div>

        <div className="auth">
          <label htmlFor="username" className="auth-label">Nom d'utilisateur</label>
          <input
            id="username"
            className="auth-input"
            name="username"
            placeholder="Entrez votre nom d'utilisateur"
          />
          <button className="auth-button" type="submit">
            Entrer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
