import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const HeroSection = styled(Container)`
  min-height: 68vh;
  background: linear-gradient(120deg, #0f2027 60%, #2c5364 100%);
  color: #fff;
  text-align: center;
  border-radius: 32px;
  box-shadow: 0 8px 44px rgba(0,0,0,0.23);
`;

const Name = styled(motion.h1)`
  font-size: 3.1rem;
  font-weight: 900;
  margin-bottom: 1.1rem;
  letter-spacing: 0.06em;
  background: linear-gradient(90deg, #00adee 40%, #ff7e5f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.55rem;
  color: #e0e0e0;
  margin-bottom: 2.1rem;
`;

const CallToAction = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.7rem;
  background: #00adee;
  color: #fff;
  border-radius: 2.1rem;
  font-weight: 700;
  font-size: 1.13rem;
  text-decoration: none;
  box-shadow: 0 2px 18px rgba(0,173,238,0.18);
  transition: background 0.18s, color 0.18s, transform 0.18s;
  margin-top: 1.6rem;
  &:hover {
    background: #ff7e5f;
    color: #222;
    transform: scale(1.06);
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.7rem;
  margin-bottom: 1.6rem;
`;

const InfoItem = styled.div`
  font-size: 1.14rem;
  color: #b8c1ec;
`;

const SkillList = styled.ul`
  columns: 2;
  column-gap: 2.5rem;
  list-style: disc inside;
  margin: 0 0 1.5rem 0;
  padding: 0;
  font-size: 1.04rem;
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

const Home: React.FC = () => (
  <>
    {/* HERO / SUMMARY */}
    <HeroSection id="home">
      <Name
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Kevin Wang
      </Name>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Senior Software Engineer
      </Subtitle>
      <InfoRow>
        <InfoItem>kevin.yw.tech@gmail.com</InfoItem>
        <InfoItem>(689) 264-8831</InfoItem>
      </InfoRow>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ maxWidth: 700, fontSize: '1.15rem', color: '#e0e0e0', margin: '0 auto' }}
      >
        Experienced Senior Full-Stack Engineer with 11+ years of expertise in developing scalable, high-performance solutions across fintech, healthcare, and e-commerce. Proven ability to optimize system performance, lead complex technical projects, and deliver business-critical applications that drive growth. Passionate about solving real-world challenges and building innovative technology in fast-paced startup environments.
      </motion.p>
      <CallToAction
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        href="#contact"
      >
        Contact Me
      </CallToAction>
    </HeroSection>


  </>
);

export default Home;
