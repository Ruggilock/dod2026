"use client";

import { useState } from "react";

export default function SpeakerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    linkedin: "",
    twitter: "",
    talkTitle: "",
    talkFormat: "",
    talkDescription: "",
    topics: "",
    experience: "",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Form data:", formData);
    setSubmitted(true);
    // Reset form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        linkedin: "",
        twitter: "",
        talkTitle: "",
        talkFormat: "",
        talkDescription: "",
        topics: "",
        experience: "",
        requirements: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-[#00ff88]/30 bg-[#00ff88]/10 p-8 text-center">
        <div className="mb-4 text-5xl">✓</div>
        <h3 className="mb-2 text-2xl font-normal text-white">
          ¡Propuesta Enviada!
        </h3>
        <p className="text-white/70">
          Gracias por tu interés. Revisaremos tu propuesta y te contactaremos
          pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
          >
            Nombre Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
          >
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="role"
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
          >
            Cargo Actual
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="linkedin"
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
          >
            LinkedIn
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            placeholder="https://linkedin.com/in/..."
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="talkTitle"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
        >
          Título de la Charla *
        </label>
        <input
          type="text"
          id="talkTitle"
          name="talkTitle"
          required
          value={formData.talkTitle}
          onChange={handleChange}
          className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="talkFormat"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
        >
          Formato *
        </label>
        <select
          id="talkFormat"
          name="talkFormat"
          required
          value={formData.talkFormat}
          onChange={handleChange}
          className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
        >
          <option value="">Selecciona un formato</option>
          <option value="charla">Charla Regular (30 min)</option>
          <option value="workshop">Workshop (90 min)</option>
          <option value="lightning">Lightning Talk (10 min)</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="talkDescription"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
        >
          Descripción de la Charla *
        </label>
        <textarea
          id="talkDescription"
          name="talkDescription"
          required
          rows={6}
          value={formData.talkDescription}
          onChange={handleChange}
          placeholder="Describe de qué tratará tu charla, qué aprenderán los asistentes..."
          className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="topics"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
        >
          Temas Principales
        </label>
        <input
          type="text"
          id="topics"
          name="topics"
          placeholder="Ej: Kubernetes, CI/CD, Terraform"
          value={formData.topics}
          onChange={handleChange}
          className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
        />
        <p className="mt-1 text-xs text-white/60">
          Separa los temas con comas
        </p>
      </div>

      <div>
        <label
          htmlFor="experience"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
        >
          Experiencia como Speaker
        </label>
        <textarea
          id="experience"
          name="experience"
          rows={4}
          value={formData.experience}
          onChange={handleChange}
          placeholder="¿Has dado charlas antes? ¿Dónde? (opcional)"
          className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="requirements"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
        >
          Requerimientos Técnicos
        </label>
        <textarea
          id="requirements"
          name="requirements"
          rows={3}
          value={formData.requirements}
          onChange={handleChange}
          placeholder="¿Necesitas algún equipo especial? (opcional)"
          className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded bg-[#00ff88] px-8 font-mono text-xs font-semibold uppercase tracking-widest text-black transition-all hover:bg-[#00ff88]/90"
        >
          Enviar Propuesta
          <span className="ml-2">→</span>
        </button>
      </div>
    </form>
  );
}
