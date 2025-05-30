import React from 'react';

import FadeInWhenVisible from '@/components/ui/FadeInWhenVisible';
import CardPortofolio from '@/components/ui/MyLatestWork/cardPortofolio';

const MyLatestWork = () => {
  return (
    //Section---------------------------------------------------------------------------------
    <div
      id='my-latest-work'
      className='custom-container py-[40px] md:py-[80px]'
    >
      <h2
        className='text-center font-bold tracking-[-0.02em] text-neutral-950'
        style={{
          fontSize: 'clamp(2rem, 3.90vw, 3rem)',
          lineHeight: 'clamp(2.88rem, 4.87vw, 3.75rem)',
        }}
      >
        My Latest Work
      </h2>

      {/* Card Portofolio  */}
      <FadeInWhenVisible>
        <div className='mt-[64px] flex flex-wrap gap-6 md:gap-x-5 md:gap-y-10'>
          <CardPortofolio
            category='Dashboard'
            year={2024}
            imageUrl='/images/portfolio-card1.jpg'
            title='Dashboard SaaS Task Manage 1'
            link='#'
            className='flex-1 basis-[320px]'
          />
          <CardPortofolio
            category='Dashboard'
            year={2024}
            imageUrl='/images/portfolio-card2.jpg'
            title='Dashboard SaaS Task Manage 2'
            link='#'
            className='flex-1 basis-[320px]'
          />
          <CardPortofolio
            category='Dashboard'
            year={2024}
            imageUrl='/images/portfolio-card3.jpg'
            title='Dashboard SaaS Task Manage 3'
            link='#'
            className='flex-1 basis-[320px]'
          />
          <CardPortofolio
            category='Dashboard'
            year={2024}
            imageUrl='/images/portfolio-card4.jpg'
            title='Dashboard SaaS Task Manage 4'
            link='#'
            className='flex-1 basis-[320px]'
          />
          <CardPortofolio
            category='Dashboard'
            year={2024}
            imageUrl='/images/portfolio-card5.jpg'
            title='Dashboard SaaS Task Manage 5'
            link='#'
            className='flex-1 basis-[320px]'
          />
          <CardPortofolio
            category='Dashboard'
            year={2024}
            imageUrl='/images/portfolio-card6.jpg'
            title='Dashboard SaaS Task Manage 6'
            link='#'
            className='flex-1 basis-[320px]'
          />
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

export default MyLatestWork;
