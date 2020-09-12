import React from 'react';
import './App.css';
import Text from './Text.js'
import Table from './Table.js'
import Glows from './Glows.js'


function App() {
  return (
    <div className="App">
		<h1>Mirror-FP</h1>
		<Text />
		<button>Show me my fingerprint</button>
		<Table />
    <Glows />
    </div>
  );
}

export default App;



