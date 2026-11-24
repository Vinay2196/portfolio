import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Server,
  Database,
  Cpu,
  ExternalLink,
  Mail,
  MapPin,
  Download,
  CheckCircle2,
  ArrowRight,
  Workflow,
  Phone,
  GraduationCap,
  ChevronRight,
  Menu,
  X,
  Send,
  Sparkles
} from 'lucide-react';

// ============================================================================
// BRAND SVG ICONS (COMPATIBLE WITH ALL LUCIDE-REACT VERSIONS)
// ============================================================================

const GithubIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// ============================================================================
// PERSONAL & PORTFOLIO CONFIGURATION (TAILORED TO VINAY DHOBI'S CV)
// ============================================================================

const PERSONAL_INFO = {
  name: 'Vinay Rakeshkumar Dhobi',
  shortName: 'Vinay Dhobi',
  role: 'Senior PHP & Backend Developer',
  subRole: 'Node.js, MySQL Optimization & AI Workflow Automation',
  tagline:
    'Architecting high-throughput backend APIs, optimizing heavy relational databases, and building intelligent workflow automations with 5+ years of production experience.',
  location: 'Nadiad, Gujarat, India (Open to Relocation / Remote)',
  email: 'vinaydhobi96@gmail.com',
  phone: '+91 7383209117',
  github: 'https://github.com/Vinay2196',
  githubHandle: 'github.com/Vinay2196',
  linkedin: 'https://www.linkedin.com/in/vinaydhobi',
  linkedinHandle: 'linkedin.com/in/vinaydhobi',
  experienceYears: '5+',
  resumePath: '/Vinay_Dhobi_Resume.pdf',
  web3formsKey: 'c37204ac-d1b4-4647-8b7b-71da8bf24295'
};

const METRICS = [
  {
    value: '5+ Yrs',
    label: 'Backend Engineering',
    detail: 'PHP (Core, Laravel), Node.js & MVC architectures'
  },
  {
    value: '70% Faster',
    label: 'Query Latency Cut',
    detail: 'Reduced MySQL execution times from 10s down to 3s'
  },
  {
    value: '99.9%',
    label: 'Production Uptime',
    detail: 'Enterprise deployments on AWS EC2, S3 & DigitalOcean'
  },
  {
    value: 'AI + API',
    label: 'Workflow Automation',
    detail: 'n8n, OpenAI API, Google Workspace & Headless CMS'
  }
];

