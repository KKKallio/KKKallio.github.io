interface ExperienceSkill {
  name: string;
  category?: 'biology' | 'programming' | 'computational' | 'bioinformatics' | 'general';
}

interface ExperienceData {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  skills?: Array<string | ExperienceSkill>;
}

interface ExperienceProps {
  data?: ExperienceData[];
}

function formatDate(date: string) {
  const parsed = new Date(date.length === 7 ? `${date}-01` : date);
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric',
  }).format(parsed);
}

function normalizeSkill(skill: string | ExperienceSkill): ExperienceSkill {
  if (typeof skill !== 'string') return skill;
  return { name: skill, category: 'general' };
}

function ExperienceItem({ data }: { data: ExperienceData }) {
  return (
    <article className="experience-item">
      <header className="experience-header">
        <div>
          <h4>
            <a href={data.url}>{data.name}</a> - {data.position}
          </h4>
        </div>
        <time className="experience-date">
          {formatDate(data.startDate)} - {data.endDate ? formatDate(data.endDate) : 'PRESENT'}
        </time>
      </header>

      {data.summary ? <p className="experience-summary">{data.summary}</p> : null}

      {data.skills && data.skills.length > 0 ? (
        <div className="skill-list" aria-label={`${data.name} skills`}>
          <strong>Skills:</strong>
          {data.skills.map((rawSkill) => {
            const skill = normalizeSkill(rawSkill);
            return (
              <span key={skill.name} className={`skill-tag skill-tag-${skill.category ?? 'general'}`}>
                {skill.name}
              </span>
            );
          })}
        </div>
      ) : null}
    </article>
  );
}

export default function Experience({ data = [] }: ExperienceProps) {
  return (
    <section>
      <div>
        <h3>Experience</h3>
      </div>
      {data.map((experience) => (
        <ExperienceItem data={experience} key={`${experience.name}-${experience.position}`} />
      ))}
    </section>
  );
}
