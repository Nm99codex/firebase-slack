
import styled from "styled-components"



export const Appbody = styled.div`
display:flex;
height: 100vh;
`

export const AppLoading = styled.div`
display:grid;
place-items:center;
height: 100vh;
width:100%

`

export const ApploadingContent = styled.div`
text-align:center;
padding-bottom:100px;
display:flex;
flex-direction: column;
align-items: center;

>img{
    height:100px;
    padding:20px;
    margin-bottom: 30px;
}
`