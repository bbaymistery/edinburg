


const updatePrice = (newSeatLists, _idx) => {
    const adultsNum = newSeatLists[0].minNum;
    const adultsPrice = newSeatLists[0].price;
    const adultsTotallPrice = adultsNum * adultsPrice;

    const childrenNum = newSeatLists[1].minNum;
    const childrenPrice = newSeatLists[1].price;
    const childrenTotallPrice = childrenNum * childrenPrice;

    let newTotalPrice = adultsTotallPrice + childrenTotallPrice;

    return { newTotalPrice };
};

function SET_SEATLISTS(params = {}) {
    let { state, action } = params;
    let { data: { idx, incordec } } = action;

    let newState = { ...state };
    let newSeatLists = newState.seatLists.map((item, index) => index === idx ? { ...item, minNum: item.minNum + (incordec === 'inc' ? 1 : -1) } : item);

    // if (idx === 0 && newSeatLists[0].minNum < 1) newSeatLists[0].minNum = 1;

    let { newTotalPrice } = updatePrice(newSeatLists, idx);

    newState.seatLists = newSeatLists;
    newState.seatListPrice = newTotalPrice;

    return newState;
}

export default SET_SEATLISTS;
