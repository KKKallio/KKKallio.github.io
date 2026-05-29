import Image from 'next/image';
import researchInterests, { researchSummary, type ResearchInterest } from '@/data/researchInterest';
import SectionNav from '@/components/Template/SectionNav';

function AbstractGraph({ graph }: { graph: NonNullable<ResearchInterest['abstractGraph']> }) {
  return (
    <figure className="abstract-graph" aria-label={graph.label}>
      <figcaption>{graph.label}</figcaption>
      <Image src={graph.figureUrl} alt={graph.label} width={900} height={260} className="abstract-graph-image" />
    </figure>
  );
}

function ResearchInterestCard({ interest }: { interest: ResearchInterest }) {
  return (
    <article id={interest.slug} className="research-interest">
      <header>
        <h4>{interest.title}</h4>
        <p>{interest.summary}</p>
      </header>

      {interest.abstractGraph ? <AbstractGraph graph={interest.abstractGraph} /> : null}

      {interest.keywords && interest.keywords.length > 0 ? (
        <div className="keyword-list" aria-label={`${interest.title} keywords`}>
          <strong>Keywords:</strong>
          {interest.keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function ResearchSections({ data = researchInterests }: { data?: ResearchInterest[] }) {
  return (
    <>
      <SectionNav
        items={[
          { id: 'research-interests', label: 'Research Interests' },
          { id: 'publications', label: 'Publications' },
        ]}
      />
      <section id="research-interests" className="section-heading-block">
        <h3>Research Interests</h3>
        <p className="summary">{researchSummary}</p>   
        {data.map((interest) => (
          <ResearchInterestCard key={interest.slug} interest={interest} />
        ))}
      </section> 
    </>
  );
}
