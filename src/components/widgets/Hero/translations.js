const translations = {
  en: {
    mainTitle: "Travel Comfortably, Arrive in Style",
    subtitle: "Your Perfect Transfer in and around Edinburgh",
  },
  it: {
    mainTitle: "Viaggia Comodamente, Arriva con Stile",
    subtitle: "Il tuo Trasferimento Perfetto a Edimburgo e dintorni",
  },
  tr: {
    mainTitle: "Konforlu Seyahat, Şık Varış",
    subtitle: "Edinburgh ve çevresinde mükemmel transferiniz",
  },
  ru: {
    mainTitle: "Путешествуйте с комфортом, прибывайте со стилем",
    subtitle: "Ваш идеальный трансфер в Эдинбурге и окрестностях",
  },
  ar: {
    mainTitle: "سافر براحة، واصل بأناقة",
    subtitle: "خدمتك المثالية للنقل داخل إدنبرة والمناطق المجاورة",
  },
  zh: {
    mainTitle: "舒适旅行，优雅抵达",
    subtitle: "您在爱丁堡及周边地区的完美接送服务",
  },
  es: {
    mainTitle: "Viaja Cómodamente, Llega con Estilo",
    subtitle: "Tu traslado perfecto en Edimburgo y alrededores",
  },
};



export default translations;


export const titleStringOfHastaxiDeals = (hasTaxiDeals) => {
  let titleString = ""
  if (hasTaxiDeals === "IST") {
    titleString = "strIstanbulAirportPrices"
  } else if (hasTaxiDeals === "SAW") {
    titleString = "strSabihaGokcenAirportPrices"
  } else if (hasTaxiDeals === "DLM") {
    titleString = "strDalamanAirportPrices"
  } else if (hasTaxiDeals === "AYT") {
    titleString = "strAntalyaAirportPrices"
  } else if (hasTaxiDeals === "BJV") {
    titleString = "strBodrumMilasAirportPrices"
  } else if (hasTaxiDeals === "ADB") {
    titleString = "strIzmirAdnanMenderesAirportPrices"
  } else if (hasTaxiDeals === "GZP") {
    titleString = "strGazipashaAlanyaAirportPrices"
  }

  return titleString
}