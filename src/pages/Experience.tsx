import React from 'react';

const experiences = [
  {
    company: 'SoFi',
    logo: '/logos/sofi.png',
    role: 'Senior Software Engineer',
    duration: '2023 - Present',
    description: 'Leading the development of scalable fintech solutions and microservices.'
  },
  {
    company: 'GE Healthcare',
    logo: '/logos/gehealthcare.png',
    role: 'Software Engineer',
    duration: '2021 - 2023',
    description: 'Built and maintained healthcare data platforms and improved system reliability.'
  },
  {
    company: 'Globant',
    logo: '/logos/globant.png',
    role: 'Frontend Developer',
    duration: '2019 - 2021',
    description: 'Worked on modern web applications for global clients using React and TypeScript.'
  },
];

const Experience: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '3.5rem auto 2.5rem auto', padding: '2.5rem', background: 'rgba(22, 24, 34, 0.97)', borderRadius: 28, boxShadow: '0 6px 36px rgba(0,0,0,0.16)', color: '#f2f2f2' }}>
    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#00adee', marginBottom: '1.2rem' }}>Professional Experience</h1>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '2rem' }}>
      {experiences.map((exp) => (
        <div key={exp.company} style={{ display: 'flex', alignItems: 'center', gap: '2rem', background: 'rgba(34, 36, 48, 0.93)', borderRadius: 18, padding: '1.5rem 2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <img src={exp.logo} alt={exp.company + ' logo'} style={{ width: 64, height: 64, objectFit: 'contain', background: '#fff', borderRadius: 12, padding: 8 }} />
          <div>
            <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>{exp.company}</h2>
            <p style={{ margin: 0, fontWeight: 'bold', color: '#00adee' }}>{exp.role}</p>
            <p style={{ margin: 0, color: '#b1c8e0' }}>{exp.duration}</p>
            <p style={{ marginTop: '0.7rem', color: '#e0e6ed' }}>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
