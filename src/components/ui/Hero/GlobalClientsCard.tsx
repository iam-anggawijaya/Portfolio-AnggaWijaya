import Image from 'next/image';
import React from 'react';

type GlobalClientsCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
};

const GlobalClientsCard: React.FC<GlobalClientsCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div
      className={`absolute flex rotate-[5.31deg] flex-col items-start gap-1.5 rounded-2xl border border-[rgba(253,253,253,0.1)] bg-[rgba(40,40,40,0.2)] backdrop-blur-lg md:gap-2 ${className ?? ''}`}
      style={{
        width: 'clamp(9.25rem, 14.44vw, 13rem)',
        padding: 'clamp(0.75rem, 1.39vw, 1.25rem)',
        top: 'clamp(27.69rem, 39.79vw, 35.81rem)',
        left: 'clamp(17.0rem, 65.31vw, 58.78rem)',
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

      <div
        className='text-neutral-25 font-medium'
        style={{
          fontSize: 'clamp(0.75rem, 0.97vw, 0.88rem)',
          lineHeight: 'clamp(1.5rem, 1.94vw, 1.75rem)',
        }}
      >
        {description}
      </div>

      {icon}
      <div style={{ width: 'clamp(7.75rem, 11.67vw, 10.5rem)' }}>
        <Image
          src='/images/frame-avatar.png'
          width={168}
          height={52}
          alt='frame-avatar'
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default GlobalClientsCard;
