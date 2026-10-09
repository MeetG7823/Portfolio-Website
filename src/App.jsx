import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Briefcase, GraduationCap, ChevronDown, Activity, TrendingUp, Zap, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import bitmoji from './assets/coder_bitmoji.jpg';
import CircuitBackground from './CircuitBackground';
import ResumePage from './ResumePage';

function App() {
  const [activeView, setActiveView] = useState('home'); // 'home' | 'resume'
  const { scrollYProgress } = useScroll();

  const bitmojiScale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.9, 0.9]);
  const bitmojiY = useTransform(scrollYProgress, [0, 0.2, 1], ["0%", "5%", "5%"]);

  const handleNavClick = (sectionId) => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <CircuitBackground />
      <div className="bg-mesh"></div>
      <div className="bg-grid"></div>

      <nav className="nav-menu no-print">
        <button 
          onClick={() => { setActiveView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={activeView === 'home' ? 'active' : ''}
        >
          Home
        </button>
        {activeView === 'home' && (
          <>
            <a href="#about" onClick={() => handleNavClick('about')}>About</a>
            <a href="#experience" onClick={() => handleNavClick('experience')}>Experience</a>
            <a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a>
          </>
        )}
        <button 
          onClick={() => { setActiveView('resume'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={activeView === 'resume' ? 'active' : ''}
        >
          Resume
        </button>
      </nav>

      <AnimatePresence mode="wait">
        {activeView === 'resume' ? (
          <ResumePage key="resume" onBackToPortfolio={() => setActiveView('home')} />
        ) : (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="top-sections-container">
              {/* Premium Floating Avatar Presentation */}
              <div className="bitmoji-sidebar">
                <div className="bitmoji-wrapper">
                  <motion.div
                    className="bitmoji-avatar-container"
                    style={{
                      scale: bitmojiScale,
                      y: bitmojiY
                    }}
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="avatar-glow"></div>
                    <img
                      src={bitmoji}
                      alt="Meet Gondalia"
                      className="bitmoji-img"
                    />
                  </motion.div>
                </div>
              </div>

              {/* HERO SECTION */}
              <section id="home" className="container hero-section">
                <div className="content-wrapper">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >

                    <h1 className="hero-title">Meet Gondalia.</h1>
                    <h3 className="hero-subtitle">
                      Computer Engineer building high-impact ML systems and scalable full-stack applications.
                    </h3>
                    <p className="hero-description">
                      Pursuing a degree in Computer Engineering at Iowa State University.
                      Passionate about bridging the gap between complex machine learning models and reliable, user-facing products.
                    </p>
                    <div className="hero-cta-buttons">
                      <a href="mailto:meet7823@iastate.edu" className="btn-primary">
                        <Mail size={18} /> Contact Me
                      </a>
                      <a href="#projects" className="btn-secondary">
                        View Work
                      </a>
                      <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub">
                        <FaGithub size={20} />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn">
                        <FaLinkedin size={20} />
                      </a>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="hero-scroll-indicator"
                >
                </motion.div>
              </section>

          {/* ABOUT & EDUCATION */}
          <section id="about" className="container">
            <div className="content-wrapper">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="glass-panel"
              >
                <h2 className="section-header" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <GraduationCap size={32} color="var(--text-secondary)" /> Education
                </h2>

                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>Bachelor of Science in Computer Engineering</h3>
                  <p style={{ color: '#fff', fontSize: '1.1rem', margin: '0.4rem 0' }}>Iowa State University</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>July 2026 - May 2028 &middot; GPA: 3.97 / 4.00</p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>Bachelor of Technology in Computer Science</h3>
                  <p style={{ color: '#fff', fontSize: '1.1rem', margin: '0.4rem 0' }}>Nirma University</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>July 2024 - May 2026 &middot; CGPA: 8.78 / 10.00</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* EXPERIENCE - FAANG Style Bento Box */}
          <section id="experience" className="container">
            <div className="content-wrapper">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-header"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <Briefcase size={32} color="var(--text-secondary)" /> Experience
              </motion.h2>

              <div className="bento-grid">
                {[
                  {
                    role: "AI/ML Analyst",
                    company: "Savita Synthetics & Pickwell",
                    date: "2026 — Present",
                    metrics: [
                      { icon: <Activity size={16} />, text: "85% Prediction Accuracy" },
                      { icon: <TrendingUp size={16} />, text: "78% Breakdown Reduction" }
                    ],
                    desc: [
                      "Designed and trained a predictive-maintenance model on live loom sensor data, significantly reducing operational downtime.",
                      "Engineered a Python + ReportLab automation pipeline to generate branded PDF catalogs, cutting turnaround time from 3 hours to 15 minutes."
                    ]
                  },
                  {
                    role: "Web Development Intern",
                    company: "Doris Infotech",
                    date: "Dec 2025",
                    metrics: [
                      { icon: <Zap size={16} />, text: "Production Deployments" }
                    ],
                    desc: [
                      "Shipped full-stack features and resolved critical bugs across front-end, back-end, and database layers in a live production environment.",
                      "Translated complex technical requirements into functional, rigorously tested web components."
                    ]
                  },
                  {
                    role: "Freelance Engineer",
                    company: "Independent Clients",
                    date: "2025 — Present",
                    metrics: [
                      { icon: <TrendingUp size={16} />, text: "End-to-End Delivery" }
                    ],
                    desc: [
                      "Architected and deployed custom web solutions for multiple small businesses, owning the entire product lifecycle.",
                      "Managed requirements gathering, implementation, hosting architecture, and foundational SEO strategies."
                    ]
                  }
                ].map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="bento-card"
                  >
                    <div className="exp-header">
                      <div>
                        <h3 className="exp-title">{exp.role}</h3>
                        <div className="exp-company">{exp.company}</div>
                      </div>
                      <div className="exp-date">{exp.date}</div>
                    </div>

                    {exp.metrics && (
                      <div className="metrics-row">
                        {exp.metrics.map((m, idx) => (
                          <div key={idx} className="metric-pill">
                            {m.icon} {m.text}
                          </div>
                        ))}
                      </div>
                    )}

                    <ul className="exp-details">
                      {exp.desc.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* PROJECTS & SKILLS */}
        <section id="projects" className="container">
          <div className="content-wrapper" style={{ maxWidth: '100%' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-header"
            >
              Featured Work
            </motion.h2>

            <div className="projects-grid">
              {[
                {
                  title: "LoomSense ML System",
                  tech: "Python • scikit-learn • Pandas",
                  desc: "Predictive-maintenance pipeline for real waterjet loom sensor data. Proactively identifies failure states before they occur."
                },
                {
                  title: "Family AI Assistant",
                  tech: "Next.js • PostgreSQL • OpenAI",
                  desc: "Voice-enabled conversational AI with RAG architecture, retrieving contextual family relationships and memories for accurate responses."
                },
                {
                  title: "Semiconductor Analytics",
                  tech: "Python • SQL • Streamlit",
                  desc: "Comprehensive data pipeline and interactive dashboard validating synthetic semiconductor test data to analyze wafer yield trends."
                }
              ].map((proj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel project-card"
                  style={{ padding: '2rem' }}
                >
                  <h3 className="project-title">{proj.title}</h3>
                  <div className="project-tech">{proj.tech}</div>
                  <p className="project-desc">{proj.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{ maxWidth: '800px' }}
            >
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Technical Arsenal</h2>
              <div className="skills-grid">
                {['Python', 'C/C++', 'Java', 'JavaScript', 'SQL', 'React', 'Node.js', 'Next.js', 'scikit-learn', 'NumPy', 'Pandas', 'REST APIs', 'Git'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>
    )}
  </AnimatePresence>
</>
  );
}

export default App;
