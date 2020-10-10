import React from "react";
import { Router, Link } from "@reach/router";
import "./css/firstPage.scss";
import ScrollTrigger from "gsap/ScrollTrigger";

export default class Content extends React.Component {
    componentDidMount() {}
    render() {
        return (
            <section id="firstPage">
                <div id="content">
                    <div className="titleWrapper">
                        <p className="title">Let us </p>
                    </div>
                    <div className="titleWrapper">
                        <p className="title">connect</p>
                    </div>
                    <div className="titleWrapper">
                        <p className="title">the dots.</p>
                    </div>

                    <div className="describe">
                        <p className="description">
                            {" "}
                            3RD Party is a multi-disciplinary full service
                            marketing agency that designs cohesive solutions to
                            deliver thoughtful work. Our work encompasses
                            graphics, websites and digital experiences, sound
                            and motion, advertising and communication.
                        </p>
                    </div>
                    <Link to="values" className="seeMore">
                        LEARN MORE
                    </Link>
                </div>
            </section>
        );
    }
}
