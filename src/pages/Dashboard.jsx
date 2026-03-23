// src/pages/Dashboard.jsx
const Dashboard = () => {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Creator Dashboard</h1>
      <p>Here you can manage your workout videos, track subscribers, and view analytics.</p>
      <div style={{ padding: '1rem', border: '1px dashed #ccc', marginTop: '1rem' }}>
        <h3>Recent Workouts Uploaded</h3>
        <ul>
          <li>15-Min HIIT Cardio</li>
          <li>Beginner Yoga Flow</li>
          <li>Upper Body Strength</li>
        </ul>
      </div>
    </main>
  );
};

export default Dashboard;