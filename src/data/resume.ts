export const personalInfo = {
  name: 'Kevin Wang',
  email: 'kevin.wang.logic@gmail.com',
  phone: '(689) 264-8831',
  location: 'Orlando, FL',
  linkedin: 'https://linkedin.com/in/kevin-wang',
  github: 'https://github.com/techspire0924',
  portfolio: 'https://kevin-wang-portfolio.vercel.app',
}

export const summary = `Product-minded Full Stack Engineer with 11+ years of experience shipping production-ready software in fast-paced startup environments. Strong focus on rapid prototyping, lean product iteration, and cross-functional collaboration. Experienced in architecting and delivering high-impact, user-centric applications using React, Node.js, Python, Java, Go, and scalable cloud-native microservices across AWS and GCP. Proven ability to lead 0→1 development efforts, integrate AI features, and scale systems in ambiguous environments.`

export const skills = {
  frontend: [
    'React', 'Next.js', 'TypeScript', 'Angular', 'Vue.js', 'Tailwind CSS', 
    'Material UI', 'Bootstrap', 'D3.js', 'Lit', 'SvelteKit', 'Vite', 
    'Web Components', 'Storybook', 'React Query', 'Zustand'
  ],
  backend: [
    'Java (Spring Boot)', 'Python (Django, Flask, FastAPI)', 'Node.js (Express, NestJS)', 
    'Go', 'Ruby on Rails', 'REST', 'GraphQL', 'gRPC', 'Webhooks'
  ],
  database: [
    'PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis', 'Elasticsearch', 'TimescaleDB'
  ],
  cloud: [
    'AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 
    'GitHub Actions', 'CircleCI', 'Serverless Framework', 'Datadog', 
    'Prometheus', 'Grafana', 'ELK', 'Cloud Monitoring'
  ],
  realtime: [
    'Apache Kafka', 'RabbitMQ', 'WebSockets', 'MQTT', 'AWS SNS/SQS'
  ],
  ai: [
    'OpenAI API', 'AWS SageMaker', 'Hugging Face Transformers', 'scikit-learn', 
    'TensorFlow', 'LangChain', 'Pinecone'
  ],
  security: [
    'OAuth2', 'JWT', 'OWASP', 'SSL/TLS', 'Jest', 'Mocha', 'Chai', 
    'React Testing Library', 'Cypress', 'Playwright', 'Selenium'
  ],
  practices: [
    'Agile', 'TDD', 'BDD', 'CI/CD', 'Pair Programming', 'Code Reviews', 
    'Design Patterns', 'Rapid Prototyping', 'MVP Development', 
    'Cross-Functional Collaboration', 'Domain-Driven Design (DDD)'
  ],
  other: [
    'WebRTC', 'Serverless Architecture', 'PWA', 'AI-powered development tools', 'Vercel'
  ]
}

