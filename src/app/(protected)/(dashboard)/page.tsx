'use client';
import CardList from '@/components/CardList';
import { Check, Plane, ShieldAlert, Trash, Users } from 'lucide-react';
import React, { useEffect } from 'react';

const DashboardPage = () => {
  const [counts, setCounts] = React.useState({
    leave: 0,
    approve: 0,
    pending: 0,
    canceled: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await fetch('/api/leaves/summary');
        const data = await res.json();

        if (data.success) {
          setCounts({
            leave: data.total,
            approve: data.approved,
            pending: data.pending,
            canceled: data.canceled,
          });
        } else {
          console.error('Failed to fetch counts:', data.error);
          setCounts({
            leave: 0,
            approve: 0,
            pending: 0,
            canceled: 0,
          });
        }
      } catch (error) {
        console.error('Failed to fetch counts:', error);
      }
    };
    fetchCounts();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title="Leave" icon={Plane} count={counts.leave} className="text-green-500" />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title="Approve" icon={Check} count={counts.approve} className="text-sky-500" />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList
          title="Pending"
          icon={ShieldAlert}
          count={counts.pending}
          className="text-orange-500"
        />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title="Canceled" icon={Trash} count={counts.canceled} className="text-red-500" />
      </div>
    </div>
  );
};

export default DashboardPage;
