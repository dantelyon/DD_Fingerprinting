import React from 'react';

class DevToolsOpen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      orientation: undefined
    }
    this.isDevToolsOpen = this.isDevToolsOpen.bind(this);
  }
  
  componentDidMount() {
    this.isDevToolsOpen()
    window.addEventListener('resize', this.isDevToolsOpen);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.isDevToolsOpen);
  }
  
  isDevToolsOpen() {
    const threshold = 180; // Consider changing to something relative, like (window.outerHeight * 0.2) and (window.outerWidth * 0.1)
		const widthThreshold = window.outerWidth - window.innerWidth > threshold;
		const heightThreshold = window.outerHeight - window.innerHeight > threshold;
		if (heightThreshold ^ widthThreshold) {
      this.setState({ isOpen: true, orientation: widthThreshold ? 'vertically' : 'horizontally' });
		} else {
      this.setState({ isOpen: false, orientation: undefined });
		}
  }
  
  render() {
    return (
      <tr>
        <td>Developer tools open</td>
        <td>{this.state.isOpen ? `${this.state.isOpen}, ${this.state.orientation}` : `${this.state.isOpen}`}</td>
      </tr>
    )
  }
}

export default DevToolsOpen