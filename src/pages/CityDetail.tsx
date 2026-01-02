import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Users, Banknote, Home, Factory, Briefcase, GraduationCap, TrendingUp, TrendingDown, Building2, MapPin, Info } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionCard } from "@/components/SectionCard";
import { MetricCard } from "@/components/MetricCard";
import { Chips } from "@/components/Chips";
import { PriceList } from "@/components/PriceList";
import { ProfessionList } from "@/components/ProfessionList";
import { TipsList } from "@/components/TipsList";
import { CTASection } from "@/components/CTASection";
import { getCityBySlug } from "@/data/cities";
import { formatCurrency, formatPopulation } from "@/lib/formatters";
import { useEmbed, useEmbedHeight } from "@/hooks/useEmbed";

const CityDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const isEmbed = useEmbed();
  const city = getCityBySlug(slug || "");

  useEmbedHeight();

  if (!city) {
    return <Navigate to="/" replace />;
  }

  const content = (
    <div className="container py-8 space-y-8">
      {/* Back Button & Header */}
      <div className="animate-fade-in">
        <Link 
          to={isEmbed ? "/embed" : "/"}
          className="inline-flex items-center gap-2 mb-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад к списку
        </Link>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">{city.name}</h1>
          <span 
            className="w-fit px-3 py-1 rounded-full text-sm font-medium"
            style={{
              background: 'hsl(var(--secondary) / 0.3)',
              color: 'hsl(var(--secondary-foreground))',
            }}
          >
            {city.region}
          </span>
        </div>
      </div>

      {/* General Info Section */}
      <SectionCard title="Общая информация" icon={Info}>
        <p className="text-muted-foreground mb-6">{city.shortDescription}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <MetricCard 
            icon={Users} 
            label="Население" 
            value={`${formatPopulation(city.population)} чел.`}
          />
          <MetricCard 
            icon={Banknote} 
            label="Средняя зарплата" 
            value={formatCurrency(city.avgSalary)}
            variant="success"
          />
          <MetricCard 
            icon={Home} 
            label="Аренда 1-комн." 
            value={formatCurrency(city.rent1k)}
            variant="warning"
          />
        </div>
      </SectionCard>

      {/* Industrial Facilities */}
      <SectionCard title="Промышленные объекты" icon={Factory}>
        <Chips items={city.industrialFacilities} />
      </SectionCard>

      {/* Major Employers */}
      <SectionCard title="Крупные предприятия для трудоустройства" icon={Briefcase}>
        <Chips items={city.majorEmployers} />
      </SectionCard>

      {/* Professions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="Топ-3 высокооплачиваемых профессий" icon={TrendingUp}>
          <ProfessionList items={city.topHighPaid} variant="high" />
        </SectionCard>
        <SectionCard title="Топ-3 низкооплачиваемых профессий" icon={TrendingDown}>
          <ProfessionList items={city.topLowPaid} variant="low" />
        </SectionCard>
      </div>

      {/* Housing Prices Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="Стоимость аренды жилья" icon={Home}>
          <PriceList prices={city.rentPrices} isRent />
        </SectionCard>
        <SectionCard title="Стоимость покупки жилья" icon={Building2}>
          <PriceList prices={city.buyPrices} />
        </SectionCard>
      </div>

      {/* Districts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="Благоприятные районы" icon={MapPin}>
          <Chips items={city.goodDistricts} variant="success" emptyText="Нет данных о районах" />
        </SectionCard>
        <SectionCard title="Неблагоприятные районы" icon={MapPin}>
          <Chips items={city.badDistricts} variant="destructive" emptyText="Нет данных о районах" />
        </SectionCard>
      </div>

      {/* Universities */}
      <SectionCard title="Высшие учебные заведения" icon={GraduationCap}>
        <Chips items={city.universities} />
      </SectionCard>

      {/* Relocation Tips */}
      <SectionCard title="Рекомендации по переезду">
        <TipsList tips={city.relocationTips} />
      </SectionCard>

      {/* CTA Section */}
      <CTASection cityName={city.name} />
    </div>
  );

  if (isEmbed) {
    return (
      <div className="min-h-screen section-softfog">
        {content}
      </div>
    );
  }

  return (
    <div className="min-h-screen section-softfog flex flex-col">
      <Header />
      <main className="flex-1">
        {content}
      </main>
      <Footer />
    </div>
  );
};

export default CityDetail;
