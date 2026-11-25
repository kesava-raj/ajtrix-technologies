import React from "react";
import "./ShinyButton.css";

export interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function ShinyButton({
  children,
  className = "",
  type = "button",
  ...props
}: ShinyButtonProps) {
  return (
    <button
      type={type}
      className={`shiny-cta disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}
