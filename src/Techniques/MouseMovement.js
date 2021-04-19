import React from 'react';

class MouseMovements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mouseMovement: 0}
        this.handleMouse = this.handleMouse.bind(this);
      }

      componentDidMount() {
        window.addEventListener('mousemove', this.handleMouse);
      }
      componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouse);
      }

      handleMouse(event) {
        this.setState({mouseMovement: event});
      }

      render() {
        return (
          <tr>
            <td>Mouse movement</td>
            <td>{this.state.mouseMovement.clientX || 0}x{this.state.mouseMovement.clientY || 0}</td>
          </tr> 
        )
      }
}

export default MouseMovements