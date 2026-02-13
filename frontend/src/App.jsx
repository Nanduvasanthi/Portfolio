import React from 'react';
import Navbar from './components/Navbar';
// Import all your section components
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import TechStack from './pages/TechStack';
import Projects from './pages/Projects';
import Internships from './pages/Internships';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-light-200 dark:bg-dark-300">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="tech-stack"><TechStack /></section>
        <section id="projects"><Projects /></section>
        <section id="internships"><Internships /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;