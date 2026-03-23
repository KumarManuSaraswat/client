// src/pages/Register.jsx
const Register = () => {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Create an Account</h1>
      <p>Join FitCreator Hub to start sharing your fitness journey.</p>
      <form style={{ marginTop: '1rem' }}>
        <input type="text" placeholder="Username" style={{ padding: '0.5rem', margin: '0.5rem' }} /><br />
        <input type="email" placeholder="Email" style={{ padding: '0.5rem', margin: '0.5rem' }} /><br />
        <input type="password" placeholder="Password" style={{ padding: '0.5rem', margin: '0.5rem' }} /><br />
        <button type="button" style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>Sign Up</button>
      </form>
    </main>
  );
};

export default Register;