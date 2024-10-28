// src/App.js
import React from 'react';
import Lottery from './components/Lottery'; // Ajustar la ruta
import './App.css'; // Importar el archivo CSS

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lottery />
      </header>
    </div>
  );
}

export default App;
