
import './App.css';
import { BrowserRouter as Router ,  Route,Routes } from "react-router-dom";
import { Footer } from './footer';
import { Home } from './Home';
import { Navbar } from './nav';
import {  Placespage } from './place';


function App() {
  return (
    <div className="App">
      
      
      <Router>
      <Routes>

      <Route path="/" element={<Home />}/>
        <Route path="/place" element={<Placespage/> }/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
