import SET_TOUR_DATETIME from "./SET_TOUR_DATETIME";
import SET_TOUR_PASSEGER_DETAILS from "./SET_TOUR_PASSEGER_DETAILS";
import SET_TOUR_TRANSFER_DETAILS from "./SET_TOUR_TRANSFER_DETAILS";
import SET_TOUR_PICKUP_ADRESS from "./SET_TOUR_PICKUP_ADRESS";
import SET_TOUR_SEATLISTS from "./SET_TOUR_SEATLISTS";
import SET_TOUR_QUOTATION from "./SET_TOUR_QUOTATION";
import SET_TOUR_PRICE_SEATLIST from "./SET_TOUR_PRICE_SEATLIST";

const INITIAL_STATE = {
    seatLists: [
        {
            name: "Adults",
            minNum: 0,
            maxNum: 20,
            strName: "strAdults",
            strDesc: "strAbove12yearsold",
            description: "16+ Years",
            price: 35
        },
        {
            name: "Children",
            minNum: 0,
            maxNum: 20,
            strName: "strChildren",
            strDesc: "strFrom2to12yearsold",
            description: "6-12 Years",
            price: 35
        },
        {
            name: "Infants",
            minNum: 0,
            maxNum: 20,
            strName: "strInfants",
            strDesc: "strBelow2YearsOld",
            description: "0-5 Years",
            price: 0
        }
    ],
    seatListPrice: 0,
    selectedTour: {},
    isPound:true

}

export const tourActions = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'SET_TOUR_DATETIME': {
            return SET_TOUR_DATETIME({ state, action })
        }
        case 'SET_TOUR_PASSEGER_DETAILS': {
            return SET_TOUR_PASSEGER_DETAILS({ state, action })
        }
        case 'SET_TOUR_TRANSFER_DETAILS': {
            return SET_TOUR_TRANSFER_DETAILS({ state, action })
        }
        case 'SET_TOUR_PICKUP_ADRESS': {
            return SET_TOUR_PICKUP_ADRESS({ state, action })
        }
        case 'SET_TOUR_SEATLISTS': {
            return SET_TOUR_SEATLISTS({ state, action })
        }
        case 'SET_TOUR_QUOTATION': {
            return SET_TOUR_QUOTATION({ state, action })
        }
        case 'SET_TOUR_PRICE_SEATLIST': {
            return SET_TOUR_PRICE_SEATLIST({ state, action })
        }

        default:
            return state;
    }
}