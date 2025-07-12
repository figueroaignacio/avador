import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { HTMLAttributes, type JSX, type ReactNode } from 'react';
import styles from './Card.module.css';

const cardVariants = cva(styles.cardBase, {
  variants: {
    variant: {
      default: styles.default,
      muted: styles.muted,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className, variant, ...props }: CardProps): JSX.Element {
  return (
    <div className={clsx(cardVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={clsx(styles.cardHeader, className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>): JSX.Element {
  return (
    <h3 className={clsx(styles.cardTitle, className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>): JSX.Element {
  return (
    <p className={clsx(styles.cardDescription, className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={clsx(styles.cardContent, className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={clsx(styles.cardFooter, className)} {...props}>
      {children}
    </div>
  );
}
