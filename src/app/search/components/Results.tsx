import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { searchPropertiesQuery } from "@/lib/queries/SearchProperties.query";
import { Property } from "@/types/Property.type";

export default function SearchResults({ searchTerm, setIsLoading }: { searchTerm?: string, setIsLoading: (isLoading: boolean) => void }) {
    const [properties, setProperties] = useState<Property[]>([]);
    

    useEffect(() => {
        searchPropertiesQuery({ searchTerm }).then((properties) => {
            setProperties(properties);
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [searchTerm, setIsLoading]);

    return (
        <div className="space-y-6">
            {properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
            ))}
        </div>
    );
}
