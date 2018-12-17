import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>
            Atenciones Berrio
          </h3>
          <a
            className="App-link"
            href="/contactar"
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
