import { useEffect, useMemo, useState, FormEvent } from 'react'
import { io } from 'socket.io-client'
import { MessageNewUser } from '../MessageNewUser'
import { Container, ContainerContent, ContainerMessage, HeaderChat, InputMessage } from './styles'

import { IoIosSend } from 'react-icons/io'
import { Message } from '../Message'

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
    const [ messageNotify, setMessageNotify ] = useState<string>('')
    const [ allMessages, setAllMessage ] = useState<MessageProp[]>([])

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
            setMessageNotify('New user connected')

            setTimeout(() => {
                setMessageNotify('')
            }, 2000)
        })
    }, [messageNotify])

    useEffect(() => {
        socket.on('userDisconnected', user => {
            setMessageNotify(`${user.username} saiu da sala!`)

            setTimeout(() => {
                setMessageNotify('')
            }, 2000)
        })
    }, [messageNotify])


    useEffect(() => {
        socket.on('newMessage', message => {
            setAllMessage([...allMessages, message])
        })

    }, [allMessages])

    return (
        <Container>
            <HeaderChat>
                { messageNotify && <MessageNewUser message={messageNotify}/>}
            </HeaderChat>
            <ContainerContent>
                { allMessages.map( message => {
                    const ownMessage = message.username === username

                     return <>
                                <ContainerMessage messageProp={ownMessage}>
                                    <Message ownMessage={ownMessage} {...message}/>
                                </ContainerMessage>
                           </>
                      }) }
            </ContainerContent>
            <div>
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