
import { Property } from "@/types/Property.type"
import { mockProperties } from "../mockDB/mockProperties"

/**
 * Simulates a database or API fetch to search for properties based on the provided location.
 * For now it just filters the mock properties based on the location.
 * Available locations are: Aspen, Colorado, Bali, Indonesia, Paris, France.
 * 
 * @param {Object} options - The options for the search.
 * @param {string} options.searchTerm - The searchTerm to search for properties.
 * 
 * @returns {Promise<Property[]>} - A promise that resolves to an array of properties matching the provided location.
 */
export const searchPropertiesQuery = async ({searchTerm}: { searchTerm?: string }): Promise<Property[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const allProperties: Property[] = mockProperties;

    if (!searchTerm) return allProperties;

    console.log(`Searching for properties in location: ${location}`);
    console.log('Available locations', allProperties.map(property => property.location));
    return allProperties.filter((property) => property.location.toLowerCase().includes(searchTerm.toLowerCase()));
}
