import { cn } from "@/lib/utils";

interface ChipsProps {
  items: string[];
  variant?: "default" | "success" | "destructive" | "warning";
  emptyText?: string;
}

const variantClasses = {
  default: "chip",
  success: "chip-success",
  destructive: "chip-destructive",
  warning: "chip-warning"
};

export const Chips = ({ items, variant = "default", emptyText = "Нет данных" }: ChipsProps) => {
  if (!items || items.length === 0) {
    return <p className="text-muted-foreground text-sm">{emptyText}</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span key={index} className={cn(variantClasses[variant])}>
          {item}
        </span>
      ))}
    </div>
  );
};
