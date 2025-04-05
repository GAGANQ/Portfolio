import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
