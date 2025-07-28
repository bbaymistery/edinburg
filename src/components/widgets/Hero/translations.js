const translations = {
    en: {
      mainTitle: "Travel Comfortably, Arrive in Style",
      subtitle: "Your Perfect Transfer, Wherever You Go in Turkey",
    },
    it: {
      mainTitle: "Viaggia Comodamente, Arriva con Stile",
      subtitle: "Il tuo Trasferimento Perfetto, Ovunque in Turchia",
    },
    tr: {
      mainTitle: "Konforlu Seyahat, Şık Varış",
      subtitle: "Türkiye'nin Her Yerinde Mükemmel Transferiniz",
    },
    ru: {
      mainTitle: "Путешествуйте с комфортом, прибывайте со стилем",
      subtitle: "Ваш идеальный трансфер, где бы вы ни были в Турции",
    },
    ar: {
      mainTitle: "سافر براحة، واصل بأناقة",
      subtitle: "نقلك المثالي، أينما كنت في تركيا",
    },
    zh: {
      mainTitle: "舒适旅行，优雅抵达",
      subtitle: "在土耳其的任何地方享受完美接送",
    },
    es: {
      mainTitle: "Viaja Cómodamente, Llega con Estilo",
      subtitle: "Tu Transferencia Perfecta, Donde Quieras en Turquía",
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