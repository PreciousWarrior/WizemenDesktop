import Layout from "./components/Layout";
import Home from "./pages/Home";
import {Route} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import axios from 'axios';
import Login from "./pages/Login";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";

export default function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		axios.get('/user/loggedIn')
			.then(resp => {
				setLoggedIn(resp.data);
			})
	}, []);

	return (
		<React.Fragment>
			<Header/>
			{
				loggedIn ?
					<Layout>
						<Route exact path={'/'} component={Landing}/>
						<Route exact path={'/home'} component={Home}/>
						<Route component={NotFound}/>
					</Layout>
					:
					<Login setLoggedIn={setLoggedIn}/>
			}
		</React.Fragment>

	);
}