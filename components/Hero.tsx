import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-3rem)] flex-col px-4 pt-12 text-black">
      <div className="mx-auto my-10 max-w-6xl flex-1">
        <h1 className="font-mono uppercase leading-none tracking-[-0.03em] text-[16vw] sm:text-[10rem]">
          DOD-Lima
        </h1>

        <div className="mt-10 grid grid-cols-2 gap-8 text-[20px] font-mono uppercase text-zinc-700">
          <div className="space-y-1">
            <div>Agosto 25-26</div>
            <div>2026</div>
          </div>
          <div className="space-y-1 text-right">
            <div>Lima</div>
            <div>Perú</div>
          </div>
        </div>

        <div className="mt-8 text-[15px] font-mono uppercase text-zinc-600">
          Pontificia Universidad Católica del Perú
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl pb-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            id="register"
            href="#register"
            className="inline-flex h-12 items-center justify-center rounded bg-purple-500 px-6 font-mono text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-purple-600"
          >
            Registrarse
            <span className="ml-2">→</span>
          </Link>
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded border border-black/20 px-6 font-mono text-xs uppercase tracking-widest text-black transition-all hover:bg-black/5"
          >
            Invita a un amigo
            <span className="ml-2">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
