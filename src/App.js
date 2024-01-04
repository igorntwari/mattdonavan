import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingComponent from './components/LandingComponent.tsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