export const experience = [
  {
    company: 'SoFi',
    position: 'Senior Software Engineer',
    duration: 'Apr 2019 - May 2025',
    location: 'Remote',
    achievements: [
      'Rewards Dashboard: Built a high-performance UI using React (Next.js), TypeScript, Tailwind CSS, GraphQL, and React Query; boosted user engagement by 20% in Q1 post-launch.',
      'Microservices Architecture: Developed backend services using Java (Spring Boot), Python (FastAPI), Go, and gRPC for cashback, rewards ledgering, and dispute processing; reduced support volume by 35%.',
      'Internal Platform Engineering: Led the redevelopment of the internal business operations portal using React and Python (Django); improved resolution time for support tickets by 45%, reduced compliance processing effort by 30%, and enabled faster onboarding for new operations agents through guided workflows.',
      'Frontend Optimization: Reduced initial load time by 35% on mobile devices through React lazy loading, route-based code splitting, and CloudFront caching; implemented Vite for faster local dev builds.',
      'Backend Performance Tuning: Improved API response times by 40% by introducing Redis caching, optimizing SQL/NoSQL queries, and migrating heavy workloads to asynchronous processing with AWS Lambda and SQS.',
      'Platform Observability: Collaborated with SRE and platform teams to improve monitoring and traceability using Datadog, CloudWatch, and structured logging; reduced time-to-detection and improved system resilience.',
      'Real-Time Alerts: Implemented Kafka and AWS Lambda for streaming transaction events to SNS/WebSockets; achieved 99% alert delivery under 2 seconds.',
      'DevOps Automation: Provisioned infrastructure using Terraform and Serverless Framework; deployed via Docker, GitHub Actions, and Kubernetes on AWS ECS and Lambda; improved deployment speed by 50%, reduced incident MTTD by 67%.',
      'Cross-Functional Collaboration: Partnered closely with product managers, UX designers, compliance analysts, and support leads in an Agile environment to iterate on core features, alignment with business workflows, and rapid feature delivery.'
    ]
  },
  {
    company: 'GE Healthcare',
    position: 'Software Engineer - Digital Health',
    duration: 'Sep 2016 - Feb 2019',
    location: 'Chicago, IL',
    achievements: [
      'Telemedicine UI Development: Built clinician-facing features using React, Redux, Java (Spring Boot), and Python (Django); supported secure HIPAA-compliant virtual consultations; drove 3x pilot adoption.',
      'Real-Time Health Data APIs: Engineered low-latency APIs with WebSockets and REST to connect EHR systems and PACS devices; enabled <300ms round-trip time for clinical data.',
      'Visualization & Performance: Implemented server-side rendering and dynamic D3.js dashboards; optimized load time on clinical terminals by 25%.',
      'Cross-Team Collaboration: Worked closely with clinical advisors, UX researchers, and product managers to rapidly iterate on diagnostic workflows and ensure usability across devices and specialties.'
    ]
  },
  {
    company: 'Globant',
    position: 'Full Stack Engineer - Growth & Commerce',
    duration: 'Jul 2013 - Aug 2016',
    location: 'San Francisco, CA',
    achievements: [
      'E-commerce Frontend: Delivered mobile-optimized frontend using AngularJS, Backbone.js, and Bootstrap; integrated Node.js and Python RESTful APIs; increased conversion rates by 22%.',
      'Analytics & Campaign Reporting: Built real-time dashboards with Elasticsearch, Kibana, Python (Flask), and D3.js for campaign tracking; reduced report generation time by 60%.',
      'Content Automation: Created CMS features using Python, NLTK, and custom logic for SEO tagging; improved content deployment efficiency by 40% and reduced manual input time by 50%.'
    ]
  }
]

export const projects = [
  {
    title: 'Personal Telehealth Platform',
    description: 'A full-stack telehealth platform enabling virtual consultations, real-time symptom prediction via AI, and chatbot-assisted triage — built with React, Node.js, and Python.',
    technologies: ['React', 'Node.js', 'Python', 'AI/ML', 'WebRTC', 'PostgreSQL'],
    github: 'https://github.com/techspire0924/telehealth-platform',
    demo: null,
    featured: true
  },
  {
    title: 'LangChain Chatbot',
    description: 'AI-powered microservices chatbot for legal document support, built with React, FastAPI, LangChain, Redis, and pgvector using Retrieval-Augmented Generation (RAG).',
    technologies: ['React', 'FastAPI', 'LangChain', 'Redis', 'pgvector', 'RAG'],
    github: 'https://github.com/techspire0924/langchain-chatbot',
    demo: null,
    featured: true
  }
]

export const education = {
  degree: 'Bachelor of Computer Science',
  school: 'University of Florida',
  duration: 'Aug 2009 - May 2013',
  coursework: [
    'Data Structures & Algorithms', 'Operating Systems', 'Software Engineering', 
    'Databases', 'Computer Networks', 'Intro to Machine Learning', 'Cloud Fundamentals', 
    'Mobile App Development', 'AI Concepts', 'Computer Architecture', 
    'Programming Languages (Java, Python, C++, JavaScript)'
  ]
}
