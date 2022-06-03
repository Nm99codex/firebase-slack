import { Button } from '@mui/material'
import { db } from "../firebase"
import React, { useRef, useState } from 'react'
import { ChatInputContainer } from "../styled/ChatInputStyled"
import firebase from 'firebase/compat/app';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../firebase';


function ChatInput({ chatRef, channelName, channelId }) {
    
    const [user, loading] = useAuthState(auth);
    const [input, setInput] = useState('');

    // console.log(user.displayName,"      ",user.photoURL)
    
    // console.log(channelId)
    const sendMessage = e => {
        // console.log("Button clicked")
        e.preventDefault();  //Prevent refresh

        if (!channelId) {
            return false;
        }

        if (input != '') {

            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            });
        }
        chatRef.current.scrollIntoView(
            {
                behavior: "smooth"
            })


        setInput('');
    };

    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message ${channelName}`} />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput