import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Welcome to Innovative Emini Trading</h1>
      <p>This is your Vite + React setup.</p>
    </div>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
