import React, { useState } from 'react';
import { exercises } from '../data/exercises.js';

function Exercises() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredExercises = exercises.filter(ex => 
        ex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ex.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <div className="text-center mb-5">
                <h2>Übungs-Datenbank</h2>
                <p className="lead">Finde die perfekten Übungen für dein Training.</p>
            </div>
            <input 
                type="text" 
                className="form-control mb-4" 
                placeholder="Suche nach Name oder Kategorie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="row">
                {filteredExercises.length > 0 ? filteredExercises.map(ex => (
                    <div className="col-md-6 col-lg-4 mb-4" key={ex.id}>
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{ex.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{ex.category}</h6>
                                <p className="card-text">{ex.description}</p>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="col-12">
                        <p className="text-center text-muted">Keine Übungen gefunden.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Exercises;
