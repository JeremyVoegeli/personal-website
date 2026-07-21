import { ProjectCard, BadgeCard, Ticks } from "../components/ui/DesignSystem";

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
            description="Track and filter job applications end-to-end, from a tested Node API to a CI/CD pipeline that deploys on every push."
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
            eyebrow="Collaborative Build"
            title="Mock Pet Adoption Site"
            description="Built collaboratively with a team, using Git branching workflows to ship features in parallel. Flask backend, React frontend, containerized with Docker."
            stack={["Python", "Flask", "SQLite", "React", "Docker"]}
            githubUrl="https://github.com/JeremyVoegeli/AcademicProjects/tree/main/MockPetAdoptionWebsite"
          />
          <ProjectCard
            eyebrow="AI-Assisted Build"
            title="JobTracker CLI"
            description="A quick CLI companion to JobTracker, built while experimenting with Claude Code as a development partner. Handles CRUD operations against a SQLite database."
            stack={["Python", "Click", "SQLite", "Pytest"]}
            githubUrl="https://github.com/JeremyVoegeli/cli-job-tracker"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <BadgeCard
              label="This site"
              detail="Next.js · Tailwind · Vercel"
              href="https://github.com/JeremyVoegeli/personal-website"
            />
            <BadgeCard
              label="More Work"
              detail="See full GitHub"
              href="https://github.com/JeremyVoegeli"
            />
          </div>
        </div>
      </div>
    </div>
  );
}