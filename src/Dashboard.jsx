import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={styles.chartPlaceholder}>
        <p>📈 Chart will go here</p>
      </div>
    </div>
  );
}

const styles = {
  chartPlaceholder: {
    margin: '2rem 0',
    padding: '2rem',
    border: '2px dashed #ccc',
    textAlign: 'center'
  }
};
