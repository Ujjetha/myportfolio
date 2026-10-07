import "./App.css";

const skills = [
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "HTML",
  "CSS",
  "SQL",
  "Git",
  "GitHub",
  "Docker",
  "Kubernetes",
  "AWS",
  "Terraform",
  "Linux",
  "CI/CD",
  "Prometheus",
  "Grafana",
];

const projects = [
  {
    title: "AI Cancer Detection System",
    description:
      "Machine learning based healthcare application designed to analyze patient information and predict possible cancer risks.",
    tech: ["Python", "Machine Learning", "React", "Node.js"],
    github: "#",
  },
  {
    title: "EV Charging Analytics",
    description:
      "Data engineering and machine learning pipeline for processing electric vehicle charging sessions and generating useful analytics.",
    tech: ["Python", "Kafka", "Airflow", "Snowflake"],
    github: "#",
  },
  {
    title: "Kubernetes Platform Intelligence",
    description:
      "Platform engineering project focused on Kubernetes workloads, monitoring, infrastructure automation and observability.",
    tech: ["Kubernetes", "Python", "Prometheus", "Grafana"],
    github: "#",
  },
  {
    title: "E-commerce Sales Forecasting",
    description:
      "Machine learning project that analyzes historical sales data and predicts future sales trends.",
    tech: ["Python", "Pandas", "Machine Learning", "Jupyter"],
    github: "#",
  },
];

const experience = [
  {
    role: "MLOps / Platform Engineering Intern",
    company: "aicoo",
    period: "2026 — Present",
    description:
      "Working on infrastructure, deployment and observability for products using Kubernetes, Prometheus and Grafana.",
  },
  {
    role: "DevOps Engineer",
    company: "Skillmine Technology Consulting",
    period: "2023 — 2024",
    description:
      "Worked with AWS, Kubernetes, Docker, Terraform, GitLab CI/CD, Prometheus and Grafana for cloud infrastructure and deployment automation.",
  },
];

function App() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          GS<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero section">
        <div className="hero-content">
          <div className="availability">
            <span></span>
            Available for opportunities
          </div>

          <p className="small-title">HELLO, I'M</p>

          <h1>
            Ujjetha Vani
            <br />
            <span>Nayanapalli</span>
          </h1>

          <h2>
            Computer Science Engineer
            <span className="divider">|</span>
            DevOps & MLOps
          </h2>

          <p className="hero-description">
            I build scalable applications, cloud infrastructure and intelligent
            data-driven systems. Passionate about software engineering, cloud
            technologies and machine learning.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="#" aria-label="GitHub">
              GH
            </a>
            <a href="#" aria-label="LinkedIn">
              in
            </a>
            <a href="#" aria-label="Email">
              @
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow"></div>

          <div className="code-card">
            <div className="window-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span> = {"{"}
              </p>

              <p className="indent">
                name: <span className="green">"Ujjetha Vani"</span>,
              </p>

              <p className="indent">
                role: <span className="green">"Software Engineer"</span>,
              </p>

              <p className="indent">
                focus: <span className="green">"Cloud & AI"</span>,
              </p>

              <p className="indent">
                location: <span className="green">"India"</span>
              </p>

              <p>{"}"};</p>

              <br />

              <p>
                <span className="purple">while</span> (
                <span className="blue">learning</span>) {"{"}
              </p>

              <p className="indent">
                <span className="blue">build</span>();
              </p>

              <p className="indent">
                <span className="blue">improve</span>();
              </p>

              <p className="indent">
                <span className="blue">repeat</span>();
              </p>

              <p>{"}"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <div className="section-heading">
          <span>01</span>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="highlight">
              Computer Science graduate passionate about building reliable and
              scalable technology.
            </p>

            <p>
              I enjoy solving complex engineering problems and turning ideas
              into real-world applications. My interests span software
              development, cloud computing, DevOps, MLOps and machine learning.
            </p>

            <p>
              Currently, I am focused on building production-ready systems using
              modern cloud-native technologies and continuously improving my
              software engineering skills.
            </p>

            <a href="#contact" className="text-link">
              Let's build something together →
            </a>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <strong>3+</strong>
              <span>Years Experience</span>
            </div>

            <div className="stat-card">
              <strong>10+</strong>
              <span>Projects Built</span>
            </div>

            <div className="stat-card">
              <strong>20+</strong>
              <span>Technologies</span>
            </div>

            <div className="stat-card">
              <strong>∞</strong>
              <span>Learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <span>02</span>
          <h2>Technical Skills</h2>
        </div>

        <p className="section-subtitle">
          Technologies orbiting my engineering stack.
        </p>

        <div className="skills-universe">
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="orbit orbit-3"></div>

          <div className="solar-core">
            <div className="core-glow"></div>

            <div className="core-content">
              <span>CORE</span>
              <strong>CSE</strong>
              <small>ENGINEERING</small>
            </div>
          </div>

          {[
            ["Python", "python"],
            ["React", "react"],
            ["JavaScript", "js"],
            ["Kubernetes", "k8s"],
            ["AWS", "aws"],
            ["Docker", "docker"],
            ["Java", "java"],
            ["C++", "cpp"],
            ["SQL", "sql"],
            ["Git", "git"],
            ["Terraform", "tf"],
            ["Node.js", "node"],
            ["Linux", "linux"],
            ["Grafana", "grafana"],
            ["Prometheus", "prom"],
          ].map(([skill, className], index) => (
            <div
              className={`skill-planet ${className}`}
              key={skill}
              style={{
                "--i": index,
              }}
            >
              <div className="planet-dot"></div>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <span>03</span>
          <h2>Featured Projects</h2>
        </div>

        <p className="section-subtitle">
          Some things I've built while learning and experimenting.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">0{index + 1}</div>

              <div className="project-top">
                <div className="folder">⌁</div>

                <a href={project.github} className="github-link">
                  ↗
                </a>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience-section">
        <div className="section-heading">
          <span>04</span>
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <div className="timeline-item" key={item.role}>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <div className="timeline-top">
                  <span className="period">{item.period}</span>

                  <span className="company">{item.company}</span>
                </div>

                <h3>{item.role}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section education-section">
        <div className="section-heading">
          <span>05</span>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <div className="education-icon">🎓</div>

          <div>
            <span className="education-period">Computer Science</span>

            <h3>Bachelor of Technology — Computer Science & Engineering</h3>

            <p>
              Strong foundation in programming, data structures, algorithms,
              databases, operating systems, networking and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="contact-box">
          <span className="contact-label">HAVE A PROJECT IN MIND?</span>

          <h2>
            Let's create something
            <span> amazing.</span>
          </h2>

          <p>
            I'm always interested in discussing new projects, opportunities and
            interesting ideas.
          </p>

          <a href="mailto:your.email@example.com" className="primary-button">
            Get In Touch
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>© 2026 Ujjetha Vani</div>

        <div>Built with React ⚛</div>
      </footer>
    </div>
  );
}

export default App;