import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectRoomId } from '../features/appSlice';
import { ChatButton, ChatContainer, ChatMessages, Header, HeaderLeft, HeaderRight } from "../styled/ChatStyled"
import ChatInput from './ChatInput';
import { useCollection, useDocument } from "react-firebase-hooks/firestore"
import { db } from '../firebase';
import MessageComponent from './MessageComponent';

function ChatComponent() {
    const chatRef = useRef(null);

    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )

    const [roomMessages, loading] = useCollection(
        roomId &&
        db
            .collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy("timestamp", "asc")
    )

    // console.log(roomMessages)


    useEffect(() => {
        chatRef?.current?.scrollIntoView(
            {
                behavior: "smooth"
            }
        );
    }, [roomId, loading])

    return (
        <ChatContainer>
            {roomDetails && roomDetails && (

                <>
                    <Header>
                        <HeaderLeft>
                            <h4><strong>#{roomDetails?.data().name}</strong></h4>
                            <StarBorderOutlined />
                        </HeaderLeft>

                        <HeaderRight>
                            <p>
                                <InfoOutlined />Details
                            </p>
                        </HeaderRight>
                    </Header>
                    <ChatMessages>
                        {roomMessages?.docs.map(doc => {
                            const { message, timestamp, user, userImage } = doc.data();

                            return (
                                <MessageComponent
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={userImage}
                                />
                            )
                        })}

                    </ChatMessages>
                    <ChatButton ref={chatRef} />

                    <ChatInput
                        chatRef={chatRef}
                        channelName={roomDetails?.data().name}
                        channelId={roomId}
                    />
                </>
            )}

        </ChatContainer>
    )
}

export default ChatComponent