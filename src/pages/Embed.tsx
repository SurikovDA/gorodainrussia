import { useState, useEffect } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CitiesGrid } from "@/components/CitiesGrid";
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
  
  const { limit } = useDisplayMode();
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

  const displayCities = filteredCities.slice(0, limit);

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
};

export default Embed;