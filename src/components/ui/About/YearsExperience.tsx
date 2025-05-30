import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

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
        'relative flex h-[374px] w-[381px] flex-col justify-end overflow-hidden bg-neutral-900 md:h-[395px]',
        className
      )}
    >
      <h3 className='display-md-bold md:display-xl-bold text-base-white z-10 m-auto text-center'>
        {title}
      </h3>
      <div id='gambar' className='xs:flex z-50 hidden flex-wrap gap-3'>
        <Image
          src='/images/portfolio-card1.jpg'
          width={50}
          height={40}
          alt='portfolio-card1'
          className='flex-1 rounded-xl object-contain'
        />
        <Image
          src='/images/portfolio-card2.jpg'
          width={50}
          height={40}
          alt='portfolio-card2'
          className='flex-1 rounded-xl object-contain'
        />
        <Image
          src='/images/portfolio-card4.jpg'
          width={50}
          height={40}
          alt='portfolio-card4'
          className='flex-1 rounded-xl object-contain'
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
