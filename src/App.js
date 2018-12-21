import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import MapLayout from "./components/layouts/MapLayout";
import HomeLayout from "./components/layouts/HomeLayout";
import ContactLayout from "./components/layouts/ContactLayout";
import AboutLayout from "./components/layouts/AboutLayout";
import Layout from "./components/layouts/Layout/Layout";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
                   <Route exact path="/" component={HomeLayout} />
					<Route exact path="/map" component={MapLayout} />
					<Route exact path="/contact" component={ContactLayout} />
					<Route exact path="/about" component={AboutLayout} />
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;
