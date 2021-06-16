import React from 'react';

class AdBlocker extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            using_adblocker: false
        };
    }

    componentDidMount() {
        this._isMounted = true;
        this._isMounted && this.detectAdblocker();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    detectAdblocker() {
        setTimeout(() => {
            let img = document.createElement("img");
            img.src = "https://googleads.g.doubleclick.net/favicon.ico?" + new Date().getTime();
            // could also use "https://www.media.net/favicon.ico?" instead of or in addition to
            img.onerror = () => {
                this._isMounted && this.setState({ using_adblocker: true });
            }
        }, 100);
    }

    render() {
        return (
            <tr>
                <td>Using Adblocker</td>
                <td>{this.state.using_adblocker ? "Yes": "No"}</td>
            </tr>
        )
    }
}

export default AdBlocker