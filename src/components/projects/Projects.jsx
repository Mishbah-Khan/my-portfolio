import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Flux — Real-time analytics platform',
    description: 'A high-performance analytics dashboard handling 10M+ events/day with real-time charts, custom funnels, and multi-tenant architecture. Built for a SaaS startup.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    tagColors: ['lime', 'electric', 'teal', 'coral'],
    thumbClass: 'project-thumb-p1',
    thumbText: 'FLUX',
    badge: 'Featured',
    featured: true,
    links: [{ label: '↗ Live demo', url: '#' }, { label: '⌥ GitHub', url: '#' }]
  },
  {
    id: 2,
    title: 'Ratelimit-kit',
    description: 'Zero-dependency rate limiting middleware with Redis-backed sliding window and token bucket algorithms. 2k+ GitHub stars.',
    tags: ['Node.js', 'REST'],
    tagColors: ['electric', 'lime'],
    thumbClass: 'project-thumb-p2',
    thumbText: 'API',
    badge: 'OSS',
    featured: false,
    links: [{ label: '⌥ GitHub', url: '#' }, { label: '↗ npm', url: '#' }]
  },
  {
    id: 3,
    title: 'CodeReview AI',
    description: 'Automated PR review tool using LLMs to catch bugs, suggest improvements, and enforce style guides. Integrates with GitHub Actions.',
    tags: ['Python', 'FastAPI'],
    tagColors: ['teal', 'coral'],
    thumbClass: 'project-thumb-p3',
    thumbText: 'AI',
    badge: '2024',
    featured: false,
    links: [{ label: '↗ Live demo', url: '#' }]
  },
  {
    id: 4,
    title: 'dbsnap',
    description: 'Blazing-fast CLI for PostgreSQL schema diffing and migration generation. 10x faster than existing tools.',
    tags: ['Rust', 'CLI'],
    tagColors: ['coral', 'lime'],
    thumbClass: 'project-thumb-p4',
    thumbText: 'DB',
    badge: 'Tool',
    featured: false,
    links: [{ label: '⌥ GitHub', url: '#' }]
  }
];

const Projects = () => {
  const projectsRef = useRef(null);
  const headerRef = useRef(null);

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

    if (headerRef.current) observer.observe(headerRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="projects-header reveal" ref={headerRef}>
        <div>
          <div className="section-tag">// Selected work</div>
          <h2 className="section-title">Projects I'm <em>proud of</em></h2>
        </div>
        <a href="#contact" className="btn-outline">All projects →</a>
      </div>
      <div className="projects-grid reveal" ref={projectsRef}>
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            <div className={`project-thumb ${project.thumbClass}`}>
              <div className="project-lines">
                <div className="project-line" style={{ top: '25%' }}></div>
                <div className="project-line" style={{ top: '50%' }}></div>
                <div className="project-line" style={{ top: '75%' }}></div>
              </div>
              <span className="project-thumb-art">{project.thumbText}</span>
              <span className="proj-badge">{project.badge}</span>
            </div>
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={`project-tag tag-${project.tagColors[idx]}`}>{tag}</span>
                ))}
              </div>
              <div className="project-name">{project.title}</div>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                {project.links.map((link, idx) => (
                  <a key={idx} className="proj-link" href={link.url}>{link.label}</a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;