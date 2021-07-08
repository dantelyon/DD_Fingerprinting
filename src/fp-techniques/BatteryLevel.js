import React, { useState } from 'react';

function getBatteryLevel(battery) {
    return `${Math.floor(battery.level * 100)}% and ${battery.charging ? "charging" : "discharging"}`
}

const BatteryLevel = () => {
    const [batteryLevel, setBatteryLevel] = useState(0);
    
    if ('getBattery' in navigator) {
        navigator.getBattery()
            .then(getBatteryLevel)
            .then(setBatteryLevel)
    }
    
    return (
        <tr>
            <td>Battery level</td>
            {batteryLevel ?  <td>{batteryLevel}</td> : <td className="unavailableFeature">This feature is unavailable for your browser or device.</td>}
        </tr>
    );
};

export default BatteryLevel;