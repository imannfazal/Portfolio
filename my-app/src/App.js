import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     

    <title>Your Portfolio</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #f06, #f79);
            color: #333;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        header {
            text-align: center;
            padding: 40px 0;
            background: #ffcc00;
            border-radius: 8px 8px 0 0;
        }
        header img {
            border-radius: 50%;
            width: 150px;
            height: 150px;
            border: 4px solid #fff;
        }
        h1 {
            margin: 20px 0;
            font-size: 2.5em;
            color: #333;
        }
        nav {
            text-align: center;
            margin: 20px 0;
        }
        nav a {
            margin: 0 15px;
            text-decoration: none;
            color: #333;
            font-weight: bold;
            transition: color 0.3s ease;
        }
        nav a:hover {
            color: #ff6600;
        }
        section {
            margin: 40px 0;
        }
        section h2 {
            font-size: 2em;
            margin-bottom: 20px;
            color: #ff6600;
        }
        .project {
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            background: #f9f9f9;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .project h3 {
            margin: 0;
            font-size: 1.5em;
            background: #ff6600;
            color: #fff;
            padding: 10px;
        }
        .project p {
            margin: 10px;
        }
        .project img {
            max-width: 100%;
            height: auto;
            border-top: 1px solid #ddd;
        }
        footer {
            text-align: center;
            padding: 20px 0;
            background: #5f5f5f;
            color: #fff;
        }
        footer a {
            color: #fff;
            margin: 0 10px;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        footer a:hover {
            color: #00b7ffa7;
        }
    </style>


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
                <img src="https://via.placeholder.com/600x400" alt="Project 1 Screenshot">
            </div>
            <div class="project">
                <h3>Project 2</h3>
                <p>Description of project 2. Highlight key features and technologies used.</p>
                <img src="https://via.placeholder.com/600x400" alt="Project 2 Screenshot">
            </div>
            <div class="project">
                <h3>Project 3</h3>
                <p>Description of project 3. Highlight key features and technologies used.</p>
                <img src="https://via.placeholder.com/600x400" alt="Project 3 Screenshot">
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
