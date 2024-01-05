import Webcam from 'react-webcam';
import './App.css';
import Colors from './components/Colors';
import CustomWebcam from './components/WebCam';
import RomaniaLocationForm from './components/countries/Country';
import Tracker from './components/tracker/Tracker';
import Setup from './components/tracker/Setup';
import GoogleMapPolyline from './components/tracker/Polyline';

function App() {
  return (
    <div className="App">
      {/* <Colors /> */}
      {/* <RomaniaLocationForm /> */}
      {/* <CustomWebcam /> */}
      {/* <Tracker /> */}
      {/* <Setup /> */}
      <GoogleMapPolyline />
    </div>
  );
}

export default App;
