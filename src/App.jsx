import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MapPin, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import bitmoji from './assets/coder_bitmoji.jpg';

function App() {
  const { scrollYProgress } = useScroll();

  // Transform values for the bitmoji based on scroll position
  // Straight vertical movement without rotation tilt
  const bitmojiScale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.85, 0.85]);
  const bitmojiY = useTransform(scrollYProgress, [0, 0.2, 1], ["0%", "15%", "15%"]);

  return (
    <>
      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </nav>

      {/* Floating Bitmoji with Motherboard Circuit Charging Effect */}
      <div className="bitmoji-wrapper">
        <motion.div
          className="bitmoji-avatar-container"
          style={{
            scale: bitmojiScale,
            y: bitmojiY
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          {/* Motherboard PCB Circuit Traces */}
          <svg className="motherboard-traces" viewBox="0 0 500 500" fill="none">
            {/* Left Top Trace */}
            <path d="M 10 100 H 120 L 170 150 H 220" className="trace-bg" />
            <path d="M 10 100 H 120 L 170 150 H 220" className="trace-pulse pulse-1" />
            <circle cx="10" cy="100" r="4" className="trace-node" />
            <circle cx="120" cy="100" r="3" className="trace-node-small" />

            {/* Left Mid Trace */}
            <path d="M 0 250 H 160 H 210" className="trace-bg" />
            <path d="M 0 250 H 160 H 210" className="trace-pulse pulse-2" />
            <circle cx="10" cy="250" r="4" className="trace-node" />

            {/* Left Bottom Trace */}
            <path d="M 10 400 H 120 L 170 350 H 220" className="trace-bg" />
            <path d="M 10 400 H 120 L 170 350 H 220" className="trace-pulse pulse-3" />
            <circle cx="10" cy="400" r="4" className="trace-node" />
            <circle cx="120" cy="400" r="3" className="trace-node-small" />

            {/* Right Top Trace */}
            <path d="M 490 100 H 380 L 330 150 H 280" className="trace-bg" />
            <path d="M 490 100 H 380 L 330 150 H 280" className="trace-pulse pulse-1" />
            <circle cx="490" cy="100" r="4" className="trace-node" />
            <circle cx="380" cy="100" r="3" className="trace-node-small" />

            {/* Right Mid Trace */}
            <path d="M 500 250 H 340 H 290" className="trace-bg" />
            <path d="M 500 250 H 340 H 290" className="trace-pulse pulse-2" />
            <circle cx="490" cy="250" r="4" className="trace-node" />

            {/* Right Bottom Trace */}
            <path d="M 490 400 H 380 L 330 350 H 280" className="trace-bg" />
            <path d="M 490 400 H 380 L 330 350 H 280" className="trace-pulse pulse-3" />
            <circle cx="490" cy="400" r="4" className="trace-node" />
            <circle cx="380" cy="400" r="3" className="trace-node-small" />
          </svg>

          <img
            src={bitmoji}
            alt="Meet Gondalia"
            className="bitmoji-img"
          />
        </motion.div>
      </div>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="container hero-section">
          <div className="content-wrapper">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="mono-font gradient-text hero-greeting">Hi, I'm</h2>
              <h1 className="hero-title">MEET GONDALIA</h1>
              <h3 className="hero-subtitle">
                Software Engineer | AI/ML | Full-Stack
              </h3>
              <p className="hero-description">
                Computer Engineering student at Iowa State University building reliable solutions with measurable impact. Eager to apply machine learning, automation, and full-stack development to complex problems.
              </p>
              <div className="hero-cta-buttons">
                <a href="mailto:meet7823@iastate.edu" className="glass-panel hero-btn">
                  <Mail size={20} /> Contact Me
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="glass-panel hero-btn-icon" aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="glass-panel hero-btn-icon" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="hero-scroll-indicator"
          >
            <ChevronDown size={32} color="var(--accent)" />
          </motion.div>
        </section>

        {/* ABOUT & EDUCATION */}
        <section id="about" className="container" style={{ zIndex: 2 }}>
          <div className="content-wrapper">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel"
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <GraduationCap size={36} className="gradient-text" /> Education
              </h2>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>Bachelor of Science in Computer Engineering</h3>
                <p className="gradient-text" style={{ fontSize: '1.2rem', fontWeight: 600, margin: '0.5rem 0' }}>Iowa State University | Ames, Iowa</p>
                <p style={{ color: 'var(--text-secondary)' }}>July 2026 - May 2028 | Transfer GPA: 3.97 / 4.00</p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem' }}>Bachelor of Technology in Computer Science</h3>
                <p className="gradient-text" style={{ fontSize: '1.2rem', fontWeight: 600, margin: '0.5rem 0' }}>Nirma University | Ahmedabad, Gujarat, India</p>
                <p style={{ color: 'var(--text-secondary)' }}>July 2024 - May 2026 | CGPA: 8.78 / 10.00</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="container" style={{ zIndex: 2 }}>
          <div className="content-wrapper">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: '3rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <Briefcase size={40} className="gradient-text" /> Experience
            </motion.h2>

            <div className="timeline">
              {[
                {
                  role: "AI/ML Analyst - Digital Systems",
                  company: "Savita Synthetics & Pickwell Textile Machinery",
                  date: "2026 - Present",
                  desc: [
                    "Applied ML: Designed and trained a predictive-maintenance model on live loom sensor data achieving 85% prediction accuracy, contributing to 78% reduction in breakdowns.",
                    "Automation: Built a Python + ReportLab pipeline to auto-generate branded PDF catalogs, reducing turnaround from 3 hours to 15 minutes."
                  ]
                },
                {
                  role: "Web Development Intern",
                  company: "Doris Infotech",
                  date: "December 2025",
                  desc: [
                    "Full-Stack Development: Built and debugged features across front-end, back-end, and database layers in a live production codebase.",
                    "Translated technical requirements into functional, tested web components."
                  ]
                },
                {
                  role: "Freelance Web Developer",
                  company: "Independent Clients",
                  date: "2025 - Present",
                  desc: [
                    "End-to-End Ownership: Designed, built, and deployed custom websites for multiple small-business clients.",
                    "Managed requirements, implementation, launch, hosting, and basic SEO/analytics setup."
                  ]
                }
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="timeline-item glass-panel"
                  style={{ maxWidth: '700px' }}
                >
                  <div className="timeline-dot"></div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                  <h4 className="gradient-text" style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>{exp.company}</h4>
                  <p className="mono-font" style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>{exp.date}</p>
                  <ul style={{ paddingLeft: '1.5rem', color: '#d4d4d4', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.desc.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS & SKILLS */}
        <section id="projects" className="container" style={{ zIndex: 2 }}>
          <div className="content-wrapper">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: '3rem', marginBottom: '3rem' }}
            >
              Featured Projects
            </motion.h2>

            <div className="projects-grid" style={{ marginBottom: '5rem' }}>
              {[
                {
                  title: "LoomSense ML System",
                  tech: "Python, Pandas, scikit-learn",
                  desc: "Predictive-maintenance pipeline for real waterjet loom sensor data. Achieved 85% prediction accuracy and 78% reduction in breakdowns."
                },
                {
                  title: "Family AI Assistant",
                  tech: "Next.js, TypeScript, PostgreSQL, OpenAI",
                  desc: "Voice-enabled AI assistant with RAG querying, retrieving family relationships and memories for context-aware conversational responses."
                },
                {
                  title: "Semiconductor Test Analytics",
                  tech: "Python, SQL, Streamlit",
                  desc: "Data pipeline and interactive dashboard to validate synthetic semiconductor test data, analyzing wafer yield trends and drift."
                }
              ].map((proj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="glass-panel"
                >
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{proj.title}</h3>
                  <p className="mono-font gradient-text" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{proj.tech}</p>
                  <p style={{ color: '#d4d4d4', lineHeight: '1.5' }}>{proj.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass-panel"
            >
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Technical Skills</h2>
              <div className="skills-grid">
                {['Python', 'C/C++', 'Java', 'JavaScript', 'SQL', 'React', 'Node.js', 'Next.js', 'scikit-learn', 'NumPy', 'Pandas', 'REST APIs', 'Git'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
