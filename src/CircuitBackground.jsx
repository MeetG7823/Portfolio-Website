import React, { useEffect, useRef } from 'react';

export default function CircuitBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initCircuit();
    };

    window.addEventListener('resize', handleResize);

    const GRID_SIZE = 64;
    let chips = [];
    let traces = [];
    let nodes = [];
    let beams = [];

    function initCircuit() {
      chips = [];
      traces = [];
      nodes = [];
      beams = [];

      const cols = Math.ceil(width / GRID_SIZE) + 1;
      const rows = Math.ceil(height / GRID_SIZE) + 1;

      // 1. Generate Silicon Motherboard Chips (Adds depth & high-tech context)
      const numChips = Math.max(2, Math.floor((width * height) / 380000));
      for (let c = 0; c < numChips; c++) {
        const chipW = Math.floor(Math.random() * 2) + 2; // 2 to 3 grid units
        const chipH = Math.floor(Math.random() * 2) + 2;
        const startX = Math.floor(Math.random() * (cols - chipW - 2)) + 1;
        const startY = Math.floor(Math.random() * (rows - chipH - 2)) + 1;

        chips.push({
          x: startX * GRID_SIZE,
          y: startY * GRID_SIZE,
          w: chipW * GRID_SIZE,
          h: chipH * GRID_SIZE,
          label: c === 0 ? 'SOC-SYSTEM' : c === 1 ? 'GPU-CORE' : 'AI-ENGINE'
        });
      }

      // 2. Generate PCB Micro-Traces & Solder Vias
      const totalTraces = Math.floor((cols * rows) / 6);
      for (let t = 0; t < totalTraces; t++) {
        let x = Math.floor(Math.random() * cols) * GRID_SIZE;
        let y = Math.floor(Math.random() * rows) * GRID_SIZE;
        let isHorizontal = Math.random() > 0.5;
        let len = (Math.floor(Math.random() * 4) + 2) * GRID_SIZE;

        let endX = isHorizontal ? x + len : x;
        let endY = !isHorizontal ? y + len : y;

        traces.push({ x1: x, y1: y, x2: endX, y2: endY });
        nodes.push({ x, y });
        nodes.push({ x: endX, y: endY });
      }

      // 3. Spawn Initial Blue Comet Beams (12 - 15 total active beams)
      for (let i = 0; i < 14; i++) {
        spawnBeam(true);
      }
    }

    function spawnBeam(randomStart = false) {
      const isHorizontal = Math.random() > 0.5;
      const length = 70 + Math.random() * 90; // tail length
      const speed = 1.0 + Math.random() * 1.5; // comet velocity (reduced speed)

      const cols = Math.ceil(width / GRID_SIZE);
      const rows = Math.ceil(height / GRID_SIZE);

      let x, y;
      if (randomStart) {
        x = Math.floor(Math.random() * cols) * GRID_SIZE;
        y = Math.floor(Math.random() * rows) * GRID_SIZE;
      } else {
        x = isHorizontal
          ? (Math.random() > 0.5 ? -120 : width + 120)
          : Math.floor(Math.random() * cols) * GRID_SIZE;

        y = !isHorizontal
          ? (Math.random() > 0.5 ? -120 : height + 120)
          : Math.floor(Math.random() * rows) * GRID_SIZE;
      }

      const vx = isHorizontal ? (x < width / 2 ? speed : -speed) : 0;
      const vy = !isHorizontal ? (y < height / 2 ? speed : -speed) : 0;

      // Color scheme: Electric Cyan, Ice Blue, Cobalt Pulse
      const colors = ['#00f0ff', '#38bdf8', '#60a5fa', '#34d399'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      beams.push({
        x,
        y,
        vx,
        vy,
        length,
        color,
        size: 2
      });
    }

    initCircuit();

    function render() {
      ctx.clearRect(0, 0, width, height);

      // --- DRAW MOTHERBOARD CHIPS & DEPTH ---
      chips.forEach(chip => {
        // Chip body fill & subtle outline
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.fillStyle = 'rgba(15, 15, 20, 0.35)';
        ctx.beginPath();
        ctx.roundRect(chip.x + 4, chip.y + 4, chip.w - 8, chip.h - 8, 6);
        ctx.fill();
        ctx.stroke();

        // IC Pin indicators
        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
        for (let px = chip.x + 12; px < chip.x + chip.w - 10; px += 14) {
          ctx.fillRect(px, chip.y + 1, 4, 3);
          ctx.fillRect(px, chip.y + chip.h - 4, 4, 3);
        }
        for (let py = chip.y + 12; py < chip.y + chip.h - 10; py += 14) {
          ctx.fillRect(chip.x + 1, py, 3, 4);
          ctx.fillRect(chip.x + chip.w - 4, py, 3, 4);
        }

        // Chip Label & Dot
        ctx.fillStyle = 'rgba(0, 240, 255, 0.25)';
        ctx.beginPath();
        ctx.arc(chip.x + 12, chip.y + 12, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillText(chip.label, chip.x + 20, chip.y + 15);
      });

      // --- DRAW FAINT PCB TRACES & SOLDER VIAS ---
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      traces.forEach(t => {
        ctx.beginPath();
        ctx.moveTo(t.x1, t.y1);
        ctx.lineTo(t.x2, t.y2);
        ctx.stroke();
      });

      nodes.forEach(n => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- MAINTAIN BEAM POOL (~14 ACTIVE COMET BEAMS) ---
      if (beams.length < 14) {
        spawnBeam();
      }

      // --- DRAW & ANIMATE BLUE COMET CURRENT BEAMS ---
      for (let i = beams.length - 1; i >= 0; i--) {
        const b = beams[i];

        b.x += b.vx;
        b.y += b.vy;

        // Tail calculation
        const tailX = b.x - (b.vx !== 0 ? Math.sign(b.vx) * b.length : 0);
        const tailY = b.y - (b.vy !== 0 ? Math.sign(b.vy) * b.length : 0);

        // Fading comet trail gradient
        const gradient = ctx.createLinearGradient(tailX, tailY, b.x, b.y);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(0.65, `${b.color}35`);
        gradient.addColorStop(1, b.color);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = b.size;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        // Glowing comet head
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 8;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset for performance

        // Recycle offscreen beams
        if (
          (b.vx > 0 && b.x > width + 180) ||
          (b.vx < 0 && b.x < -180) ||
          (b.vy > 0 && b.y > height + 180) ||
          (b.vy < 0 && b.y < -180)
        ) {
          beams.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
}
