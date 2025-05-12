import React from 'react';

import { FeatureTabel } from '@/components/ui/WhyChooseMe.tsx/FeatureTabel';

import { whyChooseMeFeaturesData } from '@/constant/whyChooseMeFeaturesData';

const WhyChooseMe = () => {
  return (
    //Section---------------------------------------------------------------------------------
    <div
      className='custom-container bg-neutral-100 pt-10 pb-10 md:pt-10 md:pb-20'
      id='container-skillWhyChooseMe'
    >
      <h2
        className='text-center font-bold tracking-[-0.02em] text-neutral-950'
        style={{
          fontSize: 'clamp(2rem, 3.90vw, 3rem)',
          lineHeight: 'clamp(2.88rem, 4.87vw, 3.75rem)',
        }}
      >
        Why Choose Me
      </h2>

      <div className='bg-base-white mt-6 rounded-2xl p-[24px] md:mt-12'>
        {/* Header pill */}
        <div className='bg-primary-200 mx-auto grid w-full grid-cols-[2fr_1fr_1fr] rounded-full md:grid-cols-3'>
          <div className='flex-center h-[56px] rounded-l-full'>
            <span className='text-sm-semibold md:text-lg-semibold text-white'>
              Skill
            </span>
          </div>
          <div className='flex-center h-[56px]'>
            <span className='text-sm-semibold md:text-lg-semibold text-white'>
              Me
            </span>
          </div>
          <div className='flex-center h-[56px] rounded-r-full'>
            <span className='text-sm-semibold md:text-lg-semibold text-white'>
              Other
            </span>
          </div>
        </div>

        {/* Features grid */}
        <div className='grid w-full grid-cols-[2fr_1fr_1fr] md:grid-cols-3'>
          {whyChooseMeFeaturesData.map((feature, idx) => (
            <FeatureTabel
              key={feature.label}
              feature={feature}
              isFirst={idx === 0}
              isLast={idx === whyChooseMeFeaturesData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
