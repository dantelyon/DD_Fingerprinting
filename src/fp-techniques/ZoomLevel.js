import React from 'react';

class ZoomLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          zoom: (window.devicePixelRatio * 100).toFixed(0)
        }
        this.handleZoom = this.handleZoom.bind(this);
      }

      componentDidMount() {
        window.addEventListener('resize', this.handleZoom);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleZoom);
      }

      handleZoom() {
        this.setState({zoom: (window.devicePixelRatio * 100).toFixed(0)});
      }

      render() {
        return (
          <tr>
            <td>Zoom level</td>
            <td>{this.state.zoom + "% (Chrome only)"}</td>
          </tr>
        )
      }
}

export default ZoomLevel

/* 
ALTERNATIVE ZOOM DETECTION
function getZoomValues() {
  const zoom = Math.round(((window.outerWidth) / window.innerWidth)*100) / 100;
  const device = Math.round(((window.outerWidth) / window.innerWidth)*100) / 100 * (window.devicePixelRatio || 1);
  console.log(parseFloat(zoom, 10).toFixed(2));
  console.log(parseFloat(device, 10).toFixed(2));
}
window.addEventListener('resize', getZoomValues);
*/
