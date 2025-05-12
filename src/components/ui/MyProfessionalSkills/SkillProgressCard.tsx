import Image from 'next/image';
import React from 'react';

import { ProgressBar } from '@/components/ui/progressBar';

import { skillProgressProps } from '@/constant/myProfessionalSkillData';
import { cn } from '@/lib/utils';

export const SkillProgressCard: React.FC<skillProgressProps> = ({
  src,
  title,
  description,
  valueProgress,
  className,
}) => {
  return (
    <div className={cn('bg-base-white rounded-2xl shadow-lg', className)}>
      <div className='flex items-center gap-3'>
        <div className='flex-center relative h-10 w-10 overflow-hidden rounded-full bg-neutral-100'>
          {src && (
            <Image
              src={src}
              alt={title || 'skill-icon'}
              fill
              className='object-contain p-2'
            />
          )}
        </div>
        <span className='text-md-semibold md:text-lg-semibold text-neutral-900'>
          {title}
        </span>
      </div>
      {description && (
        <div className='text-sm-regular md:text-md-regular mt-1 text-neutral-500'>
          {description}
        </div>
      )}
      <div className='mt-3 flex items-center gap-4'>
        <ProgressBar value={valueProgress} className='h-3.5' />
        <span className='text-lg-semibold'>{valueProgress}%</span>
      </div>
    </div>
  );
};
