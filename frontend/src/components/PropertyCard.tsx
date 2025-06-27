import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Property } from "../types/Property";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
      <CardMedia
        component="img"
        height="200"
        image={property.image_url}
        alt={property.title}
      />
      <CardContent>
        <Typography variant="h6" className="font-bold">
          {property.title}
        </Typography>
        <Typography className="text-sm text-gray-500 mb-2">
          {property.location}
        </Typography>
        <Typography className="text-blue-700 font-semibold">
          ₦{Number(property.price).toLocaleString()}
        </Typography>
        <Typography className="text-sm mt-2">
          🛏 {property.bedrooms} | 🛁 {property.bathrooms} | 📐 {property.area}{" "}
          m²
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
