import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-['Inter'] min-h-screen relative text-white bg-slate-950 overflow-x-hidden selection:bg-purple-500/50 selection:text-white">
      {/* Soft glowing circles / Bokeh effects */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-1000"></div>
        <div className="absolute top-[40%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-teal-400/20 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-700 duration-1000"></div>
        <div className="absolute bottom-[10%] left-[30%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-purple-500/20 rounded-full blur-[150px] mix-blend-screen animate-pulse delay-1000 duration-1000"></div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Stats />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
