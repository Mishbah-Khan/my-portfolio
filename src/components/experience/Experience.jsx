// components/Experience.jsx
import React, { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    year: '2024 – Present',
    role: 'Full-Stack Developer',
    company: 'Acme Corp · Full-time',
    description: 'MERN stack developer building full-featured web apps with MongoDB, Express.js, React, and Node.js. Contributed to core architecture, RESTful APIs, database optimization, and caching strategies.',
    dotColor: 'lime'
  },
  {
    year: '2023 – 2024',
    role: 'Frontend Developer',
    company: 'TechStartup · Full-time',
    description: 'Worked under senior engineers to build and scale the product\'s MVP. Contributed to React frontend, Node.js API integration, and gained experience with modern workflows and agile practices.',
    dotColor: 'electric'
  },
  {
    year: '2022 – 2023',
    role: 'Frontend Developer (React)',
    company: 'Freelancer · Full-time',
    description: 'Delivered 15+ client projects including e-commerce platforms, dashboards, and marketing sites. Built reusable component libraries and introduced Storybook for component-driven development.',
    dotColor: 'coral'
  },
  {
    year: '2019 – 2021',
    role: 'Junior Developer (Freelance)',
    company: 'Fiverr · Upwork · Remote',
    description: 'Started as a WordPress developer, delivering custom themes, plugin integrations, and responsive websites for global clients. Built strong client communication and project management skills.',
    dotColor: 'teal'
  }
];

const Experience = () => {
  const headerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 4rem' }} className="reveal" ref={headerRef}>
        <div className="section-tag">// Experience</div>
        <h2 className="section-title">Where I've <em>worked</em></h2>
      </div>
      <div className="exp-timeline" ref={timelineRef}>
        {experiences.map((exp, idx) => (
          <div key={idx} className="exp-item reveal-item" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="exp-year">{exp.year}</div>
            <div className="exp-line">
              <div className={`exp-dot exp-dot-${exp.dotColor}`}></div>
            </div>
            <div className="exp-content">
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
              <p className="exp-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;