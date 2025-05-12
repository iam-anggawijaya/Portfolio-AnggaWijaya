import { Mail, MapPin, Smartphone } from 'lucide-react';
import React from 'react';

import ContactForm from '@/components/ui/Contact/ContactForm';

const ContactMe = () => {
  return (
    //Section---------------------------------------------------------------------------------
    <div
      id='contact'
      className='relative w-full'
      style={{
        backgroundImage: "url('/images/pattern-bot.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'contain',
      }}
    >
      <div
        className='custom-container flex flex-col gap-[24px] py-[80px]'
        id='container-skill'
      >
        <div className='flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between'>
          <div className='flex w-full flex-col gap-10 md:basis-[453px]'>
            <div className='flex flex-col gap-5.5'>
              <h3 className='display-md-bold md:display-2xl-bold tracking-[-0.02em] text-neutral-950'>
                I&apos;ve been waiting for you.
              </h3>
              <p className='text-lg-medium text-neutral-950'>
                Fill in the form or Send us an email
              </p>
            </div>
            <div className='flex flex-col gap-8'>
              <div className='flex items-center gap-4'>
                <div className='bg-primary-100 size-[48px] rounded-full'>
                  <Smartphone
                    className='text-primary-300 object-contain p-3'
                    width='100%'
                    height='100%'
                    strokeWidth={2.5}
                  />
                </div>
                <p className='text-lg-regular text-neutral-950'>
                  +62 1234567890
                </p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='bg-primary-100 size-[48px] rounded-full'>
                  <Mail
                    className='text-primary-300 object-contain p-3'
                    width='100%'
                    height='100%'
                    strokeWidth={2.5}
                  />
                </div>
                <p className='text-lg-regular text-neutral-950'>
                  edwinanderson@email.com
                </p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='bg-primary-100 size-[48px] rounded-full'>
                  <MapPin
                    className='text-primary-300 object-contain p-3'
                    width='100%'
                    height='100%'
                    strokeWidth={2.5}
                  />
                </div>
                <p className='text-lg-regular text-neutral-950'>
                  Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
