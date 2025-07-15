import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "subtle";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
          variant === "default" &&
            "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
          variant === "subtle" &&
            "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
