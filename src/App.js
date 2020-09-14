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
        <div className="container">
          <Text />
          <Table />
          <Glows />
        </div>
      </main>
    </div>
  );
}

export default App;



