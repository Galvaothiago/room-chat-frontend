import { useEffect, useMemo, useState, FormEvent } from 'react'
import { io } from 'socket.io-client'
import { MessageNewUser } from '../MessageNewUser'
import { Container, HeaderChat, InputMessage } from './styles'

import { IoIosSend } from 'react-icons/io'

interface UserInfo {
    username: string
}

interface MessageProp {
    created_at: string,
    message: string,
    username: string
}

export const Room = ( { username }: UserInfo ) => {
    const [ message, setMessage ] = useState<string>('')
    const [ newUser, setNewUser ] = useState<string>('')

    const [ allMessages, setAllMessage ] = useState<MessageProp[]>([])

    const messageNotify = "Mew user connected!"

    const socket = useMemo(() => io('http://localhost:3333/'),[])

    const handleSubmitMessage = (event: FormEvent) => {
        event.preventDefault()

        const data = {
            created_at: new Date(),
            message,
            username,
        }
        socket.emit('MessageServer', data)
        setMessage('')
    }


    useEffect(() => {
        socket.on('newUser', (message) => {
            setNewUser('New user connected')

            setTimeout(() => {
                setNewUser('')
            }, 2000)
        })
    }, [newUser])

    useEffect(() => {
        socket.on('newMessage', socket => {
            setAllMessage([...allMessages, socket])
        })
    }, [allMessages])

    return (
        <Container>
            <HeaderChat>
                { newUser && <MessageNewUser message={messageNotify}/>}
            </HeaderChat>
            <div>
                { allMessages.map( message => <span>{message.message}</span> ) }
            </div>
            <InputMessage onSubmit={e => handleSubmitMessage(e)}>
                <input 
                    type="text" 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    placeholder="Digite sua mensagem..." 
                />
                <button onClick={handleSubmitMessage}>
                    <IoIosSend />
                </button>
            </InputMessage>
        </Container>
    )
}