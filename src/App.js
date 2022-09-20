import React from 'react';
import {
	Route,
	BrowserRouter as Router,
	Switch,
} from "react-router-dom";
import Home from './components/home';
import Nav from './components/nav';
import Footer from "./components/footer";
import ViewProduct from './components/viewProduct';


export default function App() {
	return (
		<Router>
			<Nav/>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/product/:user">
					<ViewProduct />
				</Route>
			</Switch>
			<Footer />
		</Router>
	)
}
