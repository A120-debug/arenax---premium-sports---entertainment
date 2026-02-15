import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Activities } from './components/Activities';
import { Membership } from './components/Membership';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Activities />
        <Membership />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;