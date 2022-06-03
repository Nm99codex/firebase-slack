import React from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SearchIcon from '@mui/icons-material/Search';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { HeaderAvatar, HeaderLeft, HeaderRight, HeaderSearch, HeaderWrapper } from "../styled/Headerstyled"
import { useAuthState } from "react-firebase-hooks/auth"
import {auth} from "../firebase"

function Header() {
    const [user] = useAuthState(auth);
    console.log('user is', user)
    return (
        <>
            <HeaderWrapper>
                {/* Header left */}
                <HeaderLeft>
                    <HeaderAvatar
                    alt ={user?.displayName}
                        src={user?.photoURL}
                        onClick={()=>auth.signOut()}
                    />
                    <AccessTimeFilledIcon />
                </HeaderLeft>

                {/* Header search */}
                <HeaderSearch>
                    <SearchIcon />
                    <input placeholder="Search your channel" />
                </HeaderSearch>

                {/* Header right */}
                <HeaderRight>
                    <HelpOutlineIcon />
                </HeaderRight>
            </HeaderWrapper>
        </>)
}

export default Header
