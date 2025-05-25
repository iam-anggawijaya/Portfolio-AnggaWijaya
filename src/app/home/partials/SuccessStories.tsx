import React from 'react';

import SuccessStoriesCarousel from '@/components/ui/SuccessStories/SuccessStoriesCarousel';

import { successStoriesData } from '@/constant/successStoriesData';

const SuccessStories = () => {
  return (
    //Section---------------------------------------------------------------------------------
    <div
      className='custom-container flex flex-col gap-[24px] py-[40px] md:gap-[48px] md:py-[80px]'
      id='container-skill'
    >
      <h2
        className='text-center font-bold tracking-[-0.02em] text-neutral-950'
        style={{
          fontSize: 'clamp(2rem, 3.90vw, 3rem)',
          lineHeight: 'clamp(2.88rem, 4.87vw, 3.75rem)',
        }}
      >
        Success Stories from Clients
      </h2>
      <div className=''>
        <SuccessStoriesCarousel slides={successStoriesData} className='' />
      </div>
    </div>
  );
};

export default SuccessStories;
