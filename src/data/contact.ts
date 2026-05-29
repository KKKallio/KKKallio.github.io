import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/KKKallio',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/ke-liu-642296299/',
    label: 'LinkedIn',
    icon: faLinkedin,
  },
  {
    link: 'https://www.instagram.com/liuke0617/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'mailto:liuke0617@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
