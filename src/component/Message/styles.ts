import styled from 'styled-components'

export interface MessageProp {
    messageProp: boolean
}

export const ContainerOwnMessage = styled.div`
    max-width: 50%;
    width: auto;
    padding: 1rem;

    height: auto;
    background-color: #2E0249;

    border-radius: 5px;
    position: relative;

    color: #fafafa;

    &::before {
        content: "";
        width: 1rem;
        height: 1rem;

        background-color: inherit;
        position: absolute;
        bottom: 0;
        right: -.9rem;

        -webkit-clip-path: polygon(100% 100%, 0 0, 0 100%);
        clip-path: polygon(100% 100%, 0 0, 0 100%);
    }

    span { 
        position: absolute;
        top: -1.4rem;
        left: 0;
        display: none;
        
        font-size: .95rem;
        font-weight: 200;
        letter-spacing: 2px;
    }

    p {
        margin-bottom: .5rem;
        word-wrap: break-word;
    }

    time {
        display: flex;
        font-size: .7rem;
        justify-content: flex-end;
        
    }
`

export const Container = styled.div`
    max-width: 50%;
    width: auto;
    padding: 1rem;

    height: auto;
    background-color: #570A57;

    border-radius: 5px;
    position: relative;

    color: #fafafa;

    &::before {
        content: "";
        width: 1rem;
        height: 1rem;

        background-color: inherit;
        position: absolute;
        bottom: 0;
        left: -.9rem;

        -webkit-clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    }

    span { 
        position: absolute;
        top: -1.4rem;
        left: 0;
        
        font-size: .95rem;
        font-weight: 200;
        letter-spacing: 2px;
    }

    p {
        margin-bottom: .5rem;
        word-wrap: break-word;
    }

    time {
        display: flex;
        font-size: .7rem;
        justify-content: flex-end;
        
    }
`