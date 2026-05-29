import { ReactNode } from 'react';
import Analytics from '@/components/Template/Analytics';
import Navigation from '@/components/Template/Navigation';
import SideBar from '@/components/Template/SideBar';
import ScrollToTop from '@/components/Template/ScrollToTop';

import './global.css';

interface MainProps {
  children?: ReactNode;
  fullPage?: boolean;
  title?: string;
  description?: string;
}

export default function Main({
  children,
  fullPage = false,
}: MainProps) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        <Analytics />
        <ScrollToTop />
        <Navigation />
        <div className="main-wrapper">
          <div className="main-section">{children}</div>
          {fullPage ? null : <SideBar />}
        </div>
      </body>
    </html>
  );
}
