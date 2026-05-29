import type { Metadata } from 'next';
import Link from 'next/link';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import Publications from '@/components/Research/Publication';
import SectionNav from '@/components/Template/SectionNav';
import degrees from '@/data/degrees';
import publications from '@/data/publications';
import experience from '@/data/researchExperience';

export const metadata: Metadata = {
  title: "Kallio's Page | Resume",
  description: "Kallio's resume.",
};

const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={experience} />,
  Publications: () => <Publications data={publications} />,
};

export default function ResumePage() {
  const navItems = Object.keys(sections).map((sectionName) => ({
    id: sectionName.toLowerCase(),
    label: sectionName,
  }));

  return (
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link href="/resume">Resume</Link>
          </h2>
          <p>Academic profile, experience, education, and selected publications.</p>
        </div>
      </header>

      <SectionNav items={navItems} />

      {Object.entries(sections).map(([sectionName, Section]) => (
        <section id={sectionName.toLowerCase()} className="section-block" key={sectionName}>
          <Section />
        </section>
      ))}
    </article>
  );
}
