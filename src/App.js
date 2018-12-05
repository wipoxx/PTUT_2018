import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import HomeLayout from "./components/layouts/HomeLayout";
import ExampleLayout from "./components/layouts/ExampleLayout";
import Layout from "./components/layouts/Layout/Layout";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Route exact path="/" component={HomeLayout} />
					<Route exact path="/exemple" component={ExampleLayout} />
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;
