import React from 'react';

class GeoIPLookup extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {success: false,};
    }

    componentDidMount() {
        this._isMounted = true;
        this._isMounted && this.fetchGeoIP();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    async fetchGeoIP() {
        const response = await fetch('http://ip-api.com/json');
        if (response.ok) {
            const data = await response.json();
            this._isMounted && this.setState({
                isp: data.isp,
                city: data.city,
                country: data.country,
                query: data.query,
                success: true,
            })
        } else {throw new Error(response.status)}
    }
    
    render() {
        return (
            <tr>
                <td>GeoIP lookup</td>
                {this.state.success ? <td>{this.state.query} -- {this.state.city}, {this.state.country} -- {this.state.isp}</td> : <td>The request was blocked.</td>}
            </tr>
            /*
            <>
            <tr>
                
                <td>{this.state.query}</td>
            </tr>
            <tr>
                <td>ISP</td>
                <td>{this.state.isp}</td>
            </tr>
            <tr>
                <td>City</td>
                <td>{this.state.city}, {this.state.country}</td>
            </tr>
            </>*/
        )
    }
}

export default GeoIPLookup