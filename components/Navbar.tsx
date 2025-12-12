"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#resumen", label: "Resumen" },
  { href: "#ponentes", label: "Ponentes" },
  { href: "#agenda", label: "Agenda" },
  { href: "#participa", label: "Participa" },
  { href: "#faq", label: "FAQ" },
  { href: "#patrocinadores", label: "Patrocinadores" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-purple-500/10 bg-[#0b0a12]/80 backdrop-blur">
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="inline-flex h-7 w-7 flex-col items-center justify-center gap-1 rounded text-purple-300 hover:text-white md:hidden"
          >
            <span className="block h-0.5 w-4 bg-current transition-all" />
            <span className="block h-0.5 w-4 bg-current transition-all" />
            <span className="block h-0.5 w-4 bg-current transition-all" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/next.svg"
              alt="DevOpsDays Logo"
              width={18}
              height={18}
              className="opacity-90 dark:invert"
            />
            <span className="font-mono text-xs uppercase tracking-widest text-purple-200">
              DevOpsDays
            </span>
          </Link>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-zinc-100 transition-colors hover:text-purple-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#register"
            className="rounded bg-purple-500 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-widest text-black transition-colors hover:bg-purple-400"
          >
            Registro
          </Link>
        </div>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="flex flex-col gap-2 border-t border-purple-500/10 bg-[#0b0a12] px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-widest text-zinc-300 transition-colors hover:text-purple-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#register"
              onClick={() => setOpen(false)}
              className="font-mono text-xs uppercase tracking-widest text-purple-200 transition-colors hover:text-purple-300"
            >
              Registro
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
