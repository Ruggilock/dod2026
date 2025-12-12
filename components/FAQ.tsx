"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Cuál es el costo de entrada?",
    answer: "El evento tiene diferentes tipos de entradas. La entrada general tiene un costo de $50 USD, estudiantes $25 USD y grupos corporativos tienen descuentos especiales. Early birds obtienen 30% de descuento.",
  },
  {
    question: "¿Dónde se realizará el evento?",
    answer: "El evento se llevará a cabo en la Pontificia Universidad Católica del Perú (PUCP) en Lima, Perú. Tendremos múltiples salas y espacios para charlas, talleres y networking.",
  },
  {
    question: "¿Qué incluye mi entrada?",
    answer: "Tu entrada incluye acceso a todas las charlas, workshops, coffee breaks, almuerzo ambos días, materiales del evento, certificado de participación y networking con speakers y asistentes.",
  },
  {
    question: "¿Puedo enviar una propuesta de charla?",
    answer: "¡Por supuesto! El call for proposals (CFP) está abierto hasta el 30 de marzo de 2026. Puedes enviar propuestas de charlas de 30 minutos o workshops de 90 minutos sobre DevOps, Cloud, SRE, o temas relacionados.",
  },
  {
    question: "¿Hay código de conducta?",
    answer: "Sí, tenemos un código de conducta estricto que todos los participantes deben seguir. Promovemos un ambiente inclusivo, respetuoso y seguro para todos.",
  },
  {
    question: "¿Habrá traducción o subtítulos?",
    answer: "Algunas charlas serán en español y otras en inglés. Estamos trabajando para proporcionar subtítulos en tiempo real para las charlas principales.",
  },
  {
    question: "¿Cómo puedo ser patrocinador?",
    answer: "Ofrecemos varios niveles de patrocinio. Contáctanos en sponsors@devopsdays.com para recibir nuestro paquete de patrocinio con beneficios y precios.",
  },
  {
    question: "¿Hay política de reembolso?",
    answer: "Los reembolsos completos están disponibles hasta 30 días antes del evento. Después de esa fecha, las entradas pueden ser transferidas a otra persona pero no reembolsadas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-24">
      <h2 className="mb-8 text-4xl font-normal text-black">Preguntas frecuentes</h2>
      <p className="mb-12 text-lg text-black/70">
        Respuestas sobre registro, acceso, horarios y materiales del evento.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border border-black/10 bg-white transition-all hover:border-purple-500/30"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span className="font-mono text-sm uppercase tracking-widest text-black">
                {faq.question}
              </span>
              <span className="ml-4 text-2xl text-black/40">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="border-t border-black/10 p-6 pt-4">
                <p className="text-black/70">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-purple-500/10 p-8 text-center">
        <p className="mb-4 text-lg text-black">¿Tienes más preguntas?</p>
        <a
          href="mailto:info@devopsdays.com"
          className="inline-flex items-center font-mono text-sm uppercase tracking-widest text-purple-600 hover:text-purple-700"
        >
          Contáctanos
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
}
