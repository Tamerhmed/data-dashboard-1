import { Button } from '@/components/ui/button';
import { ChartNoAxesCombined } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className='flex gap-2 items-center'>
        <ChartNoAxesCombined size={50} className='text-orange-600' />
        ITE Dashboard
      </h1>
      <p>The ITE (Initial Teacher Education) Data Visualization Dashboard</p>
      <div className='flex gap-2 items-center'>
        <Button asChild>
          <Link href={'/login'}>Log in</Link>
        </Button>
        <Button asChild variant='outline'>
          <Link href={'/sign-up'}>Sign up</Link>
        </Button>
      </div>
    </>
  );
}
