import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { Ticks } from "../components/ui/DesignSystem";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#EDF1F6] px-6 py-16">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2E9C7B]">
            Contact
          </p>
          <div className="mt-3 h-px w-10 bg-[#D7DFE9]" />
        </header>

        <div className="grid grid-cols-3 gap-4">
          <ContactCard
            icon={FiMail}
            label="Email"
            detail="jeremy@example.com"
            href="mailto:jeremy@example.com"
          />
          <ContactCard
            icon={FiLinkedin}
            label="LinkedIn"
            detail="/in/jeremyvoegeli"
            href="https://linkedin.com/in/jeremyvoegeli"
          />
          <ContactCard
            icon={FiGithub}
            label="GitHub"
            detail="@JeremyVoegeli"
            href="https://github.com/JeremyVoegeli"
          />
        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon: Icon, label, detail, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex aspect-[2/1] flex-col justify-between rounded-2xl border border-[#D7DFE9] bg-white p-6 transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <Icon size={16} strokeWidth={1.75} className="text-[#2E9C7B]" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2E9C7B]">
            {label}
          </p>
        </div>
        <Ticks />
      </div>
      <p className="text-sm font-medium text-[#1E2A3A] transition-colors group-hover:text-[#2E9C7B]">
        {detail} {"\u2192"}
      </p>
    </a>
  );
}