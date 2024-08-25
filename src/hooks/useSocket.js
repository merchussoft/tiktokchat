import { useEffect, useState } from "react";
import { SOCKET }  from "../config";

export const useSocket = () => {

  const [ mensajes, setMensajes ] = useState([]);
  const [ isConnected, setIsConnected ] = useState(false);
  const [connectedMessage, setConnectedMessage] = useState('');



    useEffect( () => {

        SOCKET.on('connected', data => {
            console.log(data);
            setIsConnected(true)
            setConnectedMessage(data.message);
        });

        SOCKET.on('error', data => {
            console.warn(data);
            setConnectedMessage(data.message);
        });


        SOCKET.on('chat', (data) => {
            console.log('miirando los chat ==> ', data)
            setMensajes(mensajes => [...mensajes, data]);
        })

    }, [])

    return {
        mensajes,
        isConnected,
        connectedMessage
    }
}
