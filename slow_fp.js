
function adblocking() {
	let ads = document.createElement("div")
	ads.innerHTML = '&nbsp;'
	ads.className = 'adsbox'
	document.body.appendChild(ads)
	let result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0;
	document.body.removeChild(ads)
	return result
}

function renderer() {
	if (1 == !!window.WebGLRenderingContext || 1 == !!window.WebGL2RenderingContext) {
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
	return rect
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

function accounts() {
    const platforms = {
        "VK": "https://vk.com/login?u=2&to=ZmF2aWNvbi5pY28-",
        "Indeed": "https://secure.indeed.com/account/login?continue=%2ffavicon.ico",
        "BitBucket": "https://bitbucket.org/account/signin/?next=/favicon.ico",
        "Meetup": "https://secure.meetup.com/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif",
        "Khan Academy": "https://www.khanacademy.org/login?continue=https%3A//www.khanacademy.org/favicon.ico",
        "Twitch": "www.twitch.tv/login?redirect_on_login=/favicon.ico",
        "Disqus": "https://disqus.com/profile/login/?next=https%3A%2F%2Fdisqus.com%2Ffavicon.ico",
        "Airbnb": "https://www.airbnb.com/login?redirect_params[action]=favicon.ico&redirect_params[controller]=home",
        "Paypal": "https://www.paypal.com/signin?returnUri=https://t.paypal.com/ts?v=1.0.0",
        "Slack": "https://slack.com/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23",
        "Edx": "https://courses.edx.org/login?next=/favicon.ico",
        "Hackernews": "https://news.ycombinator.com/login?goto=y18.gif%23",
        "Medium": "https://medium.com/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default",
        "Github": "https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1",
        "Steam": "https://store.steampowered.com/login/?redir=favicon.ico",
        "Battle.net": "https://eu.battle.net/login/de/index?ref=http://eu.battle.net/favicon.ico",
        "Pinterest": "https://www.pinterest.com/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
        "Amazon": "https://www.amazon.com/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
        "Dropbox": "https://www.dropbox.com/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg",
        "Expedia": "https://www.expedia.de/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
        "Tumblr": "https://www.tumblr.com/login?redirect_to=%2Ffavicon.ico",
        "Reddit": "https://www.reddit.com/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
        "Spotify": "https://www.spotify.com/en/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
        "Skype": "https://login.skype.com/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
        "Youtube": "https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube",
        "Gmail": "https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
        "Facebook": "https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
        "Twitter": "https://twitter.com/login?redirect_after_login=%2f..%2ffavicon.ico"
    }
    let loggedInto = []
    for (let property in platforms){
        let img = document.createElement("img");
        img.referrerPolicy = "no-referrer";
        img.src = platforms[property];
        img.onload = () => loggedInto.push(property);
    }
    return loggedInto
};


function audioFP(){
    if (navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return "exluded"
    /* Safari on iOS 11 seems to automatically suspend new AudioContext's that aren't created in response to a tap. You can resume() them, but only in response to a tap. 
        Chrome mobile also does this, and Chrome desktop will have the same limitation starting in version 70 / December 2018. */
    
    try{
    	let AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if (AudioContext == null) return
        let audioContext = new AudioContext(1, 44100, 44100)

        let destination = audioContext.destination
        let oscillator = audioContext.createOscillator()
        oscillator.type = 'triangle'
        oscillator.frequency.setValueAtTime(10000, audioContext.currentTime)
        let compressor = audioContext.createDynamicsCompressor()
        compressor.threshold && (compressor.threshold.value = -50);
        compressor.knee && (compressor.knee.value = 40);
        compressor.attack && (compressor.attack.value = 0);

        oscillator.connect(compressor)
        compressor.connect(destination)
        oscillator.start(0)
        audioContext.startRendering()
        audioContext.oncomplete = (event) => {
          let fingerprint
          try {
          	fingerprint = event.renderedBuffer.getChannelData(0)
              .slice(4500, 5000)
              .reduce((acc, val) => acc + Math.abs(val), 0)
              .toString()
            oscillator.disconnect()
        	compressor.disconnect()
          } catch (error) {return error}
          const audioData = (audioContext.sampleRate).toString() + '_' + destination.maxChannelCount + "_" + destination.numberOfInputs + '_' + destination.numberOfOutputs + '_' + destination.channelCount + '_' + destination.channelCountMode + '_' + destination.channelInterpretation;
          let tr = document.createElement("tr")
          let td1 = document.createElement("td")
          let td2 = document.createElement("td")
          td1.innerHTML = "audio FP"
          td2.innerHTML = fingerprint + " and " + audioData
          tr.appendChild(td1)
          tr.appendChild(td2)
          document.getElementById("table").appendChild(tr)
        }
    }catch(error){return "ERROR HEHE -->  " + error;}
}