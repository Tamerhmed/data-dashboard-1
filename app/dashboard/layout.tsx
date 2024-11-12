import MainMenu from '@/components/main-menu';
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='grid grid-cols-[250px_1fr] h-screen'>
      <MainMenu />
      <div className='overflow-auto py-2 px-4'>{children}</div>
    </div>
  );
}
