import React from 'react';

import FadeInWhenVisible from '@/components/ui/FadeInWhenVisible';
import MyWorkExperienceCard from '@/components/ui/MyWorkExperience/MyWorkExperienceCard';

import { workExperienceData } from '@/constant/myWorkExperienceData';

const MyWorkExperience = () => {
  return (
    //Section---------------------------------------------------------------------------------
    <div
      className='custom-container pointer-events-none flex flex-col gap-[64px] py-[40px] md:py-[80px]'
      id='container-skill'
    >
      <h2
        className='text-center font-bold tracking-[-0.02em] text-neutral-950'
        style={{
          fontSize: 'clamp(2rem, 3.90vw, 3rem)',
          lineHeight: 'clamp(2.88rem, 4.87vw, 3.75rem)',
        }}
      >
        My Work Experience
      </h2>
      <FadeInWhenVisible>
        <div className='flex flex-col gap-[32px] md:gap-[64px]'>
          {workExperienceData.map((item, idx) => (
            <MyWorkExperienceCard
              key={idx}
              data={item}
              isLast={idx === workExperienceData.length - 1}
            />
          ))}
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

export default MyWorkExperience;
