import { GlassCard } from "./GlassCard";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  delay?: number;
}

export const KPICard = ({ icon: Icon, value, label, delay = 0 }: KPICardProps) => {
  return (
    <GlassCard 
      className="animate-slide-up text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center gap-3">
        <div 
          className="p-3 rounded-xl"
          style={{
            background: 'hsl(var(--primary) / 0.12)',
            border: '1px solid hsl(var(--primary) / 0.2)',
          }}
        >
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="text-3xl font-bold gradient-text">{value}</p>
          <p className="text-sm text-muted-foreground mt-1">{label}</p>
        </div>
      </div>
    </GlassCard>
  );
};
