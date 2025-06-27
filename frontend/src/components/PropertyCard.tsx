import type { Property } from "../types/Property";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <img
        src={property.image_url}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-blue-700 line-clamp-1">
          {property.title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-2">
          {property.description}
        </p>
        <div className="text-sm text-gray-500">
          <p>
            <span className="font-medium text-gray-700">Price:</span> ₦
            {Number(property.price).toLocaleString()}
          </p>
          <p>
            <span className="font-medium text-gray-700">Location:</span>{" "}
            {property.location}
          </p>
          <p className="flex flex-wrap gap-x-4">
            <span>🛏 {property.bedrooms} Bed</span>
            <span>🛁 {property.bathrooms} Bath</span>
            <span>📐 {property.area} m²</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
