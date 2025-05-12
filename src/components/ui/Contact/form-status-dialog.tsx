import Image from 'next/image';
import React from 'react';

import { Button } from '../button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent className='bg-base-white max-w-[361px] md:max-w-[479px]'>
        <DialogHeader>
          <Image
            src={
              variant === 'success'
                ? '/icons/icon-form-message-success.svg'
                : '/icons/icon-form-message-error.svg'
            }
            alt={variant === 'success' ? 'success' : 'error'}
            width={232}
            height={190}
            className='mx-auto h-[140px] w-[171px] md:mx-0 md:h-[190px] md:w-[232px]'
          />
        </DialogHeader>
        <DialogBody>
          <DialogTitle>
            {variant === 'success'
              ? 'Message Sent Successfully!'
              : 'Failed to send.'}
          </DialogTitle>
          <DialogDescription>
            {variant === 'success'
              ? 'Thank you for reaching out. I’ll get back to you as soon as possible.'
              : 'Please check your internet connection or try refreshing the page.'}
          </DialogDescription>
          <DialogClose asChild>
            <Button
              variant='secondary'
              className='mx-auto mt-5 w-full py-[10px] md:mt-6 md:max-w-[310px]'
            >
              {loading
                ? 'Loading...'
                : variant === 'success'
                  ? 'Back to Home'
                  : 'Try Again'}
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
