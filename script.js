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
    contact: contactPage,
    'pub-360view': pub360ViewPage,
    'pub-agsp': pubAgspPage,
    'pub-federated': pubFederatedPage,
    'pub-animation': pubAnimationPage,
    'pub-object-recognition': pubObjectRecognitionPage,
    'pub-quantum': pubQuantumPage,
    'pub-vision-llm': pubVisionLlmPage
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
    link.addEventListener('click', e => {85
                                         
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

const aboutPage = () => `<section class="section about"><div class="container"><h2 class="section-title">About Me</h2><div class="about-content"><div class="about-text"><p>Software Engineer  with deep expertise in ML/AI and computer vision. Focused on developing  3D volume rendering techniques for real-world applications.</p><p>Currently exploring deep learning architectures, Gaussian Splatting, and applications of AI in healthcare. Strong foundation in both theoretical research and practical implementation.</p></div></div></section>`;

const experiencePage = () => `<section class="section experience"><div class="container"><h2 class="section-title">Experience</h2><div class="experience-grid"><div class="experience-card"><h3>Software Engineer</h3><p class="company">AT&T</p><p class="duration">Full-time · 1.5 years</p><p>Developed and optimized data pipelines and model inference systems for enterprise AI/ML projects.</p></div><div class="experience-card"><h3>Research Internship </h3><p class="company">Aarhus University</p><p class="duration">Research Project</p><p>Conducted research in 3d Computer vision and gausiian splatting.</p></div><div class="experience-card"><h3>Biomedical Engineering Researcher</h3><p class="company"> VCE </p><p class="duration">Research assitant under Dr. Aruna Deepthi</p><p>Collaborated on biomedical engineering projects applying AI to medical sensors.</p></div></div></section>`;

const researchPage = () => `<section class="section research"><div class="container"><h2 class="section-title">Research</h2><div class="research-content"><div class="research-item"><h3>Multi-scale Deep Learning for Medical Image Analysis</h3><p>Research on multi-scale architectures for medical image analysis and diagnostic systems.</p></div><div class="research-item"><h3>AI Applications in Biomedical Imaging</h3><p>Exploring deep learning applications in biomedical imaging and healthcare technology.</p></div><div class="research-item"><h3>Computer Vision & Advanced Visual Recognition</h3><p>Research in visual recognition systems, Gaussian Splatting, and advanced computer vision techniques.</p></div></div></section>`;

const publicationsPage = () => `<section class="section publications"><div class="container"><h2 class="section-title">Publications</h2><div class="projects-grid"><a href="#/pub-360view" class="project-card" style="text-decoration:none;color:inherit"><div class="project-icon">📄</div><h3>Physically Aware 360° View Generation from a Single Image using Disentangled Scene Embeddings</h3></a><a href="#/pub-agsp" class="project-card" style="text-decoration:none;color:inherit"><div class="project-icon">📄</div><h3>AGSP-DSA: An Adaptive Graph Signal Processing Framework for Robust Multimodal Fusion with Dynamic Semantic Alignment</h3></a><a href="#/pub-federated" class="project-card" style="text-decoration:none;color:inherit"><div class="project-icon">📄</div><h3>Federated Learning-Enabled Disease Classification Using Explainable Machine Learning on EHR Data for Clinical Decision Support</h3></a><a href="#/pub-animation" class="project-card" style="text-decoration:none;color:inherit"><div class="project-icon">📄</div><h3>Natural Language Driven Real-Time Animation using Transformer Pipelines</h3></a><a href="#/pub-object-recognition" class="project-card" style="text-decoration:none;color:inherit"><div class="project-icon">📚</div><h3>Deep Learning Models for Real-Time Object Recognition: Transforming Autonomous Vehicle Safety and Navigation Capabilities</h3></a><a href="#/pub-quantum" class="project-card" style="text-decoration:none;color:inherit"><div class="project-icon">📚</div><h3>Improving Data Encoding for Enhanced AI Performance in Complex Datasets via Quantum Feature Space Mapping</h3></a><a href="#/pub-vision-llm" class="project-card" style="text-decoration:none;color:inherit"><div class="project-icon">🔬</div><h3>Vision-Enhanced Large Language Models for High-Resolution Image Synthesis and Multimodal Data Interpretation</h3></a></div></section>`;

const projectsPage = () => `<section class="section projects"><div class="container"><h2 class="section-title">Projects</h2><div class="projects-grid"><div class="project-card"><h3>Portfolio Website</h3><p>Modern space-themed portfolio with multi-page SPA routing and hash-based navigation.</p><p class="tech-stack">HTML • CSS • JavaScript</p></div><div class="project-card"><h3>Enterprise AI/ML Pipeline</h3><p>Optimized data pipeline and model inference system for enterprise applications.</p><p class="tech-stack">Python • Machine Learning</p></div><div class="project-card"><h3>Medical Image Analysis System</h3><p>Deep learning system for analyzing and processing medical images with multi-scale architectures.</p><p class="tech-stack">Python • TensorFlow • Computer Vision</p></div></div></section>`;

const contactPage = () => `<section class="section contact"><div class="container"><h2 class="section-title">Get In Touch</h2><div class="contact-content"><p>I'm always interested in discussing research, AI applications, and innovative projects.</p><div class="contact-methods"><div class="contact-method"><h3>Email</h3><p><a href="mailto:kvkarthikeya02@gmail.com">kvkarthikeya02@gmail.com</a></p></div><div class="contact-method"><h3>LinkedIn</h3><p><a href="https://www.linkedin.com/in/karthikeya-kv-04557520a/" target="_blank">Connect on LinkedIn</a></p></div><div class="contact-method"><h3>GitHub</h3><p><a href="https://github.com/kvkarthikeya" target="_blank">@kvkarthikeya</a></p></div></div></div></section>`;

// Publication Detail Pages
const pub360ViewPage = () => `<section class="section publication-detail"><div class="container"><a href="#/publications" class="back-link">← Back to Publications</a><h1 class="publication-title">Physically Aware 360° View Generation from a Single Image using Disentangled Scene Embeddings</h1><div class="publication-meta"><h3>Authors</h3><p>KV Karthikeya and Dr. Narendra Bandaru</p></div><div class="publication-meta"><h3>Status</h3><p><span class="status-badge">Under Review</span> International Journal of Computer Vision (Q1)</p></div><div class="publication-meta"><h3>Preprint</h3><p><a href="#" target="_blank" class="btn btn-primary">View Preprint (Coming Soon)</a></p></div><div class="publication-meta"><h3>Description</h3><p>This research presents a novel approach to generating physically consistent 360-degree panoramic views from a single input image by leveraging disentangled scene embeddings. The method focuses on understanding and separating different scene components to produce realistic and geometrically accurate panoramic reconstructions.</p></div></div></section>`;

const pubAgspPage = () => `<section class="section publication-detail"><div class="container"><a href="#/publications" class="back-link">← Back to Publications</a><h1 class="publication-title">AGSP-DSA: An Adaptive Graph Signal Processing Framework for Robust Multimodal Fusion with Dynamic Semantic Alignment</h1><div class="publication-meta"><h3>Authors</h3><p>KV Karthikeya, Ashok Kumar Das, Shantanu Pal, Vivekananda Bhat K and Arun Sekar Rajasekaran</p></div><div class="publication-meta"><h3>Status</h3><p><span class="status-badge">Final Stage of Review</span> Scientific Reports (Q1)</p></div><div class="publication-meta"><h3>Preprint</h3><p><a href="#" target="_blank" class="btn btn-primary">View Preprint (Coming Soon)</a></p></div><div class="publication-meta"><h3>Description</h3><p>This work introduces an adaptive graph signal processing framework that enables robust fusion of multimodal data through dynamic semantic alignment. The proposed AGSP-DSA method addresses challenges in integrating heterogeneous data sources by leveraging graph-based representations and adaptive alignment mechanisms.</p></div></div></section>`;

const pubFederatedPage = () => `<section class="section publication-detail"><div class="container"><a href="#/publications" class="back-link">← Back to Publications</a><h1 class="publication-title">Federated Learning-Enabled Disease Classification Using Explainable Machine Learning on EHR Data for Clinical Decision Support</h1><div class="publication-meta"><h3>Authors</h3><p>KV Karthikeya and Dr. S Aruna Deepthi</p></div><div class="publication-meta"><h3>Status</h3><p><span class="status-badge">Under Review</span> IEEE Transactions on Biomedical Engineering (Q1)</p></div><div class="publication-meta"><h3>Preprint</h3><p><a href="#" target="_blank" class="btn btn-primary">View Preprint (Coming Soon)</a></p></div><div class="publication-meta"><h3>Description</h3><p>This research explores the application of federated learning for privacy-preserving disease classification on Electronic Health Records (EHR). The framework incorporates explainable machine learning techniques to provide interpretable predictions that support clinical decision-making while maintaining patient data privacy across distributed healthcare systems.</p></div></div></section>`;

const pubAnimationPage = () => `<section class="section publication-detail"><div class="container"><a href="#/publications" class="back-link">← Back to Publications</a><h1 class="publication-title">Natural Language Driven Real-Time Animation using Transformer Pipelines</h1><div class="publication-meta"><h3>Authors</h3><p>KV Karthikeya and Arun Sekar Rajasekaran</p></div><div class="publication-meta"><h3>Status</h3><p><span class="status-badge">Second Stage of Review</span> CCF Transactions on Pervasive Computing (Q2)</p></div><div class="publication-meta"><h3>Preprint</h3><p><a href="#" target="_blank" class="btn btn-primary">View Preprint (Coming Soon)</a></p></div><div class="publication-meta"><h3>Description</h3><p>This paper presents a transformer-based pipeline for generating real-time animations from natural language descriptions. The system bridges the gap between textual descriptions and animated sequences, enabling intuitive content creation through language-driven commands.</p></div></div></section>`;

const pubObjectRecognitionPage = () => `<section class="section publication-detail"><div class="container"><a href="#/publications" class="back-link">← Back to Publications</a><h1 class="publication-title">Deep Learning Models for Real-Time Object Recognition: Transforming Autonomous Vehicle Safety and Navigation Capabilities</h1><div class="publication-meta"><h3>Authors</h3><p>C. Sharanya, KV Karthikeya, Mariya Princy Antony Saviour, P.S. Gomathi, V. Samuthira Pandi, S.B. Prakalya</p></div><div class="publication-meta"><h3>Status</h3><p><span class="status-badge">Published</span> 2024 International Conference on Sustainable Communication Networks and Application (ICSCNA)</p></div><div class="publication-meta"><h3>Preprint</h3><p><a href="#" target="_blank" class="btn btn-primary">View Paper (Coming Soon)</a></p></div><div class="publication-meta"><h3>Description</h3><p>This conference paper investigates advanced deep learning architectures for real-time object recognition in autonomous vehicles. The research focuses on improving safety and navigation capabilities through efficient and accurate detection systems that can operate in real-time under various environmental conditions.</p></div></div></section>`;

const pubQuantumPage = () => `<section class="section publication-detail"><div class="container"><a href="#/publications" class="back-link">← Back to Publications</a><h1 class="publication-title">Improving Data Encoding for Enhanced AI Performance in Complex Datasets via Quantum Feature Space Mapping: Harnessing Quantum Algorithms</h1><div class="publication-meta"><h3>Authors</h3><p>Gurpreet Singh Walia, Sathiya Priya S, KV Karthikeya, D. Suresh, P Sudheer, V. Syambabu</p></div><div class="publication-meta"><h3>Status</h3><p><span class="status-badge">Accepted</span> 2025 International Conference on Pervasive Computational Technologies (ICPCT)</p></div><div class="publication-meta"><h3>Preprint</h3><p><a href="#" target="_blank" class="btn btn-primary">View Paper (Coming Soon)</a></p></div><div class="publication-meta"><h3>Description</h3><p>This work explores quantum computing approaches to enhance data encoding for AI applications. By leveraging quantum feature space mapping and quantum algorithms, the research demonstrates improved performance on complex datasets that benefit from quantum-enhanced representations.</p></div></div></section>`;

const pubVisionLlmPage = () => `<section class="section publication-detail"><div class="container"><a href="#/publications" class="back-link">← Back to Publications</a><h1 class="publication-title">Vision-Enhanced Large Language Models for High-Resolution Image Synthesis and Multimodal Data Interpretation</h1><div class="publication-meta"><h3>Authors</h3><p>KV Karthikeya et al.</p></div><div class="publication-meta"><h3>Status</h3><p><span class="status-badge upcoming">Upcoming Publication</span> In Preparation</p></div><div class="publication-meta"><h3>Preprint</h3><p><a href="#" target="_blank" class="btn btn-primary disabled">Preprint Coming Soon</a></p></div><div class="publication-meta"><h3>Description</h3><p>This upcoming research explores the integration of vision capabilities into large language models to enable high-resolution image synthesis and sophisticated multimodal data interpretation. The work aims to advance the state-of-the-art in vision-language models for practical applications.</p></div></div></section>`;
