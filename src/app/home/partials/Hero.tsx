import Image from 'next/image';
import React, { useState } from 'react';

import ClientTrustCard from '@/components/ui/Hero/ClientTrustCard';
import FrontendExpertCard from '@/components/ui/Hero/FrontendExpertCard';
import GlobalClientsCard from '@/components/ui/Hero/GlobalClientsCard';
import StackedCircles from '@/components/ui/Hero/StackedCircles';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false); // State untuk melacak apakah gambar sudah selesai dimuat

  return (
    <section
      className='bg-primary-400 pointer-events-none flex w-full flex-wrap justify-center overflow-hidden'
      id='home'
      style={{ height: 'clamp(43.81rem, 61.53vw, 55.38rem)' }}
    >
      <div className='relative w-192 md:w-360' id='hero-container'>
        <h1
          className='text-base-white absolute left-1/2 z-10 w-full -translate-x-[50%] text-center font-extrabold whitespace-nowrap'
          style={{
            fontSize: 'clamp(2.19rem, 10.42vw, 9.38rem)',
            lineHeight: 'clamp(3.5rem, 13.54vw, 12.19rem)',
            top: 'clamp(6.25rem, 10vw, 9rem)',
          }}
          id='hero-title'
        >
          EDWIN ANDERSON
        </h1>

        <div
          className='absolute right-1/2 bottom-1/2 z-20 translate-x-[46%]'
          style={{
            width: 'clamp(26.5rem, 53.06vw, 47.69rem)',
            transform: 'translateY(clamp(22.31rem, 36.18vw, 32.56rem))',
          }}
          id='hero-image'
        >
          <Image
            src='/images/asian-men.png'
            width={763}
            height={763}
            alt='hero-image'
            className='object-contain'
            onLoadingComplete={() => setImageLoaded(true)} // Set state saat gambar selesai dimuat
          />
        </div>

        {imageLoaded && ( // Render StackedCircles hanya setelah gambar selesai dimuat
          <StackedCircles
            className='absolute left-1/2 z-0 -translate-x-[50%]'
            style={{
              top: 'clamp(15.13rem, 18.89vw, 17rem)',
            }}
          />
        )}

        <ClientTrustCard title='5.0' description='Many Client Trust with me' />

        <FrontendExpertCard
          title='Frontend Developer'
          description='React Expert'
        />

        <GlobalClientsCard title='50+' description='Global Clients' />
      </div>
    </section>
  );
};

export default Hero;
