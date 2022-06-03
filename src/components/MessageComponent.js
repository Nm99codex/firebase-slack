import React from 'react'
import { MessageContainer, MessageInfo } from "../styled/MessageComponentStyled"

function MessageComponent({ message, timestamp, user, userImage }) {
    console.log(message, timestamp, user, userImage)
    return (
        <MessageContainer>
            <img src={userImage} alt="" />
            <MessageInfo>
                <h4>
                    {user}
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message} </p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default MessageComponent