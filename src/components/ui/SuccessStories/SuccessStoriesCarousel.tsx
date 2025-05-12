'use client';

import React, { useState, useEffect } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

import { SuccessStoryProps } from '@/constant/successStoriesData';
import { cn } from '@/lib/utils';

import { SuccessStoriesCard } from './SuccessStoriesCard';

type SuccessStoriesCarouselProps = {
  slides: SuccessStoryProps[];
  className?: string;
};

const AUTO_SLIDE_INTERVAL = 1500; // ms
const SuccessStoriesCarousel: React.FC<SuccessStoriesCarouselProps> = ({
  slides,
  className,
}) => {
  const [active, setActive] = useState(0);
  const [embla, setEmbla] = useState<CarouselApi | null>(null);

  //infinite auto slide looping
  useEffect(() => {
    if (!embla) return;

    const autoSlide = setInterval(() => {
      embla.scrollTo(embla.selectedScrollSnap() + 1);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(autoSlide);
  }, [embla, slides.length]);

  // fungsi bullet active update base on slide change
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

  const goToSlide = (idx: number) => {
    embla?.scrollTo(idx);
  };

  return (
    <div className={cn('', className)}>
      {/* infinite slide loop */}
      <Carousel className='' setApi={setEmbla} opts={{ loop: true }}>
        <CarouselContent className=''>
          {slides.map((skill, idx) => (
            <CarouselItem
              key={idx}
              className='basis-full md:basis-1/2 lg:basis-1/3'
            >
              <div className='flex h-full flex-col px-2 py-4'>
                <SuccessStoriesCard className='h-full' {...skill} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='mt-[24px] flex justify-center gap-2 md:mt-[48px]'>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 rounded-full transition-all ${active === idx ? 'bg-primary-200 w-8' : 'w-4 bg-neutral-300'}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesCarousel;
