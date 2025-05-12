'use client';

import Image from 'next/image';
import React from 'react';

import { WorkExperience } from '@/constant/myWorkExperienceData';

// Hook untuk deteksi desktop
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState(
    typeof window === 'undefined' ? true : window.innerWidth >= 768
  );
  React.useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isDesktop;
}

type MyWorkExperienceCardProps = {
  data: WorkExperience;
  isLast?: boolean;
};

// Komponen dekorasi garis & bulatan
const Decoration: React.FC<{ isLast?: boolean; desktop?: boolean }> = ({
  isLast,
  desktop,
}) => (
  <div
    id='decoration-space'
    className={`relative mr-4 flex flex-col ${desktop ? '' : ''}`}
  >
    {!isLast && (
      <div
        className={`absolute left-1/2 z-0 -translate-x-1/2 border-l-2 border-dashed border-neutral-400 ${desktop ? 'h-[calc(100%+66px)]' : 'h-[calc(100%+26px)]'}`}
      />
    )}
    <div
      className={`bg-base-white flex-center z-10 flex rounded-full border border-dashed border-neutral-400 ${desktop ? 'size-[40px]' : 'size-[24px]'}`}
    >
      <div
        className={`${desktop ? 'size-[24px]' : 'size-[14px]'} bg-primary-200 rounded-full`}
      />
    </div>
  </div>
);

// Komponen logo & info
const LogoInfo: React.FC<{ data: WorkExperience; desktop?: boolean }> = ({
  data,
  desktop,
}) => (
  <div
    id='logo-space'
    className={`mr-20 flex flex-shrink-0 flex-col ${desktop ? 'w-[152px] gap-[12px]' : 'w-[152px] gap-[4px]'}`}
  >
    <Image
      src={data.logo}
      alt={data.company}
      width={desktop ? 152 : 102}
      height={desktop ? 48 : 0}
      className='w-25.5 object-contain md:w-38'
    />
    <div
      className={
        desktop
          ? 'text-xl-semibold text-neutral-950'
          : 'text-md-semibold text-neutral-950'
      }
    >
      {data.company}
    </div>
    <div
      className={
        desktop
          ? 'text-md-regular text-neutral-750'
          : 'text-sm-regular text-neutral-750'
      }
    >
      {data.year}
    </div>
  </div>
);

// Komponen konten
const Content: React.FC<{ data: WorkExperience; desktop?: boolean }> = ({
  data,
  desktop,
}) => (
  <div
    id='content-space'
    className={`${desktop ? 'flex flex-1 basis-[320px]' : 'mt-[8px] flex flex-1 basis-[320px]'}`}
  >
    <div
      className={`flex flex-col items-start ${desktop ? 'gap-[16px]' : 'gap-[4px]'}`}
    >
      <div
        className={
          desktop
            ? 'text-xl-semibold text-neutral-950'
            : 'text-md-semibold text-neutral-950'
        }
      >
        {data.position}
      </div>
      <p
        className={
          desktop
            ? 'text-md-regular text-neutral-700'
            : 'text-sm-regular text-neutral-700'
        }
      >
        {data.description}
      </p>
    </div>
  </div>
);

const MyWorkExperienceCard: React.FC<MyWorkExperienceCardProps> = ({
  data,
  isLast,
}) => {
  const [mounted, setMounted] = React.useState(false);
  const isDesktop = useIsDesktop();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!data) return null;

  if (!mounted) return null;

  if (isDesktop) {
    return (
      <div id='mode-desktop' className='flex flex-wrap'>
        <LogoInfo data={data} desktop />
        <Decoration isLast={isLast} desktop />
        <Content data={data} desktop />
      </div>
    );
  }

  // MODE MOBILE
  return (
    <div id='mode-md-mobile' className='flex'>
      <Decoration isLast={isLast} />
      <div>
        <LogoInfo data={data} />
        <Content data={data} />
      </div>
    </div>
  );
};

export default MyWorkExperienceCard;
