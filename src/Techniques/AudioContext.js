import React from 'react';

class AudioContextData extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            audiodata: "Unavailable",
        };
    }

    componentDidMount() {
        this._isMounted = true;
        this._isMounted && this.audioData();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    async audioData() {
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
            this._isMounted && this.setState({
                audiodata: `${audioFP}, ${audioData}`
            })
        }
    }

    render() {
        return (
            <tr>
                <td>Audio data</td>
                <td>{this.state.audiodata}</td>
            </tr>
        )
    }
}

export default AudioContextData

