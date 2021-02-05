import React from 'react';

class Renderer extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {};
    }
    componentDidMount() {
        this._isMounted = true;
        this._isMounted && this.renderer();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    async renderer() {
        if (window.WebGLRenderingContext || window.WebGL2RenderingContext) {
            let canvas = document.createElement("canvas");
            let webgl = canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl2") || canvas.getContext("experimental-webgl");
            let rendererData = await webgl.getParameter(webgl.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL)
            this._isMounted && this.setState({
                renderer: rendererData
            })
        }
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

export default Renderer

