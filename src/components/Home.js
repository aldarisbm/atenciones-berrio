import React from 'react';
import '../styles/Home.css';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<header className="home-header">
					<h1>Atenciones Berrio</h1>
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
