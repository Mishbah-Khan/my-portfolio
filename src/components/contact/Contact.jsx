import React, { useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="contact-wrap reveal" ref={contactRef}>
        <div className="section-tag">// Get in touch</div>
        <h2 className="section-title">Let's build<br />something <em>great</em></h2>
        <p className="body-text">
          Whether it's a full product, a technical consultation, or just a conversation — my inbox is open. I
          typically respond within 24 hours.
        </p>
        <a href="mailto:mishbahkhan505@gmail.com" className="big-email">mishbahkhan505@gmail.com</a>
        <div className="contact-links">
          <a href="https://github.com/Mishbah-Khan" className="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
            GitHub
          </a>
          <a href="https://bd.linkedin.com/in/mishbah-khan" className="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a href="My_CV.pdf" className="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;