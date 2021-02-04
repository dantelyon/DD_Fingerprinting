import React from 'react';

class dynamic_techniques extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseMovement: "None yet",
            browser: `${window.outerWidth}x${window.outerHeight}`
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
              <tbody>
                    <tr>
                      <td>Zoom</td>
                      <td>{(window.devicePixelRatio * 100).toFixed(0)+"%"}</td>
                    </tr>
              </tbody>
          )
      }
}

export default dynamic_techniques