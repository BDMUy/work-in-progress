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
            </section>
        </div>
    );
}
