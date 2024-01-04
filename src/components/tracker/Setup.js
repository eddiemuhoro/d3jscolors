import React, { useState } from 'react';
import {
    APIProvider,
    AdvancedMarker,
    Map,
    InfoWindow,
} from "@vis.gl/react-google-maps";

const Setup = () => {
    const [infoWindow, setInfoWindow] = useState(null);
    const [open, setOpen] = useState(false);
    const vehiclePositions = [
        { id: 1, lat: 6.9271, lng: 79.8612 },
        { id: 2, lat: 6.9371, lng: 79.8712 },
        // Add more positions for other vehicles
    ];

    return (
        <APIProvider apiKey='AIzaSyAQlqFykUlhDwDQWLxVXURUwkxSH3XcaP0'>
            <div style={{ width: "80%", height: "100vh" }}>
                <Map center={vehiclePositions[0]} zoom={8} mapId='d25a88da8f72dbc0'>
                    {vehiclePositions.map((position) => (
                        <AdvancedMarker
                            key={position.id}
                            position={position}
                            onClick={() => setOpen(true)}
                        >
                            <span style={{fontSize:'2rem'}}>🚗</span>
                        </AdvancedMarker>
                    ))}
                    {open && (
                        <InfoWindow
                            anchor="top"
                            onCloseClick={() => setOpen(false)}
                            position={vehiclePositions[0]}
                        >
                            <div>
                                <h2>KBY 234H</h2>
                                <p>In transit</p>
                            </div>
                        </InfoWindow>
                    )}
                </Map>
            </div>
        </APIProvider>
    );
}

export default Setup;
