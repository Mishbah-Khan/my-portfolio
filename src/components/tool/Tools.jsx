// components/Tools.js
import React, { useEffect, useRef } from 'react';
import './Tools.css';

const tools = [
  { name: 'VS Code', icon: '💻', description: 'Primary editor with powerful extensions, integrated terminal, and Git support.', color: '#007ACC' },
  { name: 'Code::Blocks', icon: '📝', description: 'Lightweight C/C++ IDE for algorithm practice and competitive programming.', color: '#E67E22' },
  { name: 'Brackets', icon: '🔧', description: 'Front-end focused editor with Live Preview and inline editing for CSS.', color: '#5FCF80' },
  { name: 'GitHub', icon: '🐙', description: 'Version control, collaboration, CI/CD with Actions, and open-source contributions.', color: '#FFFFFF' },
  { name: 'Sourcetree', icon: '🌳', description: 'Visual Git GUI for simplified branching, merging, and repository management.', color: '#0F6F9E' },
  { name: 'Postman', icon: '📬', description: 'API testing, environment management, and automated contract testing workflows.', color: '#FF6C37' },
  { name: 'Discord', icon: '🎮', description: 'Team communication, developer communities, and real-time project collaboration.', color: '#5865F2' },
  { name: 'OpenAI', icon: '🤖', description: 'Leveraging GPT models for code generation, API integration, and building AI-powered features.', color: '#10A37F' }
];

const Tools = () => {
  const toolsRef = useRef(null);

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

    if (toolsRef.current) {
      observer.observe(toolsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tools" style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }} className="reveal" ref={toolsRef}>
        <div className="section-tag">// Toolchain</div>
        <h2 className="section-title">Dev tools I <em>master</em></h2>
        <p className="body-text" style={{ maxWidth: '700px', marginBottom: '2rem' }}>
          From IDE to collaboration — these are the instruments that shape my daily workflow and empower me to build faster, cleaner, and smarter.
        </p>
        <div className="tools-grid">
          {tools.map((tool, idx) => (
            <div key={idx} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <div className="tool-name">{tool.name}</div>
              <div className="tool-desc">{tool.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;