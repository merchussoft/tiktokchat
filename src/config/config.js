import io from 'socket.io-client';


export const SOCKET_URL = 'http://192.168.1.10:3000';

export const SOCKET = io(SOCKET_URL);