import React from "react";
import { Router, Link } from "@reach/router";
import "./css/navBar.scss";
import ContactUs from "./contactUs";

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        // Toggling the Hamburger menu
        this.state = {
            toggle: false,
        };
    }
    render() {
        return (
            <div>
                <nav>
                    <div id="navBar">
                        <div className="third">
                            <Link to="values" className="btn">
                                About
                            </Link>
                        </div>
                        <div className="third">
                            <Link to="/">
                                <h2 id="logo">3RD PARTY</h2>
                            </Link>
                        </div>
                        <div className="third">
                            <Link to="contactus" className="btn btn-right">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
