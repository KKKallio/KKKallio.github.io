import type { Metadata } from 'next';
import Link from 'next/link';
import Publications from '@/components/Research/Publication';
import ResearchSections from '@/components/Research/ResearchSections';
import publications from '@/data/publications';

export const metadata: Metadata = {
  title: "Kallio's Page | Research",
  description: "Kallio's research interests and publications.",
};

export default function ResearchPage() {
  return (
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2>
            <Link href="/research">Research</Link>
          </h2>
          <p>Research interests first, followed by publications.</p>
        </div>
      </header>

      <ResearchSections />

      <section id="publications" className="section-block">
        <Publications data={publications} showScholarIcons />
      </section>
    </article>
  );
}
