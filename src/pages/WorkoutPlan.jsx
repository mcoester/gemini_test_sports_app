import React, { useState } from 'react';
import { exercises } from '../data/exercises.js';

function WorkoutPlan() {
    const [plan, setPlan] = useState({
        Montag: [],
        Dienstag: [],
        Mittwoch: [],
        Donnerstag: [],
        Freitag: [],
        Samstag: [],
        Sonntag: []
    });

    const [selectedDay, setSelectedDay] = useState('Montag');
    const [selectedExercise, setSelectedExercise] = useState(exercises[0].id);

    function addExercise() {
        const exerciseToAdd = exercises.find(ex => ex.id === parseInt(selectedExercise));
        if (exerciseToAdd && !plan[selectedDay].find(e => e.id === exerciseToAdd.id)) {
            const newPlan = {...plan};
            newPlan[selectedDay] = [...newPlan[selectedDay], exerciseToAdd];
            setPlan(newPlan);
        }
    }

    function removeExercise(day, exerciseId) {
        const newPlan = {...plan};
        newPlan[day] = newPlan[day].filter(ex => ex.id !== exerciseId);
        setPlan(newPlan);
    }

    return (
        <div className="container mt-5">
            <div className="text-center mb-5">
                <h2>Mein Workout Plan</h2>
                <p className="lead">Stelle deinen wöchentlichen Trainingsplan zusammen.</p>
            </div>
            
            <div className="card bg-dark border-secondary mb-5">
                <div className="card-body">
                     <h5 className="card-title">Übung hinzufügen</h5>
                     <div className="row g-2 align-items-end">
                        <div className="col-md">
                            <label htmlFor="day-select" className="form-label">Wochentag</label>
                            <select id="day-select" className="form-select" value={selectedDay} onChange={e => setSelectedDay(e.target.value)}>
                                {Object.keys(plan).map(day => <option key={day} value={day}>{day}</option>)}
                            </select>
                        </div>
                        <div className="col-md">
                            <label htmlFor="exercise-select" className="form-label">Übung</label>
                             <select id="exercise-select" className="form-select" value={selectedExercise} onChange={e => setSelectedExercise(e.target.value)}>
                                {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
                            </select>
                        </div>
                        <div className="col-md-auto">
                            <button className="btn btn-primary w-100" onClick={addExercise}>Hinzufügen</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {Object.keys(plan).map(day => (
                    <div className="col-12 col-lg-6 mb-4" key={day}>
                        <div className="card h-100">
                            <div className="card-header fw-bold">{day}</div>
                            <ul className="list-group list-group-flush">
                                {plan[day].length > 0 ? (
                                    plan[day].map(ex => (
                                        <li key={ex.id} className="list-group-item d-flex justify-content-between align-items-center">
                                            {ex.name}
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => removeExercise(day, ex.id)}>&times;</button>
                                        </li>
                                    ))
                                ) : (
                                    <li className="list-group-item text-muted">Noch keine Übungen für diesen Tag</li>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkoutPlan;
