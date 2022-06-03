import React from 'react'
import { SidebarOptionChannel, StyledOptionsWrapper } from "../styled/SidebarOptionsStyled"
import { db } from "../firebase"
import {enterRoom} from "../features/appSlice"
import { useDispatch } from 'react-redux'

function SidebarOptions({ Icon, title, addChanelOption,id }) {
    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name');

        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            })
        }

    }

    const selectChannel = () => {
        if(id){
            dispatch(enterRoom({
                roomId:id,
            }))
        }
    }
    return (
        <StyledOptionsWrapper onClick={addChanelOption ? addChannel : selectChannel} >
            {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
            {Icon ? (
                <h3>
                    {title}
                </h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </StyledOptionsWrapper>
    )
}

export default SidebarOptions