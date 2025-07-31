


// normal list
//hasTaxideals=>when we select any link we store that name of
//..hasTaxideals to redux then When we get from that redux and use it inside  Heathrow Airport Transfer|| Gatwick Airport Transfer
//+
export const navigator = [
    {
        innerText: "home",
        path: "/",
        title: "strHome",
        type: "cell",
        hasTaxiDeals: "",
        strInnerText: "strHome",
    },
    {
        innerText: "airports",
        path: "/Airports",
        type: "list",
        hasTaxiDeals: "",
        strInnerText: "strAirportTaxi",
        list: [
            {
                innerText: "Edinburgh Airport to City Centre",
                // path: "/edinburgh-airport-to-city-centre-taxi",
                path: "/istanbul-airport-to-taksim-taxi",

                title: "strEdinburghAirportToCityCentre",
                type: "cell",
                // hasTaxiDeals: "EDI-CITY",
                hasTaxiDeals: "IST",
                strInnerText: "strEdinburghAirportToCityCentre",
            },
            {
                innerText: "City Centre to Edinburgh Airport",
                path: "/city-centre-to-edinburgh-airport-taxi",
                title: "strCityCentreToEdinburghAirport",
                type: "cell",
                hasTaxiDeals: "CITY-EDI",
                strInnerText: "strCityCentreToEdinburghAirport",
            },
            {
                innerText: "Edinburgh Airport to Glasgow",
                path: "/edinburgh-airport-to-glasgow-taxi",
                title: "strEdinburghAirportToGlasgow",
                type: "cell",
                hasTaxiDeals: "EDI-GLA",
                strInnerText: "strEdinburghAirportToGlasgow",
            },
            {
                innerText: "Glasgow to Edinburgh Airport",
                path: "/glasgow-to-edinburgh-airport-taxi",
                title: "strGlasgowToEdinburghAirport",
                type: "cell",
                hasTaxiDeals: "GLA-EDI",
                strInnerText: "strGlasgowToEdinburghAirport",
            },
            {
                innerText: "Edinburgh Airport to St Andrews",
                path: "/edinburgh-airport-to-st-andrews-taxi",
                title: "strEdinburghAirportToStAndrews",
                type: "cell",
                hasTaxiDeals: "EDI-STD",
                strInnerText: "strEdinburghAirportToStAndrews",
            },
            {
                innerText: "St Andrews to Edinburgh Airport",
                path: "/st-andrews-to-edinburgh-airport-taxi",
                title: "strStAndrewsToEdinburghAirport",
                type: "cell",
                hasTaxiDeals: "STD-EDI",
                strInnerText: "strStAndrewsToEdinburghAirport",
            },

        ]
    },
    {
        innerText: "Terms",
        path: "/terms",
        type: "cell",
        hasTaxiDeals: "",
        title: "strTermsNav",
        strInnerText: "strTermsNav"
    },
    {
        innerText: "Our Fleet",
        path: "/fleet",
        type: "cell",
        hasTaxiDeals: "",
        title: "strFleet",
        strInnerText: "strFleet"
    },
    {
        innerText: "Contact Us ",
        path: "/contact-us",
        title: "strContactUs",
        type: "cell",
        hasTaxiDeals: "",
        strInnerText: "strContactUs"
    },
    {
        innerText: "Travel Agents",
        path: "/travel-agents",
        type: "cell",
        hasTaxiDeals: "",
        strInnerText: "strTravelAgents",
        title: "strTravelAgents",
        firstChild: false
    },
    {
        innerText: "Manage Booking ",
        path: "/manage-booking.html",
        title: "strManageBooking",
        type: "cell",
        hasTaxiDeals: "",
        strInnerText: "strManageBooking"
    },

]

export const expandedNavigatorDesktop = [
    {
        innerText: "home",
        path: "/",
        title: "strHome",
        type: "cell",
        hasTaxiDeals: "",
        strInnerText: "strHome",
    },
    {
        innerText: "airports",
        path: "/Airports",
        type: "list",
        hasTaxiDeals: "",
        strInnerText: "strAirportTaxi",
        list: [
            {
                innerText: "Edinburgh Airport to City Centre",
                path: "/edinburgh-airport-to-city-centre-taxi",
                title: "strEdinburghAirportToCityCentre",
                type: "cell",
                hasTaxiDeals: "EDI-CITY",
                strInnerText: "strEdinburghAirportToCityCentre",
            },
            {
                innerText: "City Centre to Edinburgh Airport",
                path: "/city-centre-to-edinburgh-airport-taxi",
                title: "strCityCentreToEdinburghAirport",
                type: "cell",
                hasTaxiDeals: "CITY-EDI",
                strInnerText: "strCityCentreToEdinburghAirport",
            },
            {
                innerText: "Edinburgh Airport to Glasgow",
                path: "/edinburgh-airport-to-glasgow-taxi",
                title: "strEdinburghAirportToGlasgow",
                type: "cell",
                hasTaxiDeals: "EDI-GLA",
                strInnerText: "strEdinburghAirportToGlasgow",
            },
            {
                innerText: "Glasgow to Edinburgh Airport",
                path: "/glasgow-to-edinburgh-airport-taxi",
                title: "strGlasgowToEdinburghAirport",
                type: "cell",
                hasTaxiDeals: "GLA-EDI",
                strInnerText: "strGlasgowToEdinburghAirport",
            },
            {
                innerText: "Edinburgh Airport to St Andrews",
                path: "/edinburgh-airport-to-st-andrews-taxi",
                title: "strEdinburghAirportToStAndrews",
                type: "cell",
                hasTaxiDeals: "EDI-STD",
                strInnerText: "strEdinburghAirportToStAndrews",
            },
            {
                innerText: "St Andrews to Edinburgh Airport",
                path: "/st-andrews-to-edinburgh-airport-taxi",
                title: "strStAndrewsToEdinburghAirport",
                type: "cell",
                hasTaxiDeals: "STD-EDI",
                strInnerText: "strStAndrewsToEdinburghAirport",
            },

        ]
    },


    {
        innerText: "Contact Us ",
        path: "/contact-us",
        title: "strContactUs",
        type: "cell",
        hasTaxiDeals: "",
        strInnerText: "strContactUs"
    },
    {
        innerText: "Travel Agents",
        path: "/travel-agents",
        type: "cell",
        hasTaxiDeals: "",
        strInnerText: "strTravelAgents",
        title: "strTravelAgents",
        firstChild: false
    },
    {
        innerText: "Manage Booking ",
        path: "/manage-booking.html",
        title: "strManageBooking",
        type: "cell",
        hasTaxiDeals: "",
        strInnerText: "strManageBooking"
    },
]

