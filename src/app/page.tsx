import type { Metadata } from 'next';
import Link from 'next/link';
 
export const metadata: Metadata = {
  title: 'About this site',
  description: "Kallio's personal website.",
};
 
export default function Home() {
  return (
    <article className="post home-post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link href="/">About this site</Link>
          </h2>
          <p>A personal academic website with modular TypeScript data and reusable page sections.</p>
        </div>
      </header>

      <section className="section-block home-site-card">
        <h3>About this site</h3>
        <p>
          This personal page is adapted from{' '}
          <a href="https://github.com/mldangelo/personal-site">personal-site</a>
          , while using clearer TypeScript data modules for profile content, research interests,
          publications, resume entries, and contact links.
        </p>
        <p>
          Please feel free to read more <Link href="/about">about me</Link>, explore my{' '}
          <Link href="/research">research</Link>, check out my <Link href="/resume">resume</Link>,
          or <Link href="/contact">contact</Link> me.
        </p>
      </section>
    </article>
  );
}
