import React from "react";
import HomePage from "./homePage.js";
import OurWork from "./ourWork";
import Nav from "./nav.js";

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.locoScroll = props.locoScroll  ; 
    }
    componentDidMount(){
        this.locoScroll.update() ; 
    }
    render() {
        return (
            <div>
                <Nav />
                <HomePage />
                <OurWork />
            </div>
        );
    }
}
