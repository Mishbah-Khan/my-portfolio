import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    let mx = 0, my = 0;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.left = (mx - 6) + 'px';
        cursor.style.top = (my - 6) + 'px';
      }
      if (ring) {
        ring.style.left = (mx - 18) + 'px';
        ring.style.top = (my - 18) + 'px';
      }
    };

    const addHoverEffects = () => {
      const interactive = document.querySelectorAll('a, button, .chip, .project-card, .about-card, .contact-link, .tool-card');
      interactive.forEach(el => {
        el.addEventListener('mouseenter', () => {
          if (cursor) cursor.style.transform = 'scale(2)';
          if (ring) {
            ring.style.transform = 'scale(1.4)';
            ring.style.opacity = '0.8';
          }
        });
        el.addEventListener('mouseleave', () => {
          if (cursor) cursor.style.transform = 'scale(1)';
          if (ring) {
            ring.style.transform = 'scale(1)';
            ring.style.opacity = '0.5';
          }
        });
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    addHoverEffects();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
};

export default Cursor;