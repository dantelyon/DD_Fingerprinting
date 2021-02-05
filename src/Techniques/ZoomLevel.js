import React from 'react';

class ZoomLevel extends React.Component {
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
                    <tr>
                      <td>Zoom</td>
                      <td>{(window.devicePixelRatio * 100).toFixed(0)+"%"}</td>
                    </tr>
          )
      }
}

export default ZoomLevel