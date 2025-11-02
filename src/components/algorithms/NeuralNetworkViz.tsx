import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

interface Neuron {
  id: string;
  value: number;
  layer: number;
  position: number;
}

interface Connection {
  from: string;
  to: string;
  weight: number;
}

const NeuralNetworkViz = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [neurons, setNeurons] = useState<Neuron[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [activeConnections, setActiveConnections] = useState<string[]>([]);
  const [activeNeurons, setActiveNeurons] = useState<string[]>([]);
  const [speed, setSpeed] = useState(1000);

  // Network architecture
  const layers = [
    { size: 4, name: "Input" },
    { size: 5, name: "Hidden" },
    { size: 2, name: "Output" },
  ];

  // Initialize network
  useEffect(() => {
    initializeNetwork();
  }, []);

  // ReLU activation function
  const relu = (x: number) => Math.max(0, x);

  // Update input value
  const updateInputValue = (position: number, value: number) => {
    setNeurons((prev) =>
      prev.map((neuron) =>
        neuron.layer === 0 && neuron.position === position
          ? { ...neuron, value }
          : neuron
      )
    );
  };

  // Fixed weights matrix - example values
  const fixedWeights = {
    // Input to Hidden layer weights
    inputToHidden: [
      [0.5, -0.3, 0.2, 0.1, 0.9], // weights from input 1 to all hidden neurons
      [-0.4, 0.6, 0.1, 0.3, 0.7], // weights from input 2 to all hidden neurons
      [0.2, -0.5, 0.4, -0.2, 0.6], // weights from input 3 to all hidden neurons
      [0.1, 0.1, 0.1, 0.1, 0.2], // weights from input 4 to all hidden neurons
    ],
    // Hidden to Output layer weights
    hiddenToOutput: [
      [0.3, -0.4], // weights from hidden 1 to all output neurons
      [-0.2, 0.5], // weights from hidden 2 to all output neurons
      [0.4, 0.1], // weights from hidden 3 to all output neurons
      [-0.3, 0.2], // weights from hidden 4 to all output neurons
      [0.1, 0.1], // weights from hidden 5 to all output neurons
    ],
  };

  // Initialize network with bias nodes
  const initializeNetwork = () => {
    const newNeurons: Neuron[] = [];

    // Input layer (including bias)
    for (let i = 0; i < layers[0].size; i++) {
      newNeurons.push({
        id: `0-${i}`,
        value: 0.5,
        layer: 0,
        position: i,
      });
    }

    // Hidden layer (including bias)
    for (let i = 0; i < layers[1].size; i++) {
      newNeurons.push({
        id: `1-${i}`,
        value: 0,
        layer: 1,
        position: i,
      });
    }
    // Output layer
    for (let i = 0; i < layers[2].size; i++) {
      newNeurons.push({
        id: `2-${i}`,
        value: 0,
        layer: 2,
        position: i,
      });
    }

    // Generate connections with fixed weights
    const newConnections: Connection[] = [];

    // Input to Hidden connections
    for (let i = 0; i < layers[0].size; i++) {
      // <= to include bias
      for (let j = 0; j < layers[1].size; j++) {
        newConnections.push({
          from: `0-${i}`,
          to: `1-${j}`,
          weight: fixedWeights.inputToHidden[i][j],
        });
      }
    }

    // Hidden to Output connections
    for (let i = 0; i < layers[1].size; i++) {
      // <= to include bias
      for (let j = 0; j < layers[2].size; j++) {
        newConnections.push({
          from: `1-${i}`,
          to: `2-${j}`,
          weight: fixedWeights.hiddenToOutput[i][j],
        });
      }
    }

    setNeurons(newNeurons);
    setConnections(newConnections);
  };

  // Modified forward pass to use ReLU and include bias
  const forwardPass = async () => {
    setIsAnimating(true);
    setActiveConnections([]);
    setActiveNeurons([]);

    let currentNeurons = [...neurons];

    // Process each layer
    for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex++) {
      const currentLayerNeurons = currentNeurons.filter(
        (n) => n.layer === layerIndex
      );
      setActiveNeurons(currentLayerNeurons.map((n) => n.id));
      console.log(speed);
      await new Promise((r) => setTimeout(r, 1000000.0 / (speed * 1.0)));

      const nextLayerNeurons = currentNeurons.filter(
        (n) => n.layer === layerIndex + 1
      );

      for (const targetNeuron of nextLayerNeurons) {
        const relevantConnections = connections.filter(
          (c) => c.to === targetNeuron.id
        );

        setActiveConnections(
          relevantConnections.map((c) => `${c.from}-${c.to}`)
        );
        await new Promise((r) => setTimeout(r, 1000000.0 / (speed * 1.0)));

        // Calculate new value using ReLU activation
        const sum = relevantConnections.reduce((acc, conn) => {
          const fromNeuron = currentNeurons.find((n) => n.id === conn.from)!;
          return acc + fromNeuron.value * conn.weight;
        }, 0);

        // Update neuron value using ReLU activation
        currentNeurons = currentNeurons.map((n) =>
          n.id === targetNeuron.id ? { ...n, value: relu(sum) } : n
        );
        setNeurons(currentNeurons);
      }
    }

    setActiveNeurons(
      currentNeurons
        .filter((n) => n.layer === layers.length - 1)
        .map((n) => n.id)
    );

    await new Promise((r) => setTimeout(r, speed));
    setIsAnimating(false);
    setActiveConnections([]);
    setActiveNeurons([]);
  };

  // Reset network
  const reset = () => {
    setActiveConnections([]);
    setActiveNeurons([]);
    setIsAnimating(false);
    initializeNetwork();
  };

  return (
    // Main content wrapper with padding for navbar
    <div className="pt-20 px-4 min-h-screen bg-dark-bg">
      <div className="w-full max-w-3xl mx-auto p-6 card rounded-xl space-y-6">
        {/* Spacer for navbar */}
        <div className="h-20 flex-shrink-0"></div>

        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-neon-pink">
            Neural Network Flow
          </h3>
          <div className="flex gap-4">
            {!isAnimating ? (
              <button
                onClick={forwardPass}
                className="flex items-center gap-2 px-4 py-2 bg-neon-pink rounded-lg hover:bg-opacity-90"
              >
                <Play size={16} /> Start Forward Pass
              </button>
            ) : (
              <button
                disabled
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 rounded-lg"
              >
                <Pause size={16} /> Processing
              </button>
            )}
            <button
              onClick={reset}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-opacity-90"
            >
              <RotateCcw size={16} /> Reset Network
            </button>
          </div>
        </div>

        {/* Input Controls */}
        <div className="mb-6 p-4 bg-dark-bg/30 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-400 mb-3">
            Input Values:
          </h4>
          <div className="flex gap-4">
            {neurons
              .filter((n) => n.layer === 0)
              .map((neuron) => (
                <div key={neuron.id} className="flex-1">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={neuron.value}
                    onChange={(e) =>
                      updateInputValue(
                        neuron.position,
                        parseFloat(e.target.value)
                      )
                    }
                    className="w-full mb-2"
                    disabled={isAnimating}
                  />
                  <div className="text-center text-sm text-gray-400">
                    Input {neuron.position + 1}: {neuron.value.toFixed(2)}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="relative h-max bg-dark-bg/50 rounded-lg p-4">
          <svg className="w-full h-112">
            {/* Connections */}
            {connections.map((conn, i) => {
              const fromNeuron = neurons.find((n) => n.id === conn.from)!;
              const toNeuron = neurons.find((n) => n.id === conn.to)!;
              const startX = (fromNeuron.layer + 1) * 200;
              const startY = fromNeuron.position * 80 + 100;
              const endX = (toNeuron.layer + 1) * 200;
              const endY = toNeuron.position * 80 + 100;
              const isActive = activeConnections.includes(
                `${conn.from}-${conn.to}`
              );

              return (
                <g key={i}>
                  <line
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke={isActive ? "#ff1b6b" : "#333"}
                    strokeWidth={isActive ? "2" : "1"}
                    opacity={isActive ? "1" : "0.3"}
                    className="transition-all duration-300"
                  />
                  {isActive && (
                    <text
                      x={(startX + endX) / 2}
                      y={(startY + endY) / 2}
                      fill="#ff1b6b"
                      textAnchor="middle"
                      className="text-xs"
                    >
                      {conn.weight.toFixed(2)}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Neurons */}
            {neurons.map((neuron) => {
              const cx = (neuron.layer + 1) * 200;
              const cy = neuron.position * 80 + 100;
              const isActive = activeNeurons.includes(neuron.id);

              return (
                <g key={neuron.id}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={20}
                    fill={isActive ? "#ff1b6b" : "#1a1a1a"}
                    stroke={isActive ? "#ff1b6b" : "#333"}
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />
                  <text
                    x={cx}
                    y={cy + 5}
                    textAnchor="middle"
                    fill={isActive ? "#fff" : "#666"}
                    className="text-sm"
                  >
                    {neuron.value.toFixed(2)}
                  </text>
                </g>
              );
            })}

            {/* Layer Labels */}
            {layers.map((layer, i) => (
              <text
                key={i}
                x={(i + 1) * 200}
                y={40}
                textAnchor="middle"
                fill="#666"
                className="text-sm"
              >
                {layer.name} Layer
              </text>
            ))}
          </svg>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-gray-400 text-sm">
            Animation Speed:
            <input
              type="range"
              min="500"
              max="2000"
              value={speed}
              onChange={(e) => setSpeed(parseInt(e.target.value))}
              className="ml-2 w-32"
            />
          </div>
          <div className="text-gray-400 text-sm">
            Architecture: {layers.map((l) => l.size).join("-")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralNetworkViz;
