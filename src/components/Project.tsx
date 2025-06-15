import React from "react";
import powAd from '../assets/images/Pow AD.png';
import talkShowThumb from '../assets/images/Talk Show thumbnail.png';
import industrialFairThumb from '../assets/images/2024 industrial trade fair.png';

import creative_society from '../assets/images/ilovemartian-20250613-0001.jpg';
// import invincibleThumb from '../assets/images/INVINCIBLE-THUMBNAIL.png';
// import invincibleThumb from '../assets/images/INVINCIBLE-THUMBNAIL.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Sample Projects</h1>
            <div className="projects-grid">

                {/* POW Express Ad */}
                <div className="project">
                    <a href="https://imgur.com/gallery/pow-express-ad-O6jSkxq" target="_blank" rel="noreferrer">
                        <img src={powAd} className="zoom" alt="POW Express Ad Thumbnail" width="100%" />
                    </a>
                    <a href="https://imgur.com/gallery/pow-express-ad-O6jSkxq" target="_blank" rel="noreferrer">
                        <h2>POW Express Ad</h2>
                    </a>
                    <p>This is a Professional edited promotional video for an asian cusine, shot and edited by me.</p>
                </div>

                {/* Talk Show Edit */}
                <div className="project">
                    <a href="https://imgur.com/gallery/talkshow-edit-NS9TavP" target="_blank" rel="noreferrer">
                        <img src={talkShowThumb} className="zoom" alt="Talk Show Edit Thumbnail" width="100%" />
                    </a>
                    <a href="https://imgur.com/gallery/talkshow-edit-NS9TavP" target="_blank" rel="noreferrer">
                        <h2>Talk Show Edit</h2>
                    </a>
                    <p>Professional editing for a televised talk show. Included custom motion graphics, animated sequences & keyframes, and audio balancing.</p>
                </div>

                {/* 2024 Industrial Trade Fair */}
                <div className="project">
                    <a href="https://imgur.com/JZW7eSX" target="_blank" rel="noreferrer">
                        <img src={industrialFairThumb} className="zoom" alt="2024 Industrial Fair Thumbnail" width="100%" />
                    </a>
                    <a href="https://imgur.com/JZW7eSX" target="_blank" rel="noreferrer">
                        <h2>2024 Industrial Trade Fair</h2>
                    </a>
                    <p>Event highlight reel covering the 2024 Lagos Industrial Trade Fair. Edited for recap storytelling with dramatic visuals and music transitions.</p>
                </div>

                {/* Creative Society Design */}
                <div className="project">
                    <a href="https://imgur.com/a/yOURiMGURL" target="_blank" rel="noreferrer">
                        <img src={creative_society} className="zoom" alt="Creative Society Thumbnail" width="100%" />
                    </a>
                    <a href="https://imgur.com/a/yOURiMGURL" target="_blank" rel="noreferrer">
                        <h2>Creative Society</h2>
                    </a>
                    <p>A graphic design created for a brand named Creative Society. Focused on bold aesthetics and brand identity.</p>
                </div>


                {/* INVINCIBLE Thumbnail */}
                <div className="project">
                    <a href="https://imgur.com/gallery/invincible-thumbnail-ARkGOFS" target="_blank" rel="noreferrer">
                        <img src={invincibleThumb} className="zoom" alt="Invincible Edit Thumbnail" width="100%" />
                    </a>
                    <a href="https://imgur.com/gallery/invincible-thumbnail-ARkGOFS" target="_blank" rel="noreferrer">
                        <h2>INVINCIBLE Fan Edit</h2>
                    </a>
                    <p>Fan edit based on the series "Invincible" showcasing intense emotional beats and action pacing with music sync.</p>
                </div>
                {/* Figma UI Design Embed */}
                <div className="project">
                    <h2>Taxi App UI Design (Figma)</h2>
                    <div
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)', marginTop: '1rem' }}
                        dangerouslySetInnerHTML={{
                            __html: `<iframe width="100%" height="450" src="https://embed.figma.com/design/sWtopwsMJwODz4UlBGEeRe/Taxi?node-id=39-334&embed-host=share" allowfullscreen></iframe>`,
                        }}
                    />
                    <p>Interactive prototype for a Taxi Booking App, designed in Figma with focus on clean UI/UX for mobile use.</p>
                </div>


            </div>
        </div>
    );
}


export default Project;
