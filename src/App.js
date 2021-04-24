import React from 'react';
import './css/App.css';
import Text from './components/Text.js'
import Table from './components/Table.js'
import Glows from './components/Glows.js'
import Header from './components/Header.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingTable: true,
      showingAbout: false,
    }
    this.showTable = this.showTable.bind(this);
    this.showAbout = this.showAbout.bind(this);
  }

  showTable = () => this.setState(() => ({showingTable: true, showingAbout: false}));
  showAbout = () => this.setState(() => ({showingAbout: true, showingTable: false}));

  render() {
    return (
      <div className="App">
        <Header showAbout={this.showAbout} showTable={this.showTable} />
        <main>
          <div className="container">
            <Text showingAbout={this.state.showingAbout} showAbout={this.showAbout} />
            <Table showingTable={this.state.showingTable} />
            <Glows />
          </div>
        </main>
      </div>
    )
  }
}

export default App;


