export default function Home() {
  const stack = ["Python", "AWS", "React", "SQL", "Docker"];

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EDF1F6] px-8 py-16">
      <div className="flex w-full max-w-4xl items-center gap-16">
        <div className="flex-1">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2E9C7B]">
            Backend &amp; Cloud Engineer
          </p>

          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-[#1E2A3A] sm:text-5xl">
            Jeremy Voegeli
          </h1>

          {/* Cadence ruler divider */}
          <div className="my-6 flex items-end gap-[3px]" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="bg-[#2E9C7B]"
                style={{
                  width: "2px",
                  height: i % 4 === 0 ? "14px" : "6px",
                  opacity: i % 4 === 0 ? 1 : 0.4,
                }}
              />
            ))}
          </div>

          <p className="max-w-xl font-sans text-base leading-relaxed text-[#5C6B80]">
            Hi, I&apos;m Jeremy — a 2026 graduate from the University of Connecticut
            with a B.S. in Computer Science, concentrated in software design and
            development. My focus is backend systems and cloud infrastructure.
            Outside of CS, I play and teach marching percussion, at both the
            collegiate and competitive Drum Corps level.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#5C6B80]/30 px-3 py-1 font-mono text-xs text-[#5C6B80]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hidden shrink-0 sm:block">
          <div
            className="absolute -inset-3 rounded-2xl border border-[#2E9C7B]/30"
            aria-hidden="true"
          />
          <img
            src="/Jeremy2026Portrait.jpg"
            alt="Jeremy Voegeli headshot"
            className="h-72 w-48 rounded-xl object-cover shadow-xl shadow-[#1E2A3A]/10"
          />
        </div>
      </div>
    </div>
  );
}