import React from 'react';

import SkillCarousel from '@/components/ui/MyProfessionalSkills/SkillCarousel';

import { myProfessionalSkillsData } from '@/constant/myProfessionalSkillData';

const MyProfessionalSkills = () => {
  return (
    //Section---------------------------------------------------------------------------------
    <div
      id='my-professional-skill'
      className='custom-container pt-[40px] pb-[40px] md:pt-[40px] md:pb-[80px]'
    >
      <h2
        className='text-center font-bold tracking-[-0.02em] text-neutral-950'
        style={{
          fontSize: 'clamp(2rem, 3.90vw, 3rem)',
          lineHeight: 'clamp(2.88rem, 4.87vw, 3.75rem)',
        }}
      >
        My Professional Skills
      </h2>

      <SkillCarousel slides={myProfessionalSkillsData} />
    </div>
  );
};

export default MyProfessionalSkills;
