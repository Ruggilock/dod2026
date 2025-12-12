import Link from "next/link";

const speakers = [
  {
    name: "Por confirmar",
    role: "Senior DevOps Engineer",
    company: "Tech Company",
  },
  {
    name: "Por confirmar",
    role: "Cloud Architect",
    company: "Cloud Services",
  },
  {
    name: "Por confirmar",
    role: "SRE Lead",
    company: "Platform Team",
  },
  {
    name: "Por confirmar",
    role: "Infrastructure Engineer",
    company: "Startup",
  },
];

export default function Speakers() {
  return (
    <section id="ponentes" className="mx-auto max-w-6xl px-4 py-24">
      <h2 className="mb-8 text-4xl font-normal text-black">Ponentes</h2>
      <p className="mb-12 max-w-2xl text-lg text-black/70">
        Conoce a quienes lideran las conversaciones sobre prácticas modernas de entrega continua y confiabilidad.
      </p>

      <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="group rounded-lg border border-black/10 bg-white p-6 transition-all hover:border-purple-500/30 hover:shadow-lg"
          >
            <div className="mb-4 aspect-square overflow-hidden rounded bg-gradient-to-br from-purple-200 to-purple-400">
              <div className="flex h-full items-center justify-center font-mono text-xs text-black/40">
                Photo
              </div>
            </div>
            <h3 className="font-mono text-sm uppercase tracking-widest text-black">
              {speaker.name}
            </h3>
            <p className="mt-2 text-sm text-black/60">{speaker.role}</p>
            <p className="text-sm text-black/40">{speaker.company}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/ponentes"
          className="inline-flex h-12 items-center justify-center rounded bg-black px-8 font-mono text-xs font-semibold uppercase tracking-widest text-white hover:bg-black/80"
        >
          Postular como ponente
          <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}
