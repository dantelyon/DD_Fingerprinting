import React from 'react';

class KeyPresses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lastKeydown: "None yet",
          keyDowns: [],
        }
        this.handleKeydown = this.handleKeydown.bind(this);
      }

      componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
      }
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
      }

      handleKeydown(event) {
        this.setState(prevState => ({keyDowns: [...prevState.keyDowns, event]}))
        this.setState({lastKeydown: event});
      }

      render() {
        return (
          <tr>
            <td>Key presses</td>
            <td>{this.state.keyDowns.length ? this.state.keyDowns.length + `, with latest key press being: ${this.state.lastKeydown.code} (${this.state.lastKeydown.keyCode})` : "None yet."}</td>
          </tr>
        )
      }
}

export default KeyPresses