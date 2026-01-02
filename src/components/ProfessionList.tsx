import { TrendingUp, TrendingDown } from "lucide-react";
import { formatCurrency } from "@/lib/formatters";

interface ProfessionListProps {
  items: { title: string; salary: number }[];
  variant: "high" | "low";
}

const variantStyles = {
  high: {
    color: 'hsl(150 60% 40%)',
  },
  low: {
    color: 'hsl(35 90% 45%)',
  },
};

export const ProfessionList = ({ items, variant }: ProfessionListProps) => {
  if (!items || items.length === 0) {
    return <p className="text-muted-foreground text-sm">Нет данных</p>;
  }

  const Icon = variant === "high" ? TrendingUp : TrendingDown;
  const styles = variantStyles[variant];

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="flex items-center justify-between p-3 rounded-lg"
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
          }}
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground w-5">
              {index + 1}.
            </span>
            <span className="text-sm text-foreground">{item.title}</span>
          </div>
          <div className="flex items-center gap-2" style={{ color: styles.color }}>
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{formatCurrency(item.salary)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
