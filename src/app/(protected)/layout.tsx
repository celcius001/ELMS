import { ThemeProvider } from '@/components/providers/ThemeProvider';
import React from 'react';
import { cookies } from 'next/headers';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import Navbar from '@/components/Navbar';
import { auth } from '@/lib/actions/authSetup';
import { redirect } from 'next/navigation';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  const session = await auth();
  if (!session?.user) redirect('/login');

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <main className="w-full">
          <Navbar avatar={session.user.image as string} />
          <div className="px-4">{children}</div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default DashboardLayout;
