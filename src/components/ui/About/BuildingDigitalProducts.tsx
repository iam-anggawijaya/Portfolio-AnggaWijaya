import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

type BuildingDigitalProductsProps = {
  className?: string;
};
const BuildingDigitalProducts: React.FC<BuildingDigitalProductsProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        'pointer-events-none relative flex h-[452px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#002C6E] to-[#0C4EAF] px-4 py-8 md:px-6 md:py-6 lg:h-[395px]',
        className
      )}
      style={{
        width: 'clamp(22.56rem, 63.56vw, 48.94rem)',
      }}
    >
      <div className=''>
        <p className='display-sm-bold md:display-md-bold text-base-white'>
          Building Digital
        </p>
        <p className='display-sm-bold md:display-md-bold text-base-white flex items-center'>
          Products
          <span className='ml-2'>
            <Icon icon='meteor-icons:sparkles' height={24} />
          </span>
        </p>
      </div>
      <div className='flex flex-col justify-between gap-6 lg:bottom-0 lg:flex-row lg:gap-10'>
        <div className='w-[214px]'>
          <p className='display-lg-bold lg:display-2xl-bold text-neutral-25'>
            50+
          </p>
          <p className='text-sm-medium lg:text-lg-medium text-neutral-25 whitespace-nowrap'>
            Global Client&apos;s Handle
          </p>
        </div>
        <div className='w-[214px]'>
          <p className='display-lg-bold lg:display-2xl-bold text-neutral-25'>
            99%
          </p>
          <p className='text-sm-medium lg:text-lg-medium text-neutral-25 whitespace-nowrap'>
            Client Satisfaction Rate
          </p>
        </div>
        <div className='w-[214px]'>
          <p className='display-lg-bold lg:display-2xl-bold text-neutral-25'>
            100+
          </p>
          <p className='text-sm-medium lg:text-lg-medium text-neutral-25 whitespace-nowrap'>
            Project Delivered
          </p>
        </div>
      </div>
      <Image
        src='/images/pixel-world-map.svg'
        width={540}
        height={304}
        alt='pixel-world-map'
        className='absolute top-1/2 right-0 translate-x-23 -translate-y-19 scale-145 object-contain opacity-15 lg:translate-x-0 lg:-translate-y-45 lg:scale-99'
      />
      <Image
        src='/images/flag-german.svg'
        width={70}
        height={32}
        alt='pixel-world-map'
        className='absolute top-[132px] right-[111px] object-contain lg:top-[134px] lg:right-[391px]'
      />
      <Image
        src='/images/flag-indonesia.svg'
        width={70}
        height={32}
        alt='pixel-world-map'
        className='absolute top-[342px] right-[35px] object-contain lg:top-[243px] lg:right-[25px]'
      />
      <Image
        src='/images/flag-usa.svg'
        width={70}
        height={32}
        alt='pixel-world-map'
        className='absolute top-[208px] right-[14px] object-contain lg:top-[107px] lg:right-[71px]'
      />
    </div>
  );
};

export default BuildingDigitalProducts;
