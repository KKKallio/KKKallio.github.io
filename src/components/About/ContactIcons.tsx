'use client';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '@/data/contact';

interface ContactItem {
  label: string;
  link: string;
  icon: IconDefinition;
}

export default function ContactIcons() {
  return (
    <ul className="contact-icons">
      {data.map((item: ContactItem) => (
        <li key={item.label}>
          <a href={item.link} aria-label={item.label}>
            <FontAwesomeIcon icon={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
