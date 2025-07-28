import { normalizeReservations } from "./normalizeReservations";
import { readyToCollectQuotationOptions } from "./readyToCollectQuotationOptions";
import { reservationSchemeValidator } from "./reservationSchemeValidator";

/**
 * Updates quotations after currency change on special pages like transfer/payment details.
 *
 * - Validates reservations.
 * - Collects quotation options based on the latest currency.
 * - Matches reservations with quotations by carId.
 * - Dispatches matched quotations into Redux.
 *
 * @async
 * @function updateCurrencyGetQuotationOnSpecialPage
 * @param {Object} params
 * @param {Function} params.dispatch - Redux dispatch function.
 * @param {Function} params.setInternalState - React local state setter (e.g., useReducer).
 * @param {Object} params.router - Next.js router instance.
 * @param {Array} params.reservations - List of reservation objects.
 * @param {number|string} params.journeyType - Journey type (0 = one-way, 1 = return).
 * @param {string} params.language - Active language code (e.g., "en", "tr").
 * @param {Object} params.appData - Application static data.
 * @param {Object} params.selectedCurrency - Selected currency object (must have `currencyId`).
 * @param {Object} params.isTaxiDeal - is this journey comes from taxi deal or not
 */
export const updateCurrencyGetQuotationOnSpecialPage = async ({ dispatch, setInternalState, router, reservations, journeyType, language, appData, selectedCurrency, isTaxiDeal }) => {
    const specialPages = ['/transfer-details', '/payment-details'];

    if (isTaxiDeal) return

    // Only execute if we are on a special page
    if (!specialPages.includes(router.pathname)) return;

    const checkedReservations = normalizeReservations(reservations);
    const errorHolder = reservationSchemeValidator({ reservations: checkedReservations, appData });

    setInternalState({ errorHolder });

    if (errorHolder.status !== 200) return;

    const propsOfReadyCollection = {
        dispatch,
        setInternalState,
        router,
        journeyType,
        reservations: checkedReservations,
        language,
        shouldNavigate: false,
        env: { apiDomain: "https://api.london-tech.com" },
        appData,
        currencyId: selectedCurrency.currencyId,
    };

    const results = await readyToCollectQuotationOptions(propsOfReadyCollection);

    if (!results.success) return;

    const { data } = results;

    // Handle one-way journey
    if (Array.isArray(data) && data.length === 1) {
        const reservation = reservations[0];
        const quotationOptions = data[0]?.quotationOptions || [];

        const selectedQuotation = quotationOptions.find(
            (q) => q.carId === reservation.quotation.carId
        );

        if (selectedQuotation) {
            dispatch({ type: "SET_QUOTATION_ON_SPECIAL_CASE", data: { quotation: selectedQuotation, journeyType: 0 } });
        }
    }

    // Handle return journey
    if (Array.isArray(data) && data.length === 2) {
        data.forEach((journeyData, journeyIndex) => {
            const reservation = reservations[journeyIndex];
            const quotationOptions = journeyData?.quotationOptions || [];

            const selectedQuotation = quotationOptions.find(
                (q) => q.carId === reservation.quotation.carId
            );

            if (selectedQuotation) {
                dispatch({ type: "SET_QUOTATION_ON_SPECIAL_CASE", data: { quotation: selectedQuotation, journeyType: journeyIndex } });
            }
        });
    }
};
