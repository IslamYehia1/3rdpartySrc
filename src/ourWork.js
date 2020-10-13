import React from "react";
import "./css/ourWork.scss";
import path from "path";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default class OurWork extends React.Component {
    constructor(props) {
        super(props);
        gsap.registerPlugin(ScrollTrigger);
        this.images = [
            ["", "", "image0", "image1"],
            ["image2", "image3", "image4", "image5"],
            ["image6", "image7", "image8", "image9"],
            ["image10", "image11", "", ""],
        ];
    }
    componentDidMount() {
        var showCaseItems = document.querySelectorAll(".showCase");
        showCaseItems.forEach(function (item, index) {
            item.querySelector(".item").onmouseover = () =>
                gsap.to(this[index], {
                    scale: 0.95,
                    duration: 0.3,
                    ease: "0.25, 0.47, 0.12, 0.99",
                });
            item.querySelector(".item").onmouseleave = () =>
                gsap.to(this[index], {
                    scale: 1,
                    duration: 0.3,
                    ease: "0.25, 0.47, 0.12, 0.99",
                });
        }, showCaseItems);
    }
    render() {
        return (
            <div id="ourWork">
                <div className="horizontalPics">
                    <div
                        className="picsWrapper"
                        data-scroll-offset="-20%"
                        data-scroll
                        data-scroll-speed="-2"
                    >
                        {this.images.map((row, index) => {
                            return (
                                <div
                                    className="row"
                                    key = {index}
                                    data-scroll-offset="-100%,-100%"
                                    data-scroll
                                    data-scroll-speed={
                                        (index + 1) % 2 ? "1" : "-1"
                                    }
                                    data-scroll-direction="horizontal"
                                >
                                    {this.images[index].map((image, index) => {
                                        return (
                                            <div key = {index} className="pic"
                                            style = {{
                                                backgroundImage : image ? `url(${require("./assets/img/clients/" + image +".jpg").default})` : "none"
                                            }}>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="ourWork">
                    <h1 className="title">RECENT WORK</h1>
                    <div className="showCase">
                        <div className="leftText">
                            {" "}
                            <p>BRANDING & UX/UI DESIGN</p>{" "}
                        </div>
                        <div className="firstSection">
                            <div className="item firstItem">
                                {/* <img src=" alt=""/> */}
                            </div>
                            <div className="bottomText">
                                <h1>CLIENT</h1>
                                <h2>A HIGH END TECH BRAND FOR SELLING</h2>
                            </div>
                        </div>
                    </div>

                    <div className="showCase leftClient">
                        <div className="leftText">
                            {" "}
                            <p>BRANDING & UX/UI DESIGN</p>{" "}
                        </div>
                        <div className="firstSection">
                            <div className="item secondItem">
                                {/* <img src=" alt=""/> */}
                            </div>
                            <div className="bottomText">
                                <h1>CLIENT</h1>
                                <h2>A HIGH END TECH BRAND FOR SELLING</h2>
                            </div>
                        </div>
                    </div>
                    <div className="showCase">
                        <div className="leftText">
                            {" "}
                            <p>BRANDING & UX/UI DESIGN</p>{" "}
                        </div>
                        <div className="firstSection">
                            <div className="item thirdItem">
                                {/* <img src=" alt=""/> */}
                            </div>
                            <div className="bottomText">
                                <h1>CLIENT</h1>
                                <h2>A HIGH END TECH BRAND FOR SELLING</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
