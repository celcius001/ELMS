import ApplyLeave from '@/components/ApplyLeave';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { auth } from '@/lib/actions/authSetup';
import { redirect } from 'next/navigation';
import React from 'react';

const LeavePage = async () => {
  const session = await auth();

  if (!session?.user) redirect('/login');
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/leave">Leave Application</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 flex w-full flex-col space-y-6">
        <h1 className="text-2xl font-bold">Apply for Leave</h1>
        <ApplyLeave />
      </div>
    </div>
  );
};

export default LeavePage;
