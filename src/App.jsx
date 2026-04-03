import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Contact from './components/Contact';

function App() {
  // Custom Smooth Scroll and Reveal
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      document.body.style.setProperty('--scroll', `${scrollPos}px`);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative antialiased selection:bg-accent selection:text-black">
      {/* Dynamic Background Noise/Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Stats />
        <Contact />
      </main>

      {/* Decorative Blur Orbs for Overall Vibe */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-20" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -z-20" />
    </div>
  );
}

export default App;
