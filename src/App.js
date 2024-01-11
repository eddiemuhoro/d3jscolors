import Webcam from 'react-webcam';
import './App.css';
import Colors from './components/Colors';
import CustomWebcam from './components/WebCam';
import RomaniaLocationForm from './components/countries/Country';
import Tracker from './components/tracker/Tracker';
import Setup from './components/tracker/Setup';
import GoogleMapPolyline from './components/tracker/Polyline';
import Messages from './components/realTime/Messages';
import { DataStore } from '@aws-amplify/datastore'
import { Message } from './models'
import { API, graphqlOperation } from 'aws-amplify'
import { listMessages } from './graphql/queries';
import { useEffect, useState } from 'react';

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetchMessages()
}
, [])
  const fetchMessages = async () => {
    try {
        const messagesData = await API.graphql(graphqlOperation(listMessages))
        const messages = messagesData.data.listMessages.items
        setMessages([...messages])

       
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div className="App">
      {/* <Colors /> */}
      {/* <RomaniaLocationForm /> */}
      {/* <CustomWebcam /> */}
      {/* <Tracker /> */}
      {/* <Setup /> */}
      {/* <GoogleMapPolyline /> */}
      <Messages messages={messages} />
    </div>
  );
}

export default App;
