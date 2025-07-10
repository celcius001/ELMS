'use client';
import CardList from '@/components/CardList';
import { useParams } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { BadgeCheck, Shield } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import EditUser from '@/components/EditUser';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AppLineChart from '@/components/AppLineChart';

const SingleUserPage = () => {
  const params = useParams();
  const username = params.username;
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{username}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 flex flex-col gap-8 xl:flex-row">
        {/* LEFT */}
        <div className="w-full space-y-6 xl:w-1/3">
          {/* USER BADGERS CONTAINER */}
          <div className="bg-primary-foreground rounded-lg p-4">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="mt-4 flex gap-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full border-1 border-blue-500/50 bg-blue-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Verified User</h1>
                  <p className="text-muted-foreground text-sm">
                    This user has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full border-1 border-green-500/50 bg-green-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Admin</h1>
                  <p className="text-muted-foreground text-sm">This user is an admin</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="mt-4 space-y-4">
              <div className="mb-8 flex flex-col gap-2">
                <p className="text-muted-foreground text-sm">Profile completion</p>
                <Progress value={60} />
                <div className="flex items-center gap-2">
                  <span className="font-bold">Username:</span>
                  <span>{username}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Email:</span>
                  <span>{username}@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Phone:</span>
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Location:</span>
                  <span>South Park, SP</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Role:</span>
                  <Badge>Admin</Badge>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">Joined on January 1, 2023</p>
              </div>
            </div>
          </div>
          {/* CARD LIST CONTAINER */}
          <div className="bg-primary-foreground rounded-lg p-4">
            <CardList title="Recent Trasactions" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full space-y-6 xl:w-2/3">
          {/* USER CARD CONTAINER */}
          <div className="bg-primary-foreground space-y-2 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/69677688?v=4"
                  alt="avatar"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">{username}</h1>
            </div>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio sed et inventore esse
              voluptates animi expedita fugiat, alias aut veritatis magnam voluptas culpa officiis
              distinctio pariatur tempore atque, dignissimos repellendus. Ex incidunt nisi nam, cum,
              possimus saepe voluptate sunt alias sint dolore officiis veniam cupiditate fugiat?
              Aspernatur, velit obcaecati quod quia fugiat dicta ipsum quo quis a! Vel, eum
              perspiciatis.
            </p>
          </div>
          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground rounded-lg p-4">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
