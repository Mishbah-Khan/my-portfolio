import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">Mishbah<span>.</span>dev</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#tools">Tools</a></li>
        <li><a href="#contact" className="nav-cta">Hire me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;