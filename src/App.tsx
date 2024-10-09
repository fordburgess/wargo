import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import SocketProvider from './contexts/SocketContext'
import AppRoutes from './routes/routes'
import './App.css';

function App() {
  const [isConnected, setIsConnected] = useState<Boolean>(false); 

  return (
    <SocketProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SocketProvider>
  );
}

export default App;
