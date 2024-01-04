import React, { useState, useEffect } from "react";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
} from "@react-google-maps/api";

const center = {
  lat: 6.9271,
  lng: 79.8612,
};

function App() {
 

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAQlqFykUlhDwDQWLxVXURUwkxSH3XcaP0",
  });

  const [currentLocation,setCurrentLocation] = useState([ 6.9271, 79.8612]);

 

  return isLoaded ? (
    <>
      <GoogleMap
        center={center}
        zoom={8}
        mapContainerStyle={{ width: "80%", height: "100vh" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={currentLocation} />
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default App;
