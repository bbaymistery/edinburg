//!Constant helpers

import { navigator } from "./navigatior";


/**
 * Finds the matching destination item based on the provided router pathname.
 *
 * @param {string} routerPathname - The pathname to match against the `linkUrl` property of the destination items.
 * @returns {Object} - An object containing the `key` property of the matching destination item, or "IST" if no match is found.
 */
export const findMatchingItem = (routerPathname) => {
    // Combine all destinations into a single array

    let lists = navigator[1].list
    // Find the matching item based on routerPathname
    const matchingItem = lists?.find((destination) => destination.path === `/${routerPathname}`);

    // If a match is found, destructure `location` and return it
    if (matchingItem) {
        const { hasTaxiDeals } = matchingItem;
        return { hasTaxiDeals }; // Return both the location and the full item if needed
    }

    // If no match is found, return null or handle accordingly
    return { hasTaxiDeals: "IST" };
};
