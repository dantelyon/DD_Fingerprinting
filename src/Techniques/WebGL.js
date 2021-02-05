import React from 'react';

class WebGLData extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {};
    }

    componentDidMount() {
        this._isMounted = true;
        this._isMounted && this.webGL();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    async webGL() {
        let canvas = document.createElement('canvas')
        let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        let vertexPosBuffer = gl.createBuffer()
        let vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0])
        let program = gl.createProgram()
        let vshader = gl.createShader(gl.VERTEX_SHADER)
        let fshader = gl.createShader(gl.FRAGMENT_SHADER)
        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(gl.LEQUAL)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
        vertexPosBuffer.itemSize = 3
        vertexPosBuffer.numItems = 3
        gl.shaderSource(vshader, 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}')
        gl.compileShader(vshader)
        gl.shaderSource(fshader, 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}')
        gl.compileShader(fshader)
        gl.attachShader(program, vshader)
        gl.attachShader(program, fshader)
        gl.linkProgram(program)
        gl.useProgram(program)
        program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
        program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
        gl.enableVertexAttribArray(program.vertexPosArray)
        gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
        gl.uniform2f(program.offsetUniform, 1, 1)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
        let data = gl.canvas.toDataURL()
        let hash = 0;
        for (let i = 0; i < data.length; i++) {
            hash = (((hash<<5) - hash) + data.charCodeAt(i));
        }
        this._isMounted && this.setState({
            webglhash: (hash&0xFFFFFFFF).toString(16)
        })
    }
    
    render() {
        return (
            <tr>
                <td>WebGL hash</td>
                <td>{this.state.webglhash}</td>
            </tr>
        )
    }
}

export default WebGLData
