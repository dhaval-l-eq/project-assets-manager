import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-primary-950 dark:focus-visible:ring-primary-300",
  {
    variants: {
      variant: {
        default: "bg-primary text-black hover:bg-primary-100 dark:bg-primary-50 dark:text-primary dark:hover:bg-primary-50/90",
        destructive:
          "bg-danger text-primary-50 hover:bg-red-500/90 dark:bg-red dark:text-primary-50 dark:hover:bg-red/90",
        outline:
          "border border-primary-200 hover:bg-primary text-primary hover:text-black dark:border-primary-800 dark:bg-primary-950 dark:hover:bg-primary-800 dark:hover:text-primary-50",
        secondary:
          "bg-primary-100 text-primary hover:bg-primary-100/80 dark:bg-primary-800 dark:text-primary-50 dark:hover:bg-primary-800/80",
        ghost: "hover:bg-primary-100/50 hover:text-primary dark:hover:bg-primary-800 dark:hover:text-primary-50",
        link: "text-primary underline-offset-4 hover:underline dark:text-primary-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
