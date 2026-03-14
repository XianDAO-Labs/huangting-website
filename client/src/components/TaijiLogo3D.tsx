/**
 * 3D太极Logo组件
 * 参考：立体球形太极图，金色阴鱼发光，石质阳鱼，整体旋转
 * 实现：CSS 3D transform + SVG渐变 + 动态光晕
 */
import { useEffect, useRef } from "react";

interface TaijiLogo3DProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function TaijiLogo3D({ size = 40, className = "", style = {} }: TaijiLogo3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const R = size * 0.44;

    function drawFrame(angle: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);

      // Outer glow
      const glowGrad = ctx.createRadialGradient(0, 0, R * 0.6, 0, 0, R * 1.4);
      glowGrad.addColorStop(0, "oklch(0.78 0.14 75 / 0.15)");
      glowGrad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(0, 0, R * 1.4, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // --- DARK half (top, stone/silver) ---
      ctx.beginPath();
      ctx.arc(0, 0, R, Math.PI, 0); // top semicircle
      ctx.arc(0, -R / 2, R / 2, 0, Math.PI); // inner top bump (dark)
      ctx.arc(0, R / 2, R / 2, Math.PI, 0); // inner bottom bump (dark)
      ctx.closePath();
      const darkGrad = ctx.createRadialGradient(-R * 0.2, -R * 0.3, R * 0.05, 0, 0, R);
      darkGrad.addColorStop(0, "#c8c8d8");
      darkGrad.addColorStop(0.4, "#8890a0");
      darkGrad.addColorStop(0.8, "#4a5060");
      darkGrad.addColorStop(1, "#2a2e38");
      ctx.fillStyle = darkGrad;
      ctx.fill();

      // Dark half rim highlight (3D edge)
      ctx.beginPath();
      ctx.arc(0, 0, R, Math.PI, 0);
      ctx.strokeStyle = "rgba(200,210,230,0.25)";
      ctx.lineWidth = size * 0.012;
      ctx.stroke();

      // --- GOLD half (bottom, glowing) ---
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, Math.PI); // bottom semicircle
      ctx.arc(0, R / 2, R / 2, Math.PI, 0); // inner bottom bump (gold)
      ctx.arc(0, -R / 2, R / 2, 0, Math.PI); // inner top bump (gold)
      ctx.closePath();
      const goldGrad = ctx.createRadialGradient(R * 0.1, R * 0.3, R * 0.05, 0, R * 0.1, R);
      goldGrad.addColorStop(0, "#fff8d0");
      goldGrad.addColorStop(0.2, "#ffd84a");
      goldGrad.addColorStop(0.5, "#e8a800");
      goldGrad.addColorStop(0.85, "#b87800");
      goldGrad.addColorStop(1, "#7a4a00");
      ctx.fillStyle = goldGrad;
      ctx.fill();

      // Gold glow overlay
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, Math.PI);
      ctx.arc(0, R / 2, R / 2, Math.PI, 0);
      ctx.arc(0, -R / 2, R / 2, 0, Math.PI);
      ctx.closePath();
      const glowOverlay = ctx.createRadialGradient(0, R * 0.2, 0, 0, R * 0.2, R * 0.7);
      glowOverlay.addColorStop(0, "rgba(255,220,80,0.35)");
      glowOverlay.addColorStop(1, "transparent");
      ctx.fillStyle = glowOverlay;
      ctx.fill();

      // --- Small dot: dark dot in gold half ---
      ctx.beginPath();
      ctx.arc(0, R / 2, R * 0.14, 0, Math.PI * 2);
      const dotDarkGrad = ctx.createRadialGradient(-R * 0.02, R / 2 - R * 0.04, R * 0.01, 0, R / 2, R * 0.14);
      dotDarkGrad.addColorStop(0, "#b0b8c8");
      dotDarkGrad.addColorStop(1, "#2a2e38");
      ctx.fillStyle = dotDarkGrad;
      ctx.fill();

      // --- Small dot: gold dot in dark half ---
      ctx.beginPath();
      ctx.arc(0, -R / 2, R * 0.14, 0, Math.PI * 2);
      const dotGoldGrad = ctx.createRadialGradient(-R * 0.02, -R / 2 - R * 0.04, R * 0.01, 0, -R / 2, R * 0.14);
      dotGoldGrad.addColorStop(0, "#fff8d0");
      dotGoldGrad.addColorStop(0.4, "#ffd84a");
      dotGoldGrad.addColorStop(1, "#b87800");
      ctx.fillStyle = dotGoldGrad;
      ctx.fill();

      // Outer ring
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(220,180,80,0.3)";
      ctx.lineWidth = size * 0.018;
      ctx.stroke();

      // 3D perspective tilt — ellipse overlay for depth
      const tiltGrad = ctx.createLinearGradient(-R, -R * 0.3, R, R * 0.3);
      tiltGrad.addColorStop(0, "rgba(255,255,255,0.06)");
      tiltGrad.addColorStop(0.5, "transparent");
      tiltGrad.addColorStop(1, "rgba(0,0,0,0.12)");
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, Math.PI * 2);
      ctx.fillStyle = tiltGrad;
      ctx.fill();

      ctx.restore();
    }

    function animate() {
      angleRef.current += 0.008;
      drawFrame(angleRef.current);
      animRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
      style={{
        width: size,
        height: size,
        filter: "drop-shadow(0 0 6px rgba(220,170,40,0.5))",
        ...style,
      }}
    />
  );
}
