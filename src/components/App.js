import './style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Resume from './Resume';
import Contact from './Contact';
import Rightbar from './Rightbar';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Rightbar />
        <Title />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
