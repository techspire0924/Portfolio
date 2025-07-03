import React, { useState } from 'react';

// Simple retrieval-based chatbot using resume content

// Resume content for system prompt
const RESUME_SYSTEM_PROMPT = `
I'm Kevin Wang, a Senior Software Engineer. Here is my resume:
SKILLS
Programming languages: JavaScript, Java, Python, Go, PHP, SQL, C/C++
Front-end: HTML,CSS, JavaScript/TypeScript, React/Angular/Vue, Next.js, Redux, Context API, Bootstrap, Material UI, Tailwind CSS, D3.js, ApexCharts.js
Back-end: Python/Django/FastAPI, Java/Spring Boot, Node.js/Express/Nest.js, Golang, C/C++, SQL, NoSQL, Redis, RESTful APIs, GraphQL, gRPC, OAuth, JWT, Kafka, RabbitMQ, Prisma
Database: MySQL, PostgreSQL, MongoDB, DynamoDB
Cloud/DevOps: AWS, GCP, Azure, Terraform, Jenkins, CircleCI, Github Actions, Docker, Kubernetes
Testing Frameworks: Unit testing (Jest, Enzyme), E2E testing (Cypress, Playwright)
Other: GraphQL, React Query, Sentry, Grafana, Datadog, Linux, Webpack, WebSocket, Redis, ElasticSearch
Testing: Unit testing, A/B testing, E2E testing, Jest, React-testing-library, Cypress, Playwright, Selenium
WORK EXPERIENCE
SOFI • Senior Software Engineer Apr 2019 - Present • San Francisco, CA
Built the credit card rewards dashboard to help users track cashback and redemption history, using React (Next.js), TypeScript, and Tailwind CSS, which improved daily engagement with rewards features by 20%.
Designed and shipped the rewards redemption flow to allow instant cashback actions, using React, GraphQL, and Apollo Client, which reduced user complaints and support requests by 35%.
Built backend microservices for transaction processing, reward application, and credit score syncing using Python and Java, integrating with Galileo APIs to support real-time financial workflows.
Developed the transaction dispute interface and backend APIs using React and Python (Fast API), enabling pre-filled dispute workflows and reducing average submission time by 60%.
Contributed to mobile-facing features like push notification display components using React Native, improving reward alert visibility inside the SoFi mobile app.
Reduced page load time by 30% across the credit card dashboard through code splitting, lazy loading, and CDN optimization with Cloudflare, enhancing performance for mobile-first users.
Created custom component libraries using atomic design principles and TypeScript, improving development speed and visual consistency across teams.
Configured the frontend tooling with Vite and SWC, reducing local dev server boot-up time and improving DX for the credit card team.
Migrated the Reward Redemption backend service from Node.js (Express) to Go, reducing average response time from 450ms to under 230ms and improving system reliability during high-reward activity periods.
Integrated Redis caching for reward point balance and GraphQL queries, reducing API response time by 40% and improving the redemption UI responsiveness.
Designed and deployed the real-time transaction alert system using Apache Kafka, AWS Lambda, and SNS, ensuring that 99% of alerts were delivered within 2 seconds of transaction event ingestion.
Created centralized observability dashboards using Datadog, CloudWatch, and ELK stack, reducing mean time to detect (MTTD) critical system issues from 15 minutes to under 5 minutes.
GE HEALTHCARE • Software Engineer Sep 2013 - Feb 2016 • Chicago, IL
Developed core features for Digital Expert Connect, a telemedicine platform for clinicians to collaborate remotely, using the MERN stack to enable secure, real-time video consultations, screen sharing, and shared diagnostic review.
Built the frontend interface with React, Redux, and MUI, supporting physician-to-physician virtual sessions and increasing platform usage in clinical pilot programs by 3x.
Used Python (FastAPI) to build a lightweight audit service that logged session activity and metadata for compliance and internal review.
Designed backend services and real-time APIs using Node.js (Express) and Java (Spring Boot) to support peer case reviews, file sharing, and live feedback, ensuring smooth session flow under high concurrency.
Integrated WebRTC and Socket.io to support HIPAA-compliant, low-latency video and messaging features, ensuring encrypted communications during virtual exams and second opinions.
Optimized initial load and SEO for external provider access by implementing Next.js for server-side rendering and Tailwind CSS for responsive design, improving load time on lower-powered hospital devices by ~25%.
Built secure APIs to exchange data with EHR, PACS, and diagnostic tools, enabling clinicians to reference realtime medical images and reports during live sessions.
Implemented authentication and session management using OAuth2 and JWT, meeting strict HIPAA compliance for access control, session timeouts, and PHI encryption.
GLOBANT • Fullstack Developer Jul 2013 - Aug 2016 • San Francisco, CA
Developed dynamic and mobile-friendly UI components with AngularJS, Backbone.js, and jQuery, reducing bounce rates and improving mobile conversion by 22% on key product pages.
Designed relational database schemas and optimized queries in MySQL and PostgreSQL to support customer profiles, order history, and shipping preferences at scale.
Built and deployed a real-time analytics dashboard using Elasticsearch, Kibana, and D3.js, providing marketing and sales teams with actionable insights into customer behavior and live campaign performance.
Contributed to internal CMS tooling and multitenant layout templates, allowing non-technical stakeholders to publish promotions and seasonal layouts without engineering support.
EDUCATION
UNIVERSITY OF FLORIDA • Bachelor of Computer Science Aug 2009 - May 2013 • Gainesville, FL
This is some thing more in details about me.
When you answer, use this information to provide relevant, professional, and personal responses.
Give me consize and clear answer.
`;

const Chat = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am Kevin Wang, a Senior Software Engineer. Ask me about my skills, experience, or background!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);

    // Build conversation as a string
    const conversation = newMessages
      .map(msg => (msg.from === 'user' ? `User: ${msg.text}` : `Kevin: ${msg.text}`))
      .join('\n') + '\nKevin:';

    try {
      const res = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'mistral',
          system: RESUME_SYSTEM_PROMPT,
          prompt: conversation,
          stream: false
        }),
      });
      const data = await res.json();
      setMessages(msgs => [...msgs, { from: 'bot', text: data.response }]);
    } catch (err) {
      setMessages(msgs => [...msgs, { from: 'bot', text: 'Error: Could not connect to the local AI server.' }]);
    }
    setInput('');
  };


  return (
    <div style={{ maxWidth: 480, margin: '3rem auto', background: '#181a24', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.14)', padding: 32, color: '#f2f2f2' }}>
      <h2 style={{ color: '#00adee', marginBottom: 24 }}>Chat with Me</h2>
      <div style={{ minHeight: 240, marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start', background: msg.from === 'user' ? '#00adee' : '#262a36', color: msg.from === 'user' ? '#fff' : '#b1c8e0', padding: '8px 14px', borderRadius: 12, maxWidth: '85%' }}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '0.7rem 1rem', borderRadius: 8, border: 'none', outline: 'none', background: '#22242e', color: '#fff' }}
        />
        <button type="submit" style={{ background: '#00adee', color: '#fff', border: 'none', borderRadius: 8, padding: '0.7rem 1.4rem', fontWeight: 700, cursor: 'pointer' }}>
          Send
        </button>
      </form>
    </div>
  );
};
export default Chat;
