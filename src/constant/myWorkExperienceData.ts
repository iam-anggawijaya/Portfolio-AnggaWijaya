export type WorkExperience = {
  position: string;
  company: string;
  description: string;
  year: string;
  logo: string;
};

export const workExperienceData: WorkExperience[] = [
  {
    position: 'Frontend Developer',
    company: 'Trustpilot',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    year: '2021-2024',
    logo: '/icons/icon-trustpilot.svg',
  },
  {
    position: 'Frontend Developer',
    company: 'Postman',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    year: '2021-2024',
    logo: '/icons/icon-postman.svg',
  },
  {
    position: 'Frontend Developer',
    company: 'Spotify',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    year: '2021-2024',
    logo: '/icons/icon-spotify.svg',
  },
];
