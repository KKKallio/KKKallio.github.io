import publications from '@/data/publications';
import ScholarIcons from '@/components/Research/ScholarIcons';

interface PublicationData {
  title: string;
  link: string;
  journal: string;
  year: number;
}

interface PublicationsProps {
  data?: PublicationData[];
  title?: string;
  showScholarIcons?: boolean;
}

function PublicationItem({ data }: { data: PublicationData }) {
  return (
    <li className="publication-item">
      <a href={data.link}>{data.title}.</a>{' '}
      <strong>
        <em>{data.journal}</em>
      </strong>
      , {data.year}
    </li>
  );
}

export default function Publications({
  data = publications,
  title = 'Publications',
  showScholarIcons = false,
}: PublicationsProps) {
  return (
    <section className="publication-section">
      <header className="section-heading-inline">
        <h3>{title}</h3>
        {showScholarIcons ? <ScholarIcons inline /> : null}
      </header>
      <ol className="publication-list">
        {data.map((publication: PublicationData) => (
          <PublicationItem key={`${publication.title}-${publication.year}`} data={publication} />
        ))}
      </ol>
    </section>
  );
}
