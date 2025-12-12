"use client";

import { useState } from "react";

export default function SponsorshipForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    tier: "",
    additionalOpportunities: [] as string[],
    employees: "",
    message: "",
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      additionalOpportunities: e.target.checked
        ? [...formData.additionalOpportunities, value]
        : formData.additionalOpportunities.filter((item) => item !== value),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Sponsorship form data:", formData);
    setSubmitted(true);
    // Reset form
    setTimeout(() => {
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        website: "",
        tier: "",
        additionalOpportunities: [],
        employees: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-[#00ff88]/30 bg-[#00ff88]/10 p-8 text-center">
        <div className="mb-4 text-5xl">✓</div>
        <h3 className="mb-2 text-2xl font-normal text-white">
          ¡Solicitud Enviada!
        </h3>
        <p className="text-white/70">
          Gracias por tu interés. Nuestro equipo se pondrá en contacto contigo en
          24-48 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="companyName"
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
          >
            Nombre de la Empresa *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contactName"
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
          >
            Nombre de Contacto *
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            required
            value={formData.contactName}
            onChange={handleChange}
            className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
          >
            Email Corporativo *
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
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="website"
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
          >
            Sitio Web
          </label>
          <input
            type="url"
            id="website"
            name="website"
            placeholder="https://..."
            value={formData.website}
            onChange={handleChange}
            className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="employees"
            className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
          >
            Tamaño de la Empresa
          </label>
          <select
            id="employees"
            name="employees"
            value={formData.employees}
            onChange={handleChange}
            className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
          >
            <option value="">Selecciona</option>
            <option value="1-10">1-10 empleados</option>
            <option value="11-50">11-50 empleados</option>
            <option value="51-200">51-200 empleados</option>
            <option value="201-500">201-500 empleados</option>
            <option value="501+">501+ empleados</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="tier"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
        >
          Paquete de Interés *
        </label>
        <select
          id="tier"
          name="tier"
          required
          value={formData.tier}
          onChange={handleChange}
          className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
        >
          <option value="">Selecciona un paquete</option>
          <option value="platinum">Platinum - $10,000 USD</option>
          <option value="gold">Gold - $5,000 USD</option>
          <option value="silver">Silver - $2,500 USD</option>
          <option value="custom">Paquete Personalizado</option>
        </select>
      </div>

      <div>
        <label className="mb-3 block font-mono text-xs uppercase tracking-widest text-white/80">
          Oportunidades Adicionales
        </label>
        <div className="space-y-2">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              value="coffee"
              checked={formData.additionalOpportunities.includes("coffee")}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-white/20 bg-white/10 text-[#00ff88] focus:ring-[#00ff88]"
            />
            <span className="text-sm text-white/70">
              Coffee Break - $1,500 USD
            </span>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              value="lunch"
              checked={formData.additionalOpportunities.includes("lunch")}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-white/20 bg-white/10 text-[#00ff88] focus:ring-[#00ff88]"
            />
            <span className="text-sm text-white/70">Almuerzo - $3,000 USD</span>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              value="afterparty"
              checked={formData.additionalOpportunities.includes("afterparty")}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-white/20 bg-white/10 text-[#00ff88] focus:ring-[#00ff88]"
            />
            <span className="text-sm text-white/70">
              After Party - $4,000 USD
            </span>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              value="lanyard"
              checked={formData.additionalOpportunities.includes("lanyard")}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-white/20 bg-white/10 text-[#00ff88] focus:ring-[#00ff88]"
            />
            <span className="text-sm text-white/70">Lanyard - $2,000 USD</span>
          </label>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/80"
        >
          Mensaje / Consultas
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntanos sobre tus objetivos, preguntas o necesidades específicas..."
          className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#00ff88] focus:outline-none"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded bg-[#00ff88] px-8 font-mono text-xs font-semibold uppercase tracking-widest text-black transition-all hover:bg-[#00ff88]/90"
        >
          Solicitar Información
          <span className="ml-2">→</span>
        </button>
      </div>
    </form>
  );
}
