'use server';

import { z } from 'zod';
import { leaveSchema } from '@/lib/zodSchemas';

export async function createLeave(values: z.infer<typeof leaveSchema>) {
  const result = leaveSchema.safeParse(values);
  if (!result.success) {
    throw new Error(result.error.message);
  }
  console.log(values.id, values.type, values.from, values.to);
}
