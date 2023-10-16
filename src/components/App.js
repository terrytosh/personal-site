import './style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Journals from './Journals';
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
          // Navbar routes
          <Route path="/personal-site/home" element={<Homepage />} />
          <Route path="/personal-site/journals" element={<Journals />} />
          <Route path="/personal-site/contact" element={<Contact />} />
          // Default route
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
