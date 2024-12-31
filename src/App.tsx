import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Player from './components/Player';

function App() {
  return (
    <div className="h-screen bg-black">
      <Sidebar />
      <MainContent />
      <Player />
    </div>
  );
}

export default App;