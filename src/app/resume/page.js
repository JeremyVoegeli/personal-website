export default function Resume() {
  return (
    <div className="min-h-screen bg-[#EDF1F6] px-6 py-16">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2E9C7B]">
            Resume
          </p>
          <div className="mt-3 h-px w-10 bg-[#D7DFE9]" />
        </header>

        <div className="grid grid-cols-3 gap-4">
          <SectionCard span="col-span-2" label="Overview" aspect={false}>
            <p>
              Maybe a little blurb about my resume or something.
            </p>
          </SectionCard>

          <a
            href="/JeremyVoegeliResume.pdf"
            download="Jeremy_Voegeli_Resume.pdf"
            className="group flex flex-col justify-between rounded-2xl border border-[#D7DFE9] bg-white p-5 transition-shadow hover:shadow-md"
          >
            <Ticks />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#2E9C7B]">
                Download
              </p>
              <p className="mt-1 text-sm font-medium text-[#1E2A3A] transition-colors group-hover:text-[#2E9C7B]">
                PDF {"\u2192"}
              </p>
            </div>
          </a>

          <div className="col-span-3 overflow-hidden rounded-2xl border border-[#D7DFE9] bg-white p-2">
            <object
              data="/JeremyVoegeliResume.pdf"
              type="application/pdf"
              className="h-[800px] w-full rounded-xl"
            >
              <p className="p-4 text-sm text-[#5C6B80]">
                Your browser can&apos;t display PDFs directly.{" "}
                <a
                  href="/JeremyVoegeliResume.pdf"
                  download="Jeremy_Voegeli_Resume.pdf"
                  className="font-medium text-[#2E9C7B] underline underline-offset-2"
                >
                  Download the PDF instead.
                </a>
              </p>
            </object>
          </div>
        </div>
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