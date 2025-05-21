import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

import FadeInWhenVisible from '../FadeInWhenVisible';

type YearsExperienceProps = {
  title?: string;
  className?: string;
};

const YearsExperience: React.FC<YearsExperienceProps> = ({
  title = '5+ Years Experience',
  className,
}) => {
  return (
    <div
      className={cn(
        'flex-between relative h-[395px] w-[381px] flex-col overflow-hidden bg-neutral-900 text-center',
        className
      )}
    >
      <h3 className='display-md-bold md:display-xl-bold text-base-white z-10 max-w-[250px] pt-20 break-words'>
        {title}
      </h3>
      <div className='flex-center z-9 gap-3 pb-[28px]'>
        <Image
          src='/images/portfolio-card1.jpg'
          width={95}
          height={71}
          alt='portfolio-card1'
          className='rounded-xl object-contain'
        />
        <Image
          src='/images/portfolio-card2.jpg'
          width={95}
          height={71}
          alt='portfolio-card2'
          className='rounded-xl object-contain'
        />
        <Image
          src='/images/portfolio-card4.jpg'
          width={95}
          height={71}
          alt='portfolio-card4'
          className='rounded-xl object-contain'
        />
      </div>
      <Image
        src='/images/years-experience.jpg'
        width={600}
        height={0}
        alt='years-experience'
        className='pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 scale-120 object-contain opacity-70 select-none'
      />

      <div className='from-base-black absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t to-transparent' />
    </div>
  );
};

export default YearsExperience;
