"use client";

import styles from "./Button.module.scss";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?:
    | "text"
    | "outlined"
    | "contained"
    | "outlinedAlways"
    | "smallOutlined";
  startIcon?: React.ReactNode;
  [x: string]: any;
};

export function Button({
  children,
  className,
  variant = "outlined",
  startIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.container} ${className || ""} ${styles[variant]}`}
      {...props}
    >
      {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
      {children && <div>{children}</div>}
    </button>
  );
}
