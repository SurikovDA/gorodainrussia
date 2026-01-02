import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { CitiesGrid } from "@/components/CitiesGrid";
import { CTASection } from "@/components/CTASection";
import { CompactCTA } from "@/components/CompactCTA";
import { CompactHero } from "@/components/CompactHero";
import { cities, searchCities } from "@/data/cities";
import { useEmbedHeight, useEmbedMode } from "@/hooks/useEmbed";
import { useDisplayMode } from "@/hooks/useDisplayMode";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const { mode, limit, isEmbed } = useDisplayMode();
  useTheme();
  useEmbedMode();
  useEmbedHeight();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const results = searchCities(searchQuery);
    setFilteredCities(results);
  }, [searchQuery]);

  // Limit cities for compact mode
  const displayCities = mode === 'compact' 
    ? filteredCities.slice(0, limit) 
    : filteredCities;

  // Embed mode: minimal layout without header/footer
  if (isEmbed) {
    return (
      <div className="min-h-screen p-3 md:p-4">
        <CompactHero />
        <div className="mb-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        <CitiesGrid cities={displayCities} isLoading={isLoading} />
        <CompactCTA />
      </div>
    );
  }

  // Compact mode (for landing page embedding without iframe)
  if (mode === 'compact') {
    return (
      <div className="min-h-screen py-6">
        <div className="container">
          <CompactHero />
          <div className="mb-5">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <CitiesGrid cities={displayCities} isLoading={isLoading} />
          <CompactCTA />
        </div>
      </div>
    );
  }

  // Full mode (default)
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <section className="container pb-16">
          <div className="mb-8">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <CitiesGrid cities={filteredCities} isLoading={isLoading} />
        </section>

        <section className="container pb-16">
          <CTASection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;