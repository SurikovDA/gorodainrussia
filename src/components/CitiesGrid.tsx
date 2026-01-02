import { City } from "@/data/cities";
import { CityCard } from "./CityCard";
import { CityCardSkeleton } from "./CityCardSkeleton";
import { SearchX } from "lucide-react";

interface CitiesGridProps {
  cities: City[];
  isLoading?: boolean;
}

export const CitiesGrid = ({ cities, isLoading = false }: CitiesGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <CityCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (cities.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="p-4 rounded-2xl bg-muted/30 border border-border/30 mb-4">
          <SearchX className="w-12 h-12 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Ничего не найдено</h3>
        <p className="text-muted-foreground max-w-md">
          Попробуйте изменить поисковый запрос или проверьте правильность написания
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cities.map((city, index) => (
        <CityCard key={city.slug} city={city} index={index} />
      ))}
    </div>
  );
};
