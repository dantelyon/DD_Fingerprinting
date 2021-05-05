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
        // yeah... not ideal to expose the API key on client-side, but i'll deal with that later (or never).
        let apiKey = 'e8c7958b07048ad6c3e1d14538021f9c2bbf205eb8cbf35e633e7a75';
        let lookup = `https://api.ipdata.co?api-key=${apiKey}`;
        const response = await fetch(lookup);
        if (response.ok) {
            const data = await response.json();
            this._isMounted && this.setState({
                isp: data.asn.name,
                city: data.city,
                region: data.region,
                query: data.ip,
                success: true,
            })
        } else {throw new Error(response.status)}
    }
    
    render() {
        return (
            <tr>
                <td>GeoIP lookup</td>
                {this.state.success ? <td>{this.state.query} -- {this.state.city}, {this.state.region} -- {this.state.isp}</td> : <td className="unavailableFeature">The request was blocked.</td>}
            </tr>
        )
    }
}

export default GeoIPLookup