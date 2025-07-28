
/**
 * Updates quotation when currencyId changes, specifically in TaxiDeal flow.
 * 
 * @param {Object} params
 * @param {Array} quotations - Redux quotations array
 * @param {Array} reservations - Redux reservations array
 * @param {string} reduxLanguage - Current app language
 * @param {number} currencyId - Current currency ID
 * @param {Function} dispatch - Redux dispatch
 */
export const updateCurrencyOnTaxiDealFlow = ({ quotations, reservations, reduxLanguage, currencyId, dispatch }) => {

    if (!quotations?.[0]?.taxiDeal) return;

    try {
        const linkUrl = quotations[0].taxiDeal.pathname;
        const cacheKey = `page-${reduxLanguage}-${currencyId}-${linkUrl}`;
        const cache = sessionStorage.getItem("pathnameLinkCache");

        if (!cache) return;

        const parsed = JSON.parse(cache);
        const parsedItem = parsed[cacheKey];
        if (!parsedItem?.quotationOptions) return;

        const selectedQuotation = parsedItem.quotationOptions.find(
            (q) => q.carId === reservations?.[0]?.quotation?.carId
        );

        if (selectedQuotation) {
            dispatch({
                type: "SET_QUOTATION_ON_SPECIAL_CASE",
                data: { quotation: selectedQuotation, journeyType: 0 }
            });
        }
    } catch (error) {
        console.error("Error updating quotation on currency change in TaxiDeal flow:", error);
    }
};