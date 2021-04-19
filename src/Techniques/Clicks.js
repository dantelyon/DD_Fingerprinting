import React from 'react';

class Clicks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lastClick: "None yet",
          clicks: [],
        }
        this.handleClicks = this.handleClicks.bind(this);
      }

      componentDidMount() {
        window.addEventListener('mousedown', this.handleClicks);
      }
      componentWillUnmount() {
        window.removeEventListener('mousedown', this.handleClicks);
      }

      handleClicks(event) {
        this.setState(prevState => ({clicks: [...prevState.clicks, event]}))
        this.setState({lastClick: event});
      }

      render() {
        return (
          <tr>
            <td>Clicks</td>
            <td>{this.state.clicks.length ? this.state.clicks.length + `, with latest click at: ${this.state.lastClick.clientX}x${this.state.lastClick.clientY}` : "None yet."}</td>
          </tr>
        )
      }
}

export default Clicks