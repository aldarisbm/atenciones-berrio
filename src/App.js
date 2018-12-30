import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <header className="App-header">
          <h3>
            Atenciones Berrio
          </h3>
          <a
            className="App-link"
            href="mailto:joseantonioberrio@hotmail.com?Subject=Presupuesto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactanos
          </a>
        </header>
      </div>
    );
  }
}

export default App;
