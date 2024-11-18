/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Property } from "@/types/Property.type";
import { StarIcon } from "lucide-react";

type PropertyCardProps = Property;

function pluralize(word: string, value: number = 0) {
    return `${value} ${word}${value === 1 ? '' : 's'}`;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ id, title, description, image, maxGuests, bedrooms, beds, bathrooms, price, rating, reviews }) => (
    <Card key={id} className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3">
            <img
                src={image}
                alt={`Property ${title}`}
                className="w-full h-48 object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
            />
        </div>
        <div className="w-full sm:w-2/3 p-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-muted-foreground mb-2">{pluralize('guest', maxGuests)} · {pluralize('bedroom', bedrooms)} · {pluralize('bed', beds)} · {pluralize('bath', bathrooms)}</p>
            <div className="flex items-center mb-2">
                <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="font-medium">{rating}</span>
                <span className="text-muted-foreground ml-1">({pluralize('reviews', reviews)})</span>
            </div>
            <p className="mb-4">
                {description}
            </p>
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold">${price} / night</span>
                <Button>View Details</Button>
            </div>
        </div>
    </Card>
)

export default PropertyCard;