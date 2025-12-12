import Link from "next/link";

const ways = [
  {
    title: "Voluntario",
    description: "Ayuda a organizar y hacer que el evento sea un éxito. Únete al equipo de voluntarios.",
    icon: "🤝",
    link: "#participa",
  },
  {
    title: "Ponente",
    description: "Comparte tu experiencia y conocimientos. Envía tu propuesta de charla.",
    icon: "🎤",
    link: "/ponentes",
  },
  {
    title: "Patrocinador",
    description: "Apoya a la comunidad DevOps y aumenta la visibilidad de tu marca.",
    icon: "💼",
    link: "/patrocinios",
  },
  {
    title: "Asistente",
    description: "Participa en charlas, talleres y networking. Registra tu entrada ahora.",
    icon: "🎟️",
    link: "#register",
  },
];

export default function Participate() {
  return (
    <section id="participa" className="mx-auto max-w-6xl px-4 py-24">
      <h2 className="mb-8 text-4xl font-normal text-black">Participa</h2>
      <p className="mb-12 max-w-2xl text-lg text-black/70">
        Únete como voluntario, envía propuestas de charlas o ayuda a organizar sesiones.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {ways.map((way, index) => (
          <Link
            key={index}
            href={way.link}
            className="group rounded-lg border border-black/10 bg-white p-8 transition-all hover:border-purple-500/30 hover:shadow-lg"
          >
            <div className="mb-4 text-5xl">{way.icon}</div>
            <h3 className="mb-3 font-mono text-lg uppercase tracking-widest text-black">
              {way.title}
            </h3>
            <p className="mb-4 text-black/70">{way.description}</p>
            <span className="inline-flex items-center font-mono text-xs uppercase tracking-widest text-purple-600 group-hover:text-purple-700">
              Más información
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
