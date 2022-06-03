import React from 'react'
import styled from "styled-components"
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Chat } from '@mui/icons-material';
import ChatComponent from './components/ChatComponent';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase';
import LoginComponent from './components/LoginComponent';
import { Appbody, AppLoading, ApploadingContent } from "./styled/AppStyleMain"
import Spinner from "react-spinkit"


function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <ApploadingContent>
          <img src="https://apiway.ai/storage/softs/YisONm9JLhNxkKDlmWkpbKGrotSo13uAuZxZhked.jpg" />
          <Spinner name="ball-scale-multiple" color="purple"/>
        </ApploadingContent>
      </AppLoading>
    )
  }
  return (
    <>
      {!user ?
        (<LoginComponent />) :
        (
          <>
            <Header />
            <Appbody>
              <Sidebar />
              <Routes>
                <Route exact path="/" element={<ChatComponent />} />
              </Routes>
            </Appbody>
          </>
        )}
    </>
  )
}

export default App