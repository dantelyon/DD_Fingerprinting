import React from 'react';

class dynamic_techniques extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastClick: "None yet",
            clicks: [],
            mouseMovement: "None yet",
            lastKeydown: "None yet",
            mouseWheels: 0,
            keyDowns: [],
            sessionDuration: parseInt((performance.now()/1000).toFixed(0.1)),
            tabChanges: 0,
        }
        this.handleClicks = this.handleClicks.bind(this);
        this.handleMouse = this.handleMouse.bind(this);
        this.handleWheels = this.handleWheels.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleTabchanges = this.handleTabchanges.bind(this);
      }
      componentDidMount() {
        window.addEventListener('mousedown', this.handleClicks);
        window.addEventListener('mousemove', this.handleMouse);
        window.addEventListener('wheel', this.handleWheels);
        window.addEventListener('keydown', this.handleKeydown);
        window.addEventListener('visibilitychange', this.handleTabchanges);
        this.sessionDuration = setInterval(() => { this.setState(prevState => ({sessionDuration: prevState.sessionDuration + 1})) }, 1000);
      }
      componentWillUnmount() {
        window.removeEventListener('mousedown', this.handleClicks);
        window.removeEventListener('mousemove', this.handleMouse);
        window.removeEventListener('keydown', this.handleKeydown);
        window.removeEventListener('visibilitychange', this.handleTabchanges);
        clearInterval(this.sessionDuration)
      }
      handleClicks(event) {
        this.setState(prevState => ({clicks: [...prevState.clicks, event]}))
        this.setState({lastClick: event});
      }
      handleMouse(event) {
        this.setState({mouseMovement: event});
      }
      handleWheels() {
        this.setState(prevState => ({mouseWheels: prevState.mouseWheels + 1}))
      }
      handleKeydown(event) {
        this.setState(prevState => ({keyDowns: [...prevState.keyDowns, event]}))
        this.setState({lastKeydown: event});
      }
      handleTabchanges() {
        if (document.hidden) this.setState(prevState => ({tabChanges: prevState.tabChanges + 1}))
      }

      render() {
          return (
              <tbody>
                    <tr>
                        <td>Clicks</td>
                        <td>{this.state.clicks.length ? 
                        this.state.clicks.length + `x, with latest click being: X:${this.state.lastClick.clientX} Y:${this.state.lastClick.clientY} at ${this.state.lastClick.timeStamp/1000} seconds after document creation.` : "None yet."} </td>
                    </tr>
                    <tr>
                        <td>Mouse movement</td>
                        <td>Screen X/Y: {this.state.mouseMovement.screenX}, {this.state.mouseMovement.screenY}. Client X/Y: {this.state.mouseMovement.clientX}, {this.state.mouseMovement.clientY}</td>
                    </tr> 
                    <tr>
                      <td>Mouse wheel events</td>
                      <td>{this.state.mouseWheels}</td>
                    </tr>
                    <tr>
                      <td>Zoom</td>
                      <td>{(window.devicePixelRatio * 100).toFixed(0)+"%"}</td>
                    </tr>
                    <tr>
                      <td>Browser window size</td>
                      <td>{`${window.outerWidth}x${window.outerHeight}`}</td>
                    </tr>
                    <tr>
                      <td>Viewport</td>
                      <td>{`${window.innerWidth}x${window.innerHeight}`}</td>
                    </tr>
                    <tr>
                      <td>Tab changes</td>
                      <td>{this.state.tabChanges}</td>
                    </tr>
                    <tr>
                        <td>Key presses</td>
                        <td>{this.state.keyDowns.length ? 
                        this.state.keyDowns.length + `x, with latest key press being: ${this.state.lastKeydown.code} (${this.state.lastKeydown.keyCode}) at ${this.state.lastKeydown.timeStamp/1000} seconds after document creation.` : "None yet."} </td>
                    </tr>
                    <tr>
                      <td>Session duration</td>
                      <td>{Math.floor(this.state.sessionDuration / 60) + " minutes"}</td>
                    </tr>
                    <tr>
                      <td>Page reloaded</td>
                      <td>{(performance.getEntriesByType("navigation")[0].type) === "reload" ? "Yes" : "No"}</td>
                    </tr>
              </tbody>
          )
      }
}

export default dynamic_techniques