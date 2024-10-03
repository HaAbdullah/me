        // Timeline.js

        import React from 'react';
        import './Timeline.css';

        const Timeline = () => {
        return (
            <section id="timeline" className="experiences-section">
            <div className="timeline-container">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="FirstBox">
                <div className = "timeline-box">
                    <p>Front End Developer @ MyRide901</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="timeline-box">
                <p>Event Planner @ Mind4Youth</p>
            </div>
            <div className="line"></div>
            <div className="timeline-box">
                <p>Studying Computer Science @ Toronto Metropolitan University</p>
            </div>
            <div className="line"></div>
            <div className="timeline-box">
                <p>Web Developer Intern @ Mind4Youth</p>
            </div>
            <div className="line"></div>
            <div className="timeline-box">
                <p>SciTech Regional Program graduate from Port Credit Secondary School</p>
            </div>
            <div className="line"></div>
            <div className="timeline-box">
                <p>Awarded Merit Award Recipient & Scholarship Winner</p>
            </div>
            </div>
            </section>
        );
        };

        export default Timeline;
