import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import WorkoutPlan from './pages/WorkoutPlan';

const appStyle = {
  paddingTop: '56px' // Height of the fixed navbar
};

function App() {
  return (
    <BrowserRouter>
      <div style={appStyle}>
        <Header />
        <main className="py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/plan" element={<WorkoutPlan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;