import React from 'react';
import styled from 'styled-components';
import { FaJs, FaPython, FaPhp, FaJava, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase, FaLinux } from 'react-icons/fa';
import { SiTypescript, SiSharp, SiRubyonrails, SiGo, SiCplusplus, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiKubernetes, SiJenkins, SiGraphql, SiRedux, SiTailwindcss, SiBootstrap, SiMui, SiNextdotjs, SiDjango, SiFastapi, SiLaravel, SiSpring, SiVuedotjs, SiJest, SiCypress, SiSelenium, SiFigma, SiAdobe, SiWebpack, SiVite, SiPrometheus, SiGrafana, SiGithub, SiGitlab, SiBitbucket, SiJira, SiRedis, SiRabbitmq} from 'react-icons/si';

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

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 2rem 2.5rem;
  justify-items: center;
  align-items: center;
  margin: 2.2rem 0 0 0;
  width: 100%;
  max-width: 700px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    max-width: 100%;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem 1.2rem;
  }
`;
const IconLabel = styled.div`
  font-size: 0.91rem;
  color: #b1c8e0;
  text-align: center;
  margin-top: 0.3rem;
`;
const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const skillIcons = [
  { icon: <FaJs size={36} color="#f7e018" />, label: 'JavaScript' },
  { icon: <SiTypescript size={36} color="#3178c6" />, label: 'TypeScript' },
  { icon: <FaPython size={36} color="#3572A5" />, label: 'Python' },
  { icon: <FaPhp size={36} color="#777bb4" />, label: 'PHP' },
  { icon: <FaJava size={36} color="#e76f00" />, label: 'Java' },
  { icon: <SiSharp size={36} color="#9b4f96" />, label: 'C#' },
  { icon: <SiGo size={36} color="#00add8" />, label: 'Go' },
  { icon: <SiCplusplus size={36} color="#00599c" />, label: 'C/C++' },
  { icon: <FaHtml5 size={36} color="#e44d26" />, label: 'HTML5' },
  { icon: <FaCss3Alt size={36} color="#1572b6" />, label: 'CSS3' },
  { icon: <FaReact size={36} color="#61dafb" />, label: 'React' },
  { icon: <SiVuedotjs size={36} color="#42b883" />, label: 'Vue' },
  { icon: <SiNextdotjs size={36} color="#fff" />, label: 'Next.js' },
  { icon: <SiRedux size={36} color="#764abc" />, label: 'Redux' },
  { icon: <SiTailwindcss size={36} color="#06b6d4" />, label: 'Tailwind CSS' },
  { icon: <SiBootstrap size={36} color="#7952b3" />, label: 'Bootstrap' },
  { icon: <SiMui size={36} color="#007fff" />, label: 'Material UI' },
  { icon: <FaNodeJs size={36} color="#8cc84b" />, label: 'Node.js' },
  { icon: <SiDjango size={36} color="#092e20" />, label: 'Django' },
  { icon: <SiFastapi size={36} color="#009688" />, label: 'FastAPI' },
  { icon: <SiLaravel size={36} color="#ff2d20" />, label: 'Laravel' },
  { icon: <SiSpring size={36} color="#6db33f" />, label: 'Spring' },
  { icon: <SiRubyonrails size={36} color="#cc0000" />, label: 'Rails' },
  { icon: <FaDatabase size={36} color="#b1c8e0" />, label: 'SQL' },
  { icon: <SiMysql size={36} color="#00758f" />, label: 'MySQL' },
  { icon: <SiPostgresql size={36} color="#336791" />, label: 'PostgreSQL' },
  { icon: <SiMongodb size={36} color="#47a248" />, label: 'MongoDB' },
  { icon: <SiFirebase size={36} color="#ffcb2b" />, label: 'Firebase' },
  { icon: <FaDocker size={36} color="#2496ed" />, label: 'Docker' },
  { icon: <SiKubernetes size={36} color="#326ce5" />, label: 'Kubernetes' },
  { icon: <FaAws size={36} color="#ff9900" />, label: 'AWS' },
  { icon: <SiJenkins size={36} color="#d33833" />, label: 'Jenkins' },
  { icon: <FaGitAlt size={36} color="#f34f29" />, label: 'Git' },
  { icon: <SiGithub size={36} color="#fff" />, label: 'GitHub' },
  { icon: <SiGitlab size={36} color="#fc6d26" />, label: 'GitLab' },
  { icon: <SiBitbucket size={36} color="#2684ff" />, label: 'Bitbucket' },
  { icon: <SiJira size={36} color="#2684ff" />, label: 'Jira' },
  { icon: <SiRedis size={36} color="#d82c20" />, label: 'Redis' },
  { icon: <SiRabbitmq size={36} color="#ff6600" />, label: 'RabbitMQ' },
  { icon: <SiGraphql size={36} color="#e10098" />, label: 'GraphQL' },
  { icon: <SiJest size={36} color="#c21325" />, label: 'Jest' },
  { icon: <SiCypress size={36} color="#17202c" />, label: 'Cypress' },
  { icon: <SiSelenium size={36} color="#43b02a" />, label: 'Selenium' },
  { icon: <SiFigma size={36} color="#a259ff" />, label: 'Figma' },
  { icon: <SiAdobe size={36} color="#ff0000" />, label: 'Adobe' },
  { icon: <SiWebpack size={36} color="#8ed6fb" />, label: 'Webpack' },
  { icon: <SiVite size={36} color="#646cff" />, label: 'Vite' },
  { icon: <SiPrometheus size={36} color="#e6522c" />, label: 'Prometheus' },
  { icon: <SiGrafana size={36} color="#f46800" />, label: 'Grafana' },
  { icon: <FaLinux size={36} color="#ffd500" />, label: 'Linux' },
];

const Skills: React.FC = () => (
  <Container>
    <Title>Skills</Title>
    <IconGrid>
      {skillIcons.map(({ icon, label }) => (
        <SkillIcon key={label} title={label} aria-label={label} tabIndex={0}>
          {icon}
          <IconLabel>{label}</IconLabel>
        </SkillIcon>
      ))}
    </IconGrid>
  </Container>
);

export default Skills;

