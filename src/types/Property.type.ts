import { Availability } from "./Availability.type";

export interface Property {
    id: number;
    title: string;
    location: string;
    image: string;
    availability: Availability;
    amenities?: string[];
    description?: string;
    price?: number;
    rating?: number;
    reviews?: number;
    mainFeatures?: string;
    maxGuests?: number;
    bedrooms?: number;
    beds?: number;
    bathrooms?: number;
  }