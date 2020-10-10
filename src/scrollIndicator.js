import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Router, Link , globalHistory } from "@reach/router";

import "./css/scrollIndicator.scss";

export default class ScrollIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.loc ; 
        this.scrollContainer = null;
        this.ScrollTriggerInstance = null ; 
        this.scrollBar = null;
        this.sideBar = null;
        this.currentHeight = null ; 
    }



    componentDidMount() {
        this.ScrollTriggerInstance = ScrollTrigger.create({
            trigger: "#container",
            scroller: "#root",
            start: "top top",
            end: calculateHeight ,  
            pin: this.sideBar,
            onUpdate: (self) =>
                (this.scrollBar.style.height = `${self.progress * 100}%`),
        });
        function calculateHeight(){
            return document.getElementById("container").clientHeight - window.innerHeight ; 
        }
        // Refresh every time the container size changes
        var resizeObserver = new ResizeObserver(()=>{this.ScrollTriggerInstance.refresh()})
        resizeObserver.observe(document.getElementById("container"))

        
    }
    render() {
        return (
            
            <div className="sideBar" ref={(div) => (this.sideBar = div)}>
                <Link to="/">
                    <div className="logoImg"></div>
                </Link>

                <div
                    ref={(div) => (this.scrollContainer = div)}
                    className="scrollBarContainer"
                >
                    <div
                        className="scrollBar"
                        ref={(div) => (this.scrollBar = div)}
                    ></div>
                </div>
                <Link to="values">
                    <div className ="sideLink1">About</div>
                </Link>
                
                <div className="sideLink2">Our Work</div>
            </div>
        );
    }
}
