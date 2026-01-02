import { Link } from "react-router-dom";
import { Users, Banknote, Home, ArrowRight, ExternalLink } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { City } from "@/data/cities";
import { formatCurrency, formatPopulation } from "@/lib/formatters";
import { FORM_URL } from "@/lib/constants";

interface CityCardProps {
  city: City;
  index?: number;
}

export const CityCard = ({ city, index = 0 }: CityCardProps) => {
  return (
    <GlassCard 
      hover 
      padding="none"
      className="animate-slide-up flex flex-col h-full"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-semibold text-foreground">{city.name}</h3>
            <span 
              className="shrink-0 text-xs px-3 py-1 rounded-full font-medium"
              style={{
                background: 'hsl(var(--secondary) / 0.3)',
                color: 'hsl(var(--secondary-foreground))',
              }}
            >
              {city.region}
            </span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {city.shortDescription}
          </p>
        </div>

        {/* Population */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Users className="w-4 h-4" />
          <span>{formatPopulation(city.population)} чел.</span>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-6 mt-auto">
          <div 
            className="p-3 rounded-xl"
            style={{
              background: 'hsl(150 60% 45% / 0.12)',
              border: '1px solid hsl(150 60% 45% / 0.25)',
            }}
          >
            <div className="flex items-center gap-2 mb-1" style={{ color: 'hsl(150 60% 40%)' }}>
              <Banknote className="w-4 h-4" />
              <span className="text-xs">Зарплата</span>
            </div>
            <p className="text-sm font-semibold" style={{ color: 'hsl(150 60% 35%)' }}>
              {formatCurrency(city.avgSalary)}
            </p>
          </div>
          <div 
            className="p-3 rounded-xl"
            style={{
              background: 'hsl(35 90% 55% / 0.12)',
              border: '1px solid hsl(35 90% 55% / 0.25)',
            }}
          >
            <div className="flex items-center gap-2 mb-1" style={{ color: 'hsl(35 90% 45%)' }}>
              <Home className="w-4 h-4" />
              <span className="text-xs">Аренда 1к</span>
            </div>
            <p className="text-sm font-semibold" style={{ color: 'hsl(35 80% 40%)' }}>
              {formatCurrency(city.rent1k)}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link 
            to={`/city/${city.slug}`}
            className="flex-1 citygo-btn citygo-btn-ghost flex items-center justify-center gap-2"
          >
            Подробнее
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a 
            href={FORM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="citygo-btn btn-primary-gradient px-4 flex items-center gap-2"
          >
            <span className="hidden sm:inline">В CityGo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </GlassCard>
  );
};
