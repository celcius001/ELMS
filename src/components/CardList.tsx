import React from 'react';
import { Card, CardContent, CardFooter, CardTitle } from './ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CardListProps {
  title: string;
  icon: LucideIcon;
  count?: number;
  className?: string;
}

const CardList = ({ title, icon: Icon, count, className }: CardListProps) => {
  return (
    <div className="">
      <div className="flex flex-col gap-2">
        <Card key={title} className="flex flex-row items-center justify-center gap-4 p-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-sm">
            <Icon className={cn('h-full w-full', className)} />
          </div>
          <CardContent className="flex-1 p-0">
            <CardTitle className="text-muted-foreground text-lg font-medium">{title}</CardTitle>
            <div className="text-2xl font-bold">{count}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardList;
