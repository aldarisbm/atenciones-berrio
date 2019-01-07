import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Gallery from './components/Gallery.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar';

export default class App extends React.Component {
	render() {
		return <Router>
			<div className="dark-tint">
				<NavBar />
				<header className='header'>
					<Route path='/' exact component={Home} />
					<Route path='/Galeria' component={Gallery} />
				</header>
			</div>
		</Router>
	}
}
