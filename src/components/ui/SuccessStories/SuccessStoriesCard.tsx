import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

import { SuccessStoryProps } from '@/constant/successStoriesData';
import { cn } from '@/lib/utils';

export const SuccessStoriesCard: React.FC<SuccessStoryProps> = ({
  src,
  quote,
  stars,
  personName,
  personPosition,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-base-white rounded-2xl px-4 pt-4 pb-12 shadow-lg md:p-6',
        className
      )}
    >
      {/* Company Logo & Quote */}
      <div className='flex flex-col items-center'>
        <div className='relative h-8 w-full md:h-12'>
          <Image src={src} alt='company-logo' fill className='object-contain' />
        </div>
        {/* Quote */}
        <p className='text-md-medium mt-3 w-full text-center text-neutral-950 md:mt-4'>
          {quote}
        </p>
        {/* Stars */}
        <div className='mt-5 flex md:mt-8'>
          {[...Array(stars)].map((_, i) => (
            <Icon
              key={i}
              icon='material-symbols:star-rounded'
              width={32}
              height={32}
              className='text-secondary-200 object-contain'
            />
          ))}
        </div>
        {/* Name & Position */}
        <div className='text-md-semibold mt-3 w-full text-center text-neutral-950 md:mt-4'>
          {personName}
        </div>
        <div className='text-md-regular w-full text-center text-neutral-600'>
          {personPosition}
        </div>
      </div>
    </div>
  );
};
