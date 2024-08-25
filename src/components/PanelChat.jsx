import React from 'react';
import '../styles/PanelChat.css'
import logotiktok from '../assets/logotiktok.svg';
import { ChatMessage } from './ChatMessage';

export const PanelChat = () => {
  return (

    <>
        <div className='setting-active columns wrapper'>
            <div className="chat">
                <div className="logo">
                    <h1>tiktok</h1>
                </div>

                <div className="inner">
                  <ChatMessage/>
                </div>
            </div>
        </div>
    </>
    
  )
}
