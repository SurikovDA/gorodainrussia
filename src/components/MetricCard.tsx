import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  variant?: "default" | "success" | "warning";
}

const variantStyles = {
  default: {
    background: 'var(--glass-bg)',
    border: '1px solid var(--glass-border)',
    iconColor: 'hsl(var(--muted-foreground))',
    valueColor: 'hsl(var(--foreground))',
  },
  success: {
    background: 'hsl(150 60% 45% / 0.12)',
    border: '1px solid hsl(150 60% 45% / 0.25)',
    iconColor: 'hsl(150 60% 40%)',
    valueColor: 'hsl(150 60% 35%)',
  },
  warning: {
    background: 'hsl(35 90% 55% / 0.12)',
    border: '1px solid hsl(35 90% 55% / 0.25)',
    iconColor: 'hsl(35 90% 45%)',
    valueColor: 'hsl(35 80% 40%)',
  },
};

export const MetricCard = ({ icon: Icon, label, value, variant = "default" }: MetricCardProps) => {
  const styles = variantStyles[variant];
  
  return (
    <div 
      className={cn("p-4 rounded-xl")}
      style={{
        background: styles.background,
        border: styles.border,
      }}
    >
      <div className="flex items-center gap-2 mb-2" style={{ color: styles.iconColor }}>
        <Icon className="w-4 h-4" />
        <span className="text-sm">{label}</span>
      </div>
      <p className="text-xl font-bold" style={{ color: styles.valueColor }}>{value}</p>
    </div>
  );
};
