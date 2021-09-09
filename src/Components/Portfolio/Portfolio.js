import React from 'react'
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <div id="videocontainerall">
                <div className="videocontainer">
                    <iframe className="youtubevideo" width="560" height="315" src="https://www.youtube.com/embed/PUMHUgaRfjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="videocontainer">
                    <iframe className="youtubevideo" width="560" height="315" src="https://www.youtube.com/embed/lie660HNNzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="videocontainer">
                    <iframe className="youtubevideo" width="560" height="315" src="https://www.youtube.com/embed/JF4ASxf7v_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="videocontainer">
                    <iframe className="youtubevideo" width="560" height="315" src="https://www.youtube.com/embed/2Yd_LZDVVTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

        </div>
    )
}

export default Portfolio
