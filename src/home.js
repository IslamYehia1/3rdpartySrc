import React from "react";
import Content from "./content.js";
import ThirdPage from "./thirdPage";
import Nav from "./nav.js";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.locoScroll = props.locoScroll  ; 
        // gsap.registerPlugin(ScrollTrigger);
        // this.container = document.getElementById("root");
        // this.locoScroll = new LocomotiveScroll({
        //     el: this.container,
        //     smooth: true,
        //     smoothMobile: true,
        // });

        // this.locoScroll.on("scroll", (params) => {
        //     ScrollTrigger.update(params);
        // });
        // const locoScroll = this.locoScroll;

        // ScrollTrigger.scrollerProxy(document.querySelector("#root"), {
        //     scrollTop(value) {
        //         return arguments.length
        //             ? locoScroll.scrollTo(value, 0, 0)
        //             : locoScroll.scroll.instance.scroll.y;
        //     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        //     getBoundingClientRect() {
        //         return {
        //             top: 0,
        //             left: 0,
        //             width: window.innerWidth,
        //             height: window.innerHeight,
        //         };
        //     },
        //     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        //     pinType: document.querySelector("#root").style.transform
        //         ? "transform"
        //         : "fixed",
        // });
    }
    componentDidMount(){
        this.locoScroll.update() ; 
        // this.locoScroll.init() ; 
        // const locoScroll = this.locoScroll;
        // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        // // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        // ScrollTrigger.refresh();
    }
    componentWillUnmount(){
        // this.locoScroll.distroy();
    }
    render() {
        return (
            <div>
                <Nav />
                <Content />
                <ThirdPage />
            </div>
        );
    }
}
