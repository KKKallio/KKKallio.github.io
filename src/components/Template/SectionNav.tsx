'use client';

import { useEffect, useState } from 'react';

export interface SectionNavItem {
  id: string;
  label: string;
}

export default function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: '-120px 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      },
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="section-nav" aria-label="Section navigation">
      <div className="link-container">
        {items.map((item) => (
          <h4 key={item.id}>
            <a className={activeId === item.id ? 'active' : ''} href={`#${item.id}`}>
              {item.label}
            </a>
          </h4>
        ))}
      </div>
    </nav>
  );
}
