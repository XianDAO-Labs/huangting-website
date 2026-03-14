import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  life: number;
  maxLife: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3 - 0.1,
      size: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.6 + 0.1,
      hue: Math.random() > 0.7 ? 75 : Math.random() > 0.5 ? 175 : 265,
      life: 0,
      maxLife: Math.random() * 300 + 150,
    });

    for (let i = 0; i < 80; i++) {
      const p = createParticle();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        if (p.life > p.maxLife) {
          particles[i] = createParticle();
          return;
        }

        const lifeRatio = p.life / p.maxLife;
        const fade = lifeRatio < 0.1
          ? lifeRatio / 0.1
          : lifeRatio > 0.8
          ? (1 - lifeRatio) / 0.2
          : 1;

        const alpha = p.opacity * fade;

        // Draw glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        if (p.hue === 75) {
          gradient.addColorStop(0, `rgba(220, 170, 60, ${alpha})`);
          gradient.addColorStop(1, `rgba(220, 170, 60, 0)`);
        } else if (p.hue === 175) {
          gradient.addColorStop(0, `rgba(80, 200, 160, ${alpha * 0.7})`);
          gradient.addColorStop(1, `rgba(80, 200, 160, 0)`);
        } else {
          gradient.addColorStop(0, `rgba(120, 140, 220, ${alpha * 0.5})`);
          gradient.addColorStop(1, `rgba(120, 140, 220, 0)`);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        if (p.hue === 75) {
          ctx.fillStyle = `rgba(240, 200, 100, ${alpha})`;
        } else if (p.hue === 175) {
          ctx.fillStyle = `rgba(100, 220, 180, ${alpha * 0.8})`;
        } else {
          ctx.fillStyle = `rgba(160, 180, 255, ${alpha * 0.5})`;
        }
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.45 }}
    />
  );
}
