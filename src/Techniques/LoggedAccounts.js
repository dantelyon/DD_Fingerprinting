import React from 'react';

class LoggedAccounts extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            loggedIn: false,
        };
    }

    componentDidMount() {
        this._isMounted = true;
        this._isMounted && this.accounts();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    async accounts() {
        let img = document.createElement("img");
        img.referrerPolicy = "no-referrer";
        img.src = "https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail";
        img.onload = () => this._isMounted && this.setState({loggedIn: true})
        /* Additional platforms that, from last time of testing, do seem to work:
            "Meetup": "https://secure.meetup.com/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif",
            "Disqus": "https://disqus.com/profile/login/?next=https%3A%2F%2Fdisqus.com%2Ffavicon.ico",
            "Airbnb": "https://www.airbnb.com/login?redirect_params[action]=favicon.ico&redirect_params[controller]=home",
            "Steam": "https://store.steampowered.com/login/?redir=favicon.ico",
            "Dropbox": "https://www.dropbox.com/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg",
            "Tumblr": "https://www.tumblr.com/login?redirect_to=%2Ffavicon.ico",
            "Youtube": "https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube"
        */
    }
    
    render() {
        return (
            <tr>
                <td>Logged into Gmail</td>
                <td>{this.state.loggedIn ? "Yes" : "No"}</td>
            </tr>
        )
    }
}

export default LoggedAccounts
