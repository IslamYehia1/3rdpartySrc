import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
gsap.registerPlugin(ScrollTrigger);

const bodyScrollBar = Scrollbar.init(document.querySelector("body"));
ScrollTrigger.scrollerProxy(document.querySelector("#root"), {
    scrollTop(value) {
        if (arguments.length) {
            bodyScrollBar.scrollTop = value; // setter
        }
        return bodyScrollBar.scrollTop; // getter
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },
});

// when the smooth scroller updates, tell ScrollTrigger to update() too:
bodyScrollBar.addListener(() => {
    ScrollTrigger.update(bodyScrollBar);
});
