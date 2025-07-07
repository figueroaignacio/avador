'use client';

// Styles
import styles from './button.module.css';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={() => alert(`Se vienen cositas`)}>
      {children}
    </button>
  );
};
