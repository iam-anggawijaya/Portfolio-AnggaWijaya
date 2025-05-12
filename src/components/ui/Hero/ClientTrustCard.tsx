import { Icon } from '@iconify/react';
import React from 'react';

import { cn } from '@/lib/utils';

type ClientTrustCardProps = {
  title: string;
  icon?: React.ReactNode;
  description: string;
  className?: string;
};

const ClientTrustCard: React.FC<ClientTrustCardProps> = ({
  title,
  icon,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        'absolute rotate-[6.73deg] flex-col rounded-xl border border-[rgba(253,253,253,0.1)] bg-[rgba(40,40,40,0.2)] backdrop-blur-lg md:rotate-[3.15deg] md:rounded-2xl',
        className
      )}
      style={{
        width: 'clamp(9rem, 13.89vw, 12.5rem)',
        padding: 'clamp(0.75rem, 1.39vw, 1.25rem)',
        top: 'clamp(11.56rem, 27.64vw, 24.88rem)',
        left: 'clamp(4.56rem, 21.74vw, 19.56rem)',
      }}
    >
      <div
        className='text-neutral-25 font-bold'
        style={{
          fontSize: 'clamp(1.5rem, 2.78vw, 2.5rem)',
          lineHeight: 'clamp(2.25rem, 3.89vw, 3.5rem)',
        }}
      >
        {title}
      </div>

      {icon}
      <div className='mt-0.5 flex flex-row md:mt-1'>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>
            <Icon
              icon='material-symbols:star-rounded'
              width='clamp(1.5rem, 2.22vw, 2rem)  '
              color='#F3993F'
            />
          </span>
        ))}
      </div>

      <div
        className='text-neutral-25 line-height-0.5 md:line-height-1 font-medium'
        style={{
          fontSize: 'clamp(0.75rem, 0.97vw, 0.88rem)',
        }}
      >
        {description}
      </div>
    </div>
  );
};

export default ClientTrustCard;
