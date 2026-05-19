"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  whoami     — about me",
    "  skills     — tech stack",
    "  experience — work history",
    "  projects   — side projects",
    "  contact    — get in touch",
    "  clear      — clear terminal",
  ],
  whoami: [
    "Diego Bustamante",
    "Senior Fullstack Developer @ Wiseconn",
    "10+ years building IoT platforms on AWS",
    "Based in Chile 🇨🇱 — open to remote",
  ],
  skills: [
    "Frontend:  React, Next.js, TypeScript, Tailwind",
    "Backend:   Node.js, Java, PostgreSQL, REST APIs",
    "Cloud:     AWS Lambda, CDK, ECS, S3, SQS, Cognito",
    "IoT:       Device protocols, MQTT, DynamoDB",
    "Tooling:   Git, Docker, CI/CD, Spec-Driven AI Dev",
  ],
  experience: [
    "2022–now  Creator & Lead — Setup Platform (1,889 commits)",
    "2023–now  Core Contributor — CAT (serverless admin tool)",
    "2025      Contributor — PumaServer (IoT protocol)",
    "2017–now  Lead — App Instalador (field tech app)",
    "2016–2022 Fullstack — Dropcontrol (300K+ hectares)",
  ],
  projects: [
    "FonoApp        — speech therapy scoring tool",
    "Easy Account   — personal finance tracker",
    "dbustamante.dev — this site (Next.js 16 + Tailwind 4)",
  ],
  contact: [
    "Email:    diego.bustamante.work@gmail.com",
    "LinkedIn: linkedin.com/in/diegobustamanteescalona",
    "GitHub:   github.com/dbustamantee",
  ],
};

interface Line {
  type: "input" | "output";
  text: string;
}

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: 'Welcome! Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  function handleSubmit() {
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newLines: Line[] = [...lines, { type: "input", text: cmd }];
    setHistory((h) => [...h, cmd]);
    setHistoryIdx(-1);

    if (cmd === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    const output = COMMANDS[cmd];
    if (output) {
      output.forEach((line) => newLines.push({ type: "output", text: line }));
    } else {
      newLines.push({ type: "output", text: `command not found: ${cmd}. Try "help"` });
    }

    setLines(newLines);
    setInput("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const idx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(idx);
      setInput(history[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx === -1) return;
      const idx = historyIdx + 1;
      if (idx >= history.length) {
        setHistoryIdx(-1);
        setInput("");
      } else {
        setHistoryIdx(idx);
        setInput(history[idx]);
      }
    }
  }

  return (
    <div
      className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-border bg-[#1a1a2e] font-mono text-sm shadow-xl"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#16162a] px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-white/50">diego@portfolio ~ %</span>
      </div>

      {/* Terminal body */}
      <div className="h-64 overflow-y-auto p-4">
        {lines.map((line, i) => (
          <div key={i} className="leading-relaxed">
            {line.type === "input" ? (
              <span>
                <span className="text-green-400">❯ </span>
                <span className="text-white">{line.text}</span>
              </span>
            ) : (
              <span className="text-gray-300">{line.text}</span>
            )}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center leading-relaxed">
          <span className="text-green-400">❯ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border-none bg-transparent text-white outline-none"
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal input"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
