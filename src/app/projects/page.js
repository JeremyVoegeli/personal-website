export default function Projects() {
  return (
    <div className="min-h-screen bg-[#EDF1F6] px-6 py-16">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2E9C7B]">
            Projects
          </p>
          <div className="mt-3 h-px w-10 bg-[#D7DFE9]" />
        </header>

        <div className="grid grid-cols-3 gap-4">
          <ProjectCard
          span="col-span-2"
            eyebrow="full-stack app"
            title="JobTracker"
            description="One-line description of the project and the problem it solves."
            stack={["React", "Node.js", "PostgreSQL", "Jest"]}
            githubUrl="https://github.com/JeremyVoegeli/JobTracker"
          />

          <ProjectCard
            eyebrow="Serverless Architecture"
            title="Mock Auction Site"
            description="A serverless auction platform where API Gateway routes bids to Lambda functions and Step Functions, backed by DynamoDB."
            stack={["API Gateway", "Lambda", "Step Functions", "DynamoDB"]}
            githubUrl="https://github.com/JeremyVoegeli/AcademicProjects/tree/main/MockAuctionAWSApp"
          />

          <ProjectCard
            eyebrow="Project"
            title="Title 3"
            description="One-line description of the project and the problem it solves."
            stack={["Next.js", "Tailwind"]}
            githubUrl="#"
          />
          <BadgeCard
            label="More Work"
            detail="See full GitHub"
            href="https://github.com/JeremyVoegeli"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ eyebrow, title, description, stack = [], githubUrl, liveUrl, span = "" }) {
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

function ProjectLink({ href, label }) {
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

function BadgeCard({ label, detail, href }) {
  const content = (
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-[#D7DFE9] bg-white p-5 transition-shadow hover:shadow-md">
      <Ticks />
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#2E9C7B]">
          {label}
        </p>
        {detail && <p className="mt-1 text-sm font-medium text-[#1E2A3A]">{detail}</p>}
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

function Ticks() {
  return (
    <div className="flex gap-[3px]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="bg-[#2E9C7B]"
          style={{
            width: "2px",
            height: i === 0 ? "10px" : "5px",
            opacity: i === 0 ? 1 : 0.4,
          }}
        />
      ))}
    </div>
  );
}