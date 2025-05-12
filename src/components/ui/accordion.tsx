'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { PlusIcon, MinusIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        'border-0 border-b border-neutral-300 py-5 last:border-b-0 md:py-8',
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          '!text-md-semibold md:text-xl-semibold hover:text-primary-300 data-[state=open]:text-primary-300 group/trigger flex flex-1 cursor-pointer items-start justify-between gap-[49px] text-left text-neutral-950 transition-all md:gap-[45px]',
          className
        )}
        {...props}
      >
        <div className='flex-1 text-left'>{children}</div>
        <div className='shrink-0'>
          <div className='flex-center size-5 rounded-full bg-neutral-200 group-data-[state=open]/trigger:hidden md:size-8'>
            <PlusIcon className='size-4 text-neutral-950 group-data-[state=open]/trigger:hidden md:size-6' />
          </div>
          <div className='flex-center bg-primary-300 size-5 rounded-full group-data-[state=closed]/trigger:hidden md:size-8'>
            <MinusIcon className='text-base-white size-4 group-data-[state=closed]/trigger:hidden md:size-6' />
          </div>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-sm-regular overflow-hidden'
      {...props}
    >
      <div
        className={cn(
          'text-sm-regular md:text-md-regular mt-[12px] text-neutral-700 md:mt-[23px]',
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
