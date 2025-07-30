import CardList from '@/components/CardList';
import { Check, Plane, ShieldAlert, Trash, Users } from 'lucide-react';
import React from 'react';

const DashboardPage = ({
  children,
  defaultOpen,
}: {
  children: React.ReactNode;
  defaultOpen: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title="Leave" icon={Plane} count={100} className="text-green-500" />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title="Approve" icon={Check} count={100} className="text-sky-500" />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title="Pending" icon={ShieldAlert} count={100} className="text-orange-500" />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title="Canceled" icon={Trash} count={100} className="text-red-500" />
      </div>
    </div>
  );
};

export default DashboardPage;
