import { FormEvent, useState } from "react";
import { Room } from "./component/Room";
import { Home, SignIn } from "./globalStyle";


const App = () => {
  const [ username, setUsername ] = useState<string>('')
  const [ showChat, setShowChat ] = useState<boolean>(false)

  const handleSignInChat = (event: FormEvent) => {
    event.preventDefault()

    if(!username) {
      alert('entre com seu username primeiro')
      return 
    }

    setShowChat(true)
  }

  return (
    <Home>
      { !showChat ? 
          <SignIn>
            <div>
              <span>Entrar no chat</span>
              <form>
                <input 
                  type="text" 
                  value={username} 
                  onChange={e => setUsername(e.target.value)}
                  autoFocus={true} 
                  placeholder="digite seu username"/>

                <button onClick={e => handleSignInChat(e)}>Entrar</button>
              </form>
            </div>
          </SignIn> : 
          <Room username={username}/>
      }    
    </Home>
  )
}

export default App;

