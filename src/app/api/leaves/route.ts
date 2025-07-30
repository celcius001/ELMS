import { auth } from '@/lib/actions/authSetup';
import { getAllLeaves } from '@/lib/actions/leaveSetup';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const session = await auth();

  if (!session || !session.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = session.user.id;
  const result = await getAllLeaves(userId);

  return NextResponse.json(result);
}
