import React from 'react';
import '../css/Table.css';
import STATIC from '../techniques/STATIC'
import Clicks from '../techniques/Clicks'
import KeyPresses from '../techniques/KeyPresses'
import MouseMovement from '../techniques/MouseMovement'
import MouseWheel from '../techniques/MouseWheel'
import SessionDuration from '../techniques/SessionDuration'
import TabChanges from '../techniques/TabChanges'
import Viewport from '../techniques/Viewport'
import ZoomLevel from '../techniques/ZoomLevel'
import Canvas from '../techniques/Canvas'
import WebGL from '../techniques/WebGL'
import DomRect from '../techniques/DomRect'
import Renderer from '../techniques/Renderer'
import AudioContext from '../techniques/AudioContext'
import LoggedAccounts from '../techniques/LoggedAccounts'
import DevToolsOpen from '../techniques/DevToolsOpen'
import SpeechVoices from '../techniques/SpeechVoices'
import GeoIP from '../techniques/GeoIP'
import BatteryLevel from '../techniques/BatteryLevel'
import AdBlocker from '../techniques/AdBlocker'

function Table(props) {
  return <table className={props.showingTable ? "table" : "table hiddenTable"}>
    <colgroup>
      <col id="col1"></col>
      <col id="col2"></col>
    </colgroup>
    <tbody>
      <SpeechVoices />
      <DevToolsOpen />
      <LoggedAccounts />
      <GeoIP />
      <AudioContext />
      <Renderer />
      <DomRect />
      <WebGL />
      <Canvas />
      <ZoomLevel />
      <Viewport />
      <Clicks />
      <KeyPresses />
      <MouseMovement />
      <MouseWheel />
      <SessionDuration />
      <TabChanges />
      <BatteryLevel />
      <AdBlocker />
    </tbody>
    <tbody>
      {
        STATIC.map(technique => {
          const result = technique.value();
          const unavailableFeature = result === "Unavailable" || result === null || result === "undefined" || result === false;
          const tableRow = <tr key={technique.name}>
              <td>{technique.name}</td>
              {unavailableFeature ? <td className="unavailableFeature">This feature is unavailable for your browser or device.</td> : <td>{result}</td>}
            </tr>
          return tableRow
        })
      }
    </tbody>
  </table>
}

export default Table

	