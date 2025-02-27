'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Input } from './ui/input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

const PasswordInput = React.forwardRef<
  HTMLInputElement, InputProps
>(({ className, type, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className='relative'>
      <Input
        {...props}
        ref={ref}
        className={cn('pr-10', className)}
        type={showPassword ? 'text' : 'password'}
      />
      <span className='absolute top-[7px] right-1 cursor-pointer select-none'>
        {showPassword ? (
          <EyeIcon onClick={() => setShowPassword(false)} />
        ) : (
          <EyeOffIcon onClick={() => setShowPassword(true)} />
        )}
  
      </span>
    </div>
  );
});
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
