import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(_: Request) {
  try {
    const [total, approved, pending, canceled] = await Promise.all([
      prisma.leaveStatus.count(),
      prisma.leaveStatus.count({ where: { status: 'approved' } }),
      prisma.leaveStatus.count({ where: { status: 'pending' } }),
      prisma.leaveStatus.count({ where: { status: 'canceled' } }),
    ]);
    return NextResponse.json({
      success: true,
      total,
      approved,
      pending,
      canceled,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch leave types' }, { status: 500 });
  }
}
