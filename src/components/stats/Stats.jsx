import { useEffect, useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const statsRef = useRef(null);

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

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-bar reveal" ref={statsRef}>
      <div className="stat-item">
        <span className="stat-num">5+</span>
        <span className="stat-label">Years experience</span>
      </div>
      <div className="stat-item">
        <span className="stat-num">50+</span>
        <span className="stat-label">Projects shipped</span>
      </div>
      <div className="stat-item">
        <span className="stat-num">20+</span>
        <span className="stat-label">Happy clients</span>
      </div>
      <div className="stat-item">
        <span className="stat-num">3</span>
        <span className="stat-label">Open-source libs</span>
      </div>
    </div>
  );
};

export default Stats;