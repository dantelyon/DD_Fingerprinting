
import React from 'react';
import './Table.css';
import STATIC from './Techniques/STATIC'
import ASYNC from './Techniques/ASYNC'

import Clicks from './Techniques/Clicks'
import KeyPresses from './Techniques/KeyPresses'
import MouseMovement from './Techniques/MouseMovement'
import MouseWheel from './Techniques/MouseWheel'
import SessionDuration from './Techniques/SessionDuration'
import TabChanges from './Techniques/TabChanges'
import Viewport from './Techniques/Viewport'
import BrowserWindowSize from './Techniques/BrowserWindowSize'
import ZoomLevel from './Techniques/ZoomLevel'


function Table(props) {
  return <table className={props.isTable ? "table" : "table hiddenTable"}>
    <colgroup>
      <col id="col1"></col>
      <col id="col2"></col>
    </colgroup>
    <ZoomLevel />
    <Viewport />
    <BrowserWindowSize />
    <Clicks />
    <KeyPresses />
    <MouseMovement />
    <MouseWheel />
    <SessionDuration />
    <TabChanges />
    <tbody>
      {STATIC.map(technique => <tr key={technique.name}><td>{technique.name}</td><td>{technique.value()}</td></tr>)}
    </tbody>
    <ASYNC />
  </table>
}

export default Table

	