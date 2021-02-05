import React from 'react';

class async_techniques extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {}
    }
    
    async componentDidMount() {
        this._isMounted = true;
        this._isMounted && this.setState({
            renderer: await renderer(),
		});
		
    }
    
    componentWillUnmount() {
        this._isMounted = false;
    }
    
    render() {
          return (
                  <tr>
                      <td>Renderer</td>
                      <td>{this.state.renderer}</td>
                  </tr>
          )
      }
}

export default async_techniques


function renderer() {
	if (window.WebGLRenderingContext || window.WebGL2RenderingContext) {
		let canvas = document.createElement("canvas");
		let webgl = canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl2") || canvas.getContext("experimental-webgl");
		return webgl.getParameter(webgl.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL)
	}
}
