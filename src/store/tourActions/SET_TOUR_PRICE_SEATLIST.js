function SET_TOUR_PRICE_SEATLIST(params = {}) {
    let { state, action } = params
    let { data: { childrenPrice, adultsPrice, isPound } } = action
    let newState = JSON.parse(JSON.stringify(state))

    newState.seatLists[0].price = adultsPrice
    newState.seatLists[1].price = childrenPrice
    newState.isPound = isPound

    return newState;
}
export default SET_TOUR_PRICE_SEATLIST