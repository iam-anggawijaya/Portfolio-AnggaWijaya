import IconCss from '@/../public/icons/icon-css.svg';
import IconDocker from '@/../public/icons/icon-docker.svg';
import IconExpressJS from '@/../public/icons/icon-expressjs.svg';
import IconHtml from '@/../public/icons/icon-html.svg';
import IconJs from '@/../public/icons/icon-js.svg';
import IconMongoDB from '@/../public/icons/icon-mongodb.svg';
import IconPostgresSQL from '@/../public/icons/icon-postgreesql.svg';
import IconReact from '@/../public/icons/icon-react.svg';
import IconScribd from '@/../public/icons/icon-scribd.svg';
import IconTypeScript from '@/../public/icons/icon-ts.svg';

export type skillProgressProps = {
  src?: string;
  title?: string;
  description?: string;
  valueProgress?: number;
  className?: string;
};

export const myProfessionalSkillsData: skillProgressProps[][] = [
  // Slide 1
  [
    {
      src: IconHtml,
      title: 'HTML',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 90,
    },
    {
      src: IconCss,
      title: 'CSS',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 80,
    },
    {
      src: IconJs,
      title: 'JavaScript',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 70,
    },
    {
      src: IconReact,
      title: 'React JS',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 60,
    },
    {
      src: IconMongoDB,
      title: 'Mongo DB',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 90,
    },
    {
      src: IconDocker,
      title: 'Docker',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 70,
    },
  ],

  // Slide 2
  [
    {
      src: IconExpressJS,
      title: 'ExpressJS',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 90,
    },
    {
      src: IconPostgresSQL,
      title: 'Postgres SQL',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 70,
    },
    {
      src: IconExpressJS,
      title: 'ExpressJS',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 80,
    },
    {
      src: IconPostgresSQL,
      title: 'Postgres SQL',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 60,
    },
    {
      src: IconExpressJS,
      title: 'ExpressJS',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 50,
    },
    {
      src: IconPostgresSQL,
      title: 'Postgres SQL',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 80,
    },
  ],

  // Slide 3
  [
    {
      src: IconScribd,
      title: 'Scribd',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 90,
    },
    {
      src: IconTypeScript,
      title: 'TypeScript',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 80,
    },
    {
      src: IconScribd,
      title: 'Scribd',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 60,
    },
    {
      src: IconTypeScript,
      title: 'TypeScript',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 80,
    },
    {
      src: IconScribd,
      title: 'Scribd',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 70,
    },
    {
      src: IconTypeScript,
      title: 'TypeScript',
      description:
        'Building the structure of web pages with semantic markup for accessibility.',
      valueProgress: 90,
    },
  ],
];
