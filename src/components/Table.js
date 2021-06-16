import React from 'react';
import '../css/Table.css';
import STATIC from '../fp-techniques/STATIC'
import Clicks from '../fp-techniques/Clicks'
import KeyPresses from '../fp-techniques/KeyPresses'
import PointerMovement from '../fp-techniques/PointerMovement'
import MouseWheel from '../fp-techniques/MouseWheel'
import SessionDuration from '../fp-techniques/SessionDuration'
import TabChanges from '../fp-techniques/TabChanges'
import Viewport from '../fp-techniques/Viewport'
import ZoomLevel from '../fp-techniques/ZoomLevel'
import Canvas from '../fp-techniques/Canvas'
import WebGL from '../fp-techniques/WebGL'
import DomRect from '../fp-techniques/DomRect'
import Renderer from '../fp-techniques/Renderer'
import AudioContext from '../fp-techniques/AudioContext'
import LoggedAccounts from '../fp-techniques/LoggedAccounts'
import DevToolsOpen from '../fp-techniques/DevToolsOpen'
import SpeechVoices from '../fp-techniques/SpeechVoices'
import GeoIP from '../fp-techniques/GeoIP'
import BatteryLevel from '../fp-techniques/BatteryLevel'
import AdBlocker from '../fp-techniques/AdBlocker'
import PageLoadTime from '../fp-techniques/PageLoadTime'

function Table(props) {
  return <table className={props.showingTable ? "table" : "table hiddenTable"}>
    <colgroup>
      <col id="col1"></col>
      <col id="col2"></col>
    </colgroup>
    <tbody>
      <Renderer />
      <DomRect />
      <WebGL />
      <Canvas />
      <AudioContext />
      <ZoomLevel />
      <Viewport />
      <DevToolsOpen />
      <Clicks />
      <KeyPresses />
      <PointerMovement />
      <MouseWheel />
      <SessionDuration />
      <TabChanges />
      <BatteryLevel />
      <SpeechVoices />
      <LoggedAccounts />
      <AdBlocker />
      <PageLoadTime />
      <GeoIP />
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

	