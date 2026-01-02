import { MapPin, BarChart3, Calendar } from "lucide-react";
import { KPICard } from "./KPICard";
import { KPI_DATA } from "@/lib/constants";

export const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
            <span className="gradient-text">Города России</span>
            <br />
            <span className="text-foreground">для переезда</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
            Анализируй и выбирай лучший город для твоего будущего с помощью детальной аналитики и экспертных рекомендаций
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          <KPICard 
            icon={MapPin} 
            value={KPI_DATA.citiesCount} 
            label="Городов в базе" 
            delay={0}
          />
          <KPICard 
            icon={BarChart3} 
            value={KPI_DATA.parametersCount} 
            label="Параметров анализа" 
            delay={100}
          />
          <KPICard 
            icon={Calendar} 
            value={KPI_DATA.lastUpdated} 
            label="Актуальность данных" 
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};
