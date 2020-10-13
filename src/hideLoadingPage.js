import {gsap} from "gsap";
window.onload = function hideLoader () {
    var landing = document.querySelector(".landing");
    var fadingAway = gsap.to(landing, { y: -100, opacity: 0, duration: 2 });
    // landing.remove() ; 
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
