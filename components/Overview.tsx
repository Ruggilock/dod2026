import Image from "next/image";
import Countdown from "./Countdown";

const images = [
  { src: "/images/event-1.jpg", alt: "DevOpsDays evento anterior" },
  { src: "/images/event-2.jpg", alt: "Networking en DevOpsDays" },
  { src: "/images/event-3.jpg", alt: "Conferencias DevOpsDays" },
];

export default function Overview() {
  return (
    <section id="resumen" className="mx-auto max-w-6xl px-4 py-24">
      <div className="mb-16 flex items-start justify-between">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-black/40">
            [ BACK AGAIN ]
          </p>
          <h2 className="mt-6 text-4xl font-normal leading-tight text-black">
            Breakpoint unites founders, developers, and creators around the world to connect and discuss the latest Web3 innovations, tools, and trends.
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Anterior"
            className="flex h-10 w-10 items-center justify-center rounded border border-black/20 text-black hover:bg-black/5"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            className="flex h-10 w-10 items-center justify-center rounded border border-black/20 text-black hover:bg-black/5"
          >
            →
          </button>
        </div>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-[4/3] overflow-hidden rounded bg-gradient-to-br from-purple-300 via-green-300 to-blue-300"
          >
            {/* Placeholder para imágenes - reemplaza con tus propias imágenes */}
            <div className="flex h-full w-full items-center justify-center font-mono text-xs text-black/40">
              {image.alt}
            </div>
          </div>
        ))}
      </div>

      <Countdown />
    </section>
  );
}
