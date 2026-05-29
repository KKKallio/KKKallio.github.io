interface DegreeData {
  degree: string;
  link: string;
  school: string;
  year: number;
}

interface EducationProps {
  data?: DegreeData[];
}

function Degree({ data }: { data: DegreeData }) {
  return (
    <article>
      <header>
        <h4>{data.degree}</h4>
        <p>
          <a href={data.link}>{data.school}</a>, {data.year}
        </p>
      </header>
    </article>
  );
}

export default function Education({ data = [] }: EducationProps) {
  return (
    <section>
      <div>
        <h3>Education</h3>
      </div>
      {data.map((degree) => (
        <Degree data={degree} key={degree.degree} />
      ))}
    </section>
  );
}
