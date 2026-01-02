import { MapPin, BarChart3, Calendar } from "lucide-react";
import { KPICard } from "./KPICard";
import { KPI_DATA } from "@/lib/constants";

export const Hero = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden hero-bg">
      {/* Soft Orbs - themed */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full animate-float animate-pulse-soft"
          style={{
            background: 'radial-gradient(circle at 30% 30%, hsl(var(--accent) / 0.3), hsl(var(--primary) / 0.1) 50%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div 
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full animate-float animate-pulse-soft"
          style={{
            background: 'radial-gradient(circle at 30% 30%, hsl(var(--secondary) / 0.3), hsl(var(--accent) / 0.1) 50%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full animate-glow"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 60%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            <span className="gradient-text">Города России</span>
            <br />
            <span className="text-foreground">для переезда</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
            Анализируй и выбирай лучший город для твоего будущего с помощью детальной аналитики и экспертных рекомендаций
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-3xl mx-auto">
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
