import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

import { FAQData } from '@/constant/faqData';

const FAQ = () => {
  return (
    //Section---------------------------------------------------------------------------------
    <div
      className='custom-container flex flex-col gap-[24px] py-[80px]'
      id='container-skill'
    >
      <div className='flex-between flex h-full rounded-4xl border border-neutral-300 bg-neutral-50 px-[16px] py-[20px] md:p-[40px]'>
        <div className='mx-auto flex min-h-[663px] w-full flex-col justify-between md:mx-0 md:mr-5 md:w-full md:max-w-[357px]'>
          <div className='flex flex-col gap-5'>
            <div className='flex-center bg-primary-100 pointer-events-none relative size-[48px] flex-col rounded-full'>
              <Image
                src='/icons/icon-chat.svg'
                fill
                alt='faq'
                className='object-contain p-[14px]'
              />
            </div>
            <h2 className='md:display-2xl-bold display-md-bold text-neutral-950'>
              Have Question?
            </h2>
          </div>
          {/* Accordion hanya di mobile */}
          <div className='my-5 block md:hidden'>
            <Accordion
              type='single'
              collapsible
              className='mx-auto max-w-[594px]'
            >
              {FAQData.map((item, index) => (
                <AccordionItem key={index} value={index.toString()}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className='bg-base-white flex w-full flex-col gap-4 rounded-2xl border border-neutral-300 p-6 md:max-w-[357px]'>
            <div className='flex-center bg-secondary-200 pointer-events-none relative size-[80px] flex-col overflow-hidden rounded-full'>
              <Image
                src='/images/asian-men.png'
                fill
                alt='faq'
                className='absolute translate-y-1 object-contain'
                sizes='max-width: 768px 100vw, 50vw'
              />
            </div>
            {/* Accordion hanya di mobile */}
            <p className='text-lg-regular block text-neutral-950 md:hidden'>
              Have more questions? Send me a message.
            </p>
            {/* Accordion hanya di desktop */}
            <p className='text-lg-regular hidden text-neutral-950 md:block'>
              Have more questions? <br /> Send me a message.
            </p>
            <Button asChild variant={'secondary'} size='default'>
              <Link href='#contact' className='text-sm-medium text-neutral-25'>
                Get in touch
              </Link>
            </Button>
          </div>
        </div>
        {/* Accordion hanya di desktop */}
        <div className='hidden md:block'>
          <Accordion
            type='single'
            collapsible
            className='mx-auto max-w-[594px]'
          >
            {FAQData.map((item, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
