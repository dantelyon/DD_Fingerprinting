import React from 'react';

class SpeechSynthesisVoices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          voices: 0
        }
        this.getSpeechVoices = this.getSpeechVoices.bind(this);
    }
    
    componentDidMount() {
        this.getSpeechVoices();
        if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = this.getSpeechVoices;
        }
    }
    componentWillUnmount() {
        speechSynthesis.onvoiceschanged = null;
    }
    
    getSpeechVoices() {
        if (typeof speechSynthesis === 'undefined') return;
        let voices = speechSynthesis.getVoices();
        this.setState({voices: voices.length});
    }
    
    render() {
        return (
            <tr>
                <td>Text-to-speech voices</td>
                <td>{this.state.voices}</td>
            </tr>
        )
    }
}

export default SpeechSynthesisVoices