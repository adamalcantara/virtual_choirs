import React from 'react'
import "./Home.css"

const Home = () => {
    return (
        <div id="home">
            <div id="hero" className="section">
                <div id="text">
                <h2>We're very happy you're here.</h2>
                <h2>Please take a look at our work below.</h2>
                </div>
            </div>
            <div id="about" className="section"></div>
            <div id="media" className="section"></div>
            {/* <div id="medialink" className="section"></div> */}
            <div id="contact" className="section"></div>
        </div>
    )
}

export default Home
