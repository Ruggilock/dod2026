import SpeakerForm from "@/components/SpeakerForm";
import Link from "next/link";

export const metadata = {
  title: "Postula como Ponente - DevOpsDays Lima 2026",
  description:
    "Comparte tu experiencia en DevOpsDays Lima 2026. Envía tu propuesta de charla sobre DevOps, Cloud, SRE y más.",
};

const talkFormats = [
  {
    title: "Charla Regular",
    duration: "30 minutos",
    description: "Presentación estándar con tiempo para preguntas al final.",
    bgColor: "bg-purple-500",
  },
  {
    title: "Workshop",
    duration: "90 minutos",
    description: "Sesión práctica hands-on con los asistentes.",
    bgColor: "bg-blue-500",
  },
  {
    title: "Lightning Talk",
    duration: "10 minutos",
    description: "Presentación rápida y concisa sobre un tema específico.",
    bgColor: "bg-pink-500",
  },
];

const topics = [
  "CI/CD y Automatización",
  "Infrastructure as Code",
  "Kubernetes y Contenedores",
  "Observabilidad y Monitoreo",
  "Site Reliability Engineering",
  "DevSecOps y Seguridad",
  "Cloud Native y Serverless",
  "Cultura DevOps",
  "GitOps y Control de Versiones",
  "Platform Engineering",
  "Casos de Éxito",
  "Herramientas Open Source",
];

const benefits = [
  "Entrada gratuita al evento completo",
  "Certificado de speaker",
  "Visibilidad en redes sociales y materiales del evento",
  "Networking con otros speakers y profesionales",
  "Grabación profesional de tu charla",
  "Swag exclusivo para speakers",
];

export default function SpeakersPage() {
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
            [ SPEAKERS ]
          </p>
          <h1 className="mt-6 text-5xl font-normal leading-tight md:text-6xl">
            Gathering innovators,
            <br />
            explorers, and
            <br />
            entrepreneurs
          </h1>
        </div>

        {/* Formatos de Charlas */}
        <section className="mt-24">
          <p className="mb-12 font-mono text-xs uppercase tracking-widest text-white/60">
            [ TALK FORMATS ]
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {talkFormats.map((format, index) => (
              <div
                key={index}
                className={`rounded-lg ${format.bgColor} p-8 text-white transition-transform hover:scale-105`}
              >
                <h3 className="font-mono text-sm uppercase tracking-widest">
                  {format.title}
                </h3>
                <div className="mt-4 font-mono text-4xl font-bold">
                  {format.duration}
                </div>
                <p className="mt-6 text-sm text-white/90">{format.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fechas Importantes */}
        <section className="mt-24 rounded-lg bg-[#6366f1] p-12">
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-white/80">
            [ IMPORTANT DATES ]
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-white/60">
                CFP Closes
              </div>
              <div className="mt-2 text-3xl font-bold">30 MAR 2026</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-white/60">
                Notification
              </div>
              <div className="mt-2 text-3xl font-bold">15 APR 2026</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-white/60">
                Event
              </div>
              <div className="mt-2 text-3xl font-bold">25-26 AUG 2026</div>
            </div>
          </div>
        </section>

        {/* Temas */}
        <section className="mt-24">
          <p className="mb-12 font-mono text-xs uppercase tracking-widest text-white/60">
            [ TOPICS WE'RE LOOKING FOR ]
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs uppercase tracking-widest backdrop-blur transition-colors hover:border-[#00ff88] hover:bg-white/10"
              >
                {topic}
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios */}
        <section className="mt-24 rounded-lg bg-[#00ff88] p-12 text-black">
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-black/60">
            [ SPEAKER BENEFITS ]
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="mt-1 text-2xl">✓</span>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Formulario */}
        <section className="mt-24">
          <p className="mb-12 font-mono text-xs uppercase tracking-widest text-white/60">
            [ SUBMIT YOUR PROPOSAL ]
          </p>
          <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur md:p-12">
            <SpeakerForm />
          </div>
        </section>

        {/* Contacto */}
        <section className="mt-24 rounded-lg border border-white/10 bg-white/5 p-12 backdrop-blur">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-white/60">
            [ GET INVOLVED ]
          </p>
          <h3 className="mb-4 text-3xl font-normal">Questions?</h3>
          <p className="mb-8 text-white/70">
            Contact us if you need more information about the selection process
            or have questions about your proposal.
          </p>
          <a
            href="mailto:speakers@devopsdays.com"
            className="inline-flex items-center font-mono text-sm uppercase tracking-widest text-[#00ff88] hover:text-[#00ff88]/80"
          >
            speakers@devopsdays.com
            <span className="ml-2">→</span>
          </a>
        </section>
      </div>
    </div>
  );
}
