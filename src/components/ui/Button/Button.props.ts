import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  appearence?: 'big' | 'small' | 'big-white';
  onClick?: () => void;
}
