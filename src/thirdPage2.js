import React from "react";
import path from "path";
import style from "./css/thirdPage.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default class ThirdPage extends React.Component {
    constructor(props) {
        super(props);
        this.previewELement = null;
        this.myTween = null;
        this.clients = ["FACEBOOK", "GOOGLE", "TWITTER", "REDDIT"];
        this.state = {
            currentPic: "1",
        };
    }
    componentDidMount() {
        this.myTween = gsap.from(this.previewELement.firstElementChild, {
            yPercent: "-100",
            duration: "1",
            ease: "power2",
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentPic !== this.state.currentPic) {
            this.myTween.restart();
        }
    }

    render() {
        return (
            <div id="thirdPage">
                <div id="ourWork">
                    <h1>OUR</h1>
                    <h1>Work</h1>
                </div>
                <div className="clientsList">
                    {this.clients.map((client, index) => {
                        return (
                            <div className="client">
                                <h2
                                    onMouseOver={() => {
                                        this.setState({
                                            currentPic: `${index}`,
                                        });
                                    }}
                                    className="outer"
                                >
                                    {client}
                                </h2>
                                <h2 className="inner">{client}</h2>
                            </div>
                        );
                    })}
                </div>
                <div
                    className="clientPreview"
                    ref={(element) => (this.previewELement = element)}
                >
                    <img
                        src={`./clients/image${this.state.currentPic}.jpg`}
                        alt=""
                    />
                </div>
            </div>
        );
    }
}
