'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import routes from '@/data/navigation';

interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };
    if (open) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [open, closeMenu]);

  return (
    <div className="hamburger-container">
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="hamburger-button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span className="hamburger-icon">{open ? '✕' : '☰'}</span>
      </button>

      {/* Navigation Overlay */}
      <nav className={`mobile-nav ${open ? 'is-open' : ''}`}>
        <ul className="mobile-nav-list">
          {routes.map((route) => (
            <li key={route.path} className="mobile-nav-item">
              <Link
                key={route.label}
                href={route.path}
                onClick={closeMenu}
                className={"mobile-nav-link"}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Hamburger