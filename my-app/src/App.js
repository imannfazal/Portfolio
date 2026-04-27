import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <header>
          <h1>Iman Fazal</h1>
          <p>Frontend Developer | Figma Expert</p>

          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate frontend developer with a strong background in website design.
            I enjoy working with Figma and have a keen interest in UI/UX Design.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>

          <div className="project">
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
            <img src="https://via.placeholder.com/600x400" alt="Project 1" />
          </div>

          <div className="project">
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
            <img src="https://via.placeholder.com/600x400" alt="Project 2" />
          </div>

        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>You can reach me at:</p>
          <ul>
            <li>Email: your-email@example.com</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default App;