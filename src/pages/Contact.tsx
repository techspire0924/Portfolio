import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  max-width: 500px;
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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin-top: 1.2rem;
`;

const StyledInput = styled.input`
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: none;
  background: #232946;
  color: #fff;
  font-size: 1rem;
`;

const StyledTextArea = styled.textarea`
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: none;
  background: #232946;
  color: #fff;
  font-size: 1rem;
  min-height: 120px;
`;

const StyledButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: #00adee;
  color: #fff;
  font-weight: 700;
  font-size: 1.08rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #ff7e5f;
  }
`;

const Contact: React.FC = () => (
  <Container>
    <Title>Contact Me</Title>
    <p style={{fontSize:'1.1rem',color:'#b8c1ec'}}>Want to discuss a project, opportunity, or just say hello? Fill out the form below and I'll get back to you soon!</p>
    <StyledForm>
      <label htmlFor="name">Name:</label>
      <StyledInput type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <StyledInput type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <StyledTextArea id="message" name="message" required />

      <StyledButton type="submit">Send</StyledButton>
    </StyledForm>
  </Container>
);

export default Contact;
