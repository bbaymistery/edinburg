export const driversWantedKeywords = {
    headTitle: {
        en: "Driver Wanted | APL Transfers Türkiye",
        tr: "Şoför Aranıyor | APL Transfers Türkiye",
        zh: "招聘司机 | APL Transfers Türkiye",
        ar: "مطلوب سائق | APL Transfers Türkiye",
        ru: "Требуется водитель | APL Transfers Türkiye",
        es: "Se Busca Conductor | APL Transfers Türkiye",
        it: "Cercasi Autista | APL Transfers Türkiye"
    },
    keywords: {
        en: "driver jobs Turkey, airport transfer driver, join APL Transfers, become a driver, driver application, Istanbul driver, Antalya transfer driver, VIP transport driver",
        tr: "şoför ilanları, havalimanı transfer şoförü, APL Transfers şoför, sürücü başvurusu, İstanbul şoför arayan, Antalya VIP taşıma, İzmir sürücü alımı, transfer aracı sürücüsü",
        zh: "司机招聘, 机场接送司机, APL Transfers 招聘, 土耳其司机工作, 司机申请, 伊斯坦布尔司机职位, VIP 接送司机, 安塔利亚运输司机",
        ar: "وظائف سائقين في تركيا, سائق نقل من المطار, انضم إلى APL Transfers, تقديم طلب سائق, سائق في اسطنبول, سائق في أنطاليا, سائق VIP, وظيفة سائق خاص",
        ru: "вакансии водителей в Турции, водитель трансфера из аэропорта, APL Transfers работа, подать заявку на водителя, водитель Стамбул, водитель Анталия, VIP перевозки",
        es: "trabajos de conductor en Turquía, conductor de traslados aeropuerto, únete a APL Transfers, solicitud de conductor, conductor en Estambul, transporte VIP, conductor Antalya",
        it: "lavoro autista Turchia, autista transfer aeroporto, lavora con APL Transfers, candidatura autista, autista Istanbul, trasporti VIP, autista Antalya"
    },
    metaDescription: {
        en: "Want to join the APL Transfers family? We are looking for drivers in Istanbul, Antalya, Izmir, and more for airport transfer services. Apply now!",
        tr: "APL Transfers ailesine katılmak ister misiniz? İstanbul, Antalya, İzmir ve diğer bölgelerde havalimanı transferleri için sürücüler arıyoruz. Hemen başvurun!",
        zh: "想加入 APL Transfers 团队吗？我们正在伊斯坦布尔、安塔利亚、伊兹密尔等地招聘机场接送司机。立即申请！",
        ar: "هل ترغب في الانضمام إلى عائلة APL Transfers؟ نحن نبحث عن سائقين في إسطنبول وأنطاليا وإزمير ومناطق أخرى لخدمات النقل من المطار. قدم الآن!",
        ru: "Хотите присоединиться к семье APL Transfers? Мы ищем водителей в Стамбуле, Анталье, Измире и других городах для трансферов из аэропорта. Подайте заявку!",
        es: "¿Quieres unirte a la familia de APL Transfers? Buscamos conductores en Estambul, Antalya, Izmir y más para traslados al aeropuerto. ¡Solicita ahora!",
        it: "Vuoi entrare a far parte della famiglia APL Transfers? Cerchiamo autisti a Istanbul, Antalya, Izmir e altre città per servizi di transfer aeroportuale. Candidati ora!"
    }
}
/**
 * Retrieves the single airport schema for the given pathname and language.
 * If the schema is not found for the given pathname and language, it returns `null`.
 *
 * @param {string} pathname - The pathname to look up the airport schema for.
 * @param {string} language - The language to retrieve the airport schema for.
 * @returns {object|null} The single airport schema, or `null` if not found.
 */
