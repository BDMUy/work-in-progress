import React from 'react';

export default function Hero() {
    return (
        <header className="hero">
            <div className="hero-video-bg">
                <video 
                    src={`${import.meta.env.BASE_URL}assets/banner.mp4`}
                    poster={`${import.meta.env.BASE_URL}poster.png`}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                ></video>
            </div>
            <div className="overlay"></div>
            <div className="hero-content fade-in">
                <h1 className="guild-title">Work in progress</h1>
                <p className="guild-subtitle">Guild de World of Warcraft</p>
                <a href="#join" className="btn-primary">Únete a la Guild</a>
            </div>
        </header>
    );
}
