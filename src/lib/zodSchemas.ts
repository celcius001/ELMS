import { z } from 'zod';

export const leaveSchema = z
  .object({
    id: z.string().min(3, { message: 'ID must be at least 3 characters' }).max(3),
    type: z.enum(['vacation', 'sick', 'nea', 'other']),
    from: z.date({ message: 'From date is required' }),
    to: z.date({ message: 'To date is required' }),
  })
  .refine((data) => data.to >= data.from, {
    message: 'To date must be after from date',
    path: ['to'],
  });

export const roleSchema = z.object({
  role: z.string().min(1, { message: 'Role is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
});
