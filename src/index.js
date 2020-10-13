import React from "react";
import ReactDOM from "react-dom";
import { Router, Link , globalHistory } from "@reach/router";
import loadBackground from "./background.js";
import SideBar from "./sideBar";
import Home from "./home";
import Values from "./values";
import ContactUs from "./contactUs";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hideLoadingPage"  ; 
class App extends React.Component {
    constructor(props) {
        super(props);
        // Initializing the momentum scrolling effect
        // then passing the locoScroll instance to other components 
        // to refresh the locoscroll instance whenever needed
        gsap.registerPlugin(ScrollTrigger);
        this.root = document.getElementById("root");
        this.locoScroll = new LocomotiveScroll({
            el: this.root,
            smooth: true,
            smoothMobile: true,
        });

        this.locoScroll.on("scroll", (params) => {
            ScrollTrigger.update(params);
        });

        const locoScroll = this.locoScroll;
        ScrollTrigger.scrollerProxy(document.querySelector("#root"), {
            scrollTop(value) {
                return arguments.length
                    ? locoScroll.scrollTo(value, 0, 0)
                    : locoScroll.scroll.instance.scroll.y;
            }, 
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: document.querySelector("#root").style.transform
                ? "transform"
                : "fixed",
        });
    }
    componentDidMount() {
        loadBackground();
        ScrollTrigger.addEventListener("refresh", () => this.locoScroll.update());
        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();
    }

    render() {
        return (
            <div id="container">
                <SideBar />
                <Router>
                    <Home path="/" default locoScroll = {this.locoScroll} />
                    <ContactUs path="contactus" locoScroll = {this.locoScroll} />
                    <Values  path="values" locoScroll = {this.locoScroll} />
                </Router>
            </div>
        );
    }
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
