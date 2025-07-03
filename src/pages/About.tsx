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

const EducationSection = styled(Container)`
  margin-top: 2rem;
  padding-top: 2.2rem;
  padding-bottom: 1.7rem;
`;

const About: React.FC = () => (
  <>
    <Container>
      <Title>About Me</Title>
      <p style={{fontSize:'1.15rem',marginBottom:'1.2rem'}}>I'm Kevin Wang, a Senior Software Engineer based in Orlando, FL with 11+ years of experience in fintech, healthcare, and e-commerce. I specialize in building scalable, high-performance solutions and leading technical projects from concept to launch.</p>
      <p style={{marginBottom:'1.2rem'}}>I thrive in fast-paced startup environments, love solving real-world challenges, and am passionate about optimizing system performance and delivering business-critical applications that drive growth.</p>
      <ul style={{margin:'1.2rem 0 0 1.2rem',color:'#b8c1ec',fontSize:'1.08rem'}}>
        <li>Driven by curiosity and a love for technology</li>
        <li>Dedicated to clean, maintainable code and scalable architecture</li>
        <li>Enjoy mentoring, collaborating, and continuous learning</li>
      </ul>
    </Container>
  </>
);

export default About;