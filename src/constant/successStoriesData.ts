import IconUpwork from '@/../public/icons/icon-upwork.svg';
import IconZapier from '@/../public/icons/icon-zapier.svg';
import IconZoom from '@/../public/icons/icon-zoom.svg';

export type SuccessStoryProps = {
  src: string;
  quote: string;
  stars: number;
  personName: string;
  personPosition: string;
  className?: string;
};

export const successStoriesData: SuccessStoryProps[] = [
  {
    src: IconUpwork,
    quote:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
    stars: 5,
    personName: 'Robert Lewandowski',
    personPosition: 'Head of Engineering, Upwork',
  },
  {
    src: IconZapier,
    quote:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
    stars: 5,
    personName: 'Dani Olmo',
    personPosition: 'Product Manager, Zapier',
  },
  {
    src: IconZoom,
    quote:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
    stars: 5,
    personName: 'Jude Belingham',
    personPosition: 'Vice President, Zoom',
  },

  {
    src: IconUpwork,
    quote:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
    stars: 5,
    personName: 'Robert Lewandowski',
    personPosition: 'Head of Engineering, Upwork',
  },
  {
    src: IconZapier,
    quote:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
    stars: 5,
    personName: 'Dani Olmo',
    personPosition: 'Product Manager, Zapier',
  },
  {
    src: IconZoom,
    quote:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
    stars: 5,
    personName: 'Jude Belingham',
    personPosition: 'Vice President, Zoom',
  },
];
