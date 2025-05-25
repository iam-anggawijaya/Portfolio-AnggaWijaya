// Komponen untuk setiap fitur dalam grid

import { Icon } from '@iconify/react';
import React from 'react';

import { FeatureDataProps } from '@/constant/whyChooseMeFeaturesData';

export const FeatureTabel: React.FC<{
  feature: FeatureDataProps;
  isFirst: boolean;
  isLast: boolean;
}> = ({ feature, isFirst, isLast }) => {
  return (
    <>
      {/* Label Skill */}
      <div
        className={`bg-base-white py-5 text-center ${!isFirst ? '' : ''} ${!isLast ? 'border-b border-neutral-300' : ''}`}
      >
        <span className='text-sm-medium md:text-lg-medium text-neutral-950'>
          {feature.label}
        </span>
      </div>

      {/* Me */}
      <div
        className={`flex-center bg-base-white py-5 ${!isFirst ? '' : ''} ${!isLast ? 'border-b border-neutral-300' : ''}`}
      >
        {feature.me ? (
          <Icon
            icon='icon-park-solid:check-one'
            className='text-secondary-300 size-6 md:size-7'
          />
        ) : (
          <Icon
            icon='mingcute:close-circle-fill'
            className='size-6 text-neutral-400 md:size-[29px]'
          />
        )}
      </div>

      {/* Other */}
      <div
        className={`flex-center bg-base-white py-5 ${!isFirst ? '' : ''} ${!isLast ? 'border-b border-neutral-300' : ''}`}
      >
        {feature.other ? (
          <Icon
            icon='icon-park-solid:check-one'
            className='text-secondary-300 size-6 md:size-7'
          />
        ) : (
          <Icon
            icon='mingcute:close-circle-fill'
            className='size-6 text-neutral-400 md:size-[29px]'
          />
        )}
      </div>
    </>
  );
};
