import React from 'react';
import './App.css';
import Text from './Text.js'
import Table from './Table.js'
import Glows from './Glows.js'
import Header from './Header.js'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
       
      <Text />
      <button>Show me my fingerprint</button>
      <Table />
<Glows />
      </main>
    </div>
  );
}

export default App;



