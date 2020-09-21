
import React from 'react';
import './App.css';
import Text from './Text.js'
import Table from './Table.js'
import Glows from './Glows.js'
import Header from './Header.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: true,
      showAbout: false,
    }
    this.showTable = this.showTable.bind(this);
    this.showAbout = this.showAbout.bind(this);
  }

  showTable = () => this.setState(() => ({showTable: true, showAbout: false}));
  showAbout = () => this.setState(() => ({showAbout: true, showTable: false}));

  render() {
    return (
      <div className="App">
      <Header showAbout={this.showAbout} showTable={this.showTable} />
      <main>
        <div className="container">
          <Text showAbout={this.state.showAbout} />
          <Table showTable={this.state.showTable} />
          <Glows />
        </div>
      </main>
    </div>
    )
  }
}

export default App;


