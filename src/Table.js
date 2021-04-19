import React from 'react';
import './Table.css';
import STATIC from './Techniques/STATIC'
import Clicks from './Techniques/Clicks'
import KeyPresses from './Techniques/KeyPresses'
import MouseMovement from './Techniques/MouseMovement'
import MouseWheel from './Techniques/MouseWheel'
import SessionDuration from './Techniques/SessionDuration'
import TabChanges from './Techniques/TabChanges'
import Viewport from './Techniques/Viewport'
import ZoomLevel from './Techniques/ZoomLevel'
import Canvas from './Techniques/Canvas'
import WebGL from './Techniques/WebGL'
import DomRect from './Techniques/DomRect'
import Renderer from './Techniques/Renderer'
import AudioContext from './Techniques/AudioContext'
import LoggedAccounts from './Techniques/LoggedAccounts'
import DevToolsOpen from './Techniques/DevToolsOpen'
import SpeechVoices from './Techniques/SpeechVoices'
import GeoIP from './Techniques/GeoIP'
import BatteryLevel from './Techniques/BatteryLevel'

function Table(props) {
  return <table className={props.isTable ? "table" : "table hiddenTable"}>
    <colgroup>
      <col id="col1"></col>
      <col id="col2"></col>
    </colgroup>
    <tbody>
      <BatteryLevel />
      <GeoIP />
      <SpeechVoices />
      <DevToolsOpen />
      <LoggedAccounts />
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
    </tbody>
    <tbody>
      {STATIC.map(technique => <tr key={technique.name}><td>{technique.name}</td><td>{technique.value()}</td></tr>)}
    </tbody>
  </table>
}

export default Table

	