import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'NewsPortal - Modern Real-Time News Aggregator',
    description: 'NewsPortal combines real-time news delivery with stunning visual design, creating an engaging user experience that outperforms traditional news platforms.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    tagColors: ['lime', 'electric', 'coral', 'teal', 'electric'],
    thumbClass: 'project-thumb-p1',
    thumbText: 'news-portal',
    badge: 'Featured',
    featured: true,
    links: [{ label: '↗ Live demo', url: 'https://news-portal-mishbah.vercel.app/' }, { label: '⌥ GitHub', url: 'https://github.com/Mishbah-Khan/news-portal.git' }]
  },
  {
    id: 2, // Adjust based on your list order
    title: 'Popcorn with Mishbah',
    description: 'A dynamic movie discovery platform built with React that fetches real-time data from the OMDb API. Features include instant search, detailed movie insights, and a personalized watchlist managed via local storage.',
    tags: ['React', 'API', 'Tailwind'],
    tagColors: ['lime', 'teal', 'electric'],
    thumbClass: 'project-thumb-p1', // Ensure this matches your CSS classes
    thumbText: 'MOVIE',
    badge: 'WebApp',
    featured: false,
    links: [
      { label: '⌥ GitHub', url: 'https://github.com/Mishbah-Khan/popcorn.git' },
      { label: '↗ Live', url: 'https://popcorn-with-mishbah.vercel.app/' }
    ]
  },
  {
    id: 3, // Adjust based on your list order
    title: 'Travel Packing List',
    description: 'A logic-driven trip planner that helps users organize essentials. Features include dynamic item tracking, real-time packing statistics (percentage calculation), multi-criteria sorting, and persistent data storage.',
    tags: ['React', 'State Logic', "CSS"],
    tagColors: ['lime', 'coral', 'electric'],
    thumbClass: 'project-thumb-p3',
    thumbText: 'TRAVEL',
    badge: 'Utility',
    featured: false,
    links: [
      { label: '⌥ GitHub', url: 'https://github.com/Mishbah-Khan/Travel-Packing-List-with-React-Js.git' },
      { label: '↗ Live', url: 'https://travel-packing-list-mishbah.vercel.app/' }
    ]
  },
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