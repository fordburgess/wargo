import React, { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface ClientToServerEvents {
  hello: () => void;
}

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

type SocketProviderType = {
  children: React.ReactNode;
}

const SocketContext = createContext<Socket<ClientToServerEvents, ServerToClientEvents> | null>(null);

const SocketProvider = ({ children }: SocketProviderType) => {
  const [socket, setSocket] = useState<Socket<ClientToServerEvents, ServerToClientEvents> | null>(null);

  useEffect(() => {
    const socketInstance = io('http://localhost:5000');

    setSocket(socketInstance);

    return () => {
        socketInstance.disconnect();
    }
  })

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

export const useSocket = () => {
    return useContext(SocketContext);
};

export default SocketProvider
