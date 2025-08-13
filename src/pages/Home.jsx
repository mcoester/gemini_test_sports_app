import { Link } from 'react-router-dom';

const homeCardStyle = {
    transition: 'transform 0.2s',
    cursor: 'pointer'
}

const homeCardHover = {
    transform: 'translateY(-5px)'
}

function Home() {
    return (
        <div>
            <header className="py-5 bg-secondary text-white text-center">
                <div className="container">
                    <h1 className="display-4">Willkommen bei Fitness Pro</h1>
                    <p className="lead">Dein persönlicher Begleiter auf dem Weg zu einem gesünderen Leben.</p>
                    <Link to="/exercises" className="btn btn-primary btn-lg mt-3">Starte dein Training</Link>
                </div>
            </header>
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="card bg-dark text-white mb-4" style={homeCardStyle} onMouseOver={e => e.currentTarget.style.transform = homeCardHover.transform} onMouseOut={e => e.currentTarget.style.transform = 'none'}>
                            <div className="card-body">
                                <h5 className="card-title">Übungen entdecken</h5>
                                <p className="card-text">Durchsuche unsere umfangreiche Datenbank mit Fitnessübungen.</p>
                                <Link to="/exercises" className="btn btn-outline-light">Ansehen</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-dark text-white mb-4" style={homeCardStyle} onMouseOver={e => e.currentTarget.style.transform = homeCardHover.transform} onMouseOut={e => e.currentTarget.style.transform = 'none'}>
                            <div className="card-body">
                                <h5 className="card-title">Plan erstellen</h5>
                                <p className="card-text">Stelle deinen individuellen Trainingsplan für die Woche zusammen.</p>
                                <Link to="/plan" className="btn btn-outline-light">Planen</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-dark text-white mb-4" style={homeCardStyle} onMouseOver={e => e.currentTarget.style.transform = homeCardHover.transform} onMouseOut={e => e.currentTarget.style.transform = 'none'}>
                            <div className="card-body">
                                <h5 className="card-title">Fortschritt verfolgen</h5>
                                <p className="card-text">Behalte deine Erfolge im Auge und bleibe motiviert. (Demnächst!)</p>
                                <a href="#" className="btn btn-outline-light disabled">Ansehen</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
