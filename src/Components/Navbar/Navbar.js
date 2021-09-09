import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"

import Logo from "../../Assets/img/logowhite.png";

import "./Navbar.css"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return (
            <div id="navigation">
                <div id="mobilenavigation">
                    <img id="logo" src={Logo} alt="Armada Virtual Choirs logo"></img>
                    <div id="burger" onClick={this.handleClick}>
                        <div id="line1" className={this.state.clicked ? 'line1click' : ''}></div>
                        <div id="line2" className={this.state.clicked ? 'line2click' : ''}></div>
                        <div id="line3" className={this.state.clicked ? 'line3click' : ''}></div>
                    </div>
                </div>
                <div className={this.state.clicked ? 'navbar active' : 'navbar'}>
                    <Link to="/" className="navlinks" onClick={this.handleClick}>Home</Link>
                    <HashLink to="/#media" className="navlinks" onClick={this.handleClick}>Portfolio</HashLink>
                    <HashLink to="/#about" className="navlinks" onClick={this.handleClick}>About</HashLink>
                    <HashLink to="/#contact" className="navlinks" onClick={this.handleClick}>Contact</HashLink>
                </div>
            </div>
        )
    }
}

export default Navbar