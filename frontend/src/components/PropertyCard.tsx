import type { Property } from "../types/Property";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  return (
    <div className="group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:bg-white/15 border border-white/20 hover:border-white/30 shadow-2xl hover:shadow-purple-500/25">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-3xl"></div>

      {/* Image container with modern effects */}
      <div className="relative overflow-hidden">
        <img
          src={property.image_url}
          alt={property.title}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating price badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-white/20">
          <p className="text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            ₦{Number(property.price).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="relative p-6 space-y-4">
        {/* Title with gradient */}
        <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent line-clamp-1 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
          {property.title}
        </h2>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed line-clamp-2 group-hover:text-white/90 transition-colors duration-300">
          {property.description}
        </p>

        {/* Location with icon */}
        <div className="flex items-center space-x-2 text-white/60 group-hover:text-white/80 transition-colors duration-300">
          <svg
            className="w-4 h-4 text-purple-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium">{property.location}</span>
        </div>

        {/* Features with modern icons and glassmorphism */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center space-x-1 bg-white/5 rounded-xl px-3 py-2 backdrop-blur-sm border border-white/10">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-xs font-medium text-white/80">
              {property.bedrooms} Bed
            </span>
          </div>

          <div className="flex items-center space-x-1 bg-white/5 rounded-xl px-3 py-2 backdrop-blur-sm border border-white/10">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-xs font-medium text-white/80">
              {property.bathrooms} Bath
            </span>
          </div>

          <div className="flex items-center space-x-1 bg-white/5 rounded-xl px-3 py-2 backdrop-blur-sm border border-white/10">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <span className="text-xs font-medium text-white/80">
              {property.area} m²
            </span>
          </div>
        </div>

        {/* Hover CTA button */}
        <div className="absolute inset-x-6 bottom-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
            View Details
          </button>
        </div>
      </div>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

export default PropertyCard;
