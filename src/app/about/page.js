export default function About() {
  return (
    <div className="min-h-screen bg-[#EDF1F6] px-6 py-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-3 gap-4">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#D7DFE9] bg-white transition-shadow hover:shadow-md">
          <img
            src="/Jeremy2026Portrait.jpg"
            alt="Jeremy Voegeli"
            className="h-full w-full object-cover"
          />
        </div>

        <SectionCard span="col-span-2" label="Who Am I" aspect={false}>
          <p>
            I&apos;m Jeremy. I picked up marching percussion freshman year of high
            school and have been playing ever since. My marching resume includes
            4 years of competitive high school marching band, 2 years of high
            school indoor percussion, 4 years at the UConn marching band, and 2
            summers with the Spartans Drum and Bugle Corps. I now teach at both
            the collegiate and professional level.
          </p>
          <p>
            I studied Computer Science at UConn, with a concentration in
            software design and development. My focus has been backend systems
            and cloud infrastructure. I&apos;m AWS Certified Cloud Practitioner,
            and I like how AWS pushes toward modular systems with clear
            separation of concerns. More broadly, I just enjoy building things,
            and contributing to something new and useful.
          </p>
          <p>
            Aside from drums and computers, I spend most of my free time at the
            gym or writing music.
          </p>
        </SectionCard>
        <PhotoBadgeCard
          span="col-span-2"
          src="/JeremySpartans1.jpeg"
          alt="Spartans DBC lot warmup"
          label="Spartans DBC"
          detail="Warming up in the lot before a competition in Little Rock, AR"
          object_offset={"top"}
        />
        <BadgeCard label="Education" />
        <BadgeCard label="AWS Certified" />
        <PhotoBadgeCard
          span="col-span-2"
          src="/JeremyTeachingUConn.jpg"
          alt="Teaching at UConn"
          label="Percussion Instructor"
          detail="Teaching at the UConn Drumline audition camp"
          object_offset={"left"}
        />

        <SectionCard span="col-span-2" label="Currently Looking For" />
      </div>
    </div>
  );
}

function SectionCard({ label, span = "", aspect = true, children }) {
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

function BadgeCard({ label }) {
  return (
    <div className="group flex aspect-square flex-col justify-between rounded-2xl border border-[#D7DFE9] bg-white p-5 transition-shadow hover:shadow-md">
      <Ticks />
      <p className="font-mono text-xs uppercase leading-snug tracking-[0.15em] text-[#5C6B80]">
        {label}
      </p>
    </div>
  );
}

function PhotoBadgeCard({ src, alt, label, detail, object_offset, span = "" }) {
  return (
    <div className={`flex aspect-[2/1] items-stretch gap-4 rounded-2xl border border-[#D7DFE9] bg-white p-5 ${span} transition-shadow hover:shadow-md`}>
      <div className="flex flex-1 flex-col justify-between">
        <Ticks />
        {detail && (
            <p className="mt-1 text-xs text-[#5C6B80]/70">{detail}</p>
        )}
        <p className="font-mono text-xs uppercase leading-snug tracking-[0.15em] text-[#5C6B80]">
          {label}
        </p>
      </div>
      <img
        src={src}
        alt={alt}
        className={`h-full w-1/2 rounded-xl object-cover object-${object_offset}`}
      />
    </div>
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