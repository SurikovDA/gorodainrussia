import { GlassCard } from "./GlassCard";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export const SectionCard = ({ title, icon: Icon, children, className }: SectionCardProps) => {
  return (
    <GlassCard className={cn("animate-slide-up", className)}>
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <div 
            className="p-2 rounded-lg"
            style={{
              background: 'hsl(var(--primary) / 0.12)',
              border: '1px solid hsl(var(--primary) / 0.2)',
            }}
          >
            <Icon className="w-5 h-5 text-primary" />
          </div>
        )}
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      </div>
      {children}
    </GlassCard>
  );
};
