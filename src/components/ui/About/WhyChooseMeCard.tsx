import React from 'react';

import { Badge, badges } from '@/constant/whyChooseMeBadgesData';
import { cn } from '@/lib/utils';

import FadeInWhenVisible from '../FadeInWhenVisible';
import { Marquee } from '../marquee';

type WhyChooseMeProps = {
  title?: string;
  description?: string;
  className?: string;
};

const WhyChooseMeCard: React.FC<WhyChooseMeProps> = ({
  title = ' Why Choose Me',
  description = ' Delivering excellence with innovative solutions and seamless execution.',
  className,
}) => {
  return (
    <div
      className={cn(
        `bg-secondary-300 relative z-11 h-[395px] w-[381px] overflow-hidden`,
        className
      )}
    >
      <div className='flex flex-col gap-4'>
        <h3 className='display-sm-bold md:display-md-bold text-base-white z-10'>
          {title}
        </h3>
        <p className='text-sm-regular md:text-md-regular text-base-white z-10'>
          {description}
        </p>
      </div>
      <Badges className='left-1/2 z-1 -translate-x-[55%]' />
      <div className='from-secondary-300 absolute inset-y-0 left-0 z-6 w-[25%] bg-gradient-to-r to-transparent' />
      <div className='from-secondary-300 absolute inset-y-0 right-0 z-6 w-[35%] bg-gradient-to-l to-transparent' />
    </div>
  );
};

export default WhyChooseMeCard;

const Badges: React.FC<Badge> = ({ className }) => {
  return (
    <div
      className={cn(
        'absolute top-[178px] flex w-[720px] translate-x-[8%] flex-col gap-3 md:top-[198px]',
        className
      )}
    >
      {badges.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={rowIdx === 1 ? 'flex gap-3' : 'ml-9.5 flex gap-3'}
        >
          <Marquee className='p-0' pauseOnHover={false}>
            {row.map((badge, idx) => (
              <span
                key={idx}
                className='text-sm-regular md:text-md-regular bg-base-white rounded-full px-4 py-1 text-neutral-950'
              >
                {badge.text}
              </span>
            ))}
          </Marquee>
        </div>
      ))}
    </div>
  );
};
