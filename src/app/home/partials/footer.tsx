import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { socialMediaData } from '@/constant/social-media-data';

const Footer = () => {
  return (
    <footer className='bg-primary-400 border-t border-neutral-800'>
      <div className='custom-container flex flex-wrap justify-between gap-6 py-8 md:items-center'>
        <div className='item-center flex flex-wrap gap-4'>
          <Image
            src='/images/your-logo-w.svg'
            alt='logo'
            width={141}
            height={32}
            className='max-md:h-8 max-md:w-35.25'
          />
          <p className='text-sm-regular md:text-md-regular text-neutral-25'>
            © 2025 Edwin Anderson. All rights reserved.
          </p>
        </div>
        <div className='flex-start gap-4'>
          {socialMediaData.map((icon) => (
            <Link
              key={icon.alt}
              href={icon.href}
              className='flex-center size-12 rounded-full bg-[#410292] p-2.5'
            >
              <Image src={icon.src} alt={icon.alt} className='h-full w-auto' />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
