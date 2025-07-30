import { z } from 'zod';

export const leaveSchema = z
  .object({
    type: z.enum(['vacation', 'sick', 'nea', 'other']),
    from: z.date({ message: 'From date is required' }),
    to: z.date({ message: 'To date is required' }),
    reason: z.string().min(1, { message: 'Reason is required' }).max(100),
  })
  .refine((data) => data.to >= data.from, {
    message: 'To date must be after from date',
    path: ['to'],
  });

export const roleSchema = z.object({
  role: z.string().min(1, { message: 'Role is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
});
