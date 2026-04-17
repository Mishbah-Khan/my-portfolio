import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJs', 'Next.js',
    'Node.js', 'Express Js', 'PHP', 'WordPress', 'MongoDB', 'MySQL', 'PostgreSQL', 'GitHub'
  ];

  return (
    <section id="about">
      <div className="about-grid reveal" ref={aboutRef}>
        <div>
          <div className="section-tag">// About me</div>
          <h2 className="section-title">I write code that<br /><em>solves real problems</em></h2>
          <p className="body-text">
            Hey, I'm Mishbah — a full-stack engineer based in Rajshahi. I specialize in building fast,
            accessible, and beautifully engineered web products from idea to deployment.
          </p>
          <p className="body-text">
            I care deeply about clean architecture, developer experience, and performance. When I'm not coding
            I'm contributing to open source or writing about engineering patterns.
          </p>
          <div className="skills-chips">
            {skills.map((skill, idx) => (
              <span key={idx} className={`chip ${getChipClass(idx)}`}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="about-cards">
          <div className="about-card">
            <div className="about-card-icon icon-lime">⚡</div>
            <h4>Performance obsessed</h4>
            <p>I optimize for speed at every layer — from database queries to bundle size and Core Web Vitals.</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon icon-electric">🏗️</div>
            <h4>Architecture-first</h4>
            <p>Scalable systems start with clear thinking. I design APIs and data models before writing a single line.</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon icon-teal">🧪</div>
            <h4>Test-driven</h4>
            <p>Comprehensive test coverage isn't optional — it's how I ship with confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const getChipClass = (idx) => {
  const classes = ['c-coral', 'c-electric', 'c-teal', 'c-coral', 'c-electric', 'c-teal', 'c-coral', 'c-electric', 'c-teal', 'c-coral', 'c-electric', 'c-teal', 'c-coral', 'c-electric'];
  return classes[idx % classes.length];
};

export default About;