import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

type CardPortofolioProps = {
  category: string;
  year: string | number;
  imageUrl: string;
  title: string;
  link: string;
  className?: string;
};
const CardPortofolio: React.FC<CardPortofolioProps> = ({
  category = 'Dashboard',
  year = 2024,
  imageUrl = '/images/portfolio-card1.jpg',
  title = 'Dashboard SaaS Task Management 1',
  link = '#',
  className = '',
}) => {
  return (
    <div className={cn('flex h-[444px] flex-col gap-5', className)}>
      <div className='flex-between w-full'>
        <span className='rounded-full border-2 border-dashed border-neutral-400 px-4 py-1 text-neutral-950'>
          {category}
        </span>
        <span className='rounded-full border-2 border-dashed border-neutral-400 px-4 py-1 text-neutral-950'>
          {year}
        </span>
      </div>
      <div className='pointer-events-none relative h-[284px] w-full overflow-hidden rounded-xl'>
        <Image src={imageUrl} alt={title} fill className='object-contain' />
      </div>
      <h3 className='text-xl-semibold text-neutral-950'>{title}</h3>
      <a
        href={link}
        className='text-md-medium text-primary-300 inline-flex items-center'
      >
        Visit Website
        <span className='ml-2'>
          <Icon icon='heroicons-solid:arrow-right' height={25} />
        </span>
      </a>
    </div>
  );
};

export default CardPortofolio;
