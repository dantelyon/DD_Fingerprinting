import React from 'react';

class SessionDuration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionDuration: parseInt((performance.now()/1000).toFixed(0.1)),
        }
      }
      componentDidMount() {
        this.sessionDuration = setInterval(() => { this.setState(prevState => ({sessionDuration: prevState.sessionDuration + 1})) }, 1000);
      }
      componentWillUnmount() {
        clearInterval(this.sessionDuration)
      }

      render() {
          return (
              <tr>
                      <td>Session duration</td>
                      <td>{Math.floor(this.state.sessionDuration / 60) + " minutes"}</td>
                    </tr>
                    
          )
      }
}

export default SessionDuration