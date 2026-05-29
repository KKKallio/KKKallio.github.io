import type { Metadata } from 'next';
import Link from 'next/link';
import ContactIcons from '@/components/About/ContactIcons';

export const metadata: Metadata = {
  title: "Kallio's Page | Contact",
  description: 'Contact Kallio.',
};

export default function ContactPage() {
  return (
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link href="/contact">Contact</Link>
          </h2>
          <p>Feel free to reach out for research, collaboration, or a friendly conversation.</p>
        </div>
      </header>

      <section className="section-block contact-card">
        <h3>Get in touch</h3>
        <p>
          I am always open to discussing research ideas, computational biology, academic collaboration,
          and interesting projects. The easiest way to reach me is through the links below.
        </p>
        <ContactIcons />
      </section>
    </article>
  );
}
