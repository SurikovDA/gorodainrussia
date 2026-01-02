import { MapPin, BarChart3, Calendar } from "lucide-react";
import { KPICard } from "./KPICard";
import { KPI_DATA } from "@/lib/constants";

export const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden hero-bg">
      {/* Soft Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full animate-float animate-pulse-soft"
          style={{
            background: 'radial-gradient(circle at 30% 30%, hsl(var(--accent) / 0.35), hsl(var(--primary) / 0.15) 50%, transparent 70%)',
            filter: 'blur(28px)',
          }}
        />
        <div 
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full animate-float animate-pulse-soft"
          style={{
            background: 'radial-gradient(circle at 30% 30%, hsl(var(--secondary) / 0.35), hsl(var(--accent) / 0.15) 50%, transparent 70%)',
            filter: 'blur(28px)',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full animate-glow"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.2), transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
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
