import React from "react";
import ReactDOM from "react-dom";
import "./css/contactUs.scss";
export default class ContactUs extends React.Component {
    constructor(props){
        super(props) ; 
        this.locoScroll = props.locoScroll ; 
    }
    componentDidMount(){
        this.locoScroll.update() ; 
    }
    render() {
        return (
            <div id="contactPage">
                <div id="contactInfo">
                    <h1>CONTACT US</h1>
                    <div id="info">
                        <h3>EMAIL : hello@thirdparty.agency</h3>
                        <h3>Phone : +201008871525</h3>
                        <h3>Phone 2: +201118180718</h3>
                    </div>
                </div>
                <div id="contactPic"></div>
            </div>
        );
    }
}
