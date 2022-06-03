import React from 'react'
import { SidebarContainer, SidebarHeader, SidebarInfo } from "../styled/SideBarStyled"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOptions from './SidebarOptions';
import { Add, AddIcCallOutlined, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../firebase';

function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection("rooms"));
    const [user] = useAuthState(auth);


    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>
                        NM SLACK
                    </h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user.displayName}
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
            <SidebarOptions Icon={InsertComment} title="Threads" />
            <SidebarOptions Icon={Inbox} title="Mentions" />
            <SidebarOptions Icon={Drafts} title="Saved Items" />
            <SidebarOptions Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOptions Icon={PeopleAlt} title="People & groups" />
            <SidebarOptions Icon={Apps} title="Apps" />
            <SidebarOptions Icon={FileCopy} title="File Browser" />
            <SidebarOptions Icon={ExpandLess} title="Show Less" />
            <hr />
            <SidebarOptions Icon={ExpandMore} title="Channels" />
            <hr />
            <SidebarOptions Icon={Add} addChanelOption title="Add channel" />

            {channels?.docs.map(doc => (
                <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
            ))}

        </SidebarContainer>
    )
}

export default Sidebar