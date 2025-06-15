import React from "react";
import powAd from '../assets/images/Pow AD.png';
import talkShowThumb from '../assets/images/Talk Show thumbnail.png';
import industrialFairThumb from '../assets/images/2024 industrial trade fair.png';
import invincibleThumb from '../assets/images/INVINCIBLE-THUMBNAIL.png';
import creative_society from '../assets/images/ilovemartian-20250613-0001.jpg';

import idsThumb from '../assets/images/41598_2025_88286_Fig1_HTML.png';
import diseaseThumb from '../assets/images/chronic_Disease_App_Screenshot.png';
import behanceThumb from '../assets/images/3d-rendering-ui-icon.png';
import taxiThumb from '../assets/images/taxi ui.png';
import medicUI from '../assets/images/medic_ui.png';

import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Sample Projects</h1>
            <div className="projects-grid">

                {/* Disease Detection App */}
                <div className="project">
                    <a href="https://disease-detection-2.streamlit.app/" target="_blank" rel="noreferrer">
                        <img src={diseaseThumb} className="zoom" alt="Disease Detection App Thumbnail" width="100%" />
                    </a>
                    <a href="https://disease-detection-2.streamlit.app/" target="_blank" rel="noreferrer">
                        <h2>Disease Detection App</h2>
                    </a>
                    <p>
                        A disease risk prediction platform using Artificial Neural Networks (ANN) to assess risks for diabetes and kidney disease. I developed and trained the models, which are now accessible via Streamlit for public use.
                    </p>
                </div>

                {/* IDS App */}
                <div className="project">
                    <a href="https://intrusion-detection-system-ike.streamlit.app/" target="_blank" rel="noreferrer">
                        <img src={idsThumb} className="zoom" alt="IDS App Thumbnail" width="100%" />
                    </a>
                    <a href="https://intrusion-detection-system-ike.streamlit.app/" target="_blank" rel="noreferrer">
                        <h2>Intrusion Detection System</h2>
                    </a>
                    <p>
                        A machine learning-based Network Intrusion Detection System using KNN and Decision Tree, both achieving over 90% accuracy on a dataset with over 500,000 records. Integrated into a Streamlit web app for accessibility, with GPT-4 powered suggestions based on analyzed network traffic.
                    </p>
                </div>

                {/* Taxi App UI */}
                <div className="project">
                    <a href="https://www.figma.com/design/sWtopwsMJwODz4UlBGEeRe/Taxi?node-id=39-334&embed-host=share" target="_blank" rel="noreferrer">
                        <img src={taxiThumb} className="zoom" alt="Taxi UI Thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/design/sWtopwsMJwODz4UlBGEeRe/Taxi?node-id=39-334&embed-host=share" target="_blank" rel="noreferrer">
                        <h2>Taxi App UI Design</h2>
                    </a>
                    <p>UI/UX design for a Taxi Booking App. Clean and functional layout with mobile responsiveness, prototyped in Figma.</p>
                </div>

                {/* Medical App UI */}
                <div className="project">
                    <a href="https://www.figma.com/design/TPnO8jBDLsQFZbwv32pUyR/Medics---Medical-App-UI?node-id=0-1&p=f&t=Tth9CHQzJUwmBHFT-0" target="_blank" rel="noreferrer">
                        <img src={medicUI} className="zoom" alt="Medical UI Thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/design/TPnO8jBDLsQFZbwv32pUyR/Medics---Medical-App-UI?node-id=0-1&p=f&t=Tth9CHQzJUwmBHFT-0" target="_blank" rel="noreferrer">
                        <h2>Medical App UI</h2>
                    </a>
                    <p>A comprehensive UI design for a medical app enabling patients and doctors to book sessions and hold video calls. Designed to streamline healthcare interaction with a focus on accessibility and clarity.</p>
                </div>

                {/* POW Express Ad */}
                <div className="project">
                    <a href="https://imgur.com/gallery/pow-express-ad-O6jSkxq" target="_blank" rel="noreferrer">
                        <img src={powAd} className="zoom" alt="POW Express Ad Thumbnail" width="100%" />
                    </a>
                    <a href="https://imgur.com/gallery/pow-express-ad-O6jSkxq" target="_blank" rel="noreferrer">
                        <h2>POW Express Ad</h2>
                    </a>
                    <p>This is a professionally edited promotional video for an Asian cuisine, shot and edited by me.</p>
                </div>

                {/* Talk Show Edit */}
                <div className="project">
                    <a href="https://imgur.com/gallery/talkshow-edit-NS9TavP" target="_blank" rel="noreferrer">
                        <img src={talkShowThumb} className="zoom" alt="Talk Show Edit Thumbnail" width="100%" />
                    </a>
                    <a href="https://imgur.com/gallery/talkshow-edit-NS9TavP" target="_blank" rel="noreferrer">
                        <h2>Talk Show Edit</h2>
                    </a>
                    <p>Professional editing for a televised talk show. Included custom motion graphics, animated sequences, keyframes, and audio balancing.</p>
                </div>

                {/* 2024 Industrial Trade Fair */}
                <div className="project">
                    <a href="https://imgur.com/JZW7eSX" target="_blank" rel="noreferrer">
                        <img src={industrialFairThumb} className="zoom" alt="2024 Industrial Fair Thumbnail" width="100%" />
                    </a>
                    <a href="https://imgur.com/JZW7eSX" target="_blank" rel="noreferrer">
                        <h2>2024 Industrial Trade Fair</h2>
                    </a>
                    <p>Promotional short clip shot and edited by me for the 2024 Lagos Industrial Trade Fair.</p>
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
                        <h2>Invincible Thumbnail</h2>
                    </a>
                    <p>This thumbnail was designed by me for a channel named Fictionverse.</p>
                </div>

                {/* Behance Showcase */}
                <div className="project">
                    <a href="https://www.behance.net/martian616" target="_blank" rel="noreferrer">
                        <img src={behanceThumb} className="zoom" alt="Behance Showcase Thumbnail" width="100%" />
                    </a>
                    <a href="https://www.behance.net/martian616" target="_blank" rel="noreferrer">
                        <h2>More Projects on Behance</h2>
                    </a>
                    <p>Explore more of my work including UI/UX designs, illustrations, and video edits on my Behance profile.</p>
                </div>

            </div>
        </div>
    );
}

export default Project;
