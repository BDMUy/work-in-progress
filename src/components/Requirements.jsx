import React, { useState } from 'react';

export default function Requirements() {
    const [modalOpen, setModalOpen] = useState(false);
    const [mdContent, setMdContent] = useState('Cargando reglas...');

    const loadRules = async () => {
        try {
            const response = await fetch(`${import.meta.env.BASE_URL}reglas.md`);
            if (response.ok) {
                const text = await response.text();
                // Ensure marked is available globally as setup in layout
                if (window.marked && text.trim().length > 0) {
                    setMdContent({ __html: window.marked.parse(text) });
                } else {
                    setMdContent({ __html: '<p>El archivo reglas.md no tiene contenido o no se cargó el parser.</p>' });
                }
            } else {
                setMdContent({ __html: '<p>Hubo un error cargando reglas.md.</p>' });
            }
        } catch (error) {
            console.error('Error fetching markdown:', error);
            setMdContent({ __html: '<p>No se pudo cargar reglas.md.</p>' });
        }
    };

    const openModal = () => {
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
        loadRules();
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleBackdropClick = (e) => {
        if (e.target.id === 'rules-modal') {
            closeModal();
        }
    };

    return (
        <>
            <section className="section glass-panel fade-in nomargin">
                <h2 className="section-title">Requisitos Básicos</h2>
                <ul className="requirements-list">
                    <li>
                        <strong>Estar en la guild.</strong>
                        <p>En caso de haber excepciones tratar con el <em>Guild Master</em> y se les dará requisitos especiales. No mas de 3 excepciones para que la guild reciba los logros de guild correspondientes a la raid.</p>
                    </li>
                    <li>
                        <strong>Comunicarse con el Raid Lider.</strong>
                        <p>Se deberán comunicar con el Raid Lider para que los anote en su lista personal de players.</p>
                    </li>
                    <li>
                        <strong>Donar mínimo 2.000 (mil) de oro semanal a la guild.</strong>
                        <p>El oro donado se utilizará únicamente para festines, runas vantus y calderos para ser usados en la raid.</p>
                    </li>
                    <li>
                        <strong>Estar 15 minutos antes del horario de raid.</strong>
                        <p>Sean puntuales, no es solo tu tiempo si no el resto de los participantes. Además se realizarán anuncios o se explicarán las peleas en este tiempo.</p>
                    </li>
                    <li>
                        <strong>Estar en el discord de la guild.</strong>
                        <p>Se utiliza discord como herramienta de comunicación y organización de la raid. Allí se inscribirán para ser considerados para la raid...</p>
                    </li>
                </ul>

                <button onClick={openModal} className="btn-secondary">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    Leer Reglas de Raid
                </button>
            </section>

            {modalOpen && (
                <div id="rules-modal" className="modal show" onClick={handleBackdropClick} style={{ display: 'flex', opacity: 1 }}>
                    <div className="modal-content glass-panel" style={{ transform: 'scale(1)' }}>
                        <button className="close-modal" onClick={closeModal}>&times;</button>
                        <div id="markdown-content" dangerouslySetInnerHTML={mdContent.__html ? mdContent : { __html: mdContent }}>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
