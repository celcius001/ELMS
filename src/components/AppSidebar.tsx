import {
  Building,
  Building2,
  ChartPie,
  ChevronUp,
  CircleUserRound,
  Clipboard,
  Folder,
  Home,
  Plane,
  SquareUserRound,
  User2,
} from 'lucide-react';
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from './ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { auth } from '@/lib/actions/authSetup';
import { getRoles } from '@/lib/actions/roleSetup';
import { doLogout } from '@/lib/actions/loginSetup';

const adminItems = [
  {
    label: 'Dashboard',
    href: '/',
    icon: Home,
  },
  {
    label: 'Department',
    href: '#',
    icon: Building,
  },
  {
    label: 'Designation',
    href: '#',
    icon: Building2,
  },
  {
    label: 'Employees',
    href: '#',
    icon: SquareUserRound,
  },
  {
    label: 'Leave Type',
    href: '#',
    icon: Clipboard,
  },
  {
    label: 'Leave Management',
    href: '#',
    icon: Folder,
  },
  {
    label: 'Users',
    href: '#',
    icon: CircleUserRound,
  },
  {
    label: 'Reports',
    href: '#',
    icon: ChartPie,
  },
];

const userItems = [
  {
    label: 'Dashboard',
    href: '/',
    icon: Home,
  },
  {
    label: 'Apply Leave',
    href: '/apply-leave',
    icon: Plane,
  },
  {
    label: 'Leave Status',
    href: '/leave-status',
    icon: Plane,
  },
];

const AppSidebar = async () => {
  const roles = await getRoles();

  const items = roles.some((role) => role.name === 'Admin') ? adminItems : userItems;

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src={'/vercel.svg'} alt="logo" className="h-5 w-5" width={20} height={20} />
                <span>BOHECO II</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {roles[0]?.name === 'Admin' && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Administrator <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <Link href="/create-role">
                    <DropdownMenuItem>Create Role</DropdownMenuItem>
                  </Link>
                  <Link href="/assign-leave">
                    <DropdownMenuItem>Assign Leave</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Setting</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
