import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        destructive: "border-2 border-destructive bg-transparent text-destructive hover:bg-destructive hover:text-destructive-foreground",
        outline: "border-2 border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary: "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 hover:shadow-elegant hover:scale-105 transition-all duration-300 font-semibold border-2 border-primary",
        "outline-hero": "border-2 border-white text-white bg-transparent hover:bg-white hover:text-accent transition-all duration-300 font-semibold",
        scroll: "bg-transparent text-white hover:bg-transparent focus:bg-transparent p-3 hover:scale-110 transition-all duration-300",
      },
      size: {
        default: "p-3",
        sm: "p-2",
        lg: "p-4",
        xl: "p-5 text-lg",
        icon: "h-10 w-10",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };