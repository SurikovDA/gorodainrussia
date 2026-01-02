import { Lightbulb } from "lucide-react";

interface TipsListProps {
  tips: string[];
}

export const TipsList = ({ tips }: TipsListProps) => {
  if (!tips || tips.length === 0) {
    return <p className="text-muted-foreground text-sm">Нет рекомендаций</p>;
  }

  return (
    <div className="space-y-3">
      {tips.map((tip, index) => (
        <div 
          key={index} 
          className="flex items-start gap-3 p-4 rounded-xl"
          style={{
            background: 'hsl(var(--primary) / 0.08)',
            border: '1px solid hsl(var(--primary) / 0.15)',
          }}
        >
          <div 
            className="p-1.5 rounded-lg shrink-0"
            style={{
              background: 'hsl(var(--primary) / 0.12)',
            }}
          >
            <Lightbulb className="w-4 h-4 text-primary" />
          </div>
          <p className="text-sm text-foreground leading-relaxed">{tip}</p>
        </div>
      ))}
    </div>
  );
};
