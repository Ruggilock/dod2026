import Link from "next/link";

const sponsorLevels = [
  {
    level: "Platinum",
    sponsors: [
      { name: "Sponsor 1", logo: "/logos/sponsor-1.svg" },
      { name: "Sponsor 2", logo: "/logos/sponsor-2.svg" },
    ],
    color: "border-purple-500/20",
  },
  {
    level: "Gold",
    sponsors: [
      { name: "Sponsor 3", logo: "/logos/sponsor-3.svg" },
      { name: "Sponsor 4", logo: "/logos/sponsor-4.svg" },
      { name: "Sponsor 5", logo: "/logos/sponsor-5.svg" },
    ],
    color: "border-yellow-500/20",
  },
  {
    level: "Silver",
    sponsors: [
      { name: "Sponsor 6", logo: "/logos/sponsor-6.svg" },
      { name: "Sponsor 7", logo: "/logos/sponsor-7.svg" },
      { name: "Sponsor 8", logo: "/logos/sponsor-8.svg" },
      { name: "Sponsor 9", logo: "/logos/sponsor-9.svg" },
    ],
    color: "border-gray-400/20",
  },
];

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="mx-auto max-w-6xl px-4 py-24">
      <h2 className="mb-8 text-4xl font-normal text-black">Patrocinadores</h2>
      <p className="mb-16 max-w-2xl text-lg text-black/70">
        Gracias a las empresas y comunidades que apoyan este evento y hacen posible reunir a la comunidad DevOps.
      </p>

      <div className="space-y-16">
        {sponsorLevels.map((level, levelIndex) => (
          <div key={levelIndex}>
            <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-black/60">
              {level.level}
            </h3>
            <div className={`grid grid-cols-2 gap-6 md:grid-cols-${level.sponsors.length > 3 ? 4 : level.sponsors.length}`}>
              {level.sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className={`flex aspect-[3/2] items-center justify-center rounded-lg border ${level.color} bg-white p-8 transition-all hover:shadow-md`}
                >
                  <div className="text-center font-mono text-xs text-black/40">
                    {sponsor.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-lg border border-purple-500/20 bg-purple-500/5 p-12 text-center">
        <h3 className="mb-4 text-2xl font-normal text-black">
          ¿Interesado en patrocinar?
        </h3>
        <p className="mb-6 text-black/70">
          Aumenta la visibilidad de tu marca y apoya a la comunidad DevOps en Perú.
        </p>
        <Link
          href="/patrocinios"
          className="inline-flex h-12 items-center justify-center rounded bg-black px-8 font-mono text-xs font-semibold uppercase tracking-widest text-white hover:bg-black/80"
        >
          Ver paquetes de patrocinio
          <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}
