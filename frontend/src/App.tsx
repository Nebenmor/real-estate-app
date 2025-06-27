import { useEffect, useState } from "react";
import type { Property } from "./types/Property";
import PropertyCard from "./components/PropertyCard";

const App = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/api/properties");
      const data = await res.json();
      setProperties(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Property Listings
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default App;
