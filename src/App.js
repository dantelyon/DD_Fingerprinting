import React from 'react';
import './App.css';
import Text from './Text.js'
import Table from './Table.js'


function App() {
  return (
    <div className="App">
		<h1>Mirror-FP</h1>
		<Text />
		<button>Show me my fingerprint</button>
		<Table />
    </div>
  );
}

export default App;



