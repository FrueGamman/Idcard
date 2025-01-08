'use client';

import * as React from 'react';
import { toast as sonnerToast } from 'sonner'; // We'll use sonner for better toast support

type ToastProps = {
  title?: string;
  description?: string;
  duration?: number;
  variant?: 'default' | 'destructive';
};

export function useToast() {
  const toast = ({ title, description, variant = 'default', duration = 3000 }: ToastProps) => {
    sonnerToast[variant === 'destructive' ? 'error' : 'success'](title, {
      description,
      duration,
    });
  };

  return {
    toast,
  };
} 