import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';

import { Button } from '../button';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../form';
import FormStatusDialog from './form-status-dialog';
import { Input } from '../input';
import { Textarea } from '../textarea';

const contactFormSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Please enter a valid email address'),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(20, 'Message must be at least 20 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);

  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof contactFormSchema>) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }
  return (
    <div className='bg-base-white w-full space-y-[24px] rounded-xl p-[16px] shadow-xl md:basis-[537px] md:rounded-2xl md:p-[32px]'>
      <p className='md:display-xs-semibold text-lg-semibold text-neutral-950'>
        Send a Message
      </p>
      <Form {...form}>
        <form
          className='mx-auto max-w-180 space-y-4'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => {
              const hasError = !!form.formState.errors.name;
              return (
                <motion.div
                  animate={hasError ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FormItem>
                    <FormLabel htmlFor='contact-name'>Name</FormLabel>
                    <Input
                      id='contact-name'
                      disabled={loading}
                      placeholder='Input your name'
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                </motion.div>
              );
            }}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => {
              const hasError = !!form.formState.errors.email;
              return (
                <motion.div
                  animate={hasError ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FormItem>
                    <FormLabel htmlFor='contact-email'>Email</FormLabel>
                    <Input
                      id='contact-email'
                      disabled={loading}
                      placeholder='Input your email'
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                </motion.div>
              );
            }}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => {
              const hasError = !!form.formState.errors.message;
              return (
                <motion.div
                  animate={hasError ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FormItem>
                    <FormLabel htmlFor='contact-message'>Message</FormLabel>
                    <Textarea
                      id='contact-message'
                      disabled={loading}
                      placeholder='Input your message'
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                </motion.div>
              );
            }}
          />

          <Button
            type='submit'
            variant={'secondary'}
            disabled={loading}
            className='text-sm-medium md:text-md-medium hover:bg-primary-200 text-neutral-25 h-12 w-full md:h-14'
          >
            {loading ? (
              <ClipLoader size={20} color='#fff' />
            ) : (
              <>
                <Send className='mr-1.5 size-4' />
                <span>Submit</span>
              </>
            )}
          </Button>
        </form>
      </Form>
      <FormStatusDialog
        open={showDialog}
        variant={variant}
        loading={loading}
        onOpenChange={setShowDialog}
      />
    </div>
  );
};

export default ContactForm;
