'use client';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '@/data/scholar';

interface ScholarItem {
  label: string;
  link: string;
  icon: IconDefinition;
}

export default function ScholarIcons({ inline = false }: { inline?: boolean }) {
  const className = inline ? 'scholar-icons scholar-icons-inline' : 'scholar-icons';

  return (
    <ul className={className} aria-label="Scholar profiles">
      {data.map((item: ScholarItem) => (
        <li key={item.label}>
          <a href={item.link} aria-label={item.label} title={item.label}>
            <FontAwesomeIcon icon={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
