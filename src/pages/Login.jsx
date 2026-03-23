// src/pages/Login.jsx
const Login = () => {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Login</h1>
      <p>Welcome back! Enter your credentials to access your workout plans.</p>
      {/* Placeholder form - no functionality needed per assignment instructions */}
      <form style={{ marginTop: '1rem' }}>
        <input type="email" placeholder="Email" style={{ padding: '0.5rem', margin: '0.5rem' }} /><br />
        <input type="password" placeholder="Password" style={{ padding: '0.5rem', margin: '0.5rem' }} /><br />
        <button type="button" style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>Log In</button>
      </form>
    </main>
  );
};

export default Login;