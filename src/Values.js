import React from "react";
import style from "./css/Values.scss";
import { TimelineMax, TweenLite, TweenMax, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class Values extends React.Component {
    constructor(props) {
        super(props);
        this.locoScroll = props.locoScroll ; 
        this.firstClient = null;
    }

    componentDidMount(props) {
        gsap.registerPlugin(ScrollTrigger);
        this.locoScroll.update() ; 
        var hideOverflow = () => {
            content.style.overflow = "hidden";
        };
        var showOverflow = () => {
            content.style.overflow = "visible";
        };

        var wrapper = document.querySelectorAll(".wrapper");
        var images = document.querySelectorAll(".image");
        var content = document.querySelector(".content");
        var container = document.getElementById("container") ; 
        var imageAnimation2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#container",
                scroller: "#root",
                start: "top top",
                end: `+=${container.clientHeight}`,
                pin: content,
                scrub: true,
            },
        });
        imageAnimation2.from(images[3], {
            scale: 1.7,
            onComplete: hideOverflow,
            onUpdate: showOverflow,
        });
        imageAnimation2.to(images[3], { yPercent: -101 });
        imageAnimation2.to(images[2], { yPercent: -101 });
        imageAnimation2.to(images[1], { yPercent: -101 });
        imageAnimation2.to(images[0], { yPercent: -101 });
    }
    render() {
        return (
            <section id="values">
                {/* <div id="ourValues">
                    <h1>WHAT WE DO</h1>
                </div> */}
                <div className="secondPage">
                    <div className="wrapper">
                        <div
                            className="content"
                            ref={(div) => (this.content = div)}
                        >
                            <div
                                ref={(div) => (this.firstClient = div)}
                                className="image firstClient"
                            >
                                <img src="./assets/img/motion.png" alt="" />
                            </div>
                            <div className="image secondClient">
                                <img src="./assets/img/uxui.png" alt="" />
                            </div>
                            <div className="image">
                                <img src="./assets/img/backend.png" alt="" />
                            </div>
                            <div className="image">
                                <img
                                    className="firstImage"
                                    src="./assets/img/landing.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="picture emptyPicture">
                        <h5>Everything your brand needs</h5>
                        <div className="indicate">
                                <div class="arrow arrow-first"></div>
                             <div class="arrow arrow-second"></div>
                        </div>
                    </div>
                    <div className="picture firstPicture">
                        <div className="pictureTitle">
                            <h1>BRAND</h1>
                            <h1>CREATION</h1>
                        </div>
                        <div className="valueDescription">
                            <h4>01/</h4>
                            <h4>BRANDING</h4>
                            <p>
                                We believe that uniqueness is a necessity if one
                                wants to be irreplaceable.
                            </p>
                            <p>
                                We design, build, and communicate cohesive
                                campaigns from start to finish with one goal in
                                mind: to elevate your brand.
                            </p>
                        </div>
                    </div>
                    <div className="picture webSite">
                        <div className="pictureTitle">
                            <h1>WEBSITES</h1>
                            <h4>THAT TELL YOUR BRAND'S STORY</h4>
                        </div>
                        <div className="valueDescription">
                            <h4>02/</h4>

                            <h4>WEB DEVELOPMENT</h4>
                            <p>
                                We design, build, and diploy websites that are
                                performant with an elegant sense of aesthetics.{" "}
                            </p>
                            <p>
                                Our digital solutions are focused on creating a
                                smooth customer experience and business
                                efficiancy.
                            </p>
                        </div>
                    </div>
                    <div className="picture">
                        <div className="pictureTitle">
                            <h1>GO</h1>
                            <h1>Viral</h1>
                        </div>
                        <div className="valueDescription">
                            <h4>03/</h4>

                            <h4>Digital marketing </h4>
                            <p>
                                From website creation to content management we
                                utilize the power of the cyberspace and social
                                networking to strengthen your brand identity and
                                presence.{" "}
                            </p>
                            <p>
                                We offer different types of digital marketing
                                services, including SEO, paid media, social
                                media marketing, email marketing, and conversion
                                rate optimization.
                            </p>
                        </div>
                    </div>
                    <div className="picture audioVisual">
                        <div className="pictureTitle">
                            <h1>Making</h1>
                            <h1>imagination real.</h1>
                        </div>
                        <div className="valueDescription">
                            <h4>04/</h4>
                            <h4>Audio/Visual Production </h4>
                            <p>
                                From website creation to content management we
                                utilize the power of the cyberspace and social
                                networking to strengthen your brand identity and
                                presence.{" "}
                            </p>
                            <p>
                                We offer different types of digital marketing
                                services, including SEO, paid media, social
                                media marketing, email marketing, and conversion
                                rate optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
