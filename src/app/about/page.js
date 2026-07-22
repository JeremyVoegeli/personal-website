import { SectionCard, BadgeCard, PhotoBadgeCard } from "../components/ui/DesignSystem";

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
          object_offset={"object-top"}
        />
        <BadgeCard label="Education" detail="B.S. Computer Science, UConn '26" />
        <BadgeCard label="AWS Certified" detail="Cloud Practitioner" />
        <PhotoBadgeCard
          span="col-span-2"
          src="/JeremyTeachingUConn.jpg"
          alt="Teaching at UConn"
          label="Percussion Instructor"
          detail="Teaching at the UConn Drumline 2026 audition camp"
          object_offset={"object-left"}
        />

        <SectionCard span="col-span-2" label="Currently Looking For">
            <p>
            I'm currently looking for entry-level software engineering and cloud roles,
             ideally somewhere I can keep working with the AWS stack I'm certified in 
             (S3, Lambda, DynamoDB, API Gateway). I'm based in Connecticut and open to 
             hybrid/on-site roles in the area, or fully remote.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}