import React from 'react';

export default function Schedule() {
    return (
        <div className="sidebar">
            <section className="section glass-panel schedules fade-in">
                <h2 className="section-title text-center">Horarios</h2>
                
                <div className="schedule-block core1">
                    <h3 className="core-title">Core 1</h3>
                    <p>Martes, Miércoles y Jueves<br/><strong>21:45 a 00:00 (GMT-3)</strong></p>
                </div>

                <div className="schedule-block core2">
                    <h3 className="core-title">Core 2</h3>
                    <p>Sábados y Domingos<br/><strong>16:45 a 19:00 (GMT-3)</strong></p>
                </div>
            </section>

            <section className="section glass-panel highlight-box" id="join">
                <h3 className="cta-msg">Para <span>ingresar</span> a la guild, rellenar el siguiente formulario:</h3>
                <a href="https://forms.gle/1iPS5LNcwS5uwsE58" target="_blank" rel="noopener noreferrer" className="btn-primary full-width">
                    Ir al formulario
                </a>

                <div className="external-links">
                    <a href="https://raider.io/guilds/us/quelthalas/Work%20in%20progress" target="_blank" rel="noopener noreferrer" className="ext-link raiderio" title="Raider.io Profile">
                        <img src={`${import.meta.env.BASE_URL}assets/raiderio.svg`} alt="Raider.io" />
                    </a>
                    <a href="https://www.warcraftlogs.com/guild/us/quelthalas/work%20in%20progress" target="_blank" rel="noopener noreferrer" className="ext-link wcl" title="Warcraft Logs Profile">
                        <img src={`${import.meta.env.BASE_URL}assets/warcraftlogs.png`} alt="Warcraft Logs" />
                    </a>
                </div>
            </section>
        </div>
    );
}
