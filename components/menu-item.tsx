'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function MenuItem({ children, href }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      className={cn(
        'block p-2 hover:text-zinc-700 dark:hover:text-zinc-700 rounded-md text-muted-zinc-500',
        isActive && 'text-zinc-900'
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
