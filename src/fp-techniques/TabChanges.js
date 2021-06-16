import React from 'react';

class TabChanges extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tabChanges: 0,
        }
        this.handleTabchanges = this.handleTabchanges.bind(this);
      }

      componentDidMount() {
        window.addEventListener('visibilitychange', this.handleTabchanges);
      }
      componentWillUnmount() {
        window.removeEventListener('visibilitychange', this.handleTabchanges);
      }

      handleTabchanges() {
        if (document.hidden) this.setState(prevState => ({tabChanges: prevState.tabChanges + 1}))
      }

      render() {
        return (
          <tr>
            <td>Tab changes</td>
            <td>{this.state.tabChanges}</td>
          </tr>
        )
      }
}

export default TabChanges