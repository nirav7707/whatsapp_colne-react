import React from 'react';
import './App.css';
import Chat from './component/chat';
import Sidebar from './component/sidebar';

function App() {
  return (
    <div className="app">
      <div className="app-body">
      <Sidebar />
      <Chat />
      </div>
    </div>
  );
}

export default App;
