import { Container } from "./styles"

interface MessageNewUserProp {
    message: string
}

export const MessageNewUser = ({ message }: MessageNewUserProp) => {
    return (
        <Container>
            { message }
        </Container>
    )
}