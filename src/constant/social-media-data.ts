import { StaticImageData } from 'next/image';

import iconDribbble from '@/../public/icons/Icon-Dribbble.svg';
import iconInstagram from '@/../public/icons/Icon-Instagram.svg';
import iconLinkedIn from '@/../public/icons/Icon-Linkedin.svg';

type Icon = {
  href: string;
  src: StaticImageData;
  alt: string;
};

export const socialMediaData: Icon[] = [
  {
    href: 'https://dribbble.com/',
    src: iconDribbble,
    alt: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/',
    src: iconInstagram,
    alt: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/',
    src: iconLinkedIn,
    alt: 'LinkedIn',
  },
];
