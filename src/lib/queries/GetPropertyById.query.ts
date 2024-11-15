
import { Property } from "@/types/Property.type"
import { mockProperties } from "../mockDB/mockProperties"

/**
 * Simulates a database or API fetch to get a property by its ID.
 * 
 * @param {Object} options - The options for getting the property.
 * @param {string} options.id - The ID of the property to retrieve.
 * 
 * @returns {Promise<Property>} - A promise that resolves to the property with the provided ID.
 * @throws {Error} - If the property with the provided ID is not found.
 */
export const getPropertyByIdQuery = async ({ id }: { id: number }): Promise<Property> => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const property = mockProperties.find((property) => property.id == id);

    if (!property) {
        throw new Error(`Property with ID ${id} not found`);
    }

    return property;
}
