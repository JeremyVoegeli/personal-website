export default function About() {
  return (
    <div className="min-h-screen bg-[#EDF1F6] px-6 py-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-3 gap-4">
        <SectionCard span="col-span-2" label="Who Am I" />

        <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#D7DFE9] bg-white">
          <img
            src="/Jeremy2026Portrait.jpg"
            alt="Jeremy Voegeli"
            className="h-full w-full object-cover"
          />
        </div>

        <BadgeCard label="Education" />
        <BadgeCard label="AWS Certified" />
        <BadgeCard label="Drum Corps International" />
        <BadgeCard label="Percussion Instructor" />

        <SectionCard span="col-span-2" label="Currently Looking For" />
      </div>
    </div>
  );
}

function SectionCard({ label, span = "" }) {
  return (
    <div className={`aspect-[2/1] rounded-2xl border border-[#D7DFE9] bg-white p-6 ${span}`}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2E9C7B]">
        {label}
      </p>
      <div className="mt-3 h-px w-10 bg-[#D7DFE9]" />
      {/* body copy goes here */}
    </div>
  );
}

function BadgeCard({ label }) {
  return (
    <div className="group flex aspect-square flex-col justify-between rounded-2xl border border-[#D7DFE9] bg-white p-5 transition-shadow hover:shadow-md">
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
      <p className="font-mono text-xs uppercase leading-snug tracking-[0.15em] text-[#5C6B80]">
        {label}
      </p>
    </div>
  );
}