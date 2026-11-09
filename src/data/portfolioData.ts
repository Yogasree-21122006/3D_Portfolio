export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI/ML' | 'Full Stack' | 'Computer Vision' | 'Other';
  description: string;
  problemStatement: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  contribution: string;
  metrics?: { label: string; value: string }[];
  githubUrl: string;
  liveDemoUrl?: string;
  image?: string;
  badge?: string;
  featured?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Symposium 1st Prize' | 'Hackathon Merit' | 'Internship' | 'Participation';
  organization: string;
  department?: string;
  date: string;
  description: string;
  image: string;
  stageImage?: string;
  highlights: string[];
  awardBadge: string;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'AI & Machine Learning' | 'Frontend' | 'Backend' | 'Database' | 'Tools';
  level: 'Hands-on & Projects' | 'Production / Internship' | 'Academic & Exploring';
  icon: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  technologies: string[];
  summary: string;
  responsibilities: string[];
  liveProjectName: string;
  liveProjectDescription: string;
  images: { url: string; caption: string }[];
}

export const PERSONAL_INFO = {
  name: "Yoga Sree S",
  fullName: "Yoga Sree Senthil Devarajan",
  title: "AI & Data Science Student | Aspiring Software Developer",
  college: "Kongu Engineering College",
  collegeLocation: "Perundurai, Erode, Tamil Nadu, India",
  degree: "B.Tech Artificial Intelligence and Data Science",
  year: "Third Year (Pre-final Year)",
  location: "Tamil Nadu, India",
  email: "yogasree.kec.ai@gmail.com",
  github: "https://github.com/Yogasree-21122006",
  linkedin: "https://www.linkedin.com/in/yoga-sree-senthil-devarajan-kec-ai?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  bioShort: "I am a passionate Artificial Intelligence and Data Science student who enjoys building intelligent applications and solving real-world problems through technology. I explore Machine Learning, Deep Learning, Full Stack Development and innovative software solutions.",
  aboutDetailed: "I am an enthusiastic AI and Data Science student interested in developing intelligent systems and practical software applications. I enjoy exploring technologies, learning new frameworks, collaborating on projects and transforming innovative ideas into working solutions. Currently pursuing my 3rd year B.Tech at Kongu Engineering College, I combine solid theoretical foundations in mathematics and algorithms with hands-on full-stack product building and real-time computer vision systems.",
  photo: "/assets/dp.jpg",
  stats: [
    { label: "Academic Standing", value: "3rd Year B.Tech", subtitle: "AIDS @ Kongu Engg College" },
    { label: "Technical Projects", value: "9+", subtitle: "AI/ML, CV & Full Stack" },
    { label: "Prize Wins", value: "3x 1st Prize Winner", subtitle: "Symposiums & Hackathons" },
    { label: "Industry Internship", value: "1 Term", subtitle: "CopterCode Full Stack R&D" },
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: "Python", category: "Programming", level: "Hands-on & Projects", icon: "Code2", description: "Primary language for AI/ML pipelines, FastAPI microservices, and CV scripts." },
  { name: "Java", category: "Programming", level: "Hands-on & Projects", icon: "Coffee", description: "Object-oriented software development, data structures, and algorithms." },
  { name: "SQL", category: "Programming", level: "Hands-on & Projects", icon: "Database", description: "Complex relational queries, indexing, joins, and schema management." },

  // AI & Machine Learning
  { name: "Machine Learning", category: "AI & Machine Learning", level: "Hands-on & Projects", icon: "Brain", description: "Supervised and unsupervised learning, regression, classification, and model evaluation." },
  { name: "Deep Learning", category: "AI & Machine Learning", level: "Hands-on & Projects", icon: "Cpu", description: "Neural network architectures, backprop, convolutional nets, and hyperparameter tuning." },
  { name: "Computer Vision", category: "AI & Machine Learning", level: "Hands-on & Projects", icon: "ScanFace", description: "Image processing, bounding box detection, object tracking, and spatial analysis." },
  { name: "NLP", category: "AI & Machine Learning", level: "Hands-on & Projects", icon: "MessageSquare", description: "Natural Language Processing, text preprocessing, tokenization, and summaries." },
  { name: "PyTorch", category: "AI & Machine Learning", level: "Hands-on & Projects", icon: "Flame", description: "Deep learning model building, tensor manipulation, and GPU-accelerated training." },
  { name: "YOLO (v8)", category: "AI & Machine Learning", level: "Hands-on & Projects", icon: "Target", description: "Custom dataset annotation, transfer learning, and real-time bounding box inference." },
  { name: "OpenCV", category: "AI & Machine Learning", level: "Hands-on & Projects", icon: "Eye", description: "Frame extraction, color spaces, edge filtering, and webcam streaming pipelines." },

  // Frontend
  { name: "React", category: "Frontend", level: "Production / Internship", icon: "Component", description: "Modern React with hooks, functional architecture, custom components, and state." },
  { name: "TypeScript", category: "Frontend", level: "Production / Internship", icon: "FileCode", description: "Strict static typing, interface contracts, and clean enterprise codebases." },
  { name: "Tailwind CSS", category: "Frontend", level: "Production / Internship", icon: "Palette", description: "Responsive layouts, glassmorphism, fluid typography, and custom design systems." },
  { name: "JavaScript (ES6+)", category: "Frontend", level: "Production / Internship", icon: "Zap", description: "Async/await, DOM APIs, event listeners, and modern ECMAScript idioms." },
  { name: "HTML5 & CSS3", category: "Frontend", level: "Production / Internship", icon: "Layout", description: "Semantic markup, modern flexbox/grid, keyframe animations, and accessibility." },

  // Backend
  { name: "FastAPI", category: "Backend", level: "Production / Internship", icon: "Server", description: "High-performance Python asynchronous APIs with Pydantic schemas and OpenAPI docs." },
  { name: "REST APIs", category: "Backend", level: "Production / Internship", icon: "Network", description: "Clean endpoint architecture, JWT authentication, and CORS configuration." },
  { name: "Spring Boot", category: "Backend", level: "Academic & Exploring", icon: "Leaf", description: "Enterprise Java backend framework explored for academic study and architecture." },

  // Database
  { name: "Supabase", category: "Database", level: "Production / Internship", icon: "Layers", description: "Backend-as-a-service, Row Level Security, Auth, and real-time PostgreSQL subscriptions." },
  { name: "PostgreSQL", category: "Database", level: "Hands-on & Projects", icon: "DatabaseZap", description: "Relational database modeling, transactions, foreign keys, and constraints." },
  { name: "Database Management", category: "Database", level: "Hands-on & Projects", icon: "HardDrive", description: "Normalization, ER diagramming, ACID properties, and query optimization." },

  // Tools
  { name: "Git", category: "Tools", level: "Hands-on & Projects", icon: "GitBranch", description: "Branching workflows, version control, staging, conflict resolution, and commits." },
  { name: "GitHub", category: "Tools", level: "Hands-on & Projects", icon: "Github", description: "Remote repository hosting, issues, collaboration, and deployment pipelines." },
  { name: "VS Code", category: "Tools", level: "Hands-on & Projects", icon: "Laptop", description: "Primary development IDE with extensions, linting, debugging, and terminal." },
  { name: "Jupyter Notebook", category: "Tools", level: "Hands-on & Projects", icon: "BookOpen", description: "Exploratory data analysis, experimental modeling, and visual data plots." },
  { name: "Google Colab", category: "Tools", level: "Hands-on & Projects", icon: "Cloud", description: "Cloud GPU training for deep learning models and YOLO fine-tuning." },
  { name: "MobaXterm", category: "Tools", level: "Hands-on & Projects", icon: "Terminal", description: "SSH client, X11 forwarding, SFTP session management, and remote compute access." }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "ai-zoom-meeting",
    title: "AI Zoom Meeting",
    subtitle: "Adaptive Video Conferencing for Unstable & Low-Bandwidth Networks",
    category: "Full Stack",
    featured: true,
    badge: "🏆 Won 3 Technical Awards",
    description: "A specialized WebRTC video meeting application engineered to maintain clear audio and low latency even under unstable and fluctuating internet connections.",
    problemStatement: "Traditional video conferencing software stutters and completely freezes when participants have poor network connectivity or fluctuating bandwidth in semi-urban and rural areas.",
    solution: "Built a dynamic quality-adaptive WebRTC engine with real-time network detection that automatically throttles resolutions between High, Medium, and Low bandwidth modes, coupled with instant speech-to-text captions and connection telemetry.",
    technologies: ["WebRTC", "React", "TypeScript", "Zustand", "Supabase", "Tailwind CSS"],
    keyFeatures: [
      "Adaptive network quality scaling (High, Medium, and Low bandwidth presets)",
      "Automated real-time speech-to-text live meeting captions",
      "Dynamic bandwidth degradation prevents call drops on unstable Wi-Fi/4G",
      "Room creation, participant presence, and screen-sharing integration",
      "Integrated telemetry showing bitrate, packet loss, and latency"
    ],
    contribution: "Designed and engineered the complete frontend state machine in React/TypeScript with Zustand, integrated Supabase for session signaling and participant auth, and built the adaptive bandwidth mode toggle system.",
    githubUrl: "https://github.com/Yogasree-21122006",
    liveDemoUrl: "https://ai-zoom-meeting.vercel.app",
    metrics: [
      { label: "Prizes Won", value: "3x 1st Prizes" },
      { label: "Bandwidth Modes", value: "High / Med / Low" },
      { label: "Status", value: "Live on Vercel" }
    ]
  },
  {
    id: "internhub",
    title: "InternHub – Internship Management System",
    subtitle: "Enterprise Multi-Role Candidate & Internship Lifecycle Portal",
    category: "Full Stack",
    featured: true,
    badge: "💼 CopterCode Live Project",
    description: "An end-to-end multi-role web platform designed to streamline internship recruitment, performance tracking, and hiring workflows across companies, mentors, and student interns.",
    problemStatement: "Educational institutions and enterprise firms struggle to track intern milestones, manage multi-tier approvals, and efficiently summarize large volumes of student applicant resumes.",
    solution: "Engineered a scalable multi-portal platform supporting Super Admin, HR, Company Recruiters, Team Leads, and Interns with role-based access control (RBAC), and automated AI-driven applicant resume summary generation.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "Supabase"],
    keyFeatures: [
      "5 Distinct User Roles: Admin, HR, Company, Team Lead, and Intern",
      "AI-assisted applicant summary generation from profile submissions",
      "Job/Internship posting lifecycle with status tracking and milestone verification",
      "Secure authentication with Supabase Row Level Security (RLS)",
      "Responsive analytics dashboard for application conversion rates"
    ],
    contribution: "Served as Full Stack Developer Intern at CopterCode; architected the React/TypeScript client-side views, designed responsive Tailwind dashboards, and connected REST endpoints with FastAPI and Supabase.",
    githubUrl: "https://github.com/Yogasree-21122006",
    image: "/assets/intern2.jpg",
    metrics: [
      { label: "User Roles", value: "5 Hierarchies" },
      { label: "Deployment", value: "Production R&D" },
      { label: "Company", value: "CopterCode" }
    ]
  },
  {
    id: "visionbin-ai",
    title: "VisionBin AI – Smart Waste Management",
    subtitle: "Real-Time YOLOv8 Fill-Level Detection & IoT Telemetry Architecture",
    category: "Computer Vision",
    featured: true,
    badge: "🤖 Computer Vision + IoT",
    description: "An intelligent urban waste monitoring system combining deep learning computer vision for bin fill-level classification with an integrated sensor telemetry concept.",
    problemStatement: "Municipal waste collection is often scheduled blindly on fixed days, causing overflows in high-traffic zones while sending garbage trucks to half-empty bins, wasting fuel and labor.",
    solution: "Trained a custom YOLOv8 model to accurately classify waste bin states into Empty, Half-Full, Full, and Overflowing, and designed an integration concept with ESP32 microcontrollers, ultrasonic sensors, and load cells.",
    technologies: ["Python", "YOLOv8", "OpenCV", "FastAPI", "Streamlit", "ESP32 (IoT Architecture)"],
    keyFeatures: [
      "4-Class real-time classification: Empty, Half-Full, Full, Overflowing",
      "Robust detection across diverse lighting, indoor and outdoor waste bins",
      "ESP32 hardware integration architecture utilizing ultrasonic distance and load cells",
      "FastAPI endpoint for streaming camera feed inference",
      "Interactive Streamlit control dashboard displaying live fill level telemetry"
    ],
    contribution: "Annotated training images, trained and evaluated YOLOv8 weights, developed the OpenCV preprocessing pipeline, and authored the FastAPI inference service.",
    githubUrl: "https://github.com/Yogasree-21122006",
    metrics: [
      { label: "Classes", value: "4 Distinct States" },
      { label: "Architecture", value: "YOLOv8 + IoT" },
      { label: "Sensors", value: "Ultrasonic + Load Cell" }
    ]
  },
  {
    id: "constructml",
    title: "ConstructML – AI Prediction Engine",
    subtitle: "High-Precision Construction Budget & Timeline Estimation",
    category: "AI/ML",
    featured: true,
    badge: "📊 R² Score > 0.98",
    description: "A machine learning predictive modeling pipeline designed to accurately forecast construction expenditures and project completion duration based on structural scope and material parameters.",
    problemStatement: "Large civil engineering and building projects suffer from chronic budget overruns and unexpected delays caused by inaccurate manual cost and scheduling estimations.",
    solution: "Developed an ensemble regression modeling pipeline with feature scaling, correlation analysis, and hyperparameter tuning that achieved outstanding predictive accuracy on real project data.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    keyFeatures: [
      "Rigorous feature engineering for material quantities, labor hours, and site variables",
      "Achieved verified R² score of 0.9848 on construction cost prediction",
      "Achieved verified R² score of 0.9896 on project duration prediction",
      "Residual analysis and variance inflation factor (VIF) evaluation to prevent multicollinearity",
      "Exportable inference script for instant estimation from architectural blueprints"
    ],
    contribution: "Executed complete data exploration, handled missing values and outliers, built regression models (Random Forest, Gradient Boosting), and tuned hyperparameters to attain reported R² scores.",
    githubUrl: "https://github.com/Yogasree-21122006",
    metrics: [
      { label: "Cost R² Metric", value: "0.9848" },
      { label: "Duration R² Metric", value: "0.9896" },
      { label: "Model Family", value: "Ensemble Regressor" }
    ]
  },
  {
    id: "facescope",
    title: "FaceScope – Facial Intelligence Suite",
    subtitle: "Real-Time Facial Landmark Tracking & Attribute Detection",
    category: "Computer Vision",
    description: "An optimized computer vision application performing high-fps face detection, facial mesh coordinate mapping, and demographic attribute analysis on live video streams.",
    problemStatement: "Real-time face detection models often exhibit latency bottlenecks or fail under angled orientations and low-illumination webcam feeds.",
    solution: "Implemented an optimized OpenCV pipeline utilizing deep learning face localization anchors, delivering fluid 30+ FPS tracking with bounding box metadata.",
    technologies: ["Python", "OpenCV", "Deep Learning", "NumPy"],
    keyFeatures: [
      "Real-time webcam multi-face tracking and bounding box localization",
      "Facial landmark coordinate extraction for eye, nose, and jawline contours",
      "Frame-by-frame optimization ensuring smooth latency on standard CPU hardware",
      "Modular Python structure ready for biometric verification integration"
    ],
    contribution: "Engineered the computer vision frame processing pipeline, implemented coordinate overlays, and tested performance across different lighting conditions.",
    githubUrl: "https://github.com/Yogasree-21122006",
    metrics: [
      { label: "FPS", value: "30+ FPS Real-time" },
      { label: "Framework", value: "OpenCV & DL" }
    ]
  },
  {
    id: "ai-medical-triage",
    title: "AI Medical Triage",
    subtitle: "Intelligent Patient Symptom Prioritization & Decision Support",
    category: "AI/ML",
    description: "An AI-assisted medical triage classifier designed to help healthcare staff prioritize incoming patient symptom reports and vital signs according to urgency tiers.",
    problemStatement: "Emergency rooms and outpatient clinics encounter intake bottlenecks where critical patients may wait too long before initial clinical evaluation.",
    solution: "Created an NLP and classification pipeline that ingests symptom narratives, vital sign flags, and age factors to suggest urgency tiers (Emergency, Urgent, Non-Urgent) as a decision-support aid without claiming diagnostic authority.",
    technologies: ["Python", "Scikit-Learn", "NLP", "FastAPI", "Streamlit"],
    keyFeatures: [
      "Natural language symptom intake parsing and text tokenization",
      "Multi-class priority classification: Emergency, Urgent, Non-Urgent",
      "Confidence score breakdown explaining contributing risk factors",
      "Streamlined web dashboard for intake nurses to review priority queues"
    ],
    contribution: "Curated anonymized symptom datasets, trained multi-class text classifiers, and built the interactive triage review interface.",
    githubUrl: "https://github.com/Yogasree-21122006",
    metrics: [
      { label: "Tiers", value: "3 Urgency Levels" },
      { label: "Domain", value: "Clinical Decision Support" }
    ]
  },
  {
    id: "pulsesense-ecg",
    title: "PulseSense / HeartGuard ECG",
    subtitle: "Deep Learning Arrhythmia Classification from Electrocardiogram Signals",
    category: "AI/ML",
    description: "A machine learning and signal processing pipeline capable of analyzing digitized ECG waveforms to detect cardiac arrhythmias across four primary rhythm classes.",
    problemStatement: "Manual ECG trace analysis is time-intensive and requires specialized cardiologists, delaying early detection of transient arrhythmias.",
    solution: "Preprocessed 1D ECG lead signals with bandpass filtering and wavelet denoising, feeding normalized intervals into a convolutional classifier to distinguish Normal, AFib, VTach, and PVC rhythm abnormalities.",
    technologies: ["Python", "Deep Learning", "1D CNN", "SciPy Signal", "Streamlit"],
    keyFeatures: [
      "Waveform baseline wander removal and high-frequency noise filtering",
      "4-Class beat classification: Normal, Atrial Fibrillation (AFib), Ventricular Tachycardia (VTach), Premature Ventricular Contractions (PVC)",
      "Interactive Streamlit application allowing upload and immediate waveform inspection",
      "Visual display of detected R-peaks and rhythm abnormality markers"
    ],
    contribution: "Implemented signal filtration with SciPy, structured time-series data into windows, and deployed the trained model inside a Streamlit web app.",
    githubUrl: "https://github.com/Yogasree-21122006",
    metrics: [
      { label: "Arrhythmia Classes", value: "4 Conditions" },
      { label: "Input", value: "1D ECG Signals" }
    ]
  },
  {
    id: "finsight",
    title: "FinSight – Financial Intelligence",
    subtitle: "Interactive Market Analytics, Risk Metrics & Trend Visualizations",
    category: "Full Stack",
    description: "A financial intelligence and analytics platform delivering algorithmic trend signals, portfolio volatility calculations, and automated interactive chart visualizations.",
    problemStatement: "Retail investors often lack accessible tools to calculate advanced risk metrics like Sharpe Ratio, Moving Average crossovers, and drawdowns across multiple asset classes.",
    solution: "Built a Python-powered analytical engine with dynamic charting that fetches market price histories, computes technical indicators, and displays portfolio distribution heatmaps.",
    technologies: ["Python", "Pandas", "Plotly", "Streamlit", "Financial APIs"],
    keyFeatures: [
      "Automated technical indicator calculation: SMA, EMA, RSI, and Bollinger Bands",
      "Portfolio risk assessment metrics including annualized volatility and drawdown",
      "Interactive candlestick charts and correlation heatmaps with Plotly",
      "Fast CSV export and scenario simulation for historical asset performance"
    ],
    contribution: "Engineered financial calculation formulas, built data visualization pipelines using Plotly, and structured interactive query controls.",
    githubUrl: "https://github.com/Yogasree-21122006",
    metrics: [
      { label: "Indicators", value: "RSI, SMA, MACD, Bands" },
      { label: "Charts", value: "Interactive Plotly" }
    ]
  },
  {
    id: "online-exam-system",
    title: "Online Exam System",
    subtitle: "Secure Web Assessment Platform with Automated Grading & Analytics",
    category: "Full Stack",
    description: "A robust digital assessment portal engineered for educational institutions to conduct timed examinations with randomized questions and instant grading analytics.",
    problemStatement: "Conducting paper examinations is administratively expensive and delays result turnaround, while basic forms lack anti-cheat timer locks and randomized question banks.",
    solution: "Developed a full-stack examination portal featuring timed sessions, question bank shuffling, instant automated scoring, and student performance breakdown reports.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "PostgreSQL"],
    keyFeatures: [
      "Strict synchronized countdown timer with auto-submit upon expiration",
      "Randomized question delivery preventing adjacent exam cheating",
      "Instant automated evaluation for objective multiple-choice formats",
      "Faculty administrative panel for creating question sets and reviewing class grade distributions"
    ],
    contribution: "Designed user flows, developed responsive quiz test-taking screens, handled timer persistence across accidental page reloads, and integrated backend submission endpoints.",
    githubUrl: "https://github.com/Yogasree-21122006",
    metrics: [
      { label: "Grading", value: "Instant Automated" },
      { label: "Timer", value: "Synchronized Auto-submit" }
    ]
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "acme-orbit-1st",
    title: "1st Prize – Project Orbit (ACME'26)",
    category: "Symposium 1st Prize",
    awardBadge: "1st Prize Winner",
    organization: "Kongu Engineering College",
    department: "Association of Electrical and Electronics Engineering",
    date: "12th October 2026",
    description: "Awarded First Prize in Project Orbit at ACME'26, an Inter Department Technical Symposium, for demonstrating the AI Zoom Meeting project featuring adaptive low-bandwidth video communication.",
    image: "/assets/prize6.jpg",
    stageImage: "/assets/prize_pic.jpg",
    highlights: [
      "Won 1st Place competing among inter-department engineering teams",
      "Demonstrated AI Zoom Meeting live WebRTC adaptive bandwidth streaming",
      "Felicitation and Certificate of Appreciation awarded by EEE Faculty Advisor, HOD, and Principal"
    ]
  },
  {
    id: "eareyes-inventa-1st",
    title: "1st Prize – Project Inventa (EAREYES 2K26 2.0)",
    category: "Symposium 1st Prize",
    awardBadge: "1st Prize Winner",
    organization: "Kongu Engineering College",
    department: "Department of Electronics and Instrumentation Engineering",
    date: "22nd September 2026",
    description: "Secured First Prize in the PROJECT INVENTA competition at EAREYES 2K26 2.0 Inter Department Technical Symposium for presenting AI Zoom Meeting's innovative network resilience.",
    image: "/assets/pricepic2.jpg",
    stageImage: "/assets/prize_pic.jpg",
    highlights: [
      "1st Prize in Project Inventa showcase",
      "Recognized for real-world impact addressing bandwidth constraints in rural student education",
      "Official Certificate of Achievement signed by EIE Faculty Coordinator, HOD, and Principal"
    ]
  },
  {
    id: "eareyes-paper-mania-1st",
    title: "1st Prize – Paper Mania (EAREYES 2K26 2.0)",
    category: "Symposium 1st Prize",
    awardBadge: "1st Prize Winner",
    organization: "Kongu Engineering College",
    department: "Department of Electronics and Instrumentation Engineering",
    date: "22nd September 2026",
    description: "Awarded First Prize in the PAPER MANIA technical paper presentation track at EAREYES 2K26 2.0 for authoring and presenting research on applied AI and computer vision methodologies.",
    image: "/assets/prize7.jpg",
    highlights: [
      "1st Place in competitive inter-department technical paper presentation",
      "Demonstrated technical depth, research methodology, and communication skills",
      "Official Certificate of Achievement awarded by KEC EIE Department"
    ]
  },
  {
    id: "hackspark-2026",
    title: "Hack Spark 2026 – National Level 24h Hackathon",
    category: "Hackathon Merit",
    awardBadge: "Certificate of Merit",
    organization: "Nehru Group of Institutions",
    department: "Nehru Institute of Information Technology & Management and Nehru College of Management, Coimbatore",
    date: "08-10-2026 to 09-10-2026",
    description: "Earned Certificate of Merit at Hack Spark 2026, an intense 24-Hour continuous National Level Hackathon organized by Nehru Group of Institutions, coding through the night on software innovation.",
    image: "/assets/prize5.jpg",
    stageImage: "/assets/outside.jpg",
    highlights: [
      "24-Hour non-stop overnight hackathon endurance",
      "Developed end-to-end prototype under strict time limits",
      "Verified on-site participation at Nehru College campus (geotagged at Thirumalayampalayam, Coimbatore)"
    ]
  },
  {
    id: "coptercode-intern-cert",
    title: "Full Stack Developer Internship Certificate",
    category: "Internship",
    awardBadge: "Verified Completion",
    organization: "CopterCode",
    department: "Research & Development",
    date: "June – July 2026 (Awarded August 15, 2026)",
    description: "Official Certificate of Internship completion from CopterCode, certifying successful delivery of the live production project: Internship Management System (InternHub).",
    image: "/assets/interncompleted.png",
    stageImage: "/assets/intern1.jpg",
    highlights: [
      "Full Stack Developer Intern in Research & Development team",
      "Built production Internship Management System with React, TypeScript, FastAPI & Supabase",
      "Certified by Karthikeyan Sundharesan, CopterCode"
    ]
  },
  {
    id: "world-food-day",
    title: "World Food Day 2K26 Hackathon",
    category: "Participation",
    awardBadge: "Hackathon Finalist",
    organization: "Kongu Engineering College",
    department: "Department of Food Technology",
    date: "01/10/2026",
    description: "Participated in the Software / Hardware Hackathon category of World Food Day 2K26, presenting an automated computer vision solution for subjective onion quality assessment and grading across procurement centres.",
    image: "/assets/prize3.jpg",
    highlights: [
      "Tackled agricultural supply chain inconsistency with AI grading concepts",
      "Explored computer vision classification for farm produce defects",
      "Official certificate signed by Food Technology Faculty Coordinator, HOD, and Principal"
    ]
  },
  {
    id: "acme-paper-verse",
    title: "Paper Verse Participation (ACME'26)",
    category: "Participation",
    awardBadge: "Symposium Presenter",
    organization: "Kongu Engineering College",
    department: "Association of Electrical and Electronics Engineering",
    date: "12th October 2026",
    description: "Certificate of Participation for presenting in the PAPER VERSE track at the ACME'26 Inter Department Technical Symposium.",
    image: "/assets/prize4.jpg",
    highlights: [
      "Presented technical paper at KEC EEE department symposium",
      "Engaged in technical Q&A with faculty judges and peers"
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "coptercode-internship",
    organization: "COPTERCODE",
    role: "Full Stack Developer Intern",
    duration: "June 2026 – July 2026",
    location: "Tamil Nadu, India",
    type: "Industrial Internship (R&D)",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "Supabase", "Git"],
    summary: "Selected as Full Stack Developer Intern in the Research & Development wing of CopterCode, responsible for architecting and developing the enterprise-grade 'Internship Management System' (InternHub) live project.",
    liveProjectName: "Internship Management System (InternHub)",
    liveProjectDescription: "A comprehensive multi-tenant portal uniting 5 user hierarchies (Admin, HR, Companies, Team Leads, Interns) with live application status tracking, AI applicant resume summaries, and secure Supabase Row Level Security.",
    responsibilities: [
      "Architected clean, modular UI components in React and TypeScript with Vite and Tailwind CSS for multi-role workflows.",
      "Integrated Supabase backend for real-time data persistence, authentication, and database-level security policies.",
      "Developed REST API interfaces in Python FastAPI for applicant summarization and automated notifications.",
      "Collaborated in daily agile scrums with senior developers and presented project deliverables on stage at CopterCode.",
      "Maintained version control and code quality via Git workflows and branch reviews."
    ],
    images: [
      { url: "/assets/interncompleted.png", caption: "Official Certificate of Internship Completion (CopterCode)" },
      { url: "/assets/intern2.jpg", caption: "Live 'Find Your Dream Internship' portal running on laptop with CopterCode intern ID badge" },
      { url: "/assets/intern1.jpg", caption: "Yoga Sree on stage during CopterCode technical presentation" },
      { url: "/assets/intern.jpg", caption: "CopterCode R&D Intern Cohort team photograph" }
    ]
  }
];

export const EDUCATION_DATA = [
  {
    institution: "Kongu Engineering College",
    degree: "B.Tech – Artificial Intelligence and Data Science",
    duration: "2023 – 2027 (Currently in 3rd Year)",
    location: "Perundurai, Erode, Tamil Nadu, India",
    badge: "Current Degree",
    highlights: [
      "Active participant and winner in inter-department technical symposiums and national hackathons.",
      "Core coursework: Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Data Structures, Relational Database Management Systems, Operating Systems, Web Development.",
      "Hands-on project work emphasizing end-to-end practical applications solving real-world challenges.",
      "Strong collaborative leadership participating in multidisciplinary hackathon teams."
    ]
  }
];

