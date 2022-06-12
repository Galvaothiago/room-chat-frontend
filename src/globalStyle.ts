import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter','Ubuntu', sans-serif;
    }
    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }  
    }
`

export const Home = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 4rem;
    padding-bottom: 2rem;

    background-color: #171717;
`

export const SignIn = styled.div`
    max-width: 400px;
    width: 100%;
    max-height: 10rem;
    height: auto;
    padding: 2rem;

    background-color: #212121;
    
    -webkit-box-shadow: 0px 10px 30px -2px rgba(0,0,0,0.63);
    -moz-box-shadow: 0px 10px 30px -2px rgba(0,0,0,0.63);
    box-shadow: 0px 10px 30px -2px rgba(0,0,0,0.63);
    
    div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        

        span {
            width: 100%;
            text-align: center;
            color: #fafafa;
        }

        form {
            width: 100%;
            display: flex;
            gap: .5rem;
            height: 2rem;
            color: inherit;

            input {
                flex: .7;
                height: 2rem;
                padding: 0 1rem;

                border: 1px solid gray;
                background: none;
                color: #fafafa;
            }

            button {
                flex: .3;
                color: #fafafa;
                background: #2E0249;
                border: 0;
                outline: none;

                cursor: pointer;
                transition: all .2s ease-out;

                &:hover {
                    filter: brightness(.6);
                }

            }
        }
    }

`