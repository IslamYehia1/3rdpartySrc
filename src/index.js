import React from "react";
import ReactDOM from "react-dom";
import loadBackground from "./background.js";
import path from "path";
import style from "./css/firstPage.scss";
import Nav from "./nav.js";
import Content from "./content.js";
window.onload = loadBackground;
class App extends React.Component {
    render() {
        return (
            <div id="container">
                <Nav />
                <Content />
                <div id="scrollArrow">
                    <div class="scroll-arrow"></div>
                    <div class="scroll-arrow"></div>
                    <div class="scroll-arrow"></div>
                </div>
            </div>
        );
    }
}

var root = document.getElementById("root");
ReactDOM.render(<App />, root);
