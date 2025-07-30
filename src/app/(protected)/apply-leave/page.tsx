import ApplyLeave from '@/components/ApplyLeave';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';

const LeavePage = async () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/apply-leave">Apply Leave</BreadcrumbLink>
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
