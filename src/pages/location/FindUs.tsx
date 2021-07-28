import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

class FindUs extends React.Component{

    static defaultProps = {
        center: { lat: 51.15507646034595, lng: -0.9583754592664105 },
        zoom: 11
    };

    render() {
        return (
            <div style={{ width: '80%', margin: '30px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBYcFa6tMOStF6I1076ig5an6DVUWwBQxo' }}
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