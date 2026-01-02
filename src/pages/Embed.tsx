import { useState, useEffect } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CitiesGrid } from "@/components/CitiesGrid";
import { cities, searchCities } from "@/data/cities";
import { useEmbedHeight } from "@/hooks/useEmbed";
import { useTheme } from "@/hooks/useTheme";

const Embed = () => {
  useTheme(); // Initialize theme from URL params
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities);
  const [isLoading, setIsLoading] = useState(true);

  useEmbedHeight();

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

  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--background))' }}>
      <div className="px-3 py-4">
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
};

export default Embed;
