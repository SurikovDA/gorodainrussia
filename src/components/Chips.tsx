import { cn } from "@/lib/utils";

interface ChipsProps {
  items: string[];
  variant?: "default" | "success" | "destructive" | "warning";
  emptyText?: string;
}

const variantStyles = {
  default: {
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(var(--blur-glass))',
    border: '1px solid var(--glass-border)',
  },
  success: {
    background: 'hsl(150 60% 45% / 0.12)',
    border: '1px solid hsl(150 60% 45% / 0.25)',
    color: 'hsl(150 60% 35%)',
  },
  destructive: {
    background: 'hsl(0 84% 60% / 0.12)',
    border: '1px solid hsl(0 84% 60% / 0.25)',
    color: 'hsl(0 70% 50%)',
  },
  warning: {
    background: 'hsl(35 90% 55% / 0.12)',
    border: '1px solid hsl(35 90% 55% / 0.25)',
    color: 'hsl(35 80% 40%)',
  },
};

export const Chips = ({ items, variant = "default", emptyText = "Нет данных" }: ChipsProps) => {
  if (!items || items.length === 0) {
    return <p className="text-muted-foreground text-sm">{emptyText}</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span 
          key={index} 
          className={cn(
            "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
          )}
          style={variantStyles[variant]}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
