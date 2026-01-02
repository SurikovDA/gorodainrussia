import { Link } from "react-router-dom";
import { Users, Banknote, Home, ArrowRight, ExternalLink } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { City } from "@/data/cities";
import { formatCurrency, formatPopulation } from "@/lib/formatters";
import { CITYGO_TELEGRAM_URL } from "@/lib/constants";

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
      <div className="p-5 flex flex-col h-full">
        {/* Header */}
        <div className="mb-3">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground">{city.name}</h3>
            <span 
              className="shrink-0 text-xs px-3 py-1 rounded-full font-medium"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--accent)) 100%)',
                color: 'white',
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

        {/* Metrics - colored blocks like reference */}
        <div className="grid grid-cols-2 gap-3 mb-5 mt-auto">
          <div 
            className="p-3 rounded-xl"
            style={{
              background: 'hsl(var(--success) / 0.15)',
              border: '1px solid hsl(var(--success) / 0.2)',
            }}
          >
            <div className="flex items-center gap-2 mb-1 text-success">
              <Banknote className="w-4 h-4" />
              <span className="text-xs opacity-80">Зарплата</span>
            </div>
            <p className="text-sm font-bold text-success">
              {formatCurrency(city.avgSalary)}
            </p>
          </div>
          <div 
            className="p-3 rounded-xl"
            style={{
              background: 'hsl(var(--warning) / 0.15)',
              border: '1px solid hsl(var(--warning) / 0.2)',
            }}
          >
            <div className="flex items-center gap-2 mb-1 text-warning">
              <Home className="w-4 h-4" />
              <span className="text-xs opacity-80">Аренда 1к</span>
            </div>
            <p className="text-sm font-bold text-warning">
              {formatCurrency(city.rent1k)}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link 
            to={`/city/${city.slug}`}
            className="flex-1 citygo-btn citygo-btn-ghost flex items-center justify-center gap-2 py-2.5"
          >
            Подробнее
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a 
            href={CITYGO_TELEGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="citygo-btn btn-primary-gradient px-4 py-2.5 flex items-center gap-2"
          >
            <span className="hidden sm:inline">В CityGo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </GlassCard>
  );
};