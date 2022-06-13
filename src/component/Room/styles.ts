import styled, { keyframes } from 'styled-components'
import { MessageProp } from '../Message/styles'
 


export const Container = styled.div`
    max-width: 35rem;
    width: 100%;
    height: calc(100vh - 6rem);

    background: #212121;
    position: relative;

    -webkit-box-shadow: 0px 10px 30px -14px rgba(0,0,0,0.56);
    -moz-box-shadow: 0px 10px 30px -14px rgba(0,0,0,0.56);
    box-shadow: 0px 10px 30px -14px rgba(0,0,0,0.56);
`

export const HeaderChat = styled.header`
    width: 100%;
    height: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const InputMessage = styled.form`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    background: #212121;
    position: absolute;
    bottom: 0;
    padding: 1rem;

    input { 
        flex: 1;
        height: 3.5rem;
        padding: 1rem;
        border-radius: 9rem;
        border: 0;
        background-color: #171717;
        color: #fafafa;
    }

    button { 
        min-width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        border: 0;
        outline: none;
        background-color: transparent;
        
        cursor: pointer;
        transition: all .2s ease-in-out;
        
        &:hover {
            background: #570A57;
        }

        svg {
            color: #fafafa;
            font-size: 1.5rem;
        }
    }
`

export const ContainerContent = styled.main`
    width: 100%;
    height: calc(100% - 11rem);
    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    overflow-y: auto;

`

export const ContainerMessage = styled.div<MessageProp>`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: ${({messageProp}) => messageProp ? 'flex-end' : 'flex-start'};
`