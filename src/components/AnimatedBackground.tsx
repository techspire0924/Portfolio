import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
`;

// Abstract painting animated background: flowing fields, color gradients, and active organic movement
const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouseTarget = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  // Fast, energetic noise for actionable movement
  function noise(x: number, y: number, t: number) {
    return (
      Math.sin(x * 0.04 + t * 0.003) +
      Math.cos(y * 0.045 - t * 0.0025) +
      Math.sin((x + y) * 0.025 + t * 0.002)
    ) / 3;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d')!;

    // Smooth mouse tracking with inertia
    let lastMouse = { x: mouse.current.x, y: mouse.current.y };
    let mouseVelocity = 0;
    let lastMoveTime = Date.now();

    // Store painterly effects
    type Effect = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      t: number; // age in ms
      maxT: number;
      hue: number;
      angleOffset: number;
      bandCount: number;
      thickness: number;
      length: number;
      shapeType: 'wavy' | 'zigzag' | 'curve' | 'circle' | 'rectangle' | 'triangle' | 'star';
      color2: number;
      rotation: number;
      scale: number;
      shapeSize: number; // new, for geometric shapes
    };
    let effects: Effect[] = [];

    const onMouseMove = (e: MouseEvent) => {
      mouseTarget.current.x = e.clientX;
      mouseTarget.current.y = e.clientY;
      // Spawn multiple effects at mouse
      const shapeTypes = ['wavy','zigzag','curve','circle','rectangle','triangle','star'] as const;
      effects.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * (1.2 + Math.random() * 2.3),
        vy: (Math.random() - 0.5) * (1.2 + Math.random() * 2.3),
        t: 0,
        maxT: 2000 + Math.random() * 1000, // extremely long lifetime
        hue: 120 + Math.random() * 200,
        angleOffset: Math.random() * Math.PI * 2,
        bandCount: 4 + Math.floor(Math.random() * 5), // 4-8 bands
        thickness: 1.4 + Math.random() * 2.6, // 1.4-4px
        length: 40, // fixed very long trail for bands
        shapeSize: 30, // fixed size for geometric shapes
        shapeType: shapeTypes[Math.floor(Math.random()*shapeTypes.length)],
        color2: 160 + Math.random() * 160,
        rotation: Math.random() * Math.PI * 2,
        scale: 0.7 + Math.random() * 1.8
      });
    };
    window.addEventListener('mousemove', onMouseMove);

    // Ripple/pulse effect on click
    const onClick = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousedown', onClick);

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', onResize);

    let animationId: number;
    let lastFrame = 0;
    const FRAME_INTERVAL = 1000 / 64; // Cap at 48fps for perf

    const animate = (now = 0) => {
      if (now - lastFrame < FRAME_INTERVAL) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastFrame = now;

      // Interpolate mouse for inertia/smoothness
      mouse.current.x += (mouseTarget.current.x - mouse.current.x) * 0.18;
      mouse.current.y += (mouseTarget.current.y - mouse.current.y) * 0.18;

      // Calculate velocity for subtle energy
      const dx = mouse.current.x - lastMouse.x;
      const dy = mouse.current.y - lastMouse.y;
      mouseVelocity = Math.sqrt(dx * dx + dy * dy) * 0.1;
      lastMouse = { x: mouse.current.x, y: mouse.current.y };

      ctx.clearRect(0, 0, width, height);
      // Fill background with a soft dark blue
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#1a2236'; // <-- Change this to any color you want
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
      const t = Date.now();

      // Animate painterly effects
      effects.forEach((effect, idx) => {
        effect.t += FRAME_INTERVAL;
        effect.x += effect.vx * 1.2;
        effect.y += effect.vy * 1.2;
        // Painterly burst: each with its own style
        // Smooth fade in/out using ease
        let tNorm = effect.t / effect.maxT;
        let alpha = 1;
        if (tNorm < 0.15) {
          alpha = tNorm / 0.15; // fade in
        } else if (tNorm > 0.85) {
          alpha = (1 - tNorm) / 0.15; // fade out
        }
        alpha = Math.max(0, Math.min(1, alpha));
        // Optionally ease in/out
        alpha = alpha * alpha * (3 - 2 * alpha); // smoothstep
        // Geometric shapes
        if (effect.shapeType === 'circle') {
          ctx.save();
          ctx.globalAlpha = 0.22 * alpha;
          ctx.beginPath();
          ctx.arc(effect.x, effect.y, effect.shapeSize * effect.scale * 0.5, 0, 2 * Math.PI);
          ctx.fillStyle = `hsla(${effect.hue}, 90%, 70%, 0.38)`;
          ctx.shadowColor = `hsla(${effect.color2}, 80%, 60%, 0.18)`;
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
          ctx.restore();
        } else if (effect.shapeType === 'rectangle') {
          ctx.save();
          ctx.globalAlpha = 0.18 * alpha;
          ctx.translate(effect.x, effect.y);
          ctx.rotate(effect.rotation + t * 0.003);
          ctx.fillStyle = `hsla(${effect.hue}, 85%, 70%, 0.32)`;
          ctx.shadowColor = `hsla(${effect.color2}, 80%, 60%, 0.13)`;
          ctx.shadowBlur = 10;
          const w = effect.shapeSize * effect.scale * 0.95;
          const h = effect.shapeSize * effect.scale * 0.55;
          ctx.fillRect(-w/2, -h/2, w, h);
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
          ctx.restore();
        } else if (effect.shapeType === 'triangle') {
          ctx.save();
          ctx.globalAlpha = 0.22 * alpha;
          ctx.translate(effect.x, effect.y);
          ctx.rotate(effect.rotation + t * 0.005);
          ctx.beginPath();
          const s = effect.shapeSize * effect.scale * 0.95;
          ctx.moveTo(0, -s/2);
          ctx.lineTo(s/2, s/2);
          ctx.lineTo(-s/2, s/2);
          ctx.closePath();
          ctx.fillStyle = `hsla(${effect.hue}, 90%, 65%, 0.34)`;
          ctx.shadowColor = `hsla(${effect.color2}, 80%, 60%, 0.15)`;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
          ctx.restore();
        } else if (effect.shapeType === 'star') {
          ctx.save();
          ctx.globalAlpha = 0.23 * alpha;
          ctx.translate(effect.x, effect.y);
          ctx.rotate(effect.rotation + t * 0.005);
          ctx.beginPath();
          const spikes = 5;
          const outer = effect.shapeSize * effect.scale * 0.48;
          const inner = outer * 0.48;
          for (let i = 0; i < spikes * 2; i++) {
            const r = i % 2 === 0 ? outer : inner;
            const ang = (i / (spikes * 2)) * Math.PI * 2;
            if (i === 0) ctx.moveTo(Math.cos(ang) * r, Math.sin(ang) * r);
            else ctx.lineTo(Math.cos(ang) * r, Math.sin(ang) * r);
          }
          ctx.closePath();
          ctx.fillStyle = `hsla(${effect.hue}, 92%, 72%, 0.32)`;
          ctx.shadowColor = `hsla(${effect.color2}, 85%, 60%, 0.17)`;
          ctx.shadowBlur = 13;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
          ctx.restore();
        } else {
          // Painterly bands
          for (let i = 0; i < effect.bandCount; i++) {
            const angle = (i / effect.bandCount) * Math.PI * 2 + t * 0.002 + effect.angleOffset;
            ctx.save();
            ctx.translate(effect.x, effect.y);
            ctx.rotate(angle);
            ctx.beginPath();
            for (let r = 10; r < effect.length; r += 6) {
              let px = r, py = 0;
              const n = noise(Math.cos(angle) * r * 0.6, Math.sin(angle) * r * 0.6, t * 0.5 + i * 100 + idx * 50);
              if (effect.shapeType === 'wavy') {
                const wave = Math.sin(r * 0.13 + t * 0.002 + n * 2.2) * 7 + n * 9;
                px = r + wave;
              } else if (effect.shapeType === 'zigzag') {
                px = r + ((r % 24 < 12 ? 1 : -1) * 7 * Math.sin(t * 0.002 + n * 2.2));
                py = ((r % 18 < 9 ? 1 : -1) * 6 * Math.cos(t * 0.003 + n * 1.5));
              } else if (effect.shapeType === 'curve') {
                px = r + Math.cos(r * 0.07 + t * 0.001 + n) * 12;
                py = Math.sin(r * 0.09 + t * 0.0015 + n) * 9;
              }
              if (r === 10) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            // Blend two hues for painterly look
            const hue = effect.hue + Math.sin(i + t * 0.006) * 22;
            const hue2 = effect.color2 + Math.cos(i + t * 0.008) * 18;
            ctx.strokeStyle = `hsla(${hue}, 90%, 65%, ${0.18 * alpha})`;
            ctx.lineWidth = effect.thickness;
            ctx.shadowColor = `hsla(${hue2}, 85%, 60%, ${0.09 * alpha})`;
            ctx.shadowBlur = 8;
            ctx.stroke();
            ctx.shadowBlur = 0;
            ctx.restore();
          }
        }
        // Soft glow
        const grad = ctx.createRadialGradient(
          effect.x, effect.y, 0,
          effect.x, effect.y, effect.length * 0.8
        );
        grad.addColorStop(0, `rgba(0,173,238,${0.10 * alpha})`);
        grad.addColorStop(0.5, `rgba(255,126,95,${0.07 * alpha})`);
        grad.addColorStop(1, `rgba(35,41,70,${0.07 * alpha})`);
        ctx.globalAlpha = 0.6 * alpha;
        ctx.beginPath();
        ctx.arc(effect.x, effect.y, effect.length * 0.8, 0, 2 * Math.PI);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      // Remove expired effects
      effects = effects.filter(e => e.t < e.maxT);

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onClick);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <Container>
      <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', display: 'block' }} />
    </Container>
  );
};

export default AnimatedBackground;
