import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

import { Button } from '../button';

type HireMeCardProps = {
  className?: string;
};
const HireMeCard: React.FC<HireMeCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'bg-primary-300 flex-center relative h-[395px] overflow-hidden',
        className
      )}
    >
      <span className='text-secondary-200 text-center text-[72px] leading-[70px] font-bold tracking-[-0.02em]'>
        EDWIN ANDERSON
      </span>
      <Image
        src='/images/asian-men.png'
        width={430}
        height={428}
        alt='asian-men-card'
        className='pointer-events-none absolute bottom-0 z-11 scale-110 object-contain'
      />

      <Image
        src='/images/pattern-bg-card.svg'
        width={527}
        height={514}
        alt='patern-bg-card'
        className='pointer-events-none absolute z-5 object-contain'
      />
      <Button
        asChild
        className='hover:bg-primary-200 absolute bottom-[31px] z-20 flex h-[48px] px-[76px] transition-colors duration-300'
      >
        <Link
          href='#contact'
          className='hover:text-base-white flex items-center gap-1 text-sm text-neutral-950'
        >
          <Mail className='size-5' />
          Hire Me
        </Link>
      </Button>
    </div>
  );
};

export default HireMeCard;
