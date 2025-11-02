import React, { useState, useRef, useEffect } from "react";

interface FrequencyComponent {
  amplitude: number;
  phase: number;
}

const FourierDrawing: React.FC = () => {
  const [drawing, setDrawing] = useState<number[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [frequencies, setFrequencies] = useState<FrequencyComponent[]>([]);
  const [_, setIsAnimating] = useState(false);
  const [animationFrame, setAnimationFrame] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawingAreaRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    initializeCanvas();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const initializeCanvas = () => {
    if (!canvasRef.current || !drawingAreaRef.current) return;
    const canvas = canvasRef.current;
    const area = drawingAreaRef.current;
    canvas.width = area.clientWidth;
    canvas.height = area.clientHeight;

    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#666";
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
  };

  const startDrawing = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const y = e.clientY - rect.top;
    setDrawing([y]);
    drawWave([y]);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const y = e.clientY - rect.top;
    setDrawing((prev) => [...prev, y]);
    drawWave([...drawing, y]);
  };

  const endDrawing = () => {
    setIsDrawing(false);
    if (drawing.length > 0) {
      computeFourierTransform();
    }
  };

  const drawWave = (points: number[]) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw baseline
    ctx.strokeStyle = "#666";
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Draw wave
    if (points.length > 1) {
      ctx.strokeStyle = "#ff1b6b";
      ctx.lineWidth = 2;
      ctx.beginPath();
      points.forEach((y, i) => {
        const x = (i / (points.length - 1)) * canvas.width;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    }
  };

  const computeFourierTransform = () => {
    const centerY = canvasRef.current!.height / 2;
    const normalizedPoints = drawing.map((y) => (centerY - y) / centerY);
    const N = normalizedPoints.length;
    const freqComponents: FrequencyComponent[] = [];

    // Compute for fewer frequencies for clearer visualization
    const maxFreq = 13;

    for (let freq = 1; freq < maxFreq; freq++) {
      let real = 0;
      let imag = 0;

      for (let t = 0; t < N; t++) {
        const angle = (2 * Math.PI * freq * t) / N;
        real += normalizedPoints[t] * Math.cos(angle);
        imag -= normalizedPoints[t] * Math.sin(angle);
      }

      const amplitude = Math.sqrt(real * real + imag * imag) / N;
      const phase = Math.atan2(imag, real);
      freqComponents.push({ amplitude, phase });
    }

    setFrequencies(freqComponents);
    startAnimation();
  };

  const startAnimation = () => {
    setIsAnimating(true);
    let frame = 0;

    const animate = () => {
      setAnimationFrame(frame);
      frame = (frame + 1) % 1000;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const drawFrequencies = () => {
    if (!frequencies.length) return null;
    const svgHeight = 200;
    const timeScale = animationFrame * 0.02;
    const points = 500; // Increase points for smoother waves

    // Reconstruct original wave with proper phase shifting
    const reconstructedWave = Array.from({ length: points }, (_, i) => {
      const x = i;
      let y = 0;

      frequencies.forEach(({ amplitude, phase }, freq) => {
        // Shift the wave horizontally without stretching
        const position = (i / points) * Math.PI * 2;
        const shiftedPosition = position - timeScale;
        y += amplitude * Math.sin(freq * shiftedPosition + phase);
      });

      return [x * (90 / points), y * 50]; // Scale x to fit SVG width
    });

    // Generate individual frequency components with proper phase shifting
    const waves = frequencies.map(({ amplitude, phase }, freq) => {
      return Array.from({ length: points }, (_, i) => {
        const x = i * (90 / points);
        const position = (i / points) * Math.PI * 2;
        const y =
          amplitude *
          Math.sin((freq + 1) * position + phase - timeScale * (freq + 1)) *
          50;
        return [x, y];
      });
    });
    const allWaves = [reconstructedWave, ...waves];

    const paths = allWaves.map((wave, i) => {
      const centerY = (i + 0.5) * (svgHeight / allWaves.length);

      const d = wave
        .map(([x, y], j) => {
          const scaledY = y * 5 + 100;
          return `${j === 0 ? "M" : "L"} ${x} ${centerY + scaledY}`;
        })
        .join(" ");

      return (
        <g key={i}>
          <line
            x1="0"
            y1={centerY}
            x2="100"
            y2={centerY}
            stroke="#333"
            strokeWidth="0.5"
            strokeDasharray="2,2"
          />
          <path
            d={d}
            stroke={
              i === 0
                ? "#ff1b6b"
                : `rgba(0, 242, 255, ${1 - (i - 1) / waves.length})`
            }
            strokeWidth={i === 0 ? 2 : 1}
            fill="none"
          />
        </g>
      );
    });

    return (
      <svg
        viewBox="0 0 100 400"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100" height={svgHeight} fill="url(#grid)" />
        {paths}
      </svg>
    );
  };

  const reset = () => {
    setDrawing([]);
    setFrequencies([]);
    stopAnimation();
    initializeCanvas();
  };

  return (
    <div className="pt-20 px-4 min-h-screen bg-dark-bg">
      <div className="w-full max-w-6xl mx-auto card rounded-xl p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-neon-pink">
            Fourier Transform Drawing
          </h3>
          <div className="flex gap-4">
            <button
              onClick={reset}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-opacity-90"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div
            ref={drawingAreaRef}
            className="relative h-[400px] bg-dark-bg/50 rounded-lg overflow-hidden"
          >
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={endDrawing}
              onMouseLeave={endDrawing}
              className="w-full h-full cursor-crosshair"
            />
          </div>

          <div className="h-[400px] bg-dark-bg/50 rounded-lg overflow-hidden">
            {drawFrequencies()}
          </div>
        </div>

        <div className="text-gray-400 text-sm text-center">
          Draw a wave on the left panel to see its frequency components.
          Reconstructed wave might be different due to only using 12 sine waves.
        </div>
      </div>
    </div>
  );
};

export default FourierDrawing;
