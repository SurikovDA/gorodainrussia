import { TrendingUp, TrendingDown } from "lucide-react";
import { formatCurrency } from "@/lib/formatters";
import { cn } from "@/lib/utils";

interface ProfessionListProps {
  items: { title: string; salary: number }[];
  variant: "high" | "low";
}

export const ProfessionList = ({ items, variant }: ProfessionListProps) => {
  if (!items || items.length === 0) {
    return <p className="text-muted-foreground text-sm">Нет данных</p>;
  }

  const Icon = variant === "high" ? TrendingUp : TrendingDown;
  const colorClass = variant === "high" ? "text-success" : "text-warning";

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/30"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground w-5">
              {index + 1}.
            </span>
            <span className="text-sm text-foreground">{item.title}</span>
          </div>
          <div className={cn("flex items-center gap-2", colorClass)}>
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{formatCurrency(item.salary)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
