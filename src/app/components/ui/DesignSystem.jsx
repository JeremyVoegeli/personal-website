// components/ui/DesignSystem.jsx

export function Ticks({ small = false }) {
  return (
    <div className="flex gap-[3px]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="bg-[#2E9C7B]"
          style={{
            width: "2px",
            height: small ? (i === 0 ? "7px" : "3px") : i === 0 ? "10px" : "5px",
            opacity: i === 0 ? 1 : 0.4,
          }}
        />
      ))}
    </div>
  );
}

export function SectionCard({ label, span = "", aspect = true, children }) {
  return (
    <div
      className={`${aspect ? "aspect-[2/1]" : ""} rounded-2xl border border-[#D7DFE9] bg-white p-6 ${span} transition-shadow hover:shadow-md`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2E9C7B]">
        {label}
      </p>
      <div className="mt-3 h-px w-10 bg-[#D7DFE9]" />
      {children && (
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#5C6B80]">
          {children}
        </div>
      )}
    </div>
  );
}

export function BadgeCard({ label, detail, href }) {
  const content = (
    <div className="group flex h-full flex-col justify-between rounded-xl border border-[#D7DFE9]/60 bg-[#F7FAFC] p-4 transition-colors hover:bg-white hover:shadow-sm">
      <Ticks small />
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#5C6B80]">
          {label}
        </p>
        {detail && <p className="mt-1 text-xs font-medium text-[#1E2A3A]">{detail}</p>}
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

export function PhotoBadgeCard({ src, alt, label, detail, object_offset, span = "" }) {
  return (
    <div className={`flex aspect-[2/1] items-stretch gap-4 rounded-2xl border border-[#D7DFE9] bg-white p-5 ${span} transition-shadow hover:shadow-md`}>
      <div className="flex flex-1 flex-col justify-between">
        <Ticks />
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#2E9C7B]">
            {label}
          </p>
          {detail && (
            <p className="mt-1 text-sm font-medium text-[#1E2A3A]">{detail}</p>
          )}
        </div>
      </div>
      <img
        src={src}
        alt={alt}
        className={`h-full w-1/2 rounded-xl object-cover object-${object_offset}`}
      />
    </div>
  );
}

export function ProjectCard({ eyebrow, title, description, stack = [], githubUrl, liveUrl, span = "" }) {
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl border border-[#D7DFE9] bg-white p-6 ${span} transition-shadow hover:shadow-md`}
    >
      <div>
        <div className="flex items-start justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2E9C7B]">
            {eyebrow}
          </p>
          <Ticks />
        </div>
        <div className="mt-3 h-px w-10 bg-[#D7DFE9]" />
        <h2 className="mt-4 text-lg font-medium text-[#1E2A3A]">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#5C6B80]">{description}</p>
      </div>

      <div className="mt-6">
        {stack.length > 0 && (
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#5C6B80]">
            {stack.join(" · ")}
          </p>
        )}
        <div className="mt-3 flex gap-4">
          {githubUrl && <ProjectLink href={githubUrl} label="GitHub" />}
          {liveUrl && <ProjectLink href={liveUrl} label="Live" />}
        </div>
      </div>
    </div>
  );
}

export function ProjectLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-mono text-xs uppercase tracking-[0.1em] text-[#1E2A3A] transition-colors hover:text-[#2E9C7B]"
    >
      {label} {"\u2192"}
    </a>
  );
}