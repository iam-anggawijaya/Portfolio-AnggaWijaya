import { StaticImageData } from 'next/image';

import SparkleIcon from '../../public/icons/icon-sparkle.svg';

type SkillsProps = {
  src?: StaticImageData;
  text?: string;
  alt: string;
  className?: string;
};

export const skillsData: SkillsProps[] = [
  {
    src: SparkleIcon,
    alt: 'Sparkle-0',
  },
  {
    text: 'Front End',
    alt: 'front-end-0',
  },
  {
    src: SparkleIcon,
    alt: 'Sparkle-1',
  },
  {
    text: 'Expert React',
    alt: 'expert-react',
  },
  {
    src: SparkleIcon,
    alt: 'Sparkle-2',
  },
  {
    text: 'Programmers',
    alt: 'programmers',
  },
  {
    src: SparkleIcon,
    alt: 'Sparkle-3',
  },
  {
    text: 'Mobile Developers',
    alt: 'mobile-developers',
  },
];
