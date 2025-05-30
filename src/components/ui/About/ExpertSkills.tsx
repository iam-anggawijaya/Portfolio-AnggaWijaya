import { Icon } from '@iconify/react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import IconCss from '@/../public/icons/icon-css.svg';
import IconDocker from '@/../public/icons/icon-docker.svg';
import IconExpressjs from '@/../public/icons/icon-expressjs.svg';
import IconHtml from '@/../public/icons/icon-html.svg';
import IconJs from '@/../public/icons/icon-js.svg';
import IconMongodb from '@/../public/icons/icon-mongodb.svg';
import IconPostgreesql from '@/../public/icons/icon-postgreesql.svg';
import IconReact from '@/../public/icons/icon-react.svg';
import IconScribd from '@/../public/icons/icon-scribd.svg';
import IconTs from '@/../public/icons/icon-ts.svg';
import { cn } from '@/lib/utils';

import { Marquee } from '../marquee';

type ExpertSkillsProps = {
  title?: string;
  icon?: React.ReactNode;
  description?: string;
  className?: string;
  stars?: number;
};

const ExpertSkills: React.FC<ExpertSkillsProps> = ({
  title = 'Expert Skill',
  icon,
  description = 'Mastering modern technologies to deliver impactful and efficient solutions',
  className,
  stars = 5,
}) => {
  return (
    <div
      className={cn(
        'relative flex h-[374px] w-[381px] flex-col gap-8 overflow-hidden bg-neutral-900 px-4 pt-[32px] md:h-[395px] md:px-6 md:pt-[29px]',
        className
      )}
    >
      <div className='z-10 flex flex-col gap-[8px] md:gap-[12px]'>
        <h3 className='text-neutral-25 display-sm-bold md:display-md-bold'>
          {title}
        </h3>

        <div className='mt-0.5 flex flex-row md:mt-1'>
          {Array.from({ length: stars }).map((_, i) => (
            <span key={i} className=''>
              <Icon
                icon='material-symbols:star-rounded'
                width='clamp(1.5rem, 2.6vw, 2rem)'
                color='#F3993F'
              />
            </span>
          ))}
          {icon}
        </div>

        <div className='text-neutral-25 text-sm-regular'>{description}</div>
      </div>
      <ExpertSkillsBadges />
      <div className='absolute inset-y-0 left-0 z-6 w-[25%] bg-gradient-to-r from-neutral-900 to-transparent' />
      <div className='absolute inset-y-0 right-0 z-6 w-[25%] bg-gradient-to-l from-neutral-900 to-transparent' />
    </div>
  );
};

export default ExpertSkills;

type IconExpertSkillProps = {
  src: StaticImageData;
  alt: string;
};

const iconExpertSkillData: IconExpertSkillProps[][] = [
  [
    { src: IconCss, alt: 'icon-css' },
    { src: IconJs, alt: 'icon-js' },
    { src: IconHtml, alt: 'icon-html' },
    { src: IconExpressjs, alt: 'icon-expressjs' },
    { src: IconScribd, alt: 'icon-scribd' },
  ],

  [
    { src: IconTs, alt: 'icon-ts' },
    { src: IconReact, alt: 'icon-react' },
    { src: IconDocker, alt: 'icon-docker' },
    { src: IconPostgreesql, alt: 'icon-postgreessql' },
    { src: IconMongodb, alt: 'icon-mongodb' },
  ],
];

const ExpertSkillsBadges = () => {
  return (
    <div className='xs:flex absolute bottom-[44px] left-0 hidden flex-col gap-6 md:bottom-[47px]'>
      {iconExpertSkillData.map((row, rowIdx) => (
        <div key={rowIdx} className='flex'>
          <Marquee className='py-0 [--gap:16px]' pauseOnHover={false}>
            {row.map((icon, idx) => (
              <div
                key={idx}
                className='flex-center h-[53px] w-[53px] rounded-full bg-neutral-800'
              >
                <Image src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </Marquee>
        </div>
      ))}
    </div>
  );
};
