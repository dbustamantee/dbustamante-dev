"use client";

import { useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  label: string;
  delay: number;
}

const NODES: Node[] = [
  { id: 0, x: 50, y: 20, label: "Gateway", delay: 0 },
  { id: 1, x: 20, y: 50, label: "Sensor-01", delay: 400 },
  { id: 2, x: 50, y: 55, label: "Valve-03", delay: 600 },
  { id: 3, x: 80, y: 45, label: "Sensor-07", delay: 800 },
  { id: 4, x: 35, y: 80, label: "Flow-02", delay: 1000 },
  { id: 5, x: 65, y: 82, label: "Sensor-12", delay: 1200 },
];

const EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [2, 4], [2, 5],
];

export function IoTPing() {
  const [activeNode, setActiveNode] = useState(-1);
  const [pingLog, setPingLog] = useState<string[]>([]);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      const node = NODES[idx % NODES.length];
      setActiveNode(node.id);
      const latency = Math.floor(Math.random() * 40 + 12);
      setPingLog((prev) => [
        `ping ${node.label} → ${latency}ms ✓`,
        ...prev.slice(0, 4),
      ]);
      idx++;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-border bg-[#0d1117] shadow-xl">
      <div className="border-b border-white/10 px-4 py-2">
        <span className="text-xs font-medium text-gray-400">IoT Network — Live Ping Simulation</span>
      </div>
      <div className="flex flex-col gap-4 p-4 sm:flex-row">
        {/* Network visualization */}
        <div className="relative h-48 flex-1">
          {/* Edges */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {EDGES.map(([from, to]) => (
              <line
                key={`${from}-${to}`}
                x1={NODES[from].x}
                y1={NODES[from].y}
                x2={NODES[to].x}
                y2={NODES[to].y}
                stroke="rgba(74,222,128,0.2)"
                strokeWidth="0.5"
              />
            ))}
          </svg>
          {/* Nodes */}
          {NODES.map((node) => (
            <div
              key={node.id}
              className="absolute flex flex-col items-center"
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <span
                className={`block h-3 w-3 rounded-full border transition-all duration-300 ${
                  activeNode === node.id
                    ? "border-green-400 bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"
                    : "border-green-800 bg-green-900/50"
                }`}
              />
              <span className="mt-1 text-[9px] text-gray-500">{node.label}</span>
            </div>
          ))}
        </div>

        {/* Ping log */}
        <div className="flex-1 font-mono text-xs">
          {pingLog.map((log, i) => (
            <div
              key={i}
              className={`leading-relaxed transition-opacity duration-300 ${i === 0 ? "text-green-400" : "text-gray-500"}`}
            >
              {log}
            </div>
          ))}
          {pingLog.length === 0 && (
            <span className="text-gray-600">Initializing network scan...</span>
          )}
        </div>
      </div>
    </div>
  );
}
