import React, { Component } from "react";
import "./Layout.css";
import Header from "./Header";
import Footer from "./Footer"

class Layout extends Component {
	render() {
		return (
		    <div className="Layout-Fond">
                <Header/>
                <div className='Layout-Component'>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
		);
	}
}

export default Layout;
