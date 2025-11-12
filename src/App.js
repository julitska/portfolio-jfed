import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact'; 
import './App.css';

function App() {
  return (
    <Router basename="/portfolio-jfed">
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Projects />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
