import { Container, ContainerOwnMessage } from "./styles"

interface MessageProp {
    created_at: string,
    message: string,
    username: string,
    ownMessage: boolean
}

export const Message = ({ created_at, message, username, ownMessage }: MessageProp) => {
    const hours = new Date(created_at).getHours()
    const minutes = new Date(created_at).getMinutes()

    const hoursAndMinutes = `${hours}:${(minutes < 10 ? `0${minutes}` : minutes)}`

    return (
        ownMessage ? 
            <ContainerOwnMessage>
                <span>{username}</span>
                <p>{ message }</p>
                <time>{hoursAndMinutes}</time>
            </ContainerOwnMessage> :
            <Container>
                <span>{username}</span>
                <p>{ message }</p>
                <time>{hoursAndMinutes}</time>
            </Container>
    )
}