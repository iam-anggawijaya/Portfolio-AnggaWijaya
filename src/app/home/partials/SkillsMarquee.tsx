import Image from 'next/image';
import React from 'react';

import { Marquee } from '@/components/ui/marquee';

import { skillsData } from '@/constant/skillsData';

const SkillsMarquee = () => {
  return (
    <div
      id='target-section'
      className='relative z-50 mx-auto -mt-[32px] flex w-full scale-x-101 -rotate-[1.89deg] items-center bg-neutral-950'
      style={{
        height: 'clamp(5.25rem, 9.72vw, 8.75rem)',
      }}
    >
      <Marquee className='py-4'>
        {skillsData.map((data) => (
          <div
            key={data.alt}
            className='flex flex-col items-center'
            style={{
              gap: 'clamp(1rem, 1.67vw, 1.5rem)',
            }}
          >
            {data.src && (
              <Image
                src={data.src}
                alt={data.alt}
                className='h-full w-auto object-contain select-none'
                style={{
                  height: 'clamp(2.25rem, 4.17vw, 3.75rem)',
                }}
              />
            )}
            {data.text && (
              <span
                className='text-neutral-25 font-bold'
                style={{
                  fontSize: 'clamp(1.5rem, 3.33vw, 3rem)',
                  lineHeight: 'clamp(2.25rem, 4.17vw, 3.75rem)',
                }}
              >
                {data.text}
              </span>
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsMarquee;
