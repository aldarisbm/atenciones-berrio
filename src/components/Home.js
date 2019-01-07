import React from 'react';
import '../styles/Home.css';
import NavBar from './NavBar'

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <NavBar/>
        <header className="home-header">
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
