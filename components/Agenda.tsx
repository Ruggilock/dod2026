"use client";

import { useState } from "react";

const schedule = {
  day1: [
    { time: "08:00 - 09:00", title: "Registro y Café", type: "social" },
    { time: "09:00 - 09:30", title: "Apertura e Introducción", type: "keynote" },
    { time: "09:30 - 10:15", title: "Keynote: El Futuro de DevOps", speaker: "Por confirmar", type: "talk" },
    { time: "10:15 - 10:30", title: "Coffee Break", type: "break" },
    { time: "10:30 - 11:15", title: "Infrastructure as Code en la Práctica", speaker: "Por confirmar", type: "talk" },
    { time: "11:15 - 12:00", title: "CI/CD: De la Teoría a la Implementación", speaker: "Por confirmar", type: "talk" },
    { time: "12:00 - 13:00", title: "Almuerzo", type: "social" },
    { time: "13:00 - 13:45", title: "Workshop: Kubernetes Básico", speaker: "Por confirmar", type: "workshop" },
    { time: "13:45 - 14:30", title: "Observabilidad y Monitoreo Moderno", speaker: "Por confirmar", type: "talk" },
    { time: "14:30 - 14:45", title: "Coffee Break", type: "break" },
    { time: "14:45 - 15:30", title: "Panel: Cultura DevOps en Latinoamérica", type: "panel" },
    { time: "15:30 - 16:00", title: "Networking y Cierre del Día 1", type: "social" },
  ],
  day2: [
    { time: "08:00 - 09:00", title: "Café de Bienvenida", type: "social" },
    { time: "09:00 - 09:45", title: "Site Reliability Engineering en Producción", speaker: "Por confirmar", type: "talk" },
    { time: "09:45 - 10:30", title: "Seguridad en DevOps (DevSecOps)", speaker: "Por confirmar", type: "talk" },
    { time: "10:30 - 10:45", title: "Coffee Break", type: "break" },
    { time: "10:45 - 11:30", title: "Workshop: Terraform Avanzado", speaker: "Por confirmar", type: "workshop" },
    { time: "11:30 - 12:15", title: "Cloud Native: Arquitecturas del Futuro", speaker: "Por confirmar", type: "talk" },
    { time: "12:15 - 13:15", title: "Almuerzo", type: "social" },
    { time: "13:15 - 14:00", title: "Casos de Éxito: DevOps en Empresas Peruanas", type: "panel" },
    { time: "14:00 - 14:45", title: "Automatización y AI en DevOps", speaker: "Por confirmar", type: "talk" },
    { time: "14:45 - 15:00", title: "Coffee Break", type: "break" },
    { time: "15:00 - 15:30", title: "Charlas Lightning", type: "talk" },
    { time: "15:30 - 16:00", title: "Cierre y Networking Final", type: "social" },
  ],
};

const typeColors = {
  keynote: "bg-purple-500 text-white",
  talk: "bg-black text-white",
  workshop: "bg-blue-500 text-white",
  panel: "bg-green-600 text-white",
  break: "bg-yellow-400 text-black",
  social: "bg-pink-500 text-white",
};

export default function Agenda() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

  return (
    <section id="agenda" className="mx-auto max-w-6xl px-4 py-24">
      <h2 className="mb-8 text-4xl font-normal text-black">Agenda</h2>
      <p className="mb-12 max-w-2xl text-lg text-black/70">
        Charlas, paneles y workshops distribuidos en dos días con espacios para networking.
      </p>

      <div className="mb-8 flex gap-4">
        <button
          onClick={() => setActiveDay("day1")}
          className={`rounded px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all ${activeDay === "day1"
              ? "bg-black text-white"
              : "border border-black/20 text-black hover:bg-black/5"
            }`}
        >
          Día 1 - Agosto 25
        </button>
        <button
          onClick={() => setActiveDay("day2")}
          className={`rounded px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all ${activeDay === "day2"
              ? "bg-black text-white"
              : "border border-black/20 text-black hover:bg-black/5"
            }`}
        >
          Día 2 - Agosto 26
        </button>
      </div>

      <div className="space-y-4">
        {schedule[activeDay].map((item, index) => (
          <div
            key={index}
            className="rounded-lg border border-black/10 bg-white p-6 transition-all hover:border-purple-500/30 hover:shadow-md"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-mono text-sm text-white/60">{item.time}</span>
                  <span className={`rounded px-2 py-1 font-mono text-xs uppercase ${typeColors[item.type as keyof typeof typeColors]}`}>
                    {item.type}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                {item.speaker && (
                  <p className="mt-1 text-sm text-white/60">por {item.speaker}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