const FEATURED_PROJECTS = [
  {
    id: 'ai-lead-pipeline',
    category: 'Automation & AI',
    badge: 'Featured Automation',
    title: 'Automated AI Lead-Qualification Pipeline',
    subtitle: 'n8n + OpenAI + Google Workspace Orchestration',
    problem:
      'Manual inbound lead triage caused slow response times, inconsistent lead scoring, and repetitive CRM data entry across incoming inquiries.',
    solution:
      'Engineered an event-driven automation pipeline connecting Google Forms and Apps Script webhooks to a self-hosted n8n orchestrator. Incoming leads are enriched and scored using OpenAI prompts, logged into structured Google Sheets trackers, and routed via automated personalized Gmail alerts.',
    highlights: [
      'Zero-latency webhook ingestion from Google Forms & Apps Script',
      'LLM-powered intent classification & priority scoring (High/Medium/Low)',
      'Automated structured logging in Google Sheets with deduplication',
      'Instant personalized follow-up & internal Slack/Gmail notifications'
    ],
    tech: ['n8n', 'OpenAI API', 'Google Apps Script', 'Google Sheets', 'Webhooks', 'JSON'],
    architectureSteps: [
      'Inbound Form / Webhook',
      'Apps Script Trigger',
      'n8n Workflow Engine',
      'OpenAI Lead Scorer',
      'Sheets DB + Gmail Dispatch'
    ],
    githubUrl: 'https://github.com/Vinay2196',
    liveUrl: null
  },
  {
    id: 'reena-zala-creation',
    category: 'Full-Stack & CMS',
    badge: 'Client Delivery',
    title: 'Reena Zala Creation',
    subtitle: 'Full-Stack Brand Showcase & Headless CMS Platform',
    problem:
      'A growing creative and fashion brand needed a high-speed digital storefront/portfolio where non-technical owners could publish collections independently without developer intervention.',
    solution:
      'Built a responsive modern web application backed by Sanity.io Headless CMS and deployed on Vercel. Designed structured content schemas for collections, galleries, and inquiries with instant edge caching and optimized media delivery.',
    highlights: [
      'Custom Sanity.io Studio schemas for effortless non-technical content updates',
      'Responsive gallery layouts with automatic image compression & CDN delivery',
      'CI/CD automated deployment pipeline via GitHub and Vercel',
      'SEO-optimized metadata and fast mobile load performance'
    ],
    tech: ['React / Next.js', 'Sanity.io CMS', 'Tailwind CSS', 'Vercel', 'REST API'],
    architectureSteps: [
      'Sanity Studio CMS',
      'GROQ / REST API Layer',
      'React Frontend',
      'Vercel Edge CDN'
    ],
    githubUrl: 'https://github.com/Vinay2196',
    liveUrl: 'https://reena-zala-creation.vercel.app/'
  },
  {
    id: 'dinkumdoc-telemedicine',
    category: 'Backend & Healthcare',
    badge: 'Groovy Technoweb • Enterprise',
    title: 'Dinkumdoc Telemedicine & Healthcare Platform',
    subtitle: 'HIPAA-Compliant Healthcare API & Consultation Backend',
    problem:
      'Healthcare providers required a reliable, secure backend capable of handling real-time patient appointments, video consultation states, and sensitive medical records under strict compliance standards.',
    solution:
      'Architected secure RESTful backend APIs on GCP & AWS managing multi-role authentication, doctor-patient scheduling, consultation workflows, and integrated real-time payment gateways.',
    highlights: [
      'Role-Based Access Control (RBAC) & JWT authentication for doctors and patients',
      'HIPAA-aligned data encryption layers and secure audit logging',
      'Real-time appointment slot locking and payment gateway integration',
      'High-availability deployment across AWS and GCP infrastructure'
    ],
    tech: ['PHP (OOP/MVC)', 'Node.js', 'MySQL', 'JWT & RBAC', 'AWS', 'GCP'],
    architectureSteps: [
      'Client Apps',
      'JWT / RBAC Gateway',
      'REST API Core',
      'Encrypted MySQL + Cloud Storage'
    ],
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 'rejuuv-platform',
    category: 'Backend & Performance',
    badge: 'Groovy Technoweb • Optimization',
    title: 'Rejuuv — On-Demand Service Platform',
    subtitle: 'High-Throughput SQL Optimization & S3 Media Pipeline',
    problem:
      'Heavy relational queries and synchronous media uploads created 10-second response bottlenecks during peak booking traffic.',
    solution:
      'Restructured complex MySQL join logic, implemented composite indexing strategies, and engineered an asynchronous cloud media processing pipeline using Amazon S3.',
    highlights: [
      'Slashed critical database query response times from 10s down to 3s (70% improvement)',
      'Built asynchronous Amazon S3 media upload and optimization pipeline',
      'Refactored legacy endpoints into clean, maintainable service layers',
      'Implemented Redis caching for frequently accessed service catalogs'
    ],
    tech: ['PHP', 'MySQL Indexing', 'Amazon S3', 'Redis', 'AWS EC2', 'REST APIs'],
    architectureSteps: [
      'API Request',
      'Redis Cache Check',
      'Indexed MySQL Query',
      'Async AWS S3 Worker'
    ],
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 'mydoctorscript-telemedical',
    category: 'Backend & Healthcare',
    badge: 'Groovy Technoweb • Telemedicine',
    title: 'MyDoctorScript — Telemedical Platform',
    subtitle: 'Express.js & MySQL Digital Prescription & Consultation Backend',
    problem:
      'Clinics and remote physicians needed a fast, structured backend system to manage digital prescriptions, patient consultation records, and real-time appointment workflows.',
    solution:
      'Engineered scalable RESTful APIs using Node.js, Express.js, and MySQL with normalized relational schemas, secure token authentication, and streamlined prescription generation.',
    highlights: [
      'Designed normalized MySQL database schemas for patient histories and digital scripts',
      'Built modular Express.js REST API endpoints with role-based doctor/patient access',
      'Optimized relational joins and indexing for rapid medical record lookups',
      'Implemented strict payload validation and secure session handling'
    ],
    tech: ['Node.js', 'Express.js', 'MySQL', 'REST APIs', 'JWT Auth'],
    architectureSteps: [
      'Doctor / Patient Client',
      'Express.js API Layer',
      'Auth & Validation Middleware',
      'Relational MySQL DB'
    ],
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 'renlo-bookstore',
    category: 'Backend & Performance',
    badge: 'Groovy Technoweb • E-Commerce',
    title: 'Renlo — Online Bookstore Platform',
    subtitle: 'Express.js E-Commerce Catalog, Cart & Order Management API',
    problem:
      'An online bookstore required a responsive backend capable of handling dynamic book catalog filtering, inventory tracking, user carts, and end-to-end order processing.',
    solution:
      'Developed the core backend services using Express.js, powering fast catalog search, order lifecycle state management, and reliable checkout APIs.',
    highlights: [
      'Built Express.js REST services for catalog browsing, search, and pagination',
      'Engineered cart synchronization, inventory deduction, and order status workflows',
      'Structured clean MVC controller/service layers for maintainable feature scaling',
      'Integrated secure checkout and customer account management endpoints'
    ],
    tech: ['Node.js', 'Express.js', 'RESTful APIs', 'JSON', 'MVC Architecture'],
    architectureSteps: [
      'Storefront Client',
      'Express.js Router',
      'Catalog & Order Services',
      'Database Storage'
    ],
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 'vtmis-vessel-management',
    category: 'Backend & Performance',
    badge: 'Groovy Technoweb • Maritime Ops',
    title: 'VTMIS — Online Vessel Traffic & Management System',
    subtitle: 'Express.js & MongoDB Real-Time Maritime Operations Backend',
    problem:
      'Maritime operators needed a centralized system to ingest, track, and manage high-frequency vessel movement logs, port schedules, and operational records.',
    solution:
      'Architected a flexible document-driven backend using Express.js and MongoDB to handle real-time vessel telemetry, port activity logs, and operational reporting.',
    highlights: [
      'Modeled high-throughput MongoDB collections for vessel tracking and port logs',
      'Developed Express.js aggregation pipelines for operational analytics and reporting',
      'Implemented real-time status updates and role-based port authority access',
      'Optimized MongoDB compound indexes for fast historical vessel lookups'
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Aggregation Pipelines', 'REST APIs'],
    architectureSteps: [
      'Port & Vessel Feeds',
      'Express.js Ingestion API',
      'Aggregation Engine',
      'Indexed MongoDB Cluster'
    ],
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 'footbizz-platform',
    category: 'Full-Stack & CMS',
    badge: 'Groovy Technoweb • Live Production',
    title: 'Footbizz',
    subtitle: 'Live Production Web Platform & Backend Architecture',
    problem:
      'Needed a reliable, production-ready web platform delivering seamless user engagement, dynamic content management, and fast page responses under live traffic.',
    solution:
      'Contributed to the backend architecture, API integrations, and production stability of Footbizz, ensuring responsive performance and dependable data workflows.',
    highlights: [
      'Engineered scalable backend endpoints and dynamic data workflows for live users',
      'Optimized server response times and database queries for smooth browsing',
      'Maintained production reliability, bug fixes, and feature enhancements',
      'Collaborated across full-stack deployment and live environment maintenance'
    ],
    tech: ['Backend Architecture', 'REST APIs', 'Database Optimization', 'Production Ops'],
    architectureSteps: [
      'Live Web Traffic',
      'Application Server',
      'API & Business Logic',
      'Production Database'
    ],
    githubUrl: null,
    liveUrl: 'https://footbizz.com'
  }
];

const SKILL_GROUPS = [
  {
    title: 'Backend & APIs',
    icon: Server,
    skills: [
      'Core PHP (OOP, MVC, PDO)',
      'Laravel',
      'Node.js',
      'Express.js',
      'Sails.js',
      'RESTful APIs',
      'Microservices',
      'JWT & OAuth Security'
    ]
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    skills: [
      'MySQL',
      'Query Optimization',
      'Database Indexing & Schema Design',
      'Stored Procedures',
      'MongoDB',
      'Redis',
      'Amazon S3',
      'Sanity.io CMS'
    ]
  },
  {
    title: 'AI & Workflow Automation',
    icon: Workflow,
    skills: [
      'n8n Self-Hosted & Cloud',
      'OpenAI API Integration',
      'Google Apps Script',
      'Webhook Orchestration',
      'Automated Lead Scoring',
      'Third-Party Payment (Stripe, Razorpay)'
    ]
  },
  {
    title: 'Cloud, DevOps & Frontend',
    icon: Cpu,
    skills: [
      'AWS (EC2, S3)',
      'DigitalOcean',
      'Nginx & Apache2',
      'Linux Server Admin',
      'Git & CI/CD',
      'React.js & Next.js',
      'JavaScript (ES6+)',
      'HTML5 & Tailwind CSS'
    ]
  }
];

const EXPERIENCE = [
  {
    role: 'Freelance Senior PHP & Full-Stack Developer',
    company: 'Independent Consulting & Automation',
    period: 'May 2025 — Present',
    location: 'Remote (India & Global Clients)',
    bullets: [
      'Engineered custom web applications, bespoke PHP/Node.js backends, and AI-powered workflow automations (n8n, OpenAI, Google Workspace).',
      'Designed high-throughput REST APIs with JWT authentication and integrated payment gateways (Stripe, Razorpay).',
      'Refactored legacy PHP codebases to modern OOP and PDO standards, eliminating SQL bottlenecks and cutting API latency.',
      'Delivered end-to-end client platforms (including Reena Zala Creation with Sanity.io) and managed cloud deployments on AWS EC2, DigitalOcean, and Vercel.'
    ]
  },
  {
    role: 'Senior Backend Engineer',
    company: 'Groovy Technoweb Pvt. Ltd.',
    period: 'Aug 2021 — Apr 2025',
    location: 'Nadiad, Gujarat, India',
    bullets: [
      'Architected, developed, and maintained scalable backend infrastructures for enterprise web and mobile platforms, sustaining 99.9% uptime.',
      'Engineered normalized database schemas and tuned complex SQL/NoSQL queries, accelerating data retrieval speeds across high-traffic workflows.',
      'Designed secure RESTful API layers and integrated third-party payment, SMS, and real-time communication gateways.',
      'Led backend development lifecycles, conducted thorough code reviews, and mentored junior backend developers.'
    ]
  }
];

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Contact form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    requirement: 'Senior Backend / Full-Time Role (India / Remote)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', 'Automation & AI', 'Full-Stack & CMS', 'Backend & Healthcare', 'Backend & Performance'];

  const filteredProjects =
    activeCategory === 'All'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === activeCategory);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: PERSONAL_INFO.web3formsKey,
          subject: `Portfolio Inquiry: ${formState.requirement} (${formState.name})`,
          from_name: 'Vinay Dhobi Portfolio',
          name: formState.name,
          email: formState.email,
          inquiry_type: formState.requirement,
          message: formState.message
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmissionSuccess({
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          name: formState.name,
          email: formState.email,
          requirement: formState.requirement,
          message: formState.message
        });
        setFormState({
          name: '',
          email: '',
          requirement: 'Senior Backend / Full-Time Role (India / Remote)',
          message: ''
        });
      } else {
        setSubmitError(data.message || 'Unable to send message right now. Please try again or email directly.');
      }
    } catch (err) {
      setSubmitError('Network error while sending message. Please check your connection or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Subtle Background Grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* ==================================================================== */}
      {/* STICKY HEADER NAVIGATION                                             */}
      {/* ==================================================================== */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection('top')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white tracking-tight block leading-none">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                Backend Engineer/Full Stack Developer
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
            <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-white transition-colors">
              Tech Stack
            </button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-white transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Vinay_Dhobi_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all shadow-lg shadow-emerald-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-5 space-y-4">
            <div className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
              <button onClick={() => scrollToSection('projects')} className="text-left py-1 hover:text-emerald-400">
                Featured Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left py-1 hover:text-emerald-400">
                Technical Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-left py-1 hover:text-emerald-400">
                Work Experience
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-1 hover:text-emerald-400">
                Contact Me
              </button>
            </div>
            <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-sky-400"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ==================================================================== */}
      {/* HERO SECTION                                                         */}
      {/* ==================================================================== */}
      <section id="top" className="relative pt-14 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Senior Backend / Full-Stack Roles (India & Remote)
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                  {PERSONAL_INFO.name}
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-emerald-400">
                  {PERSONAL_INFO.role}
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                {PERSONAL_INFO.tagline}
              </p>

              {/* Location & Direct Links */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  {PERSONAL_INFO.location}
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Primary CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20"
                >
                  Explore Case Studies
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-colors"
                >
                  Hire / Contact Me
                </button>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/70 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-sm font-medium transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/70 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-sky-400 text-sm font-medium transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right Column: Engineering Profile Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">vinay_dhobi.profile</span>
                </div>

                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-500">Experience</span>
                    <span className="text-emerald-400 font-semibold">5+ Years Production</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-500">Core Backend</span>
                    <span className="text-slate-200">PHP, Laravel, Node.js</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-500">Databases</span>
                    <span className="text-slate-200">MySQL, MongoDB, Redis</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-500">Cloud & Ops</span>
                    <span className="text-slate-200">AWS (EC2/S3), DigitalOcean</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">AI & Automation</span>
                    <span className="text-sky-400">n8n, OpenAI, Sanity CMS</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Education</p>
                      <p className="text-xs sm:text-sm font-semibold text-white">
                        BCA — Sardar Patel University
                      </p>
                    </div>
                    <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Performance Metrics Strip */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {METRICS.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-5 hover:border-emerald-500/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-emerald-400 mt-1">{item.label}</div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FEATURED PROJECTS & CASE STUDIES                                     */}
      {/* ==================================================================== */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950/60">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Proof of Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Featured Case Studies & Systems
              </h2>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
                Real-world backend architectures, AI workflow automations, and full-stack platforms built for performance, security, and maintainability.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all shadow-xl"
              >
                <div className="space-y-5">
                  {/* Top Badges & Links */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Sparkles className="w-3 h-3" />
                      {project.badge}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-xs font-medium text-emerald-300 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">{project.subtitle}</p>
                  </div>

                  {/* Architecture Flow Diagram Strip */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/90">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                      System Flow
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                      {project.architectureSteps.map((step, i) => (
                        <React.Fragment key={i}>
                          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-200">
                            {step}
                          </span>
                          {i < project.architectureSteps.length - 1 && (
                            <ChevronRight className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-2.5 text-sm leading-relaxed">
                    <p className="text-slate-400">
                      <strong className="text-slate-200 font-semibold">Challenge:</strong> {project.problem}
                    </p>
                    <p className="text-slate-400">
                      <strong className="text-emerald-400 font-semibold">Architecture:</strong> {project.solution}
                    </p>
                  </div>

                  {/* Key Technical Highlights */}
                  <ul className="space-y-2 pt-1">
                    {project.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Footer */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* TECHNICAL SKILLS MATRIX                                              */}
      {/* ==================================================================== */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technical Stack & Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Production-tested tools for designing resilient backend APIs, tuning relational databases, and automating business workflows.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_GROUPS.map((group) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={group.title}
                  className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800/90 text-xs text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* PROFESSIONAL EXPERIENCE TIMELINE                                     */}
      {/* ==================================================================== */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950/60">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Career Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-y-2 before:left-4 sm:before:left-6 before:w-px before:bg-slate-800">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative pl-12 sm:pl-16">
                {/* Timeline Dot */}
                <div className="absolute left-2.5 sm:left-4.5 top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-slate-950" />

                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-sm font-medium text-emerald-400">{exp.company}</p>
                    </div>
                    <div className="text-xs font-mono text-slate-400 sm:text-right">
                      <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 inline-block">
                        {exp.period}
                      </span>
                      <div className="mt-1 text-slate-500">{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* CONTACT SECTION                                                      */}
      {/* ==================================================================== */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Get In Touch
                </span>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Let&apos;s Build Reliable Systems
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Looking for a Senior PHP / Backend Engineer, Node.js API specialist, or AI workflow automation developer? Reach out directly via form, email, or LinkedIn.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Email</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Phone / WhatsApp</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.phone}</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400">LinkedIn</div>
                    <div className="text-sm font-semibold text-white truncate">
                      {PERSONAL_INFO.linkedinHandle}
                    </div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-600 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-slate-800 text-slate-200">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">GitHub</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.githubHandle}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Direct Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Messages are delivered directly to {PERSONAL_INFO.email}.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Recruiter or Client Name"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      value={formState.requirement}
                      onChange={(e) => setFormState({ ...formState, requirement: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Senior Backend / Full-Time Role (India / Remote)">
                        Senior Backend / Full-Time Role (India / Remote)
                      </option>
                      <option value="Relocation / On-Site Opportunity (India)">
                        Relocation / On-Site Opportunity (India)
                      </option>
                      <option value="Freelance Web / API Development">
                        Freelance Web / API Development
                      </option>
                      <option value="n8n / AI Workflow Automation Consulting">
                        n8n / AI Workflow Automation Consulting
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows="4"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share details about your team, tech stack, open opportunity, or project scope..."
                      className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-bold text-sm inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FOOTER                                                               */}
      {/* ==================================================================== */}
      <footer className="border-t border-slate-900 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              {PERSONAL_INFO.githubHandle}
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              {PERSONAL_INFO.linkedinHandle}
            </a>
          </div>
        </div>
      </footer>

      {/* ==================================================================== */}
      {/* CONFIRMATION MODAL                                                   */}
      {/* ==================================================================== */}
      {submissionSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Message Sent!</h3>
                <p className="text-xs font-mono text-emerald-400">
                  Delivered at {submissionSuccess.timestamp}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Thank you, <strong className="text-white">{submissionSuccess.name}</strong>! Your message regarding{' '}
              <span className="text-emerald-400 font-medium">{submissionSuccess.requirement}</span> has been delivered directly to Vinay&apos;s inbox. He will get back to you at{' '}
              <span className="text-slate-200 underline">{submissionSuccess.email}</span> shortly.
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setSubmissionSuccess(null)}
                className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-lg shadow-emerald-500/20"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}