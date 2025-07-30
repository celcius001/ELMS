'use server';
import { prisma } from '../prisma';
import { auth } from '@/lib/actions/authSetup';

export async function getRoles() {
  const session = await auth();
  const userRoles = await prisma.userRole.findMany({
    where: { userId: session?.user?.id as string },
    include: {
      role: true, // Include the role details
    },
  });

  return userRoles.map((userRole) => userRole.role);
}
