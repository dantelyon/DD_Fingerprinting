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
            domrect: await domRect(),
            webgl: await webGL(),
			canvas: await canvas(),
		});
		
        let AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if (AudioContext == null) return
        this.audioContext = new AudioContext(1, 44100, 44100)
    
        this.destination = this.audioContext.destination
        this.oscillator = this.audioContext.createOscillator()
        this.oscillator.type = 'triangle'
        this.oscillator.frequency.setValueAtTime(10000, this.audioContext.currentTime)
    
        this.compressor = this.audioContext.createDynamicsCompressor();
        this.compressor.threshold && (this.compressor.threshold.value = -50);
        this.compressor.knee && (this.compressor.knee.value = 40);
        this.compressor.attack && (this.compressor.attack.value = 0);
    
        this.oscillator.connect(this.compressor)
        this.compressor.connect(this.destination)
        this.oscillator.start(0)
        this.audioContext.startRendering()

        this.audioContext.oncomplete = (event) => {
			const audioData = `${(this.audioContext.sampleRate).toString()}_${this.destination.maxChannelCount}_${this.destination.numberOfInputs}_${this.destination.numberOfOutputs}_${this.destination.channelCount}_${this.destination.channelCountMode}_${this.destination.channelInterpretation}`;
            let audioFP = event.renderedBuffer.getChannelData(0)
                .slice(4500, 5000)
                .reduce((acc, val) => acc + Math.abs(val), 0)
                .toString()
            this.oscillator.disconnect()
            this.compressor.disconnect()
			this.setState({audiodata: `${audioFP}, ${audioData}`})
        }
    }
    
    componentWillUnmount() {
        this._isMounted = false;
    }
    
    render() {
          return (
              <tbody>
                  <tr>
                      <td>Renderer</td>
                      <td>{this.state.renderer}</td>
                  </tr>
				  <tr>
                      <td>DOM Rect height</td>
                      <td>{this.state.domrect}</td>
                  </tr>
				  <tr>
                      <td>Web GL hash</td>
                      <td>{this.state.webgl}</td>
                  </tr>
				  <tr>
                      <td>Canvas hash</td>
                      <td>{this.state.canvas}</td>
                  </tr>
				  <tr>
                      <td>Audio data</td>
                      <td>{this.state.audiodata}</td>
                  </tr>
              </tbody>
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

function domRect(){
	let elem = document.createElement('div');
	let s = elem.style;
	s.position = 'absolute';
	s.left = '3.1px';
	s.top = '2.1px';
	s.zIndex = '-100';
	s.visibility = 'hidden';
	s.fontSize = '19.123px';
	s.transformOrigin = '0.1px 0.2px 0.3px';
	s.webkitTransformOrigin = '0.1px 0.2px 0.3px';
	s.webkitTransform = 'scale(1.01123) matrix3d(0.251106, 0.0131141, 0, -0.000109893, -0.0380797, 0.349552, 0, 7.97469e-06, 0, 0, 1, 0, 575, 88, 0, 1)';
	s.transform = 'scale(1.01123) matrix3d(0.251106, 0.0131141, 0, -0.000109893, -0.0380797, 0.349552, 0, 7.97469e-06, 0, 0, 1, 0, 575, 88, 0, 1)';
	elem.innerHTML = '<h1>Sed ut perspiciatis unde</h1>dahlberg<b>dahl<i id="target">dahl</i></b>';
	document.body.appendChild(elem);
	let rect = document.getElementById('target').getClientRects()[0];
	elem.remove();
	return rect.height // to do: turn the full domrect into a hash
}

function webGL() {
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
	return (hash&0xFFFFFFFF).toString(16);
}

function canvas(){
	let canvas = document.createElement("canvas")
	let context = canvas.getContext("2d")
	canvas.width = 320
	canvas.height = 200
	context.font = "14px 'Arial'"
	context.fillStyle = "#f60"
	context.fillRect(20, 1, 62, 100)
	context.fillStyle = "#069"
	context.fillText("MNOP_dahlberg~1!2@", 2, 15);
	context.fillStyle = "rgba(102, 204, 0, 0.7)"
	context.fillText("MNOP_dahlberg~1!2@", 4, 45)
	context.fillStyle = "rgb(255,0,255)"
	context.fillRect(200, 1, 62, 100)
	let data = canvas.toDataURL();
	let hash = 0;
	for (let i = 0; i < data.length; i++) {
		hash = (((hash<<5) - hash) + data.charCodeAt(i));
	}
	return (hash&0xFFFFFFFF).toString(16);
}


