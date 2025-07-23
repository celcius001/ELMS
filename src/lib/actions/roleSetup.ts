'use server';
import { prisma } from '../prisma';
import { auth } from '@/lib/actions/authSetup';

export async function getRoles() {
  const session = await auth();
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email as string },
    select: { Roles: true },
  });

  return user?.Roles || [];
}
