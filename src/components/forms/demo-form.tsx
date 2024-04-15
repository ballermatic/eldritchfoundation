'use client';

import { z } from 'zod';

import { Form, useForm } from './form';
import { Input } from './input';

// declare validation and shape of form

const demoFormSchema = z.object({
  firstName: z.string().min(1, 'First Name must be atleast 1 characters long!'),
  username: z
    .string()
    .min(1, 'Username must be atleast 1 characters long!')
    .max(10, 'Consider using shorter username.'),
  email: z.string().email('Please enter a valid email address.'),
  password: z
    .string()
    .min(6, 'Please choose a longer password')
    .max(256, 'Consider using a short password'),
});

export function DemoForm() {
  const form = useForm({
    schema: demoFormSchema,
  });

  return (
    <Form
      form={form}
      onSubmit={(values) => alert('form submitted with ' + JSON.stringify(values))}>
      <Input
        label='Your first name'
        type='text'
        placeholder='John'
        {...form.register('firstName')}
      />
      <Input
        label='Choose username'
        type='text'
        placeholder='im_john_doe'
        {...form.register('username')}
      />
      <Input
        label='Email Address'
        type='email'
        placeholder='you@example.com'
        {...form.register('email')}
      />
      <Input
        label='Password'
        type='password'
        placeholder='Your password (min 6)'
        {...form.register('password')}
      />
      <button type='submit'>Submit </button>
    </Form>
  );
}
