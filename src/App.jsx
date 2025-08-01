import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('https://backend-nd40.onrender.com')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => setMessage('Error fetching data'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Innovative Emini Trading</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;