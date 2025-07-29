'use server';

import z from 'zod';
import { roleSchema } from '../zodSchemas';
import { prisma } from '../prisma';

export async function createRole(values: z.infer<typeof roleSchema>) {
  const result = roleSchema.safeParse(values);
  if (!result.success) {
    throw new Error(result.error.message);
  }

  if (!values.role || !values.description) {
    return { success: false, error: 'Role and description are required' };
  }

  try {
    const newRole = await prisma.role.create({
      data: {
        name: values.role || '',
        description: values.description || '',
        createdAt: new Date(),
      },
    });
    return { success: true, role: newRole };
  } catch (error) {
    return { success: false, error: 'Failed to create role' };
  }
}
