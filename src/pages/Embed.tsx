import { useState, useEffect } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CitiesGrid } from "@/components/CitiesGrid";
import { CTASection } from "@/components/CTASection";
import { CompactCTA } from "@/components/CompactCTA";
import { CompactHero } from "@/components/CompactHero";
import { cities, searchCities } from "@/data/cities";
import { useEmbedHeight, useEmbedMode } from "@/hooks/useEmbed";
import { useDisplayMode } from "@/hooks/useDisplayMode";
import { useTheme } from "@/hooks/useTheme";

const Embed = () => {
  useTheme();
  useEmbedMode();
  useEmbedHeight();
  
  const { mode, limit } = useDisplayMode();
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

  // In compact mode, limit cities; in full mode, show all
  const displayCities = mode === 'compact' 
    ? filteredCities.slice(0, limit) 
    : filteredCities;

  // Full mode embed - all content without header/footer/hero backgrounds
  if (mode === 'full') {
    return (
      <div className="embed-container">
        <CompactHero />
        
        <section className="px-3 md:px-4 pb-6">
          <div className="mb-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <CitiesGrid cities={displayCities} isLoading={isLoading} />
        </section>

        <section className="px-3 md:px-4 pb-6">
          <CTASection />
        </section>
      </div>
    );
  }

  // Compact mode embed (default for /embed)
  return (
    <div className="embed-container p-3 md:p-4">
      <CompactHero />
      <div className="mb-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>
      <CitiesGrid cities={displayCities} isLoading={isLoading} />
      <CompactCTA />
    </div>
  );
};

export default Embed;