import React from "react";
import ReactDOM from "react-dom";
import { Router, Link , globalHistory } from "@reach/router";
import path from "path";
import loadBackground from "./background.js";
import Home from "./home";
import SecondPage from "./Values";
import ContactUs from "./contactUs";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollIndicator from "./scrollIndicator";

class App extends React.Component {
    constructor(props) {
        super(props);
        gsap.registerPlugin(ScrollTrigger);
        this.container = document.getElementById("root");
        this.locoScroll = new LocomotiveScroll({
            el: this.container,
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
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
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
        const locoScroll = this.locoScroll;
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();
    }
    componentWillUnmount(){
        // this.locoScroll.distroy();
    }
    render() {
        return (
            <div id="container">
                <ScrollIndicator />
                <Router onChange = {()=> document.querySelector(".landing").landing.style.display = "block"}>
                    <Home path="/" default locoScroll = {this.locoScroll} />
                    <ContactUs path="contactus" />
                    <SecondPage  path="values" locoScroll = {this.locoScroll} />
                </Router>
            </div>
        );
    }
}

var root = document.getElementById("root");
ReactDOM.render(<App />, root);

window.onload = function hideLoader () {
    var landing = document.querySelector(".landing");
    var fadingAway = gsap.to(landing, { y: -100, opacity: 0, duration: 2 });
    landing.style.display = "none" ; 
    landing.style.opacity = "1" ; 
    let content = document.querySelectorAll(".title");
    gsap.from(content[0], {
        rotation: "30",
        transformOrigin: "0 0 ",
        duration: 1,
        ease: "power2",
    });
    gsap.from(content[1], {
        rotation: "30",
        transformOrigin: "0 0 ",
        duration: 1,
        ease: "power2",
    });
    gsap.from(content[2], {
        rotation: "30",
        transformOrigin: "0 0 ",
        duration: 1,
        ease: "power2",
    });
    gsap.from(document.querySelector(".description"), {
        rotation: "30",
        transformOrigin: "0 0 ",
        duration: 1,
        ease: "power2".easeOut,
    });
};
