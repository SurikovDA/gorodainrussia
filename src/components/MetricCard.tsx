import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  variant?: "default" | "success" | "warning";
}

const variantClasses = {
  default: "bg-muted/50 border-border/50",
  success: "bg-success/10 border-success/20",
  warning: "bg-warning/10 border-warning/20"
};

const iconClasses = {
  default: "text-muted-foreground",
  success: "text-success",
  warning: "text-warning"
};

const valueClasses = {
  default: "text-foreground",
  success: "text-success",
  warning: "text-warning"
};

export const MetricCard = ({ icon: Icon, label, value, variant = "default" }: MetricCardProps) => {
  return (
    <div className={cn("p-4 rounded-xl border", variantClasses[variant])}>
      <div className={cn("flex items-center gap-2 mb-2", iconClasses[variant])}>
        <Icon className="w-4 h-4" />
        <span className="text-sm">{label}</span>
      </div>
      <p className={cn("text-xl font-bold", valueClasses[variant])}>{value}</p>
    </div>
  );
};
