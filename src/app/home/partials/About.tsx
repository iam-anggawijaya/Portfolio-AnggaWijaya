import React from 'react';

import BuildingDigitalProducts from '@/components/ui/About/BuildingDigitalProducts';
import ExpertSkills from '@/components/ui/About/ExpertSkills';
import HireMeCard from '@/components/ui/About/HireMeCard';
import WhyChooseMe from '@/components/ui/About/WhyChooseMeCard';
import YearsExperience from '@/components/ui/About/YearsExperience';

const About = () => (
  //Section---------------------------------------------------------------------------------
  <div className='custom-container pointer-events-none mt-[33px] pt-[40px] pb-[40px] md:pt-[40px] md:pb-[80px]'>
    {/* Top Info Block */}
    <div className='flex flex-col gap-4'>
      <p className='text-lg-semibold text-neutral-950'>
        Hi, I’m Edwin Anderson 👋
      </p>
      <p
        className='display-md-semibold tracking-[-0.02em] text-neutral-950'
        style={{
          lineHeight: 'clamp(2.13rem, 3.73vw, 2.88rem)',
          fontSize: 'clamp(1.25rem, 2.6vw, 2rem)',
        }}
      >
        Building digital products with a focus on crafting visually engaging and
        seamless user interfaces using React.js.{' '}
        <span className='text-neutral-400'>
          Prioritizing responsive design, performance optimization, and
          user-centric features to deliver exceptional web experiences.
        </span>
      </p>

      {/* Component Gallery */}
      <div className='flex-center flex flex-wrap gap-[20px] pt-[24px] md:pt-[48px]'>
        <WhyChooseMe className='flex-1 basis-[320px] rounded-2xl p-5 md:p-6' />
        <ExpertSkills className='flex-1 basis-[320px] rounded-2xl p-5 md:p-6' />
        <YearsExperience className='flex-1 basis-[320px] rounded-2xl p-5 md:p-6' />
        <HireMeCard className='flex-1 basis-[320px] rounded-2xl p-5 md:p-6' />
        <BuildingDigitalProducts className='flex-2 basis-[660px] rounded-2xl p-5 md:p-6' />
        {/* </div> */}
      </div>
    </div>
  </div>
);

export default About;
