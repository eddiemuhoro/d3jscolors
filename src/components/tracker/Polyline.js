import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Polyline, Marker } from "@react-google-maps/api";
import Speedometer from "./speed/Speedometer";

// Function to calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers

  return distance;
}

// Function to convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}


const GoogleMapPolyline = () => {
  const [path, setPath] = useState([]);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [topSpeed, setTopSpeed] = useState(0);
  const [averageSpeed, setAverageSpeed] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAQlqFykUlhDwDQWLxVXURUwkxSH3XcaP0',
  });

  useEffect(() => {
    // Coordinates representing the route
    const routeCoordinates = [
        { id:'B-001', lat: -0.334729, lng: 37.005635, speed: 30 },
        { id:'B-001', lat: -0.331985, lng: 37.006138, speed: 40 },
        { id:'B-001', lat: -0.330201, lng: 37.005635, speed: 35 },
        { id:'B-001', lat: -0.327457, lng: 37.004537, speed: 25 },
        { id:'B-001', lat: -0.324712, lng: 37.004308, speed: 20 },
        { id:'B-001', lat: -0.321602, lng: 37.004766, speed: 45 },
        { id:'B-001', lat: -0.317989, lng: 37.005406, speed: 30 },
        { id:'B-001', lat: -0.315976, lng: 37.005818, speed: 35 },
        { id:'B-001', lat: -0.313643, lng: 37.006412, speed: 40 },
      ];

      //get the top speed
      const topSpeed = Math.max(...routeCoordinates.map((coordinate) => coordinate.speed));
      setTopSpeed(topSpeed);

      //get average speed
      const averageSpeed = routeCoordinates.reduce((total, coordinate) => total + coordinate.speed, 0) / routeCoordinates.length;
      setAverageSpeed(averageSpeed);


      let accumulatedDistance = 0;

      for (let i = 1; i < routeCoordinates.length; i++) {
        const { lat: lat1, lng: lon1 } = routeCoordinates[i - 1];
        const { lat: lat2, lng: lon2 } = routeCoordinates[i];
        const distance = calculateDistance(lat1, lon1, lat2, lon2);
        accumulatedDistance += distance;
      }
  
      // Update the total distance state
      setTotalDistance(accumulatedDistance.toFixed(2));
  
      
  
    // Function to update path and arrow marker sequentially
    const updatePathSequentially = () => {
      let index = 0;
      const interval = setInterval(() => {
        if(index < routeCoordinates.length - 1) {
        setPath((prevPath) => [...prevPath, routeCoordinates[index]]);
        index++;
        setIndex(index);
        setSpeed(routeCoordinates[index].speed);
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
    <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection:'row-reverse' }}>
      <GoogleMap
        mapContainerStyle={{ width: "70%", height: "100vh" }}
        //set center to the last coordinate in the path array
        center={path.length > 0 ? path[path.length - 1] : { lat: 0, lng: 0 }}
        zoom={15} // Adjust zoom level as needed
      >
        {/* =====Marker for starting point===== */}

        {path.length > 0 && (
          <Marker

            position={path[0]}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: "#FF0000",
              fillOpacity: 1,
              strokeWeight: 0,
            }}
          />
        )}

        {/* =====Polyline===== */}
        <Polyline
          path={path}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 1,
            strokeWeight: 4,
          }}
        />
        {/* =====Arrow Marker===== */}
        {path.length > 0 && (
          <Marker
            position={path[path.length - 1]} // Display arrow at the last point in the path
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: "#0F2B5F",
              fillOpacity: 1,
              strokeWeight: 0,
            }}
          />
        )}
      </GoogleMap>
      <section style={{ width: "30%", height: "100vh" }}>
        <h1>KBZ-001</h1>
        <h2>Speed</h2>
       <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <p>Speed:</p>
        <p><strong>{speed.toFixed(2)} km/h</strong></p>
       </div>
       
      

       <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <p>Average:</p>
        <p><strong>{averageSpeed.toFixed(2)} km/h</strong></p>
       </div>

       <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <p>Top speed:</p>
        <p><strong>{topSpeed.toFixed(2)} km/h</strong></p>
       </div>
       

       <h2>Distance</h2>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <p>Distance:</p>
        <p><strong>{totalDistance} km</strong></p>
        </div>

        </section>
    </div>
  ) : (
    <></>
  );
};

export default GoogleMapPolyline;
