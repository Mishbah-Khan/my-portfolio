import './Hero.css';
import { useState } from 'react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="hero" id="home">
      <div>
        <div className="hero-eyebrow">
          <span className="status-dot"></span>
          Available for new projects
        </div>
        <h1>
          Building<br />
          <span className="line-accent">Digital</span><br />
          <span className="line-electric">Experiences</span>
        </h1>
        <p className="hero-desc">
          Full-stack software engineer with 5+ years crafting scalable web applications, intuitive APIs, and tools
          that developers and users actually love.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View my work →</a>
          <a href="#contact" className="btn-outline">Let's talk</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-avatar-wrap">
          <div className="hero-avatar-ring"></div>
          <div className="hero-avatar-ring2"></div>
          <div className="hero-avatar-inner">
            {!imageError ? (
              <img 
                src="/M.Khan.jpg" 
                alt="Mishbah Khan" 
                className="hero-image"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  setImageError(true);
                }}
              />
            ) : (
              <div className="initials-text">MK</div>
            )}
          </div>
          <div className="floating-badge badge-top">
            <span className="badge-dot" style={{ background: 'var(--lime)' }}></span> React & Node.js
          </div>
          <div className="floating-badge badge-mid">
            <span className="badge-dot" style={{ background: 'var(--electric)' }}></span> 50+ Projects
          </div>
          <div className="floating-badge badge-bottom">
            <span className="badge-dot" style={{ background: 'var(--coral)' }}></span> TypeScript
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;