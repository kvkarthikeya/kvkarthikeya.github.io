document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const navMenu = document.getElementById('navMenu');
  const navToggle = document.getElementById('navToggle');
  const appDiv = document.getElementById('app');
  
  const pages = {
    home: homePage,
    about: aboutPage,
    experience: experiencePage,
    research: researchPage,
    publications: publicationsPage,
    projects: projectsPage,
    contact: contactPage
  };
  
  function renderPage(page) {
    appDiv.innerHTML = pages[page]();
    
    // Update active link
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === page) {
        link.classList.add('active');
      }
    });
    
    // Close mobile menu if open
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
    
    // Update URL hash
    window.location.hash = `#/${page}`;
    
    // Scroll to top
    window.scrollTo(0, 0);
  }
  
  // Handle navigation link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      renderPage(page);
    });
  });
  
  // Handle hash changes (back/forward buttons, direct URL)
  window.addEventListener('hashchange', () => {
    let hash = window.location.hash.slice(2) || 'home';
    if (pages[hash]) {
      renderPage(hash);
    }
  });
  
  // Handle mobile menu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
  
  // Load initial page from URL hash
  let initialPage = window.location.hash.slice(2) || 'home';
  if (!pages[initialPage]) {
    initialPage = 'home';
  }
  renderPage(initialPage);
});

const homePage = () => `<section class="section hero"><div class="hero-content"><div class="hero-text"><h1 class="hero-title">Hi There! <span class="wave">👋</span></h1><h2 class="hero-subtitle">I'M <span class="accent-gradient">KARTHIKEYA V</span></h2><p class="hero-description">Researcher & Software Engineer diving into AI, Computer Vision, and Biomedical Engineering</p><div class="hero-cta"><a href="#/projects" class="btn btn-primary">Explore My Work</a><a href="#/contact" class="btn btn-secondary">Get In Touch</a></div></div><div class="hero-visual"><div class="floating-cube"></div></div></div></section>`;

const aboutPage = () => `<section class="section about"><div class="container"><h2 class="section-title">About Me</h2><div class="about-content"><div class="about-text"><p>Graduate student pursuing advanced CS&E studies with deep expertise in ML/AI and computer vision. Focused on developing intelligent systems for biomedical imaging and real-world applications.</p><p>Currently exploring deep learning architectures, Gaussian Splatting, and applications of AI in healthcare. Strong foundation in both theoretical research and practical implementation.</p></div></div></section>`;

const experiencePage = () => `<section class="section experience"><div class="container"><h2 class="section-title">Experience</h2><div class="experience-grid"><div class="experience-card"><h3>Software Engineer</h3><p class="company">AT&T</p><p class="duration">Full-time · 1.5 years</p><p>Developed and optimized data pipelines and model inference systems for enterprise AI/ML projects.</p></div><div class="experience-card"><h3>AI/ML Researcher</h3><p class="company">IIIT Hyderabad</p><p class="duration">Research Project</p><p>Conducted research in computer vision and machine learning under faculty guidance.</p></div><div class="experience-card"><h3>Biomedical Engineering Researcher</h3><p class="company">Aarhus University</p><p class="duration">Research Collaboration</p><p>Collaborated on biomedical engineering projects applying AI to medical imaging.</p></div></div></section>`;

const researchPage = () => `<section class="section research"><div class="container"><h2 class="section-title">Research</h2><div class="research-content"><div class="research-item"><h3>Multi-scale Deep Learning for Medical Image Analysis</h3><p>Research on multi-scale architectures for medical image analysis and diagnostic systems.</p></div><div class="research-item"><h3>AI Applications in Biomedical Imaging</h3><p>Exploring deep learning applications in biomedical imaging and healthcare technology.</p></div><div class="research-item"><h3>Computer Vision & Advanced Visual Recognition</h3><p>Research in visual recognition systems, Gaussian Splatting, and advanced computer vision techniques.</p></div></div></section>`;

const publicationsPage = () => `<section class="section publications"><div class="container"><h2 class="section-title">Publications</h2><div class="publications-grid"><div class="publication-card"><div class="publication-icon">📄</div><h3>Multi-scale Deep Learning</h3><p class="publication-type">Medical Image Analysis</p><p>Research paper on multi-scale architectures for medical image analysis</p></div><div class="publication-card"><div class="publication-icon">🎓</div><h3>AI in Biomedical Imaging</h3><p class="publication-type">Conference Paper</p><p>Presented at Aarhus University on applications of AI in biomedical imaging</p></div></div></section>`;

const projectsPage = () => `<section class="section projects"><div class="container"><h2 class="section-title">Projects</h2><div class="projects-grid"><div class="project-card"><h3>Portfolio Website</h3><p>Modern space-themed portfolio with multi-page SPA routing and hash-based navigation.</p><p class="tech-stack">HTML • CSS • JavaScript</p></div><div class="project-card"><h3>Enterprise AI/ML Pipeline</h3><p>Optimized data pipeline and model inference system for enterprise applications.</p><p class="tech-stack">Python • Machine Learning</p></div><div class="project-card"><h3>Medical Image Analysis System</h3><p>Deep learning system for analyzing and processing medical images with multi-scale architectures.</p><p class="tech-stack">Python • TensorFlow • Computer Vision</p></div></div></section>`;

const contactPage = () => `<section class="section contact"><div class="container"><h2 class="section-title">Get In Touch</h2><div class="contact-content"><p>I'm always interested in discussing research, AI applications, and innovative projects.</p><div class="contact-methods"><div class="contact-method"><h3>Email</h3><p><a href="mailto:your.email@example.com">your.email@example.com</a></p></div><div class="contact-method"><h3>LinkedIn</h3><p><a href="https://linkedin.com/in/yourprofile" target="_blank">Connect on LinkedIn</a></p></div><div class="contact-method"><h3>GitHub</h3><p><a href="https://github.com/kvkarthikeya" target="_blank">@kvkarthikeya</a></p></div></div></div></section>`;
