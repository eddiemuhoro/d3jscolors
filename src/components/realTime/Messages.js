import React, { useEffect, useState } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { Message } from '../../models'
import { API, graphqlOperation } from 'aws-amplify'
import { createMessage, listMessage } from '../../graphql/mutations'
import { listMessages } from '../../graphql/queries'
import { onCreateMessage } from '../../graphql/subscriptions'

const Messages = ({messages}) => {
    const [user, setUser] = useState('')
    const [newMessage, setNewMessage] = useState('')
    const [stateMessages, setStateMessages] = useState([...messages])

    useEffect(() => {
        const subscription = API.graphql(
            graphqlOperation(onCreateMessage)
          ).subscribe({
            next: ({ provider, value }) => {
              setStateMessages((stateMessages) => [
                ...stateMessages,
                value.data.onCreateMessage,
              ]);
            },
            error: (error) => console.warn(error),
          });
    }, [])

const submitMessage = async () => {
    try {
       await API.graphql(graphqlOperation(createMessage, {input: {user, text: newMessage}}))
        setUser('')
        setNewMessage('')
        console.log('message sent')
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    fetchMessages()
    // DataStore.observe(Message).subscribe(fetchMessages)
}, [])

const fetchMessages = async () => {
    try {
        const messagesData = await API.graphql(graphqlOperation(listMessages))
        const messages = messagesData.data.listMessages.items
        setStateMessages([...messages])

       
    } catch (error) {
        console.log(error)
    }
}

console.log(stateMessages)

  return (
    <div>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button onClick={submitMessage}>Submit</button>

        {stateMessages && stateMessages.map((message, index) => (
            <div key={index}>
                <h3>{message.user}</h3>
                <p>{message.text}</p>
            </div>
        ))}
    </div>
  )
}

export default Messages