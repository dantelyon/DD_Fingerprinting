import React from 'react';

class dynamic_techniques extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseMovement: "None yet",
        }
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
                        <td>Screen X/Y: {this.state.mouseMovement.screenX}, {this.state.mouseMovement.screenY}. Client X/Y: {this.state.mouseMovement.clientX}, {this.state.mouseMovement.clientY}</td>
                    </tr> 
          )
      }
}

export default dynamic_techniques