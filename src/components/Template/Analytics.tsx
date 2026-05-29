'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ReactGA from 'react-ga4';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
const NODE_ENV = process.env.NODE_ENV;

// Initialize GA on client side only
if (NODE_ENV === 'production' && GA_TRACKING_ID) {
  ReactGA.initialize(GA_TRACKING_ID);
}

const Analytics = (): null => {
  const pathname = usePathname();

  useEffect(() => {
    if (NODE_ENV === 'production' && GA_TRACKING_ID) {
      ReactGA.set({
        page: pathname,
      });
      ReactGA.send({ hitType: 'pageview', page: pathname });
    }
  }, [pathname]);

  return null;
};

export default Analytics;
