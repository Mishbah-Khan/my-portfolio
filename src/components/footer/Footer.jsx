import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <span>© 2026 Mishbah Khan. Built with passion.</span>
      <span style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#home" style={{ color: 'var(--muted)', textDecoration: 'none', transition: 'color .2s' }}
          onMouseEnter={(e) => e.target.style.color = '#fff'}
          onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}>
          ↑ Back to top
        </a>
      </span>
    </footer>
  );
};

export default Footer;