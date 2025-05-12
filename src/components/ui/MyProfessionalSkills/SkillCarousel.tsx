import React, { useState, useEffect, useCallback } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

import { skillProgressProps } from '@/constant/myProfessionalSkillData';

import { SkillProgressCard } from './SkillProgressCard';

type SkillCarouselProps = {
  slides: Array<Array<skillProgressProps>>;
};

const AUTO_SLIDE_INTERVAL = 12000; // ms

const SkillCarousel: React.FC<SkillCarouselProps> = ({ slides }) => {
  const [active, setActive] = useState(0);
  const [embla, setEmbla] = useState<CarouselApi | null>(null);

  // Auto slide effect
  useEffect(() => {
    if (!embla) return;
    const autoSlide = setInterval(() => {
      if (!embla) return;
      const isLast = embla.selectedScrollSnap() === slides.length - 1;
      embla.scrollTo(isLast ? 0 : embla.selectedScrollSnap() + 1);
    }, AUTO_SLIDE_INTERVAL);
    return () => {
      clearInterval(autoSlide);
    };
  }, [embla, slides.length]);

  // Update active index on slide change
  useEffect(() => {
    if (!embla) return undefined;
    const onSelect = () => {
      setActive(embla?.selectedScrollSnap() || 0);
    };

    embla.on('select', onSelect);
    return () => {
      embla.off('select', onSelect);
    };
  }, [embla]);

  // Go to slide by index
  const goToSlide = useCallback(
    (idx: number) => {
      embla?.scrollTo(idx);
    },
    [embla]
  );

  return (
    <div>
      <Carousel className='mt-[48px]' setApi={setEmbla}>
        <CarouselContent>
          {slides.map((slide, idx) => (
            <CarouselItem key={idx}>
              <div className='flex flex-wrap justify-center gap-5 px-2 py-4'>
                {slide.map((skill, i) => (
                  <SkillProgressCard
                    className='flex flex-1 basis-[480px] flex-col p-4'
                    key={i}
                    {...skill}
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='mt-4 flex justify-center gap-2'>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`mt-[24px] h-3 rounded-full transition-all md:mt-[48px] ${active === idx ? 'bg-primary-200 w-8' : 'w-4 bg-neutral-300'}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;
