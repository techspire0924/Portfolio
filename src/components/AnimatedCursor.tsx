import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Cursor = styled.div<{x: number, y: number}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  pointer-events: none;
  background: rgba(0, 173, 238, 0.18);
  border: 2px solid #00adee;
  transform: translate(-50%, -50%);
  transition: background 0.2s, border 0.2s;
  z-index: 9999;
`;

const AnimatedCursor: React.FC = () => {
  const [pos, setPos] = React.useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const requestRef = useRef(0);
  const mouse = useRef(pos);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      setPos((prev) => {
        const dx = mouse.current.x - prev.x;
        const dy = mouse.current.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return <Cursor x={pos.x} y={pos.y} style={{ left: pos.x, top: pos.y }} />;
};

export default AnimatedCursor;
