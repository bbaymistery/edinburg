

/**
 * Retrieves a tour object from the `tourDatasTranslated` array based on the provided `pathname`.
 *
 * @param {string} pathname - The pathname of the tour to retrieve.
 * @returns {object} The tour object that matches the provided `pathname`.
 */
export const getTourByPathname = (pathname) => {
    return tourDatasTranslated.filter((tour) => tour.pathname === pathname);
};

/**
 * Retrieves the translated page content for a tour based on the provided pathname and language.
 *
 * @param {string} pathname - The pathname of the tour to retrieve the content for.
 * @param {string} language - The language to retrieve the content in.
 * @returns {object} The translated page content for the specified tour and language.
 */
export const getTourPageContentByPathname = (pathname, language) => {
    return singleTourTranslatedPageContents[pathname][language]
}


/**
 * Retrieves meta tags for a specific tour page based on pathname and language.
 *
 * @param {string} pathname - The pathname of the tour page to retrieve meta tags for
 * @param {string} language - The language code for the desired translation
 * @param {string} env - The environment configuration
 * @returns {Promise<Array>} Array of meta tags for the specified tour page and language
 */
export const getTourMetaTagsByPathname = (pathname, language, env) => {
    const metaTagsData = metaTagsForSingleTourPages(env); // Get all meta tag data
    return metaTagsData[pathname]?.[language] || []; // Return the meta tags for the specific pathname and language
};

/*
!Bu bilgiler elenilmelimidir ? 
Istanbul Bosphorus Lunch Cruise: Explore the Strait and the Black Sea  £35
Tour Duration: 4 Hours
Start Point: Hotel Pick-Up
End Point: Hotel Drop-Off
Departure Time: 13:00


Price: Adult £25.00
Location: Muğla / Fethiye
Duration: 10:00 AM - 6:00 PM
!eklenilecekse time secimini kapatmamiz gerekiyor




*/

//!adult price and children exist only in antalya tour what will be the others 
//!Someof them is written duration like => Duration: 10:00 AM - 6:00 PM  In this case we should remove select data time 
export const tourDatasTranslated = [
    {
        "tourDealId": 1,
        "images": [
            "/images/tours/12Island.webp",
            "/images/tours/12iland/fethiyetour1.webp",
            "/images/tours/12iland/fethiyetour2.webp",
            "/images/tours/12iland/fethiyetour3.webp",
        ],
        "sequenceNumber": 1,
        "pathname": "/tours/fethiye12-island-tour",
        "pageTitle": {
            en: `Fethiye 12 Islands Boat Tour`,
            tr: `Fethiye 12 Adalar Tekne Turu`,
            zh: `费特希耶12岛游`,
            ar: `جولة جزر فتحية الـ 12`,
            ru: `Тур на 12 островов Фетхие`,
            es: `Excursión en Barco por las 12 Islas de Fethiye`,
            it: `Tour in Barca delle 12 Isole di Fethiye`
        },
        "headTitle": {
            en: "Fethiye 12 Islands Boat Tour | Explore Hidden Bays & Crystal-Clear Waters",
            tr: "Fethiye 12 Adalar Tekne Turu | Gizli Koyları ve Kristal Temiz Suları Keşfedin",
            zh: "费特希耶12岛游 | 探索隐秘海湾和清澈见底的水域",
            ar: "جولة جزر فتحية الـ 12 | استكشف الخلجان المخفية والمياه الصافية",
            ru: "Тур на 12 островов Фетхие | Исследуйте скрытые бухты и кристально чистые воды",
            es: "Excursión en Barco por las 12 Islas de Fethiye | Explora Bahías Ocultas y Aguas Cristalinas",
            it: "Tour in Barca delle 12 Isole di Fethiye | Esplora Baie Nascoste e Acque Cristalline"
        },
        "price": "£ 399.00",
        duration: {
            en: "8 hours",
            tr: "8 saat",
            es: "8 horas",
            zh: "8小时",
            ar: "8 ساعات",
            ru: "8 часа",
            it: "8 ore"
        },
        "snapshots": [
            {
                "icon": "fa-solid fa-clock",
                "alias": "strDuration",
            },
            {
                "icon": "fa-solid fa-user-group",
                "alias": "strCambridgePrivateTour",
            },
            {
                "icon": "fa-solid fa-route",
                "alias": "strFlexibleItinerary",
            },
            {
                "icon": "fa-solid fa-square-check",
                "alias": "strFreeCancellation24h",
            }
        ],
        "keywords": {
            "en": "Fethiye 12 Islands Boat Tour, Fethiye boat trip, 12 Islands cruise, Blue Lagoon tour, Turkish Riviera, boat tours in Fethiye, sailing Fethiye, best boat trips Turkey",
            "tr": "Fethiye 12 Adalar Tekne Turu, Fethiye tekne turu, 12 adalar gezisi, Ölüdeniz tekne turu, Mavi Yolculuk Fethiye, Fethiye tekne turları, Türkiye'deki en iyi tekne turları",
            "es": "Tour en barco 12 Islas Fethiye, excursión en barco Fethiye, crucero 12 Islas, tour en barco Turquía, Fethiye navegación, mejores tours en barco Turquía",
            "zh": "费特希耶12岛游船之旅, 费特希耶游船, 12岛巡航, 土耳其游船之旅, 蓝色航行, 费特希耶最佳游船体验",
            "ar": "جولة قارب 12 جزيرة في فتحية, جولة بحرية فتحية, رحلة بحرية 12 جزيرة, أجمل الرحلات البحرية في تركيا, جولات القوارب فتحية",
            "ru": "Тур на лодке по 12 островам Фетхие, круиз по 12 островам, морские экскурсии Фетхие, лучшие лодочные туры Турции, синее путешествие Фетхие",
            "it": "Tour in barca 12 Isole Fethiye, escursione in barca Fethiye, crociera 12 Isole, navigazione in Turchia, migliori tour in barca Turchia"
        },
        "metaDescription": {
            "en": "Explore the breathtaking Fethiye 12 Islands Boat Tour, a perfect getaway to crystal-clear waters, hidden bays, and scenic landscapes. Experience an unforgettable cruise in the Turkish Riviera!",
            "tr": "Fethiye 12 Adalar Tekne Turu ile berrak sular, gizli koylar ve muhteşem manzaralar keşfedin. Türk Rivierası'nda unutulmaz bir tekne turu deneyimi yaşayın!",
            "es": "Descubre la increíble excursión en barco por las 12 Islas de Fethiye. Disfruta de aguas cristalinas, bahías escondidas y paisajes impresionantes en la Riviera Turca.",
            "zh": "探索令人惊叹的费特希耶12岛游船之旅，畅游清澈海水、隐秘海湾和壮丽风景，体验土耳其里维埃拉的梦幻之旅！",
            "ar": "استمتع بجولة قارب مذهلة في فتحية 12 جزيرة، واكتشف المياه الصافية، الخلجان المخفية، والمناظر الخلابة في الريفيرا التركية!",
            "ru": "Исследуйте потрясающий тур на лодке по 12 островам Фетхие. Насладитесь кристально чистыми водами, уединёнными бухтами и живописными пейзажами Турецкой Ривьеры!",
            "it": "Esplora l'incredibile Tour in Barca delle 12 Isole di Fethiye, un viaggio perfetto tra acque cristalline, baie nascoste e panorami mozzafiato della Riviera Turca!"
        },
        "thumbnailTitle": {
            "en": "12 Islands Adventure",
            "tr": "12 Adalar Keyfi",
            "es": "Aventura 12 Islas",
            "zh": "12岛探险",
            "ar": "مغامرة 12 جزيرة",
            "ru": "12 Островов",
            "it": "Avventura 12 Isole"
        },
        "breadcrumbTitle": {
            "en": "Tours",
            "tr": "Turlar",
            "zh": "游览",
            "ar": "الجولات",
            "ru": "Туры",
            "es": "Excursiones",
            "it": "Tour"
        },
        adultPrice: 30,
        childrenPrice: 30,
        duraionTimeRange: "Duration: 10:00 AM - 6:00 PM",
        isPound:true
    },
    {
        "tourDealId": 2,
        "images": [
            "/images/tours/oludeniz1.webp",
            "/images/tours/oludeniz/oludeniz11.webp",
            "/images/tours/oludeniz/oludeniz22.webp",
            "/images/tours/oludeniz/oludeniz33.webp",
        ],
        "sequenceNumber": 2,
        "pathname": "/tours/fethiye-oludeniz-boat-tour",
        "pageTitle": {
            en: "Fethiye Oludeniz Boat Tour",
            tr: "Fethiye Ölüdeniz Tekne Turu",
            zh: "费特希耶厄吕代尼兹游船之旅",
            ar: "جولة بالقارب في فتحية أولودينيز",
            ru: "Тур на лодке в Олюдениз (Фетхие)",
            es: "Excursión en Barco por Oludeniz en Fethiye",
            it: "Tour in Barca a Oludeniz, Fethiye"
        },
        "headTitle": {
            en: "Fethiye Oludeniz Boat Tour | Unforgettable Day Trip from Fethiye",
            tr: "Fethiye Ölüdeniz Tekne Turu | Unutulmaz Bir Günlük Gezi",
            zh: "费特希耶厄吕代尼兹游船之旅 | 难忘的一日游",
            ar: "جولة بالقارب في فتحية أولودينيز | رحلة يوم لا تُنسى من فتحية",
            ru: "Тур на лодке в Олюдениз (Фетхие) | Незабываемая однодневная поездка",
            es: "Excursión en Barco por Oludeniz en Fethiye | Un Día Inolvidable desde Fethiye",
            it: "Tour in Barca a Oludeniz, Fethiye | Gita di un Giorno Indimenticabile"
        },
        duration: {
            en: "7 hours",
            tr: "7 saat",
            es: "7 horas",
            zh: "7小时",
            ar: "7 ساعات",
            ru: "7 часа",
            it: "7 ore"
        },
        "snapshots": [
            {
                "icon": "fa-solid fa-clock",
                "alias": "strDuration",
            },
            {
                "icon": "fa-solid fa-user-group",
                "alias": "strCambridgePrivateTour",
            },
            {
                "icon": "fa-solid fa-route",
                "alias": "strFlexibleItinerary",
            },
            {
                "icon": "fa-solid fa-square-check",
                "alias": "strFreeCancellation24h",
            }
        ],
        "keywords": {
            "en": "Fethiye Oludeniz Boat Tour, Oludeniz boat trip, Blue Lagoon boat tour, Fethiye cruise, boat tour Turkey, Oludeniz yacht tour, best boat trips Fethiye",
            "tr": "Fethiye Ölüdeniz Tekne Turu, Ölüdeniz tekne turu, Mavi Lagün turu, Fethiye yat turu, Türkiye'deki en iyi tekne turları",
            "es": "Tour en barco Fethiye Oludeniz, paseo en barco Oludeniz, crucero en Turquía, tour en barco Blue Lagoon, mejores tours en barco Fethiye",
            "zh": "费特希耶厄吕代尼兹游船之旅，厄吕代尼兹船游，土耳其游船巡游，蓝色泻湖游船之旅，费特希耶最佳游船之旅",
            "ar": "جولة قارب فتحية أولودينيز, جولة بحرية بلو لاغون, أفضل الجولات البحرية في تركيا",
            "ru": "Тур на лодке Фетхие Олюдениз, морская прогулка Голубая Лагуна, круиз в Турции",
            "it": "Tour in barca Fethiye Oludeniz, crociera Blue Lagoon, migliori escursioni in barca Turchia"
        },
        "metaDescription": {
            "en": "Sail through the stunning waters of Oludeniz with the Fethiye Oludeniz Boat Tour. Discover the Blue Lagoon, hidden bays, and breathtaking coastal views in Turkey!",
            "tr": "Fethiye Ölüdeniz Tekne Turu ile muhteşem sulara yelken açın. Mavi Lagün’ü, gizli koyları ve etkileyici kıyı manzaralarını keşfedin!",
            "es": "Navega por las impresionantes aguas de Oludeniz con el Tour en Barco Fethiye Oludeniz. Descubre la Blue Lagoon y bahías escondidas en Turquía.",
            "zh": "乘坐费特希耶厄吕代尼兹游船之旅，扬帆驶向壮丽的海域。探索蓝色泻湖、隐秘海湾和令人惊叹的海岸风光。！",
            "ar": "استمتع بجولة بحرية مذهلة في فتحية أولودينيز، واكتشف بلو لاغون والخليج المخفي!",
            "ru": "Отправьтесь в путешествие по Олюдениз с туром на лодке. Исследуйте Голубую Лагуну и скрытые бухты Турции!",
            "it": "Naviga nelle splendide acque di Oludeniz con il Tour in Barca Fethiye Oludeniz. Scopri Blue Lagoon e baie nascoste!"
        },
        "thumbnailTitle": {
            "en": "Oludeniz Boat Trip",
            "tr": "Ölüdeniz Tekne Turu",
            "es": "Barco Oludeniz",
            "zh": "歐陸丹尼茲",
            "ar": "قارب أولودينيز",
            "ru": "Лодка Олюдениз",
            "it": "Barca Oludeniz"
        },
        "breadcrumbTitle": {
            "en": "Tours",
            "tr": "Turlar",
            "zh": "游览",
            "ar": "الجولات",
            "ru": "Туры",
            "es": "Excursiones",
            "it": "Tour"
        },
        adultPrice: 35,
        childrenPrice: 35,

        duraionTimeRange: "Duration: 10:30 AM - 5:30 PM",
        isPound:true

    },
    {
        "tourDealId": 3,
        "images": [
            "/images/tours/quadBikeSafari.webp",
            "/images/tours/quadbike/quadBikeSafari11.webp",
            "/images/tours/quadbike/quadBikeSafari22.webp",
            "/images/tours/quadbike/quadBikeSafari33.webp",
        ],
        "sequenceNumber": 1,
        "pathname": "/tours/fethiye-quad-bike-safari",
        "pageTitle": {
            en: "Fethiye Quad Bike Safari Tour",
            tr: "Fethiye ATV Safari Turu",
            zh: "费特希耶四轮摩托车探险之旅",
            ar: "جولة سفاري بالدراجات الرباعية في فتحية",
            ru: "Квадроциклетное сафари-тур по Фетхие",
            es: "Excursión en Quad por Fethiye",
            it: "Tour in Quad a Fethiye"
        },
        "headTitle": {
            en: "Fethiye Quad Bike Safari Tour | Explore the Beauty of Fethiye",
            tr: "Fethiye ATV Safari Turu | Fethiye'nin Güzelliklerini Keşfedin",
            zh: "费特希耶四轮摩托车探险之旅 | 探索费特希耶的美丽",
            ar: "جولة سفاري بالدراجات الرباعية في فتحية | استكشف جمال فتحية",
            ru: "Квадроциклетное сафари-тур по Фетхие | Исследуйте красоту Фетхие",
            es: "Excursión en Quad por Fethiye | Explora la Belleza de Fethiye",
            it: "Tour in Quad a Fethiye | Esplora la Bellezza di Fethiye"
        },
        duration: {
            en: "3 hours",
            tr: "3 saat",
            es: "3 horas",
            zh: "3小时",
            ar: "3 ساعات",
            ru: "3 часа",
            it: "3 ore"
        },
        "snapshots": [
            {
                "icon": "fa-solid fa-clock",
                "alias": "strDuration",
            },
            {
                "icon": "fa-solid fa-user-group",
                "alias": "strCambridgePrivateTour",
            },
            {
                "icon": "fa-solid fa-route",
                "alias": "strFlexibleItinerary",
            },
            {
                "icon": "fa-solid fa-square-check",
                "alias": "strFreeCancellation24h",
            }
        ],
        "keywords": {
            "en": "Fethiye Quad Bike Safari, Fethiye ATV tour, off-road adventure Fethiye, quad biking Turkey, safari tour Fethiye, best ATV tours Fethiye",
            "tr": "Fethiye ATV Safari, Fethiye quad bike turu, Fethiye off-road macerası, ATV turları Türkiye, en iyi ATV turları Fethiye",
            "es": "Safari en Quad Fethiye, tour en ATV Fethiye, aventura todoterreno Turquía, mejores tours en quad Fethiye",
            "zh": "费特希耶四轮摩托探险, Fethiye ATV游, 土耳其越野之旅, 最佳ATV探险",
            "ar": "جولة سفاري بالدراجة الرباعية في فتحية, مغامرة ATV في تركيا, جولات ATV في فتحية",
            "ru": "Квадроцикл сафари Фетхие, тур на квадроциклах в Турции, внедорожные приключения Фетхие",
            "it": "Safari in Quad Fethiye, tour in ATV Fethiye, avventura off-road Turchia, migliori escursioni in quad"
        },
        "metaDescription": {
            "en": "Experience the thrill of off-road adventure with the Fethiye Quad Bike Safari Tour. Ride through dusty trails, forests, and scenic landscapes for an adrenaline-packed day!",
            "tr": "Fethiye ATV Safari Turu ile off-road macerasının tadını çıkarın. Tozlu yollar, ormanlar ve etkileyici manzaralar eşliğinde adrenalin dolu bir gün yaşayın!",
            "es": "Vive la emoción de la aventura todoterreno con el Safari en Quad Fethiye. Recorre senderos polvorientos y paisajes impresionantes!",
            "zh": "体验费特希耶四轮摩托探险之旅，穿越尘土飞扬的道路和壮丽景色，感受肾上腺素飙升的快感！",
            "ar": "استمتع بمغامرة مثيرة مع جولة سفاري بالدراجة الرباعية في فتحية، حيث تتجول عبر الطرق الوعرة والمناظر الطبيعية الخلابة!",
            "ru": "Испытайте адреналин на сафари-туре на квадроциклах в Фетхие! Катайтесь по пыльным тропам и живописным местам!",
            "it": "Prova l'emozione dell'avventura off-road con il Safari in Quad Fethiye. Percorri sentieri polverosi e paesaggi mozzafiato!"
        },
        "thumbnailTitle": {
            "en": "Quad Bike Safari",
            "tr": "ATV Safari",
            "es": "Safari en Quad",
            "zh": "四轮摩托探险",
            "ar": "سفاري بالدراجة",
            "ru": "Квадроцикл Сафари",
            "it": "Safari in Quad"
        },
        "breadcrumbTitle": {
            "en": "Tours",
            "tr": "Turlar",
            "zh": "游览",
            "ar": "الجولات",
            "ru": "Туры",
            "es": "Excursiones",
            "it": "Tour"
        },
        childrenPrice: 35,
        adultPrice: 35,
        duraionTimeRange: "Activity Duration: 3 Hours",
        isPound:true

    },
    {
        "tourDealId": 4,
        "images": [
            "/images/tours/istanbulTour1.webp",
            "/images/tours/bosphorusDinner/IstanbulBosphorusDinner1.webp",
            "/images/tours/bosphorusDinner/IstanbulBosphorusDinner2.webp",
            "/images/tours/bosphorusDinner/IstanbulBosphorusDinner3.webp",
        ],
        "sequenceNumber": 3,
        "pathname": "/tours/istanbul-bosphorus-dinner-cruise",
        pageTitle: {
            en: "Istanbul Bosphorus Dinner Cruise",
            tr: "İstanbul Boğazı Akşam Yemeği Turu",
            es: "Crucero con Cena por el Bósforo de Estambul",
            zh: "伊斯坦布尔博斯普鲁斯海峡晚餐游轮",
            ar: "رحلة عشاء بحرية في مضيق البوسفور بإسطنبول",
            ru: "Круиз с ужином по Босфору в Стамбуле",
            it: "Crociera con Cena sul Bosforo a Istanbul"
        },
        headTitle: {
            en: "Istanbul Bosphorus Dinner Cruise | Best Night Cruise in Istanbul",
            tr: "İstanbul Boğazı Akşam Yemeği Turu | İstanbul’daki En İyi Gece Turu",
            es: "Crucero con Cena por el Bósforo de Estambul | El Mejor Crucero Nocturno en Estambul",
            zh: "伊斯坦布尔博斯普鲁斯海峡晚餐游轮 | 伊斯坦布尔最佳夜间游轮",
            ar: "رحلة عشاء بحرية في مضيق البوسفور بإسطنبول | أفضل رحلة ليلية في إسطنبول",
            ru: "Круиз с ужином по Босфору в Стамбуле | Лучший ночной круиз в Стамбуле",
            it: "Crociera con Cena sul Bosforo a Istanbul | La Migliore Crociera Notturna a Istanbul"
        },
        duration: {
            en: "4 hours",
            tr: "4 saat",
            es: "4 horas",
            zh: "4小时",
            ar: "4 ساعات",
            ru: "4 часа",
            it: "4 ore"
        },
        "snapshots": [
            {
                "icon": "fa-solid fa-clock",
                "alias": "strDuration",
            },
            {
                "icon": "fa-solid fa-user-group",
                "alias": "strCambridgePrivateTour",
            },
            {
                "icon": "fa-solid fa-route",
                "alias": "strFlexibleItinerary",
            },
            {
                "icon": "fa-solid fa-square-check",
                "alias": "strFreeCancellation24h",
            }
        ],
        "keywords": {
            "en": "Istanbul Bosphorus Dinner Cruise, Bosphorus night cruise, dinner cruise Istanbul, Istanbul boat tour, Turkish night cruise, best dinner cruises Istanbul",
            "tr": "İstanbul Boğazı Akşam Yemeği Turu, Boğaz gece turu, İstanbul yat turu, Boğaz’da akşam yemeği, İstanbul tekne turu",
            "es": "Crucero con cena Estambul, tour en barco Bósforo, crucero nocturno Turquía, mejor cena crucero Estambul",
            "zh": "伊斯坦布尔博斯普鲁斯晚餐游船, 博斯普鲁斯夜游, 土耳其游船晚宴, 伊斯坦布尔最佳游船",
            "ar": "رحلة عشاء بحرية في البوسفور, جولة ليلية في البوسفور, أفضل الرحلات البحرية في إسطنبول",
            "ru": "Ужин-круиз по Босфору, ночной круиз Стамбул, лучший круиз с ужином в Турции",
            "it": "Crociera con cena Bosforo, tour in barca Istanbul, miglior crociera con cena Turchia"
        },
        "metaDescription": {
            "en": "Enjoy a magical evening on the Istanbul Bosphorus Dinner Cruise with breathtaking views, delicious cuisine, and live entertainment on the waters of the Bosphorus.",
            "tr": "İstanbul Boğazı Akşam Yemeği Turu ile büyüleyici bir akşam geçirin. Muhteşem manzaralar, lezzetli yemekler ve canlı eğlencenin keyfini çıkarın!",
            "es": "Disfruta de una noche mágica en el Crucero con Cena por el Bósforo de Estambul con vistas impresionantes y deliciosa gastronomía.",
            "zh": "在伊斯坦布尔博斯普鲁斯晚餐游船上享受迷人夜晚，美食与壮丽景色相结合。",
            "ar": "استمتع بأمسية ساحرة في رحلة عشاء بحرية في البوسفور مع مناظر خلابة ومأكولات لذيذة.",
            "ru": "Насладитесь волшебным вечером на ужине-круизе по Босфору с захватывающими видами и живой музыкой.",
            "it": "Vivi una serata incantevole con la Crociera con Cena sul Bosforo, tra panorami mozzafiato e ottima cucina."
        },
        "thumbnailTitle": {
            "en": "Bosphorus Dinner Cruise",
            "tr": "Boğaz Yemeği Turu",
            "es": "Cena Crucero Bósforo",
            "zh": "博斯普鲁斯晚宴",
            "ar": "عشاء في البوسفور",
            "ru": "Ужин на Босфоре",
            "it": "Cena sul Bosforo"
        },
        "breadcrumbTitle": {
            "en": "Tours",
            "tr": "Turlar",
            "zh": "游览",
            "ar": "الجولات",
            "ru": "Туры",
            "es": "Excursiones",
            "it": "Tour"
        },
        childrenPrice: 39,
        adultPrice: 39,
        durationTimeRange: "Departure Time: Approximately 8:00 PM (please confirm the exact time)",
        isPound:false
 
    },
    {
        "tourDealId": 5,
        "images": [
            "/images/tours/istanbulTour2.webp",
            "/images/tours/bosphorusLunch/IstanbulBosphoruslinchtour1.webp",
            "/images/tours/bosphorusLunch/IstanbulBosphoruslinchtour2.webp",
            "/images/tours/bosphorusLunch/IstanbulBosphoruslinchtour3.webp",
        ],
        "sequenceNumber": 4,
        "pathname": "/tours/istanbul-bosphorus-lunch-cruise",
        "pageTitle": {
            "en": "Istanbul Bosphorus Lunch Cruise",
            "tr": "İstanbul Boğazı Öğle Yemeği Turu",
            "es": "Crucero con Almuerzo por el Bósforo de Estambul",
            "zh": "伊斯坦布尔博斯普鲁斯海峡午餐游轮",
            "ar": "رحلة غداء بحرية في مضيق البوسفور بإسطنبول",
            "ru": "Обеденный круиз по Босфору в Стамбуле",
            "it": "Crociera con Pranzo sul Bosforo a Istanbul"
        },
        "headTitle": {
            "en": "Istanbul Bosphorus Lunch Cruise | Explore the Strait and the Black Sea",
            "tr": "İstanbul Boğazı Öğle Yemeği Turu | Boğaz ve Karadeniz'i Keşfedin",
            "es": "Crucero con Almuerzo por el Bósforo de Estambul | Explore el Estrecho y el Mar Negro",
            "zh": "伊斯坦布尔博斯普鲁斯海峡午餐游轮 | 探索海峡和黑海",
            "ar": "رحلة غداء بحرية في مضيق البوسفور بإسطنبول | استكشف المضيق والبحر الأسود",
            "ru": "Обеденный круиз по Босфору в Стамбуле | Исследуйте пролив и Чёрное море",
            "it": "Crociera con Pranzo sul Bosforo a Istanbul | Esplora lo Stretto e il Mar Nero"
        },
        duration: {
            en: "4 hours",
            tr: "4 saat",
            es: "4 horas",
            zh: "4小时",
            ar: "4 ساعات",
            ru: "4 часа",
            it: "4 ore"
        },
        "snapshots": [
            {
                "icon": "fa-solid fa-clock",
                "alias": "strDuration",
            },
            {
                "icon": "fa-solid fa-user-group",
                "alias": "strCambridgePrivateTour",
            },
            {
                "icon": "fa-solid fa-route",
                "alias": "strFlexibleItinerary",
            },
            {
                "icon": "fa-solid fa-square-check",
                "alias": "strFreeCancellation24h",
            }
        ],
        "keywords": {
            "en": "Istanbul Bosphorus Lunch Cruise, Bosphorus day cruise, lunch cruise Istanbul, Istanbul boat tour, daytime Bosphorus cruise, best lunch cruises Istanbul",
            "tr": "İstanbul Boğazı Öğle Yemeği Turu, Boğaz gündüz turu, İstanbul yat turu, Boğaz’da öğle yemeği, İstanbul tekne turu",
            "es": "Crucero con almuerzo Estambul, tour en barco Bósforo, crucero de día Turquía, mejor almuerzo crucero Estambul",
            "zh": "伊斯坦布尔博斯普鲁斯午餐游船, 博斯普鲁斯日游, 土耳其午餐游船, 伊斯坦布尔最佳游船",
            "ar": "رحلة غداء بحرية في البوسفور, جولة نهارية في البوسفور, أفضل الرحلات البحرية في إسطنبول",
            "ru": "Обед-круиз по Босфору, дневной круиз Стамбул, лучший круиз с обедом в Турции",
            "it": "Crociera con pranzo Bosforo, tour in barca Istanbul, miglior crociera con pranzo Turchia"
        },
        "metaDescription": {
            "en": "Savor a delightful meal on the Istanbul Bosphorus Lunch Cruise while enjoying panoramic views of Istanbul’s iconic skyline and historic landmarks.",
            "tr": "İstanbul Boğazı Öğle Yemeği Turu ile lezzetli bir yemek eşliğinde Boğaz’ın eşsiz manzaralarını keşfedin.",
            "es": "Disfruta de un delicioso almuerzo en el Crucero por el Bósforo de Estambul con vistas panorámicas impresionantes.",
            "zh": "在伊斯坦布尔博斯普鲁斯午餐游船上品味美食，欣赏壮丽的城市天际线和历史地标。",
            "ar": "استمتع بغداء شهي في رحلة بحرية عبر البوسفور مع إطلالات بانورامية خلابة على إسطنبول.",
            "ru": "Насладитесь вкусным обедом на круизе по Босфору, любуясь панорамными видами Стамбула.",
            "it": "Gusta un delizioso pranzo nella Crociera sul Bosforo con viste spettacolari sullo skyline di Istanbul."
        },
        "thumbnailTitle": {
            "en": "Bosphorus Lunch Cruise",
            "tr": "Boğaz Öğle Turu",
            "es": "Almuerzo Crucero Bósforo",
            "zh": "博斯普鲁斯午宴",
            "ar": "غداء في البوسفور",
            "ru": "Обед на Босфоре",
            "it": "Pranzo sul Bosforo"
        },
        "breadcrumbTitle": {
            "en": "Tours",
            "tr": "Turlar",
            "zh": "游览",
            "ar": "الجولات",
            "ru": "Туры",
            "es": "Excursiones",
            "it": "Tour"
        },
        adultPrice: 25,
        childrenPrice: 25,
        durationTimeRange: "Departure Time: 13:00",
        isPound:false

    },

    {
        "tourDealId": 6,
        "images": [
            "/images/tours/istfullday.webp",
            "/images/tours/fulldayIstanbul/beyoglu.webp",
            "/images/tours/fulldayIstanbul/fulldaay3.webp",
            "/images/tours/fulldayIstanbul/fullday2.webp",

        ],
        "sequenceNumber": 5,
        "pathname": "/tours/istanbul-full-day-tour",
        "pageTitle": {
            "en": "Istanbul: Full-Day Tour",
            "tr": "İstanbul: Tam Günlük Tur",
            "es": "Estambul: Tour de Día Completo",
            "zh": "伊斯坦布尔：全日游",
            "ar": "إسطنبول: جولة ليوم كامل",
            "ru": "Стамбул: Экскурсия на целый день",
            "it": "Istanbul: Tour di un Giorno Intero"
        },
        "headTitle": {
            "en": "Istanbul: Full-Day Tour | Explore the Heart of Two Continents",
            "tr": "İstanbul: Tam Günlük Tur | İki Kıtanın Kalbini Keşfedin",
            "es": "Estambul: Tour de Día Completo | Explora el Corazón de Dos Continentes",
            "zh": "伊斯坦布尔：全日游 | 探索两大洲的心脏",
            "ar": "إسطنبول: جولة ليوم كامل | اكتشف قلب قارتين",
            "ru": "Стамбул: Экскурсия на целый день | Исследуйте сердце двух континентов",
            "it": "Istanbul: Tour di un Giorno Intero | Esplora il Cuore di Due Continenti"
        },
        duration: {
            en: "6 hours",
            tr: "6 saat",
            es: "6 horas",
            zh: "6 小时",
            ar: "6 ساعات",
            ru: "6 часа",
            it: "6 ore"
        },
        "snapshots": [
            {
                "icon": "fa-solid fa-clock",
                "alias": "strDuration",
            },
            {
                "icon": "fa-solid fa-user-group",
                "alias": "strCambridgePrivateTour",
            },
            {
                "icon": "fa-solid fa-route",
                "alias": "strFlexibleItinerary",
            },
            {
                "icon": "fa-solid fa-square-check",
                "alias": "strFreeCancellation24h",
            }
        ],
        "keywords": {
            "en": "Istanbul full-day tour, Istanbul city tour, best Istanbul tours, guided tour Istanbul, top attractions Istanbul, sightseeing Istanbul, day trip Istanbul",
            "tr": "İstanbul tam gün turu, İstanbul şehir turu, en iyi İstanbul turları, rehberli İstanbul turu, İstanbul gezi turu",
            "es": "Tour de día completo Estambul, visita guiada Estambul, mejores tours Estambul, excursión Estambul",
            "zh": "伊斯坦布尔一日游, 伊斯坦布尔观光, 土耳其城市之旅, 伊斯坦布尔最佳旅游",
            "ar": "جولة يوم كامل في إسطنبول, أفضل الجولات في إسطنبول, رحلة سياحية في إسطنبول",
            "ru": "Экскурсия на целый день по Стамбулу, тур по Стамбулу, достопримечательности Стамбула",
            "it": "Tour di un giorno intero Istanbul, migliori tour Istanbul, visita guidata Istanbul"
        },
        "metaDescription": {
            "en": "Explore the best of Istanbul in a full-day tour covering iconic landmarks, historical sites, and breathtaking views. A perfect way to experience the city in one day!",
            "tr": "İstanbul’un en önemli simgelerini, tarihi yerlerini ve muhteşem manzaralarını keşfetmek için tam gün süren unutulmaz bir tur!",
            "es": "Descubre lo mejor de Estambul en un tour de día completo visitando lugares históricos y vistas impresionantes.",
            "zh": "在伊斯坦布尔一日游中探索这座城市的标志性景点、历史遗迹和壮丽景色。",
            "ar": "اكتشف معالم إسطنبول الشهيرة والمواقع التاريخية في جولة يوم كامل لا تُنسى.",
            "ru": "Исследуйте Стамбул за один день, посетив знаменитые достопримечательности и исторические места.",
            "it": "Esplora Istanbul in un tour di un giorno visitando siti storici e panorami mozzafiato."
        },
        "thumbnailTitle": {
            "en": "Full-Day Istanbul Tour",
            "tr": "Tam Gün İstanbul Turu",
            "es": "Tour Día Completo Estambul",
            "zh": "伊斯坦布尔一日游",
            "ar": "جولة يوم كامل إسطنبول",
            "ru": "Целый день в Стамбуле",
            "it": "Tour Completo Istanbul"
        },
        "breadcrumbTitle": {
            "en": "Tours",
            "tr": "Turlar",
            "zh": "游览",
            "ar": "الجولات",
            "ru": "Туры",
            "es": "Excursiones",
            "it": "Tour"
        },
        adultsPrice: 55,
        childrenPrice: 55,
        isPound:false

    },
    //!

    {
        "tourDealId": 7,
        "images": [
            "/images/tours/paragliding-oludeniz.webp",
            "/images/tours/paragliging/Paragliding1.webp",
            "/images/tours/paragliging/Paragliding2.webp",
            "/images/tours/paragliging/Paragliding3.webp",
        ],
        "sequenceNumber": 6,
        "pathname": "/tours/paragliding-fethiye-oludeniz",
        "pageTitle": {
            "en": "Paragliding Adventure in Fethiye Oludeniz",
            "tr": "Fethiye Ölüdeniz'de Yamaç Paraşütü Macerası",
            "es": "Aventura en Parapente en Fethiye Oludeniz",
            "zh": "费特希耶厄吕代尼兹滑翔伞冒险",
            "ar": "مغامرة الطيران المظلي في فتحية أولودينيز",
            "ru": "Параглайдинг в Фетхие Олюдениз",
            "it": "Avventura in Parapendio a Fethiye Oludeniz"
        },
        "headTitle": {
            "en": "Paragliding Adventure in Fethiye Oludeniz | Best Tandem Paragliding Experience",
            "tr": "Fethiye Ölüdeniz'de Yamaç Paraşütü | En İyi İkili Yamaç Paraşütü Deneyimi",
            "es": "Aventura en Parapente en Fethiye Oludeniz | La Mejor Experiencia de Parapente Tándem",
            "zh": "费特希耶厄吕代尼兹滑翔伞冒险 | 最佳双人滑翔伞体验",
            "ar": "مغامرة الطيران المظلي في فتحية أولودينيز | أفضل تجربة طيران مظلي مزدوج",
            "ru": "Параглайдинг в Фетхие Олюдениз | Лучший опыт полетов в тандеме",
            "it": "Avventura in Parapendio a Fethiye Oludeniz | La Migliore Esperienza di Parapendio Tandem"
        },
        duration: {
            en: "2 hours",
            tr: "2 saat",
            es: "2 horas",
            zh: "2 小时",
            ar: "2 ساعات",
            ru: "2 часа",
            it: "2 ore"
        },
        "snapshots": [
            {
                "icon": "fa-solid fa-clock",
                "alias": "strDuration",
            },
            {
                "icon": "fa-solid fa-user-group",
                "alias": "strCambridgePrivateTour",
            },
            {
                "icon": "fa-solid fa-route",
                "alias": "strFlexibleItinerary",
            },
            {
                "icon": "fa-solid fa-square-check",
                "alias": "strFreeCancellation24h",
            }
        ],
        "keywords": {
            "en": "Paragliding in Fethiye, Oludeniz paragliding, best paragliding Turkey, tandem paragliding Fethiye, extreme sports Turkey, adventure sports Fethiye",
            "tr": "Fethiye yamaç paraşütü, Ölüdeniz yamaç paraşütü, Türkiye’de yamaç paraşütü, tandem yamaç paraşütü Fethiye, ekstrem sporlar Türkiye",
            "es": "Parapente en Fethiye, vuelo en parapente Oludeniz, mejor parapente Turquía, deportes extremos Fethiye",
            "zh": "费特希耶滑翔伞, 死海滑翔伞, 土耳其最佳滑翔伞, 极限运动土耳其",
            "ar": "الطيران الشراعي في فتحية, الطيران المظلي أولودينيز, أفضل الطيران الشراعي في تركيا, الرياضات الخطرة تركيا",
            "ru": "Парапланеризм в Фетхие, параглайдинг в Олюдениз, лучший параглайдинг в Турции, экстремальные виды спорта Турция",
            "it": "Parapendio a Fethiye, parapendio Oludeniz, miglior parapendio Turchia, sport estremi Turchia"
        },
        "metaDescription": {
            "en": "Experience the thrill of paragliding in Fethiye Oludeniz! Soar above the breathtaking Blue Lagoon and enjoy the ultimate adrenaline rush with a tandem flight.",
            "tr": "Fethiye Ölüdeniz'de yamaç paraşütü ile heyecanı yaşayın! Mavi Lagün'ün üzerinde süzülerek unutulmaz bir adrenalin deneyimi yaşayın.",
            "es": "¡Vive la emoción del parapente en Fethiye Oludeniz! Disfruta de vistas impresionantes de la Laguna Azul en un vuelo tándem.",
            "zh": "体验费特希耶滑翔伞的刺激！在死海上空翱翔，享受终极肾上腺素飙升体验。",
            "ar": "عش مغامرة الطيران الشراعي في فتحية أولودينيز! حلّق فوق البحيرة الزرقاء واستمتع بتجربة مليئة بالإثارة.",
            "ru": "Испытайте адреналин на параплане в Фетхие Олюдениз! Парите над Голубой Лагуной и наслаждайтесь невероятными видами.",
            "it": "Prova l'emozione del parapendio a Fethiye Oludeniz! Sorvola la Laguna Blu e vivi un'esperienza unica."
        },
        "thumbnailTitle": {
            "en": "Paragliding in Oludeniz",
            "tr": "Ölüdeniz Yamaç Paraşütü",
            "es": "Parapente en Oludeniz",
            "zh": "死海滑翔伞",
            "ar": "الطيران الشراعي أولودينيز",
            "ru": "Параглайдинг Олюдениз",
            "it": "Parapendio a Oludeniz"
        },
        "breadcrumbTitle": {
            "en": "Tours",
            "tr": "Turlar",
            "zh": "游览",
            "ar": "الجولات",
            "ru": "Туры",
            "es": "Excursiones",
            "it": "Tour"
        },
        childrenPrice:115,
        adultPrice: 115,
        isPound:true

    },
    {
        "tourDealId": 8,
        "images": [
            "/images/tours/antalya.webp",
            "/images/tours/antalya/antalya1.webp",
            "/images/tours/antalya/antalya2.webp",
            "/images/tours/antalya/antalya3.webp",

        ],
        "sequenceNumber": 8,
        "pathname": "/tours/antalya-sightseeing-city-tour",
        "pageTitle": {
            "en": "Antalya Sightseeing City Tour with Waterfalls & Cable Car",
            "tr": "Antalya Şehir Turu: Şelaleler ve Teleferik ile",
            "es": "Tour Turístico por la Ciudad de Antalya con Cascadas y Teleférico",
            "zh": "安塔利亚观光城市游览，含瀑布与缆车",
            "ar": "جولة سياحية في أنطاليا تشمل الشلالات والتلفريك",
            "ru": "Обзорная экскурсия по Анталии с водопадами и канатной дорогой",
            "it": "Tour della Città di Antalya con Cascate e Funivia"
        },
        "headTitle": {
            "en": "Antalya Sightseeing City Tour with Waterfalls & Cable Car | Explore the Best of Antalya",
            "tr": "Antalya Şehir Turu: Şelaleler ve Teleferik ile | Antalya'nın En İyilerini Keşfedin",
            "es": "Tour Turístico por la Ciudad de Antalya con Cascadas y Teleférico | Explora lo Mejor de Antalya",
            "zh": "安塔利亚观光城市游览，含瀑布与缆车 | 探索安塔利亚的精华",
            "ar": "جولة سياحية في أنطاليا تشمل الشلالات والتلفريك | اكتشف أفضل ما في أنطاليا",
            "ru": "Обзорная экскурсия по Анталии с водопадами и канатной дорогой | Исследуйте лучшее в Анталии",
            "it": "Tour della Città di Antalya con Cascate e Funivia | Scopri il Meglio di Antalya"
        },
        duration: {
            en: "9.5 hours",
            tr: "9.5 saat",
            es: "9.5 horas",
            zh: "9.5 小时",
            ar: "9.5 ساعات",
            ru: "9.5 часа",
            it: "9.5 ore"
        },
        "snapshots": [
            {
                "icon": "fa-solid fa-clock",
                "alias": "strDuration",
            },
            {
                "icon": "fa-solid fa-user-group",
                "alias": "strCambridgePrivateTour",
            },
            {
                "icon": "fa-solid fa-route",
                "alias": "strFlexibleItinerary",
            },
            {
                "icon": "fa-solid fa-square-check",
                "alias": "strFreeCancellation24h",
            }
        ],
        "keywords": {
            "en": "Paragliding in Fethiye, Oludeniz paragliding, best paragliding Turkey, tandem paragliding Fethiye, extreme sports Turkey, adventure sports Fethiye",
            "tr": "Fethiye yamaç paraşütü, Ölüdeniz yamaç paraşütü, Türkiye’de yamaç paraşütü, tandem yamaç paraşütü Fethiye, ekstrem sporlar Türkiye",
            "es": "Parapente en Fethiye, vuelo en parapente Oludeniz, mejor parapente Turquía, deportes extremos Fethiye",
            "zh": "费特希耶滑翔伞, 死海滑翔伞, 土耳其最佳滑翔伞, 极限运动土耳其",
            "ar": "الطيران الشراعي في فتحية, الطيران المظلي أولودينيز, أفضل الطيران الشراعي في تركيا, الرياضات الخطرة تركيا",
            "ru": "Парапланеризм в Фетхие, параглайдинг в Олюдениз, лучший параглайдинг в Турции, экстремальные виды спорта Турция",
            "it": "Parapendio a Fethiye, parapendio Oludeniz, miglior parapendio Turchia, sport estremi Turchia"
        },
        "metaDescription": {
            "en": "Experience the thrill of paragliding in Fethiye Oludeniz! Soar above the breathtaking Blue Lagoon and enjoy the ultimate adrenaline rush with a tandem flight.",
            "tr": "Fethiye Ölüdeniz'de yamaç paraşütü ile heyecanı yaşayın! Mavi Lagün'ün üzerinde süzülerek unutulmaz bir adrenalin deneyimi yaşayın.",
            "es": "¡Vive la emoción del parapente en Fethiye Oludeniz! Disfruta de vistas impresionantes de la Laguna Azul en un vuelo tándem.",
            "zh": "体验费特希耶滑翔伞的刺激！在死海上空翱翔，享受终极肾上腺素飙升体验。",
            "ar": "عش مغامرة الطيران الشراعي في فتحية أولودينيز! حلّق فوق البحيرة الزرقاء واستمتع بتجربة مليئة بالإثارة.",
            "ru": "Испытайте адреналин на параплане в Фетхие Олюдениз! Парите над Голубой Лагуной и наслаждайтесь невероятными видами.",
            "it": "Prova l'emozione del parapendio a Fethiye Oludeniz! Sorvola la Laguna Blu e vivi un'esperienza unica."
        },
        "thumbnailTitle": {
            "en": "Paragliding in Oludeniz",
            "tr": "Ölüdeniz Yamaç Paraşütü",
            "es": "Parapente en Oludeniz",
            "zh": "死海滑翔伞",
            "ar": "الطيران الشراعي أولودينيز",
            "ru": "Параглайдинг Олюдениз",
            "it": "Parapendio a Oludeniz"
        },
        "breadcrumbTitle": {
            "en": "Tours",
            "tr": "Turlar",
            "zh": "游览",
            "ar": "الجولات",
            "ru": "Туры",
            "es": "Excursiones",
            "it": "Tour"
        },
        adultPrice: 30,
        childrenPrice: 30,
        isPound:false


    }
]

export const singleTourTranslatedPageContents = {
    "/tours/fethiye12-island-tour": {
        en: `
             <h1>Discover the Stunning 12 Islands of Fethiye</h1>
    <p>
        Set sail on a full-day adventure exploring the breathtaking islands and bays of the Gulf of Fethiye. 
        This unforgettable boat tour takes you to hidden coves, crystal-clear waters, and fascinating historical 
        sites that are only accessible by sea. Perfect for families, couples, and groups of friends, the 12 
        Islands Boat Tour is your chance to experience the magic of the Mediterranean in all its glory.
    </p>

    <h2>Itinerary Highlights</h2>
    <ol>
        <li>
            <strong>Yassica Islands:</strong>
            Start your journey with a stop at the Yassica Islands, a group of small islets surrounded by turquoise waters. 
            Ideal for swimming and island-hopping, this spot offers a sandy natural pool that’s perfect for kids and a 
            unique adventure for experienced swimmers.
        </li>
        <li>
            <strong>Shipyard Island (Tersane Island):</strong>
            Explore the largest island in the Göcek archipelago, rich in history and culture. Visit the ruins of Greek-Ottoman 
            houses and the old boatyard that gave the island its name. Swim in its dual bays, known as the summer and 
            winter harbors, and walk in the footsteps of history.
        </li>
        <li>
            <strong>Red Island (Kızıl Ada):</strong>
            Named for its striking reddish hue at sunset, Red Island features sandy beaches, azure coves, and mysterious 
            underwater caves. Its lighthouse and tranquil surroundings make it an unforgettable stop for swimming and exploring.
        </li>
        <li>
            <strong>Rabbit Island:</strong>
            This charming island gets its name from its rabbit-shaped outline when viewed from above. Enjoy a refreshing swim 
            in the crystal-clear waters or take a short walk around the island's picturesque terrain.
        </li>
        <li>
            <strong>Aquarium Bay:</strong>
            End your tour at Aquarium Bay, where lush green forests meet the sparkling blue sea. A favorite for diving and 
            snorkeling, this idyllic cove offers a peaceful swimming experience in pristine surroundings before heading back to Fethiye.
        </li>
    </ol>

    <h2>What's Included</h2>
    <ul>
        <li>Hotel transfers (if applicable)</li>
        <li>Delicious onboard lunch</li>
        <li>Insurance</li>
    </ul>

    <h2>What's Not Included</h2>
    <ul>
        <li>Drinks (available for purchase onboard)</li>
    </ul>

    <h2>Helpful Tips for Your Tour</h2>
    <ul>
        <li>Sunscreen, sunglasses, and a hat</li>
        <li>Swimwear and towel</li>
        <li>Comfortable footwear for exploring the islands</li>
        <li>Snorkeling gear (optional)</li>
    </ul>

    <h3>Additional Notes:</h3>
    <ul>
        <li>Arrive at the boat 30-45 minutes before departure to secure your preferred seating.</li>
        <li>Meals are provided on the boat; no need to bring additional food.</li>
        <li>Please note that fishing is prohibited during the tour.</li>
        <li>Boats may be crowded during peak season, so early arrival is recommended.</li>
    </ul>

    <h2>Why Choose This Tour?</h2>
    <ul>
        <li><strong>Unique Locations:</strong> Visit five incredible islands and bays, each offering its own charm and beauty.</li>
        <li><strong>Unforgettable Scenery:</strong> Swim in turquoise waters, relax on sandy beaches, and soak in the Mediterranean sunshine.</li>
        <li><strong>Family-Friendly:</strong> Perfect for all ages, with activities for both adventure seekers and relaxation enthusiasts.</li>
        <li><strong>Convenience:</strong> Enjoy a seamless experience with transfers, lunch, and expert guides included.</li>
    </ul>

    <h2>Book Your Fethiye 12 Islands Boat Tour Today!</h2>
    <p>
        Escape to the tranquil beauty of the Mediterranean and create lasting memories on this magical journey. 
        Reserve your spot now for a day filled with adventure, relaxation, and stunning landscapes.
    </p>
            `,
        tr: `
        <h1>Fethiye'nin Muhteşem 12 Adasını Keşfedin</h1>
<p>
    Fethiye Körfezi'nin nefes kesen adalarını ve koylarını keşfedeceğiniz tam günlük bir maceraya yelken açın. 
    Bu unutulmaz tekne turu, yalnızca deniz yoluyla erişilebilen gizli koylara, kristal berraklığındaki sulara ve büyüleyici tarihi 
    yerlere sizi götürür. Aileler, çiftler ve arkadaş grupları için mükemmel olan 12 Adalar Tekne Turu, Akdeniz'in büyüsünü tüm ihtişamıyla deneyimleme şansınızdır.
</p>

<h2>Güzergahın Öne Çıkanları</h2>
<ol>
    <li>
        <strong>Yassıca Adaları:</strong>
        Yassıca Adaları'nda bir mola vererek yolculuğunuza başlayın; turkuaz sularla çevrili küçük adacıklar grubu. 
        Yüzme ve adalar arasında gezinti için ideal olan bu nokta, çocuklar için mükemmel bir kum havuzu ve deneyimli yüzücüler için eşsiz bir macera sunar.
    </li>
    <li>
        <strong>Tersane Adası:</strong>
        Göcek takımadalarının en büyük adasını keşfedin; tarih ve kültür açısından zengin. Adanın adını aldığı Yunan-Osmanlı evlerinin kalıntılarını 
        ve eski tersaneyi ziyaret edin. Yaz ve kış limanları olarak bilinen iki koyunda yüzün ve tarihin izlerini takip edin.
    </li>
    <li>
        <strong>Kızıl Ada:</strong>
        Gün batımında çarpıcı kırmızımsı rengiyle adlandırılan Kızıl Ada, kumlu plajlar, masmavi koylar ve gizemli su altı mağaralarıyla doludur. 
        Deniz feneri ve huzurlu ortamıyla yüzme ve keşif için unutulmaz bir duraktır.
    </li>
    <li>
        <strong>Tavşan Adası:</strong>
        Bu büyüleyici ada, yukarıdan bakıldığında tavşan şeklindeki görünümünden adını alır. Kristal berraklığındaki sularda ferahlatıcı bir yüzmenin keyfini çıkarın 
        veya adanın pitoresk arazisinde kısa bir yürüyüş yapın.
    </li>
    <li>
        <strong>Akvaryum Koyu:</strong>
        Turunuzu, yemyeşil ormanların parıldayan mavi denizle buluştuğu Akvaryum Koyu'nda sonlandırın. Dalış ve şnorkelle yüzme için favori bir yer olan bu pastoral koy, 
        Fethiye'ye dönmeden önce huzurlu bir yüzme deneyimi sunar.
    </li>
</ol>

<h2>Dahil Olanlar</h2>
<ul>
    <li>Otel transferleri (uygulanabilir ise)</li>
    <li>Lezzetli bir gemi içi öğle yemeği</li>
    <li>Sigorta</li>
</ul>

<h2>Dahil Olmayanlar</h2>
<ul>
    <li>İçecekler (gemide satın alınabilir)</li>
</ul>

<h2>Tur İçin Faydalı İpuçları</h2>
<ul>
    <li>Güneş kremi, güneş gözlüğü ve şapka</li>
    <li>Mayolar ve havlu</li>
    <li>Adaları keşfetmek için rahat ayakkabılar</li>
    <li>Şnorkel ekipmanı (isteğe bağlı)</li>
</ul>

<h3>Ek Notlar:</h3>
<ul>
    <li>Tercih ettiğiniz oturma yerini güvence altına almak için tekneye kalkıştan 30-45 dakika önce gelin.</li>
    <li>Yemekler teknede sunulmaktadır; ekstra yiyecek getirmenize gerek yoktur.</li>
    <li>Tur sırasında balık tutmanın yasak olduğunu lütfen unutmayın.</li>
    <li>Yoğun sezonda tekneler kalabalık olabilir, bu yüzden erken gelmeniz önerilir.</li>
</ul>

<h2>Neden Bu Turu Seçmelisiniz?</h2>
<ul>
    <li><strong>Eşsiz Lokasyonlar:</strong> Her biri kendi cazibesine ve güzelliğine sahip beş inanılmaz adayı ve koyu ziyaret edin.</li>
    <li><strong>Unutulmaz Manzaralar:</strong> Turkuaz sularda yüzün, kumlu plajlarda dinlenin ve Akdeniz güneşinin keyfini çıkarın.</li>
    <li><strong>Aile Dostu:</strong> Her yaştan macera arayanlar ve dinlenmek isteyenler için aktivitelerle dolu mükemmel bir tur.</li>
    <li><strong>Kolaylık:</strong> Transferler, öğle yemeği ve uzman rehberler dahil sorunsuz bir deneyimin keyfini çıkarın.</li>
</ul>

<h2>Fethiye 12 Adalar Tekne Turunuzu Bugün Rezervasyon Yapın!</h2>
<p>
    Akdeniz'in huzurlu güzelliklerine kaçın ve bu büyülü yolculukta kalıcı anılar yaratın. 
    Macera, dinlenme ve çarpıcı manzaralarla dolu bir gün için yerinizi hemen ayırtın.
</p>
        `,
        ru: `
            <h1>Откройте для себя удивительные 12 островов Фетхие</h1>
    <p>
        Отправьтесь в однодневное приключение, исследуя живописные острова и заливы залива Фетхие. 
        Этот незабываемый морской тур проведет вас к скрытым бухтам, кристально чистым водам и увлекательным историческим 
        достопримечательностям, которые доступны только по морю. Идеально подходит для семей, пар и групп друзей, экскурсия на 12 
        островов — это ваш шанс испытать магию Средиземноморья во всей её красе.
    </p>

    <h2>Основные моменты маршрута</h2>
    <ol>
        <li>
            <strong>Острова Яссыджа:</strong>
            Начните путешествие с остановки на островах Яссыджа, группе небольших островков, окруженных бирюзовыми водами. 
            Идеальное место для купания и прогулок по островам, здесь есть песчаный природный бассейн, который идеально подходит для детей, 
            а также уникальные приключения для опытных пловцов.
        </li>
        <li>
            <strong>Корабельный остров (Терсане):</strong>
            Исследуйте самый большой остров архипелага Гёчек, богатый историей и культурой. Посетите руины греко-османских 
            домов и старую корабельную верфь, которая дала острову его название. Поплавайте в его двух бухтах, известных как летняя и 
            зимняя гавани, и пройдитесь по следам истории.
        </li>
        <li>
            <strong>Красный остров (Кызыладжа):</strong>
            Названный за свой яркий красноватый оттенок на закате, Красный остров предлагает песчаные пляжи, лазурные бухты и загадочные 
            подводные пещеры. Его маяк и спокойная атмосфера делают его незабываемым местом для купания и исследований.
        </li>
        <li>
            <strong>Остров Кролика:</strong>
            Этот очаровательный остров получил свое название благодаря форме кролика, которую можно увидеть сверху. Наслаждайтесь освежающим плаванием 
            в кристально чистых водах или прогуляйтесь по живописной местности острова.
        </li>
        <li>
            <strong>Бухта Аквариум:</strong>
            Завершите свой тур в бухте Аквариум, где пышные зеленые леса встречаются с сверкающим голубым морем. Излюбленное место для дайвинга и 
            сноркелинга, эта идиллическая бухта предлагает спокойное плавание в первозданной обстановке перед возвращением в Фетхие.
        </li>
    </ol>

    <h2>Что включено</h2>
    <ul>
        <li>Трансфер из отеля (при необходимости)</li>
        <li>Вкусный обед на борту</li>
        <li>Страховка</li>
    </ul>

    <h2>Что не включено</h2>
    <ul>
        <li>Напитки (можно купить на борту)</li>
    </ul>

    <h2>Полезные советы для вашего тура</h2>
    <ul>
        <li>Солнцезащитный крем, солнцезащитные очки и шляпа</li>
        <li>Купальники и полотенце</li>
        <li>Удобная обувь для прогулок по островам</li>
        <li>Снаряжение для сноркелинга (по желанию)</li>
    </ul>

    <h3>Дополнительные заметки:</h3>
    <ul>
        <li>Приходите на лодку за 30-45 минут до отправления, чтобы занять предпочтительное место.</li>
        <li>Еда предоставляется на борту; дополнительную еду приносить не нужно.</li>
        <li>Обратите внимание, что рыбалка во время тура запрещена.</li>
        <li>В разгар сезона лодки могут быть переполнены, поэтому рекомендуется приходить заранее.</li>
    </ul>

    <h2>Почему стоит выбрать этот тур?</h2>
    <ul>
        <li><strong>Уникальные места:</strong> Посетите пять невероятных островов и бухт, каждая из которых обладает своим шармом и красотой.</li>
        <li><strong>Незабываемые пейзажи:</strong> Купайтесь в бирюзовых водах, отдыхайте на песчаных пляжах и наслаждайтесь солнцем Средиземноморья.</li>
        <li><strong>Подходит для семей:</strong> Идеально подходит для всех возрастов, с активностями как для любителей приключений, так и для тех, кто ищет отдых.</li>
        <li><strong>Удобство:</strong> Наслаждайтесь безупречным опытом с трансферами, обедом и услугами профессиональных гидов.</li>
    </ul>

    <h2>Забронируйте свою экскурсию на 12 островов Фетхие уже сегодня!</h2>
    <p>
        Откройте для себя спокойную красоту Средиземного моря и создайте незабываемые воспоминания в этом волшебном путешествии. 
        Забронируйте свое место уже сейчас, чтобы провести день, полный приключений, отдыха и потрясающих пейзажей.
    </p>
        `,
        es: `
         <h1>Descubre las maravillosas 12 Islas de Fethiye</h1>
    <p>
        Embarca en una aventura de un día completo explorando las pintorescas islas y bahías del Golfo de Fethiye. 
        Este inolvidable tour en barco te llevará a calas escondidas, aguas cristalinas y fascinantes 
        lugares históricos accesibles solo por mar. Perfecto para familias, parejas y grupos de amigos, 
        el tour de las 12 Islas es tu oportunidad de experimentar la magia del Mediterráneo en todo su esplendor.
    </p>

    <h2>Aspectos destacados del itinerario</h2>
    <ol>
        <li>
            <strong>Islas Yassica:</strong>
            Comienza tu viaje con una parada en las Islas Yassica, un grupo de pequeños islotes rodeados de aguas turquesas. 
            Ideal para nadar y recorrer las islas, este lugar ofrece una piscina natural de arena perfecta para niños y 
            una aventura única para nadadores experimentados.
        </li>
        <li>
            <strong>Isla del Astillero (Tersane):</strong>
            Explora la isla más grande del archipiélago de Göcek, rica en historia y cultura. Visita las ruinas de las casas 
            greco-otomanas y el antiguo astillero que dio nombre a la isla. Nada en sus dos bahías, conocidas como el puerto de verano 
            y el de invierno, y camina por las huellas de la historia.
        </li>
        <li>
            <strong>Isla Roja (Kızıl Ada):</strong>
            Nombrada por su llamativo tono rojizo al atardecer, la Isla Roja cuenta con playas de arena, calas azules y misteriosas 
            cuevas submarinas. Su faro y entorno tranquilo la convierten en una parada inolvidable para nadar y explorar.
        </li>
        <li>
            <strong>Isla Conejo:</strong>
            Esta encantadora isla debe su nombre a su forma de conejo vista desde arriba. Disfruta de un refrescante baño 
            en las aguas cristalinas o da un breve paseo por el pintoresco terreno de la isla.
        </li>
        <li>
            <strong>Bahía del Acuario:</strong>
            Termina tu recorrido en la Bahía del Acuario, donde los frondosos bosques verdes se encuentran con el brillante mar azul. 
            Un lugar favorito para el buceo y el snorkel, esta idílica cala ofrece una experiencia de natación tranquila 
            en un entorno prístino antes de regresar a Fethiye.
        </li>
    </ol>

    <h2>¿Qué está incluido?</h2>
    <ul>
        <li>Traslados desde el hotel (si aplica)</li>
        <li>Delicioso almuerzo a bordo</li>
        <li>Seguro</li>
    </ul>

    <h2>¿Qué no está incluido?</h2>
    <ul>
        <li>Bebidas (disponibles para comprar a bordo)</li>
    </ul>

    <h2>Consejos útiles para tu recorrido</h2>
    <ul>
        <li>Protector solar, gafas de sol y un sombrero</li>
        <li>Ropa de baño y toalla</li>
        <li>Calzado cómodo para explorar las islas</li>
        <li>Equipo de snorkel (opcional)</li>
    </ul>

    <h3>Notas adicionales:</h3>
    <ul>
        <li>Llega al barco con 30-45 minutos de antelación para asegurar tu asiento preferido.</li>
        <li>Las comidas se ofrecen a bordo; no es necesario llevar comida adicional.</li>
        <li>Ten en cuenta que la pesca está prohibida durante el recorrido.</li>
        <li>En temporada alta, los barcos pueden estar llenos, así que se recomienda llegar temprano.</li>
    </ul>

    <h2>¿Por qué elegir este tour?</h2>
    <ul>
        <li><strong>Lugares únicos:</strong> Visita cinco increíbles islas y bahías, cada una con su propio encanto y belleza.</li>
        <li><strong>Paisajes inolvidables:</strong> Nada en aguas turquesas, relájate en playas de arena y disfruta del sol del Mediterráneo.</li>
        <li><strong>Apto para familias:</strong> Perfecto para todas las edades, con actividades para aventureros y también para quienes buscan relajación.</li>
        <li><strong>Comodidad:</strong> Disfruta de una experiencia sin complicaciones con traslados, almuerzo y guías expertos incluidos.</li>
    </ul>

    <h2>¡Reserva tu excursión a las 12 Islas de Fethiye hoy mismo!</h2>
    <p>
        Escapa a la tranquila belleza del Mediterráneo y crea recuerdos inolvidables en este viaje mágico. 
        Reserva tu lugar ahora para disfrutar de un día lleno de aventuras, relajación y paisajes impresionantes.
    </p>
        `,
        it: `
        <h1>Scopri le meravigliose 12 Isole di Fethiye</h1>
    <p>
        Parti per un'avventura di un'intera giornata esplorando le pittoresche isole e baie del Golfo di Fethiye. 
        Questo indimenticabile tour in barca ti porterà a calette nascoste, acque cristalline e affascinanti 
        siti storici accessibili solo via mare. Perfetto per famiglie, coppie e gruppi di amici, 
        il tour delle 12 Isole è la tua opportunità per vivere la magia del Mediterraneo in tutto il suo splendore.
    </p>

    <h2>Punti salienti dell'itinerario</h2>
    <ol>
        <li>
            <strong>Isole Yassica:</strong>
            Inizia il tuo viaggio con una sosta alle Isole Yassica, un gruppo di piccoli isolotti circondati da acque turchesi. 
            Ideale per nuotare e fare il giro delle isole, questo luogo offre una piscina naturale di sabbia perfetta per i bambini e 
            un'avventura unica per i nuotatori esperti.
        </li>
        <li>
            <strong>Isola del Cantiere Navale (Tersane):</strong>
            Esplora l'isola più grande dell'arcipelago di Göcek, ricca di storia e cultura. Visita le rovine delle case 
            greco-ottomane e l'antico cantiere navale che ha dato il nome all'isola. Nuota nelle sue due baie, conosciute come porto estivo 
            e porto invernale, e cammina sulle tracce della storia.
        </li>
        <li>
            <strong>Isola Rossa (Kızıl Ada):</strong>
            Chiamata così per il suo sorprendente tono rossastro al tramonto, l'Isola Rossa vanta spiagge sabbiose, calette azzurre e misteriose 
            grotte sottomarine. Il suo faro e l'ambiente tranquillo la rendono una tappa indimenticabile per nuotare ed esplorare.
        </li>
        <li>
            <strong>Isola del Coniglio:</strong>
            Questa affascinante isola prende il nome dalla sua forma di coniglio vista dall'alto. Goditi una nuotata rinfrescante 
            nelle acque cristalline o fai una breve passeggiata nel pittoresco paesaggio dell'isola.
        </li>
        <li>
            <strong>Baia dell'Acquario:</strong>
            Concludi il tuo tour nella Baia dell'Acquario, dove le rigogliose foreste verdi incontrano il brillante mare blu. 
            Una meta preferita per immersioni e snorkeling, questa idilliaca baia offre un'esperienza di nuoto tranquilla 
            in un ambiente incontaminato prima di tornare a Fethiye.
        </li>
    </ol>

    <h2>Cosa è incluso?</h2>
    <ul>
        <li>Trasferimenti dall'hotel (se applicabile)</li>
        <li>Delizioso pranzo a bordo</li>
        <li>Assicurazione</li>
    </ul>

    <h2>Cosa non è incluso?</h2>
    <ul>
        <li>Bevande (acquistabili a bordo)</li>
    </ul>

    <h2>Consigli utili per il tuo tour</h2>
    <ul>
        <li>Crema solare, occhiali da sole e un cappello</li>
        <li>Costume da bagno e asciugamano</li>
        <li>Scarpe comode per esplorare le isole</li>
        <li>Attrezzatura per snorkeling (opzionale)</li>
    </ul>

    <h3>Note aggiuntive:</h3>
    <ul>
        <li>Arriva alla barca 30-45 minuti prima della partenza per assicurarti il posto preferito.</li>
        <li>I pasti sono forniti a bordo; non è necessario portare cibo aggiuntivo.</li>
        <li>Nota che la pesca è vietata durante il tour.</li>
        <li>Durante l'alta stagione, le barche possono essere affollate, quindi si consiglia di arrivare in anticipo.</li>
    </ul>

    <h2>Perché scegliere questo tour?</h2>
    <ul>
        <li><strong>Luoghi unici:</strong> Visita cinque incredibili isole e baie, ognuna con il suo fascino e bellezza.</li>
        <li><strong>Paesaggi indimenticabili:</strong> Nuota in acque turchesi, rilassati su spiagge sabbiose e goditi il sole del Mediterraneo.</li>
        <li><strong>Adatto alle famiglie:</strong> Perfetto per tutte le età, con attività per gli avventurieri e per chi cerca relax.</li>
        <li><strong>Comodità:</strong> Goditi un'esperienza senza problemi con trasferimenti, pranzo e guide esperte inclusi.</li>
    </ul>

    <h2>Prenota oggi il tuo tour delle 12 Isole di Fethiye!</h2>
    <p>
        Fuggi nella tranquilla bellezza del Mediterraneo e crea ricordi indimenticabili in questo viaggio magico. 
        Prenota il tuo posto ora per vivere una giornata ricca di avventure, relax e paesaggi mozzafiato.
    </p>
        `,
        zh: `
         <h1>探索令人惊叹的费特希耶12座岛屿</h1>
    <p>
        参加一整天的冒险之旅，探索费特希耶湾的风景如画的岛屿和海湾。
        这次令人难忘的船游将带您前往隐秘的海湾、清澈见底的水域以及只能通过海路抵达的迷人历史遗址。
        非常适合家庭、情侣和朋友团体，12岛游是体验地中海魔力的绝佳机会。
    </p>

    <h2>行程亮点</h2>
    <ol>
        <li>
            <strong>亚希卡群岛：</strong>
            从亚希卡群岛开始您的旅程，这是一组被碧蓝海水包围的小岛。
            这里是游泳和岛屿间跳跃的理想地点，还有一个天然的沙池，非常适合儿童，
            也是经验丰富的游泳者的独特冒险之地。
        </li>
        <li>
            <strong>造船厂岛（特尔萨内岛）：</strong>
            探索戈切克群岛中最大的岛屿，这里充满了历史和文化。
            参观希腊-奥斯曼风格的房屋遗址以及为岛屿命名的旧造船厂。
            在两个被称为夏季和冬季港口的海湾中游泳，追随历史的足迹。
        </li>
        <li>
            <strong>红岛（Kızıl Ada）：</strong>
            以日落时令人惊叹的红色光芒而闻名，红岛拥有沙滩、碧蓝的海湾和神秘的水下洞穴。
            它的灯塔和宁静的环境使其成为游泳和探索的难忘之地。
        </li>
        <li>
            <strong>兔子岛：</strong>
            这个迷人的岛屿因从空中看起来像兔子的轮廓而得名。
            在清澈的水中享受清爽的游泳，或在岛上的如画地形中短暂漫步。
        </li>
        <li>
            <strong>水族馆湾：</strong>
            在水族馆湾结束您的旅程，这里绿意盎然的森林与湛蓝的大海交相辉映。
            这是潜水和浮潜的热门地点，这个田园诗般的海湾提供了宁静的游泳体验，
            在返回费特希耶之前感受原始的自然环境。
        </li>
    </ol>

    <h2>包含内容</h2>
    <ul>
        <li>酒店接送（如适用）</li>
        <li>船上美味午餐</li>
        <li>保险</li>
    </ul>

    <h2>不包含内容</h2>
    <ul>
        <li>饮料（船上可购买）</li>
    </ul>

    <h2>旅行贴士</h2>
    <ul>
        <li>防晒霜、太阳镜和帽子</li>
        <li>泳衣和毛巾</li>
        <li>适合探索岛屿的舒适鞋子</li>
        <li>浮潜设备（可选）</li>
    </ul>

    <h3>额外提示：</h3>
    <ul>
        <li>请在出发前30-45分钟到达船上，以确保您的首选座位。</li>
        <li>船上提供餐点，无需携带额外食物。</li>
        <li>请注意，旅行期间禁止钓鱼。</li>
        <li>在旺季期间，船可能会很拥挤，因此建议提早到达。</li>
    </ul>

    <h2>为什么选择这个旅行团？</h2>
    <ul>
        <li><strong>独特的地点：</strong>参观五个令人惊叹的岛屿和海湾，每一个都有自己独特的魅力和美丽。</li>
        <li><strong>难忘的风景：</strong>在碧蓝的海水中畅游，在沙滩上放松，享受地中海的阳光。</li>
        <li><strong>适合家庭：</strong>非常适合所有年龄段，有冒险活动和放松项目。</li>
        <li><strong>便利性：</strong>享受无忧无虑的体验，包括接送服务、午餐和专业导游。</li>
    </ul>

    <h2>立即预订您的费特希耶12岛游！</h2>
    <p>
        逃离喧嚣，沉浸在地中海的宁静之美中，在这次神奇的旅行中创造难忘的回忆。
        立即预订您的位置，体验充满冒险、放松和壮丽景色的一天。
    </p>
        `,
        ar: `
          <h1>اكتشف الجزر الـ 12 المدهشة في فتحية</h1>
    <p>
        انطلق في مغامرة ليوم كامل لاستكشاف الجزر الخلابة والخليج في منطقة فتحية.
        ستأخذك هذه الجولة البحرية التي لا تُنسى إلى خلجان مخفية ومياه صافية تمامًا ومواقع تاريخية ساحرة لا يمكن الوصول إليها إلا عن طريق البحر.
        تعتبر هذه الرحلة مثالية للعائلات والأزواج ومجموعات الأصدقاء، وهي فرصتك لتجربة سحر البحر الأبيض المتوسط بكل جماله.
    </p>

    <h2>أبرز معالم الرحلة</h2>
    <ol>
        <li>
            <strong>جزر ياسيكا:</strong>
            ابدأ رحلتك بزيارة جزر ياسيكا، وهي مجموعة من الجزر الصغيرة المحاطة بمياه فيروزية.
            هذا المكان مثالي للسباحة واستكشاف الجزر، ويتميز ببركة طبيعية رملية مثالية للأطفال، كما يوفر مغامرة فريدة للسباحين ذوي الخبرة.
        </li>
        <li>
            <strong>جزيرة ترسانة:</strong>
            استكشف أكبر جزيرة في أرخبيل غوجيك، التي تزخر بالتاريخ والثقافة.
            قم بزيارة بقايا المنازل اليونانية العثمانية والحوض البحري القديم الذي أعطى الجزيرة اسمها.
            استمتع بالسباحة في الخليجين المعروفين بالميناء الصيفي والميناء الشتوي، واتبع آثار التاريخ.
        </li>
        <li>
            <strong>الجزيرة الحمراء (كزِل أدا):</strong>
            تُعرف بلونها الأحمر اللافت عند غروب الشمس، وتتميز الجزيرة الحمراء بشواطئها الرملية وخليجها الأزرق وكهوفها الغامضة تحت الماء.
            تجعلها المنارة وأجواؤها الهادئة محطة لا تُنسى للسباحة والاستكشاف.
        </li>
        <li>
            <strong>جزيرة الأرنب:</strong>
            حصلت هذه الجزيرة الساحرة على اسمها من شكلها الذي يشبه الأرنب عند النظر إليها من الأعلى.
            استمتع بالسباحة المنعشة في المياه الصافية أو قم بنزهة قصيرة في تضاريس الجزيرة الخلابة.
        </li>
        <li>
            <strong>خليج الأكواريوم:</strong>
            اختتم جولتك في خليج الأكواريوم، حيث تلتقي الغابات الخضراء المورقة بالبحر الأزرق اللامع.
            يعد هذا المكان المفضل للغوص والغطس، ويوفر هذا الخليج المثالي تجربة سباحة هادئة في محيط طبيعي بكر قبل العودة إلى فتحية.
        </li>
    </ol>

    <h2>ما الذي يشمله العرض؟</h2>
    <ul>
        <li>نقل من وإلى الفندق (إذا كان ذلك ممكنًا)</li>
        <li>وجبة غداء لذيذة على متن القارب</li>
        <li>التأمين</li>
    </ul>

    <h2>ما الذي لا يشمله العرض؟</h2>
    <ul>
        <li>المشروبات (يمكن شراؤها على متن القارب)</li>
    </ul>

    <h2>نصائح مفيدة لجولتك</h2>
    <ul>
        <li>واقي من الشمس، نظارات شمسية وقبعة</li>
        <li>ملابس سباحة ومنشفة</li>
        <li>أحذية مريحة لاستكشاف الجزر</li>
        <li>معدات غطس (اختيارية)</li>
    </ul>

    <h3>ملاحظات إضافية:</h3>
    <ul>
        <li>يرجى الوصول إلى القارب قبل 30-45 دقيقة من موعد الانطلاق لضمان اختيار مكانك المفضل.</li>
        <li>تُقدم الوجبات على متن القارب؛ لا حاجة لجلب طعام إضافي.</li>
        <li>يرجى ملاحظة أن الصيد ممنوع أثناء الجولة.</li>
        <li>قد تكون القوارب مزدحمة خلال الموسم السياحي، لذا يُوصى بالوصول مبكرًا.</li>
    </ul>

    <h2>لماذا تختار هذه الجولة؟</h2>
    <ul>
        <li><strong>أماكن فريدة:</strong> زر خمس جزر وخليجان رائعان، كل منهما يتميز بسحره وجماله الخاص.</li>
        <li><strong>مناظر لا تُنسى:</strong> اسبح في المياه الفيروزية، واسترخِ على الشواطئ الرملية، واستمتع بشمس البحر الأبيض المتوسط.</li>
        <li><strong>مناسب للعائلات:</strong> مثالي لجميع الأعمار، مع أنشطة تناسب عشاق المغامرة والراحة.</li>
        <li><strong>الراحة:</strong> استمتع بتجربة خالية من المتاعب تشمل النقل والوجبات ودليلين خبراء.</li>
    </ul>

    <h2>احجز جولتك إلى جزر فتحية الـ 12 اليوم!</h2>
    <p>
        اهرب إلى جمال البحر الأبيض المتوسط الهادئ واصنع ذكريات لا تُنسى في هذه الرحلة السحرية.
        احجز مكانك الآن ليوم مليء بالمغامرة والاسترخاء والمناظر الطبيعية الخلابة.
    </p>
        `
    },
    "/tours/fethiye-oludeniz-boat-tour": {
        en: `
            <h1>Discover the Hidden Gems of Oludeniz's Coastline</h1>
    <p>
        Embark on an unforgettable day-long boat tour exploring the turquoise coves and beaches of Oludeniz. 
        This scenic journey takes you to some of the most beautiful and unique spots along the famous coastline of Fethiye. 
        Swim, relax, and enjoy a delicious lunch while soaking up the stunning natural beauty. Perfect for families, 
        friends, and solo travelers seeking a serene yet adventurous experience.
    </p>

    <h2>Itinerary Highlights</h2>

    <ol>
        <li>
            <strong>Blue Cave:</strong>
            Start your day by diving into the crystal-clear waters of the Blue Cave. Swim into this magical sea-filled 
            cavern and marvel at its geological formations and vibrant underwater life.
        </li>
        <li>
            <strong>Butterfly Valley:</strong>
            Cruise along towering cliffs to reach the breathtaking Butterfly Valley. Relax on its unspoiled beach, 
            walk through the dramatic canyon, and catch a glimpse of the picturesque waterfall. Home to a variety 
            of butterfly and moth species, this stop is a photographer's dream.
        </li>
        <li>
            <strong>St. Nicholas Island:</strong>
            Explore the fascinating Byzantine ruins of St. Nicholas Island, believed to be linked to the historical 
            Saint Nicholas (Santa Claus). Wander through ancient churches, chapels, and homes, or take a 
            refreshing swim in the clear waters while lunch is served onboard.
        </li>
        <li>
            <strong>Aquarium Bay:</strong>
            Delight in the vibrant shades of blue at Aquarium Bay. This tranquil spot is perfect for snorkeling and 
            exploring the underwater world, making it a favorite stop for water enthusiasts.
        </li>
        <li>
            <strong>Cold Water Bay:</strong>
            Hidden between pine-covered cliffs, Cold Water Bay offers a refreshing surprise with its mix of icy 
            freshwater springs and warm sea water. A truly unique swimming experience awaits in this stunning 
            and secluded cove.
        </li>
        <li>
            <strong>Camel Beach:</strong>
            End your journey with a peaceful visit to Camel Beach. The calm waters and quiet atmosphere make it 
            the perfect spot for a final swim and to watch the sun setting over the forested coastline.
        </li>
    </ol>
    

    <h2>What's Included</h2>
    <ul>
        <li>Professional guide</li>
        <li>Delicious onboard lunch</li>
        <li>Insurance</li>
    </ul>


    <h2>What to Bring</h2>
    <ul>
        <li>Swimwear and towel</li>
        <li>Money for drinks (not included)</li>
    </ul>


    <h2>Important Notes</h2>
    <ul>
        <li>The route may change depending on weather conditions, and some stops might not be possible.</li>
    </ul>


    <h2>Why Join This Tour?</h2>
    <ul>
        <li><strong>Breathtaking Scenery:</strong> Explore the famous turquoise waters, hidden coves, and pristine beaches of Oludeniz.</li>
        <li><strong>Relaxation & Adventure:</strong> Swim, snorkel, or simply unwind in stunning natural surroundings.</li>
        <li><strong>Unique Stops:</strong> Visit historical sites, hidden caves, and unspoiled landscapes along the coast.</li>
        <li><strong>Family-Friendly:</strong> Suitable for all ages and a perfect way to create unforgettable memories.</li>
    </ul>

    <h2>Book Your Oludeniz Boat Tour Now!</h2>
    <p>
        Don't miss this incredible opportunity to explore the wonders of Fethiye's coastline. Reserve your 
        spot today and make your visit to Oludeniz truly unforgettable!
    </p>
        `,
        tr: ` 
            <h1>Ölüdeniz Sahilinin Gizli Güzelliklerini Keşfedin</h1>
    <p>
        Ölüdeniz'in turkuaz koylarını ve plajlarını keşfedeceğiniz unutulmaz bir günlük tekne turuna çıkın. 
        Bu manzaralı yolculuk, Fethiye'nin ünlü kıyı şeridinde en güzel ve benzersiz noktalara götürür. 
        Yüzün, rahatlayın ve nefes kesici doğal güzelliklerin tadını çıkarırken lezzetli bir öğle yemeği yiyin. 
        Aileler, arkadaşlar ve huzurlu ama macera dolu bir deneyim arayan bireyler için mükemmeldir.
    </p>

    <h2>Güzergahın Öne Çıkanları</h2>
    <ol>
        <li>
            <strong>Mavi Mağara:</strong>
            Gününüze Mavi Mağara'nın kristal berraklığındaki sularına dalarak başlayın. Bu büyülü deniz dolu 
            mağarada yüzün ve jeolojik oluşumlarına ve canlı su altı yaşamına hayran kalın.
        </li>
        <li>
            <strong>Kelebekler Vadisi:</strong>
            Yüksek kayalıkların arasından geçerek nefes kesici Kelebekler Vadisi'ne ulaşın. El değmemiş plajında 
            dinlenin, dramatik kanyonda yürüyün ve pitoresk şelaleyi görün. Çeşitli kelebek ve güve türlerine ev sahipliği yapan bu durak, fotoğrafçılar için bir rüya.
        </li>
        <li>
            <strong>St. Nicholas Adası:</strong>
            Tarihi Aziz Nikola (Noel Baba) ile bağlantılı olduğuna inanılan St. Nicholas Adası'nın büyüleyici Bizans kalıntılarını keşfedin. 
            Antik kiliseler, şapeller ve evler arasında dolaşın ya da öğle yemeği servis edilirken berrak sularda serinleyin.
        </li>
        <li>
            <strong>Akvaryum Koyu:</strong>
            Akvaryum Koyu'nun canlı mavi tonlarının keyfini çıkarın. Bu huzurlu nokta, şnorkelle yüzme ve 
            su altı dünyasını keşfetmek için mükemmeldir ve su sporları meraklıları için favori bir duraktır.
        </li>
        <li>
            <strong>Soğuk Su Koyu:</strong>
            Çam ağaçlarıyla kaplı kayalıkların arasında gizlenmiş olan Soğuk Su Koyu, buz gibi tatlı su kaynakları ve sıcak deniz suyu karışımıyla ferahlatıcı bir sürpriz sunar. 
            Bu çarpıcı ve tenha koyda gerçekten eşsiz bir yüzme deneyimi sizi bekliyor.
        </li>
        <li>
            <strong>Deve Plajı:</strong>
            Yolculuğunuzu Deve Plajı'na huzurlu bir ziyaretle sonlandırın. Sakin suları ve sessiz atmosferi, 
            son bir yüzme ve ormanlık kıyının üzerindeki gün batımını izlemek için mükemmel bir yer haline getiriyor.
        </li>
    </ol>

    <h2>Dahil Olanlar</h2>
    <ul>
        <li>Profesyonel rehber</li>
        <li>Lezzetli gemi içi öğle yemeği</li>
        <li>Sigorta</li>
    </ul>

    <h2>Yanınızda Getirmeniz Gerekenler</h2>
    <ul>
        <li>Mayolar ve havlu</li>
        <li>İçecekler için para (dahil değildir)</li>
    </ul>

    <h2>Önemli Notlar</h2>
    <ul>
        <li>Hava koşullarına bağlı olarak rota değişebilir ve bazı duraklara uğranamayabilir.</li>
    </ul>

    <h2>Neden Bu Tura Katılmalısınız?</h2>
    <ul>
        <li><strong>Nefes Kesici Manzaralar:</strong> Ölüdeniz'in ünlü turkuaz sularını, gizli koylarını ve el değmemiş plajlarını keşfedin.</li>
        <li><strong>Rahatlama ve Macera:</strong> Muhteşem doğal ortamda yüzün, şnorkelle dalın veya sadece dinlenin.</li>
        <li><strong>Benzersiz Duraklar:</strong> Tarihi yerleri, gizli mağaraları ve el değmemiş manzaraları ziyaret edin.</li>
        <li><strong>Aile Dostu:</strong> Her yaşa uygun ve unutulmaz anılar yaratmanın mükemmel bir yolu.</li>
    </ul>

    <h2>Ölüdeniz Tekne Turunuzu Hemen Rezerve Edin!</h2>
    <p>
        Fethiye kıyılarının harikalarını keşfetmek için bu inanılmaz fırsatı kaçırmayın. 
        Bugün yerinizi ayırtın ve Ölüdeniz ziyaretinizi gerçekten unutulmaz kılın!
    </p>
        `,
        ru: `
         <h1>Откройте для себя скрытые жемчужины побережья Олюдениза</h1>
    <p>
        Отправьтесь в незабываемый однодневный тур на лодке, исследуя бирюзовые бухты и пляжи Олюдениза. 
        Это живописное путешествие приведет вас к самым красивым и уникальным местам вдоль знаменитого побережья Фетхие. 
        Плавайте, отдыхайте и наслаждайтесь вкусным обедом, наслаждаясь потрясающей природной красотой. 
        Идеально подходит для семей, друзей и одиночных путешественников, ищущих спокойный, но захватывающий опыт.
    </p>

    <h2>Основные моменты маршрута</h2>
    <ol>
        <li>
            <strong>Голубая пещера:</strong>
            Начните день с погружения в кристально чистые воды Голубой пещеры. Поплавайте в этой волшебной морской 
            пещере и полюбуйтесь её геологическими формациями и яркой подводной жизнью.
        </li>
        <li>
            <strong>Долина бабочек:</strong>
            Проплывите вдоль высоких скал, чтобы добраться до захватывающей дух Долины бабочек. Расслабьтесь на её 
            нетронутом пляже, прогуляйтесь по драматическому каньону и полюбуйтесь живописным водопадом. Это место, 
            где обитают различные виды бабочек и мотыльков, станет мечтой для фотографов.
        </li>
        <li>
            <strong>Остров Святого Николая:</strong>
            Исследуйте увлекательные византийские руины острова Святого Николая, которые связывают с историческим 
            Святым Николаем (Санта-Клаусом). Прогуляйтесь по древним церквям, часовням и домам или освежитесь в 
            чистых водах, пока на борту подаётся обед.
        </li>
        <li>
            <strong>Бухта Аквариум:</strong>
            Насладитесь яркими синими оттенками в бухте Аквариум. Это спокойное место идеально подходит для 
            сноркелинга и изучения подводного мира, что делает его любимой остановкой для любителей воды.
        </li>
        <li>
            <strong>Бухта Холодной воды:</strong>
            Скрытая между скалами, покрытыми соснами, бухта Холодной воды предлагает освежающий сюрприз с 
            сочетанием ледяных пресных источников и тёплой морской воды. Вас ждёт действительно уникальный опыт 
            плавания в этом потрясающем и уединённом месте.
        </li>
        <li>
            <strong>Верблюжий пляж:</strong>
            Завершите своё путешествие спокойным посещением Верблюжьего пляжа. Спокойные воды и тихая атмосфера делают 
            его идеальным местом для последнего купания и наблюдения за закатом над лесистым побережьем.
        </li>
    </ol>

    <h2>Что включено</h2>
    <ul>
        <li>Профессиональный гид</li>
        <li>Вкусный обед на борту</li>
        <li>Страховка</li>
    </ul>

    <h2>Что взять с собой</h2>
    <ul>
        <li>Купальник и полотенце</li>
        <li>Деньги на напитки (не включены)</li>
    </ul>

    <h2>Важные заметки</h2>
    <ul>
        <li>Маршрут может измениться в зависимости от погодных условий, и некоторые остановки могут быть недоступны.</li>
    </ul>

    <h2>Почему стоит выбрать этот тур?</h2>
    <ul>
        <li><strong>Потрясающие пейзажи:</strong> Исследуйте знаменитые бирюзовые воды, скрытые бухты и нетронутые пляжи Олюдениза.</li>
        <li><strong>Отдых и приключения:</strong> Плавайте, занимайтесь сноркелингом или просто расслабьтесь в потрясающих природных условиях.</li>
        <li><strong>Уникальные остановки:</strong> Посетите исторические места, скрытые пещеры и нетронутые пейзажи вдоль побережья.</li>
        <li><strong>Подходит для семей:</strong> Идеально для всех возрастов и отличный способ создать незабываемые воспоминания.</li>
    </ul>

    <h2>Забронируйте свой тур на лодке по Олюденизу уже сегодня!</h2>
    <p>
        Не упустите эту невероятную возможность исследовать чудеса побережья Фетхие. Забронируйте 
        своё место сегодня и сделайте свой визит в Олюдениз по-настоящему незабываемым!
    </p>
        `,
        es: `
      <h1>Descubre las Joyas Ocultas de la Costa de Oludeniz</h1>
    <p>
        Embárcate en una inolvidable excursión de un día explorando las calas turquesas y playas de Oludeniz. 
        Este pintoresco recorrido te llevará a algunos de los lugares más hermosos y únicos a lo largo de la famosa costa de Fethiye. 
        Nada, relájate y disfruta de un delicioso almuerzo mientras admiras la impresionante belleza natural. 
        Perfecto para familias, amigos y viajeros solitarios que buscan una experiencia tranquila pero aventurera.
    </p>

    <h2>Aspectos Destacados del Itinerario</h2>
    <ol>
        <li>
            <strong>Cueva Azul:</strong>
            Comienza tu día sumergiéndote en las aguas cristalinas de la Cueva Azul. Nada en esta mágica 
            cueva marina y maravíllate con sus formaciones geológicas y su vibrante vida submarina.
        </li>
        <li>
            <strong>Valle de las Mariposas:</strong>
            Navega junto a imponentes acantilados para llegar al impresionante Valle de las Mariposas. Relájate en su 
            playa virgen, pasea por el dramático cañón y contempla la pintoresca cascada. Hogar de una variedad de 
            especies de mariposas y polillas, esta parada es un sueño para los fotógrafos.
        </li>
        <li>
            <strong>Isla de San Nicolás:</strong>
            Explora las fascinantes ruinas bizantinas de la Isla de San Nicolás, que se cree están vinculadas al histórico 
            San Nicolás (Santa Claus). Pasea por antiguas iglesias, capillas y casas, o refréscate en las 
            aguas cristalinas mientras se sirve el almuerzo a bordo.
        </li>
        <li>
            <strong>Bahía del Acuario:</strong>
            Disfruta de los vibrantes tonos azules en la Bahía del Acuario. Este tranquilo lugar es perfecto para 
            practicar snorkel y explorar el mundo submarino, convirtiéndolo en una parada favorita para los amantes del agua.
        </li>
        <li>
            <strong>Bahía de Agua Fría:</strong>
            Escondida entre acantilados cubiertos de pinos, la Bahía de Agua Fría ofrece una refrescante sorpresa con su 
            mezcla de manantiales de agua dulce helada y agua de mar cálida. Una experiencia de nado realmente única te espera 
            en esta impresionante y aislada cala.
        </li>
        <li>
            <strong>Playa del Camello:</strong>
            Termina tu recorrido con una visita pacífica a la Playa del Camello. Sus aguas tranquilas y su atmósfera serena la 
            convierten en el lugar perfecto para un último baño y para observar el atardecer sobre la costa arbolada.
        </li>
    </ol>

    <h2>¿Qué está incluido?</h2>
    <ul>
        <li>Guía profesional</li>
        <li>Delicioso almuerzo a bordo</li>
        <li>Seguro</li>
    </ul>

    <h2>¿Qué llevar?</h2>
    <ul>
        <li>Traje de baño y toalla</li>
        <li>Dinero para bebidas (no incluido)</li>
    </ul>

    <h2>Notas Importantes</h2>
    <ul>
        <li>La ruta puede cambiar dependiendo de las condiciones climáticas, y algunas paradas podrían no ser posibles.</li>
    </ul>

    <h2>¿Por qué unirse a este tour?</h2>
    <ul>
        <li><strong>Paisajes Impresionantes:</strong> Explora las famosas aguas turquesas, calas ocultas y playas vírgenes de Oludeniz.</li>
        <li><strong>Relajación y Aventura:</strong> Nada, haz snorkel o simplemente relájate en un entorno natural impresionante.</li>
        <li><strong>Paradas Únicas:</strong> Visita sitios históricos, cuevas ocultas y paisajes intactos a lo largo de la costa.</li>
        <li><strong>Ideal para Familias:</strong> Perfecto para todas las edades y una excelente manera de crear recuerdos inolvidables.</li>
    </ul>

    <h2>¡Reserva tu Excursión en Barco por Oludeniz Ahora!</h2>
    <p>
        No te pierdas esta increíble oportunidad de explorar las maravillas de la costa de Fethiye. Reserva 
        tu lugar hoy y haz que tu visita a Oludeniz sea verdaderamente inolvidable.
    </p>
        `,
        it: `
   <h1>Scopri i Tesori Nascosti della Costa di Oludeniz</h1>
    <p>
        Parti per un'indimenticabile escursione di un giorno esplorando le cale turchesi e le spiagge di Oludeniz. 
        Questo pittoresco tour ti porterà in alcuni dei luoghi più belli e unici lungo la famosa costa di Fethiye. 
        Nuota, rilassati e goditi un delizioso pranzo mentre ammiri la straordinaria bellezza naturale. 
        Perfetto per famiglie, amici e viaggiatori solitari in cerca di un'esperienza tranquilla ma avventurosa.
    </p>

    <h2>Punti Salienti dell'Itinerario</h2>
    <ol>
        <li>
            <strong>Grotta Blu:</strong>
            Inizia la giornata immergendoti nelle acque cristalline della Grotta Blu. Nuota in questa magica 
            grotta marina e ammira le sue formazioni geologiche e la vibrante vita sottomarina.
        </li>
        <li>
            <strong>Valle delle Farfalle:</strong>
            Naviga lungo le imponenti scogliere per raggiungere la straordinaria Valle delle Farfalle. Rilassati sulla sua 
            spiaggia incontaminata, passeggia nel drammatico canyon e ammira la pittoresca cascata. Casa di una varietà di 
            specie di farfalle e falene, questa tappa è il sogno di ogni fotografo.
        </li>
        <li>
            <strong>Isola di San Nicola:</strong>
            Esplora le affascinanti rovine bizantine dell'Isola di San Nicola, che si ritiene siano collegate al leggendario 
            San Nicola (Babbo Natale). Passeggia tra antiche chiese, cappelle e case, oppure rinfrescati nelle 
            acque limpide mentre il pranzo viene servito a bordo.
        </li>
        <li>
            <strong>Baia dell'Acquario:</strong>
            Goditi le tonalità vivaci di blu nella Baia dell'Acquario. Questo tranquillo luogo è perfetto per fare snorkeling e 
            esplorare il mondo sottomarino, rendendolo una tappa preferita per gli appassionati d'acqua.
        </li>
        <li>
            <strong>Baia dell'Acqua Fredda:</strong>
            Nascosta tra scogliere ricoperte di pini, la Baia dell'Acqua Fredda offre una sorpresa rinfrescante con la sua 
            combinazione di sorgenti di acqua dolce gelida e acqua di mare calda. Un'esperienza di nuoto davvero unica ti aspetta 
            in questa spettacolare e appartata insenatura.
        </li>
        <li>
            <strong>Spiaggia del Cammello:</strong>
            Concludi il tuo tour con una visita tranquilla alla Spiaggia del Cammello. Le sue acque calme e l'atmosfera serena la 
            rendono il luogo perfetto per un ultimo bagno e per ammirare il tramonto sulla costa alberata.
        </li>
    </ol>

    <h2>Cosa è incluso?</h2>
    <ul>
        <li>Guida professionale</li>
        <li>Delizioso pranzo a bordo</li>
        <li>Assicurazione</li>
    </ul>

    <h2>Cosa portare?</h2>
    <ul>
        <li>Costume da bagno e asciugamano</li>
        <li>Soldi per le bevande (non inclusi)</li>
    </ul>

    <h2>Note Importanti</h2>
    <ul>
        <li>Il percorso può variare in base alle condizioni meteorologiche e alcune tappe potrebbero non essere disponibili.</li>
    </ul>

    <h2>Perché unirsi a questo tour?</h2>
    <ul>
        <li><strong>Paisaggi Mozzafiato:</strong> Esplora le famose acque turchesi, le cale nascoste e le spiagge incontaminate di Oludeniz.</li>
        <li><strong>Relax e Avventura:</strong> Nuota, fai snorkeling o semplicemente rilassati in un ambiente naturale straordinario.</li>
        <li><strong>Tappe Uniche:</strong> Visita siti storici, grotte nascoste e paesaggi intatti lungo la costa.</li>
        <li><strong>Adatto alle Famiglie:</strong> Perfetto per tutte le età e un modo eccellente per creare ricordi indimenticabili.</li>
    </ul>

    <h2>Prenota Ora il Tuo Tour in Barca a Oludeniz!</h2>
    <p>
        Non perdere questa incredibile opportunità di esplorare le meraviglie della costa di Fethiye. Prenota 
        ora il tuo posto e rendi la tua visita a Oludeniz davvero indimenticabile.
    </p>
        `,
        zh: `
        <h1>探索厄吕代尼兹海岸的隐藏瑰宝</h1>
    <p>
        参加一次难忘的一日游，探索厄吕代尼兹的碧绿海湾和美丽海滩。 
        这个风景如画的旅程将带您到费特希耶著名海岸线上一些最美丽和独特的景点。 
        游泳、放松，同时享用美味的船上午餐，尽情欣赏令人惊叹的自然之美。 
        这是家庭、朋友以及寻找宁静但又充满冒险的旅客的理想选择。
    </p>

    <h2>行程亮点</h2>
    <ol>
        <li>
            <strong>蓝洞：</strong>
            通过跳入蓝洞的清澈海水开启您的一天。 游入这个神奇的海洋洞穴， 
            欣赏其地质结构和丰富的水下生物。
        </li>
        <li>
            <strong>蝴蝶谷：</strong>
            沿着高耸的悬崖航行，抵达令人叹为观止的蝴蝶谷。 在其未被破坏的海滩上放松身心， 
            漫步在壮观的峡谷中，并观赏迷人的瀑布。 这里是多种蝴蝶和飞蛾的家园，是摄影师的梦想之地。
        </li>
        <li>
            <strong>圣尼古拉斯岛：</strong>
            探索圣尼古拉斯岛迷人的拜占庭遗迹，据说与历史上的圣尼古拉斯（圣诞老人）有关。 
            漫步于古老的教堂、礼拜堂和房屋之间，或者在清澈的水中游泳，同时享用船上提供的午餐。
        </li>
        <li>
            <strong>水族馆湾：</strong>
            欣赏水族馆湾中明亮的蓝色色调。 这个宁静的地方非常适合浮潜和探索水下世界， 
            是水上运动爱好者的热门停靠点。
        </li>
        <li>
            <strong>冷水湾：</strong>
            隐藏在松树覆盖的悬崖之间，冷水湾以其冰冷的淡水泉和温暖的海水混合带来清爽的惊喜。 
            在这个令人惊叹和隐秘的海湾中，您将体验到真正独特的游泳体验。
        </li>
        <li>
            <strong>骆驼海滩：</strong>
            在骆驼海滩的宁静访问中结束您的旅程。 这里平静的水域和安静的氛围使其成为最后一次游泳的理想地点， 
            同时欣赏森林海岸线上的日落美景。
        </li>
    </ol>

    <h2>包含内容</h2>
    <ul>
        <li>专业导游</li>
        <li>美味的船上午餐</li>
        <li>保险</li>
    </ul>

    <h2>需要携带</h2>
    <ul>
        <li>泳衣和毛巾</li>
        <li>购买饮品的现金（不包括在内）</li>
    </ul>

    <h2>重要提示</h2>
    <ul>
        <li>路线可能会因天气情况而改变，某些停靠点可能无法进行。</li>
    </ul>

    <h2>为什么选择这次旅行？</h2>
    <ul>
        <li><strong>令人惊叹的景色：</strong>探索厄吕代尼兹著名的碧绿海水、隐藏的海湾和未受破坏的海滩。</li>
        <li><strong>放松与冒险：</strong>在壮丽的自然环境中游泳、浮潜或简单地放松。</li>
        <li><strong>独特的停靠点：</strong>参观历史遗址、隐藏的洞穴和未受破坏的沿海风景。</li>
        <li><strong>适合家庭：</strong>适合所有年龄段，是创造难忘回忆的绝佳方式。</li>
    </ul>

    <h2>立即预订您的厄吕代尼兹船游！</h2>
    <p>
        不要错过这个探索费特希耶海岸奇观的绝佳机会。 立即预订您的位置，让您的厄吕代尼兹之行真正难忘！
    </p>
        `,
        ar: `
            <h1>اكتشف الجواهر المخفية على ساحل أولودينيز</h1>
    <p>
        انطلق في جولة بحرية لا تُنسى ليوم كامل لاستكشاف الخلجان الفيروزية والشواطئ الجميلة في أولودينيز. 
        ستأخذك هذه الرحلة الخلابة إلى بعض من أجمل وأروع الأماكن على طول الساحل الشهير لفتحية. 
        اسبح، استرخِ، واستمتع بغداء لذيذ على متن القارب بينما تستمتع بجمال الطبيعة المدهش. 
        مثالي للعائلات والأصدقاء والمسافرين الباحثين عن تجربة هادئة ولكن مليئة بالمغامرات.
    </p>

    <h2>أبرز معالم الرحلة</h2>
    <ol>
        <li>
            <strong>الكهف الأزرق:</strong>
            ابدأ يومك بالقفز في المياه الصافية للكهف الأزرق. اسبح في هذا الكهف البحري السحري 
            واستمتع بتكويناته الجيولوجية وحياته البحرية الزاهية.
        </li>
        <li>
            <strong>وادي الفراشات:</strong>
            أبحر على طول المنحدرات الشاهقة للوصول إلى وادي الفراشات المذهل. استرخِ على شاطئه البكر، 
            وتنزه عبر الوادي الدرامي، واستمتع برؤية الشلال الخلاب. يُعتبر هذا المكان موطنًا لمجموعة متنوعة 
            من الفراشات والعث، وهو حلم للمصورين.
        </li>
        <li>
            <strong>جزيرة القديس نيكولاس:</strong>
            اكتشف الآثار البيزنطية المثيرة لجزيرة القديس نيكولاس، والتي يُعتقد أنها مرتبطة تاريخيًا بالقديس 
            نيكولاس (سانتا كلوز). تنزه بين الكنائس القديمة والمعابد والمنازل، أو استمتع بالسباحة في المياه 
            الصافية أثناء تقديم الغداء على متن القارب.
        </li>
        <li>
            <strong>خليج الحوض:</strong>
            استمتع بالظلال الزرقاء النابضة في خليج الحوض. هذا المكان الهادئ مثالي للغطس 
            واستكشاف العالم تحت الماء، مما يجعله وجهة مفضلة لمحبي الماء.
        </li>
        <li>
            <strong>خليج المياه الباردة:</strong>
            مخفي بين المنحدرات المغطاة بأشجار الصنوبر، يقدم خليج المياه الباردة مفاجأة منعشة بمزيج 
            من ينابيع المياه العذبة الباردة والمياه الدافئة للبحر. تجربة سباحة فريدة تمامًا تنتظرك في 
            هذا الخليج الرائع والمنعزل.
        </li>
        <li>
            <strong>شاطئ الجمل:</strong>
            اختتم رحلتك بزيارة هادئة إلى شاطئ الجمل. تجعل المياه الهادئة والأجواء الهادئة منه المكان المثالي 
            للسباحة الأخيرة ولمشاهدة غروب الشمس فوق الساحل المشجر.
        </li>
    </ol>

    <h2>ما الذي يشمله العرض؟</h2>
    <ul>
        <li>دليل محترف</li>
        <li>غداء لذيذ على متن القارب</li>
        <li>تأمين</li>
    </ul>

    <h2>ما الذي يجب إحضاره؟</h2>
    <ul>
        <li>ملابس السباحة والمنشفة</li>
        <li>نقود للمشروبات (غير مشمولة)</li>
    </ul>

    <h2>ملاحظات مهمة</h2>
    <ul>
        <li>قد يتغير المسار بناءً على الظروف الجوية، وقد لا تكون بعض المحطات ممكنة.</li>
    </ul>

    <h2>لماذا تنضم إلى هذه الرحلة؟</h2>
    <ul>
        <li><strong>مناظر خلابة:</strong> اكتشف المياه الفيروزية الشهيرة والخلجان المخفية والشواطئ البكر في أولودينيز.</li>
        <li><strong>الاسترخاء والمغامرة:</strong> اسبح، قم بالغطس أو استرخِ في بيئة طبيعية مذهلة.</li>
        <li><strong>محطات فريدة:</strong> قم بزيارة المواقع التاريخية والكهوف المخفية والمناظر الطبيعية البكر على طول الساحل.</li>
        <li><strong>مناسب للعائلات:</strong> مثالي لجميع الأعمار وطريقة رائعة لخلق ذكريات لا تُنسى.</li>
    </ul>

    <h2>احجز رحلتك بالقارب إلى أولودينيز الآن!</h2>
    <p>
        لا تفوت هذه الفرصة الرائعة لاستكشاف عجائب ساحل فتحية. احجز مكانك اليوم واجعل زيارتك إلى 
        أولودينيز لا تُنسى حقًا!
    </p>
        `
    },
    "/tours/fethiye-quad-bike-safari": {
        en: `
          <h1>Adventure Awaits: Explore Fethiye on a Quad Bike</h1>
    <p>
        For thrill-seekers and adventure enthusiasts, the Fethiye Quad Bike Safari Tour offers an exhilarating 
        way to explore the stunning landscapes of Kavaköy. Ride through rugged terrain, pine forests, and 
        off-road trails while soaking in the breathtaking scenery of this unspoiled countryside. Whether 
        you're a first-timer or an experienced rider, this tour guarantees fun, excitement, and unforgettable memories.
    </p>

    <h2>Tour Highlights</h2>
    <ul>
        <li><strong>Off-Road Adventure:</strong> Navigate forest trails, rugged landscapes, and scenic paths in Kavaköy.</li>
        <li><strong>No Experience Needed:</strong> Perfect for beginners, no driver's license or prior experience required.</li>
        <li><strong>Flexible Schedule:</strong> Choose from multiple tour times to fit your plans.</li>
        <li><strong>Family-Friendly:</strong> Ride solo or share the experience with a passenger on the same quad bike.</li>
        <li><strong>Stunning Scenery:</strong> Discover hidden gems, historical sites, and untouched natural beauty.</li>
    </ul>

    <h2>Tour Details</h2>
    <ul>
        <li><strong>Duration:</strong> 3 hours total (including 1.5 hours of quad biking)</li>
        <li><strong>Location:</strong> Kavaköy, Fethiye</li>
        <li><strong>Free Cancellation Period:</strong> Up to 24 hours before the tour</li>
    </ul>

    <h2>What's Included</h2>
    <ul>
        <li>Round-trip transfers from your accommodation</li>
        <li>200cc 4x4 automatic quad bike rental</li>
        <li>Safety equipment (helmet, etc.)</li>
        <li>Short training session and test drive</li>
        <li>Experienced guides</li>
    </ul>

    <h2>What's Not Included</h2>
    <ul>
        <li>Personal expenses</li>
        <li>Snacks or beverages</li>
    </ul>

    <h2>Important Information</h2>
    <ul>
        <li><strong>Age Requirement:</strong> Participants must be at least 16 years old to drive.</li>
        <li><strong>Rider Options:</strong> Quad bikes are suitable for solo drivers or one driver with one passenger.</li>
    </ul>

    <h2>What to Wear & Bring</h2>
    <ul>
        <li><strong>What to Wear:</strong> Comfortable clothing and sturdy shoes (closed-toe recommended).</li>
        <li><strong>What to Bring:</strong> Sunglasses, sunscreen, a bandana or scarf for dust, and a camera.</li>
    </ul>

    <h2>Itinerary</h2>
    <ol>
        <li>
            <strong>Hotel Pick-Up:</strong> Begin your adventure with a convenient pick-up from your accommodation. Relax as we 
            transport you to the starting point in Kavaköy.
        </li>
        <li>
            <strong>Briefing & Training:</strong> Upon arrival, receive a short training session on how to operate your quad bike. 
            Test drive to get comfortable before heading out on the trail.
        </li>
        <li>
            <strong>Quad Bike Safari Adventure:</strong> Embark on your 1.5-hour off-road journey through the forests and rugged 
            landscapes of Kavaköy. Explore breathtaking trails and take in views of historical ruins, natural beauty, and hidden spots.
        </li>
        <li>
            <strong>Return to Starting Point:</strong> After your thrilling ride, return to the base camp and hand over your quad bike.
        </li>
        <li>
            <strong>Hotel Drop-Off:</strong> Sit back and relax as we transfer you back to your accommodation, bringing your adventure to a close.
        </li>
    </ol>

    <h2>Why Choose This Tour?</h2>
    <ul>
        <li><strong>Unforgettable Experience:</strong> Enjoy a thrilling ride while exploring Kavaköy's off-the-beaten-path treasures.</li>
        <li><strong>Beginner-Friendly:</strong> No driving license or prior experience is needed.</li>
        <li><strong>Convenient & Safe:</strong> Well-maintained quad bikes and experienced guides ensure a hassle-free adventure.</li>
        <li><strong>Flexible Timing:</strong> Choose a tour time that works for you and your holiday schedule.</li>
    </ul>

    <h2>Book Your Quad Bike Safari Tour Today!</h2>
    <p>
        Don't miss out on this exciting adventure in Fethiye! Whether you're traveling solo, with family, or 
        friends, the Quad Bike Safari Tour is the perfect way to explore Kavaköy's natural beauty and rugged 
        landscapes. Reserve your spot now and get ready for an unforgettable experience!
    </p>
        `,
        tr: `
         <h1>Macera Sizi Bekliyor: Fethiye'de ATV ile Keşif</h1>
    <p>
        Macera ve heyecan arayanlar için, Fethiye ATV Safari Turu, Kavaköy'ün büyüleyici manzaralarını keşfetmenin 
        heyecan verici bir yolunu sunuyor. Engebeli arazi, çam ormanları ve off-road parkurlarında sürüş yaparken, 
        bu el değmemiş kırsal bölgenin nefes kesici güzelliklerinin tadını çıkarabilirsiniz. 
        İster ilk kez ATV sürüyor olun, ister deneyimli bir sürücü, bu tur eğlence, heyecan ve unutulmaz anılar vaat ediyor.
    </p>

    <h2>Turun Öne Çıkanları</h2>
    <ul>
        <li><strong>Off-Road Macera:</strong> Kavaköy'deki orman yollarında, engebeli arazilerde ve manzaralı patikalarda sürüş yapın.</li>
        <li><strong>Deneyim Gerekmez:</strong> Yeni başlayanlar için mükemmel, ehliyet veya önceki bir deneyim gerektirmez.</li>
        <li><strong>Esnek Zamanlama:</strong> Planlarınıza uyması için birden fazla tur saatinden birini seçebilirsiniz.</li>
        <li><strong>Aile Dostu:</strong> ATV'yi yalnız sürebilir veya bir yolcu ile bu deneyimi paylaşabilirsiniz.</li>
        <li><strong>Büyüleyici Manzaralar:</strong> Gizli güzellikleri, tarihi yerleri ve el değmemiş doğal güzellikleri keşfedin.</li>
    </ul>

    <h2>Tur Detayları</h2>
    <ul>
        <li><strong>Süre:</strong> Toplam 3 saat (1.5 saati ATV sürüşü içerir)</li>
        <li><strong>Konum:</strong> Kavaköy, Fethiye</li>
        <li><strong>Ücretsiz İptal Süresi:</strong> Turdan 24 saat öncesine kadar</li>
    </ul>

    <h2>Fiyata Dahil Olanlar</h2>
    <ul>
        <li>Konaklamanızdan gidiş-dönüş transfer</li>
        <li>200cc 4x4 otomatik ATV kiralama</li>
        <li>Güvenlik ekipmanları (kask vb.)</li>
        <li>Kısa eğitim seansı ve test sürüşü</li>
        <li>Deneyimli rehberler</li>
    </ul>

    <h2>Fiyata Dahil Olmayanlar</h2>
    <ul>
        <li>Kişisel harcamalar</li>
        <li>Atıştırmalıklar veya içecekler</li>
    </ul>

    <h2>Önemli Bilgiler</h2>
    <ul>
        <li><strong>Yaş Gereksinimi:</strong> Katılımcılar en az 16 yaşında olmalıdır.</li>
        <li><strong>Sürücü Seçenekleri:</strong> ATV'ler tek başına sürücüler veya bir sürücü ve bir yolcu için uygundur.</li>
        <li><strong>Ne Giymeli:</strong> Rahat kıyafetler ve sağlam ayakkabılar (kapalı burunlu önerilir).</li>
        <li><strong>Yanınızda Getirmeniz Gerekenler:</strong> Güneş gözlüğü, güneş kremi, toz için bir bandana veya eşarp ve bir fotoğraf makinesi.</li>
    </ul>

    <h2>Tur Programı</h2>
    <ol>
        <li>
            <strong>Otelden Alınış:</strong> Konaklamanızdan kolay bir şekilde alınarak maceranız başlayacak. Rahatlayın ve 
            Kavaköy'deki başlangıç noktasına transferinizi yapalım.
        </li>
        <li>
            <strong>Brifing ve Eğitim:</strong> Varışta, ATV'nizi nasıl kullanacağınız hakkında kısa bir eğitim alacaksınız. 
            Yola çıkmadan önce test sürüşü yaparak rahatlayabilirsiniz.
        </li>
        <li>
            <strong>ATV Safari Macerası:</strong> Ormanlar ve Kavaköy'ün engebeli arazilerinde 1.5 saatlik off-road yolculuğa çıkın. 
            Tarihi kalıntılar, doğal güzellikler ve gizli noktaların manzaralarının tadını çıkarın.
        </li>
        <li>
            <strong>Başlangıç Noktasına Dönüş:</strong> Heyecan verici sürüşünüzün ardından, kamp alanına dönün ve ATV'nizi teslim edin.
        </li>
        <li>
            <strong>Otele Bırakılış:</strong> Maceranız sona ererken sizi tekrar konaklamanıza transfer edeceğiz. Rahatlayın ve dinlenin.
        </li>
    </ol>

    <h2>Neden Bu Turu Tercih Etmelisiniz?</h2>
    <ul>
        <li><strong>Unutulmaz Deneyim:</strong> Kavaköy'ün keşfedilmemiş güzelliklerini keşfederken heyecan dolu bir sürüş yapın.</li>
        <li><strong>Yeni Başlayanlar İçin Uygun:</strong> Ehliyet veya önceki deneyim gerekmez.</li>
        <li><strong>Konforlu ve Güvenli:</strong> İyi bakımlı ATV'ler ve deneyimli rehberler sorunsuz bir macera sağlar.</li>
        <li><strong>Esnek Zamanlama:</strong> Tatil programınıza uygun bir tur saati seçin.</li>
    </ul>

    <h2>Fethiye ATV Safari Turunuzu Bugün Rezerve Edin!</h2>
    <p>
        Fethiye'deki bu heyecan verici macerayı kaçırmayın! İster yalnız seyahat edin, ister ailenizle veya 
        arkadaşlarınızla, ATV Safari Turu, Kavaköy'ün doğal güzelliklerini ve engebeli arazilerini keşfetmenin mükemmel bir yoludur. 
        Yerinizi şimdi ayırtın ve unutulmaz bir deneyim için hazır olun!
    </p>
        `,
        ru: `
        <h1>Приключение ждет: исследуйте Фетхие на квадроцикле</h1>
    <p>
        Для искателей приключений и любителей адреналина тур на квадроциклах в Фетхие предлагает захватывающий способ 
        исследовать живописные пейзажи Кавакёя. Прокатитесь по пересечённой местности, сосновым лесам и 
        внедорожным тропам, наслаждаясь захватывающими видами нетронутой природы. 
        Независимо от того, впервые ли вы садитесь за руль квадроцикла или являетесь опытным водителем, этот тур гарантирует 
        веселье, восторг и незабываемые впечатления.
    </p>

    <h2>Основные моменты тура</h2>
    <ul>
        <li><strong>Внедорожное приключение:</strong> Исследуйте лесные тропы, пересечённые ландшафты и живописные маршруты в Кавакёе.</li>
        <li><strong>Не требуется опыт:</strong> Идеально подходит для начинающих, не требуется водительское удостоверение или предыдущий опыт.</li>
        <li><strong>Гибкий график:</strong> Выберите удобное для вас время тура.</li>
        <li><strong>Подходит для семей:</strong> Управляйте квадроциклом в одиночку или делитесь этим опытом с пассажиром на одном квадроцикле.</li>
        <li><strong>Потрясающие пейзажи:</strong> Откройте для себя скрытые жемчужины, исторические места и нетронутую природу.</li>
    </ul>

    <h2>Детали тура</h2>
    <ul>
        <li><strong>Длительность:</strong> 3 часа (включая 1,5 часа езды на квадроцикле)</li>
        <li><strong>Местоположение:</strong> Кавакёй, Фетхие</li>
        <li><strong>Бесплатная отмена:</strong> За 24 часа до начала тура</li>
    </ul>

    <h2>Что включено</h2>
    <ul>
        <li>Трансфер от/до вашего места проживания</li>
        <li>Аренда квадроцикла 200cc 4x4 с автоматической коробкой передач</li>
        <li>Защитное снаряжение (шлем и т.д.)</li>
        <li>Краткий инструктаж и пробный заезд</li>
        <li>Опытные гиды</li>
    </ul>

    <h2>Что не включено</h2>
    <ul>
        <li>Личные расходы</li>
        <li>Закуски или напитки</li>
    </ul>

    <h2>Важная информация</h2>
    <ul>
        <li><strong>Возрастное ограничение:</strong> Участники должны быть не младше 16 лет.</li>
        <li><strong>Варианты управления:</strong> Квадроциклы подходят для одного водителя или водителя с пассажиром.</li>
        <li><strong>Что надеть:</strong> Удобная одежда и прочная обувь (рекомендуется закрытая).</li>
        <li><strong>Что взять с собой:</strong> Солнцезащитные очки, крем, бандану или шарф от пыли, а также фотоаппарат.</li>
    </ul>

    <h2>Программа тура</h2>
    <ol>
        <li>
            <strong>Трансфер из отеля:</strong> Начните своё приключение с удобного трансфера из вашего места проживания. Расслабьтесь, 
            пока мы доставляем вас к начальной точке в Кавакёе.
        </li>
        <li>
            <strong>Инструктаж и обучение:</strong> По прибытии вы получите краткий инструктаж о том, как управлять квадроциклом. 
            Пройдите пробный заезд, чтобы почувствовать себя уверенно перед началом маршрута.
        </li>
        <li>
            <strong>Сафари на квадроцикле:</strong> Отправляйтесь в 1,5-часовое путешествие по лесам и пересечённым ландшафтам Кавакёя. 
            Исследуйте захватывающие маршруты и наслаждайтесь видами исторических руин, природных красот и скрытых мест.
        </li>
        <li>
            <strong>Возвращение к начальной точке:</strong> После захватывающей поездки вернитесь в лагерь и сдайте квадроцикл.
        </li>
        <li>
            <strong>Трансфер в отель:</strong> Расслабьтесь, пока мы возвращаем вас к вашему месту проживания, завершив ваше приключение.
        </li>
    </ol>

    <h2>Почему выбрать этот тур?</h2>
    <ul>
        <li><strong>Незабываемый опыт:</strong> Наслаждайтесь захватывающей поездкой, исследуя нетронутые уголки Кавакёя.</li>
        <li><strong>Для начинающих:</strong> Не требуется водительское удостоверение или предыдущий опыт.</li>
        <li><strong>Удобство и безопасность:</strong> Хорошо обслуживаемые квадроциклы и опытные гиды гарантируют беззаботное приключение.</li>
        <li><strong>Гибкий график:</strong> Выберите время тура, которое подходит вам и вашему расписанию отпуска.</li>
    </ul>

    <h2>Забронируйте тур на квадроцикле уже сегодня!</h2>
    <p>
        Не упустите возможность принять участие в этом захватывающем приключении в Фетхие! Будь вы путешествуете в одиночку, 
        с семьёй или друзьями, сафари на квадроцикле — это идеальный способ исследовать природные красоты и пересечённые 
        ландшафты Кавакёя. Забронируйте своё место уже сейчас и готовьтесь к незабываемому опыту!
    </p>
        `,
        es: `
           <h1>La aventura te espera: Explora Fethiye en un Quad</h1>
    <p>
        Para los amantes de la aventura y la adrenalina, el Safari en Quad en Fethiye ofrece una forma emocionante 
        de explorar los impresionantes paisajes de Kavaköy. Conduce por terrenos accidentados, bosques de pinos y 
        senderos todoterreno mientras disfrutas de las impresionantes vistas de esta naturaleza virgen. 
        Ya seas un conductor novato o experimentado, este tour garantiza diversión, emoción y recuerdos inolvidables.
    </p>

    <h2>Aspectos destacados del tour</h2>
    <ul>
        <li><strong>Aventura todoterreno:</strong> Navega por senderos forestales, paisajes accidentados y rutas escénicas en Kavaköy.</li>
        <li><strong>No se necesita experiencia:</strong> Perfecto para principiantes, no se requiere licencia de conducir ni experiencia previa.</li>
        <li><strong>Horario flexible:</strong> Elige entre varios horarios para adaptarte a tus planes.</li>
        <li><strong>Apto para familias:</strong> Conduce solo o comparte la experiencia con un pasajero en el mismo quad.</li>
        <li><strong>Escenarios impresionantes:</strong> Descubre gemas escondidas, sitios históricos y belleza natural intacta.</li>
    </ul>

    <h2>Detalles del tour</h2>
    <ul>
        <li><strong>Duración:</strong> 3 horas en total (incluyendo 1,5 horas de conducción en quad)</li>
        <li><strong>Ubicación:</strong> Kavaköy, Fethiye</li>
        <li><strong>Cancelación gratuita:</strong> Hasta 24 horas antes del inicio del tour</li>
    </ul>

    <h2>Qué incluye</h2>
    <ul>
        <li>Traslados de ida y vuelta desde tu alojamiento</li>
        <li>Alquiler de quad automático 4x4 de 200cc</li>
        <li>Equipo de seguridad (casco, etc.)</li>
        <li>Sesión breve de entrenamiento y prueba de manejo</li>
        <li>Guías experimentados</li>
    </ul>

    <h2>Qué no incluye</h2>
    <ul>
        <li>Gastos personales</li>
        <li>Snacks o bebidas</li>
    </ul>

    <h2>Información importante</h2>
    <ul>
        <li><strong>Requisito de edad:</strong> Los participantes deben tener al menos 16 años para conducir.</li>
        <li><strong>Opciones de conducción:</strong> Los quads son aptos para conductores solitarios o un conductor con un pasajero.</li>
        <li><strong>Qué vestir:</strong> Ropa cómoda y zapatos resistentes (se recomienda con punta cerrada).</li>
        <li><strong>Qué llevar:</strong> Gafas de sol, protector solar, un pañuelo o bufanda para el polvo, y una cámara.</li>
    </ul>

    <h2>Itinerario</h2>
    <ol>
        <li>
            <strong>Recogida en el hotel:</strong> Comienza tu aventura con un cómodo traslado desde tu alojamiento. Relájate mientras 
            te llevamos al punto de partida en Kavaköy.
        </li>
        <li>
            <strong>Instrucciones y entrenamiento:</strong> Al llegar, recibirás una breve sesión de entrenamiento sobre cómo manejar el quad. 
            Realiza una prueba de manejo para sentirte cómodo antes de salir a los senderos.
        </li>
        <li>
            <strong>Aventura en Quad:</strong> Embárcate en un viaje todoterreno de 1,5 horas a través de los bosques y paisajes accidentados 
            de Kavaköy. Explora rutas impresionantes y disfruta de vistas de ruinas históricas, belleza natural y lugares ocultos.
        </li>
        <li>
            <strong>Regreso al punto de partida:</strong> Después de tu emocionante recorrido, regresa al campamento base y entrega tu quad.
        </li>
        <li>
            <strong>Traslado al hotel:</strong> Siéntate y relájate mientras te llevamos de vuelta a tu alojamiento, finalizando tu aventura.
        </li>
    </ol>

    <h2>¿Por qué elegir este tour?</h2>
    <ul>
        <li><strong>Experiencia inolvidable:</strong> Disfruta de un emocionante recorrido mientras exploras las joyas escondidas de Kavaköy.</li>
        <li><strong>Apto para principiantes:</strong> No se necesita licencia de conducir ni experiencia previa.</li>
        <li><strong>Cómodo y seguro:</strong> Quads bien mantenidos y guías experimentados aseguran una aventura sin complicaciones.</li>
        <li><strong>Horario flexible:</strong> Elige un horario que se adapte a ti y a tu itinerario vacacional.</li>
    </ul>

    <h2>¡Reserva tu Safari en Quad hoy mismo!</h2>
    <p>
        ¡No te pierdas esta emocionante aventura en Fethiye! Ya sea que viajes solo, con familia o amigos, el Safari en Quad 
        es la manera perfecta de explorar la belleza natural y los paisajes accidentados de Kavaköy. Reserva tu lugar ahora 
        y prepárate para una experiencia inolvidable.
    </p>
        `,
        it: `
          <h1>L'avventura ti aspetta: Esplora Fethiye in Quad</h1>
    <p>
        Per gli amanti dell'avventura e dell'adrenalina, il Safari in Quad a Fethiye offre un modo emozionante 
        per esplorare gli spettacolari paesaggi di Kavaköy. Guida su terreni accidentati, foreste di pini e 
        sentieri fuoristrada mentre ti godi le viste mozzafiato di questa natura incontaminata. 
        Che tu sia un principiante o un pilota esperto, questo tour garantisce divertimento, emozioni e ricordi indimenticabili.
    </p>

    <h2>Punti salienti del tour</h2>
    <ul>
        <li><strong>Avventura fuoristrada:</strong> Naviga tra sentieri forestali, paesaggi accidentati e percorsi panoramici a Kavaköy.</li>
        <li><strong>Nessuna esperienza richiesta:</strong> Perfetto per principianti, non è necessaria una patente di guida o esperienza precedente.</li>
        <li><strong>Orari flessibili:</strong> Scegli tra diversi orari per adattarti ai tuoi piani.</li>
        <li><strong>Adatto alle famiglie:</strong> Guida da solo o condividi l'esperienza con un passeggero sullo stesso quad.</li>
        <li><strong>Scenari mozzafiato:</strong> Scopri tesori nascosti, siti storici e bellezze naturali incontaminate.</li>
    </ul>

    <h2>Dettagli del tour</h2>
    <ul>
        <li><strong>Durata:</strong> 3 ore totali (inclusi 1,5 ore di guida in quad)</li>
        <li><strong>Luogo:</strong> Kavaköy, Fethiye</li>
        <li><strong>Periodo di cancellazione gratuita:</strong> Fino a 24 ore prima dell'inizio del tour</li>
    </ul>

    <h2>Cosa è incluso</h2>
    <ul>
        <li>Trasferimenti di andata e ritorno dal tuo alloggio</li>
        <li>Noleggio quad automatico 4x4 da 200cc</li>
        <li>Attrezzatura di sicurezza (casco, ecc.)</li>
        <li>Breve sessione di formazione e test drive</li>
        <li>Guide esperte</li>
    </ul>

    <h2>Cosa non è incluso</h2>
    <ul>
        <li>Spese personali</li>
        <li>Snack o bevande</li>
    </ul>

    <h2>Informazioni importanti</h2>
    <ul>
        <li><strong>Requisiti di età:</strong> I partecipanti devono avere almeno 16 anni per guidare.</li>
        <li><strong>Opzioni di guida:</strong> I quad sono adatti per conducenti singoli o un conducente con un passeggero.</li>
        <li><strong>Cosa indossare:</strong> Abbigliamento comodo e scarpe robuste (consigliate con punta chiusa).</li>
        <li><strong>Cosa portare:</strong> Occhiali da sole, crema solare, una bandana o sciarpa per la polvere e una fotocamera.</li>
    </ul>

    <h2>Itinerario</h2>
    <ol>
        <li>
            <strong>Pick-up dall'hotel:</strong> Inizia la tua avventura con un comodo trasferimento dal tuo alloggio. Rilassati mentre 
            ti portiamo al punto di partenza a Kavaköy.
        </li>
        <li>
            <strong>Istruzioni e formazione:</strong> All'arrivo, riceverai una breve sessione di formazione su come guidare il quad. 
            Fai un test drive per sentirti a tuo agio prima di partire per i sentieri.
        </li>
        <li>
            <strong>Avventura in quad:</strong> Parti per un viaggio fuoristrada di 1,5 ore attraverso le foreste e i paesaggi accidentati 
            di Kavaköy. Esplora percorsi spettacolari e goditi le viste di rovine storiche, bellezze naturali e luoghi nascosti.
        </li>
        <li>
            <strong>Ritorno al punto di partenza:</strong> Dopo il tuo emozionante giro, ritorna al campo base e consegna il tuo quad.
        </li>
        <li>
            <strong>Drop-off all'hotel:</strong> Rilassati mentre ti riportiamo al tuo alloggio, completando la tua avventura.
        </li>
    </ol>

    <h2>Perché scegliere questo tour?</h2>
    <ul>
        <li><strong>Esperienza indimenticabile:</strong> Goditi un emozionante giro esplorando i tesori nascosti di Kavaköy.</li>
        <li><strong>Adatto ai principianti:</strong> Non è necessaria una patente di guida o esperienza precedente.</li>
        <li><strong>Comodo e sicuro:</strong> Quad ben mantenuti e guide esperte garantiscono un'avventura senza problemi.</li>
        <li><strong>Orari flessibili:</strong> Scegli un orario che si adatti a te e al tuo programma di vacanze.</li>
    </ul>

    <h2>Prenota oggi il tuo Safari in Quad!</h2>
    <p>
        Non perdere questa emozionante avventura a Fethiye! Che tu stia viaggiando da solo, con la famiglia o con gli amici, 
        il Safari in Quad è il modo perfetto per esplorare la bellezza naturale e i paesaggi accidentati di Kavaköy. Prenota ora 
        il tuo posto e preparati per un'esperienza indimenticabile.
    </p>
        `,
        zh: ` 
        <h1>冒险等待着您：探索费特希耶的四轮摩托探险</h1>
    <p>
        对于冒险爱好者和寻求刺激的人来说，费特希耶四轮摩托探险之旅提供了一种令人兴奋的方式，
        探索卡瓦克伊（Kavaköy）壮丽的自然风光。驾驶四轮摩托穿越崎岖的地形、松树林和越野小径，
        同时欣赏这片未受破坏的自然景观的壮丽景色。
        无论您是第一次体验还是经验丰富的驾驶者，这次旅行都能保证带来乐趣、刺激和难忘的回忆。
    </p>

    <h2>行程亮点</h2>
    <ul>
        <li><strong>越野探险：</strong>探索卡瓦克伊的森林小径、崎岖的地形和风景如画的路线。</li>
        <li><strong>无需经验：</strong>非常适合初学者，不需要驾驶执照或任何驾驶经验。</li>
        <li><strong>灵活的时间安排：</strong>根据您的计划选择多个出发时间。</li>
        <li><strong>适合家庭：</strong>您可以独自驾驶或与一名乘客分享这段探险。</li>
        <li><strong>壮丽的景色：</strong>发现隐藏的珍宝、历史遗迹和原始的自然美景。</li>
    </ul>

    <h2>行程详情</h2>
    <ul>
        <li><strong>时长：</strong>总计3小时（包括1.5小时的四轮摩托驾驶）</li>
        <li><strong>地点：</strong>卡瓦克伊，费特希耶</li>
        <li><strong>免费取消：</strong>出发前24小时内免费取消</li>
    </ul>

    <h2>费用包含</h2>
    <ul>
        <li>从您的住宿地点往返接送</li>
        <li>200cc 4x4 自动四轮摩托车租赁</li>
        <li>安全设备（头盔等）</li>
        <li>简短的培训课程和试驾</li>
        <li>经验丰富的导游</li>
    </ul>

    <h2>费用不包含</h2>
    <ul>
        <li>个人开支</li>
        <li>小吃或饮料</li>
    </ul>

    <h2>重要信息</h2>
    <ul>
        <li><strong>年龄要求：</strong>参与者必须年满16岁。</li>
        <li><strong>驾驶选项：</strong>四轮摩托适合单人驾驶或一名驾驶员与一名乘客。</li>
        <li><strong>着装建议：</strong>穿着舒适的衣服和结实的鞋子（建议穿封闭式鞋子）。</li>
        <li><strong>随身携带：</strong>太阳镜、防晒霜、围巾或头巾以防尘，以及相机。</li>
    </ul>

    <h2>行程安排</h2>
    <ol>
        <li>
            <strong>酒店接送：</strong>从您的住宿地点方便地出发。放松身心，我们将带您前往卡瓦克伊的起点。
        </li>
        <li>
            <strong>培训与指导：</strong>到达后，您将接受简短的驾驶培训课程，了解如何操作四轮摩托。
            进行试驾以确保在出发前感到自信。
        </li>
        <li>
            <strong>四轮摩托探险：</strong>在卡瓦克伊的森林和崎岖地形上展开1.5小时的越野之旅。
            探索令人叹为观止的路线，欣赏历史遗迹、自然美景和隐藏的景点。
        </li>
        <li>
            <strong>返回起点：</strong>完成令人兴奋的驾驶体验后，返回营地并交还四轮摩托车。
        </li>
        <li>
            <strong>送回酒店：</strong>放松身心，我们将送您回到住宿地点，圆满结束您的探险之旅。
        </li>
    </ol>

    <h2>为什么选择这次旅行？</h2>
    <ul>
        <li><strong>难忘的体验：</strong>在探索卡瓦克伊隐藏的珍宝时，享受刺激的驾驶体验。</li>
        <li><strong>适合初学者：</strong>无需驾驶执照或任何驾驶经验。</li>
        <li><strong>方便且安全：</strong>维护良好的四轮摩托车和经验丰富的导游确保无忧的冒险。</li>
        <li><strong>灵活时间：</strong>选择最适合您的行程时间。</li>
    </ul>

    <h2>立即预订您的四轮摩托探险之旅！</h2>
    <p>
        不要错过这次在费特希耶的精彩冒险！无论您是独自旅行、与家人还是朋友同行，
        四轮摩托探险之旅都是探索卡瓦克伊自然美景和崎岖地形的完美方式。
        立即预订您的位置，准备迎接一场难忘的体验！
    </p>
        `,
        ar: `
          <h1>المغامرة تنتظرك: استكشف فتحية بالدراجة الرباعية</h1>
    <p>
        لعشاق المغامرة والإثارة، توفر جولة فتحية بالدراجات الرباعية وسيلة مثيرة لاستكشاف المناظر الطبيعية 
        الخلابة في كافاكوي. قم بالقيادة عبر التضاريس الوعرة وغابات الصنوبر والمسارات الوعرة، 
        واستمتع بالمناظر الخلابة لهذه الطبيعة البكر.
        سواء كنت تقود الدراجة لأول مرة أو كنت خبيرًا، فإن هذه الجولة تضمن لك المتعة والإثارة وذكريات لا تُنسى.
    </p>

    <h2>أبرز معالم الجولة</h2>
    <ul>
        <li><strong>مغامرة على الطرق الوعرة:</strong> استكشف مسارات الغابات والتضاريس الوعرة والمسارات الخلابة في كافاكوي.</li>
        <li><strong>لا حاجة للخبرة:</strong> مثالية للمبتدئين، لا يتطلب الأمر رخصة قيادة أو خبرة سابقة.</li>
        <li><strong>جدول مرن:</strong> اختر من بين أوقات جولات متعددة لتتناسب مع خططك.</li>
        <li><strong>مناسبة للعائلات:</strong> يمكنك القيادة بمفردك أو مشاركة التجربة مع راكب آخر على نفس الدراجة الرباعية.</li>
        <li><strong>مناظر خلابة:</strong> اكتشف الجواهر المخفية والمواقع التاريخية والجمال الطبيعي البكر.</li>
    </ul>

    <h2>تفاصيل الجولة</h2>
    <ul>
        <li><strong>المدة:</strong> 3 ساعات إجمالاً (تشمل 1.5 ساعة قيادة بالدراجة الرباعية)</li>
        <li><strong>الموقع:</strong> كافاكوي، فتحية</li>
        <li><strong>إلغاء مجاني:</strong> حتى 24 ساعة قبل موعد الجولة</li>
    </ul>

    <h2>ما يشمله العرض</h2>
    <ul>
        <li>النقل ذهابًا وإيابًا من مكان إقامتك</li>
        <li>استئجار دراجة رباعية 4x4 أوتوماتيكية بسعة 200cc</li>
        <li>معدات الأمان (خوذة وغيرها)</li>
        <li>جلسة تدريب قصيرة وتجربة قيادة</li>
        <li>مرشدون ذوو خبرة</li>
    </ul>

    <h2>ما لا يشمله العرض</h2>
    <ul>
        <li>المصاريف الشخصية</li>
        <li>الوجبات الخفيفة أو المشروبات</li>
    </ul>

    <h2>معلومات هامة</h2>
    <ul>
        <li><strong>متطلبات العمر:</strong> يجب أن يكون المشاركون بعمر 16 عامًا على الأقل للقيادة.</li>
        <li><strong>خيارات القيادة:</strong> الدراجات الرباعية مناسبة للسائقين الفرديين أو سائق مع راكب واحد.</li>
        <li><strong>ما يجب ارتداؤه:</strong> ملابس مريحة وأحذية متينة (يُفضل الأحذية ذات المقدمة المغلقة).</li>
        <li><strong>ما يجب إحضاره:</strong> نظارات شمسية، كريم واقٍ من الشمس، وشاح أو منديل للغبار، وكاميرا.</li>
    </ul>

    <h2>برنامج الجولة</h2>
    <ol>
        <li>
            <strong>الانتقال من الفندق:</strong> ابدأ مغامرتك مع خدمة نقل مريحة من مكان إقامتك. استرخِ أثناء نقلنا لك إلى نقطة البداية في كافاكوي.
        </li>
        <li>
            <strong>التدريب والإرشاد:</strong> عند الوصول، ستتلقى جلسة تدريب قصيرة حول كيفية قيادة الدراجة الرباعية.
            جرب القيادة للتأكد من أنك مرتاح قبل الانطلاق.
        </li>
        <li>
            <strong>مغامرة الدراجة الرباعية:</strong> انطلق في رحلة مدتها 1.5 ساعة عبر غابات وتضاريس كافاكوي الوعرة.
            استكشف المسارات الرائعة واستمتع بمشاهدة الآثار التاريخية والجمال الطبيعي والأماكن المخفية.
        </li>
        <li>
            <strong>العودة إلى نقطة البداية:</strong> بعد رحلتك المثيرة، عد إلى المخيم وسلم الدراجة الرباعية.
        </li>
        <li>
            <strong>الانتقال إلى الفندق:</strong> استرخِ بينما نقلك مرة أخرى إلى مكان إقامتك لإنهاء مغامرتك.
        </li>
    </ol>

    <h2>لماذا تختار هذه الجولة؟</h2>
    <ul>
        <li><strong>تجربة لا تُنسى:</strong> استمتع برحلة مثيرة أثناء استكشاف الجواهر المخفية في كافاكوي.</li>
        <li><strong>مناسبة للمبتدئين:</strong> لا حاجة لرخصة قيادة أو خبرة سابقة.</li>
        <li><strong>مريحة وآمنة:</strong> الدراجات الرباعية المُصانة جيدًا والمرشدون ذوو الخبرة يضمنون مغامرة خالية من المتاعب.</li>
        <li><strong>جدول مرن:</strong> اختر وقت الجولة الذي يناسبك وجدول عطلتك.</li>
    </ul>

    <h2>احجز جولتك بالدراجة الرباعية اليوم!</h2>
    <p>
        لا تفوت هذه المغامرة المثيرة في فتحية! سواء كنت تسافر بمفردك أو مع العائلة أو الأصدقاء،
        تعد جولة الدراجات الرباعية الطريقة المثالية لاستكشاف جمال كافاكوي الطبيعي وتضاريسها الوعرة.
        احجز مكانك الآن واستعد لتجربة لا تُنسى!
    </p>
        `,
    },
    "/tours/istanbul-bosphorus-dinner-cruise": {
        en: `
           <h1>Istanbul Bosphorus Dinner Cruise: A Night of Elegance & Entertainment</h1>
    <p>
        Experience Istanbul like never before with a magical evening on the Bosphorus. This unforgettable
        dinner cruise blends the charm of Istanbul's illuminated skyline with the excitement of traditional
        Turkish entertainment. Whether you're a couple seeking a romantic escape, a family creating
        memories, or a group of friends looking for a fun-filled evening, the Bosphorus Dinner Cruise offers
        something for everyone.
    </p>

    <h2>Tour Highlights</h2>
    <ul>
        <li><strong>Welcome Aboard:</strong> Begin the evening with a refreshing welcome drink as you settle into your beautifully decorated boat.</li>
        <li><strong>Panoramic Views:</strong> Admire Istanbul's iconic landmarks, including the Bosphorus Bridge and the illuminated domes and minarets, all glowing under the night sky.</li>
        <li><strong>Delicious Turkish Cuisine:</strong> Enjoy a delectable multi-course Turkish dinner featuring hot and cold meze, a choice of main dishes, and fresh seasonal fruits.</li>
        <li><strong>Traditional Entertainment:</strong> Be captivated by authentic folklore performances, live music, and mesmerizing belly dancers in full traditional attire.</li>
        <li><strong>Relax & Unwind:</strong> Soak in the vibrant atmosphere and stunning nighttime views from the boat's outdoor deck or cozy indoor lounge.</li>
    </ul>

    <h2>What's Included</h2>
    <ul>
        <li>Round-trip hotel transfers</li>
        <li>Cruise on a beautifully decorated boat</li>
        <li>Welcome cocktail</li>
        <li>Multi-course Turkish dinner</li>
        <li>Turkish folklore and belly dancing performances</li>
        <li>Live music entertainment</li>
    </ul>

    <h2>What's Not Included</h2>
    <ul>
        <li>Drinks (other than the welcome cocktail)</li>
        <li>Personal expenses</li>
    </ul>

    <h2>Itinerary Overview</h2>
    <ol>
        <li>
            <strong>Hotel Pick-Up & Transfer to Port:</strong> Your evening begins with a comfortable hotel pick-up. Our team will transfer you to the port, where you'll board the elegantly decorated cruise boat.
        </li>
        <li>
            <strong>Bosphorus Cruise Under the Stars:</strong> As the boat sets sail, enjoy stunning views of Istanbul's skyline, shimmering in the evening lights. The illuminated Bosphorus Bridge and waterfront palaces create a magical ambiance that’s perfect for photos.
        </li>
        <li>
            <strong>Exquisite Turkish Dinner:</strong> Savor a freshly prepared meal featuring authentic Turkish flavors:
            <ul>
                <li><strong>Starters:</strong> A variety of Turkish meze, both hot and cold.</li>
                <li><strong>Main Course:</strong> Choose between grilled fish, tender chicken breast, or flavorful meatballs, accompanied by rice and fresh salad.</li>
                <li><strong>Dessert:</strong> End your meal with a selection of seasonal fruits.</li>
            </ul>
        </li>
        <li>
            <strong>Turkish Night Show:</strong> After dinner, immerse yourself in Turkish culture with a vibrant folklore show. Witness skilled belly dancers, traditional Ottoman-inspired performances, and lively folk dances. Guests are welcome to join the fun and try a few dance moves themselves!
        </li>
        <li>
            <strong>Return to Port & Hotel Drop-Off:</strong> As the boat returns to the port, take one last look at Istanbul's breathtaking nighttime views. From there, a comfortable, air-conditioned vehicle will take you back to your hotel, arriving around midnight.
        </li>
    </ol>

    <h2>Additional Information</h2>
    <ul>
        <li><strong>Best For:</strong> Couples, families, and groups of friends.</li>
        <li><strong>What to Bring:</strong> A camera, comfortable clothing, and a light jacket for the evening breeze.</li>
        <li><strong>Child Policy:</strong> Children are welcome; however, infants may require a separate seat or carrier for safety.</li>
    </ul>

    <h2>Book Your Spot Today</h2>
    <p>
        Don't miss the chance to combine relaxation, delicious food, and vibrant entertainment on this
        enchanting Bosphorus Dinner Cruise. Secure your booking now and let the magic of Istanbul take
        your breath away!
    </p>
        `,
        ru: `
        <h1>Ужин-круиз по Босфору: Ночь элегантности и развлечений</h1>
    <p>
        Испытайте Стамбул, как никогда раньше, во время волшебного вечера на Босфоре. Этот незабываемый
        ужин-круиз сочетает в себе очарование освещенного небоскреба Стамбула с волнением традиционных
        турецких развлечений. Независимо от того, ищете ли вы романтический вечер вдвоем, создаете семейные
        воспоминания или проводите веселый вечер с друзьями, ужин-круиз по Босфору предлагает что-то для каждого.
    </p>

    <h2>Основные моменты тура</h2>
    <ul>
        <li><strong>Приветствие на борту:</strong> Начните вечер с освежающего приветственного напитка, устроившись на борту
            красиво украшенного корабля.</li>
        <li><strong>Панорамные виды:</strong> Полюбуйтесь знаковыми достопримечательностями Стамбула, включая мост через Босфор
            и освещенные купола и минареты, сияющие в ночном небе.</li>
        <li><strong>Вкусная турецкая кухня:</strong> Насладитесь изысканным многокурсовым ужином, включающим горячие и холодные
            мезе, выбор основных блюд и свежие сезонные фрукты.</li>
        <li><strong>Традиционные развлечения:</strong> Окунитесь в атмосферу аутентичных фольклорных выступлений, живой музыки и
            завораживающих танцев живота в полном традиционном костюме.</li>
        <li><strong>Расслабьтесь и отдохните:</strong> Погрузитесь в живую атмосферу и насладитесь потрясающими ночными видами
            с открытой палубы или уютного салона корабля.</li>
    </ul>

    <h2>Что включено</h2>
    <ul>
        <li>Трансфер из отеля и обратно</li>
        <li>Круиз на красиво украшенном корабле</li>
        <li>Приветственный коктейль</li>
        <li>Многокурсовый турецкий ужин</li>
        <li>Фольклорные выступления и танцы живота</li>
        <li>Живая музыкальная программа</li>
    </ul>

    <h2>Что не включено</h2>
    <ul>
        <li>Напитки (кроме приветственного коктейля)</li>
        <li>Личные расходы</li>
    </ul>

    <h2>Программа тура</h2>
    <ol>
        <li>
            <strong>Трансфер из отеля и доставка в порт:</strong> Ваш вечер начинается с комфортного трансфера из отеля.
            Наша команда доставит вас в порт, где вы подниметесь на борт элегантно украшенного круизного судна.
        </li>
        <li>
            <strong>Круиз под звездами:</strong> Когда корабль отплывает, наслаждайтесь захватывающими видами на панораму Стамбула,
            сверкающую в вечернем свете. Освещенный мост через Босфор и набережные дворцы создают волшебную атмосферу,
            идеально подходящую для фотографий.
        </li>
        <li>
            <strong>Изысканный турецкий ужин:</strong> Насладитесь свежеприготовленными блюдами аутентичной турецкой кухни:
            <ul>
                <li><strong>Закуски:</strong> Разнообразие турецких мезе, как горячих, так и холодных.</li>
                <li><strong>Основное блюдо:</strong> Выбор из жареной рыбы, нежного куриного филе или ароматных фрикаделек, подаваемых с рисом и свежим салатом.</li>
                <li><strong>Десерт:</strong> Завершите трапезу выбором сезонных фруктов.</li>
            </ul>
        </li>
        <li>
            <strong>Турецкое ночное шоу:</strong> После ужина погрузитесь в атмосферу турецкой культуры с ярким фольклорным шоу.
            Полюбуйтесь искусными танцами живота, традиционными выступлениями в османском стиле и оживленными народными танцами.
            Гостям предлагается присоединиться к веселью и попробовать несколько танцевальных движений!
        </li>
        <li>
            <strong>Возвращение в порт и трансфер в отель:</strong> Когда корабль возвращается в порт, полюбуйтесь еще раз захватывающими ночными видами Стамбула.
            Затем комфортабельный кондиционированный транспорт доставит вас обратно в отель примерно к полуночи.
        </li>
    </ol>

    <h2>Дополнительная информация</h2>
    <ul>
        <li><strong>Рекомендуется для:</strong> Пары, семьи и группы друзей.</li>
        <li><strong>Что взять с собой:</strong> Камеру, удобную одежду и легкую куртку для вечернего бриза.</li>
        <li><strong>Политика для детей:</strong> Дети приветствуются; однако младенцам может потребоваться отдельное место или переноска для безопасности.</li>
    </ul>

    <h2>Забронируйте место сегодня</h2>
    <p>
        Не упустите возможность совместить отдых, вкусную еду и яркие развлечения на этом чарующем
        ужин-круизе по Босфору. Забронируйте свое место сейчас и позвольте магии Стамбула захватить дух!
    </p>
        `,
        tr: `
    <h1>Boğazda Akşam Yemeği Turu: Zarafet ve Eğlence Dolu Bir Gece</h1>
    <p>
        İstanbul'u daha önce hiç olmadığı gibi Boğaz'da büyülü bir akşamla deneyimleyin. Bu unutulmaz akşam yemeği turu,
        İstanbul'un ışıl ışıl siluetinin cazibesini geleneksel Türk eğlencesinin heyecanıyla birleştiriyor. İster romantik
        bir kaçamak arayan bir çift, ister aile anıları yaratmak isteyen bir aile, ister arkadaşlarla eğlenceli bir akşam
        geçirmek isteyen bir grup olun, Boğazda Akşam Yemeği Turu herkes için bir şeyler sunuyor.
    </p>

    <h2>Turun Öne Çıkanları</h2>
    <ul>
        <li><strong>Tekneye Hoş Geldiniz:</strong> Güzelce dekore edilmiş teknede yerinizi alırken ferahlatıcı bir karşılama içeceği ile geceye başlayın.</li>
        <li><strong>Panoramik Manzaralar:</strong> Boğaz Köprüsü ve aydınlatılmış kubbe ve minareler dahil İstanbul'un ikonik simge yapılarının,
            gece gökyüzünde parlayan muhteşem manzaralarını seyredin.</li>
        <li><strong>Lezzetli Türk Mutfağı:</strong> Sıcak ve soğuk mezeler, ana yemek seçenekleri ve taze mevsim meyveleri içeren leziz
            çok çeşitli bir Türk yemeğinin tadını çıkarın.</li>
        <li><strong>Geleneksel Eğlence:</strong> Otantik halk oyunları performansları, canlı müzik ve geleneksel kıyafetleriyle büyüleyici oryantal dansçıların
            gösterileriyle büyülenin.</li>
        <li><strong>Rahatlayın ve Keyfini Çıkarın:</strong> Teknenin açık güvertesinden veya rahat iç salonundan canlı atmosferin ve muhteşem gece manzaralarının tadını çıkarın.</li>
    </ul>

    <h2>Fiyata Dahil Olanlar</h2>
    <ul>
        <li>Otelden gidiş-dönüş transfer</li>
        <li>Güzelce dekore edilmiş teknede tur</li>
        <li>Hoş geldiniz kokteyli</li>
        <li>Çok çeşitli Türk akşam yemeği</li>
        <li>Türk halk oyunları ve oryantal dans gösterileri</li>
        <li>Canlı müzik eğlencesi</li>
    </ul>

    <h2>Fiyata Dahil Olmayanlar</h2>
    <ul>
        <li>Hoş geldiniz kokteyli dışındaki içecekler</li>
        <li>Kişisel harcamalar</li>
    </ul>

    <h2>Tur Programı</h2>
    <ol>
        <li>
            <strong>Otelden Alış ve Limana Transfer:</strong> Geceniz, otelinizden rahat bir transferle başlar. Ekibimiz sizi limana götürecek ve burada
            zarifçe dekore edilmiş tekneye bineceksiniz.
        </li>
        <li>
            <strong>Yıldızların Altında Boğaz Turu:</strong> Tekne hareket ettiğinde, İstanbul'un ışıl ışıl gece ışıkları altında parlayan siluetinin
            muhteşem manzarasının tadını çıkarın. Aydınlatılmış Boğaz Köprüsü ve sahil sarayları büyüleyici bir ortam oluşturur ve
            fotoğraf çekmek için mükemmeldir.
        </li>
        <li>
            <strong>Lezzetli Türk Akşam Yemeği:</strong> Özenle hazırlanmış, otantik Türk lezzetlerinden oluşan bir yemeğin tadını çıkarın:
            <ul>
                <li><strong>Başlangıçlar:</strong> Sıcak ve soğuk çeşitli Türk mezeleri.</li>
                <li><strong>Ana Yemek:</strong> Izgara balık, yumuşak tavuk göğsü veya lezzetli köfte seçeneklerinden birini seçin, pilav ve taze salata eşliğinde servis edilir.</li>
                <li><strong>Tatlı:</strong> Yemeğinizi mevsimlik taze meyvelerle tamamlayın.</li>
            </ul>
        </li>
        <li>
            <strong>Türk Gecesi Gösterisi:</strong> Yemekten sonra, canlı bir halk oyunları gösterisiyle Türk kültürüne dalın. Usta oryantal dansçıların,
            Osmanlı'dan ilham alan performansların ve hareketli halk danslarının keyfini çıkarın. Misafirler eğlenceye katılmaya ve
            birkaç dans figürü denemeye davetlidir!
        </li>
        <li>
            <strong>Limana Dönüş ve Otele Transfer:</strong> Tekne limana dönerken, İstanbul'un büyüleyici gece manzaralarına son bir kez daha bakın.
            Ardından, rahat ve klimalı bir araç sizi otelinize götürerek geceyi tamamlar.
        </li>
    </ol>

    <h2>Ek Bilgiler</h2>
    <ul>
        <li><strong>Kimler İçin Uygun:</strong> Çiftler, aileler ve arkadaş grupları için idealdir.</li>
        <li><strong>Yanınızda Getirmeniz Gerekenler:</strong> Bir fotoğraf makinesi, rahat giysiler ve akşam rüzgarı için hafif bir ceket.</li>
        <li><strong>Çocuk Politikası:</strong> Çocuklar kabul edilir; ancak bebekler için ayrı bir koltuk veya taşıma çantası gerekebilir.</li>
    </ul>

    <h2>Bugün Yerinizi Ayırtın</h2>
    <p>
        Bu büyüleyici Boğaz Akşam Yemeği Turu'nda rahatlık, lezzetli yemekler ve canlı eğlenceyi bir araya getirme şansını kaçırmayın.
        Hemen rezervasyon yapın ve İstanbul'un büyüsü nefesinizi kessin!
    </p>
        `,
        es: `
    <h1>Cena Crucero por el Bósforo: Una Noche de Elegancia y Entretenimiento</h1>
    <p>
        Experimente Estambul como nunca antes durante una noche mágica en el Bósforo. Este inolvidable
        crucero con cena combina el encanto del horizonte iluminado de Estambul con la emoción del
        entretenimiento tradicional turco. Ya sea que busque una escapada romántica en pareja, crear recuerdos
        familiares o disfrutar de una noche divertida con amigos, el Cena Crucero por el Bósforo ofrece algo para todos.
    </p>

    <h2>Aspectos Destacados del Tour</h2>
    <ul>
        <li><strong>Bienvenida a Bordo:</strong> Comience la noche con una bebida de bienvenida refrescante mientras se acomoda en el
            hermoso barco decorado.</li>
        <li><strong>Vistas Panorámicas:</strong> Admire los icónicos monumentos de Estambul, incluido el Puente del Bósforo y las cúpulas
            y minaretes iluminados, todos brillando bajo el cielo nocturno.</li>
        <li><strong>Deliciosa Cocina Turca:</strong> Disfrute de una exquisita cena turca de varios platos que incluye meze calientes y fríos,
            una selección de platos principales y frutas frescas de temporada.</li>
        <li><strong>Entretenimiento Tradicional:</strong> Déjese cautivar por actuaciones folclóricas auténticas, música en vivo y bailarinas
            de vientre hipnotizantes con trajes tradicionales.</li>
        <li><strong>Relájese y Descanse:</strong> Sumérjase en el ambiente vibrante y disfrute de las impresionantes vistas nocturnas desde
            la cubierta exterior del barco o el acogedor salón interior.</li>
    </ul>

    <h2>Qué Está Incluido</h2>
    <ul>
        <li>Traslados de ida y vuelta al hotel</li>
        <li>Crucero en un barco bellamente decorado</li>
        <li>Cóctel de bienvenida</li>
        <li>Cena turca de varios platos</li>
        <li>Espectáculos folclóricos turcos y de danza del vientre</li>
        <li>Entretenimiento musical en vivo</li>
    </ul>

    <h2>Qué No Está Incluido</h2>
    <ul>
        <li>Bebidas (aparte del cóctel de bienvenida)</li>
        <li>Gastos personales</li>
    </ul>

    <h2>Itinerario</h2>
    <ol>
        <li>
            <strong>Recogida en el Hotel y Traslado al Puerto:</strong> Su noche comienza con un cómodo traslado desde su hotel.
            Nuestro equipo lo llevará al puerto, donde abordará el elegante barco decorado para el crucero.
        </li>
        <li>
            <strong>Crucero por el Bósforo Bajo las Estrellas:</strong> Mientras el barco zarpa, disfrute de impresionantes vistas del horizonte de Estambul,
            resplandeciente bajo las luces de la noche. El Puente del Bósforo iluminado y los palacios frente al agua crean un
            ambiente mágico, perfecto para fotos.
        </li>
        <li>
            <strong>Exquisita Cena Turca:</strong> Disfrute de una comida recién preparada con auténticos sabores turcos:
            <ul>
                <li><strong>Entrantes:</strong> Una variedad de meze turcos, tanto calientes como fríos.</li>
                <li><strong>Plato Principal:</strong> Elija entre pescado a la parrilla, pechuga de pollo tierna o sabrosas albóndigas, acompañados de arroz y ensalada fresca.</li>
                <li><strong>Postre:</strong> Termine su comida con una selección de frutas de temporada.</li>
            </ul>
        </li>
        <li>
            <strong>Espectáculo Nocturno Turco:</strong> Después de la cena, sumérjase en la cultura turca con un vibrante espectáculo folclórico.
            Observe a bailarinas de vientre hábiles, actuaciones inspiradas en el Imperio Otomano y bailes folclóricos animados.
            ¡Los invitados están invitados a unirse a la diversión y probar algunos movimientos de baile ellos mismos!
        </li>
        <li>
            <strong>Regreso al Puerto y Traslado al Hotel:</strong> Mientras el barco regresa al puerto, eche un último vistazo a las impresionantes vistas nocturnas de Estambul.
            Desde allí, un cómodo vehículo con aire acondicionado lo llevará de regreso a su hotel, llegando alrededor de la medianoche.
        </li>
    </ol>

    <h2>Información Adicional</h2>
    <ul>
        <li><strong>Ideal Para:</strong> Parejas, familias y grupos de amigos.</li>
        <li><strong>Qué Llevar:</strong> Una cámara, ropa cómoda y una chaqueta ligera para la brisa nocturna.</li>
        <li><strong>Política de Niños:</strong> Los niños son bienvenidos; sin embargo, los bebés pueden necesitar un asiento separado o una silla de seguridad para mayor protección.</li>
    </ul>

    <h2>Reserve Su Lugar Hoy</h2>
    <p>
        No pierda la oportunidad de combinar relajación, deliciosa comida y entretenimiento vibrante en este
        encantador Cena Crucero por el Bósforo. ¡Reserve ahora y deje que la magia de Estambul le deje sin aliento!
    </p>
        `,
        it: `
        <h1>Crociera con Cena sul Bosforo: Una Notte di Eleganza e Intrattenimento</h1>
    <p>
        Vivi Istanbul come mai prima d'ora durante una magica serata sul Bosforo. Questa indimenticabile
        crociera con cena unisce il fascino dello skyline illuminato di Istanbul con l'emozione dell'intrattenimento
        tradizionale turco. Che tu stia cercando una fuga romantica di coppia, creando ricordi in famiglia o godendoti
        una serata divertente con gli amici, la Crociera con Cena sul Bosforo offre qualcosa per tutti.
    </p>

    <h2>Punti Salienti del Tour</h2>
    <ul>
        <li><strong>Benvenuto a Bordo:</strong> Inizia la serata con una bevanda di benvenuto rinfrescante mentre ti accomodi sulla
            splendida imbarcazione decorata.</li>
        <li><strong>Vedute Panoramiche:</strong> Ammira i monumenti iconici di Istanbul, tra cui il Ponte sul Bosforo e le cupole
            illuminate, tutti brillanti sotto il cielo notturno.</li>
        <li><strong>Deliziosa Cucina Turca:</strong> Goditi una squisita cena turca a più portate con meze caldi e freddi, una selezione
            di piatti principali e frutta fresca di stagione.</li>
        <li><strong>Intrattenimento Tradizionale:</strong> Lasciati incantare da autentiche esibizioni folcloristiche, musica dal vivo e
            affascinanti danzatrici del ventre in abiti tradizionali.</li>
        <li><strong>Rilassati e Goditi:</strong> Immergiti nell'atmosfera vibrante e ammira le splendide vedute notturne dalla
            terrazza esterna o dal salone interno accogliente dell'imbarcazione.</li>
    </ul>

    <h2>Cosa è Incluso</h2>
    <ul>
        <li>Trasferimenti di andata e ritorno dall'hotel</li>
        <li>Crociera su una splendida imbarcazione decorata</li>
        <li>Cocktail di benvenuto</li>
        <li>Cena turca a più portate</li>
        <li>Esibizioni di folclore turco e danza del ventre</li>
        <li>Intrattenimento musicale dal vivo</li>
    </ul>

    <h2>Cosa Non è Incluso</h2>
    <ul>
        <li>Bevande (oltre al cocktail di benvenuto)</li>
        <li>Spese personali</li>
    </ul>

    <h2>Itinerario</h2>
    <ol>
        <li>
            <strong>Prelievo dall'Hotel e Trasferimento al Porto:</strong> La tua serata inizia con un comodo trasferimento dal tuo hotel.
            Il nostro team ti porterà al porto, dove salirai a bordo della splendida imbarcazione decorata per la crociera.
        </li>
        <li>
            <strong>Crociera sul Bosforo sotto le Stelle:</strong> Mentre la barca salpa, goditi viste mozzafiato sullo skyline di Istanbul,
            scintillante sotto le luci della sera. Il Ponte sul Bosforo illuminato e i palazzi sul lungomare creano un'atmosfera
            magica, perfetta per le foto.
        </li>
        <li>
            <strong>Squisita Cena Turca:</strong> Assapora un pasto appena preparato con autentici sapori turchi:
            <ul>
                <li><strong>Antipasti:</strong> Una varietà di meze turchi, sia caldi che freddi.</li>
                <li><strong>Piatto Principale:</strong> Scegli tra pesce grigliato, petto di pollo tenero o polpette saporite, accompagnati da riso e insalata fresca.</li>
                <li><strong>Dolce:</strong> Concludi il tuo pasto con una selezione di frutta di stagione.</li>
            </ul>
        </li>
        <li>
            <strong>Spettacolo Notturno Turco:</strong> Dopo cena, immergiti nella cultura turca con un vibrante spettacolo folcloristico.
            Ammira le danzatrici del ventre esperte, esibizioni ispirate all'Impero Ottomano e vivaci danze popolari.
            Gli ospiti sono invitati a unirsi al divertimento e provare alcuni movimenti di danza!
        </li>
        <li>
            <strong>Ritorno al Porto e Trasferimento all'Hotel:</strong> Mentre la barca torna al porto, ammira un'ultima volta le viste notturne mozzafiato di Istanbul.
            Da lì, un comodo veicolo climatizzato ti riporterà al tuo hotel, arrivando intorno a mezzanotte.
        </li>
    </ol>

    <h2>Informazioni Aggiuntive</h2>
    <ul>
        <li><strong>Ideale per:</strong> Coppie, famiglie e gruppi di amici.</li>
        <li><strong>Cosa Portare:</strong> Una fotocamera, abbigliamento comodo e una giacca leggera per la brezza serale.</li>
        <li><strong>Politica per Bambini:</strong> I bambini sono i benvenuti; tuttavia, i neonati potrebbero aver bisogno di un seggiolino separato o di un marsupio per la sicurezza.</li>
    </ul>

    <h2>Prenota il Tuo Posto Oggi</h2>
    <p>
        Non perdere l'opportunità di combinare relax, cibo delizioso e intrattenimento vibrante con questa
        affascinante Crociera con Cena sul Bosforo. Prenota subito e lascia che la magia di Istanbul ti tolga il fiato!
    </p>
        `,
        zh: `
            <h1>博斯普鲁斯晚餐巡游：优雅与娱乐之夜</h1>
    <p>
        在博斯普鲁斯海峡度过一个神奇的夜晚，以前所未有的方式体验伊斯坦布尔。这次令人难忘的晚餐巡游将
        伊斯坦布尔灯火辉煌的天际线魅力与传统土耳其娱乐的兴奋相结合。无论您是寻求浪漫之旅的情侣、想要
        创造家庭回忆的家庭，还是希望与朋友度过充满欢乐的夜晚的团体，博斯普鲁斯晚餐巡游都为每个人提供了特别体验。
    </p>

    <h2>行程亮点</h2>
    <ul>
        <li><strong>欢迎登船：</strong> 开始您的夜晚，享用一杯清新的欢迎饮品，坐在装饰精美的船上。</li>
        <li><strong>全景美景：</strong> 欣赏伊斯坦布尔标志性的地标，包括博斯普鲁斯大桥和灯光点缀的圆顶与尖塔，
            在夜空中熠熠生辉。</li>
        <li><strong>美味的土耳其美食：</strong> 享用精致的多道菜土耳其晚餐，包括冷热开胃菜、主菜选择和新鲜的时令水果。</li>
        <li><strong>传统娱乐：</strong> 被正宗的民间表演、现场音乐以及穿着传统服装的迷人的肚皮舞者深深吸引。</li>
        <li><strong>放松与享受：</strong> 沉浸在充满活力的氛围中，享受从船只的室外甲板或舒适的室内休息室观看的壮丽夜景。</li>
    </ul>

    <h2>包含内容</h2>
    <ul>
        <li>往返酒店的接送服务</li>
        <li>乘坐装饰精美的船只巡游</li>
        <li>欢迎饮品</li>
        <li>多道菜土耳其晚餐</li>
        <li>土耳其民间舞蹈和肚皮舞表演</li>
        <li>现场音乐表演</li>
    </ul>

    <h2>不包含内容</h2>
    <ul>
        <li>欢迎饮品以外的饮料</li>
        <li>个人开支</li>
    </ul>

    <h2>行程安排</h2>
    <ol>
        <li>
            <strong>酒店接送及港口转乘：</strong> 您的夜晚从舒适的酒店接送开始。我们的团队将送您前往港口，
            在那里您将登上装饰优雅的巡游船只。
        </li>
        <li>
            <strong>星空下的博斯普鲁斯巡游：</strong> 当船只启航时，欣赏伊斯坦布尔天际线在夜晚灯光中的壮丽景色。
            灯光点缀的博斯普鲁斯大桥和海滨宫殿创造出魔幻的氛围，非常适合拍照留念。
        </li>
        <li>
            <strong>精致的土耳其晚餐：</strong> 品尝精心准备的正宗土耳其美食：
            <ul>
                <li><strong>开胃菜：</strong> 各种冷热土耳其小菜。</li>
                <li><strong>主菜：</strong> 可选择烤鱼、嫩滑鸡胸肉或风味独特的肉丸，搭配米饭和新鲜沙拉。</li>
                <li><strong>甜点：</strong> 以一份时令水果结束您的美味晚餐。</li>
            </ul>
        </li>
        <li>
            <strong>土耳其之夜表演：</strong> 晚餐后，通过一场充满活力的民间表演深入体验土耳其文化。
            欣赏技艺高超的肚皮舞者表演、以奥斯曼帝国为灵感的传统节目和欢快的民间舞蹈。
            欢迎客人加入表演，尝试一些舞蹈动作！
        </li>
        <li>
            <strong>返回港口及酒店接送：</strong> 当船只返回港口时，再次欣赏伊斯坦布尔迷人的夜景。
            随后，舒适的空调车辆将带您返回酒店，预计在午夜左右抵达。
        </li>
    </ol>

    <h2>附加信息</h2>
    <ul>
        <li><strong>适合人群：</strong> 情侣、家庭和朋友团体。</li>
        <li><strong>建议携带：</strong> 相机、舒适的衣物和一件轻便外套以防夜间微风。</li>
        <li><strong>儿童政策：</strong> 欢迎儿童参加，但婴儿可能需要单独的座椅或安全提篮。</li>
    </ul>

    <h2>立即预订</h2>
    <p>
        不要错过这个将放松、美食和丰富多彩的娱乐相结合的博斯普鲁斯晚餐巡游。
        立即预订，让伊斯坦布尔的魔力让您叹为观止！
    </p>
        `,
        ar: `
        <h1>رحلة عشاء بحرية في مضيق البوسفور: ليلة من الأناقة والترفيه</h1>
    <p>
        استمتع بتجربة إسطنبول كما لم تفعل من قبل في ليلة سحرية على مضيق البوسفور. تجمع هذه الرحلة البحرية التي لا تُنسى بين
        سحر أفق إسطنبول المضاء وإثارة الترفيه التركي التقليدي. سواء كنت زوجين تبحثان عن هروب رومانسي، أو عائلة تصنع ذكريات،
        أو مجموعة من الأصدقاء تبحث عن ليلة مليئة بالمرح، فإن رحلة العشاء البحرية في مضيق البوسفور تقدم شيئًا للجميع.
    </p>

    <h2>أبرز معالم الرحلة</h2>
    <ul>
        <li><strong>ترحيب على متن السفينة:</strong> ابدأ ليلتك بمشروب ترحيبي منعش وأنت تستقر في السفينة المزينة بشكل جميل.</li>
        <li><strong>مناظر بانورامية:</strong> استمتع بمعالم إسطنبول الشهيرة، بما في ذلك جسر البوسفور والقباب والمآذن المضاءة،
            كلها تتألق تحت سماء الليل.</li>
        <li><strong>مأكولات تركية لذيذة:</strong> استمتع بعشاء تركي متنوع يضم المقبلات الباردة والساخنة، وخيارات من الأطباق الرئيسية، وفواكه موسمية طازجة.</li>
        <li><strong>ترفيه تقليدي:</strong> انبهر بالعروض الفولكلورية الأصيلة، والموسيقى الحية، والراقصات الشرقيات اللواتي يرتدين الأزياء التقليدية.</li>
        <li><strong>استرخ واستمتع:</strong> استمتع بالأجواء النابضة بالحياة والمشاهد الليلية الخلابة من سطح السفينة الخارجي أو الصالة الداخلية المريحة.</li>
    </ul>

    <h2>ما يشمله العرض</h2>
    <ul>
        <li>نقل ذهابًا وإيابًا من وإلى الفندق</li>
        <li>رحلة بحرية على متن سفينة مزينة بشكل جميل</li>
        <li>مشروب ترحيبي</li>
        <li>عشاء تركي متنوع</li>
        <li>عروض فولكلورية تركية ورقص شرقي</li>
        <li>عروض موسيقية حية</li>
    </ul>

    <h2>ما لا يشمله العرض</h2>
    <ul>
        <li>المشروبات (باستثناء المشروب الترحيبي)</li>
        <li>النفقات الشخصية</li>
    </ul>

    <h2>برنامج الرحلة</h2>
    <ol>
        <li>
            <strong>الاستقبال في الفندق والنقل إلى الميناء:</strong> تبدأ ليلتك بنقل مريح من الفندق. سيقوم فريقنا بنقلك إلى الميناء،
            حيث ستصعد على متن السفينة المزينة بأناقة للرحلة البحرية.
        </li>
        <li>
            <strong>رحلة بحرية تحت النجوم:</strong> عندما تبحر السفينة، استمتع بالمشاهد الخلابة لأفق إسطنبول المتلألئ تحت أضواء الليل.
            يخلق جسر البوسفور المضاء والقصور المطلة على البحر أجواءً ساحرة مثالية للتصوير.
        </li>
        <li>
            <strong>عشاء تركي فاخر:</strong> تذوق وجبة مُعدة بعناية تتضمن نكهات تركية أصيلة:
            <ul>
                <li><strong>المقبلات:</strong> مجموعة متنوعة من المقبلات التركية الساخنة والباردة.</li>
                <li><strong>الطبق الرئيسي:</strong> اختر بين السمك المشوي، صدر الدجاج الطري، أو كرات اللحم الشهية، مصحوبة بالأرز والسلطة الطازجة.</li>
                <li><strong>الحلوى:</strong> اختتم وجبتك بتشكيلة من الفواكه الموسمية.</li>
            </ul>
        </li>
        <li>
            <strong>عرض الليلة التركية:</strong> بعد العشاء، انغمس في الثقافة التركية مع عرض فولكلوري حيوي. شاهد راقصات شرقيات محترفات،
            عروض مستوحاة من الإمبراطورية العثمانية، ورقصات فولكلورية مفعمة بالحياة.
            يمكن للضيوف المشاركة في المرح وتجربة بعض حركات الرقص بأنفسهم!
        </li>
        <li>
            <strong>العودة إلى الميناء والنقل إلى الفندق:</strong> عندما تعود السفينة إلى الميناء، ألقِ نظرة أخيرة على المشاهد الليلية الخلابة لإسطنبول.
            بعد ذلك، ستعيدك سيارة مريحة مكيفة إلى فندقك، لتصل حوالي منتصف الليل.
        </li>
    </ol>

    <h2>معلومات إضافية</h2>
    <ul>
        <li><strong>الأفضل لـ:</strong> الأزواج، العائلات، ومجموعات الأصدقاء.</li>
        <li><strong>ما يجب إحضاره:</strong> كاميرا، ملابس مريحة، وسترة خفيفة لنسيم المساء.</li>
        <li><strong>سياسة الأطفال:</strong> الأطفال مرحب بهم، ولكن قد يحتاج الرضع إلى مقعد منفصل أو حامل أمان.</li>
    </ul>

    <h2>احجز مكانك اليوم</h2>
    <p>
        لا تفوت فرصة الجمع بين الاسترخاء، والطعام اللذيذ، والترفيه المفعم بالحيوية في هذه
        الرحلة البحرية الساحرة في مضيق البوسفور. احجز الآن ودع سحر إسطنبول يأسر أنفاسك!
    </p>
        `,
    },
    "/tours/istanbul-bosphorus-lunch-cruise": {
        en: `
        <h1>Istanbul Bosphorus Lunch Cruise: Explore the Strait and the Black Sea</h1>
    <p>
        Spend an unforgettable afternoon cruising along the iconic Bosphorus Strait and into the mesmerizing Black Sea. 
        This 4-hour experience blends relaxation, sightseeing, and authentic Turkish cuisine as you explore Istanbul's stunning waterfront landmarks. 
        Discover charming villages, medieval ruins, and breathtaking views from both the European and Asian sides of the city, all while enjoying a delicious open buffet lunch onboard.
    </p>

    <h2>Tour Highlights</h2>
    <ul>
        <li><strong>Sightseeing by Sea:</strong> Cruise along the Bosphorus Strait, seeing Istanbul's top attractions, including the Galata Tower and the Bosphorus Bridge.</li>
        <li><strong>Black Sea Adventure:</strong> Venture beyond the Bosphorus Strait and into the Black Sea, reaching the picturesque village of Beykoz.</li>
        <li><strong>Delicious Turkish Cuisine:</strong> Savor a delightful open buffet lunch featuring traditional Turkish mezes and grilled chicken.</li>
        <li><strong>Medieval Ruins:</strong> Explore the remnants of an ancient fortress in Beykoz, accompanied by your knowledgeable guide.</li>
        <li><strong>Relaxing Atmosphere:</strong> Enjoy the ambiance of Istanbul's waterways from the deck of a comfortable cruise boat.</li>
    </ul>

    <h2>What's Included</h2>
    <ul>
        <li>Professional English-speaking guide</li>
        <li>Hotel transfers from central Istanbul hotels</li>
        <li>Open buffet lunch on the boat</li>
    </ul>

    <h2>What's Not Included</h2>
    <ul>
        <li>Beverages (available for purchase onboard)</li>
        <li>Personal expenses</li>
        <li>Tips (optional)</li>
    </ul>

    <h2>Itinerary</h2>
    <ol>
        <li>
            <strong>Hotel Pick-Up & Embarkation:</strong> Begin your journey with a convenient hotel pick-up from central Istanbul. 
            Arrive at the dock and board the beautifully equipped cruise boat.
        </li>
        <li>
            <strong>Open Buffet Lunch & Bosphorus Cruise:</strong> As the boat departs, indulge in a delectable open buffet lunch featuring a variety of Turkish mezes, grilled chicken, and freshly prepared dishes. 
            Relax in the cozy dining area or step out onto the deck for stunning views.
        </li>
        <li>
            <strong>Bosphorus Sightseeing Highlights:</strong> Cruise past Istanbul's most iconic landmarks, including:
            <ul>
                <li><strong>Galata Tower:</strong> A historic medieval tower offering panoramic views of the city.</li>
                <li><strong>Bosphorus Bridge:</strong> The majestic structure connecting Europe and Asia.</li>
                <li><strong>Coastal mansions, palaces, and vibrant neighborhoods:</strong> Lining the waterway.</li>
            </ul>
        </li>
        <li>
            <strong>Black Sea & Beykoz Village Exploration:</strong> Enter the Black Sea and dock at the charming seaside village of Beykoz. Here, enjoy free time to:
            <ul>
                <li>Stroll through the lush green hills and enjoy the natural scenery.</li>
                <li>Visit the medieval fortress ruins with your guide for historical insight.</li>
                <li>Relax by the water or take a short dip (season and weather permitting).</li>
            </ul>
        </li>
        <li>
            <strong>Return Cruise to Istanbul:</strong> Reboard the boat and sail back towards Istanbul, soaking in the views as the city skyline comes into sight.
        </li>
        <li>
            <strong>Hotel Drop-Off:</strong> Once you dock, a comfortable vehicle will transport you back to your hotel, arriving in the late afternoon.
        </li>
    </ol>

    <h2>Additional Information</h2>
    <ul>
        <li><strong>Child Policy:</strong>
            <ul>
                <li>Children aged 0-4 years: Free of charge</li>
                <li>Children aged 5-8 years: 30% discount</li>
            </ul>
        </li>
        <li><strong>What to Bring:</strong>
            <ul>
                <li>Comfortable clothing and shoes</li>
                <li>A camera to capture the views</li>
                <li>Sunscreen for sunny days</li>
            </ul>
        </li>
        <li><strong>Booking Confirmation:</strong> Instant confirmation upon booking.</li>
    </ul>

    <h2>Book Your Spot Now</h2>
    <p>
        Discover the magic of Istanbul's waterways with this unforgettable Bosphorus Lunch Cruise. 
        Perfect for families, couples, and groups of friends, this tour offers a unique blend of culture, history, and scenic beauty. 
        Don’t miss out – reserve your place today!
    </p>
        `,
        tr: `
      <h1>İstanbul Boğazı Öğle Yemeği Turu: Boğaz ve Karadeniz'i Keşfedin</h1>
    <p>
        İkonik Boğaz boyunca ve büyüleyici Karadeniz'e doğru unutulmaz bir öğleden sonra geçirin. 
        Bu 4 saatlik deneyim, İstanbul'un etkileyici kıyı manzaralarını keşfederken, dinlenme, gezi ve otantik Türk mutfağını bir araya getiriyor. 
        Şirin köyleri, ortaçağdan kalma harabeleri ve şehrin hem Avrupa hem de Asya yakasından nefes kesen manzaraları keşfedin, 
        hepsi teknede lezzetli açık büfe öğle yemeği eşliğinde.
    </p>

    <h2>Turun Öne Çıkanları</h2>
    <ul>
        <li><strong>Denizden Manzara:</strong> Boğaz boyunca gezerek, Galata Kulesi ve Boğaz Köprüsü gibi İstanbul’un en önemli turistik yerlerini görün.</li>
        <li><strong>Karadeniz Macerası:</strong> Boğaz’ı geçerek Karadeniz’e ulaşın ve şirin Beykoz köyüne varın.</li>
        <li><strong>Lezzetli Türk Mutfağı:</strong> Geleneksel Türk mezeleri ve ızgara tavuk içeren leziz açık büfe öğle yemeğinin tadını çıkarın.</li>
        <li><strong>Ortaçağ Harabeleri:</strong> Beykoz’daki eski bir kalenin kalıntılarını bilgi dolu rehberinizle keşfedin.</li>
        <li><strong>Rahatlatıcı Atmosfer:</strong> Konforlu bir kruvazör teknesinin güvertesinden İstanbul’un su yollarının ambiyansının keyfini çıkarın.</li>
    </ul>

    <h2>Dahil Olanlar</h2>
    <ul>
        <li>Profesyonel İngilizce konuşan rehber</li>
        <li>Merkezi İstanbul otellerinden transfer</li>
        <li>Teknede açık büfe öğle yemeği</li>
    </ul>

    <h2>Dahil Olmayanlar</h2>
    <ul>
        <li>İçecekler (teknede satın alınabilir)</li>
        <li>Kişisel harcamalar</li>
        <li>Bahşişler (isteğe bağlı)</li>
    </ul>

    <h2>Tur Programı</h2>
    <ol>
        <li>
            <strong>Otelden Alma ve Tekneye Biniş:</strong> İstanbul'un merkezinden rahat bir otel transferi ile yolculuğunuza başlayın. 
            Limana varın ve güzelce donatılmış kruvazör teknesine binin.
        </li>
        <li>
            <strong>Açık Büfe Öğle Yemeği ve Boğaz Gezisi:</strong> Tekne hareket ederken, çeşitli Türk mezeleri, ızgara tavuk ve özenle hazırlanmış yemeklerden oluşan açık büfe öğle yemeğinin tadını çıkarın. 
            Rahat yemek alanında dinlenin veya muhteşem manzaralar için güverteye çıkın.
        </li>
        <li>
            <strong>Boğaz Manzarası:</strong> İstanbul'un en ikonik simgelerinin yanından geçin:
            <ul>
                <li><strong>Galata Kulesi:</strong> Şehrin panoramik manzaralarını sunan tarihi bir ortaçağ kulesi.</li>
                <li><strong>Boğaz Köprüsü:</strong> Avrupa ve Asya’yı birbirine bağlayan ihtişamlı yapı.</li>
                <li><strong>Kıyı köşkleri, saraylar ve canlı mahalleler:</strong> Su yolunu çevreler.</li>
            </ul>
        </li>
        <li>
            <strong>Karadeniz ve Beykoz Köyü Keşfi:</strong> Karadeniz’e girin ve şirin sahil köyü Beykoz’a yanaşın. Burada serbest zamanın tadını çıkarın:
            <ul>
                <li>Yeşil tepeler arasında yürüyüş yapın ve doğal manzaraların keyfini çıkarın.</li>
                <li>Tarihi bilgi için rehberinizle ortaçağ kalıntılarını ziyaret edin.</li>
                <li>Su kenarında dinlenin veya kısa bir yüzme yapın (mevsim ve hava durumuna bağlı).</li>
            </ul>
        </li>
        <li>
            <strong>İstanbul’a Dönüş:</strong> Tekneye tekrar binin ve İstanbul’a doğru yola çıkarken şehir silüetinin manzaralarının tadını çıkarın.
        </li>
        <li>
            <strong>Otelde Bırakma:</strong> Tekne yanaştıktan sonra, konforlu bir araç sizi otelinize geri götürecek ve öğleden sonra geç saatlerde varacaksınız.
        </li>
    </ol>

    <h2>Ek Bilgiler</h2>
    <ul>
        <li><strong>Çocuk Politikası:</strong>
            <ul>
                <li>0-4 yaş arası çocuklar: Ücretsiz</li>
                <li>5-8 yaş arası çocuklar: %30 indirim</li>
            </ul>
        </li>
        <li><strong>Yanınıza Almanız Gerekenler:</strong>
            <ul>
                <li>Rahat kıyafetler ve ayakkabılar</li>
                <li>Manzaraları yakalamak için bir kamera</li>
                <li>Güneşli günler için güneş kremi</li>
            </ul>
        </li>
        <li><strong>Rezervasyon Onayı:</strong> Rezervasyon sırasında anında onay.</li>
    </ul>

    <h2>Bugün Yer Ayırtın</h2>
    <p>
        Bu unutulmaz Boğaz Öğle Yemeği Turu ile İstanbul’un su yollarının büyüsünü keşfedin. 
        Aileler, çiftler ve arkadaş grupları için mükemmel olan bu tur, kültür, tarih ve manzaralı güzelliklerin eşsiz bir karışımını sunuyor. 
        Kaçırmayın – bugün yerinizi ayırtın!
    </p>
        `,
        ar: `
            <h1>رحلة غداء بحرية في مضيق البوسفور: استكشف المضيق والبحر الأسود</h1>
    <p>
        اقضِ فترة بعد ظهر لا تُنسى وأنت تتجول على طول مضيق البوسفور الشهير ووصولاً إلى البحر الأسود الساحر. 
        تجمع هذه التجربة التي تستغرق 4 ساعات بين الاسترخاء، مشاهدة المعالم السياحية، والمأكولات التركية الأصيلة أثناء استكشافك لمعالم إسطنبول الساحلية الرائعة. 
        اكتشف القرى الساحرة، والآثار القديمة، والمناظر الخلابة من الجوانب الأوروبية والآسيوية للمدينة، وكل ذلك أثناء الاستمتاع بغداء شهي مفتوح على متن السفينة.
    </p>

    <h2>أبرز معالم الجولة</h2>
    <ul>
        <li><strong>مشاهدة المعالم من البحر:</strong> أبحر على طول مضيق البوسفور، وشاهد أبرز معالم إسطنبول، بما في ذلك برج غلطة وجسر البوسفور.</li>
        <li><strong>مغامرة في البحر الأسود:</strong> تجاوز مضيق البوسفور ووصل إلى البحر الأسود، وصولاً إلى قرية بيكوز الساحرة.</li>
        <li><strong>المأكولات التركية اللذيذة:</strong> استمتع بغداء مفتوح شهي يضم المقبلات التركية التقليدية والدجاج المشوي.</li>
        <li><strong>الآثار القديمة:</strong> استكشف بقايا قلعة قديمة في بيكوز برفقة مرشدك المطلع.</li>
        <li><strong>أجواء مريحة:</strong> استمتع بجمال الممرات المائية في إسطنبول من سطح السفينة المريح.</li>
    </ul>

    <h2>ما يشمله العرض</h2>
    <ul>
        <li>مرشد محترف ناطق باللغة الإنجليزية</li>
        <li>خدمة النقل من الفنادق في وسط إسطنبول</li>
        <li>غداء مفتوح على متن السفينة</li>
    </ul>

    <h2>ما لا يشمله العرض</h2>
    <ul>
        <li>المشروبات (متوفرة للشراء على متن السفينة)</li>
        <li>النفقات الشخصية</li>
        <li>البقشيش (اختياري)</li>
    </ul>

    <h2>برنامج الرحلة</h2>
    <ol>
        <li>
            <strong>التوصيل من الفندق والصعود إلى السفينة:</strong> ابدأ رحلتك بنقل مريح من الفندق في وسط إسطنبول. 
            وصل إلى الميناء واصعد على متن السفينة المجهزة تجهيزًا جيدًا.
        </li>
        <li>
            <strong>غداء مفتوح وجولة في البوسفور:</strong> أثناء إبحار السفينة، استمتع بغداء مفتوح شهي يضم مجموعة متنوعة من المقبلات التركية والدجاج المشوي والأطباق الطازجة. 
            استرخِ في منطقة تناول الطعام المريحة أو اخرج إلى السطح للاستمتاع بالمناظر الخلابة.
        </li>
        <li>
            <strong>معالم مضيق البوسفور:</strong> أبحر بالقرب من أشهر معالم إسطنبول، بما في ذلك:
            <ul>
                <li><strong>برج غلطة:</strong> برج تاريخي يوفر إطلالات بانورامية على المدينة.</li>
                <li><strong>جسر البوسفور:</strong> هيكل مهيب يربط بين أوروبا وآسيا.</li>
                <li><strong>القصور الساحلية والأحياء النابضة بالحياة:</strong> التي تصطف على جانبي الممر المائي.</li>
            </ul>
        </li>
        <li>
            <strong>استكشاف البحر الأسود وقرية بيكوز:</strong> ادخل البحر الأسود وارسي في قرية بيكوز الساحلية الساحرة. هنا، يمكنك:
            <ul>
                <li>التجول في التلال الخضراء المورقة والاستمتاع بالطبيعة.</li>
                <li>زيارة الآثار القديمة برفقة مرشدك للحصول على نظرة تاريخية.</li>
                <li>الاسترخاء بجانب الماء أو القيام بسباحة قصيرة (حسب الموسم والطقس).</li>
            </ul>
        </li>
        <li>
            <strong>العودة إلى إسطنبول:</strong> اصعد مرة أخرى إلى السفينة واستمتع بالعودة إلى إسطنبول مع إطلالات على أفق المدينة.
        </li>
        <li>
            <strong>التوصيل إلى الفندق:</strong> عند الوصول إلى الميناء، ستعيدك سيارة مريحة إلى فندقك في فترة ما بعد الظهر.
        </li>
    </ol>

    <h2>معلومات إضافية</h2>
    <ul>
        <li><strong>سياسة الأطفال:</strong>
            <ul>
                <li>الأطفال من 0-4 سنوات: مجانًا</li>
                <li>الأطفال من 5-8 سنوات: خصم 30%</li>
            </ul>
        </li>
        <li><strong>ما يجب إحضاره:</strong>
            <ul>
                <li>ملابس وأحذية مريحة</li>
                <li>كاميرا لالتقاط المناظر</li>
                <li>واقي شمس لأيام الصيف المشمسة</li>
            </ul>
        </li>
        <li><strong>تأكيد الحجز:</strong> تأكيد فوري عند الحجز.</li>
    </ul>

    <h2>احجز مكانك اليوم</h2>
    <p>
        اكتشف سحر مضيق البوسفور مع هذه الرحلة البحرية المذهلة. 
        مثالية للعائلات، الأزواج، ومجموعات الأصدقاء، تقدم هذه الرحلة مزيجًا فريدًا من الثقافة، التاريخ والجمال الطبيعي. 
        لا تفوت الفرصة - احجز مكانك اليوم!
    </p>
        `,
        zh: `
         <h1>博斯普鲁斯海峡午餐巡游：探索海峡和黑海</h1>
    <p>
        沿着著名的博斯普鲁斯海峡航行，度过一个难忘的下午，直至迷人的黑海。 
        这次为期四小时的体验将放松、观光和正宗的土耳其美食融为一体，让您探索伊斯坦布尔令人惊叹的海滨地标。 
        探索迷人的村庄、中世纪的遗迹，以及来自城市欧洲和亚洲两侧的壮丽景色，
        同时享受船上的美味自助午餐。
    </p>

    <h2>游览亮点</h2>
    <ul>
        <li><strong>海上观光：</strong> 沿着博斯普鲁斯海峡巡游，欣赏伊斯坦布尔的主要景点，包括加拉塔塔和博斯普鲁斯大桥。</li>
        <li><strong>黑海探险：</strong> 穿越博斯普鲁斯海峡，进入黑海，抵达迷人的贝伊科兹村庄。</li>
        <li><strong>美味的土耳其美食：</strong> 品尝包含传统土耳其小吃和烤鸡的美味自助午餐。</li>
        <li><strong>中世纪遗迹：</strong> 在知识渊博的导游陪同下，探索贝伊科兹的古代堡垒遗址。</li>
        <li><strong>轻松的氛围：</strong> 在舒适的游轮甲板上享受伊斯坦布尔水道的美丽景色。</li>
    </ul>

    <h2>包含内容</h2>
    <ul>
        <li>专业的英语导游</li>
        <li>从伊斯坦布尔市中心酒店接送</li>
        <li>船上的自助午餐</li>
    </ul>

    <h2>不包含内容</h2>
    <ul>
        <li>饮料（可在船上购买）</li>
        <li>个人消费</li>
        <li>小费（可选）</li>
    </ul>

    <h2>行程安排</h2>
    <ol>
        <li>
            <strong>酒店接送与登船：</strong> 从伊斯坦布尔市中心的酒店接送开始您的旅程。 
            到达港口后登上装备精良的游轮。
        </li>
        <li>
            <strong>自助午餐与博斯普鲁斯巡游：</strong> 船启航时，享受包含多种土耳其小吃、烤鸡和新鲜制作菜肴的美味自助午餐。 
            在舒适的用餐区放松，或到甲板上欣赏壮丽的景色。
        </li>
        <li>
            <strong>博斯普鲁斯观光亮点：</strong> 船游经过伊斯坦布尔的标志性地标，包括：
            <ul>
                <li><strong>加拉塔塔：</strong> 一座历史悠久的中世纪塔楼，可欣赏到城市的全景。</li>
                <li><strong>博斯普鲁斯大桥：</strong> 连接欧洲和亚洲的宏伟建筑。</li>
                <li><strong>沿海豪宅、宫殿和充满活力的社区：</strong> 沿着水道排列。</li>
            </ul>
        </li>
        <li>
            <strong>黑海与贝伊科兹村探索：</strong> 进入黑海，在迷人的贝伊科兹海滨村停靠。这里，您可以：
            <ul>
                <li>漫步在郁郁葱葱的绿色山丘，享受自然风光。</li>
                <li>在导游的带领下参观中世纪遗迹，了解历史。</li>
                <li>在水边放松或短暂游泳（视季节和天气而定）。</li>
            </ul>
        </li>
        <li>
            <strong>返回伊斯坦布尔：</strong> 重新登船，返回伊斯坦布尔，欣赏城市天际线的壮丽景色。
        </li>
        <li>
            <strong>酒店送回：</strong> 抵达港口后，舒适的车辆将您送回酒店，预计下午晚些时候到达。
        </li>
    </ol>

    <h2>附加信息</h2>
    <ul>
        <li><strong>儿童政策：</strong>
            <ul>
                <li>0-4岁儿童：免费</li>
                <li>5-8岁儿童：享受30%折扣</li>
            </ul>
        </li>
        <li><strong>需要携带：</strong>
            <ul>
                <li>舒适的衣物和鞋子</li>
                <li>用于拍摄风景的相机</li>
                <li>晴天时使用的防晒霜</li>
            </ul>
        </li>
        <li><strong>预订确认：</strong> 预订后即时确认。</li>
    </ul>

    <h2>立即预订</h2>
    <p>
        通过这次难忘的博斯普鲁斯午餐巡游，发现伊斯坦布尔水道的魅力。 
        非常适合家庭、情侣和朋友团体，此次游览将为您提供文化、历史和自然美景的独特融合。 
        不要错过 – 今天就预订您的位置吧！
    </p>
        `,
        it: `
         <h1>Crociera con Pranzo sul Bosforo: Esplora lo Stretto e il Mar Nero</h1>
    <p>
        Trascorri un pomeriggio indimenticabile navigando lungo il famoso Stretto del Bosforo fino al suggestivo Mar Nero. 
        Questa esperienza di 4 ore combina relax, visite turistiche e autentica cucina turca mentre esplori i magnifici luoghi sul lungomare di Istanbul. 
        Scopri villaggi affascinanti, rovine medievali e panorami mozzafiato sia dal lato europeo che asiatico della città, 
        tutto questo mentre ti godi un delizioso pranzo a buffet a bordo.
    </p>

    <h2>Punti Salienti del Tour</h2>
    <ul>
        <li><strong>Visita Turistica dal Mare:</strong> Naviga lungo lo Stretto del Bosforo ammirando le principali attrazioni di Istanbul, tra cui la Torre di Galata e il Ponte sul Bosforo.</li>
        <li><strong>Avventura nel Mar Nero:</strong> Prosegui oltre lo Stretto del Bosforo fino al Mar Nero, raggiungendo il pittoresco villaggio di Beykoz.</li>
        <li><strong>Deliziosa Cucina Turca:</strong> Assapora un delizioso pranzo a buffet che include meze tradizionali turchi e pollo alla griglia.</li>
        <li><strong>Rovine Medievali:</strong> Esplora i resti di un'antica fortezza a Beykoz, accompagnato da una guida esperta.</li>
        <li><strong>Atmosfera Rilassante:</strong> Goditi l'atmosfera dei corsi d'acqua di Istanbul dal ponte di una comoda nave da crociera.</li>
    </ul>

    <h2>Cosa È Incluso</h2>
    <ul>
        <li>Guida professionale parlante inglese</li>
        <li>Trasferimenti da hotel centrali di Istanbul</li>
        <li>Pranzo a buffet a bordo</li>
    </ul>

    <h2>Cosa Non È Incluso</h2>
    <ul>
        <li>Bevande (disponibili per l'acquisto a bordo)</li>
        <li>Spese personali</li>
        <li>Mance (facoltative)</li>
    </ul>

    <h2>Itinerario</h2>
    <ol>
        <li>
            <strong>Pick-Up in Hotel e Imbarco:</strong> Inizia il tuo viaggio con un comodo trasferimento dall'hotel nel centro di Istanbul. 
            Arriva al porto e sali a bordo della nave da crociera elegantemente attrezzata.
        </li>
        <li>
            <strong>Pranzo a Buffet e Crociera sul Bosforo:</strong> Mentre la nave parte, concediti un delizioso pranzo a buffet che include una varietà di meze turchi, pollo alla griglia e piatti freschi preparati. 
            Rilassati nell'accogliente area pranzo o esci sul ponte per goderti viste mozzafiato.
        </li>
        <li>
            <strong>Punti Salienti del Bosforo:</strong> Naviga accanto ai luoghi più iconici di Istanbul, tra cui:
            <ul>
                <li><strong>Torre di Galata:</strong> Una torre medievale storica che offre viste panoramiche sulla città.</li>
                <li><strong>Ponte sul Bosforo:</strong> La maestosa struttura che collega Europa e Asia.</li>
                <li><strong>Ville costiere, palazzi e quartieri vivaci:</strong> Allineati lungo il corso d'acqua.</li>
            </ul>
        </li>
        <li>
            <strong>Esplorazione del Mar Nero e Villaggio di Beykoz:</strong> Entra nel Mar Nero e attracca nel pittoresco villaggio costiero di Beykoz. Qui puoi:
            <ul>
                <li>Passeggiare tra le verdi colline e goderti lo scenario naturale.</li>
                <li>Visitare le rovine medievali con la tua guida per approfondimenti storici.</li>
                <li>Rilassarti vicino all'acqua o fare un breve tuffo (a seconda della stagione e del tempo).</li>
            </ul>
        </li>
        <li>
            <strong>Ritorno a Istanbul:</strong> Risali a bordo della nave e naviga di ritorno verso Istanbul, godendoti le viste mentre lo skyline della città appare all'orizzonte.
        </li>
        <li>
            <strong>Trasferimento in Hotel:</strong> Una volta arrivato al porto, un veicolo confortevole ti riporterà al tuo hotel, con arrivo previsto nel tardo pomeriggio.
        </li>
    </ol>

    <h2>Informazioni Aggiuntive</h2>
    <ul>
        <li><strong>Politica per i Bambini:</strong>
            <ul>
                <li>Bambini da 0 a 4 anni: Gratis</li>
                <li>Bambini da 5 a 8 anni: Sconto del 30%</li>
            </ul>
        </li>
        <li><strong>Cosa Portare:</strong>
            <ul>
                <li>Abbigliamento e scarpe comode</li>
                <li>Una fotocamera per catturare le viste</li>
                <li>Crema solare per le giornate soleggiate</li>
            </ul>
        </li>
        <li><strong>Conferma della Prenotazione:</strong> Conferma immediata al momento della prenotazione.</li>
    </ul>

    <h2>Prenota il Tuo Posto Oggi</h2>
    <p>
        Scopri la magia dei corsi d'acqua di Istanbul con questa indimenticabile crociera con pranzo sul Bosforo. 
        Perfetto per famiglie, coppie e gruppi di amici, questo tour offre una combinazione unica di cultura, storia e bellezze naturali. 
        Non perdere questa occasione: prenota il tuo posto oggi stesso!
    </p>
        `,
        es: `
          <h1>Cruce con Almuerzo en el Bósforo: Explora el Estrecho y el Mar Negro</h1>
    <p>
        Disfruta de una tarde inolvidable navegando por el famoso estrecho del Bósforo y adentrándote en el encantador Mar Negro. 
        Esta experiencia de 4 horas combina relajación, turismo y auténtica gastronomía turca mientras exploras los impresionantes lugares del litoral de Estambul. 
        Descubre pueblos encantadores, ruinas medievales y vistas impresionantes de los lados europeo y asiático de la ciudad, 
        todo mientras disfrutas de un delicioso almuerzo tipo buffet a bordo.
    </p>

    <h2>Puntos Destacados del Tour</h2>
    <ul>
        <li><strong>Vistas desde el Mar:</strong> Navega por el estrecho del Bósforo, admirando las principales atracciones de Estambul, como la Torre de Gálata y el Puente del Bósforo.</li>
        <li><strong>Aventura en el Mar Negro:</strong> Cruza el estrecho del Bósforo y llega al Mar Negro, alcanzando el pintoresco pueblo de Beykoz.</li>
        <li><strong>Deliciosa Gastronomía Turca:</strong> Disfruta de un exquisito almuerzo tipo buffet que incluye mezes tradicionales turcos y pollo a la parrilla.</li>
        <li><strong>Ruinas Medievales:</strong> Explora los restos de una antigua fortaleza en Beykoz acompañado de tu guía experto.</li>
        <li><strong>Ambiente Relajante:</strong> Disfruta del ambiente de las vías fluviales de Estambul desde la cubierta de un cómodo barco de crucero.</li>
    </ul>

    <h2>Qué Incluye</h2>
    <ul>
        <li>Guía profesional de habla inglesa</li>
        <li>Traslados desde hoteles del centro de Estambul</li>
        <li>Almuerzo tipo buffet a bordo</li>
    </ul>

    <h2>Qué No Incluye</h2>
    <ul>
        <li>Bebidas (disponibles para comprar a bordo)</li>
        <li>Gastos personales</li>
        <li>Propinas (opcional)</li>
    </ul>

    <h2>Itinerario</h2>
    <ol>
        <li>
            <strong>Recogida en el Hotel y Embarque:</strong> Comienza tu viaje con un cómodo traslado desde tu hotel en el centro de Estambul. 
            Llega al puerto y aborda el barco de crucero bellamente equipado.
        </li>
        <li>
            <strong>Almuerzo Buffet y Crucero por el Bósforo:</strong> Mientras el barco zarpa, disfruta de un delicioso almuerzo tipo buffet que incluye una variedad de mezes turcos, pollo a la parrilla y platos frescos preparados. 
            Relájate en el acogedor comedor o sal a la cubierta para disfrutar de vistas impresionantes.
        </li>
        <li>
            <strong>Puntos de Interés del Bósforo:</strong> Navega junto a los lugares más emblemáticos de Estambul, que incluyen:
            <ul>
                <li><strong>Torre de Gálata:</strong> Una histórica torre medieval que ofrece vistas panorámicas de la ciudad.</li>
                <li><strong>Puente del Bósforo:</strong> La majestuosa estructura que conecta Europa y Asia.</li>
                <li><strong>Mansiones costeras, palacios y barrios vibrantes:</strong> Que bordean la vía fluvial.</li>
            </ul>
        </li>
        <li>
            <strong>Exploración del Mar Negro y del Pueblo de Beykoz:</strong> Adéntrate en el Mar Negro y atraca en el encantador pueblo costero de Beykoz. Aquí puedes:
            <ul>
                <li>Pasear por las verdes colinas y disfrutar del paisaje natural.</li>
                <li>Visitar las ruinas medievales con tu guía para obtener información histórica.</li>
                <li>Relajarte junto al agua o darte un breve chapuzón (según la temporada y el clima).</li>
            </ul>
        </li>
        <li>
            <strong>Regreso a Estambul:</strong> Reembarca en el barco y navega de regreso a Estambul, disfrutando de las vistas mientras el horizonte de la ciudad se perfila.
        </li>
        <li>
            <strong>Traslado al Hotel:</strong> Una vez que llegues al puerto, un vehículo cómodo te llevará de regreso a tu hotel, llegando a última hora de la tarde.
        </li>
    </ol>

    <h2>Información Adicional</h2>
    <ul>
        <li><strong>Política de Niños:</strong>
            <ul>
                <li>Niños de 0-4 años: Gratis</li>
                <li>Niños de 5-8 años: 30% de descuento</li>
            </ul>
        </li>
        <li><strong>Qué Llevar:</strong>
            <ul>
                <li>Ropa y calzado cómodos</li>
                <li>Una cámara para capturar las vistas</li>
                <li>Protector solar para días soleados</li>
            </ul>
        </li>
        <li><strong>Confirmación de la Reserva:</strong> Confirmación inmediata al realizar la reserva.</li>
    </ul>

    <h2>Reserva Tu Lugar Hoy</h2>
    <p>
        Descubre la magia de las vías fluviales de Estambul con este inolvidable crucero con almuerzo por el Bósforo. 
        Perfecto para familias, parejas y grupos de amigos, este tour ofrece una combinación única de cultura, historia y belleza escénica. 
        ¡No te lo pierdas, reserva tu lugar hoy!
    </p>
        `,
        ru: `
    <h1>Обеденный круиз по Босфору: Исследуйте пролив и Чёрное море</h1>
    <p>
        Проведите незабываемый день, наслаждаясь круизом по знаменитому проливу Босфор и завораживающему Чёрному морю. 
        Этот 4-часовой тур сочетает в себе отдых, осмотр достопримечательностей и настоящую турецкую кухню, 
        открывая для вас потрясающие набережные Стамбула. 
        Исследуйте очаровательные деревни, средневековые руины и захватывающие виды как с европейской, так и с азиатской стороны города, 
        наслаждаясь вкусным обедом в формате "шведского стола" на борту.
    </p>

    <h2>Основные моменты тура</h2>
    <ul>
        <li><strong>Достопримечательности с воды:</strong> Прогуляйтесь вдоль пролива Босфор, наслаждаясь видами на главные достопримечательности Стамбула, включая Галатскую башню и Босфорский мост.</li>
        <li><strong>Приключение на Чёрном море:</strong> Пересеките пролив Босфор и войдите в Чёрное море, добравшись до живописной деревни Бейкоз.</li>
        <li><strong>Вкусная турецкая кухня:</strong> Насладитесь великолепным обедом "шведский стол", включающим традиционные турецкие мезе и жареную курицу.</li>
        <li><strong>Средневековые руины:</strong> Исследуйте остатки древней крепости в Бейкозе вместе с вашим знающим гидом.</li>
        <li><strong>Расслабляющая атмосфера:</strong> Наслаждайтесь атмосферой водных путей Стамбула с палубы комфортабельного круизного судна.</li>
    </ul>

    <h2>Что включено</h2>
    <ul>
        <li>Профессиональный англоговорящий гид</li>
        <li>Трансфер из центральных отелей Стамбула</li>
        <li>Обед "шведский стол" на борту</li>
    </ul>

    <h2>Что не включено</h2>
    <ul>
        <li>Напитки (можно приобрести на борту)</li>
        <li>Личные расходы</li>
        <li>Чаевые (по желанию)</li>
    </ul>

    <h2>Программа тура</h2>
    <ol>
        <li>
            <strong>Трансфер из отеля и посадка на судно:</strong> Начните свое путешествие с комфортного трансфера из отеля в центре Стамбула. 
            Прибыв в порт, вы подниметесь на борт прекрасно оборудованного круизного судна.
        </li>
        <li>
            <strong>Обед "шведский стол" и круиз по Босфору:</strong> Во время плавания насладитесь вкусным обедом "шведский стол", включающим разнообразные турецкие мезе, жареную курицу и свежеприготовленные блюда. 
            Расслабьтесь в уютной обеденной зоне или выйдите на палубу, чтобы насладиться потрясающими видами.
        </li>
        <li>
            <strong>Достопримечательности Босфора:</strong> Проплывите мимо самых известных достопримечательностей Стамбула, включая:
            <ul>
                <li><strong>Галатская башня:</strong> Историческая башня средневековья с панорамным видом на город.</li>
                <li><strong>Босфорский мост:</strong> Величественное сооружение, соединяющее Европу и Азию.</li>
                <li><strong>Прибрежные особняки, дворцы и оживлённые районы:</strong> Расположены вдоль водного пути.</li>
            </ul>
        </li>
        <li>
            <strong>Исследование Чёрного моря и деревни Бейкоз:</strong> Войдите в Чёрное море и пришвартуйтесь в очаровательной прибрежной деревне Бейкоз. Здесь вы сможете:
            <ul>
                <li>Прогуляться по зелёным холмам и насладиться природными пейзажами.</li>
                <li>Посетить руины средневековой крепости вместе с гидом.</li>
                <li>Отдохнуть у воды или искупаться (в зависимости от сезона и погоды).</li>
            </ul>
        </li>
        <li>
            <strong>Возвращение в Стамбул:</strong> Снова поднимитесь на судно и отправьтесь обратно в Стамбул, наслаждаясь видами на горизонт города.
        </li>
        <li>
            <strong>Доставка в отель:</strong> После прибытия в порт вас доставят в ваш отель на комфортабельном автомобиле. Прибытие ожидается в поздние часы дня.
        </li>
    </ol>

    <h2>Дополнительная информация</h2>
    <ul>
        <li><strong>Политика в отношении детей:</strong>
            <ul>
                <li>Дети 0-4 лет: бесплатно</li>
                <li>Дети 5-8 лет: скидка 30%</li>
            </ul>
        </li>
        <li><strong>Что взять с собой:</strong>
            <ul>
                <li>Удобная одежда и обувь</li>
                <li>Камера для запечатления видов</li>
                <li>Солнцезащитный крем для солнечных дней</li>
            </ul>
        </li>
        <li><strong>Подтверждение бронирования:</strong> Мгновенное подтверждение при бронировании.</li>
    </ul>

    <h2>Забронируйте ваше место уже сегодня</h2>
    <p>
        Откройте для себя магию водных путей Стамбула с этим незабываемым обеденным круизом по Босфору. 
        Идеально подходит для семей, пар и групп друзей, этот тур предлагает уникальное сочетание культуры, истории и природной красоты. 
        Не упустите возможность – бронируйте ваше место уже сегодня!
    </p>
        `,
    },
    "/tours/istanbul-full-day-tour": {
        en: `
    <h1>Byzantine & Ottoman Heritage – Blue Mosque, Hagia Sophia, Grand Bazaar & Topkapi Palace</h1>
    <h2>Tour Highlights</h2>
    <ul>
        <li><strong>Uncover History:</strong> Immerse yourself in the rich history of Istanbul, exploring iconic Byzantine and Ottoman landmarks.</li>
        <li><strong>Cultural Gems:</strong> Visit the UNESCO-listed Hagia Sophia, the majestic Blue Mosque, and the vibrant Grand Bazaar.</li>
        <li><strong>Topkapi Palace:</strong> Step into the opulent world of Ottoman sultans with a guided tour of their residence.</li>
        <li><strong>Expert Guidance:</strong> Learn captivating stories and historical insights from a professional, multilingual guide.</li>
    </ul>

    <h2>Tour Details</h2>
    <ul>
        <li><strong>Hotel Pick-Up:</strong> Between 08:30 and 09:30 from central Istanbul hotels. (<em>Pick-up times vary; please confirm upon booking.</em>)</li>
        <li><strong>Return Time:</strong> Afternoon, approximately 4:30 PM.</li>
        <li><strong>Language Options:</strong> English, German, Arabic.</li>
        <li><strong>Not Suitable For:</strong> Guests with walking difficulties.</li>
    </ul>

    <h2>What's Included</h2>
    <ul>
        <li>Round-trip hotel transfers</li>
        <li>Comfortable, air-conditioned bus transportation</li>
        <li>Guided walking tour with expert commentary</li>
    </ul>

    <h2>What's Not Included</h2>
    <ul>
        <li>Drinks</li>
        <li>Museum entrance fees</li>
        <li>Lunch (<em>Lunch will be at a local restaurant, and participants can purchase their meals directly.</em>)</li>
    </ul>

    <h2>Important Information</h2>
    <ul>
        <li><strong>Topkapi Palace Closure:</strong> Closed on Tuesdays, and an alternative itinerary will be provided.</li>
        <li><strong>Blue Mosque Visits:</strong> Not available on Fridays due to prayer services.</li>
        <li><strong>What to Bring:</strong> Camera, comfortable shoes, and clothing.</li>
        <li><strong>Children’s Admission:</strong> Children must present valid passports for age verification at museums.</li>
    </ul>

    <h2>Itinerary Overview</h2>
    <h3>Morning: Iconic Landmarks in Sultanahmet</h3>
    <p>Your day begins with a convenient hotel pick-up. After meeting your guide and group, the adventure starts in the heart of Istanbul:</p>
    <ul>
        <li><strong>Hippodrome:</strong> Explore this historic arena once used for chariot races and public ceremonies. Admire its monuments, including the German Fountain, the Serpentine Column, and the Obelisk of Theodosius.</li>
        <li><strong>Blue Mosque:</strong> Step inside this architectural wonder, renowned for its dazzling blue Iznik tiles and serene ambiance. (<em>Closed on Fridays.</em>)</li>
        <li><strong>Hagia Sophia:</strong> Marvel at the breathtaking architecture of this ancient basilica, a masterpiece that transitioned from a Byzantine church to an Ottoman mosque, now a UNESCO-listed museum. (<em>Closed on Mondays; alternative visit to the Underground Cistern will be arranged.</em>)</li>
    </ul>

    <h3>Midday: Grand Bazaar & Lunch</h3>
    <p>Dive into the lively atmosphere of the Grand Bazaar, one of the world’s largest and oldest covered markets. With over 4,000 shops, this bustling hub offers everything from spices and textiles to unique souvenirs. Practice your bargaining skills and enjoy the vibrant energy.</p>
    <p>Enjoy a lunch break at a local restaurant (<em>not included in the price</em>).</p>

    <h3>Afternoon: Sultans’ Tombs & Topkapi Palace</h3>
    <ul>
        <li><strong>Sultans’ Tombs:</strong> Visit the beautifully adorned resting places of five Ottoman sultans, showcasing intricate 16th-century ceramic designs.</li>
        <li><strong>Topkapi Palace:</strong> Conclude your tour with a visit to this stunning palace, once the seat of Ottoman power. Explore its treasures, including imperial jewels, ceremonial costumes, and artifacts from centuries past. (<em>Closed on Tuesdays.</em>)</li>
    </ul>

    <h2>Additional Information</h2>
    <ul>
        <li><strong>Operating Days:</strong> Daily (<em>except Fridays for Blue Mosque & Tuesdays for Topkapi Palace</em>).</li>
        <li><strong>Duration:</strong> Full day, approximately 8 hours.</li>
        <li><strong>Group Size:</strong> Small groups to ensure a personalized experience.</li>
        <li><strong>Booking Tip:</strong> Advance booking recommended to secure your spot.</li>
    </ul>

    <h2>Reserve Your Spot</h2>
    <p>Don’t miss this incredible journey through Istanbul’s rich history and vibrant culture. Book your tour now and let the city’s timeless charm captivate you!</p>
        `,
        tr: `
        <h1>Bizans ve Osmanlı Mirası – Sultanahmet Camii, Ayasofya, Kapalı Çarşı & Topkapı Sarayı</h1>
<h2>Turun Öne Çıkanları</h2>
<ul>
    <li><strong>Tarihi Keşfedin:</strong> İstanbul'un zengin tarihine dalın, ikonik Bizans ve Osmanlı dönemi eserlerini keşfedin.</li>
    <li><strong>Kültürel Hazineler:</strong> UNESCO Dünya Mirası Listesi'ndeki Ayasofya, ihtişamlı Sultanahmet Camii ve canlı Kapalı Çarşı’yı ziyaret edin.</li>
    <li><strong>Topkapı Sarayı:</strong> Osmanlı sultanlarının görkemli dünyasına bir rehber eşliğinde adım atın.</li>
    <li><strong>Uzman Rehberlik:</strong> Profesyonel, çok dilli rehberinizden büyüleyici hikayeler ve tarihi bilgiler öğrenin.</li>
</ul>

<h2>Tur Detayları</h2>
<ul>
    <li><strong>Otelden Alma:</strong> Sabah 08:30 ile 09:30 arasında İstanbul merkez otellerinden. (<em>Alım saatleri değişebilir; rezervasyon sırasında teyit edin.</em>)</li>
    <li><strong>Dönüş Saati:</strong> Öğleden sonra, yaklaşık 16:30.</li>
    <li><strong>Dil Seçenekleri:</strong> İngilizce, Almanca, Arapça.</li>
    <li><strong>Uygun Olmayanlar:</strong> Yürüme zorluğu çeken misafirler için uygun değildir.</li>
</ul>

<h2>Fiyata Dahil Olanlar</h2>
<ul>
    <li>Otelden gidiş-dönüş transferler</li>
    <li>Konforlu, klimalı otobüs ile ulaşım</li>
    <li>Rehber eşliğinde yürüyüş turu ve uzman yorumları</li>
</ul>

<h2>Fiyata Dahil Olmayanlar</h2>
<ul>
    <li>İçecekler</li>
    <li>Müze giriş ücretleri</li>
    <li>Öğle yemeği (<em>Öğle yemeği yerel bir restoranda olacak ve katılımcılar yemeklerini doğrudan satın alabilirler.</em>)</li>
</ul>

<h2>Önemli Bilgiler</h2>
<ul>
    <li><strong>Topkapı Sarayı Kapanışı:</strong> Salı günleri kapalıdır ve alternatif bir tur programı sunulacaktır.</li>
    <li><strong>Sultanahmet Camii Ziyaretleri:</strong> Cuma günleri namaz nedeniyle ziyarete kapalıdır.</li>
    <li><strong>Yanınızda Getirmeniz Gerekenler:</strong> Kamera, rahat ayakkabılar ve giysiler.</li>
    <li><strong>Çocuk Girişi:</strong> Çocuklar müzelerde yaş doğrulaması için geçerli pasaport sunmalıdır.</li>
</ul>

<h2>Tur Programı</h2>
<h3>Sabah: Sultanahmet’te İkonik Eserler</h3>
<p>Gününüz otelden rahat bir şekilde alınarak başlar. Rehberiniz ve grubunuzla buluştuktan sonra macera İstanbul’un kalbinde başlar:</p>
<ul>
    <li><strong>Hipodrom:</strong> Eski araba yarışları ve halka açık törenler için kullanılan bu tarihi arenayı keşfedin. Alman Çeşmesi, Yılanlı Sütun ve Dikilitaş gibi anıtları hayranlıkla izleyin.</li>
    <li><strong>Sultanahmet Camii:</strong> Parlak mavi İznik çinileri ve huzurlu atmosferiyle ünlü bu mimari harikaya adım atın. (<em>Cuma günleri kapalıdır.</em>)</li>
    <li><strong>Ayasofya:</strong> Bizans kilisesinden Osmanlı camisine dönüşen bu antik bazilikanın nefes kesici mimarisine hayran kalın, şimdi UNESCO Dünya Mirası Listesi'nde bir müze. (<em>Pazartesi günleri kapalıdır; alternatif olarak Yerebatan Sarnıcı’na ziyaret düzenlenecektir.</em>)</li>
</ul>

<h3>Öğle Arası: Kapalı Çarşı & Öğle Yemeği</h3>
<p>Dünyanın en büyük ve en eski kapalı çarşılarından biri olan Kapalı Çarşı’nın canlı atmosferine dalın. 4.000’den fazla dükkanıyla bu hareketli merkez baharatlardan tekstil ürünlerine ve eşsiz hediyeliklere kadar her şeyi sunuyor. Pazarlık becerilerinizi geliştirin ve bu canlı enerjinin tadını çıkarın.</p>
<p>Yerel bir restoranda öğle yemeği molası verin (<em>fiyata dahil değildir</em>).</p>

<h3>Öğleden Sonra: Sultanların Türbeleri & Topkapı Sarayı</h3>
<ul>
    <li><strong>Sultanların Türbeleri:</strong> Beş Osmanlı sultanının güzelce süslenmiş dinlenme yerlerini ziyaret edin, 16. yüzyıla ait seramik tasarımlarıyla dikkat çekiyor.</li>
    <li><strong>Topkapı Sarayı:</strong> Bu etkileyici sarayı ziyaret ederek turunuzu tamamlayın, Osmanlı İmparatorluğu’nun gücünün merkeziydi. İmparatorluk mücevherleri, tören kıyafetleri ve geçmiş yüzyıllardan eserler gibi hazinelerini keşfedin. (<em>Salı günleri kapalıdır.</em>)</li>
</ul>

<h2>Ek Bilgiler</h2>
<ul>
    <li><strong>Açık Günler:</strong> Her gün (<em>Sultanahmet Camii için Cuma ve Topkapı Sarayı için Salı günleri hariç</em>).</li>
    <li><strong>Süre:</strong> Tam gün, yaklaşık 8 saat.</li>
    <li><strong>Grup Boyutu:</strong> Kişiselleştirilmiş bir deneyim için küçük gruplar.</li>
    <li><strong>Rezervasyon İpucu:</strong> Yerinizin garanti altına alınması için önceden rezervasyon önerilir.</li>
</ul>

<h2>Hemen Rezervasyon Yapın</h2>
<p>İstanbul’un zengin tarihi ve canlı kültürüne bu inanılmaz yolculuğu kaçırmayın. Turunuzu şimdi rezerve edin ve şehrin zamansız cazibesinin sizi büyülemesine izin verin!</p>

        `,
        ar: `
        <h1>التراث البيزنطي والعثماني – المسجد الأزرق، آيا صوفيا، البازار الكبير وقصر توبكابي</h1>
    <h2>أبرز معالم الجولة</h2>
    <ul>
        <li><strong>استكشف التاريخ:</strong> انغمس في التاريخ الغني لإسطنبول، واستكشف المعالم البيزنطية والعثمانية الأيقونية.</li>
        <li><strong>الكنوز الثقافية:</strong> قم بزيارة مواقع التراث العالمي لليونسكو: آيا صوفيا، المسجد الأزرق الرائع، والبازار الكبير النابض بالحياة.</li>
        <li><strong>قصر توبكابي:</strong> ادخل إلى العالم الفاخر للسلاطين العثمانيين مع جولة إرشادية في مقر إقامتهم.</li>
        <li><strong>إرشاد احترافي:</strong> تعلم القصص الجذابة والرؤى التاريخية من دليل محترف متعدد اللغات.</li>
    </ul>

    <h2>تفاصيل الجولة</h2>
    <ul>
        <li><strong>الاستلام من الفندق:</strong> بين الساعة 08:30 و 09:30 من فنادق وسط إسطنبول. (<em>تختلف أوقات الاستلام؛ يرجى التأكيد عند الحجز.</em>)</li>
        <li><strong>وقت العودة:</strong> بعد الظهر، حوالي الساعة 4:30 مساءً.</li>
        <li><strong>خيارات اللغة:</strong> الإنجليزية، الألمانية، العربية.</li>
        <li><strong>غير مناسب لـ:</strong> الضيوف الذين يعانون من صعوبات في المشي.</li>
    </ul>

    <h2>ما هو مشمول</h2>
    <ul>
        <li>النقل من وإلى الفندق</li>
        <li>المواصلات بالحافلة المكيفة والمريحة</li>
        <li>جولة سيراً على الأقدام مع تعليق احترافي</li>
    </ul>

    <h2>ما هو غير مشمول</h2>
    <ul>
        <li>المشروبات</li>
        <li>رسوم دخول المتاحف</li>
        <li>الغداء (<em>سيتم تناول الغداء في مطعم محلي، ويمكن للمشاركين شراء وجباتهم مباشرةً.</em>)</li>
    </ul>

    <h2>معلومات مهمة</h2>
    <ul>
        <li><strong>إغلاق قصر توبكابي:</strong> مغلق أيام الثلاثاء، وسيتم توفير برنامج جولة بديل.</li>
        <li><strong>زيارات المسجد الأزرق:</strong> غير متاحة أيام الجمعة بسبب الصلاة.</li>
        <li><strong>ما الذي يجب إحضاره:</strong> كاميرا، أحذية وملابس مريحة.</li>
        <li><strong>دخول الأطفال:</strong> يجب على الأطفال تقديم جوازات سفر صالحة للتحقق من العمر في المتاحف.</li>
    </ul>

    <h2>برنامج الجولة</h2>
    <h3>الصباح: المعالم الأيقونية في السلطان أحمد</h3>
    <p>يبدأ يومك بنقل مريح من الفندق. بعد مقابلة دليلك ومجموعتك، تبدأ المغامرة في قلب إسطنبول:</p>
    <ul>
        <li><strong>ميدان سباق الخيل:</strong> استكشف هذا الساحة التاريخية التي كانت تُستخدم لسباقات العربات والمناسبات العامة. استمتع بالآثار، بما في ذلك النافورة الألمانية، عمود الثعبان، ومسلة ثيودوسيوس.</li>
        <li><strong>المسجد الأزرق:</strong> ادخل إلى هذا العجائب المعمارية المشهورة ببلاط إزنيق الأزرق اللامع وأجوائها الهادئة. (<em>مغلق أيام الجمعة.</em>)</li>
        <li><strong>آيا صوفيا:</strong> استمتع بالهندسة المعمارية المذهلة لهذه البازيليكا القديمة، وهي تحفة فنية انتقلت من كنيسة بيزنطية إلى مسجد عثماني، وهي الآن متحف مدرج في قائمة التراث العالمي لليونسكو. (<em>مغلق أيام الاثنين؛ سيتم ترتيب زيارة بديلة إلى صهريج البازيليك.</em>)</li>
    </ul>

    <h3>منتصف النهار: البازار الكبير والغداء</h3>
    <p>انغمس في الأجواء النابضة بالحياة للبازار الكبير، أحد أكبر وأقدم الأسواق المغطاة في العالم. مع أكثر من 4000 متجر، يقدم هذا المركز النابض بالحياة كل شيء من التوابل والمنسوجات إلى الهدايا التذكارية الفريدة. استمتع بممارسة مهاراتك في المساومة واستمتع بالطاقة النابضة.</p>
    <p>استمتع باستراحة غداء في مطعم محلي (<em>غير مشمول بالسعر</em>).</p>

    <h3>بعد الظهر: أضرحة السلاطين وقصر توبكابي</h3>
    <ul>
        <li><strong>أضرحة السلاطين:</strong> قم بزيارة أماكن الراحة المزخرفة لخمسة سلاطين عثمانيين، التي تعرض تصاميم خزفية رائعة من القرن السادس عشر.</li>
        <li><strong>قصر توبكابي:</strong> اختتم جولتك بزيارة هذا القصر الرائع، الذي كان مركز القوة العثمانية. استكشف كنوزه، بما في ذلك الجواهر الإمبراطورية، والأزياء الاحتفالية، والتحف من القرون الماضية. (<em>مغلق أيام الثلاثاء.</em>)</li>
    </ul>

    <h2>معلومات إضافية</h2>
    <ul>
        <li><strong>أيام العمل:</strong> يومياً (<em>باستثناء أيام الجمعة للمسجد الأزرق وأيام الثلاثاء لقصر توبكابي</em>).</li>
        <li><strong>المدة:</strong> يوم كامل، حوالي 8 ساعات.</li>
        <li><strong>حجم المجموعة:</strong> مجموعات صغيرة لضمان تجربة مخصصة.</li>
        <li><strong>نصيحة الحجز:</strong> يُنصح بالحجز المسبق لضمان مقعدك.</li>
    </ul>

    <h2>احجز مكانك الآن</h2>
    <p>لا تفوت هذه الفرصة لاكتشاف التاريخ الغني والثقافة النابضة لإسطنبول. احجز جولتك الآن ودع سحر المدينة يأسر قلبك!</p>
        `,
        zh: `
          <h1>拜占庭与奥斯曼遗产 – 蓝色清真寺、圣索菲亚大教堂、大巴扎和托普卡帕宫</h1>
    <h2>行程亮点</h2>
    <ul>
        <li><strong>探索历史：</strong>沉浸在伊斯坦布尔丰富的历史中，探索标志性的拜占庭和奥斯曼地标。</li>
        <li><strong>文化瑰宝：</strong>参观联合国教科文组织世界遗产名录中的圣索菲亚大教堂、宏伟的蓝色清真寺和充满活力的大巴扎。</li>
        <li><strong>托普卡帕宫：</strong>在专业导游的带领下，进入奥斯曼苏丹的奢华世界，参观他们的住所。</li>
        <li><strong>专业导览：</strong>从多语言的专业导游那里了解迷人的故事和历史见解。</li>
    </ul>

    <h2>行程详情</h2>
    <ul>
        <li><strong>酒店接送：</strong>从伊斯坦布尔市中心酒店接送时间为早上08:30至09:30。（<em>接送时间可能会有所变化，请在预订时确认。</em>）</li>
        <li><strong>返回时间：</strong>下午，约16:30。</li>
        <li><strong>语言选项：</strong>英语、德语、阿拉伯语。</li>
        <li><strong>不适合：</strong>行动不便的客人。</li>
    </ul>

    <h2>费用包含</h2>
    <ul>
        <li>酒店往返接送服务</li>
        <li>舒适的空调巴士交通</li>
        <li>由专业导游讲解的徒步游览</li>
    </ul>

    <h2>费用不包含</h2>
    <ul>
        <li>饮品</li>
        <li>博物馆门票</li>
        <li>午餐（<em>午餐将在当地餐厅进行，参与者可自行购买。</em>）</li>
    </ul>

    <h2>重要信息</h2>
    <ul>
        <li><strong>托普卡帕宫关闭：</strong>托普卡帕宫周二关闭，将提供替代行程。</li>
        <li><strong>蓝色清真寺参观：</strong>由于礼拜，周五不开放参观。</li>
        <li><strong>携带物品：</strong>相机、舒适的鞋子和服装。</li>
        <li><strong>儿童入场：</strong>儿童在博物馆需要出示有效护照以验证年龄。</li>
    </ul>

    <h2>行程概览</h2>
    <h3>上午：苏丹艾哈迈德的标志性地标</h3>
    <p>您的一天将从舒适的酒店接送开始。与导游和团队会合后，冒险从伊斯坦布尔的中心开始：</p>
    <ul>
        <li><strong>古罗马竞技场：</strong>探索这座曾用于战车比赛和公共仪式的历史竞技场。欣赏德式喷泉、蛇柱和狄奥多西方尖碑等古迹。</li>
        <li><strong>蓝色清真寺：</strong>步入这座以耀眼的蓝色伊兹尼克瓷砖和宁静氛围而闻名的建筑奇观。（<em>周五关闭。</em>）</li>
        <li><strong>圣索菲亚大教堂：</strong>欣赏这座古老大教堂的壮丽建筑，这是一座从拜占庭教堂转变为奥斯曼清真寺的杰作，现在是一座联合国教科文组织世界遗产博物馆。（<em>周一关闭；将安排参观地下蓄水池作为替代。</em>）</li>
    </ul>

    <h3>中午：大巴扎和午餐</h3>
    <p>沉浸在大巴扎热闹的氛围中，这是世界上最大和最古老的有顶市场之一。拥有超过4000家商店，这个繁忙的中心提供从香料和纺织品到独特纪念品的各种商品。练习您的议价技巧，享受充满活力的氛围。</p>
    <p>在当地餐厅享用午餐（<em>费用不包含在内</em>）。</p>

    <h3>下午：苏丹陵墓和托普卡帕宫</h3>
    <ul>
        <li><strong>苏丹陵墓：</strong>参观五位奥斯曼苏丹的精美装饰安息地，展示16世纪精致的陶瓷设计。</li>
        <li><strong>托普卡帕宫：</strong>通过参观这座宏伟的宫殿结束您的旅程，这里曾是奥斯曼帝国的权力中心。探索其珍宝，包括皇家珠宝、礼仪服装和过去几个世纪的文物。（<em>周二关闭。</em>）</li>
    </ul>

    <h2>附加信息</h2>
    <ul>
        <li><strong>开放日：</strong>每日开放（<em>蓝色清真寺周五和托普卡帕宫周二除外</em>）。</li>
        <li><strong>时长：</strong>全天，大约8小时。</li>
        <li><strong>团队规模：</strong>小团队以确保个性化体验。</li>
        <li><strong>预订提示：</strong>建议提前预订以确保您的位置。</li>
    </ul>

    <h2>立即预订您的行程</h2>
    <p>不要错过探索伊斯坦布尔丰富历史和充满活力文化的难忘之旅。立即预订您的行程，让这座城市的迷人魅力征服您！</p>
        `,
        it: `
    <h1>Eredità Bizantina e Ottomana – Moschea Blu, Basilica di Santa Sofia, Gran Bazaar e Palazzo Topkapi</h1>
    <h2>Punti Salienti del Tour</h2>
    <ul>
        <li><strong>Scopri la Storia:</strong> Immergiti nella ricca storia di Istanbul, esplorando i punti di riferimento iconici bizantini e ottomani.</li>
        <li><strong>Gioielli Culturali:</strong> Visita i siti patrimonio mondiale dell'UNESCO: la Basilica di Santa Sofia, la maestosa Moschea Blu e il vivace Gran Bazaar.</li>
        <li><strong>Palazzo Topkapi:</strong> Entra nel lussuoso mondo dei sultani ottomani con una visita guidata della loro residenza.</li>
        <li><strong>Guida Esperta:</strong> Scopri storie affascinanti e approfondimenti storici da una guida professionale multilingue.</li>
    </ul>

    <h2>Dettagli del Tour</h2>
    <ul>
        <li><strong>Pick-Up in Hotel:</strong> Tra le 08:30 e le 09:30 dagli hotel centrali di Istanbul. (<em>Gli orari possono variare; si prega di confermare al momento della prenotazione.</em>)</li>
        <li><strong>Orario di Ritorno:</strong> Pomeriggio, circa alle 16:30.</li>
        <li><strong>Opzioni Linguistiche:</strong> Inglese, Tedesco, Arabo.</li>
        <li><strong>Non Adatto a:</strong> Ospiti con difficoltà di deambulazione.</li>
    </ul>

    <h2>Cosa è Incluso</h2>
    <ul>
        <li>Trasferimenti da e per l'hotel</li>
        <li>Trasporto in autobus comodo e climatizzato</li>
        <li>Tour a piedi con guida esperta</li>
    </ul>

    <h2>Cosa Non è Incluso</h2>
    <ul>
        <li>Bevande</li>
        <li>Biglietti d'ingresso ai musei</li>
        <li>Pranzo (<em>Il pranzo sarà in un ristorante locale e i partecipanti potranno acquistare i loro pasti direttamente.</em>)</li>
    </ul>

    <h2>Informazioni Importanti</h2>
    <ul>
        <li><strong>Chiusura del Palazzo Topkapi:</strong> Chiuso il martedì, verrà fornito un itinerario alternativo.</li>
        <li><strong>Visite alla Moschea Blu:</strong> Non disponibili il venerdì a causa delle preghiere.</li>
        <li><strong>Cosa Portare:</strong> Macchina fotografica, scarpe comode e abbigliamento adeguato.</li>
        <li><strong>Ingresso Bambini:</strong> I bambini devono presentare un passaporto valido per la verifica dell'età nei musei.</li>
    </ul>

    <h2>Panoramica dell'Itinerario</h2>
    <h3>Mattina: Monumenti Iconici a Sultanahmet</h3>
    <p>La tua giornata inizia con un comodo pick-up dall'hotel. Dopo aver incontrato la tua guida e il gruppo, l'avventura inizia nel cuore di Istanbul:</p>
    <ul>
        <li><strong>Ippodromo:</strong> Esplora questa arena storica, un tempo utilizzata per le corse di carri e le cerimonie pubbliche. Ammira i monumenti, tra cui la Fontana Tedesca, la Colonna Serpentina e l'Obelisco di Teodosio.</li>
        <li><strong>Moschea Blu:</strong> Entra in questo capolavoro architettonico, famoso per le sue splendide piastrelle blu di Iznik e per la sua atmosfera serena. (<em>Chiuso il venerdì.</em>)</li>
        <li><strong>Basilica di Santa Sofia:</strong> Ammira l'architettura mozzafiato di questa antica basilica, un capolavoro che è passato da chiesa bizantina a moschea ottomana, ora un museo patrimonio dell'UNESCO. (<em>Chiuso il lunedì; sarà organizzata una visita alternativa alla Cisterna Basilica.</em>)</li>
    </ul>

    <h3>Mezzogiorno: Gran Bazaar e Pranzo</h3>
    <p>Immergiti nell'atmosfera vivace del Gran Bazaar, uno dei mercati coperti più grandi e antichi del mondo. Con oltre 4.000 negozi, questo vivace centro offre di tutto, dalle spezie ai tessuti fino ai souvenir unici. Pratica le tue abilità di contrattazione e goditi l'energia vibrante.</p>
    <p>Fai una pausa pranzo in un ristorante locale (<em>non incluso nel prezzo</em>).</p>

    <h3>Pomeriggio: Tombe dei Sultani e Palazzo Topkapi</h3>
    <ul>
        <li><strong>Tombe dei Sultani:</strong> Visita i luoghi di riposo riccamente decorati di cinque sultani ottomani, che mostrano intricati disegni ceramici del XVI secolo.</li>
        <li><strong>Palazzo Topkapi:</strong> Concludi il tuo tour con una visita a questo splendido palazzo, un tempo sede del potere ottomano. Esplora i suoi tesori, tra cui gioielli imperiali, costumi cerimoniali e manufatti di secoli passati. (<em>Chiuso il martedì.</em>)</li>
    </ul>

    <h2>Informazioni Aggiuntive</h2>
    <ul>
        <li><strong>Giorni di Apertura:</strong> Tutti i giorni (<em>esclusi i venerdì per la Moschea Blu e i martedì per il Palazzo Topkapi</em>).</li>
        <li><strong>Durata:</strong> Intera giornata, circa 8 ore.</li>
        <li><strong>Dimensione del Gruppo:</strong> Gruppi piccoli per garantire un'esperienza personalizzata.</li>
        <li><strong>Consiglio per la Prenotazione:</strong> Si consiglia la prenotazione anticipata per assicurarsi un posto.</li>
    </ul>

    <h2>Prenota Ora il Tuo Posto</h2>
    <p>Non perdere questa incredibile opportunità di esplorare la ricca storia e la cultura vibrante di Istanbul. Prenota ora il tuo tour e lascia che il fascino senza tempo della città ti conquisti!</p>
        `,
        es: `
    <h1>Herencia Bizantina y Otomana – Mezquita Azul, Santa Sofía, Gran Bazar y Palacio Topkapi</h1>
    <h2>Puntos Destacados del Tour</h2>
    <ul>
        <li><strong>Descubre la Historia:</strong> Sumérgete en la rica historia de Estambul explorando los emblemáticos monumentos bizantinos y otomanos.</li>
        <li><strong>Tesoros Culturales:</strong> Visita los sitios declarados Patrimonio de la Humanidad por la UNESCO: Santa Sofía, la majestuosa Mezquita Azul y el vibrante Gran Bazar.</li>
        <li><strong>Palacio Topkapi:</strong> Adéntrate en el lujoso mundo de los sultanes otomanos con una visita guiada a su residencia.</li>
        <li><strong>Guía Experta:</strong> Aprende fascinantes historias y datos históricos de un guía profesional multilingüe.</li>
    </ul>

    <h2>Detalles del Tour</h2>
    <ul>
        <li><strong>Recogida en el Hotel:</strong> Entre las 08:30 y las 09:30 desde hoteles del centro de Estambul. (<em>Los horarios pueden variar; por favor confirma al momento de la reserva.</em>)</li>
        <li><strong>Hora de Regreso:</strong> Por la tarde, aproximadamente a las 16:30.</li>
        <li><strong>Opciones de Idioma:</strong> Inglés, Alemán, Árabe.</li>
        <li><strong>No Apto para:</strong> Personas con dificultades para caminar.</li>
    </ul>

    <h2>Qué Incluye</h2>
    <ul>
        <li>Traslados de ida y vuelta desde el hotel</li>
        <li>Transporte en autobús cómodo y climatizado</li>
        <li>Recorrido a pie con guía experto</li>
    </ul>

    <h2>Qué No Incluye</h2>
    <ul>
        <li>Bebidas</li>
        <li>Entradas a los museos</li>
        <li>Almuerzo (<em>El almuerzo será en un restaurante local y los participantes podrán comprar sus comidas directamente.</em>)</li>
    </ul>

    <h2>Información Importante</h2>
    <ul>
        <li><strong>Cierre del Palacio Topkapi:</strong> Cerrado los martes, se ofrecerá un itinerario alternativo.</li>
        <li><strong>Visitas a la Mezquita Azul:</strong> No disponible los viernes debido a las oraciones.</li>
        <li><strong>Qué Llevar:</strong> Cámara, calzado cómodo y ropa adecuada.</li>
        <li><strong>Entrada para Niños:</strong> Los niños deben presentar un pasaporte válido para verificar su edad en los museos.</li>
    </ul>

    <h2>Resumen del Itinerario</h2>
    <h3>Mañana: Monumentos Icónicos en Sultanahmet</h3>
    <p>Tu día comienza con una cómoda recogida en el hotel. Después de reunirte con tu guía y grupo, la aventura comienza en el corazón de Estambul:</p>
    <ul>
        <li><strong>Hipódromo:</strong> Explora esta histórica arena utilizada para carreras de carros y ceremonias públicas. Admira monumentos como la Fuente Alemana, la Columna Serpentina y el Obelisco de Teodosio.</li>
        <li><strong>Mezquita Azul:</strong> Entra en esta maravilla arquitectónica, famosa por sus deslumbrantes azulejos azules de Iznik y su ambiente sereno. (<em>Cerrada los viernes.</em>)</li>
        <li><strong>Santa Sofía:</strong> Maravíllate con la impresionante arquitectura de esta antigua basílica, una obra maestra que pasó de iglesia bizantina a mezquita otomana, ahora un museo declarado Patrimonio de la Humanidad por la UNESCO. (<em>Cerrada los lunes; se organizará una visita alternativa a la Cisterna Basílica.</em>)</li>
    </ul>

    <h3>Mediodía: Gran Bazar y Almuerzo</h3>
    <p>Sumérgete en la animada atmósfera del Gran Bazar, uno de los mercados cubiertos más grandes y antiguos del mundo. Con más de 4,000 tiendas, este animado centro ofrece de todo, desde especias y textiles hasta souvenirs únicos. Practica tus habilidades de regateo y disfruta de la energía vibrante.</p>
    <p>Disfruta de un descanso para almorzar en un restaurante local (<em>no incluido en el precio</em>).</p>

    <h3>Tarde: Tumbas de los Sultanes y Palacio Topkapi</h3>
    <ul>
        <li><strong>Tumbas de los Sultanes:</strong> Visita los ricamente decorados lugares de descanso de cinco sultanes otomanos, que muestran intrincados diseños cerámicos del siglo XVI.</li>
        <li><strong>Palacio Topkapi:</strong> Concluye tu tour con una visita a este magnífico palacio, que fue el centro del poder otomano. Explora sus tesoros, incluidos joyas imperiales, trajes ceremoniales y artefactos de siglos pasados. (<em>Cerrado los martes.</em>)</li>
    </ul>

    <h2>Información Adicional</h2>
    <ul>
        <li><strong>Días de Operación:</strong> Diario (<em>excepto los viernes para la Mezquita Azul y los martes para el Palacio Topkapi</em>).</li>
        <li><strong>Duración:</strong> Día completo, aproximadamente 8 horas.</li>
        <li><strong>Tamaño del Grupo:</strong> Grupos pequeños para garantizar una experiencia personalizada.</li>
        <li><strong>Consejo para Reservar:</strong> Se recomienda reservar con anticipación para asegurar tu lugar.</li>
    </ul>

    <h2>Reserva Tu Lugar Ahora</h2>
    <p>No te pierdas esta increíble oportunidad de explorar la rica historia y vibrante cultura de Estambul. ¡Reserva tu tour ahora y deja que el encanto atemporal de la ciudad te cautive!</p>
        `,
        ru: `
     <h1>Византийское и Османское наследие – Голубая мечеть, Айя-София, Гранд Базар и дворец Топкапы</h1>
    <h2>Основные моменты тура</h2>
    <ul>
        <li><strong>Исследуйте историю:</strong> Погрузитесь в богатую историю Стамбула, изучая знаковые византийские и османские памятники.</li>
        <li><strong>Культурные сокровища:</strong> Посетите объекты Всемирного наследия ЮНЕСКО: Айя-Софию, величественную Голубую мечеть и оживленный Гранд Базар.</li>
        <li><strong>Дворец Топкапы:</strong> Окунитесь в роскошный мир османских султанов с экскурсией по их резиденции.</li>
        <li><strong>Экспертное руководство:</strong> Узнайте увлекательные истории и исторические факты от профессионального многоязычного гида.</li>
    </ul>

    <h2>Детали тура</h2>
    <ul>
        <li><strong>Трансфер из отеля:</strong> С 08:30 до 09:30 из центральных отелей Стамбула. (<em>Время может варьироваться; уточняйте при бронировании.</em>)</li>
        <li><strong>Время возвращения:</strong> Во второй половине дня, примерно в 16:30.</li>
        <li><strong>Языковые опции:</strong> Английский, немецкий, арабский.</li>
        <li><strong>Не подходит для:</strong> Гостей с трудностями передвижения.</li>
    </ul>

    <h2>Что включено</h2>
    <ul>
        <li>Трансфер из отеля и обратно</li>
        <li>Комфортабельный автобус с кондиционером</li>
        <li>Пешеходная экскурсия с профессиональным гидом</li>
    </ul>

    <h2>Что не включено</h2>
    <ul>
        <li>Напитки</li>
        <li>Входные билеты в музеи</li>
        <li>Обед (<em>Обед будет организован в местном ресторане, и участники могут оплатить его самостоятельно.</em>)</li>
    </ul>

    <h2>Важная информация</h2>
    <ul>
        <li><strong>Закрытие дворца Топкапы:</strong> По вторникам дворец закрыт, и будет предложен альтернативный маршрут.</li>
        <li><strong>Посещение Голубой мечети:</strong> По пятницам мечеть закрыта для посещений из-за молитвы.</li>
        <li><strong>Что взять с собой:</strong> Камеру, удобную обувь и одежду.</li>
        <li><strong>Детский вход:</strong> Дети должны предъявить действующий паспорт для подтверждения возраста в музеях.</li>
    </ul>

    <h2>Программа тура</h2>
    <h3>Утро: Знаковые достопримечательности Султанахмета</h3>
    <p>Ваш день начнется с удобного трансфера из отеля. После встречи с гидом и группой приключение начинается в самом сердце Стамбула:</p>
    <ul>
        <li><strong>Ипподром:</strong> Исследуйте эту историческую арену, когда-то использовавшуюся для гонок на колесницах и общественных мероприятий. Полюбуйтесь памятниками, включая Немецкий фонтан, Змеиный столб и Обелиск Феодосия.</li>
        <li><strong>Голубая мечеть:</strong> Войдите в этот архитектурный шедевр, известный своими ослепительно синими изникскими плитками и спокойной атмосферой. (<em>Закрыта по пятницам.</em>)</li>
        <li><strong>Айя-София:</strong> Полюбуйтесь захватывающей архитектурой этого древнего собора, шедевра, который перешел от византийской церкви к османской мечети, а теперь является музеем, входящим в список ЮНЕСКО. (<em>Закрыта по понедельникам; будет предложен альтернативный визит в Цистерну Базилику.</em>)</li>
    </ul>

    <h3>Полдень: Гранд Базар и обед</h3>
    <p>Окунитесь в оживленную атмосферу Гранд Базара, одного из крупнейших и старейших крытых рынков в мире. С более чем 4000 магазинов, этот оживленный центр предлагает все: от специй и текстиля до уникальных сувениров. Попробуйте свои силы в торге и насладитесь живой энергией.</p>
    <p>Сделайте перерыв на обед в местном ресторане (<em>не включено в стоимость</em>).</p>

    <h3>После обеда: Гробницы султанов и дворец Топкапы</h3>
    <ul>
        <li><strong>Гробницы султанов:</strong> Посетите красиво украшенные места отдыха пяти османских султанов, демонстрирующие изысканный керамический дизайн XVI века.</li>
        <li><strong>Дворец Топкапы:</strong> Завершите тур посещением этого великолепного дворца, который был центром османской власти. Исследуйте его сокровища, включая имперские драгоценности, церемониальные костюмы и артефакты прошлых веков. (<em>Закрыт по вторникам.</em>)</li>
    </ul>

    <h2>Дополнительная информация</h2>
    <ul>
        <li><strong>Дни работы:</strong> Ежедневно (<em>кроме пятниц для Голубой мечети и вторников для дворца Топкапы</em>).</li>
        <li><strong>Продолжительность:</strong> Полный день, примерно 8 часов.</li>
        <li><strong>Размер группы:</strong> Небольшие группы для персонализированного опыта.</li>
        <li><strong>Совет по бронированию:</strong> Рекомендуется заранее бронировать, чтобы обеспечить себе место.</li>
    </ul>

    <h2>Забронируйте ваше место уже сегодня</h2>
    <p>Не упустите возможность отправиться в это невероятное путешествие по богатой истории и яркой культуре Стамбула. Забронируйте тур прямо сейчас и позвольте очарованию этого города заворожить вас!</p>
`,
    },
    "/tours/paragliding-fethiye-oludeniz": {
        en: `
         <h1>Experience the Thrill of Paragliding Over Oludeniz</h1>
    <p>
        Discover the breathtaking beauty of Oludeniz from the sky! With its world-renowned turquoise waters and lush mountains, Oludeniz offers a paragliding experience like no other. 
        Perfect for thrill-seekers and nature lovers alike, this 2-hour adventure is your chance to soar through the skies and enjoy panoramic views of one of Turkey’s most iconic locations.
    </p>

    <h2>Activity Highlights</h2>
    <ul>
        <li><strong>Breathtaking Views:</strong> Marvel at the stunning turquoise waters, golden beaches, and lush mountains of Oludeniz as you glide through the sky.</li>
        <li><strong>Professional Instructors:</strong> Fly tandem with experienced and certified paragliding pilots for a safe and exhilarating experience.</li>
        <li><strong>Adrenaline Rush:</strong> Feel the thrill of launching off Babadag Mountain, one of the world’s top paragliding destinations.</li>
        <li><strong>Memorable Experience:</strong> Capture your once-in-a-lifetime flight with optional photo and video packages (available for purchase).</li>
        <li><strong>Flexible Booking:</strong> Enjoy free cancellation up to 24 hours before your scheduled flight.</li>
        <li><strong>Female Pilots:</strong> If you prefer a female pilot, please contact us in advance to make arrangements.</li>
    </ul>

    <h2>Tour Details</h2>
    <ul>
        <li><strong>Activity Type:</strong> Extreme Adventure</li>
        <li><strong>Duration:</strong> 2 Hours (including preparation, flight, and landing)</li>
        <li><strong>Free Cancellation Period:</strong> Up to 24 hours before the activity.</li>
    </ul>

    <h2>What’s Included</h2>
    <ul>
        <li>Tandem paragliding with a professional pilot</li>
        <li>All necessary safety equipment</li>
        <li>Transportation to the launch site (if applicable)</li>
        <li>Briefing and safety instructions</li>
    </ul>

    <h2>What’s Not Included</h2>
    <ul>
        <li>Photos and videos of your flight (available for purchase)</li>
        <li>Personal expenses</li>
    </ul>

    <h2>Important Information</h2>
    <ul>
        <li><strong>Age Restrictions:</strong> Participants must be aged 16 or older.</li>
        <li><strong>Weight Limit:</strong> Maximum weight is 100 kg (220 lbs).</li>
        <li><strong>Health Requirements:</strong> Not suitable for individuals with heart conditions, back problems, or pregnant women.</li>
        <li><strong>What to Wear:</strong> Comfortable clothing and closed-toe shoes.</li>
    </ul>

    <h2>Booking & Address Details</h2>
    <p>
        All address and meeting point details will be sent upon confirmation of your booking.
    </p>

    <h2>Book Now and Soar Above Oludeniz!</h2>
    <p>
        Don’t miss the chance to experience one of the world’s most iconic paragliding spots. Whether you’re an adventure enthusiast or a first-timer, this flight over Oludeniz will be a memory you’ll treasure forever.
    </p>
        `,
        tr: `
        <h1>Ölüdeniz Üzerinde Yamaç Paraşütü Heyecanını Yaşayın</h1>
    <p>
        Ölüdeniz'in büyüleyici güzelliğini gökyüzünden keşfedin! Dünyaca ünlü turkuaz suları ve yemyeşil dağlarıyla Ölüdeniz, başka hiçbir şeye benzemeyen bir yamaç paraşütü deneyimi sunuyor. 
        Macera tutkunları ve doğa severler için mükemmel olan bu 2 saatlik macera, gökyüzünde süzülerek Türkiye’nin en ikonik yerlerinden birinin panoramik manzaralarını izleme şansı sunuyor.
    </p>

    <h2>Etkinlik Özellikleri</h2>
    <ul>
        <li><strong>Nefes Kesici Manzaralar:</strong> Ölüdeniz'in muhteşem turkuaz suları, altın kumsalları ve yemyeşil dağlarının büyüleyici manzaralarına hayran kalın.</li>
        <li><strong>Profesyonel Eğitmenler:</strong> Deneyimli ve sertifikalı yamaç paraşütü pilotları ile tandem uçuş yaparak güvenli ve heyecan verici bir deneyim yaşayın.</li>
        <li><strong>Adrenalin Dolu Anlar:</strong> Dünyanın en iyi yamaç paraşütü noktalarından biri olan Babadağ Dağı'ndan atlamanın heyecanını yaşayın.</li>
        <li><strong>Unutulmaz Deneyim:</strong> Hayatınızda bir kez yaşayacağınız bu uçuşun fotoğraf ve video paketlerini satın alarak anılarınızı ölümsüzleştirin.</li>
        <li><strong>Esnek Rezervasyon:</strong> Uçuşunuzdan 24 saat öncesine kadar ücretsiz iptal imkanı.</li>
        <li><strong>Kadın Pilotlar:</strong> Kadın bir pilot tercih ediyorsanız, düzenleme yapmak için lütfen önceden bizimle iletişime geçin.</li>
    </ul>

    <h2>Tur Detayları</h2>
    <ul>
        <li><strong>Etkinlik Türü:</strong> Ekstrem Macera</li>
        <li><strong>Süre:</strong> 2 Saat (hazırlık, uçuş ve iniş dahil)</li>
        <li><strong>Ücretsiz İptal Süresi:</strong> Etkinlikten 24 saat öncesine kadar.</li>
    </ul>

    <h2>Dahil Olanlar</h2>
    <ul>
        <li>Profesyonel bir pilot ile tandem yamaç paraşütü</li>
        <li>Tüm gerekli güvenlik ekipmanları</li>
        <li>Kalkış alanına ulaşım (uygulanabilir ise)</li>
        <li>Brifing ve güvenlik talimatları</li>
    </ul>

    <h2>Dahil Olmayanlar</h2>
    <ul>
        <li>Uçuşunuzun fotoğraf ve videoları (satın alınabilir)</li>
        <li>Kişisel harcamalar</li>
    </ul>

    <h2>Önemli Bilgiler</h2>
    <ul>
        <li><strong>Yaş Sınırı:</strong> Katılımcılar en az 16 yaşında olmalıdır.</li>
        <li><strong>Ağırlık Limiti:</strong> Maksimum ağırlık 100 kg (220 lbs).</li>
        <li><strong>Sağlık Koşulları:</strong> Kalp rahatsızlıkları, sırt problemleri veya hamilelik durumunda uygun değildir.</li>
        <li><strong>Ne Giymeli:</strong> Rahat kıyafetler ve kapalı burunlu ayakkabılar.</li>
    </ul>

    <h2>Rezervasyon ve Adres Detayları</h2>
    <p>
        Tüm adres ve buluşma noktası bilgileri rezervasyon onayı sonrasında gönderilecektir.
    </p>

    <h2>Hemen Rezervasyon Yapın ve Ölüdeniz'in Üzerinde Süzülün!</h2>
    <p>
        Dünyanın en ikonik yamaç paraşütü noktalarından birinde uçma fırsatını kaçırmayın. İster bir macera tutkunu olun, ister ilk kez uçuyor olun, Ölüdeniz üzerindeki bu uçuş hayatınız boyunca unutamayacağınız bir anı olacak.
    </p>
        `,
        ru: `
          <h1>Испытайте острые ощущения параглайдинга над Олюденизом</h1>
    <p>
        Откройте для себя захватывающую красоту Олюдениза с высоты птичьего полета! С его всемирно известными бирюзовыми водами и зелеными горами, Олюдениз предлагает уникальный опыт параглайдинга. 
        Идеально подходит для любителей приключений и природы, этот двухчасовой тур подарит вам возможность парить в небе и наслаждаться панорамными видами на один из самых знаковых регионов Турции.
    </p>

    <h2>Особенности мероприятия</h2>
    <ul>
        <li><strong>Захватывающие виды:</strong> Полюбуйтесь потрясающими бирюзовыми водами, золотыми пляжами и зелеными горами Олюдениза, паря в небе.</li>
        <li><strong>Профессиональные инструкторы:</strong> Летайте в тандеме с опытными и сертифицированными пилотами параглайдинга, чтобы получить безопасный и захватывающий опыт.</li>
        <li><strong>Адреналин:</strong> Почувствуйте прилив адреналина, взлетая с горы Бабадаг, одного из лучших мест для параглайдинга в мире.</li>
        <li><strong>Незабываемые впечатления:</strong> Сохраните этот уникальный момент вашего полета с помощью дополнительных фото- и видеопакетов (доступны для покупки).</li>
        <li><strong>Гибкое бронирование:</strong> Бесплатная отмена бронирования до 24 часов до запланированного полета.</li>
        <li><strong>Женщины-пилоты:</strong> Если вы предпочитаете женщину-пилота, пожалуйста, свяжитесь с нами заранее для организации.</li>
    </ul>

    <h2>Детали тура</h2>
    <ul>
        <li><strong>Тип мероприятия:</strong> Экстремальное приключение</li>
        <li><strong>Продолжительность:</strong> 2 часа (включая подготовку, полет и посадку)</li>
        <li><strong>Бесплатная отмена:</strong> До 24 часов до начала мероприятия.</li>
    </ul>

    <h2>Что включено</h2>
    <ul>
        <li>Тандемный параглайдинг с профессиональным пилотом</li>
        <li>Все необходимое оборудование для безопасности</li>
        <li>Трансфер к месту взлета (если применимо)</li>
        <li>Инструктаж и правила безопасности</li>
    </ul>

    <h2>Что не включено</h2>
    <ul>
        <li>Фотографии и видео вашего полета (доступны для покупки)</li>
        <li>Личные расходы</li>
    </ul>

    <h2>Важная информация</h2>
    <ul>
        <li><strong>Возрастное ограничение:</strong> Участники должны быть не моложе 16 лет.</li>
        <li><strong>Ограничение по весу:</strong> Максимальный вес 100 кг (220 фунтов).</li>
        <li><strong>Требования к здоровью:</strong> Не подходит для людей с заболеваниями сердца, проблемами со спиной или для беременных женщин.</li>
        <li><strong>Что надеть:</strong> Удобная одежда и обувь с закрытым носком.</li>
    </ul>

    <h2>Детали бронирования и адрес</h2>
    <p>
        Все адреса и информация о месте встречи будут предоставлены после подтверждения бронирования.
    </p>

    <h2>Забронируйте сейчас и парите над Олюденизом!</h2>
    <p>
        Не упустите возможность испытать одно из самых знаковых мест для параглайдинга в мире. Независимо от того, являетесь ли вы любителем приключений или новичком, этот полет над Олюденизом станет воспоминанием, которое вы будете беречь всю жизнь.
    </p>
        `,
        es: `
          <h1>Experimenta la Emoción del Parapente sobre Oludeniz</h1>
    <p>
        ¡Descubre la impresionante belleza de Oludeniz desde el cielo! Con sus aguas turquesas mundialmente famosas y montañas verdes, Oludeniz ofrece una experiencia de parapente como ninguna otra. 
        Perfecto para amantes de la aventura y la naturaleza, esta aventura de 2 horas te brinda la oportunidad de volar por los cielos y disfrutar de vistas panorámicas de uno de los lugares más icónicos de Turquía.
    </p>

    <h2>Aspectos Destacados de la Actividad</h2>
    <ul>
        <li><strong>Vistas Impresionantes:</strong> Maravíllate con las impresionantes aguas turquesas, playas doradas y montañas verdes de Oludeniz mientras vuelas por el cielo.</li>
        <li><strong>Instructores Profesionales:</strong> Vuela en tándem con pilotos de parapente experimentados y certificados para una experiencia segura y emocionante.</li>
        <li><strong>Adrenalina:</strong> Siente la emoción de despegar desde la montaña Babadag, uno de los destinos de parapente más importantes del mundo.</li>
        <li><strong>Experiencia Memorable:</strong> Captura tu vuelo único en la vida con paquetes opcionales de fotos y videos (disponibles para compra).</li>
        <li><strong>Reserva Flexible:</strong> Disfruta de cancelación gratuita hasta 24 horas antes de tu vuelo programado.</li>
        <li><strong>Pilotos Mujeres:</strong> Si prefieres una piloto mujer, por favor contáctanos con anticipación para hacer los arreglos necesarios.</li>
    </ul>

    <h2>Detalles del Tour</h2>
    <ul>
        <li><strong>Tipo de Actividad:</strong> Aventura Extrema</li>
        <li><strong>Duración:</strong> 2 horas (incluyendo preparación, vuelo y aterrizaje)</li>
        <li><strong>Periodo de Cancelación Gratuita:</strong> Hasta 24 horas antes de la actividad.</li>
    </ul>

    <h2>Qué Está Incluido</h2>
    <ul>
        <li>Parapente en tándem con un piloto profesional</li>
        <li>Todo el equipo de seguridad necesario</li>
        <li>Transporte al sitio de despegue (si aplica)</li>
        <li>Instrucciones de seguridad y sesión informativa</li>
    </ul>

    <h2>Qué No Está Incluido</h2>
    <ul>
        <li>Fotos y videos de tu vuelo (disponibles para compra)</li>
        <li>Gastos personales</li>
    </ul>

    <h2>Información Importante</h2>
    <ul>
        <li><strong>Restricciones de Edad:</strong> Los participantes deben tener al menos 16 años.</li>
        <li><strong>Límite de Peso:</strong> Peso máximo de 100 kg (220 lbs).</li>
        <li><strong>Requisitos de Salud:</strong> No apto para personas con problemas cardíacos, problemas de espalda o mujeres embarazadas.</li>
        <li><strong>Qué Vestir:</strong> Ropa cómoda y zapatos cerrados.</li>
    </ul>

    <h2>Detalles de Reserva y Dirección</h2>
    <p>
        Todos los detalles de la dirección y el punto de encuentro se enviarán tras la confirmación de tu reserva.
    </p>

    <h2>¡Reserva Ahora y Vuela sobre Oludeniz!</h2>
    <p>
        No te pierdas la oportunidad de experimentar uno de los lugares de parapente más icónicos del mundo. Ya seas un amante de las aventuras o un principiante, este vuelo sobre Oludeniz será un recuerdo que atesorarás para siempre.
    </p>
        `,
        it: `
          <h1>Vivi l'Emozione del Parapendio sopra Oludeniz</h1>
    <p>
        Scopri la bellezza mozzafiato di Oludeniz dal cielo! Con le sue acque turchesi rinomate in tutto il mondo e le montagne verdi, Oludeniz offre un'esperienza di parapendio unica. 
        Perfetto per gli amanti dell'avventura e della natura, questa avventura di 2 ore ti offre l'opportunità di volare nei cieli e goderti viste panoramiche di uno dei luoghi più iconici della Turchia.
    </p>

    <h2>Punti Salienti dell'Attività</h2>
    <ul>
        <li><strong>Vedute Mozzafiato:</strong> Ammira le straordinarie acque turchesi, le spiagge dorate e le montagne verdi di Oludeniz mentre voli nei cieli.</li>
        <li><strong>Istruttori Professionisti:</strong> Vola in tandem con piloti di parapendio esperti e certificati per un'esperienza sicura ed emozionante.</li>
        <li><strong>Scarica di Adrenalina:</strong> Prova l'emozione di decollare dal Monte Babadag, una delle migliori destinazioni al mondo per il parapendio.</li>
        <li><strong>Esperienza Indimenticabile:</strong> Cattura il tuo volo unico nella vita con pacchetti opzionali di foto e video (disponibili per l'acquisto).</li>
        <li><strong>Prenotazione Flessibile:</strong> Goditi la cancellazione gratuita fino a 24 ore prima del tuo volo programmato.</li>
        <li><strong>Piloti Donne:</strong> Se preferisci una pilota donna, contattaci in anticipo per organizzare tutto.</li>
    </ul>

    <h2>Dettagli del Tour</h2>
    <ul>
        <li><strong>Tipo di Attività:</strong> Avventura Estrema</li>
        <li><strong>Durata:</strong> 2 ore (inclusi preparazione, volo e atterraggio)</li>
        <li><strong>Periodo di Cancellazione Gratuita:</strong> Fino a 24 ore prima dell'attività.</li>
    </ul>

    <h2>Cosa È Incluso</h2>
    <ul>
        <li>Parapendio in tandem con un pilota professionista</li>
        <li>Tutta l'attrezzatura di sicurezza necessaria</li>
        <li>Trasporto al sito di decollo (se applicabile)</li>
        <li>Briefing e istruzioni di sicurezza</li>
    </ul>

    <h2>Cosa Non È Incluso</h2>
    <ul>
        <li>Foto e video del tuo volo (disponibili per l'acquisto)</li>
        <li>Spese personali</li>
    </ul>

    <h2>Informazioni Importanti</h2>
    <ul>
        <li><strong>Restrizioni di Età:</strong> I partecipanti devono avere almeno 16 anni.</li>
        <li><strong>Limite di Peso:</strong> Peso massimo di 100 kg (220 lbs).</li>
        <li><strong>Requisiti di Salute:</strong> Non adatto a persone con problemi cardiaci, problemi alla schiena o donne in gravidanza.</li>
        <li><strong>Cosa Indossare:</strong> Abbigliamento comodo e scarpe chiuse.</li>
    </ul>

    <h2>Dettagli di Prenotazione e Indirizzo</h2>
    <p>
        Tutti i dettagli sull'indirizzo e il punto d'incontro saranno inviati al momento della conferma della prenotazione.
    </p>

    <h2>Prenota Ora e Vola sopra Oludeniz!</h2>
    <p>
        Non perdere l'opportunità di vivere uno dei luoghi di parapendio più iconici al mondo. Che tu sia un appassionato di avventura o un principiante, questo volo sopra Oludeniz sarà un ricordo che conserverai per sempre.
    </p>
        `,
        ar: `
        <h1>اختبر إثارة الطيران المظلي فوق أولودينيز</h1>
    <p>
        اكتشف الجمال المذهل لأولودينيز من السماء! مع مياهها الفيروزية المشهورة عالميًا وجبالها الخضراء، تقدم أولودينيز تجربة طيران مظلي لا مثيل لها. 
        مثالية لعشاق المغامرة والطبيعة، توفر هذه المغامرة التي تستغرق ساعتين فرصة للطيران في السماء والاستمتاع بإطلالات بانورامية على واحدة من أكثر المواقع شهرة في تركيا.
    </p>

    <h2>أبرز معالم النشاط</h2>
    <ul>
        <li><strong>مناظر خلابة:</strong> استمتع بالمياه الفيروزية المذهلة، والشواطئ الذهبية، والجبال الخضراء لأولودينيز أثناء تحليقك في السماء.</li>
        <li><strong>مدربون محترفون:</strong> حلق بالطيران المظلي المزدوج مع طيارين معتمدين ومؤهلين لتجربة آمنة ومثيرة.</li>
        <li><strong>اندفاع الأدرينالين:</strong> عش الإثارة أثناء الإقلاع من جبل باباداغ، واحدة من أفضل وجهات الطيران المظلي في العالم.</li>
        <li><strong>تجربة لا تُنسى:</strong> التقط لحظات طيرانك الفريدة من خلال حزم الصور والفيديو الاختيارية (متوفرة للشراء).</li>
        <li><strong>حجز مرن:</strong> استمتع بإمكانية الإلغاء المجاني حتى 24 ساعة قبل موعد الطيران.</li>
        <li><strong>طيارات إناث:</strong> إذا كنت تفضل طيارة، يرجى الاتصال بنا مسبقًا لترتيب ذلك.</li>
    </ul>

    <h2>تفاصيل الجولة</h2>
    <ul>
        <li><strong>نوع النشاط:</strong> مغامرة شديدة</li>
        <li><strong>المدة:</strong> ساعتان (تشمل التحضير، الطيران، والهبوط)</li>
        <li><strong>فترة الإلغاء المجاني:</strong> حتى 24 ساعة قبل النشاط.</li>
    </ul>

    <h2>ما يتضمنه العرض</h2>
    <ul>
        <li>طيران مظلي مزدوج مع طيار محترف</li>
        <li>جميع معدات السلامة اللازمة</li>
        <li>النقل إلى موقع الإقلاع (إذا كان ذلك ممكنًا)</li>
        <li>إرشادات السلامة والتعليمات</li>
    </ul>

    <h2>ما لا يتضمنه العرض</h2>
    <ul>
        <li>الصور ومقاطع الفيديو لرحلتك (متوفرة للشراء)</li>
        <li>النفقات الشخصية</li>
    </ul>

    <h2>معلومات هامة</h2>
    <ul>
        <li><strong>الحد الأدنى للعمر:</strong> يجب أن يكون عمر المشاركين 16 عامًا على الأقل.</li>
        <li><strong>الحد الأقصى للوزن:</strong> الوزن الأقصى 100 كجم (220 رطلاً).</li>
        <li><strong>متطلبات الصحة:</strong> غير مناسب للأشخاص الذين يعانون من أمراض القلب، مشاكل الظهر، أو النساء الحوامل.</li>
        <li><strong>ما يجب ارتداؤه:</strong> ملابس مريحة وأحذية مغلقة.</li>
    </ul>

    <h2>تفاصيل الحجز والعنوان</h2>
    <p>
        سيتم إرسال جميع تفاصيل العنوان ونقطة اللقاء بعد تأكيد الحجز.
    </p>

    <h2>احجز الآن وحلق فوق أولودينيز!</h2>
    <p>
        لا تفوت الفرصة لتجربة واحدة من أكثر مواقع الطيران المظلي شهرة في العالم. سواء كنت من عشاق المغامرة أو تقوم بتجربة الطيران لأول مرة، ستكون هذه الرحلة فوق أولودينيز ذكرى لا تُنسى.
    </p>
        `,
        zh: `
           <h1>体验厄吕代尼兹滑翔伞的刺激</h1>
    <p>
        从天空中探索厄吕代尼兹令人叹为观止的美景！以其世界闻名的碧蓝海水和郁郁葱葱的山脉，厄吕代尼兹提供了无与伦比的滑翔伞体验。 
        这项为冒险爱好者和自然爱好者量身定制的两小时冒险活动，能让您翱翔天空，尽享土耳其最具标志性的美景之一的全景。
    </p>

    <h2>活动亮点</h2>
    <ul>
        <li><strong>令人叹为观止的景色：</strong>飞越厄吕代尼兹，欣赏令人惊艳的碧蓝海水、金色沙滩和郁郁葱葱的山脉。</li>
        <li><strong>专业教练：</strong>与经验丰富的认证滑翔伞飞行员双人飞行，确保您的体验安全又刺激。</li>
        <li><strong>肾上腺素激增：</strong>从巴巴达山起飞，感受世界顶级滑翔伞目的地之一的刺激。</li>
        <li><strong>难忘的体验：</strong>通过可选的照片和视频包（可购买）记录您一生一次的飞行。</li>
        <li><strong>灵活预订：</strong>在预定航班前24小时内享受免费取消服务。</li>
        <li><strong>女性飞行员：</strong>如果您更喜欢女性飞行员，请提前联系我们进行安排。</li>
    </ul>

    <h2>活动详情</h2>
    <ul>
        <li><strong>活动类型：</strong>极限冒险</li>
        <li><strong>时长：</strong>2小时（包括准备、飞行和着陆）</li>
        <li><strong>免费取消期限：</strong>活动前24小时内。</li>
    </ul>

    <h2>包含内容</h2>
    <ul>
        <li>与专业飞行员进行的双人滑翔伞飞行</li>
        <li>所有必要的安全设备</li>
        <li>前往起飞地点的交通（如适用）</li>
        <li>安全说明和简报</li>
    </ul>

    <h2>不包含内容</h2>
    <ul>
        <li>飞行的照片和视频（可购买）</li>
        <li>个人消费</li>
    </ul>

    <h2>重要信息</h2>
    <ul>
        <li><strong>年龄限制：</strong>参与者须年满16岁。</li>
        <li><strong>体重限制：</strong>最大体重为100公斤（220磅）。</li>
        <li><strong>健康要求：</strong>不适合患有心脏病、背部问题或孕妇参加。</li>
        <li><strong>穿着建议：</strong>舒适的衣物和封闭式鞋子。</li>
    </ul>

    <h2>预订及地址详情</h2>
    <p>
        预订确认后，我们将发送所有地址和集合点的详细信息。
    </p>

    <h2>立即预订，翱翔厄吕代尼兹！</h2>
    <p>
        不要错过体验世界上最具标志性的滑翔伞地点之一的机会。无论您是冒险爱好者还是初次体验者，这次厄吕代尼兹的飞行将成为您永生难忘的回忆。
    </p>
        `,
    },
    "/tours/antalya-sightseeing-city-tour": {
        en: `
            <h1>Antalya Sightseeing City Tour with Waterfalls & Cable Car</h1>
    
    <h2>Discover Antalya’s Rich History and Stunning Scenery</h2>
    <p>
        Join us for an unforgettable day exploring Antalya, a city where ancient history meets breathtaking natural beauty. This full-day sightseeing tour covers some of the most iconic landmarks, offering you the perfect mix of culture, history, and adventure. From wandering through the charming Old Town to witnessing the cascading Duden Waterfalls and enjoying a panoramic cable car ride, this tour promises a memorable experience for every traveler.
    </p>

    <h2>Tour Highlights</h2>
    <ul>
        <li><strong>Antalya Old Town (Kaleiçi):</strong> Walk through the historic streets and explore landmarks such as Hadrian’s Gate, the Clock Tower, and Fluted Minaret.</li>
        <li><strong>Duden Waterfalls:</strong> Witness the impressive 40-meter-high waterfall as it crashes into the Mediterranean Sea.</li>
        <li><strong>Sightseeing Boat Trip:</strong> Enjoy a one-hour boat ride from Antalya’s Old Town harbor, soaking in the coastal views.</li>
        <li><strong>Tünektepe Cable Car:</strong> (Subject to availability) Get a breathtaking bird’s-eye view of the city and the sea from the top.</li>
        <li><strong>Traditional Turkish Lunch:</strong> Indulge in a delicious local meal at a well-known restaurant.</li>
        <li><strong>Silver Workshop Visit:</strong> Experience local craftsmanship and discover Antalya’s renowned silver jewelry.</li>
    </ul>

    <h2>Tour Itinerary</h2>
    <h3>Hotel Pick-Up & Departure</h3>
    <p>
        Start your adventure with a comfortable pick-up from your hotel in Antalya. Our modern, air-conditioned vehicle will transport you to your first stop.
    </p>

    <h3>Explore Antalya’s Old Town (Kaleiçi)</h3>
    <p>
        Discover the charm of Antalya’s historical center as you walk through its narrow streets, ancient ruins, and traditional Ottoman houses. Enjoy free time to explore key attractions like:
    </p>
    <ul>
        <li><strong>Hadrian’s Gate:</strong> A beautifully preserved Roman-era triumphal arch.</li>
        <li><strong>Clock Tower & Fluted Minaret:</strong> Two iconic landmarks in the heart of the Old Town.</li>
        <li><strong>Local Shops & Cafés:</strong> Browse for souvenirs or sip on traditional Turkish coffee in a cozy café.</li>
    </ul>

    <h3>Boat Trip from the Old Town Harbor</h3>
    <p>
        Set sail on a one-hour sightseeing cruise along the coastline, where you’ll get a unique perspective of Antalya’s stunning cliffs and seafront. Relax on deck as you take in the magnificent Mediterranean views.
    </p>

    <h3>Lunch at a Local Turkish Restaurant</h3>
    <p>
        After your Old Town exploration, enjoy a delicious lunch featuring traditional Turkish flavors at a well-known local restaurant. Vegetarian options are available upon request.
    </p>

    <h3>Visit Duden Waterfalls</h3>
    <p>
        One of Antalya’s most stunning natural wonders, the Duden Waterfalls cascade from a height of 40 meters into the Mediterranean. Our guide will take you to the perfect vantage points to capture breathtaking photos.
    </p>

    <h3>Tünektepe Cable Car Ride (Optional, not included in tour price)</h3>
    <p>
        If the facility is open, you’ll have the chance to take a scenic cable car ride up Tünektepe Hill for panoramic views of Antalya and its surroundings.
    </p>

    <h3>Local Silver Workshop Visit</h3>
    <p>
        Learn about Antalya’s long-standing tradition of silver craftsmanship. Explore handcrafted jewelry and unique designs made by skilled artisans.
    </p>

    <h3>Return to Hotel</h3>
    <p>
        After an incredible day of sightseeing, our comfortable vehicle will take you back to your hotel, leaving you with unforgettable memories of Antalya.
    </p>

    <h2>What’s Included</h2>
    <ul>
        <li>Hotel Pick-up & Drop-off</li>
        <li>Entrance Fees for Duden Waterfalls</li>
        <li>Sightseeing Boat Trip (if selected)</li>
        <li>Licensed Tour Guide</li>
        <li>Full Insurance</li>
        <li>Traditional Turkish Lunch</li>
    </ul>

    <h2>What’s Not Included</h2>
    <ul>
        <li>Drinks</li>
        <li>Cable Car Ride Fee (if available)</li>
        <li>Personal Expenses</li>
    </ul>

    <h2>Important Information</h2>
    <ul>
        <li><strong>Walking Involved:</strong> This tour requires a moderate amount of walking and may not be suitable for guests with mobility issues.</li>
        <li><strong>Meeting Point for Kaleiçi Hotels:</strong> Due to narrow streets, guests staying in small Old Town hotels should meet at McDonald’s Kaleiçi (details provided upon booking).</li>
        <li><strong>Cable Car Availability:</strong> The Tünektepe Cable Car may be temporarily closed; please check with us before booking.</li>
        <li><strong>Pick-Up Time Confirmation:</strong> Our team will provide your exact pick-up time the day before your tour.</li>
    </ul>

    <h2>Why Choose This Tour?</h2>
    <ul>
        <li><strong>Comprehensive Antalya Experience:</strong> See the best of the city in one day.</li>
        <li><strong>Expert Guides:</strong> Learn fascinating insights about Antalya’s history and culture.</li>
        <li><strong>Scenic & Relaxing:</strong> Enjoy a mix of sightseeing, nature, and leisure time.</li>
        <li><strong>Hassle-Free Travel:</strong> Comfortable transportation and hotel pick-up included.</li>
    </ul>

    <h2>Book Your Antalya Sightseeing Tour Today!</h2>
    <p>
        Join us for an amazing day exploring the beauty and history of Antalya. Reserve your spot now for an unforgettable experience!
    </p>
        `,
        tr: `
        <h1>Antalya Şehir Turu: Şelaleler ve Teleferik ile</h1>
    
    <h2>Antalya’nın Zengin Tarihi ve Muhteşem Manzaralarını Keşfedin</h2>
    <p>
        Antalya’yı keşfetmek için unutulmaz bir günü bizimle geçirin; antik tarihin muhteşem doğa güzellikleriyle buluştuğu bir şehir. Bu tam günlük şehir turu, size en ikonik mekanların bir karışımını sunarak kültür, tarih ve macerayı bir arada sunuyor. Büyüleyici Kaleiçi sokaklarında gezmekten, dökülen Düdensu Şelalesi’ni izlemeye ve panoramik bir teleferik yolculuğunun tadını çıkarmaya kadar bu tur, her gezgin için unutulmaz bir deneyim vaat ediyor.
    </p>

    <h2>Turun Öne Çıkanları</h2>
    <ul>
        <li><strong>Antalya Kaleiçi:</strong> Tarihi sokaklarda yürüyün ve Hadrian Kapısı, Saat Kulesi ve Yivli Minare gibi yerleri keşfedin.</li>
        <li><strong>Düdensu Şelalesi:</strong> Akdeniz’e dökülen etkileyici 40 metrelik şelaleyi izleyin.</li>
        <li><strong>Tekne Turu:</strong> Antalya Kaleiçi limanından bir saatlik tekne turu yaparak kıyı manzaralarını seyredin.</li>
        <li><strong>Tünektepe Teleferiği:</strong> (Müsaitlik durumuna bağlı) Şehir ve denizin yukarıdan büyüleyici manzarasını izleyin.</li>
        <li><strong>Geleneksel Türk Yemeği:</strong> Ünlü bir restoranda lezzetli yerel bir yemek tadın.</li>
        <li><strong>Gümüş Atölyesi Ziyareti:</strong> Antalya’nın ünlü gümüş işçiliğini deneyimleyin ve el yapımı takıları keşfedin.</li>
    </ul>

    <h2>Tur Programı</h2>
    <h3>Otelden Alma & Hareket</h3>
    <p>
        Turunuza Antalya’daki otelinizden rahat bir şekilde alınarak başlayın. Modern, klimalı aracımız sizi ilk durağınıza taşıyacak.
    </p>

    <h3>Antalya Kaleiçi’ni Keşfedin</h3>
    <p>
        Antalya’nın tarihi merkezinin cazibesini keşfedin; dar sokaklar, antik kalıntılar ve geleneksel Osmanlı evleri boyunca yürüyün. Şu mekanlarda serbest zamanın tadını çıkarın:
    </p>
    <ul>
        <li><strong>Hadrian Kapısı:</strong> Korunmuş Roma dönemine ait bir zafer takı.</li>
        <li><strong>Saat Kulesi & Yivli Minare:</strong> Kaleiçi’nin kalbinde bulunan iki ikonik eser.</li>
        <li><strong>Yerel Dükkanlar & Kafeler:</strong> Hediyelik eşya alışverişi yapın veya bir kafede Türk kahvesi için.</li>
    </ul>

    <h3>Kaleiçi Limanı’ndan Tekne Turu</h3>
    <p>
        Kıyı boyunca bir saatlik bir tekne gezisine çıkın; Antalya’nın etkileyici kayalıklarını ve sahil şeridini benzersiz bir açıdan seyredin. Akdeniz manzaralarının tadını çıkarmak için güvertede dinlenin.
    </p>

    <h3>Yerel Bir Restoranda Öğle Yemeği</h3>
    <p>
        Kaleiçi’ni keşfettikten sonra ünlü bir yerel restoranda geleneksel Türk lezzetlerinden oluşan bir öğle yemeğinin tadını çıkarın. Vejetaryen seçenekler talep üzerine sunulabilir.
    </p>

    <h3>Düdensu Şelalesi Ziyareti</h3>
    <p>
        Antalya’nın en etkileyici doğal harikalarından biri olan Düdensu Şelalesi, 40 metrelik bir yükseklikten Akdeniz’e dökülür. Rehberimiz sizi fotoğraflar için en iyi görüş noktalarına götürecek.
    </p>

    <h3>Tünektepe Teleferiği (Opsiyonel, tura dahil değildir)</h3>
    <p>
        Tesis açıksa, Tünektepe Tepesi’ne çıkıp Antalya ve çevresinin panoramik manzarasını izleme fırsatı bulacaksınız.
    </p>

    <h3>Yerel Gümüş Atölyesi Ziyareti</h3>
    <p>
        Antalya’nın uzun süreli gümüş işçiliği geleneğini keşfedin. El yapımı takıları ve zanaatkârlar tarafından yapılan benzersiz tasarımları inceleyin.
    </p>

    <h3>Otele Dönüş</h3>
    <p>
        Unutulmaz bir gezi gününün ardından, rahat aracımız sizi otelinize geri götürecek ve Antalya’nın unutulmaz anılarını birakacaksınız.
    </p>

    <h2>Dahil Olanlar</h2>
    <ul>
        <li>Otelden Alış ve Bırakma</li>
        <li>Düdensu Şelalesi Giriş Üretleri</li>
        <li>Tekne Turu (eğer seçildiğinde)</li>
        <li>Lisanslı Tur Rehberi</li>
        <li>Full Sigorta</li>
        <li>Geleneksel Türk Öğle Yemeği</li>
    </ul>

    <h2>Dahil Olmayanlar</h2>
    <ul>
        <li>İçecekler</li>
        <li>Teleferik Üretleri (eğer müsaitse)</li>
        <li>Kışisel Harcamalar</li>
    </ul>

    <h2>Önemli Bilgiler</h2>
    <ul>
        <li><strong>Yürüyüş Gereklidir:</strong> Bu tur bir miktar yürüyüş gerektirir ve hareket zorluğu olan misafirler için uygun olmayabilir.</li>
        <li><strong>Kaleiçi Otelleri Buluşma Noktası:</strong> Dar sokaklar nedeniyle, küçük Kaleiçi otellerinde kalan misafirlerin McDonald’s Kaleiçi’nde buluşması gereklidir (rezervasyon sırasında detaylar sağlanacaktır).</li>
        <li><strong>Teleferik Durumu:</strong> Tünektepe Teleferiği geçici olarak kapalı olabilir; lütfen rezervasyon yapmadan önce bize danışın.</li>
        <li><strong>Alış Zamanı Onaylama:</strong> Ekibimiz turdan bir gün önce kesin alış zamanınızı size bildirecektir.</li>
    </ul>

    <h2>Bu Turu Neden Seçmelisiniz?</h2>
    <ul>
        <li><strong>Kapsamlı Antalya Deneyimi:</strong> Şehrin en iyilerini bir gün içinde görün.</li>
        <li><strong>Uzman Rehberler:</strong> Antalya’nın tarihi ve kültürü hakkında büyüleyici bilgiler öğrenin.</li>
        <li><strong>Manzaralı ve Rahatlatıcı:</strong> Gezi, doğa ve dinlenme zamanının bir karışımını yaşayın.</li>
        <li><strong>Stresiz Seyahat:</strong> Rahat ulaşım ve otelden alım dahil.</li>
    </ul>

    <h2>Antalya Şehir Turunuzu Bugün Rezerve Edin!</h2>
    <p>
        Antalya’nın güzelliklerini ve tarihini keşfetmek için harika bir gün geçirin. Unutulmaz bir deneyim için yerinizi hemen ayırtın!
    </p>
        `,
        ru: `
    <h1>Обзорная экскурсия по Анталье с водопадами и канатной дорогой</h1>
    
    <h2>Откройте для себя богатую историю и захватывающие пейзажи Антальи</h2>
    <p>
        Присоединяйтесь к нам в незабываемый день исследования Антальи, города, где древняя история сочетается с захватывающей природной красотой. Эта однодневная экскурсия охватывает некоторые из самых знаковых достопримечательностей, предлагая вам идеальное сочетание культуры, истории и приключений. От прогулок по очаровательному Старому городу до наблюдения за каскадными водопадами Дюден и наслаждения панорамной поездкой на канатной дороге - этот тур обещает незабываемые впечатления для каждого путешественника.
    </p>

    <h2>Основные моменты тура</h2>
    <ul>
        <li><strong>Старый город Антальи (Калеичи):</strong> Прогуляйтесь по историческим улицам и исследуйте достопримечательности, такие как Ворота Адриана, Часовая башня и Рифленый минарет.</li>
        <li><strong>Водопады Дюден:</strong> Полюбуйтесь впечатляющим 40-метровым водопадом, который обрушивается в Средиземное море.</li>
        <li><strong>Прогулка на лодке:</strong> Насладитесь часовым круизом из гавани Старого города Антальи, наслаждаясь прибрежными видами.</li>
        <li><strong>Канатная дорога Тюнептепе:</strong> (При наличии) Насладитесь захватывающим видом на город и море с высоты птичьего полета.</li>
        <li><strong>Традиционный турецкий обед:</strong> Побалуйте себя вкусной местной едой в известном ресторане.</li>
        <li><strong>Посещение мастерской серебра:</strong> Познакомьтесь с местным ремеслом и откройте для себя знаменитые серебряные украшения Антальи.</li>
    </ul>

    <h2>Программа тура</h2>
    <h3>Трансфер из отеля и отправление</h3>
    <p>
        Начните свое приключение с комфортного трансфера из вашего отеля в Анталье. Наш современный кондиционированный транспорт доставит вас к первому пункту остановки.
    </p>

    <h3>Исследуйте Старый город Антальи (Калеичи)</h3>
    <p>
        Откройте для себя очарование исторического центра Антальи, прогуливаясь по узким улицам, древним руинам и традиционным османским домам. Насладитесь свободным временем для изучения ключевых достопримечательностей, таких как:
    </p>
    <ul>
        <li><strong>Ворота Адриана:</strong> Прекрасно сохранившаяся триумфальная арка римской эпохи.</li>
        <li><strong>Часовая башня и Рифленый минарет:</strong> Два знаковых объекта в центре Старого города.</li>
        <li><strong>Местные магазины и кафе:</strong> Приобретите сувениры или выпейте традиционный турецкий кофе в уютном кафе.</li>
    </ul>

    <h3>Прогулка на лодке из гавани Старого города</h3>
    <p>
        Отправьтесь в часовой круиз вдоль побережья, где вы получите уникальную перспективу на впечатляющие утесы и набережную Антальи. Расслабьтесь на палубе, наслаждаясь великолепными видами Средиземного моря.
    </p>

    <h3>Обед в местном турецком ресторане</h3>
    <p>
        После исследования Старого города насладитесь вкусным обедом с традиционными турецкими блюдами в известном местном ресторане. Вегетарианские блюда доступны по запросу.
    </p>

    <h3>Посещение водопадов Дюден</h3>
    <p>
        Один из самых впечатляющих природных чудес Антальи, водопады Дюден обрушиваются с высоты 40 метров в Средиземное море. Наш гид покажет вам лучшие точки для незабываемых фотографий.
    </p>

    <h3>Поездка на канатной дороге Тюнептепе (опционально, не входит в стоимость тура)</h3>
    <p>
        Если объект открыт, у вас будет возможность совершить живописную поездку на канатной дороге на вершину холма Тюнептепе, откуда открываются панорамные виды на Анталью и её окрестности.
    </p>

    <h3>Посещение местной мастерской серебра</h3>
    <p>
        Узнайте больше о давней традиции серебряного ремесла в Анталье. Исследуйте изделия ручной работы и уникальные дизайны, созданные умелыми мастерами.
    </p>

    <h3>Возвращение в отель</h3>
    <p>
        После невероятного дня экскурсий наш комфортный транспорт доставит вас обратно в ваш отель, оставив незабываемые воспоминания об Анталье.
    </p>

    <h2>Что включено</h2>
    <ul>
        <li>Трансфер из отеля и обратно</li>
        <li>Входные билеты на водопады Дюден</li>
        <li>Прогулка на лодке (если выбрано)</li>
        <li>Лицензированный гид</li>
        <li>Полное страхование</li>
        <li>Традиционный турецкий обед</li>
    </ul>

    <h2>Что не включено</h2>
    <ul>
        <li>Напитки</li>
        <li>Плата за канатную дорогу (если доступна)</li>
        <li>Личные расходы</li>
    </ul>

    <h2>Важная информация</h2>
    <ul>
        <li><strong>Пешие прогулки:</strong> В туре предусмотрено умеренное количество пеших прогулок, что может быть неподходящим для гостей с ограниченной подвижностью.</li>
        <li><strong>Место встречи для отелей Калеичи:</strong> Из-за узких улиц гости, проживающие в небольших отелях Старого города, должны встретиться у McDonald’s Калеичи (подробности будут предоставлены при бронировании).</li>
        <li><strong>Доступность канатной дороги:</strong> Канатная дорога Тюнептепе может быть временно закрыта; пожалуйста, уточните у нас перед бронированием.</li>
        <li><strong>Подтверждение времени выезда:</strong> Наша команда предоставит вам точное время выезда за день до вашего тура.</li>
    </ul>

    <h2>Почему выбрать этот тур?</h2>
    <ul>
        <li><strong>Полный опыт Антальи:</strong> Увидьте все лучшее в городе за один день.</li>
        <li><strong>Экспертные гиды:</strong> Узнайте увлекательные факты об истории и культуре Антальи.</li>
        <li><strong>Живописный и расслабляющий:</strong> Наслаждайтесь сочетанием осмотра достопримечательностей, природы и отдыха.</li>
        <li><strong>Путешествие без хлопот:</strong> Комфортный транспорт и трансфер из отеля включены.</li>
    </ul>

    <h2>Забронируйте экскурсию по Анталье сегодня!</h2>
    <p>
        Присоединяйтесь к нам, чтобы провести удивительный день, исследуя красоту и историю Антальи. Забронируйте место сейчас и получите незабываемые впечатления!
    </p>


        `,
        es: `
    <h1>Tour por la Ciudad de Antalya con Cascadas y Teleférico</h1>
    
    <h2>Descubre la Rica Historia y los Impresionantes Paisajes de Antalya</h2>
    <p>
        Únete a nosotros para un día inolvidable explorando Antalya, una ciudad donde la historia antigua se encuentra con una impresionante belleza natural. Este tour de un día completo cubre algunos de los puntos de referencia más icónicos, ofreciéndote la mezcla perfecta de cultura, historia y aventura. Desde pasear por el encantador casco antiguo hasta presenciar las cascadas de Duden y disfrutar de un paseo panorámico en teleférico, este tour promete una experiencia memorable para cada viajero.
    </p>

    <h2>Puntos Destacados del Tour</h2>
    <ul>
        <li><strong>Casco Antiguo de Antalya (Kaleiçi):</strong> Recorre las calles históricas y explora lugares como la Puerta de Adriano, la Torre del Reloj y el Minarete Estriado.</li>
        <li><strong>Cascadas de Duden:</strong> Observa la impresionante cascada de 40 metros de altura que desemboca en el mar Mediterráneo.</li>
        <li><strong>Paseo en Barco:</strong> Disfruta de un paseo en barco de una hora desde el puerto del casco antiguo de Antalya, admirando las vistas costeras.</li>
        <li><strong>Teleférico de Tünektepe:</strong> (Sujeto a disponibilidad) Obtén una vista panorámica impresionante de la ciudad y el mar desde lo alto.</li>
        <li><strong>Almuerzo Turco Tradicional:</strong> Deléitate con una deliciosa comida local en un restaurante conocido.</li>
        <li><strong>Visita a un Taller de Plata:</strong> Experimenta la artesanía local y descubre la famosa joyería de plata de Antalya.</li>
    </ul>

    <h2>Itinerario del Tour</h2>
    <h3>Recogida en el Hotel y Salida</h3>
    <p>
        Comienza tu aventura con una recogida cómoda desde tu hotel en Antalya. Nuestro moderno vehículo con aire acondicionado te llevará a tu primera parada.
    </p>

    <h3>Explora el Casco Antiguo de Antalya (Kaleiçi)</h3>
    <p>
        Descubre el encanto del centro histórico de Antalya mientras caminas por sus estrechas calles, ruinas antiguas y casas otomanas tradicionales. Disfruta de tiempo libre para explorar atracciones clave como:
    </p>
    <ul>
        <li><strong>Puerta de Adriano:</strong> Un arco triunfal de la era romana bellamente preservado.</li>
        <li><strong>Torre del Reloj y Minarete Estriado:</strong> Dos hitos icónicos en el corazón del casco antiguo.</li>
        <li><strong>Tiendas y Cafés Locales:</strong> Busca recuerdos o disfruta de un café turco tradicional en un acogedor café.</li>
    </ul>

    <h3>Paseo en Barco desde el Puerto del Casco Antiguo</h3>
    <p>
        Zarpa en un paseo turístico de una hora a lo largo de la costa, donde obtendrás una perspectiva única de los impresionantes acantilados y el litoral de Antalya. Relájate en la cubierta mientras disfrutas de las magníficas vistas del Mediterráneo.
    </p>

    <h3>Almuerzo en un Restaurante Turco Local</h3>
    <p>
        Después de explorar el casco antiguo, disfruta de un delicioso almuerzo con sabores tradicionales turcos en un restaurante local conocido. Hay opciones vegetarianas disponibles bajo petición.
    </p>

    <h3>Visita a las Cascadas de Duden</h3>
    <p>
        Una de las maravillas naturales más impresionantes de Antalya, las cascadas de Duden caen desde una altura de 40 metros hacia el Mediterráneo. Nuestro guía te llevará a los mejores puntos para capturar fotos impresionantes.
    </p>

    <h3>Paseo en Teleférico de Tünektepe (Opcional, no incluido en el precio del tour)</h3>
    <p>
        Si la instalación está abierta, tendrás la oportunidad de tomar un paseo panorámico en teleférico hasta la colina de Tünektepe para disfrutar de vistas panorámicas de Antalya y sus alrededores.
    </p>

    <h3>Visita a un Taller de Plata Local</h3>
    <p>
        Aprende sobre la larga tradición de Antalya en la artesanía de plata. Explora joyería hecha a mano y diseños únicos creados por artesanos expertos.
    </p>

    <h3>Regreso al Hotel</h3>
    <p>
        Después de un día increíble de turismo, nuestro vehículo cómodo te llevará de regreso a tu hotel, dejándote con recuerdos inolvidables de Antalya.
    </p>

    <h2>¿Qué Incluye?</h2>
    <ul>
        <li>Recogida y regreso al hotel</li>
        <li>Entradas a las Cascadas de Duden</li>
        <li>Paseo en barco (si se selecciona)</li>
        <li>Guía turístico con licencia</li>
        <li>Seguro completo</li>
        <li>Almuerzo turco tradicional</li>
    </ul>

    <h2>¿Qué No Incluye?</h2>
    <ul>
        <li>Bebidas</li>
        <li>Tarifa del teleférico (si está disponible)</li>
        <li>Gastos personales</li>
    </ul>

    <h2>Información Importante</h2>
    <ul>
        <li><strong>Incluye caminatas:</strong> Este tour requiere una cantidad moderada de caminatas y puede no ser adecuado para huéspedes con problemas de movilidad.</li>
        <li><strong>Punto de encuentro para hoteles en Kaleiçi:</strong> Debido a las calles estrechas, los huéspedes que se alojen en pequeños hoteles del casco antiguo deben reunirse en McDonald’s Kaleiçi (los detalles se proporcionarán al hacer la reserva).</li>
        <li><strong>Disponibilidad del teleférico:</strong> El teleférico de Tünektepe puede estar cerrado temporalmente; consulta con nosotros antes de reservar.</li>
        <li><strong>Confirmación del horario de recogida:</strong> Nuestro equipo te proporcionará la hora exacta de recogida el día anterior a tu tour.
    </ul>

    <h2>¿Por Qué Elegir Este Tour?</h2>
    <ul>
        <li><strong>Experiencia integral en Antalya:</strong> Ve lo mejor de la ciudad en un solo día.</li>
        <li><strong>Guías expertos:</strong> Aprende datos fascinantes sobre la historia y cultura de Antalya.</li>
        <li><strong>Escénico y relajante:</strong> Disfruta de una mezcla de turismo, naturaleza y tiempo de ocio.</li>
        <li><strong>Viaje sin complicaciones:</strong> Transporte cómodo y recogida en el hotel incluidos.
    </ul>

    <h2>¡Reserva tu Tour por la Ciudad de Antalya Hoy!</h2>
    <p>
        Únete a nosotros para un día increíble explorando la belleza e historia de Antalya. ¡Reserva tu lugar ahora para una experiencia inolvidable!
    </p>
        `,
        it: `
    <h1>Tour della Città di Antalya con Cascate e Funivia</h1>
    
    <h2>Scopri la Ricca Storia e gli Splendidi Paesaggi di Antalya</h2>
    <p>
        Unisciti a noi per una giornata indimenticabile esplorando Antalya, una città dove la storia antica si fonde con una straordinaria bellezza naturale. Questo tour di un giorno copre alcuni dei punti di riferimento più iconici, offrendoti il mix perfetto di cultura, storia e avventura. Dalla passeggiata nel suggestivo centro storico alla visita delle cascate di Duden e un giro panoramico in funivia, questo tour promette un'esperienza memorabile per ogni viaggiatore.
    </p>

    <h2>Punti Salienti del Tour</h2>
    <ul>
        <li><strong>Centro Storico di Antalya (Kaleiçi):</strong> Passeggia per le strade storiche ed esplora luoghi come la Porta di Adriano, la Torre dell'Orologio e il Minareto scanalato.</li>
        <li><strong>Cascate di Duden:</strong> Ammira l'imponente cascata alta 40 metri che si riversa nel Mar Mediterraneo.</li>
        <li><strong>Giro in Barca Turistica:</strong> Goditi un'ora di navigazione dal porto del centro storico di Antalya, ammirando le viste costiere.</li>
        <li><strong>Funivia di Tünektepe:</strong> (Soggetta a disponibilità) Ammira una vista panoramica mozzafiato della città e del mare dall'alto.</li>
        <li><strong>Pranzo Turco Tradizionale:</strong> Gusta un delizioso pasto locale in un ristorante rinomato.</li>
        <li><strong>Visita a un Laboratorio di Argento:</strong> Scopri l'artigianato locale e la famosa gioielleria in argento di Antalya.</li>
    </ul>

    <h2>Itinerario del Tour</h2>
    <h3>Trasferimento dall'Hotel e Partenza</h3>
    <p>
        Inizia la tua avventura con un comodo trasferimento dal tuo hotel ad Antalya. Il nostro veicolo moderno e climatizzato ti porterà alla tua prima tappa.
    </p>

    <h3>Esplora il Centro Storico di Antalya (Kaleiçi)</h3>
    <p>
        Scopri il fascino del centro storico di Antalya mentre cammini per le sue strade strette, rovine antiche e case ottomane tradizionali. Goditi del tempo libero per esplorare attrazioni chiave come:
    </p>
    <ul>
        <li><strong>Porta di Adriano:</strong> Un arco trionfale dell'epoca romana splendidamente conservato.</li>
        <li><strong>Torre dell'Orologio e Minareto scanalato:</strong> Due simboli iconici nel cuore del centro storico.</li>
        <li><strong>Negozietti e Caffè Locali:</strong> Cerca souvenir o gusta un tradizionale caffè turco in un accogliente caffè.</li>
    </ul>

    <h3>Giro in Barca dal Porto del Centro Storico</h3>
    <p>
        Salpa per un'ora di crociera turistica lungo la costa, dove potrai ammirare una prospettiva unica delle scogliere e del litorale mozzafiato di Antalya. Rilassati sul ponte mentre ammiri le magnifiche viste del Mediterraneo.
    </p>

    <h3>Pranzo in un Ristorante Turco Locale</h3>
    <p>
        Dopo aver esplorato il centro storico, gusta un delizioso pranzo con sapori tradizionali turchi in un ristorante locale rinomato. Opzioni vegetariane disponibili su richiesta.
    </p>

    <h3>Visita alle Cascate di Duden</h3>
    <p>
        Una delle meraviglie naturali più spettacolari di Antalya, le cascate di Duden si gettano da un'altezza di 40 metri nel Mediterraneo. La nostra guida ti porterà nei punti migliori per scattare foto mozzafiato.
    </p>

    <h3>Giro in Funivia di Tünektepe (Opzionale, non incluso nel prezzo del tour)</h3>
    <p>
        Se l'impianto è aperto, avrai la possibilità di fare un giro panoramico in funivia fino alla collina di Tünektepe per ammirare viste spettacolari su Antalya e i suoi dintorni.
    </p>

    <h3>Visita a un Laboratorio di Argento Locale</h3>
    <p>
        Scopri la lunga tradizione di Antalya nell'artigianato dell'argento. Esplora gioielli fatti a mano e design unici creati da artigiani esperti.
    </p>

    <h3>Ritorno in Hotel</h3>
    <p>
        Dopo una giornata incredibile di visite turistiche, il nostro veicolo confortevole ti riporterà al tuo hotel, lasciandoti con ricordi indimenticabili di Antalya.
    </p>

    <h2>Cosa è Incluso</h2>
    <ul>
        <li>Trasferimento da e per l'hotel</li>
        <li>Biglietti d'ingresso per le cascate di Duden</li>
        <li>Giro in barca (se selezionato)</li>
        <li>Guida turistica autorizzata</li>
        <li>Assicurazione completa</li>
        <li>Pranzo turco tradizionale</li>
    </ul>

    <h2>Cosa Non è Incluso</h2>
    <ul>
        <li>Bevande</li>
        <li>Biglietto per la funivia (se disponibile)</li>
        <li>Spese personali</li>
    </ul>

    <h2>Informazioni Importanti</h2>
    <ul>
        <li><strong>Richiede Camminate:</strong> Questo tour include una moderata quantità di camminate e potrebbe non essere adatto a ospiti con problemi di mobilità.</li>
        <li><strong>Punto d'Incontro per Hotel a Kaleiçi:</strong> A causa delle strade strette, gli ospiti che soggiornano in piccoli hotel del centro storico dovrebbero incontrarsi al McDonald's di Kaleiçi (i dettagli saranno forniti al momento della prenotazione).</li>
        <li><strong>Disponibilità della Funivia:</strong> La funivia di Tünektepe potrebbe essere temporaneamente chiusa; si prega di verificare con noi prima di prenotare.</li>
        <li><strong>Conferma dell'Orario di Prelievo:</strong> Il nostro team ti fornirà l'orario esatto di prelievo il giorno prima del tuo tour.</li>
    </ul>

    <h2>Perché Scegliere Questo Tour?</h2>
    <ul>
        <li><strong>Esperienza Completa di Antalya:</strong> Scopri il meglio della città in un solo giorno.</li>
        <li><strong>Guide Esperte:</strong> Scopri affascinanti dettagli sulla storia e la cultura di Antalya.</li>
        <li><strong>Panoramico e Rilassante:</strong> Goditi un mix di visite turistiche, natura e tempo libero.</li>
        <li><strong>Viaggio Senza Problemi:</strong> Trasporto confortevole e prelievo dall'hotel inclusi.</li>
    </ul>

    <h2>Prenota il Tuo Tour della Città di Antalya Oggi!</h2>
    <p>
        Unisciti a noi per una giornata straordinaria esplorando la bellezza e la storia di Antalya. Prenota il tuo posto ora per un'esperienza indimenticabile!
    </p>
        `,
        ar: `
    <h1>جولة مشاهدة معالم أنطاليا مع الشلالات والتلفريك</h1>
    
    <h2>اكتشف تاريخ أنطاليا الغني ومناظرها الخلابة</h2>
    <p>
        انضم إلينا ليوم لا يُنسى لاستكشاف أنطاليا، المدينة التي يلتقي فيها التاريخ القديم بالجمال الطبيعي الساحر. تغطي هذه الجولة اليومية بعضًا من أبرز المعالم السياحية، مما يوفر لك مزيجًا مثاليًا من الثقافة والتاريخ والمغامرة. من التجول في البلدة القديمة الساحرة إلى مشاهدة شلالات دودان الساحرة والاستمتاع بركوب التلفريك البانورامي، تعد هذه الجولة بتجربة لا تُنسى لكل مسافر.
    </p>

    <h2>أبرز معالم الجولة</h2>
    <ul>
        <li><strong>المدينة القديمة في أنطاليا (كاليتشي):</strong> تجول في الشوارع التاريخية واستكشف معالم مثل بوابة هادريان، وبرج الساعة، والمئذنة المزينة.</li>
        <li><strong>شلالات دودان:</strong> شاهد الشلال المذهل الذي يبلغ ارتفاعه 40 مترًا وهو يصب في البحر الأبيض المتوسط.</li>
        <li><strong>رحلة بالقارب:</strong> استمتع برحلة بحرية لمدة ساعة واحدة من ميناء البلدة القديمة في أنطاليا، وتمتع بالمناظر الساحلية.</li>
        <li><strong>تلفريك تونيكتيبي:</strong> (رهناً بالتوافر) استمتع بمنظر بانورامي مذهل للمدينة والبحر من الأعلى.</li>
        <li><strong>غداء تركي تقليدي:</strong> استمتع بوجبة محلية لذيذة في مطعم معروف.</li>
        <li><strong>زيارة ورشة الفضة المحلية:</strong> اكتشف الحرف اليدوية المحلية وتعرف على مجوهرات أنطاليا الفضية المشهورة.</li>
    </ul>

    <h2>برنامج الجولة</h2>
    <h3>الاستقبال من الفندق والانطلاق</h3>
    <p>
        ابدأ مغامرتك برحلة مريحة من فندقك في أنطاليا. ستنقلك مركبتنا الحديثة المكيفة إلى أول محطة في جولتك.
    </p>

    <h3>استكشاف المدينة القديمة في أنطاليا (كاليتشي)</h3>
    <p>
        اكتشف سحر مركز أنطاليا التاريخي أثناء التجول في شوارعه الضيقة، وآثاره القديمة، ومنازله العثمانية التقليدية. استمتع بوقت فراغ لاستكشاف المعالم الرئيسية مثل:
    </p>
    <ul>
        <li><strong>بوابة هادريان:</strong> قوس نصر محفوظ بشكل جميل من العصر الروماني.</li>
        <li><strong>برج الساعة والمئذنة المزينة:</strong> معلمان بارزان في قلب المدينة القديمة.</li>
        <li><strong>المتاجر والمقاهي المحلية:</strong> تجول لشراء الهدايا التذكارية أو تناول القهوة التركية التقليدية في مقهى مريح.
    </ul>

    <h3>رحلة بالقارب من ميناء المدينة القديمة</h3>
    <p>
        انطلق في رحلة بحرية لمدة ساعة واحدة على طول الساحل، حيث ستحصل على منظور فريد عن المنحدرات البحرية والمناظر الرائعة لأنطاليا. استرخِ على سطح القارب واستمتع بالمناظر الخلابة للبحر الأبيض المتوسط.
    </p>

    <h3>الغداء في مطعم تركي محلي</h3>
    <p>
        بعد استكشاف البلدة القديمة، استمتع بغداء لذيذ يشمل نكهات تركية تقليدية في مطعم محلي معروف. تتوفر خيارات نباتية عند الطلب.
    </p>

    <h3>زيارة شلالات دودان</h3>
    <p>
        تُعد شلالات دودان واحدة من أعظم عجائب أنطاليا الطبيعية، حيث تتدفق من ارتفاع 40 مترًا إلى البحر الأبيض المتوسط. سيأخذك دليلنا إلى أفضل النقاط لالتقاط الصور المذهلة.
    </p>

    <h3>ركوب تلفريك تونيكتيبي (اختياري، غير مشمول بسعر الجولة)</h3>
    <p>
        إذا كانت المنشأة مفتوحة، ستحظى بفرصة ركوب تلفريك بانورامي إلى قمة تلة تونيكتيبي للاستمتاع بمناظر خلابة لأنطاليا وما حولها.
    </p>

    <h3>زيارة ورشة الفضة المحلية</h3>
    <p>
        تعرف على تقاليد أنطاليا الطويلة في صناعة الحرف اليدوية الفضية. استكشف المجوهرات المصنوعة يدويًا والتصاميم الفريدة التي صنعها حرفيون مهرة.
    </p>

    <h3>العودة إلى الفندق</h3>
    <p>
        بعد يوم لا يُنسى من مشاهدة المعالم السياحية، ستعيدك مركبتنا المريحة إلى فندقك، مما يترك لك ذكريات لا تُنسى عن أنطاليا.
    </p>

    <h2>ما يشمله العرض</h2>
    <ul>
        <li>الاستقبال من الفندق والتوصيل</li>
        <li>رسوم دخول شلالات دودان</li>
        <li>رحلة بالقارب (إذا تم اختيارها)</li>
        <li>دليل سياحي مرخص</li>
        <li>تأمين شامل</li>
        <li>غداء تركي تقليدي</li>
    </ul>

    <h2>ما لا يشمله العرض</h2>
    <ul>
        <li>المشروبات</li>
        <li>رسوم ركوب التلفريك (إذا كانت متاحة)</li>
        <li>النفقات الشخصية</li>
    </ul>

    <h2>معلومات هامة</h2>
    <ul>
        <li><strong>المشي متضمن:</strong> تتطلب الجولة قدرًا معتدلًا من المشي، وقد لا تكون مناسبة للضيوف الذين يعانون من مشاكل في الحركة.</li>
        <li><strong>نقطة اللقاء لفنادق كاليتشي:</strong> بسبب الشوارع الضيقة، يجب أن يلتقي الضيوف الذين يقيمون في فنادق البلدة القديمة الصغيرة في ماكدونالدز كاليتشي (سيتم تقديم التفاصيل عند الحجز).</li>
        <li><strong>توفر التلفريك:</strong> قد يكون تلفريك تونيكتيبي مغلقًا مؤقتًا؛ يرجى التحقق معنا قبل الحجز.</li>
        <li><strong>تأكيد وقت الاستقبال:</strong> ستوفر لك فرقنا الوقت المحدد للاستقبال في اليوم السابق لجولتك.
    </ul>

    <h2>لماذا تختار هذه الجولة؟</h2>
    <ul>
        <li><strong>تجربة أنطاليا شاملة:</strong> استمتع برؤية أفضل معالم المدينة في يوم واحد.</li>
        <li><strong>أدلة خبراء:</strong> تعرف على حقائق رائعة عن تاريخ وثقافة أنطاليا.</li>
        <li><strong>مناظر خلابة واسترخاء:</strong> استمتع بمزيج من مشاهدة المعالم والطبيعة ووقت الراحة.</li>
        <li><strong>رحلة بلا متاعب:</strong> تشمل الجولة وسائل نقل مريحة وخدمة استقبال من الفندق.
    </ul>

    <h2>احجز جولتك في أنطاليا اليوم!</h2>
    <p>
        انضم إلينا ليوم مذهل لاستكشاف جمال وتاريخ أنطاليا. احجز مكانك الآن واستمتع بتجربة لا تُنسى!
    </p>
        `,
        zh: `
    <h1>安塔利亚城市观光之旅，包含瀑布与缆车体验</h1>
    
    <h2>探索安塔利亚的丰富历史与壮丽风景</h2>
    <p>
        与我们一起度过难忘的一天，探索安塔利亚，这是一座古老历史与惊人自然美景交汇的城市。本次一日游覆盖了一些最具标志性的景点，为您提供文化、历史与冒险的完美结合。从漫步迷人的老城区，到欣赏杜顿瀑布的壮丽景色，再到体验全景缆车，这次旅行为每位旅行者带来难忘的体验。
    </p>

    <h2>行程亮点</h2>
    <ul>
        <li><strong>安塔利亚老城区 (Kaleiçi):</strong> 漫步于历史街道，探索哈德良门、钟楼和带槽尖塔等地标。</li>
        <li><strong>杜顿瀑布:</strong> 见证40米高的壮观瀑布飞流直下汇入地中海。</li>
        <li><strong>观光船之旅:</strong> 从安塔利亚老城区港口出发，享受一小时的船上观光，欣赏沿海风光。</li>
        <li><strong>Tünektepe 缆车:</strong> （视开放情况而定）从顶部俯瞰城市和大海，体验令人惊叹的鸟瞰视角。</li>
        <li><strong>传统土耳其午餐:</strong> 在一家知名餐厅享用美味的本地菜肴。</li>
        <li><strong>银器工坊参观:</strong> 体验当地工艺，探索安塔利亚著名的手工银饰。</li>
    </ul>

    <h2>行程安排</h2>
    <h3>酒店接送与出发</h3>
    <p>
        乘坐现代化、空调舒适的车辆从安塔利亚酒店接送，开启您的旅程。
    </p>

    <h3>探索安塔利亚老城区 (Kaleiçi)</h3>
    <p>
        探索安塔利亚历史中心的魅力，漫步于狭窄街道、古老遗迹和传统奥斯曼房屋。享受自由时间，探索以下关键景点：
    </p>
    <ul>
        <li><strong>哈德良门:</strong> 保存完好的罗马时期凯旋门。</li>
        <li><strong>钟楼和带槽尖塔:</strong> 老城区的两个标志性地标。</li>
        <li><strong>当地商店与咖啡馆:</strong> 寻找纪念品或在温馨的咖啡馆品尝传统土耳其咖啡。</li>
    </ul>

    <h3>老城区港口出发的船上观光</h3>
    <p>
        乘坐一小时的观光游船沿海岸线航行，从独特的视角欣赏安塔利亚壮丽的悬崖和海岸线风光。在甲板上放松身心，欣赏地中海的壮丽美景。
    </p>

    <h3>在当地土耳其餐厅享用午餐</h3>
    <p>
        探索完老城区后，在一家著名的本地餐厅享用传统土耳其美食。可根据需求提供素食选项。
    </p>

    <h3>参观杜顿瀑布</h3>
    <p>
        安塔利亚最令人惊叹的自然奇观之一，杜顿瀑布从40米高处飞流直下汇入地中海。我们的导游会带您前往最佳观景点，捕捉令人屏息的照片。
    </p>

    <h3>Tünektepe 缆车体验 (可选，不包含在旅行价格内)</h3>
    <p>
        如果设施开放，您将有机会乘坐风景优美的缆车，登上Tünektepe山丘，俯瞰安塔利亚及其周边地区的全景。
    </p>

    <h3>参观当地银器工坊</h3>
    <p>
        了解安塔利亚悠久的银器工艺传统。探索由熟练工匠制作的手工珠宝和独特设计。
    </p>

    <h3>返回酒店</h3>
    <p>
        在结束了一天的精彩观光后，我们舒适的车辆会将您送回酒店，为您留下难忘的安塔利亚回忆。
    </p>

    <h2>费用包含</h2>
    <ul>
        <li>酒店接送服务</li>
        <li>杜顿瀑布门票</li>
        <li>观光船票（如果选择）</li>
        <li>持证导游</li>
        <li>全额保险</li>
        <li>传统土耳其午餐</li>
    </ul>

    <h2>费用不包含</h2>
    <ul>
        <li>饮料</li>
        <li>缆车费用（如适用）</li>
        <li>个人消费</li>
    </ul>

    <h2>重要信息</h2>
    <ul>
        <li><strong>步行要求:</strong> 此行程需适量步行，可能不适合行动不便的客人。</li>
        <li><strong>Kaleiçi酒店集合点:</strong> 由于街道狭窄，住在小型老城区酒店的客人需在Kaleiçi麦当劳集合（预订时将提供详情）。</li>
        <li><strong>缆车可用性:</strong> Tünektepe缆车可能暂时关闭；请在预订前与我们确认。</li>
        <li><strong>接送时间确认:</strong> 我们的团队将在您旅行的前一天提供确切的接送时间。
        </li>
    </ul>

    <h2>为什么选择这次旅行？</h2>
    <ul>
        <li><strong>全面的安塔利亚体验:</strong> 一天之内体验这座城市的精华。</li>
        <li><strong>专家导游:</strong> 了解关于安塔利亚历史和文化的迷人见解。</li>
        <li><strong>风景如画且放松:</strong> 享受观光、自然和休闲的完美结合。</li>
        <li><strong>无忧旅行:</strong> 包括舒适的交通和酒店接送服务。</li>
    </ul>

    <h2>立即预订您的安塔利亚观光之旅！</h2>
    <p>
        加入我们，一起探索安塔利亚的美丽与历史。现在预订您的位置，享受一段难忘的体验！
    </p>
        `
    }

}



// !We have to make schemas for single tour page
const metaTagsForSingleTourPages = (env) => ({
    "/tours/fethiye12-island-tour": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Fethiye 12 Islands Boat Tour\">",
            "<meta property=\"og:description\" content=\"Discover the beauty of Fethiye’s 12 Islands Boat Tour. Enjoy a day of sailing, swimming, and breathtaking views in the Turkish Riviera.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye12-island-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Fethiye 12 Islands Boat Tour\">",
            "<meta name=\"twitter:description\" content=\"Sail through the stunning waters of Fethiye’s 12 Islands, explore hidden bays, and relax under the sun on a luxury boat tour.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ru: [
            `<link rel=\"canonical\" href=\`${env.websiteDomain}/ru/tours/fethiye12-island-tour\` />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Тур на лодке по 12 островам Фетхие\">",
            "<meta property=\"og:description\" content=\"Откройте для себя красоту лодочного тура по 12 островам Фетхие. Проведите день, наслаждаясь плаванием, купанием и потрясающими видами на Турецкую Ривьеру\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye12-island-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Отправьтесь в увлекательное путешествие по 12 островам Фетхие, исследуйте скрытые бухты и наслаждайтесь солнцем на роскошном катере.\">",
            "<meta name=\"twitter:description\" content=\"Тур на лодке по 12 островам Фетхие\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        tr: [
            `<link rel=\"canonical\" href=\`${env.websiteDomain}/tr/tours/fethiye12-island-tour\` />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Fethiye 12 Adalar Tekne Turu\">",
            "<meta property=\"og:description\" content=\"Fethiye'nin 12 Adalar Tekne Turu'nun güzelliklerini keşfedin. Türk Rivierası'nda yelken açın, yüzün ve muhteşem manzaraların tadını çıkarın\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye12-island-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Fethiye 12 Adalar Tekne Turu\">",
            "<meta name=\"twitter:description\" content=\"Fethiye'nin 12 Adası'nda muhteşem suların üzerinde süzülün, gizli koyları keşfedin ve lüks bir tekne turunda güneşin keyfini çıkarın.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        es: [
            `<link rel=\"canonical\" href=\`${env.websiteDomain}/es/tours/fethiye12-island-tour\` />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Tour en barco por las 12 islas de Fethiye\">",
            "<meta property=\"og:description\" content=\"Descubre la belleza del tour en barco por las 12 islas de Fethiye. Disfruta de un día de navegación, natación y vistas impresionantes en la Riviera Turca.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye12-island-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Tour en barco por las 12 islas de Fethiye\">",
            "<meta name=\"twitter:description\" content=\"Navega por las impresionantes aguas de las 12 islas de Fethiye, explora bahías ocultas y relájate bajo el sol en un lujoso tour en barco.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        it: [
            `<link rel=\"canonical\" href=\`${env.websiteDomain}/it/tours/fethiye12-island-tour\` />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Tour in barca alle 12 isole di Fethiye\">",
            "<meta property=\"og:description\" content=\"Scopri la bellezza del tour in barca alle 12 isole di Fethiye. Goditi una giornata di navigazione, nuoto e viste mozzafiato sulla Riviera Turca.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye12-island-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Tour in barca alle 12 isole di Fethiye\">",
            "<meta name=\"twitter:description\" content=\"Naviga attraverso le splendide acque delle 12 isole di Fethiye, esplora baie nascoste e rilassati al sole in un lussuoso tour in barca\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        zh: [
            `<link rel=\"canonical\" href=\`${env.websiteDomain}/zh/tours/fethiye12-island-tour\` />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"费特希耶12岛游船之旅\">",
            "<meta property=\"og:description\" content=\"探索费特希耶12岛游船之旅的美景。在土耳其里维埃拉享受一天的航行、游泳和壮丽景色。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye12-island-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"费特希耶12岛游船之旅\">",
            "<meta name=\"twitter:description\" content=\"乘坐豪华游船穿越费特希耶12岛的壮丽海域，探索隐藏海湾，在阳光下放松身心。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ar: [
            `<link rel=\"canonical\" href=\`${env.websiteDomain}/ar/tours/fethiye12-island-tour\` />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye12-island-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye12-island-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"جولة القارب في 12 جزيرة في فتحية\">",
            "<meta property=\"og:description\" content=\"اكتشف جمال جولة القارب في 12 جزيرة في فتحية. استمتع بيوم من الإبحار والسباحة والمناظر الخلابة على الريفيرا التركية.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye12-island-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"جولة القارب في 12 جزيرة في فتحية\">",
            "<meta name=\"twitter:description\" content=\"أبحر عبر المياه الرائعة لـ 12 جزيرة في فتحية، واستكشف الخلجان المخفية، واستمتع بأشعة الشمس في جولة بحرية فاخرة.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/12Island.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
    },
    "/tours/fethiye-oludeniz-boat-tour": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Fethiye Oludeniz Boat Tour – Explore the Blue Lagoon\">",
            "<meta property=\"og:description\" content=\"Embark on the Fethiye Oludeniz Boat Tour and sail through turquoise waters, discover hidden bays, and relax in the breathtaking Blue Lagoon of Turkey’s coastline.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Fethiye Oludeniz Boat Tour – A Scenic Coastal Adventure\">",
            "<meta name=\"twitter:description\" content=\"Sail through the crystal-clear waters of Oludeniz on this unforgettable boat tour. Swim in hidden bays, explore the Blue Lagoon, and enjoy the stunning Turkish coastline.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Лодочный тур по Фетхие и Олюдениз – Исследуйте Голубую Лагуну\">",
            "<meta property=\"og:description\" content=\"Отправьтесь в увлекательное путешествие на лодке по Фетхие и Олюдениз. Насладитесь бирюзовыми водами, исследуйте скрытые бухты и расслабьтесь в живописной Голубой Лагуне Турции\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Лодочный тур по Фетхие и Олюдениз – Живописное приключение на побережье\">",
            "<meta name=\"twitter:description\" content=\"Проплывите по кристально чистым водам Олюдениз в этом незабываемом туре. Откройте для себя уединенные бухты, насладитесь Голубой Лагуной и полюбуйтесь потрясающими видами турецкого побережья.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Fethiye Ölüdeniz Tekne Turu – Mavi Lagün’ü Keşfedin\">",
            "<meta property=\"og:description\" content=\"Fethiye Ölüdeniz Tekne Turu ile unutulmaz bir yolculuğa çıkın. Turkuaz suların üzerinde süzülün, gizli koyları keşfedin ve Türkiye’nin muhteşem Mavi Lagünü'nde dinlenin.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Fethiye Ölüdeniz Tekne Turu – Muhteşem Bir Sahil Macerası\">",
            "<meta name=\"twitter:description\" content=\"Ölüdeniz’in berrak sularında keyifli bir tekne turuna çıkın. Gizli koyları keşfedin, Mavi Lagün’ün tadını çıkarın ve eşsiz Türk sahil manzaralarının keyfini sürün\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Tour en barco por Fethiye y Oludeniz – Explora la Laguna Azul\">",
            "<meta property=\"og:description\" content=\"Embárcate en un increíble tour en barco por Fethiye y Oludeniz. Navega por aguas turquesas, descubre bahías ocultas y relájate en la hermosa Laguna Azul de Turquía.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Tour en barco por Fethiye y Oludeniz – Una aventura costera espectacular\">",
            "<meta name=\"twitter:description\" content=\"Navega por las aguas cristalinas de Oludeniz en este inolvidable tour en barco. Descubre bahías escondidas, disfruta de la Laguna Azul y relájate con las impresionantes vistas de la costa turca.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Tour in barca a Fethiye e Oludeniz – Esplora la Laguna Blu\">",
            "<meta property=\"og:description\" content=\"Parti per un incredibile tour in barca a Fethiye e Oludeniz. Naviga nelle acque turchesi, scopri baie nascoste e rilassati nella splendida Laguna Blu della Turchia.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Tour in barca a Fethiye e Oludeniz – Un'avventura costiera indimenticabile\">",
            "<meta name=\"twitter:description\" content=\"Naviga nelle acque cristalline di Oludeniz in questo tour in barca imperdibile. Scopri baie segrete, ammira la Laguna Blu e goditi panorami mozzafiato della costa turca.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"费特希耶和厄吕代尼兹游船之旅 – 探索蓝色泻湖\">",
            "<meta property=\"og:description\" content=\"踏上令人惊叹的费特希耶和厄吕代尼兹游船之旅。畅游碧蓝海水，探索隐藏海湾，在土耳其美丽的蓝色泻湖中放松身心。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"费特希耶和厄吕代尼兹游船之旅 – 绝美海岸探险\">",
            "<meta name=\"twitter:description\" content=\"乘坐游船穿越厄吕代尼兹的清澈海水，探索神秘海湾，欣赏蓝色泻湖，并沉浸在土耳其海岸的壮丽风景中。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-oludeniz-boat-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"جولة بالقارب في فتحية وأولودينيز – استكشف البحيرة الزرقاء\">",
            "<meta property=\"og:description\" content=\"انطلق في رحلة رائعة بالقارب في فتحية وأولودينيز. أبحر في المياه الفيروزية، واكتشف الخلجان المخفية، واستمتع بالاسترخاء في البحيرة الزرقاء الساحرة في تركيا.。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-oludeniz-boat-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"جولة بالقارب في فتحية وأولودينيز – مغامرة ساحلية لا تُنسى\">",
            "<meta name=\"twitter:description\" content=\"أبحر عبر المياه الصافية لأولودينيز في هذه الجولة البحرية الرائعة. استكشف الخلجان المخفية، واستمتع بالبحيرة الزرقاء، وتأمل جمال الساحل التركي الخلاب。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/oludeniz1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
    },
    "/tours/fethiye-quad-bike-safari-tour": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Fethiye Quad Bike Safari – Off-Road Adventure in Nature\">",
            "<meta property=\"og:description\" content=\"Experience the thrill of an off-road adventure with the Fethiye Quad Bike Safari. Ride through dusty trails, forests, and scenic landscapes for an unforgettable adrenaline rush.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Fethiye Quad Bike Safari – Ride Through Stunning Landscapes\">",
            "<meta name=\"twitter:description\" content=\"Join the Fethiye Quad Bike Safari for an exciting off-road experience. Explore rugged terrains, enjoy breathtaking views, and feel the adrenaline rush of adventure.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Сафари на квадроциклах в Фетхие – Внедорожное приключение в природе\">",
            "<meta property=\"og:description\" content=\"Испытайте азарт внедорожного приключения с сафари на квадроциклах в Фетхие. Прокатитесь по пыльным тропам, лесам и живописным ландшафтам для незабываемого выброса адреналина.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Сафари на квадроциклах в Фетхие – Прокатитесь по потрясающим пейзажам\">",
            "<meta name=\"twitter:description\" content=\"Присоединяйтесь к сафари на квадроциклах в Фетхие для захватывающего внедорожного приключения. Исследуйте пересеченную местность, наслаждайтесь потрясающими видами и почувствуйте прилив адреналина.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Fethiye ATV Safari – Doğada Heyecan Dolu Bir Macera\">",
            "<meta property=\"og:description\" content=\"Fethiye ATV Safari ile doğada heyecan dolu bir macera yaşayın. Tozlu yollar, ormanlar ve etkileyici manzaralar eşliğinde unutulmaz bir adrenalin deneyimi sizi bekliyor.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Fethiye ATV Safari – Muhteşem Manzaralar Eşliğinde Sürüş Keyfi\">",
            "<meta name=\"twitter:description\" content=\"Fethiye ATV Safari ile unutulmaz bir off-road deneyimi yaşayın. Engebeli arazileri keşfedin, nefes kesen manzaralara tanık olun ve adrenalin dolu bir maceraya atılın..\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Safari en quad en Fethiye – Aventura todoterreno en la naturaleza\">",
            "<meta property=\"og:description\" content=\"Vive la emoción de una aventura todoterreno con el Safari en quad en Fethiye. Recorre caminos polvorientos, bosques y paisajes impresionantes para una descarga de adrenalina inolvidable.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Safari en quad en Fethiye – Conduce por paisajes impresionantes\">",
            "<meta name=\"twitter:description\" content=\"Únete al Safari en quad en Fethiye para una emocionante aventura todoterreno. Explora terrenos accidentados, disfruta de vistas espectaculares y siente la adrenalina en cada recorrido.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Safari in quad a Fethiye – Avventura fuoristrada nella natura\">",
            "<meta property=\"og:description\" content=\"Vivi l'emozione di un'avventura fuoristrada con il Safari in quad a Fethiye. Attraversa sentieri polverosi, foreste e paesaggi mozzafiato per un'esperienza adrenalinica indimenticabile.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Safari in quad a Fethiye – Guida tra paesaggi spettacolari\">",
            "<meta name=\"twitter:description\" content=\"Partecipa al Safari in quad a Fethiye per un'incredibile avventura off-road. Esplora terreni accidentati, ammira viste mozzafiato e lasciati travolgere dall’adrenalina.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"费特希耶四轮摩托探险 – 穿越自然的越野冒险\">",
            "<meta property=\"og:description\" content=\"体验费特希耶四轮摩托探险带来的越野刺激。驰骋于尘土飞扬的小径、森林和壮丽的景观，享受难忘的肾上腺素飙升之旅。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"费特希耶四轮摩托探险 – 穿越壮丽景观\">",
            "<meta name=\"twitter:description\" content=\"加入费特希耶四轮摩托探险，体验令人兴奋的越野之旅。探索崎岖地形，欣赏壮丽景色，感受肾上腺素飙升的快感。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/fethiye-quad-bike-safari-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"سفاري الدراجات الرباعية في فتحية – مغامرة برية وسط الطبيعة\">",
            "<meta property=\"og:description\" content=\"استمتع بتجربة مثيرة مع سفاري الدراجات الرباعية في فتحية. انطلق عبر المسارات الترابية، والغابات، والمناظر الطبيعية الخلابة في مغامرة لا تُنسى مليئة بالإثارة.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/fethiye-quad-bike-safari-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"سفاري الدراجات الرباعية في فتحية – جولة عبر مناظر خلابة\">",
            "<meta name=\"twitter:description\" content=\"انضم إلى سفاري الدراجات الرباعية في فتحية لتجربة مثيرة مليئة بالمغامرات. استكشف التضاريس الوعرة، واستمتع بالمناظر الخلابة، وشعر بإثارة المغامرة على الطرق الوعرة.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/quadBikeSafari.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
    },
    "/tours/istanbul-bosphorus-dinner-cruise": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Istanbul Bosphorus Dinner Cruise – A Night to Remember\">",
            "<meta property=\"og:description\" content=\"Enjoy a luxurious evening on the Istanbul Bosphorus Dinner Cruise. Savor a delicious meal, watch live entertainment, and admire breathtaking views of Istanbul’s skyline.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Istanbul Bosphorus Dinner Cruise – A Night to Remember\">",
            "<meta name=\"twitter:description\" content=\"Experience an unforgettable night on the Bosphorus with fine dining, live music, and stunning city views. Book your Istanbul Bosphorus Dinner Cruise today!\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Ужин-круиз по Босфору в Стамбуле – Волшебный вечер на воде\">",
            "<meta property=\"og:description\" content=\"Насладитесь роскошным ужином-круизом по Босфору в Стамбуле. Попробуйте изысканные блюда, наслаждайтесь живой музыкой и полюбуйтесь великолепными видами на ночной город.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Ужин-круиз по Босфору в Стамбуле – Незабываемая ночь\">",
            "<meta name=\"twitter:description\" content=\"Проведите незабываемую ночь на Босфоре с ужином, живой музыкой и потрясающими видами на город. Забронируйте ужин-круиз в Стамбуле уже сегодня!\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"İstanbul Boğazı Akşam Yemeği Turu – Suyun Üzerinde Büyüleyici Bir Gece\">",
            "<meta property=\"og:description\" content=\"İstanbul Boğazı Akşam Yemeği Turu ile unutulmaz bir gece yaşayın. Lezzetli bir akşam yemeğinin tadını çıkarın, canlı müzik dinleyin ve İstanbul’un eşsiz manzarasının keyfini sürün.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"İstanbul Boğazı Akşam Yemeği Turu – Unutulmaz Bir Gece\">",
            "<meta name=\"twitter:description\" content=\"Boğaz’da muhteşem bir akşam yemeği turuna katılın. Lezzetli yemekler, canlı müzik ve büyüleyici İstanbul manzarası ile rüya gibi bir gece yaşayın!\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Crucero con Cena por el Bósforo en Estambul – Una Noche Mágica en el Agua\">",
            "<meta property=\"og:description\" content=\"Disfruta de una noche de lujo en el Crucero con Cena por el Bósforo en Estambul. Saborea una deliciosa cena, disfruta de espectáculos en vivo y admira las impresionantes vistas del horizonte de Estambul.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Crucero con Cena por el Bósforo en Estambul – Una Noche Inolvidable\">",
            "<meta name=\"twitter:description\" content=\"Vive una noche inolvidable en el Bósforo con una cena exquisita, música en vivo y vistas espectaculares de la ciudad. ¡Reserva tu crucero con cena por Estambul hoy!\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Crociera con Cena sul Bosforo a Istanbul – Una Sera Magica sull’Acqua\">",
            "<meta property=\"og:description\" content=\"Goditi una serata di lusso con la Crociera con Cena sul Bosforo a Istanbul. Assapora una cena deliziosa, assisti a spettacoli dal vivo e ammira il magnifico skyline della città.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Crociera con Cena sul Bosforo a Istanbul – Una Notte Indimenticabile\">",
            "<meta name=\"twitter:description\" content=\"Vivi un’esperienza unica con la Crociera con Cena sul Bosforo. Cena raffinata, musica dal vivo e una vista spettacolare sulla città ti aspettano. Prenota ora!\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"伊斯坦布尔博斯普鲁斯晚餐游船 – 水上的梦幻之夜\">",
            "<meta property=\"og:description\" content=\"在伊斯坦布尔博斯普鲁斯晚餐游船上享受豪华夜晚。品尝美味佳肴，观看现场表演，并欣赏壮丽的城市天际线景色。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"伊斯坦布尔博斯普鲁斯晚餐游船 – 难忘的夜晚体验\">",
            "<meta name=\"twitter:description\" content=\"在博斯普鲁斯夜游船上度过难忘的夜晚。精致晚餐、现场音乐和壮丽的城市景色等你来体验！立即预订吧！\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-dinner-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"رحلة عشاء بحرية في مضيق البوسفور بإسطنبول – ليلة ساحرة على الماء\">",
            "<meta property=\"og:description\" content=\"استمتع بأمسية فاخرة في رحلة العشاء البحرية بمضيق البوسفور في إسطنبول. تذوق أشهى الأطباق، واستمتع بالعروض الحية، وتأمل أروع إطلالات المدينة.。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-dinner-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"رحلة عشاء بحرية في مضيق البوسفور – ليلة لا تُنسى\">",
            "<meta name=\"twitter:description\" content=\"اقضِ ليلة لا تُنسى على متن رحلة العشاء البحرية في البوسفور، حيث الطعام الفاخر والموسيقى الحية والمناظر الخلابة للمدينة. احجز الآن!\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour1.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
    },
    "/tours/istanbul-bosphorus-lunch-cruise": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Istanbul Bosphorus Lunch Cruise – A Scenic Daytime Voyage\">",
            "<meta property=\"og:description\" content=\"Sail through the iconic Bosphorus Strait with the Istanbul Bosphorus Lunch Cruise. Enjoy a delicious meal while admiring panoramic views of Istanbul’s stunning skyline and historic landmarks.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Istanbul Bosphorus Lunch Cruise – Relax & Dine with a View\">",
            "<meta name=\"twitter:description\" content=\"Enjoy a relaxing lunch cruise on the Bosphorus. Savor Turkish delicacies while taking in breathtaking views of Istanbul’s waterfront and historical sights.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Обеденный круиз по Босфору в Стамбуле – Живописное дневное путешествие\">",
            "<meta property=\"og:description\" content=\"Отправьтесь в незабываемый круиз по знаменитому проливу Босфор. Наслаждайтесь вкусным обедом с панорамными видами на захватывающий городской пейзаж и исторические достопримечательности Стамбула.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Обеденный круиз по Босфору – Расслабьтесь и насладитесь прекрасным видом\">",
            "<meta name=\"twitter:description\" content=\"Насладитесь расслабляющим круизом по Босфору с обедом. Откройте для себя турецкие деликатесы и полюбуйтесь великолепными видами на город и его исторические достопримечательности.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"İstanbul Boğazı Öğle Yemeği Turu – Manzaralı Bir Yolculuk\">",
            "<meta property=\"og:description\" content=\"İstanbul Boğazı'nda unutulmaz bir öğle yemeği turuna çıkın. Lezzetli yemeklerin tadını çıkarırken, İstanbul’un tarihi simgeleri ve eşsiz manzarası eşliğinde huzurlu bir yolculuk yapın.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"İstanbul Boğazı Öğle Yemeği Turu – Manzara Eşliğinde Lezzet\">",
            "<meta name=\"twitter:description\" content=\"Boğaz’da huzurlu bir öğle yemeği turuna katılın. Türk mutfağının lezzetlerini tadarken İstanbul’un büyüleyici sahil şeridini ve tarihi yapıları keşfedin.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Crucero con Almuerzo por el Bósforo – Un Viaje Escénico de Día\">",
            "<meta property=\"og:description\" content=\"Disfruta de un almuerzo inolvidable en un crucero por el Bósforo. Saborea la deliciosa comida mientras contemplas las impresionantes vistas del horizonte y los monumentos históricos de Estambul.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Crucero con Almuerzo por el Bósforo – Relájate y Disfruta la Vista\">",
            "<meta name=\"twitter:description\" content=\"Relájate en un crucero por el Bósforo mientras disfrutas de un almuerzo exquisito. Explora la belleza del Estambul histórico con vistas panorámicas impresionantes.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Crociera con Pranzo sul Bosforo – Un Viaggio Panoramico di Giorno\">",
            "<meta property=\"og:description\" content=\"Goditi un pranzo indimenticabile durante una crociera sul Bosforo. Assapora deliziosi piatti turchi mentre ammiri lo straordinario skyline e i monumenti storici di Istanbul.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Crociera con Pranzo sul Bosforo – Rilassati e Ammira la Vista\">",
            "<meta name=\"twitter:description\" content=\"Rilassati in una crociera panoramica sul Bosforo mentre gusti un delizioso pranzo. Scopri la bellezza storica di Istanbul con viste mozzafiato.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"伊斯坦布尔博斯普鲁斯午餐游船 – 享受白天的壮丽航程\">",
            "<meta property=\"og:description\" content=\"乘坐伊斯坦布尔博斯普鲁斯午餐游船，享受一顿难忘的午餐。品尝美味的土耳其菜肴，同时欣赏壮丽的城市天际线和历史遗迹。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"伊斯坦布尔博斯普鲁斯午餐游船 – 享受美食与壮观景色\">",
            "<meta name=\"twitter:description\" content=\"在博斯普鲁斯享受宁静的午餐游船。品尝地道的土耳其美食，同时欣赏伊斯坦布尔历史遗迹的壮丽景观。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-bosphorus-lunch-cruise\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"رحلة غداء بحرية في مضيق البوسفور بإسطنبول – رحلة نهارية ساحرة\">",
            "<meta property=\"og:description\" content=\"استمتع برحلة غداء رائعة على متن رحلة بحرية في مضيق البوسفور بإسطنبول. تذوق أشهى المأكولات التركية أثناء الاستمتاع بإطلالات بانورامية على أفق المدينة ومعالمها التاريخية.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-bosphorus-lunch-cruise\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"رحلة غداء بحرية في مضيق البوسفور – استمتع بالطعام والمناظر الخلابة\">",
            "<meta name=\"twitter:description\" content=\"انضم إلى رحلة غداء مميزة في البوسفور، حيث يمكنك تذوق المأكولات التركية اللذيذة أثناء تأمل المناظر الخلابة للمدينة ومعالمها التاريخية.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istanbulTour2.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
    },
    "/tours/istanbul-full-day-tour": {


        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Istanbul Full-Day Tour – Explore the City’s Iconic Landmarks\">",
            "<meta property=\"og:description\" content=\"Discover the rich history and vibrant culture of Istanbul with a full-day city tour. Visit famous landmarks, explore historic sites, and experience the unique charm of this incredible city.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-full-day-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Istanbul Full-Day Tour – A Journey Through Time and Culture\">",
            "<meta name=\"twitter:description\" content=\"Explore Istanbul’s most iconic attractions in a full-day tour. Visit the Hagia Sophia, Blue Mosque, Grand Bazaar, and more while immersing yourself in the city's rich heritage .\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Полнодневный тур по Стамбулу – Исследуйте знаковые достопримечательности\">",
            "<meta property=\"og:description\" content=\"Откройте для себя богатую историю и уникальную культуру Стамбула во время полнодневного тура по городу. Посетите известные достопримечательности, исторические места и почувствуйте атмосферу этого удивительного города.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-full-day-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Полнодневный тур по Стамбулу – Путешествие во времени и культуре\">",
            "<meta name=\"twitter:description\" content=\"Посетите самые знаковые достопримечательности Стамбула за один день. Айя-София, Голубая мечеть, Гранд базар и многое другое ждут вас в этом незабываемом путешествии.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"İstanbul Tam Günlük Tur – Şehrin Tarihi ve Kültürünü Keşfedin\">",
            "<meta property=\"og:description\" content=\"İstanbul’un zengin tarihini ve büyüleyici kültürünü keşfetmek için tam günlük bir şehir turuna katılın. Ayasofya, Sultanahmet Camii, Kapalıçarşı ve daha birçok tarihi noktayı ziyaret edin.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-full-day-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"İstanbul Tam Günlük Tur – Tarih ve Kültürle Dolu Bir Yolculuk\">",
            "<meta name=\"twitter:description\" content=\"İstanbul’un en ikonik yerlerini tam günlük bir turla keşfedin. Ayasofya, Sultanahmet Camii, Kapalıçarşı ve daha fazlasını ziyaret ederek şehrin tarihine tanıklık edin.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Tour de Día Completo por Estambul – Explora los Monumentos Icónicos\">",
            "<meta property=\"og:description\" content=\"Descubre la rica historia y la vibrante cultura de Estambul con un tour de día completo. Visita monumentos famosos, explora sitios históricos y sumérgete en el encanto único de esta increíble ciudad.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-full-day-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Tour de Día Completo por Estambul – Un Viaje en el Tiempo y la Cultura\">",
            "<meta name=\"twitter:description\" content=\"Explora los monumentos más icónicos de Estambul en un tour de día completo. Visita Santa Sofía, la Mezquita Azul, el Gran Bazar y mucho más mientras descubres la historia de la ciudad.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Tour di un Giorno Intero a Istanbul – Esplora i Monumenti Iconici\">",
            "<meta property=\"og:description\" content=\"Scopri la ricca storia e la cultura vibrante di Istanbul con un tour di un giorno intero. Visita i monumenti più famosi, esplora i siti storici e lasciati affascinare dal fascino unico di questa incredibile città.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-full-day-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Tour di un Giorno Intero a Istanbul – Un Viaggio nella Storia e nella Cultura\">",
            "<meta name=\"twitter:description\" content=\"Esplora le attrazioni più iconiche di Istanbul in un tour di un giorno intero. Visita Santa Sofia, la Moschea Blu, il Grand Bazaar e molto altro mentre scopri la storia della città.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"伊斯坦布尔一日游 – 探索标志性地标\">",
            "<meta property=\"og:description\" content=\"通过伊斯坦布尔一日游，探索这座城市丰富的历史和文化魅力。游览著名的地标，参观历史遗址，感受这座迷人城市的独特魅力。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-full-day-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"伊斯坦布尔一日游 – 穿越历史与文化的旅程\">",
            "<meta name=\"twitter:description\" content=\"在伊斯坦布尔一日游中探索这座城市最具代表性的景点。游览圣索菲亚大教堂、蓝色清真寺、大巴扎等历史遗迹，沉浸在这座城市的辉煌历史中。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/istanbul-full-day-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/istanbul-full-day-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"جولة يوم كامل في إسطنبول – استكشف المعالم الأثرية الشهيرة\">",
            "<meta property=\"og:description\" content=\"اكتشف التاريخ العريق والثقافة النابضة بالحياة في إسطنبول من خلال جولة يوم كامل. زر المعالم الشهيرة، استكشف المواقع التاريخية، واستمتع بسحر هذه المدينة المذهلة.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/istanbul-full-day-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"جولة يوم كامل في إسطنبول – رحلة عبر الزمن والثقافة\">",
            "<meta name=\"twitter:description\" content=\"استكشف أشهر معالم إسطنبول من خلال جولة يوم كامل. قم بزيارة آيا صوفيا، المسجد الأزرق، السوق الكبير، والمزيد بينما تغوص في تاريخ المدينة العريق.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/istfullday.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
    },
    "/tours/paragliding-fethiye-oludeniz": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Paragliding in Fethiye Oludeniz – Soar Above the Blue Lagoon\">",
            "<meta property=\"og:description\" content=\"Experience the thrill of paragliding over Fethiye Oludeniz! Enjoy breathtaking aerial views of the Blue Lagoon as you glide through the sky in this unforgettable adventure.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Paragliding in Fethiye Oludeniz – A Sky-High Adventure Awaits\">",
            "<meta name=\"twitter:description\" content=\"Take off from Babadağ Mountain and experience the ultimate paragliding adventure over Oludeniz. Fly high above the Blue Lagoon and enjoy the thrill of free flight.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Параглайдинг в Фетхие Олюдениз – Парите над Голубой Лагуной\">",
            "<meta property=\"og:description\" content=\"Ощутите настоящий адреналин, полетая на параплане над Фетхие Олюдениз! Насладитесь захватывающими видами Голубой Лагуны с высоты птичьего полета.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Параглайдинг в Фетхие Олюдениз – Невероятное приключение в небе\">",
            "<meta name=\"twitter:description\" content=\"Стартуйте с горы Бабадаг и испытайте незабываемый полет на параплане над Олюдениз. Ощутите свободу полета и насладитесь красотой природы с высоты\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Fethiye Ölüdeniz Yamaç Paraşütü – Mavi Lagün’ün Üzerinde Uçun\">",
            "<meta property=\"og:description\" content=\"Fethiye Ölüdeniz’de yamaç paraşütü yaparak adrenalin dolu bir deneyim yaşayın! Mavi Lagün’ün eşsiz manzarasına gökyüzünden bakarken özgürlüğü hissedin.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Fethiye Ölüdeniz Yamaç Paraşütü – Gökyüzünde Heyecan Dolu Bir Macera\">",
            "<meta name=\"twitter:description\" content=\"Babadağ Dağı’ndan havalanın ve Ölüdeniz’in muhteşem manzarasında yamaç paraşütü yapmanın tadını çıkarın. Bu eşsiz macerayı kaçırmayın\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Parapente en Fethiye Oludeniz – Vuela Sobre la Laguna Azul\">",
            "<meta property=\"og:description\" content=\"Vive la emoción del parapente en Fethiye Oludeniz. Disfruta de impresionantes vistas aéreas de la Laguna Azul mientras vuelas por los cielos en esta aventura inolvidable.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Parapente en Fethiye Oludeniz – Una Aventura en el Cielo\">",
            "<meta name=\"twitter:description\" content=\"Despega desde la montaña Babadağ y experimenta la aventura definitiva del parapente sobre Oludeniz. Vuela alto sobre la Laguna Azul y siente la emoción del vuelo libre.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Parapendio a Fethiye Oludeniz – Vola sopra la Laguna Blu\">",
            "<meta property=\"og:description\" content=\"Vivi l'emozione del parapendio sopra Fethiye Oludeniz! Ammira viste mozzafiato della Laguna Blu mentre voli nel cielo in un'avventura indimenticabile.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Parapendio a Fethiye Oludeniz – Un'Avventura nel Cielo\">",
            "<meta name=\"twitter:description\" content=\"Decolla dal Monte Babadağ e prova l'emozione del parapendio su Oludeniz. Vola alto sopra la Laguna Blu e goditi l'incredibile esperienza del volo libero\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"费特希耶厄吕代尼兹滑翔伞 – 飞越蓝色泻湖\">",
            "<meta property=\"og:description\" content=\"体验在费特希耶厄吕代尼兹上空滑翔伞的刺激！俯瞰蓝色泻湖的壮丽景色，在这次难忘的冒险中自由翱翔于天空。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"费特希耶厄吕代尼兹滑翔伞 – 一场空中的奇妙冒险\">",
            "<meta name=\"twitter:description\" content=\"从巴巴达山起飞，体验终极滑翔伞之旅。翱翔在蓝色泻湖上空，感受自由飞行的惊险刺激\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/paragliding-fethiye-oludeniz\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"القفز بالمظلات في فتحية أولودينيز – حلق فوق البحيرة الزرقاء\">",
            "<meta property=\"og:description\" content=\"استمتع بتجربة القفز بالمظلات المثيرة فوق فتحية أولودينيز! استمتع بالمناظر الجوية الخلابة للبحيرة الزرقاء بينما تحلق في السماء في مغامرة لا تُنسى.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/paragliding-fethiye-oludeniz\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"القفز بالمظلات في فتحية أولودينيز – مغامرة جوية لا مثيل لها\">",
            "<meta name=\"twitter:description\" content=\"انطلق من جبل باباداغ واستمتع بأروع مغامرة للقفز بالمظلات فوق أولودينيز. حلق فوق البحيرة الزرقاء واستمتع بالإثارة المطلقة للطيران الحر!\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/paragliding-oludeniz.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
    },
    "/tours/antalya-sightseeing-city-tour": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Antalya Sightseeing City Tour – Discover the Beauty of the Mediterranean\">",
            "<meta property=\"og:description\" content=\"Explore Antalya’s stunning landmarks with a guided sightseeing city tour. Visit historic sites, breathtaking waterfalls, and panoramic viewpoints for an unforgettable experience.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Antalya Sightseeing City Tour – Explore History & Nature\">",
            "<meta name=\"twitter:description\" content=\"Discover the wonders of Antalya on a sightseeing tour! Visit historic attractions, admire waterfalls, and soak in the city’s breathtaking Mediterranean scenery.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Обзорная экскурсия по Анталии – Откройте красоту Средиземного моря\">",
            "<meta property=\"og:description\" content=\"Исследуйте самые удивительные достопримечательности Анталии с экскурсионным туром. Посетите исторические места, великолепные водопады и панорамные смотровые площадки.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Обзорная экскурсия по Анталии – История и природная красота\">",
            "<meta name=\"twitter:description\" content=\"Откройте для себя чудеса Анталии во время обзорного тура! Посетите исторические достопримечательности, полюбуйтесь водопадами и насладитесь средиземноморскими пейзажами.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Antalya Şehir Turu – Akdeniz’in Güzelliklerini Keşfedin\">",
            "<meta property=\"og:description\" content=\"Antalya’nın en ünlü tarihi ve doğal güzelliklerini keşfedin! Şehir turunda büyüleyici şelaleleri ziyaret edin, tarihi mekanları görün ve panoramik manzaraların tadını çıkarın.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Antalya Şehir Turu – Tarih ve Doğanın Buluştuğu Nokta\">",
            "<meta name=\"twitter:description\" content=\"Antalya’nın eşsiz güzelliklerini şehir turuyla keşfedin! Tarihi mekanları gezin, büyüleyici şelaleleri izleyin ve Akdeniz’in muhteşem manzarasının keyfini çıkarın.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Tour por la Ciudad de Antalya – Descubre la Belleza del Mediterráneo\">",
            "<meta property=\"og:description\" content=\"Explora los lugares más emblemáticos de Antalya con un tour guiado por la ciudad. Visita sitios históricos, impresionantes cascadas y miradores panorámicos en una experiencia inolvidable.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Tour por la Ciudad de Antalya – Historia y Naturaleza en un Solo Lugar\">",
            "<meta name=\"twitter:description\" content=\"Descubre la magia de Antalya en un tour por la ciudad. Visita monumentos históricos, maravíllate con sus cascadas y disfruta de impresionantes vistas del Mediterráneo.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Tour della Città di Antalya – Scopri la Bellezza del Mediterraneo\">",
            "<meta property=\"og:description\" content=\"Esplora i luoghi più famosi di Antalya con un tour guidato. Visita siti storici, ammira spettacolari cascate e goditi viste panoramiche indimenticabili sul Mediterraneo.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"Tour della Città di Antalya – Tra Storia e Natura\">",
            "<meta name=\"twitter:description\" content=\"Scopri la magia di Antalya con un tour guidato. Esplora monumenti storici, ammira cascate mozzafiato e goditi panorami spettacolari sul Mediterraneo.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"安塔利亚观光城市之旅 – 探索地中海的美丽\">",
            "<meta property=\"og:description\" content=\"跟随导游探索安塔利亚最著名的地标。参观历史遗迹、欣赏壮丽瀑布，并在令人惊叹的观景点上欣赏地中海的壮丽景色。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"安塔利亚观光城市之旅 – 历史与自然的完美结合\">",
            "<meta name=\"twitter:description\" content=\"在安塔利亚的观光之旅中，探索这座城市的魅力！参观历史古迹，欣赏壮观的瀑布，沉浸在迷人的地中海景色中。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"en\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ar\" href=\"${env.websiteDomain}/ar/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"es\" href=\"${env.websiteDomain}/es/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"it\" href=\"${env.websiteDomain}/it/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"ru\" href=\"${env.websiteDomain}/ru/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"zh\" href=\"${env.websiteDomain}/zh/tours/antalya-sightseeing-city-tour\" />`,
            `<link rel=\"alternate\" hreflang=\"x-default\" href=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"جولة سياحية في أنطاليا – استكشف جمال البحر الأبيض المتوسط\">",
            "<meta property=\"og:description\" content=\"استمتع بجولة سياحية في أنطاليا واكتشف معالمها الشهيرة. زر المواقع التاريخية، وشاهد الشلالات الرائعة، واستمتع بإطلالات بانورامية خلابة على البحر الأبيض المتوسط.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tours/antalya-sightseeing-city-tour\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta property=\"og:site_name\" content=\"Istanbul APL Transfers\">",
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:site\" content=\"@Istanbul_APL_Transfers\">",
            "<meta name=\"twitter:title\" content=\"جولة سياحية في أنطاليا – مزيج بين التاريخ والطبيعة\">",
            "<meta name=\"twitter:description\" content=\"اكتشف سحر أنطاليا من خلال جولة سياحية رائعة! قم بزيارة المعالم التاريخية، واستمتع بمشاهدة الشلالات المذهلة، واستمتع بالإطلالات الساحرة على البحر الأبيض المتوسط.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/tours/antalya.webp\">`,
            "<meta name=\"msvalidate.01\" content=\"41FC097AFD6E06774C838AC3D486664F\" />",
            "<meta name=\"baidu-site-verification\" content=\"x5apENcEmp\" />",
        ],
    },
})
