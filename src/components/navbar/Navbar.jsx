import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src="./logo.png" alt="logo" />
        <span className="brand-text">
          Mishbah<span>.</span>dev
        </span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
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