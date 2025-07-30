'use server';

import { z } from 'zod';
import { leaveSchema } from '@/lib/zodSchemas';
import { prisma } from '../prisma';
import { auth } from './authSetup';

export async function createLeave(values: z.infer<typeof leaveSchema>) {
  const session = await auth();
  const result = leaveSchema.safeParse(values);
  if (!result.success) {
    throw new Error(result.error.message);
  }

  if (!values.type || !values.from || !values.to || !values.reason) {
    return { success: false, error: 'All fields are required' };
  }

  try {
    const newLeave = await prisma.leaveStatus.create({
      data: {
        leaveType: values.type,
        startDate: values.from,
        endDate: values.to,
        reason: values.reason,
        status: 'pending', // or another default/status value as required by your schema
        user: {
          // Use the authenticated user's ID from the session
          connect: { id: session?.user?.id || '' },
        },
      },
    });
    return { success: true, leave: newLeave };
  } catch (error) {
    return { success: false, error: 'Failed to create leave' };
  }
}

export async function getAllLeaves(userId: string) {
  try {
    const leaves = await prisma.leaveStatus.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: true, // Include user details if needed
      },
    });
    const formattedLeaves = leaves.map((leave) => {
      const fromDate = leave.startDate;
      const toDate = leave.endDate;
      // Function to count weekdays (Mon–Fri)
      const countWeekdays = (start: Date, end: Date) => {
        let count = 0;
        const current = new Date(start);
        while (current <= end) {
          const day = current.getDay();
          if (day !== 0 && day !== 6) {
            // 0 = Sunday, 6 = Saturday
            count++;
          }
          current.setDate(current.getDate() + 1);
        }
        return count;
      };
      const weekdays = countWeekdays(fromDate, toDate);
      return {
        ...leave,
        from: fromDate.toISOString(),
        to: toDate.toISOString(),
        days: weekdays,
      };
    });
    return { success: true, leaves: formattedLeaves };
  } catch (error) {
    return { success: false, error: 'Failed to fetch leaves' };
  }
}
