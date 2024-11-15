import { Property } from "@/types/Property.type";

/**
 * Represents a mock database of properties.
 * @typedef {Array<Property>} mockProperties
 */
export const mockProperties: Property[] = [
  {
    id: 1,
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    image:
      "https://res.cloudinary.com/infovalue/image/upload/q_auto,w_800,h_600,c_limit/v1724389977/sdet/hawaii-beach-landscape-with-nature-coastline.jpg",
    availability: {
      from: "2022-01-01",
      to: "2022-12-31",
      bookedOnDates: ["2022-01-01", "2022-01-02"],
    },
    amenities: ["Hot tub", "Fireplace", "Mountain views"],
    description:
      "This cozy cabin is nestled in the heart of the Rocky Mountains. It features a hot tub, fireplace, and stunning mountain views.",
    price: 150,
    rating: 4.9,
    reviews: 128,
    mainFeatures: "Hot tub, Fireplace, Mountain views",
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
  },
  {
    id: 2,
    title: "Beachfront Villa",
    location: "Bali, Indonesia",
    image:
      "https://res.cloudinary.com/infovalue/image/upload/q_auto,w_800,h_600,c_limit/v1724389977/sdet/hawaii-beach-landscape-with-nature-coastline.jpg",
    availability: {
      from: "2022-01-01",
      to: "2022-12-31",
      bookedOnDates: ["2022-01-01", "2022-01-02"],
    },
    amenities: ["Private beach", "Infinity pool", "Ocean views"],
    description:
      "This luxurious villa is located on a private beach in Bali. It features an infinity pool, ocean views, and all the amenities you need for a relaxing getaway.",
    price: 300,
    rating: 5,
    reviews: 64,
    mainFeatures: "Private beach, Infinity pool, Ocean views",
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
  },
  {
    id: 3,
    title: "City Center Apartment",
    location: "Paris, France",
    image:
      "https://res.cloudinary.com/infovalue/image/upload/q_auto,w_800,h_600,c_limit/v1724389977/sdet/hawaii-beach-landscape-with-nature-coastline.jpg",
    availability: {
      from: "2022-01-01",
      to: "2022-12-31",
      bookedOnDates: ["2022-01-01", "2022-01-02"],
    },
    amenities: ["City views", "Modern design", "Central location"],
    description:
      "This stylish apartment is located in the heart of Paris. It offers stunning city views, modern design, and a central location close to all the best attractions.",
    price: 200,
    rating: 4.5,
    reviews: 92,
    mainFeatures: "City views, Modern design, Central location",
    maxGuests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  },
  {
    id: 4,
    title: "Mountain Chalet",
    location: "Zermatt, Switzerland",
    image:
      "https://res.cloudinary.com/infovalue/image/upload/q_auto,w_800,h_600,c_limit/v1724389977/sdet/hawaii-beach-landscape-with-nature-coastline.jpg",
    availability: {
      from: "2022-01-01",
      to: "2022-12-31",
      bookedOnDates: ["2022-01-01", "2022-01-02"],
    },
    amenities: ["Ski-in/ski-out", "Sauna", "Mountain views"],
    description:
      "This charming chalet is located in the Swiss Alps. It offers ski-in/ski-out access, a sauna, and breathtaking mountain views.",
    price: 250,
    rating: 4.7,
    reviews: 76,
    mainFeatures: "Ski-in/ski-out, Sauna, Mountain views",
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
  },
  {
    id: 5,
    title: "Seaside Cottage",
    location: "Cape Cod, Massachusetts",
    image:
      "https://res.cloudinary.com/infovalue/image/upload/q_auto,w_800,h_600,c_limit/v1724389977/sdet/hawaii-beach-landscape-with-nature-coastline.jpg",
    availability: {
      from: "2022-01-01",
      to: "2022-12-31",
      bookedOnDates: ["2022-01-01", "2022-01-02"],
    },
    amenities: ["Private beach", "Deck", "Ocean views"],
    description:
      "This charming cottage is located on the shores of Cape Cod. It features a private beach, deck, and stunning ocean views.",
    price: 175,
    rating: 4.8,
    reviews: 84,
    mainFeatures: "Private beach, Deck, Ocean views",
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
  },
];
