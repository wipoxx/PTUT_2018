import React, { Component } from "react";
import "./AboutLayout.css";
import TextAbout from "../containers/TextAbout";

class AboutLayout extends Component {
    render() {
        return (
            <div className="about-fond">
                <div className="about-text-format">
                    <TextAbout />
                </div>
            </div>
        );
    }
}

export default AboutLayout;