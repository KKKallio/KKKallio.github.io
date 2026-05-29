'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';
import routes from '@/data/navigation';

interface Route {
  label: string;
  path: string;
  index?: boolean;
  home?: boolean;
}

export default function Navigation() {
  const homeRoute = routes.filter((route: Route) => route.home);
  const navRoutes = routes.filter((route: Route) => !route.home);
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };
  return (
    <header className="site-header">
      <div className="header-home">
        {homeRoute.map((route: Route) => (
          <Link key={route.label} href={route.path}>
            {route.label}
          </Link>
        ))}
      </div>

      <nav className="header-nav">
        {navRoutes.map((route: Route) => (
          <Link key={route.label} href={route.path} className={`nav-link  ${isActive(route.path) ? 'active' : ''}`}>
              {route.label}
          </Link>
        ))}
      </nav>

      <div className="header-controls">
        <ThemeToggle />
        <Hamburger />
      </div>
    </header>
  );
}
