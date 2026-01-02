import { Link } from "react-router-dom";
import { Users, Banknote, Home, ArrowRight, ExternalLink } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
      style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-semibold text-foreground">{city.name}</h3>
            <Badge variant="secondary" className="shrink-0 text-xs bg-secondary/50 border-secondary/30">
              {city.region}
            </Badge>
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
          <div className="p-3 rounded-xl bg-success/10 border border-success/20">
            <div className="flex items-center gap-2 text-success mb-1">
              <Banknote className="w-4 h-4" />
              <span className="text-xs">Зарплата</span>
            </div>
            <p className="text-sm font-semibold text-success">
              {formatCurrency(city.avgSalary)}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-warning/10 border border-warning/20">
            <div className="flex items-center gap-2 text-warning mb-1">
              <Home className="w-4 h-4" />
              <span className="text-xs">Аренда 1к</span>
            </div>
            <p className="text-sm font-semibold text-warning">
              {formatCurrency(city.rent1k)}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button asChild variant="outline" className="flex-1 bg-transparent border-border/50 hover:bg-muted/50 hover:border-primary/50">
            <Link to={`/city/${city.slug}`}>
              Подробнее
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild className="btn-primary-gradient px-4">
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
              <span className="hidden sm:inline">В CityGo</span>
              <ExternalLink className="w-4 h-4 sm:ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};
