import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {message: "Test message"};
    }

    componentDidMount() {
        this._isMounted = true;
        this._isMounted && this.fetchMessage();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    async fetchMessage() {
        const response = await fetch("/.netlify/functions/message");
        if (response.ok) {
            const data = await response.json();
            this._isMounted && this.setState({ message: data.message })
        } else {throw new Error(response.status)}
    }
    
    render() {
        return (
            <tr>
                <td>Message</td>
                <td>{this.state.message}</td>
            </tr>
        )
    }
}

export default Message