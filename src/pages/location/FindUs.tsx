import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
import Marker from './Marker';

interface FindUsProps {
    // center: { lat: 59.95, lng: 30.33 }
    // zoom: 12
}

class FindUs extends React.Component {

    static defaultProps = {
        center: { lat: 51.15507646034595, lng: -0.9583754592664105 },
        zoom: 11
    };

    render() {

        return (
            <div style={{ width: '80%', margin: '30px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDAcAFhX2ecAhq61W0z8tIpKgy3zj4ucr4' }}
                    defaultCenter={FindUs.defaultProps.center}
                    defaultZoom={FindUs.defaultProps.zoom}
                >
                    <Marker
                        lat={51.15507646034595}
                        lng={-0.9583754592664105}
                        name="My Marker"
                        color="blue"
                    />
                </GoogleMapReact>
            </div>
        )
    }

}

export default FindUs