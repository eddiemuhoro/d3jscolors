import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Polyline, Marker } from "@react-google-maps/api";

const GoogleMapPolyline = () => {
  const [path, setPath] = useState([]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAQlqFykUlhDwDQWLxVXURUwkxSH3XcaP0',
  });

  useEffect(() => {
    // Coordinates representing the route
    const routeCoordinates = [
        { lat: -0.334729, lng: 37.005635, speed: 30 },
        { lat: -0.331985, lng: 37.006138, speed: 40 },
        { lat: -0.330201, lng: 37.005635, speed: 35 },
        { lat: -0.327457, lng: 37.004537, speed: 25 },
        { lat: -0.324712, lng: 37.004308, speed: 20 },
        { lat: -0.321602, lng: 37.004766, speed: 45 },
        { lat: -0.317989, lng: 37.005406, speed: 30 },
        { lat: -0.315976, lng: 37.005818, speed: 35 },
        { lat: -0.313643, lng: 37.006412, speed: 40 },
      ];
  
    // Function to update path and arrow marker sequentially
    const updatePathSequentially = () => {
      let index = 0;
      const interval = setInterval(() => {
        if(index < routeCoordinates.length - 1) {
        setPath((prevPath) => [...prevPath, routeCoordinates[index]]);
        index++;
        } else{
          clearInterval(interval);
        }
      }, 1000); 
    };

    // Call the function to start updating path and arrow marker sequentially when the component mounts
    updatePathSequentially();
  }, []); // Empty dependency array ensures the effect runs only once

  console.log(path);

  return isLoaded ? (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <GoogleMap
        mapContainerStyle={{ width: "70%", height: "100vh" }}
        center={{ lat: -0.334729, lng: 37.005635 }} // Set the starting point as the center
        zoom={15} // Adjust zoom level as needed
      >
        {/* =====Polyline===== */}
        <Polyline
          path={path}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 1,
            strokeWeight: 2,
          }}
        />
        {/* =====Arrow Marker===== */}
        {path.length > 0 && (
          <Marker
            position={path[path.length - 1]} // Display arrow at the last point in the path
            icon={{
              path: "M0,-24 L-10,0 L0,6 L10,0 Z", // Arrow shape
              fillColor: "#0000FF", // Arrow color
              fillOpacity: 1,
              strokeColor: "#000000",
              strokeWeight: 1,
              scale: 1,
              anchor: new window.google.maps.Point(0, 0),
              rotation: 0, // Rotate the arrow based on the direction
            }}
          />
        )}
      </GoogleMap>
      <section style={{ width: "30%", height: "100vh" }}>
        <h2>Speed</h2>
        {path && path.map((coordinate) => (
          <p key={coordinate.lat}>
            {coordinate.speed} km/h 
          </p>
        ))}
        </section>
    </div>
  ) : (
    <></>
  );
};

export default GoogleMapPolyline;
