import styled, { keyframes } from 'styled-components'

const fallEffect = keyframes`
    from {
        transform: translateY(-20px);
        opacity: 0;
    } to {
        transform: translateY(0px);
        opacity: 1;    
    }
`

export const Container = styled.div`
    max-width: 12rem;
    width: auto;
    height: auto;

    padding: .5rem 1rem;
    font-size: .9rem;

    background: #171717;
    color: #fafafa;

    animation: ${fallEffect} .3s ease-in-out;
`