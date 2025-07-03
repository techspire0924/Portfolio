import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  max-width: 900px;
  margin: 3.5rem auto 2.5rem auto;
  padding: 3.5rem 2.5rem;
  background: rgba(22, 24, 34, 0.97);
  border-radius: 28px;
  box-shadow: 0 6px 36px rgba(0,0,0,0.16);
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  @media (max-width: 600px) {
    padding: 1.5rem 0.6rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #00adee;
  margin-bottom: 1.2rem;
`;

const ExperienceCard = styled.div`
  background: rgba(36, 40, 55, 0.92);
  border-radius: 16px;
  margin-bottom: 2rem;
  padding: 1.5rem 1.2rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
`;

const CompanyTitle = styled.h3`
  margin: 0 0 0.4rem 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ff7e5f;
`;

const JobMeta = styled.div`
  font-size: 1rem;
  color: #b8c1ec;
  margin-bottom: 0.7rem;
`;

const BulletList = styled.ul`
  margin: 0.4rem 0 0 1.2rem;
  padding: 0;
  list-style: disc;
  font-size: 1.05rem;
`;

const Projects: React.FC = () => (
  <Container>
    <Title>Professional Experience</Title>
    <ExperienceCard>
      <CompanyTitle>SoFi • Senior Software Engineer</CompanyTitle>
      <JobMeta>Apr 2019 - Present &mdash; San Francisco, CA</JobMeta>
      <BulletList>
        <li>Developed a user-friendly credit card platform interface, increasing engagement and conversion rates.</li>
        <li>Enhanced SEO and front-end performance, boosting organic traffic and reducing load times.</li>
        <li>Built and migrated key backend services, improving scalability and reliability.</li>
        <li>Implemented event-driven architecture for real-time transaction processing and notifications.</li>
        <li>Optimized data retrieval, improving API response times and reducing load times by 30%.</li>
        <li>Led security audits and secured APIs for compliance with financial regulations.</li>
        <li>Integrated CI/CD workflows, reducing release times by 30% and improving system stability.</li>
        <li>Mentored junior engineers and led a cross-functional squad, increasing productivity by 25%.</li>
      </BulletList>
    </ExperienceCard>
    <ExperienceCard>
      <CompanyTitle>GE Healthcare • Software Engineer</CompanyTitle>
      <JobMeta>Sep 2016 - Feb 2019 &mdash; Chicago, IL</JobMeta>
      <BulletList>
        <li>Led the development of a real-time telemedicine platform, enhancing clinician collaboration.</li>
        <li>Built a HIPAA-compliant video and messaging system for timely care delivery.</li>
        <li>Designed secure APIs for integration with third-party medical systems.</li>
        <li>Optimized frontend performance, reducing load time by 20% and improving UX.</li>
        <li>Implemented robust authentication protocols, ensuring HIPAA compliance.</li>
      </BulletList>
    </ExperienceCard>
    <ExperienceCard>
      <CompanyTitle>Globant • Software Engineer</CompanyTitle>
      <JobMeta>Jul 2013 - Aug 2016 &mdash; San Francisco, CA</JobMeta>
      <BulletList>
        <li>Delivered scalable e-commerce solutions, improving system reliability by 40% and boosting uptime.</li>
        <li>Developed mobile-optimized web apps, increasing mobile conversions and customer experience.</li>
        <li>Built and optimized RESTful APIs for high-traffic platforms.</li>
        <li>Streamlined database performance, achieving 30% faster queries.</li>
        <li>Collaborated with product and design teams to optimize features and engagement.</li>
      </BulletList>
    </ExperienceCard>
  </Container>
);


export default Projects;
