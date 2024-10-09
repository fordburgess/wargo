import { io, Socket } from 'socket.io-client';

interface ClientToServerEvents {
    hello: () => void;
}

interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

const url = 'http://localhost:5000'; // will change to prod url

export const socket: Socket<ClientToServerEvents, ServerToClientEvents> = io(url);