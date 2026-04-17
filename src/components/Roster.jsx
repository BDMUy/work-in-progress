import React from 'react';

export default function Roster() {
    return (
        <section className="section roster-section" id="roster">
            <h2 className="section-title"><span>~</span> Nuestro Roster</h2>
            <div className="roster-grid">
                
                <div className="roster-card slide-up">
                    <div className="img-wrapper">
                        <img src={`${import.meta.env.BASE_URL}assets/navi.png`} alt="Guild Master Navi" />
                        <div className="card-glow"></div>
                    </div>
                    <div className="card-info">
                        <span className="role gm">Guild Master</span>
                        <h3 className="name">Navi</h3>
                    </div>
                </div>

                <div className="roster-card slide-up" style={{ animationDelay: '0.1s' }}>
                    <div className="img-wrapper">
                        <img src={`${import.meta.env.BASE_URL}assets/trinley.png`} alt="Main Officer Trinley" />
                        <div className="card-glow"></div>
                    </div>
                    <div className="card-info">
                        <span className="role officer">Main Officer</span>
                        <h3 className="name">Trinley</h3>
                    </div>
                </div>

                <div className="roster-card slide-up" style={{ animationDelay: '0.2s' }}>
                    <div className="img-wrapper">
                        <img src={`${import.meta.env.BASE_URL}assets/kawori.png`} alt="Assistant Kawori" />
                        <div className="card-glow"></div>
                    </div>
                    <div className="card-info">
                        <span className="role assistant">Assistant</span>
                        <h3 className="name">Kawori</h3>
                    </div>
                </div>

                <div className="roster-card slide-up" style={{ animationDelay: '0.3s' }}>
                    <div className="img-wrapper">
                        <img src={`${import.meta.env.BASE_URL}assets/jhin.png`} alt="Helper Jhin" />
                        <div className="card-glow"></div>
                    </div>
                    <div className="card-info">
                        <span className="role helper">Helper</span>
                        <h3 className="name">Jhin</h3>
                    </div>
                </div>

            </div>
        </section>
    );
}
