import React from 'react';
import '../styles/Home.css';
import NavBar from './NavBar'

class Home extends React.Component {
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
