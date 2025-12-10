'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart'> {
  variant?: 'stroke' | 'fill' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'stroke',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-400 ease-out-custom';
  
  const variants = {
    stroke: 'border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white',
    fill: 'bg-neutral-900 text-white hover:bg-neutral-800',
    ghost: 'text-neutral-600 hover:text-neutral-900',
  };
  
  const sizes = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        'rounded-lg',
        className
      )}
      {...(props as HTMLMotionProps<'button'>)}
    >
      {children}
    </motion.button>
  );
}