export const getSingleDriverWantedSchema = (pathname, language) => {
    return singleDriverWantedSchema[pathname]?.[language] || null; // ✅ Returns `null` instead of `undefined`
};
const singleDriverWantedSchema = {
    "/sofor-araniyor": {
        tr: {
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            "title": "Şoför Aranıyor",
            "description": "APL Transfers olarak İstanbul, Muğla, Fethiye, Antalya, Alanya, İzmir ve Gazipaşa bölgelerinde havalimanı transferleri için sürücüler arıyoruz. Esnek çalışma saatleri, hızlı ödeme ve VIP müşteri profili ile siz de APL ailesine katılın.",
            "identifier": {
                "@type": "PropertyValue",
                "name": "APL Transfers",
                "value": "apl-sofor-2025"
            },
            "datePosted": "2025-05-14",
            "employmentType": "Contractor",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "APL Transfers",
                "sameAs": "https://www.apltransfers.com",
                "logo": "https://www.apltransfers.com/images/logo.webp"
            },
            "jobLocation": [
                {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "İstanbul",
                        "addressCountry": "TR"
                    }
                },
                {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Antalya",
                        "addressCountry": "TR"
                    }
                },
                {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "İzmir",
                        "addressCountry": "TR"
                    }
                }
            ],
            "applicantLocationRequirements": {
                "@type": "Country",
                "name": "Türkiye"
            },
            "industry": "Havalimanı Transferi",
            "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "TRY",
                "value": {
                    "@type": "QuantitativeValue",
                    "value": "Görüşme üzerine",
                    "unitText": "HOUR"
                }
            }
        }
    },
    "/sofor-basvuru-formu": {
        tr: {
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            "title": "Şoför Başvuru Formu",
            "description": "APL Transfers olarak İstanbul, Muğla, Fethiye, Antalya, Alanya, İzmir ve Gazipaşa bölgelerinde havalimanı transferleri için sürücüler arıyoruz. Esnek çalışma saatleri, hızlı ödeme ve VIP müşteri profili ile siz de APL ailesine katılın.",
            "identifier": {
                "@type": "PropertyValue",
                "name": "APL Transfers",
                "value": "apl-sofor-basvuru-formu-2025"
            },
            "datePosted": "2025-05-14",
            "employmentType": "Contractor",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "APL Transfers",
                "sameAs": "https://www.apltransfers.com",
                "logo": "https://www.apltransfers.com/images/logo.webp"
            },
            "jobLocation": [
                {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "İstanbul",
                        "addressCountry": "TR"
                    }
                },
                {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Antalya",
                        "addressCountry": "TR"
                    }
                },
                {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "İzmir",
                        "addressCountry": "TR"
                    }
                }
            ],
            "applicantLocationRequirements": {
                "@type": "Country",
                "name": "Türkiye"
            },
            "industry": "Havalimanı Transferi",
            "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "TRY",
                "value": {
                    "@type": "QuantitativeValue",
                    "value": "Görüşme üzerine",
                    "unitText": "HOUR"
                }
            }
        }
    }

}

//*****************************************
//*****************************************
export const getMetaTagsDriversWanted = (pathname, language, env) => {
    const metaTagsData = metaTagsDriversWanted(env); // Get all meta tag data
    return metaTagsData[pathname]?.[language] || []; // Return the meta tags for the specific pathname and language
};
const metaTagsDriversWanted = (env) => ({
    "/sofor-araniyor": {
        tr: [

            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/sofor-araniyor\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Şoför Aranıyor | APL Transfers Türkiye\">",
            "<meta property=\"og:description\" content=\"İstanbul Havalimanı'ndan (IST) sabit fiyatlarla özel taksi rezervasyonu yapın, ücretsiz karşılama hizmeti ve gizli ücretler olmadan seyahat edin. Güvenli online rezervasyon ve 7/24 müşteri desteği.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tr/sofor-araniyor\">`,
            `<meta property=\"og:image\"content=\"${env.websiteDomain}/images/sofor-araniyor.jpg\">`,
            `<meta property=\"og:site_name\"content=\"APL Transfers\">`,
            `<meta property=\"og:image:alt\"content=\"Şoför Aranıyor - APL Transfers Sürücü Başvurusu\">`,
            `<meta property=\"article:publisher\"content=\"https://www.facebook.com/APLTransfers\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Şoför Aranıyor | APL Transfers Türkiye\">",
            "<meta name=\"twitter:description\" content=\"Türkiye ekibine katılmak ister misiniz? Sürücü başvurularınızı bekliyoruz.\">",
            `<meta name=\"twitter:image\" "content=\"${env.websiteDomain}/images/sofor-araniyor.jpg\">`,
            "<meta name=\"twitter:site\" content=\"@APLTransfers\">",
        ],
    },
    "/sofor-basvuru-formu": {
        tr: [
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/sofor-basvuru-formu\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Şoför Başvuru Formu | APL Transfers Türkiye\">",
            "<meta property=\"og:description\" content=\"İstanbul Havalimanı'ndan (IST) sabit fiyatlarla özel taksi rezervasyonu yapın, ücretsiz karşılama hizmeti ve gizli ücretler olmadan seyahat edin. Güvenli online rezervasyon ve 7/24 müşteri desteği.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/tr/sofor-basvuru-formu\">`,
            `<meta property=\"og:image\"content=\"${env.websiteDomain}/images/sofor-araniyor.jpg\">`,
            `<meta property=\"og:site_name\"content=\"APL Transfers\">`,
            `<meta property=\"og:image:alt\"content=\"Şoför Başvuru Formu - APL Transfers Sürücü Başvurusu\">`,
            `<meta property=\"article:publisher\"content=\"https://www.facebook.com/APLTransfers\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Şoför Başvuru Formu | APL Transfers Türkiye\">",
            "<meta name=\"twitter:description\" content=\"Türkiye ekibine katılmak ister misiniz? Sürücü başvurularınızı bekliyoruz.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/sofor-araniyor.jpg\">`,
            "<meta name=\"twitter:site\" content=\"@APLTransfers\">",
        ],
    }

})