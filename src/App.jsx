import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="font-['Inter'] min-h-screen relative text-white bg-slate-950 overflow-x-hidden selection:bg-purple-500/50 selection:text-white">
        {/* Soft glowing circles / Bokeh effects */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-1000"></div>
          <div className="absolute top-[40%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-teal-400/20 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-700 duration-1000"></div>
          <div className="absolute bottom-[10%] left-[30%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-purple-500/20 rounded-full blur-[150px] mix-blend-screen animate-pulse delay-1000 duration-1000"></div>
        </div>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
