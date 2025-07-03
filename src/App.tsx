import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import AnimatedBackground from './components/AnimatedBackground.tsx';
import Header from './components/Header.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Skills from './pages/Skills.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import Chat from './pages/Chat.tsx';
import GlobalStyle from './styles/GlobalStyle.tsx';

const MainContainer = styled.main`
  padding-top: 4.5rem;
  min-height: 85vh;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <AnimatedBackground />
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainContainer>
    </Router>
  </>
);

export default App;
