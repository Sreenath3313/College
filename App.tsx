import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Departments from './pages/Departments';
import Department from './pages/Department';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
// ...
const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-secondary-900">
        <Header />
        <FloatingActions />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/department/:id" element={<Department />} />
            {/* Fallback for other depts to generic dept template for this demo */}
            <Route path="/department/*" element={<Department />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;