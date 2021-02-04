import React from 'react';

class dynamic_techniques extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseWheels: 0,
        }
        this.handleWheels = this.handleWheels.bind(this);
      }
      componentDidMount() {
        window.addEventListener('wheel', this.handleWheels);
      }
      componentWillUnmount() {
        window.removeEventListener('wheel', this.handleWheels);
      }
      handleWheels() {
        this.setState(prevState => ({mouseWheels: prevState.mouseWheels + 1}))
      }

      render() {
          return (
                    <tr>
                      <td>Mouse wheel events</td>
                      <td>{this.state.mouseWheels}</td>
                    </tr>
          )
      }
}

export default dynamic_techniques