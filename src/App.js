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
      isTable: true,
      isAbout: false,
    }
    this.showTable = this.showTable.bind(this);
    this.showAbout = this.showAbout.bind(this);
  }

  showTable = () => this.setState(() => ({isTable: true, isAbout: false}));
  showAbout = () => this.setState(() => ({isAbout: true, isTable: false}));

  render() {
    return (
      <div className="App">
        <Header showAbout={this.showAbout} showTable={this.showTable} />
        <main>
          <div className="container">
            <Text isAbout={this.state.isAbout} showAbout={this.showAbout} />
            <Table isTable={this.state.isTable} />
            <Glows />
          </div>
        </main>
      </div>
    )
  }
}

export default App;