export const expandedNavigatorMobile = [
    {
        innerText: "Terms",
        path: "/terms",
        type: "cell",
        hasTaxiDeals: "",
        title: "strTermsNav",
        strInnerText: "strTermsNav"
    },
    {
        innerText: "Our Fleet",
        path: "/fleet",
        type: "cell",
        hasTaxiDeals: "",
        title: "strFleet",
        strInnerText: "strFleet"
    },
]

export const airportTaxiLinks = [
    {
        innerText: "Edinburgh Airport to City Centre",
        path: "/edinburgh-airport-to-city-centre-taxi",
        title: "strEdinburghAirportToCityCentre",
        type: "cell",
        hasTaxiDeals: "EDI-CITY",
        strInnerText: "strEdinburghAirportToCityCentre",
    },
    {
        innerText: "City Centre to Edinburgh Airport",
        path: "/city-centre-to-edinburgh-airport-taxi",
        title: "strCityCentreToEdinburghAirport",
        type: "cell",
        hasTaxiDeals: "CITY-EDI",
        strInnerText: "strCityCentreToEdinburghAirport",
    },
    {
        innerText: "Edinburgh Airport to Glasgow",
        path: "/edinburgh-airport-to-glasgow-taxi",
        title: "strEdinburghAirportToGlasgow",
        type: "cell",
        hasTaxiDeals: "EDI-GLA",
        strInnerText: "strEdinburghAirportToGlasgow",
    },
    {
        innerText: "Glasgow to Edinburgh Airport",
        path: "/glasgow-to-edinburgh-airport-taxi",
        title: "strGlasgowToEdinburghAirport",
        type: "cell",
        hasTaxiDeals: "GLA-EDI",
        strInnerText: "strGlasgowToEdinburghAirport",
    },
    {
        innerText: "Edinburgh Airport to St Andrews",
        path: "/edinburgh-airport-to-st-andrews-taxi",
        title: "strEdinburghAirportToStAndrews",
        type: "cell",
        hasTaxiDeals: "EDI-STD",
        strInnerText: "strEdinburghAirportToStAndrews",
    },
    {
        innerText: "St Andrews to Edinburgh Airport",
        path: "/st-andrews-to-edinburgh-airport-taxi",
        title: "strStAndrewsToEdinburghAirport",
        type: "cell",
        hasTaxiDeals: "STD-EDI",
        strInnerText: "strStAndrewsToEdinburghAirport",
    },
    //   {
    //     innerText: "Edinburgh Airport to Dundee",
    //     path: "/edinburgh-airport-to-dundee-taxi",
    //     title: "strEdinburghAirportToDundee",
    //     type: "cell",
    //     hasTaxiDeals: "EDI-DND",
    //     strInnerText: "strEdinburghAirportToDundee",
    //   },
    //   {
    //     innerText: "Dundee to Edinburgh Airport",
    //     path: "/dundee-to-edinburgh-airport-taxi",
    //     title: "strDundeeToEdinburghAirport",
    //     type: "cell",
    //     hasTaxiDeals: "DND-EDI",
    //     strInnerText: "strDundeeToEdinburghAirport",
    //   },
    //   {
    //     innerText: "Edinburgh Airport to Aberdeen",
    //     path: "/edinburgh-airport-to-aberdeen-taxi",
    //     title: "strEdinburghAirportToAberdeen",
    //     type: "cell",
    //     hasTaxiDeals: "EDI-ABZ",
    //     strInnerText: "strEdinburghAirportToAberdeen",
    //   },
    //   {
    //     innerText: "Aberdeen to Edinburgh Airport",
    //     path: "/aberdeen-to-edinburgh-airport-taxi",
    //     title: "strAberdeenToEdinburghAirport",
    //     type: "cell",
    //     hasTaxiDeals: "ABZ-EDI",
    //     strInnerText: "strAberdeenToEdinburghAirport",
    //   },
    //   {
    //     innerText: "Edinburgh Airport to Inverness",
    //     path: "/edinburgh-airport-to-inverness-taxi",
    //     title: "strEdinburghAirportToInverness",
    //     type: "cell",
    //     hasTaxiDeals: "EDI-INV",
    //     strInnerText: "strEdinburghAirportToInverness",
    //   },
    //   {
    //     innerText: "Inverness to Edinburgh Airport",
    //     path: "/inverness-to-edinburgh-airport-taxi",
    //     title: "strInvernessToEdinburghAirport",
    //     type: "cell",
    //     hasTaxiDeals: "INV-EDI",
    //     strInnerText: "strInvernessToEdinburghAirport",
    //   }
];
