import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  style?: CSSProperties;
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
};

export const GlassCard = ({ 
  children, 
  className, 
  hover = false,
  padding = "md",
  style
}: GlassCardProps) => {
  return (
    <div 
      className={cn(
        hover ? "glass-card-hover" : "glass-card",
        paddingClasses[padding],
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
