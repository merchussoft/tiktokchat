import React, {useState} from 'react'
import { SOCKET } from '../config'
import '../styles/UserForm.css';

import { useSpeechSynthesis } from '../hooks';


export const UserForm = () => {

    const [username, setUsername] = useState('');
    const speak = useSpeechSynthesis();

    const connectToTikTok = () => {
        SOCKET.emit('connectToTiktok', username)
    }


  return (
    <>
        <div className='container-username'>
            <label htmlFor="usernameInput">Username:</label>
            <input 
                type="text"
                id='usernameInput'
                placeholder='Enter your TikTok username'
                value={username}
                onChange={({target}) => setUsername(target.value)}
            />

            <button onClick={connectToTikTok}>
                Conectar
            </button>
        </div>


    </>
  )
}