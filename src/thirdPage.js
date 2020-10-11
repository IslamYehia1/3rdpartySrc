import React from "react";
import style from "./css/ThirdPage.scss";
import path from "path";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default class ThirdPage extends React.Component {
    constructor(props) {
        super(props);
        var container = document.querySelector("#container") ; 
        gsap.registerPlugin(ScrollTrigger);
        this.listOfClients = ["FACEBOOK", "GOOGLE", "NETFLIX", "REDDIT"];
        this.clientPreview = null;
        this.faddingIn = null;
        this.shrinkTween = null;
        this.images = [
            ["", "", "image0.jpg", "image1.jpg"],
            ["image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"],
            ["image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg"],
            ["image10.jpg", "image11.jpg", "", ""],
        ];
        this.state = {
            currentImage: "image2.jpg",
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentImage !== this.state.currentImage) {
            this.clientPreview.style.backgroundImage = `url(
                ./assets/img/clients/${prevState.currentImage}
            )`;
            this.tween.restart();
        }
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
            <div id="thirdPage">
                <div className="wrapper">
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
                                            <img
                                            key = {index}
                                                className="pic"
                                                src={
                                                     image
                                                        ? import(`./assets/img/clients/${image}`)
                                                        : "none"
                                                }
                                            ></img>
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
                            <h5>BRANDING & UX/UI DESIGN</h5>{" "}
                        </div>
                        <div className="firstSection">
                            <div className="item firstItem">
                                {/* <img src=" alt=""/> */}
                            </div>
                            <div className="bottomText">
                                <h1>CLIENT</h1>
                                <h5>A HIGH END TECH BRAND FOR SELLING</h5>
                            </div>
                        </div>
                    </div>

                    <div className="showCase leftClient">
                        <div className="leftText">
                            {" "}
                            <h5>BRANDING & UX/UI DESIGN</h5>{" "}
                        </div>
                        <div className="firstSection">
                            <div className="item secondItem">
                                {/* <img src=" alt=""/> */}
                            </div>
                            <div className="bottomText">
                                <h1>CLIENT</h1>
                                <h5>A HIGH END TECH BRAND FOR SELLING</h5>
                            </div>
                        </div>
                    </div>
                    <div className="showCase">
                        <div className="leftText">
                            {" "}
                            <h5>BRANDING & UX/UI DESIGN</h5>{" "}
                        </div>
                        <div className="firstSection">
                            <div className="item thirdItem">
                                {/* <img src=" alt=""/> */}
                            </div>
                            <div className="bottomText">
                                <h1>CLIENT</h1>
                                <h5>A HIGH END TECH BRAND FOR SELLING</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 
                <div className="clients">
                    <h1>LATEST WORK</h1>

                    <div className="clientsList">
                        <div className="list">
                            {this.listOfClients.map((client, index) => {
                                return (
                                    <div className="clientName">
                                        <h2
                                            className="outer"
                                            clientid={`image${index}.jpg`}
                                            onMouseOver={(event) => {
                                                this.setState({
                                                    currentImage: event.target.getAttribute(
                                                        "clientid"
                                                    ),
                                                });
                                            }}
                                        >
                                            {client}
                                        </h2>
                                        <h2 className="inner">{client}</h2>
                                    </div>
                                );
                            })}
                            <button>VIEW ALL PROJECTS </button>
                        </div>
                    </div>
                    <div
                        className="clientPreview"
                        ref={(div) => (this.clientPreview = div)}
                    >
                        <img
                            src={`./assets/img/clients/${this.state.currentImage}`}
                        />
                    </div> */}
                {/* </div> */}
            </div>
        );
    }
}
