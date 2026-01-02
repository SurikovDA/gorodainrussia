import { useState, useEffect } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CitiesGrid } from "@/components/CitiesGrid";
import { cities, searchCities } from "@/data/cities";
import { useEmbedHeight } from "@/hooks/useEmbed";

const Embed = () => {
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
    <div className="min-h-screen section-softfog">
      <div className="container py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold gradient-text text-center mb-4">
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
