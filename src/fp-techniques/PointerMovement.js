import React from 'react';

class PointerMovements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pointerMovement: 0}
        this.handleMovement = this.handleMovement.bind(this);
      }

      componentDidMount() {
        window.addEventListener('pointermove', this.handleMovement);
      }
      componentWillUnmount() {
        window.removeEventListener('pointermove', this.handleMovement);
      }

      handleMovement(event) {
        this.setState({pointerMovement: event});
      }

      render() {
        return (
          <tr>
            <td>Pointer movement</td>
            <td>{this.state.pointerMovement.clientX || 0}x{this.state.pointerMovement.clientY || 0}</td>
          </tr> 
        )
      }
}

export default PointerMovements