import React from 'react';

class SessionDuration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sessionDuration: 0,
        }
      }

      componentDidMount() {
        this.sessionDuration = setInterval(() => { this.setState(prevState => ({sessionDuration: prevState.sessionDuration + 1})) }, 60000);
      } //Alternatively use performance.now() or document.timeline. Something like Math.floor((performance.now()/60000))
      componentWillUnmount() {
        clearInterval(this.sessionDuration)
      }

      render() {
        return (
          <tr>
            <td>Session duration</td>
            <td>{this.state.sessionDuration + " minutes"}</td>
          </tr> 
        )
      }
}

export default SessionDuration