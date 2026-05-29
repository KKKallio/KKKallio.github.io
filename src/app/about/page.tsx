import type { Metadata } from 'next';
import Link from 'next/link';
import AboutSections from '@/components/About/AboutSections';

export const metadata: Metadata = {
  title: 'About',
  description: "Kallio's About page.",
};

export default function AboutPage() {
  return (
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2>
            <Link href="/about">About</Link>
          </h2>
          <p>Personal modules, hobbies, and interests.</p>
        </div>
      </header>
      <AboutSections />
    </article>
  );
}
