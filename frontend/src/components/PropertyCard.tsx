import type { Property } from "../types/Property";

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300">
      <img
        src={property.image_url}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-blue-700">
          {property.title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2">
          {property.description}
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
          <div>
            <span className="font-semibold">Location:</span>
            <p>{property.location}</p>
          </div>
          <div>
            <span className="font-semibold">Price:</span>
            <p>₦{Number(property.price).toLocaleString()}</p>
          </div>
          <div>
            <span className="font-semibold">Bedrooms:</span>
            <p>{property.bedrooms}</p>
          </div>
          <div>
            <span className="font-semibold">Bathrooms:</span>
            <p>{property.bathrooms}</p>
          </div>
          <div>
            <span className="font-semibold">Area:</span>
            <p>{property.area} m²</p>
          </div>
          <div>
            <span className="font-semibold">Listed:</span>
            <p>{new Date(property.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
