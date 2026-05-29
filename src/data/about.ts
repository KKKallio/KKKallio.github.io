export interface AboutModule {
  slug: string;
  title: string;
  summary: string;
  details?: string[];
  links?: {
    label: string;
    href: string;
  }[];
  map?: {
    title: string;
    href: string;
    embedUrl: string;
  };
}

const aboutModules: AboutModule[] = [
  {
    slug: 'travel',
    title: 'Travel',
    summary:
      'I like exploring new cities, landscapes, food cultures. Below is some cities I have visited',
    map: {
      title: 'Cities I have visited',
      href: 'https://www.google.com/maps/d/edit?mid=1iWMCk6Z4VB56qnCN2iOkRSJK-8jQRg4&usp=sharing',
      embedUrl: 'https://www.google.com/maps/d/embed?mid=1iWMCk6Z4VB56qnCN2iOkRSJK-8jQRg4&ehbc=2E312F',
    },
  },
];

export default aboutModules;
