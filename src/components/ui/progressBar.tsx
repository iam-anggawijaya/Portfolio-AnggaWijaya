'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

import { cn } from '@/lib/utils';

function ProgressBar({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <ProgressPrimitive.Root
      data-slot='progress'
      ref={ref}
      className={cn(
        'relative h-full w-full overflow-hidden rounded-full bg-neutral-300',
        className
      )}
      {...props}
    >
      <motion.div
        key={value}
        data-slot='progress-indicator'
        className='bg-primary-300 h-full flex-1 rounded-full'
        initial={{ width: 0, opacity: 0 }}
        animate={
          isInView
            ? { width: `${value || 0}%`, scale: [1, 2, 1], opacity: [0, 1] }
            : {}
        }
        transition={{
          duration: 1.1,
          ease: 'easeInOut',
          delay: 0.3,
          bounce: 0.5,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { ProgressBar };
