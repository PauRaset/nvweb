// app/page.tsx
"use client";

import Link from "next/link";

const userFeatures = [
  {
    title: "Descubre dónde pasa todo",
    description:
      "Explora eventos cerca de ti, filtrados por estilo de música, ciudad y ambiente. Sin scroll infinito de anuncios, solo planes reales.",
  },
  {
    title: "Asiste y guarda tus noches",
    description:
      "Marca a qué eventos vas con el botón Asistir y guarda tu historial de noches como si fuera tu diario de fiesta.",
  },
  {
    title: "Sube de nivel en la vida real",
    description:
      "Completa retos, verifica que has ido y desbloquea niveles, premios y ventajas exclusivas en clubs y festivales.",
  },
];

const clubFeatures = [
  {
    title: "Sube eventos en minutos",
    description:
      "Publica tus eventos en el portal de clubs de NightVibe y llega justo al público que quiere salir.",
  },
  {
    title: "Asistencia real, no solo likes",
    description:
      "Validación de asistencia con fotos, QR y retos. Sabrás quién ha venido de verdad a tu evento.",
  },
  {
    title: "Entradas y pagos integrados",
    description:
      "Gestiona la venta de entradas con Stripe y automatiza cobros y liquidaciones de forma segura.",
  },
  {
    title: "Datos y comunidad",
    description:
      "Conoce mejor a tu público: qué eventos funcionan, qué perfiles te siguen y qué recompensas activan más visitas.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Glow de fondo */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="#hero" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-500 text-xs font-bold">
              NV
            </div>
            <span className="text-sm font-semibold tracking-tight sm:text-base">
              NightVibe
            </span>
          </Link>

          <div className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#que-es" className="hover:text-white">
              Qué es
            </a>
            <a href="#users" className="hover:text-white">
              Para fiesteros
            </a>
            <a href="#clubs" className="hover:text-white">
              Para clubs
            </a>
            <a href="#roadmap" className="hover:text-white">
              Estado
            </a>
            <Link
              href="https://clubs.nightvibe.life"
              className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-200 hover:border-cyan-300 hover:bg-cyan-500/20"
            >
              Portal clubs
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16">
        {/* HERO */}
        <section
          id="hero"
          className="flex flex-col items-center gap-10 md:flex-row md:items-stretch"
        >
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>La primera red social real para la noche</span>
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Tu vida de fiesta,
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                por fin organizada
              </span>
              .
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              NightVibe conecta lo que haces de noche con una red social que
              ocurre en el mundo real: eventos, pruebas de asistencia, niveles,
              recompensas y un portal exclusivo para clubs y festivales.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#que-es"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-cyan-400/30 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Ver cómo funciona
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <Link
                href="https://clubs.nightvibe.life"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 hover:border-cyan-400/60 hover:bg-cyan-500/10"
              >
                Portal para clubs
              </Link>
            </div>

            <p className="text-xs text-white/40">
              Próximamente en iOS y Android. Estamos en fase de lanzamiento con
              clubs seleccionados.
            </p>
          </div>

          {/* Mockup móvil */}
          <div className="mt-6 flex flex-1 items-center justify-center md:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/40 via-purple-500/30 to-transparent blur-2xl" />
              <div className="relative h-[420px] w-[220px] rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-white/10 via-black/40 to-black/80 p-3 shadow-2xl shadow-cyan-500/30">
                <div className="mx-auto mb-3 h-1 w-16 rounded-full bg-white/20" />
                <div className="h-full w-full overflow-hidden rounded-3xl bg-black/80">
                  {/* Contenido "fake" de la app */}
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b border-white/10 px-3 py-3">
                      <span className="text-xs font-semibold">NightVibe</span>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">
                        Nivel 3
                      </span>
                    </div>
                    <div className="relative flex-1">
                      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-black to-black" />
                      <div className="relative h-full w-full p-3 text-[10px] text-white/80">
                        <p className="text-[11px] font-semibold">
                          Esta noche · Cerca de ti
                        </p>
                        <div className="mt-2 space-y-2">
                          <div className="rounded-2xl bg-white/5 p-2">
                            <p className="text-[10px] font-semibold">
                              Techno Glow Night
                            </p>
                            <p className="text-[9px] text-white/60">
                              Club Aurora · 00:30h
                            </p>
                            <button className="mt-1 inline-flex items-center gap-1 rounded-full bg-cyan-500/90 px-2 py-0.5 text-[9px] font-semibold text-black">
                              Asistir ✓
                            </button>
                          </div>
                          <div className="rounded-2xl bg-white/3 p-2">
                            <p className="text-[10px] font-semibold">
                              Reggaeton vs Trap
                            </p>
                            <p className="text-[9px] text-white/60">
                              Urban Hall · 01:00h
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 border-t border-white/10 pt-2">
                          <p className="text-[9px] text-white/60">
                            Desbloquea tu próximo nivel completando 2 retos esta
                            noche.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-around border-t border-white/10 bg-black/80 py-2 text-[9px] text-white/50">
                      <span className="flex flex-col items-center gap-0.5">
                        <span className="h-1 w-1 rounded-full bg-cyan-400" />
                        Feed
                      </span>
                      <span>Mapa</span>
                      <span>Niveles</span>
                      <span>Perfil</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ ES */}
        <section id="que-es" className="mt-20 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Una red social que ocurre en el mundo real.
          </h2>
          <p className="max-w-2xl text-sm text-white/70 sm:text-base">
            NightVibe no es solo una app de eventos ni solo una red social.
            Es el puente entre lo que vives de noche y tu vida digital: cada
            salida, cada club y cada nivel cuentan para construir tu historia.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Eventos reales",
                desc: "Planes verificados, organizados por clubs, promotores y festivales reales. Sin ruido.",
              },
              {
                title: "Asistencia verificable",
                desc: "Pruebas, fotos y retos que demuestran que has estado ahí. Adiós al postureo vacío.",
              },
              {
                title: "Progresión y recompensas",
                desc: "Sube de nivel y desbloquea ventajas, listas, invitaciones y recompensas exclusivas.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-white/10"
              >
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PARA USUARIOS */}
        <section id="users" className="mt-20 grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Para fiesteros que quieren algo más que subir stories.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/70 sm:text-base">
              NightVibe convierte tus noches en una progresión real: a qué
              sitios vas, qué niveles desbloqueas y qué recompensas ganas por
              ser parte de la comunidad.
            </p>

            <ol className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs">
                  1
                </span>
                <div>
                  <p className="font-semibold">Descubre eventos cerca de ti</p>
                  <p className="text-xs text-white/70">
                    Filtra por ciudad, estilo de música y vibe. Encuentra justo
                    lo que te apetece esta noche.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs">
                  2
                </span>
                <div>
                  <p className="font-semibold">
                    Marca asistencia con un solo toque
                  </p>
                  <p className="text-xs text-white/70">
                    Usa el botón Asistir para construir tu mapa de noches y
                    dejar de perder eventos que te interesan.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs">
                  3
                </span>
                <div>
                  <p className="font-semibold">
                    Sube pruebas, completa retos, sube de nivel
                  </p>
                  <p className="text-xs text-white/70">
                    Demuestra que has estado allí, completa misiones y desbloquea
                    niveles con ventajas reales en clubs y eventos.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-black/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Ventajas para usuarios
            </p>
            <div className="mt-4 space-y-3 text-sm">
              {userFeatures.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl bg-black/40 p-3 ring-1 ring-white/10"
                >
                  <p className="text-xs font-semibold text-white/90">
                    {f.title}
                  </p>
                  <p className="mt-1 text-[11px] text-white/65">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARA CLUBS */}
        <section
          id="clubs"
          className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-black to-black/90 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="md:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Para clubs, promotores y festivales
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                Llena tu sala con gente que realmente quiere estar allí.
              </h2>
              <p className="mt-3 text-sm text-cyan-50/80">
                NightVibe te da herramientas para publicar eventos, validar
                asistencia real, incentivar a tu comunidad y vender entradas sin
                fricción.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-xs text-cyan-100/80">
                {["Discotecas", "Bares musicales", "Festivales", "Ayuntamientos"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1"
                    >
                      {chip}
                    </span>
                  ),
                )}
              </div>

              <Link
                href="https://clubs.nightvibe.life"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Ir al portal de clubs
                <span>↗</span>
              </Link>
            </div>

            <div className="md:w-1/2">
              <div className="grid gap-3 sm:grid-cols-2">
                {clubFeatures.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-2xl bg-black/60 p-3 text-sm ring-1 ring-white/10"
                  >
                    <p className="text-xs font-semibold text-white">
                      {f.title}
                    </p>
                    <p className="mt-1 text-[11px] text-white/70">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ESTADO / ROADMAP */}
        <section id="roadmap" className="mt-20 space-y-5">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Estamos calentando motores.
          </h2>
          <p className="max-w-2xl text-sm text-white/70 sm:text-base">
            NightVibe está en fase de lanzamiento con clubs y ciudades
            seleccionadas. Si quieres colaborar, ser de los primeros en probar
            la app o usar NightVibe en tu sala, podemos hablar.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
              <p className="text-xs font-semibold text-white/80">
                Fase actual
              </p>
              <p className="mt-1 text-xs text-white/65">
                Integración de pagos, portal de clubs y pruebas con usuarios
                reales en distintas ciudades.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
              <p className="text-xs font-semibold text-white/80">
                Próximos pasos
              </p>
              <p className="mt-1 text-xs text-white/65">
                Lanzamiento público de la app, más ciudades, más clubs y un
                sistema de niveles y retos cada vez más profundo.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
              <p className="text-xs font-semibold text-white/80">
                Contacto
              </p>
              <p className="mt-1 text-xs text-white/65">
                Escríbenos para colaboraciones, clubs o prensa:
              </p>
              <a
                href="mailto:hello@nightvibe.life"
                className="mt-2 inline-flex text-xs font-semibold text-cyan-300 hover:text-cyan-200"
              >
                hello@nightvibe.life
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-500 text-[10px] font-bold">
              NV
            </div>
            <span>© {new Date().getFullYear()} NightVibe. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com"
              className="hover:text-white/80"
            >
              Instagram
            </a>
            <a href="https://www.tiktok.com" className="hover:text-white/80">
              TikTok
            </a>
            <a href="mailto:hello@nightvibe.life" className="hover:text-white/80">
              Contacto
            </a>
            <span className="text-white/40">nightvibe.life</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
