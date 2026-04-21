// components/About.jsx
import { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

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
    { name: 'HTML', level: 95, icon: '🌐' },
    { name: 'CSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 92, icon: '⚡' },
    { name: 'TypeScript', level: 88, icon: '📘' },
    { name: 'ReactJs', level: 94, icon: '⚛️' },
    { name: 'Next.js', level: 85, icon: '▲' },
    { name: 'Node.js', level: 90, icon: '🟢' },
    { name: 'Express Js', level: 88, icon: '🚂' },
    { name: 'PHP', level: 75, icon: '🐘' },
    { name: 'WordPress', level: 80, icon: '📝' },
    { name: 'MongoDB', level: 85, icon: '🍃' },
    { name: 'MySQL', level: 82, icon: '🗄️' },
    { name: 'PostgreSQL', level: 78, icon: '🐘' },
    { name: 'GitHub', level: 90, icon: '🐙' }
  ];

  const getSkillColor = (skillName) => {
    const colors = {
      'HTML': '#E44D26',
      'CSS': '#264DE4',
      'JavaScript': '#F7DF1E',
      'TypeScript': '#3178C6',
      'ReactJs': '#61DAFB',
      'Next.js': '#000000',
      'Node.js': '#339933',
      'Express Js': '#000000',
      'PHP': '#777BB4',
      'WordPress': '#21759B',
      'MongoDB': '#47A248',
      'MySQL': '#4479A1',
      'PostgreSQL': '#336791',
      'GitHub': '#181717'
    };
    return colors[skillName] || '#C8F135';
  };

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
              <div 
                key={idx} 
                className={`skill-chip ${hoveredSkill === idx ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ '--skill-color': getSkillColor(skill.name) }}
              >
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-level-bar">
                  <div 
                    className="skill-level-fill" 
                    style={{ width: `${hoveredSkill === idx ? skill.level : 0}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
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

export default About;