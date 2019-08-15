import React from 'react';
import Info from './components/info';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Info></Info>
      <Contact></Contact>
      </header>
    </div>
  );
}

export default App;
