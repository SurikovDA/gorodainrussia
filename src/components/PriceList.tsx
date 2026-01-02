import { formatShortCurrency } from "@/lib/formatters";

interface PriceListProps {
  prices: {
    studio: number | null;
    one: number | null;
    two: number | null;
    three: number | null;
  };
  isRent?: boolean;
}

const labels = [
  { key: "studio", label: "Студия" },
  { key: "one", label: "1-комн." },
  { key: "two", label: "2-комн." },
  { key: "three", label: "3-комн." }
] as const;

export const PriceList = ({ prices, isRent = false }: PriceListProps) => {
  return (
    <div className="space-y-2">
      {labels.map(({ key, label }) => (
        <div 
          key={key} 
          className="flex items-center justify-between p-3 rounded-lg"
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
          }}
        >
          <span className="text-sm text-muted-foreground">{label}</span>
          <span className="text-sm font-medium text-foreground">
            {prices[key] !== null ? (
              <>
                {formatShortCurrency(prices[key])}
                {isRent && <span className="text-muted-foreground">/мес</span>}
              </>
            ) : (
              "—"
            )}
          </span>
        </div>
      ))}
    </div>
  );
};
