import { Button } from '@mui/material'
import React from 'react'
import { LoginContainer, LoginInnerContainer } from "../styled/LoginStyled"
import { auth, provider } from "../firebase"

function LoginComponent() {
    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
    }

    return (
        <>
            <LoginContainer>
                <LoginInnerContainer>
                    <img src="https://apiway.ai/storage/softs/YisONm9JLhNxkKDlmWkpbKGrotSo13uAuZxZhked.jpg" />
                    <h1>
                        Sign in to Nm slack
                    </h1>

                    <p>https://github.com/Nm99codex</p>
                    <Button type='submit' onClick={signIn}>
                        Sign in with google
                    </Button>

                </LoginInnerContainer>

            </LoginContainer>
        </>
    )
}

export default LoginComponent