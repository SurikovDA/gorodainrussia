import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { CitiesGrid } from "@/components/CitiesGrid";
import { CTASection } from "@/components/CTASection";
import { cities, searchCities } from "@/data/cities";
import { useEmbed, useEmbedHeight } from "@/hooks/useEmbed";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const isEmbed = useEmbed();
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities);
  const [isLoading, setIsLoading] = useState(true);

  // Send embed height updates
  useEmbedHeight();

  useEffect(() => {
    // Simulate loading for skeleton display
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const results = searchCities(searchQuery);
    setFilteredCities(results);
  }, [searchQuery]);

  if (isEmbed) {
    return (
      <div className="min-h-screen" style={{ background: 'hsl(var(--background))' }}>
        <div className="container py-4">
          <div className="mb-4">
            <h1 className="text-xl font-bold gradient-text text-center mb-3">
              Города России для переезда
            </h1>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <CitiesGrid cities={filteredCities} isLoading={isLoading} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'hsl(var(--background))' }}>
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
