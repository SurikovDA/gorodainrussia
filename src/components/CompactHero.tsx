import { MapPin } from "lucide-react";

export const CompactHero = () => {
  return (
    <div className="text-center mb-5 py-3">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full citygo-glass-card mb-3">
        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
        <span className="text-xs font-medium text-muted-foreground">Умный сервис подбора городов</span>
      </div>
      <h1 className="text-xl md:text-2xl font-bold text-foreground mb-2">
        Выберите город для переезда
      </h1>
      <p className="text-sm text-muted-foreground max-w-md mx-auto">
        Сравните города по ключевым параметрам
      </p>
    </div>
  );
};