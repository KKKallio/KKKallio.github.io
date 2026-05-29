import aboutModules, { type AboutModule } from '@/data/about';
import SectionNav from '@/components/Template/SectionNav';

function AboutModuleCard({ module }: { module: AboutModule }) {
  return (
    <section id={module.slug} className="about-module section-block">
      <header>
        <h3>{module.title}</h3>
        <p>{module.summary}</p>
      </header>

      {module.details && module.details.length > 0 ? (
        <ul>
          {module.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      ) : null}

      {module.links && module.links.length > 0 ? (
        <div className="inline-link-list">
          {module.links.map((link, index) => (
            <span key={link.href}>
              <a href={link.href}>{link.label}</a>
              {index < module.links!.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>
      ) : null}

      {module.map ? (
        <figure className="map-embed">
          <iframe src={module.map.embedUrl} title={module.map.title} loading="lazy" />
          <figcaption>
            <a href={module.map.href}>Open {module.map.title} in Google Maps</a>
          </figcaption>
        </figure>
      ) : null}
    </section>
  );
}

export default function AboutSections({ data = aboutModules }: { data?: AboutModule[] }) {
  return (
    <>
      <SectionNav items={data.map((module) => ({ id: module.slug, label: module.title }))} />
      {data.map((module) => (
        <AboutModuleCard key={module.slug} module={module} />
      ))}
    </>
  );
}
