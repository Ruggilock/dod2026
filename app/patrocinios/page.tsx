import SponsorshipForm from "@/components/SponsorshipForm";
import Link from "next/link";

export const metadata = {
  title: "Patrocinios - DevOpsDays Lima 2026",
  description:
    "Únete como patrocinador de DevOpsDays Lima 2026. Aumenta la visibilidad de tu marca y apoya a la comunidad DevOps en Perú.",
};

const sponsorshipTiers = [
  {
    name: "Platinum",
    price: "$10,000",
    bgColor: "bg-purple-600",
    benefits: [
      "Logo prominente en todos los materiales",
      "10 entradas VIP incluidas",
      "Booth premium de 6x3 metros",
      "Charla patrocinada de 15 minutos",
      "Logo en camisetas del evento",
      "5 posts en redes sociales",
    ],
    limit: "Limited to 2 sponsors",
  },
  {
    name: "Gold",
    price: "$5,000",
    bgColor: "bg-yellow-500",
    benefits: [
      "Logo en materiales del evento",
      "6 entradas incluidas",
      "Booth de 3x3 metros",
      "Logo en página web",
      "3 posts en redes sociales",
      "Email marketing inclusion",
    ],
    limit: "Limited to 4 sponsors",
  },
  {
    name: "Silver",
    price: "$2,500",
    bgColor: "bg-gray-400",
    benefits: [
      "Logo en página web",
      "3 entradas incluidas",
      "Mesa de exhibición",
      "1 post en redes sociales",
      "Logo en pantallas del evento",
      "Material en bolsas de swag",
    ],
    limit: "Limited to 8 sponsors",
  },
];

const additionalOpportunities = [
  {
    name: "Coffee Break",
    price: "$1,500",
    bgColor: "bg-[#0b0a12]",
  },
  {
    name: "Lunch",
    price: "$3,000",
    bgColor: "bg-[#00ff88]",
    textColor: "text-black",
  },
  {
    name: "After Party",
    price: "$4,000",
    bgColor: "bg-[#0b0a12]",
  },
  {
    name: "Lanyard",
    price: "$2,000",
    bgColor: "bg-[#00ff88]",
    textColor: "text-black",
  },
];

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-[#0b0a12] pt-12 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center font-mono text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-[#00ff88]"
        >
          <span className="mr-2">←</span>
          Volver al inicio
        </Link>

        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-widest text-white/60">
            [ MORE TO EXPLORE ]
          </p>
          <h1 className="mt-6 text-5xl font-normal leading-tight md:text-6xl">
            It's a busy week
            <br />
            in Lima
          </h1>
        </div>

        {/* Paquetes de Patrocinio */}
        <section className="mt-24">
          <p className="mb-12 font-mono text-xs uppercase tracking-widest text-white/60">
            [ SPONSORSHIP PACKAGES ]
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {sponsorshipTiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-lg ${tier.bgColor} p-8 text-white transition-transform hover:scale-105`}
              >
                <h3 className="font-mono text-sm uppercase tracking-widest">
                  {tier.name}
                </h3>
                <div className="mt-4 font-mono text-5xl font-bold">{tier.price}</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-widest opacity-80">
                  {tier.limit}
                </div>
                <ul className="mt-8 space-y-3">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full rounded-lg border border-white/20 bg-white/10 py-3 font-mono text-xs uppercase tracking-widest backdrop-blur transition-colors hover:bg-white/20">
                  Apply →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Oportunidades Adicionales */}
        <section className="mt-24">
          <p className="mb-12 font-mono text-xs uppercase tracking-widest text-white/60">
            [ ADDITIONAL OPPORTUNITIES ]
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {additionalOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className={`flex items-center justify-between rounded-lg ${opportunity.bgColor} p-8 ${
                  opportunity.textColor || "text-white"
                } transition-transform hover:scale-105`}
              >
                <h3 className="font-mono text-2xl uppercase tracking-widest">
                  {opportunity.name}
                </h3>
                <div className="font-mono text-3xl font-bold">{opportunity.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-24 rounded-lg bg-[#6366f1] p-12">
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-white/80">
            [ EVENT STATS ]
          </p>
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="font-mono text-5xl font-bold">500+</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-widest text-white/60">
                Attendees
              </div>
            </div>
            <div>
              <div className="font-mono text-5xl font-bold">30+</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-widest text-white/60">
                Speakers
              </div>
            </div>
            <div>
              <div className="font-mono text-5xl font-bold">2</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-widest text-white/60">
                Days
              </div>
            </div>
            <div>
              <div className="font-mono text-5xl font-bold">15+</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-widest text-white/60">
                Hours
              </div>
            </div>
          </div>
        </section>

        {/* Why Sponsor */}
        <section className="mt-24 rounded-lg bg-[#00ff88] p-12 text-black">
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-black/60">
            [ WHY SPONSOR? ]
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-mono text-lg uppercase tracking-widest">
                🎯 Direct Reach
              </h3>
              <p className="text-black/80">
                Access to 500+ tech professionals, decision makers, and technical
                leaders.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-mono text-lg uppercase tracking-widest">
                💼 Recruitment
              </h3>
              <p className="text-black/80">
                Meet top-tier technical talent in an informal, networking-friendly
                environment.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-mono text-lg uppercase tracking-widest">
                🚀 Brand Visibility
              </h3>
              <p className="text-black/80">
                Increase brand recognition in Peru's most active DevOps community.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-mono text-lg uppercase tracking-widest">
                🤝 Community Support
              </h3>
              <p className="text-black/80">
                Demonstrate your commitment to the growth and education of the local
                tech community.
              </p>
            </div>
          </div>
        </section>

        {/* Formulario */}
        <section className="mt-24">
          <p className="mb-12 font-mono text-xs uppercase tracking-widest text-white/60">
            [ GET INVOLVED ]
          </p>
          <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur md:p-12">
            <h2 className="mb-8 text-3xl font-normal">Request Information</h2>
            <SponsorshipForm />
          </div>
        </section>

        {/* Contacto */}
        <section className="mt-16 rounded-lg border border-white/10 bg-white/5 p-12 backdrop-blur">
          <h3 className="mb-4 text-3xl font-normal">Questions?</h3>
          <p className="mb-8 text-white/70">
            Our team is available to help you choose the ideal package for your
            company.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            <a
              href="mailto:sponsors@devopsdays.com"
              className="inline-flex items-center font-mono text-sm uppercase tracking-widest text-[#00ff88] hover:text-[#00ff88]/80"
            >
              sponsors@devopsdays.com
              <span className="ml-2">→</span>
            </a>
            <a
              href="tel:+51999999999"
              className="inline-flex items-center font-mono text-sm uppercase tracking-widest text-[#00ff88] hover:text-[#00ff88]/80"
            >
              +51 999 999 999
              <span className="ml-2">→</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
