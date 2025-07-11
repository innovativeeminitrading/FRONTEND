import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  return (
    <Router>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </nav>

      <div style={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  navbar: {
    padding: '1rem',
    background: '#f8f9fa',
    display: 'flex',
    gap: '1rem'
  },
  link: {
    textDecoration: 'none',
    color: '#007bff'
  },
  container: {
    padding: '1rem'
  }
};

export default App;
