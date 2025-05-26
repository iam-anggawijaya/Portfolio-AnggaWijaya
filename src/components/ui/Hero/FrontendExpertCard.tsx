import { Icon } from '@iconify/react';
import React from 'react';

import { cn } from '@/lib/utils';

type FrontendExpertCardProps = {
  title: string;
  description: string;
  className?: string;
};

const FrontendExpertCard: React.FC<FrontendExpertCardProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        'absolute -translate-x-[65px] rotate-[-10.09deg] rounded-xl border border-[rgba(253,253,253,0.1)] bg-[rgba(40,40,40,0.2)] backdrop-blur-lg sm:translate-x-0 md:rotate-[-3.24deg] md:rounded-2xl',

        className
      )}
      style={{
        padding: 'clamp(0.75rem, 1.39vw, 1.25rem)',
        left: 'clamp(-5.19rem, 15.69vw, 14.13rem)',
        top: 'clamp(30.25rem, 47.57vw, 41.81rem)',
      }}
    >
      <div
        className='text-neutral-25 font-bold'
        style={{
          fontSize: 'clamp(0.88rem, 1.67vw, 1.5rem)',
          lineHeight: 'clamp(1.75rem, 2.5vw, 2.25rem)',
        }}
      >
        {title}
      </div>

      <div className='text-neutral-25 flex items-center gap-1'>
        {/* Badge Icon */}
        <Icon icon='ph:seal-check-fill' width={14} height={14} />

        <span className='text-sm-medium'>{description}</span>
      </div>
    </div>
  );
};

export default FrontendExpertCard;
