import React from 'react'

import Headshot from "../../Assets/img/adam_headshot_small.jpg"
import "./About.css"

const About = () => {
    return (
        <div id="aboutsection">
            <h1>About</h1>
            <p id="headingtext">We believe that Virtual Choir videos should be immersive experiences that are eye catching while being a pleasurable listening experience.  Utilizing skills in video editing and audio production, each of our videos is a unique experience that captures the essence of each group.</p>
            <div id="biography">
            <img src={Headshot} id="headshot" alt="Adam headshot"></img>
                <p id="bio">Adam was born and raised in Grosse Pointe, Michigan. Being young at the time "The Beatles Anthology" was released had a profound affect on his love for music, and his desire to be involved in the arts. 
                <br></br>
                Adam was singing at a young age, and began playing guitar at the age of four. At age 10, Adam joined the Choirs at Christ Church Grosse Pointe under the direction of Fred DeHaven, and later Scott Hanoian. As a member of the choirs, Adam has sung in France, Italy, and the United Kingdom, as well as at the National Cathedral in Washington D.C. 
                <br></br>
                In high school, Adam attended Interlochen Arts Camp for three years, studying Vocal Performance, Audio Recording Production, and Motion Picture Arts. He spent his senior year of high school at Interlochen Arts Academy, graduating with a major in Motion Picture Arts. 
                <br></br>
                Adam has created international commercials for "1964"...The Tribute, including the TV spots for their performance at Carnegie Hall.</p>
                
            </div>
        </div>
    )
}

export default About
