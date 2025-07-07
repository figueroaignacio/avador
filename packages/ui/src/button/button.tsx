'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import styles from './button.module.css';

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      destructive: styles.destructive,
      outline: styles.outline,
      ghost: styles.ghost,
      link: styles.link,
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, variant }: ButtonProps) => {
  return <button className={buttonVariants({ variant })}>{children}</button>;
};
