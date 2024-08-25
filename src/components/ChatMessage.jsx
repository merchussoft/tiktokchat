import React, {useEffect, useRef} from 'react';
import { useSocket,  useSpeechSynthesis} from '../hooks' 
import '../styles/ChatMessage.css';

export const ChatMessage = () => {

  const chat_container_ref = useRef(null);

  const { connectedMessage, mensajes} = useSocket();
  const speak = useSpeechSynthesis();

  useEffect(() => {

    if(mensajes.length > 0) {
      const ultimo_mensaje = mensajes[mensajes.length -1];
      speak(ultimo_mensaje.uniqueId + ' dice '+ ultimo_mensaje.comment);
    }

    const chat_container = chat_container_ref.current;

    if(chat_container){
      const is_at_bottom = chat_container.scrollHeight - chat_container.scrollTop === chat_container.clientHeight;

      if(is_at_bottom) chat_container.scrollTop = chat_container.scrollHeight;
    }
  }, [mensajes]);



  return (

    <div id="chat-container" ref={chat_container_ref}>
      <span id="loading">{ connectedMessage ? connectedMessage : 'Connected' }</span>

      {mensajes.map((msg, i) => (
        <div className='chat_line animate' key={i}>
          <span className='user_info'>
              <span className='badges'>
                  <img src={msg.profilePictureUrl} alt="profile" className='badge Broadcaster'/>
              </span>
              <span className='username'>{msg.uniqueId}</span>
              <span className='colon'>: </span>
          </span>
          <span className='message_content'>{msg.comment}</span>
        </div>

      ))}
      
    </div>
  );
};
