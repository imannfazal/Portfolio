import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     

    <title>Your Portfolio</title>

    <div class="container">
        <header>
            <h1>Iman Fazal</h1>
            <p>Frontend Developer | Figma Expert </p>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        
        <section id="about">
            <h2>About Me</h2>
            <p>Hello! I'm a passionate frontend developer with a strong background in website design. I enjoy working with Figma and have a keen interest in UI/UX Design. I'm always striving to learn more and improve my skills.</p>
        </section>
        
        <section id="projects">
            <h2>Projects</h2>
            <div class="project">
                <h3>Project 1</h3>
                <p>Description of project 1. Highlight key features and technologies used.</p>
                <img src="https://via.placeholder.com/600x400" alt="Project 1 Screenshot"/>
            </div>
            <div class="project">
                <h3>Project 2</h3>
                <p>Description of project 2. Highlight key features and technologies used.</p>
                <img src="https://via.placeholder.com/600x400" alt="Project 2 Screenshot"/>
            </div>
            <div class="project">
                <h3>Project 3</h3>
                <p>Description of project 3. Highlight key features and technologies used.</p>
                <img src="https://via.placeholder.com/600x400" alt="Project 3 Screenshot"/>
            </div>
        </section>
        
        <section id="contact">
            <h2>Contact</h2>
            <p>You can reach me at:</p>
            <ul>
                <li>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn Profile</a></li>
                <li>GitHub: <a href="https://github.com/yourusername" target="_blank">GitHub Profile</a></li>
            </ul>
        </section>
    </div>


      </header>
    </div>
  );
}

export default App;
