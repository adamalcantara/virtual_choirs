import React from 'react'
import "./Home.css"
import About from "../../Components/About/About"
import Portfolio from '../../Components/Portfolio/Portfolio'
import ContactForm from "../../Components/ContactForm/ContactForm"
import Footer from "../../Components/Footer/Footer"

const Home = () => {
    return (
        <div id="home">
            <div id="hero" className="section">
                <div id="text">
                <h2>We're very happy you're here.</h2>
                <h2>Please take a look at our work below.</h2>
                </div>
            </div>
            <div id="media" className="section">
                <Portfolio />
            </div>
            <div id="about">
                <About />
            </div>
            
            {/* <div id="medialink" className="section"></div> */}
            <div id="contact" className="section">
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Home
