'use client';

import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

import { navigationData } from '@/constant/navigation-data';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Tambahan untuk hide/show navbar
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Deteksi apakah navbar telah mencapai section tertentu
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide jika scroll ke bawah, show jika scroll ke atas
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollY.current = currentScrollY;
      // Deteksi apakah navbar telah mencapai section tertentu
      const targetSection = document.getElementById('target-section');
      if (targetSection) {
        const sectionTop = targetSection.offsetTop;
        setIsScrolled(window.scrollY >= sectionTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animasi perubahan warna background dan teks navbar
  const background = useTransform(
    scrollY,
    [0, 100],
    isScrolled
      ? ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.6)']
      : ['rgba(22,1,49,0)', 'rgba(22,1,49,0.5)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(5px)']
  );

  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className={`fixed top-0 z-60 w-full transition-colors transition-transform duration-1000 ${isScrolled ? 'text-black' : 'text-white'} ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className='flex-between custom-container h-20'>
        <Link href='#home'>
          <Image
            src={
              isScrolled ? '/images/your-logo.svg' : '/images/your-logo-w.svg'
            }
            alt='logo'
            width={141}
            height={32}
          />
        </Link>
        <nav className='hidden lg:block'>
          <ul className='flex gap-8'>
            {navigationData.map((data) => (
              <li key={data.label} className='group relative'>
                <Link
                  href={data.href}
                  className={`${isScrolled ? 'text-black' : 'text-white'} group-hover:text-primary-200 transition-colors duration-300`}
                >
                  {data.label}
                </Link>
                <div className='bg-primary-200 absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full'></div>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          asChild
          className={`hover:bg-primary-200 hidden transition-colors duration-300 lg:flex lg:w-43.75 ${isScrolled ? 'bg-primary-300 text-neutral-25' : 'bg-neutral-25 text-neutral-950'}`}
        >
          <Link href='#contact' className='flex items-center gap-2'>
            <Mail className='size-5' />
            Hire Me
          </Link>
        </Button>

        {/* Sheet versi mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Icon
              icon='heroicons-solid:menu-alt-3'
              className={`size-6 cursor-pointer transition-colors duration-300 lg:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
            />
          </SheetTrigger>

          <SheetContent className='bg-base-white z-100'>
            <SheetHeader />
            <SheetTitle />

            <nav className='mt-4'>
              <ul className='flex flex-col gap-4'>
                {navigationData.map((data) => (
                  <li key={data.label} className='group relative'>
                    <SheetClose asChild>
                      <Link
                        href={data.href}
                        className='hover:text-primary-300 text-md-regular relative flex px-2 py-2 text-neutral-950'
                      >
                        {data.label}
                        <div className='bg-primary-200 absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-[15%]'></div>
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              asChild
              variant='secondary'
              className='hover:bg-primary-200 mt-3 hidden w-full transition-colors duration-300'
            >
              <SheetClose asChild>
                <Link href='#contact' className='flex-center gap-1'>
                  <Mail className='size-5' />
                  Hire Me
                </Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
// 'use client';

// import { Icon } from '@iconify/react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Mail } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// import { Button } from '@/components/ui/button';
// import {
//   Sheet,
//   SheetTrigger,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetClose,
// } from '@/components/ui/sheet';

// import { navigationData } from '@/constant/navigation-data';

// const Navbar = () => {
//   const { scrollY } = useScroll();
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Deteksi apakah navbar telah mencapai section tertentu
//   useEffect(() => {
//     const handleScroll = () => {
//       const targetSection = document.getElementById('target-section');
//       if (targetSection) {
//         const sectionTop = targetSection.offsetTop;
//         setIsScrolled(window.scrollY >= sectionTop);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Animasi perubahan warna background dan teks navbar
//   const background = useTransform(
//     scrollY,
//     [0, 100],
//     isScrolled
//       ? ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.6)']
//       : ['rgba(22,1,49,0)', 'rgba(22,1,49,0.5)']
//   );

//   const backdropBlur = useTransform(
//     scrollY,
//     [0, 100],
//     ['blur(0px)', 'blur(5px)']
//   );

//   return (
//     <motion.header
//       style={{ background, backdropFilter: backdropBlur }}
//       className={`fixed top-0 z-60 w-full transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
//     >
//       <div className='flex-between custom-container h-20'>
//         <Image
//           // src='/images/your-logo-w.svg'
//           src={isScrolled ? '/images/your-logo.svg' : '/images/your-logo-w.svg'}
//           alt='logo'
//           width={141}
//           height={32}
//         />
//         <nav className='hidden lg:block'>
//           <ul className='flex gap-8'>
//             {navigationData.map((data) => (
//               <li key={data.label} className='group relative'>
//                 <Link
//                   href={data.href}
//                   className={`${isScrolled ? 'text-black' : 'text-white'} group-hover:text-primary-200 transition-colors duration-300`}
//                 >
//                   {data.label}
//                 </Link>
//                 <div className='bg-primary-200 absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full'></div>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <Button
//           asChild
//           className={`hover:bg-primary-200 hidden transition-colors duration-300 lg:flex lg:w-43.75 ${isScrolled ? 'bg-primary-300 text-neutral-25' : 'bg-neutral-25 text-neutral-950'}`}
//         >
//           <Link href='#contact' className='flex items-center gap-2'>
//             <Mail className='size-5' />
//             Hire Me
//           </Link>
//         </Button>

//         {/* Sheet versi mobile */}
//         <Sheet>
//           <SheetTrigger asChild>
//             <Icon
//               icon='heroicons-solid:menu-alt-3'
//               className={`size-6 cursor-pointer transition-colors duration-300 lg:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
//             />
//           </SheetTrigger>

//           <SheetContent className='bg-base-white z-100'>
//             <SheetHeader />
//             <SheetTitle />

//             <nav className='mt-4'>
//               <ul className='flex flex-col gap-4'>
//                 {navigationData.map((data) => (
//                   <li key={data.label} className='group relative'>
//                     <SheetClose asChild>
//                       <Link
//                         href={data.href}
//                         className='hover:text-primary-300 text-md-regular relative flex px-2 py-2 text-neutral-950'
//                       >
//                         {data.label}
//                         <div className='bg-primary-200 absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-[15%]'></div>
//                       </Link>
//                     </SheetClose>
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             <Button
//               asChild
//               variant='secondary'
//               className='hover:bg-primary-200 mt-3 hidden w-full transition-colors duration-300'
//             >
//               <SheetClose asChild>
//                 <Link href='#contact' className='flex-center gap-1'>
//                   <Mail className='size-5' />
//                   Hire Me
//                 </Link>
//               </SheetClose>
//             </Button>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </motion.header>
//   );
// };

// export default Navbar;
