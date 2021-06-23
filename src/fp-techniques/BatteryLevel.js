import React from 'react';

class BatteryLevel extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {};
    }

    componentDidMount() {
        this._isMounted = true;
        this._isMounted && this.getBatteryData();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    getBatteryLevel(battery) {
        return `${Math.floor(battery.level * 100)}% and ${battery.charging ? "charging" : "discharging"}`
    }
    getBatteryData() {
        if ('getBattery' in navigator) {
             navigator.getBattery().then(this.getBatteryLevel).then(data => this.setState({batterylevel: data}))
        }
    }
    
    render() {
        return (
            <tr>
                <td>Battery level</td>
                {this.state.batterylevel ?  <td>{this.state.batterylevel}</td> : <td className="unavailableFeature">This feature is unavailable for your browser or device.</td>}
            </tr>
        )
    }
}


export default BatteryLevel