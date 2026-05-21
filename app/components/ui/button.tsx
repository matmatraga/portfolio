import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "solid";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
          "disabled:opacity-50 disabled:pointer-events-none",
          variant === "default" && "bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300",
          variant === "outline" &&
            "border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800",
          variant === "ghost" && "hover:bg-surface-elevated",
          variant === "solid" && "bg-gray-200 text-gray-900 hover:bg-gray-300",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
