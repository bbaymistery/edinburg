
import GlobalLayout from '../components/layouts/GlobalLayout'

export default function Home(props) {

  return (
    <GlobalLayout>
      Salam
    </GlobalLayout>
  )
}
const seoHomeDefaults = {
  en: {
    title: "APL Transfers | Turkey Transfers & Tours",
    keywords:
      "Istanbul airport transfer, Sabiha Gokcen transfer, Beşiktaş taxi, Taksim transportation, Antalya tours, Fethiye boat tour, Oludeniz paragliding, Cappadocia balloon tour, Turkey tours, private transfer service",
    description:
      "We provide private transfer and tour services in Istanbul, Antalya, Fethiye, and more. Enjoy safe and comfortable airport transfers, city transport, and top-rated tours in Turkey. Book now for a hassle-free experience!",
  },
  ru: {
    title: "APL Transfers | Трансферы и туры по Турции",
    keywords:
      "трансфер из аэропорта Стамбула, трансфер Сабиха Гекчен, такси Бешикташ, транспорт Таксим, туры в Анталье, морской тур в Фетхие, парапланеризм Олюдениз, воздушный шар Каппадокия, туры по Турции, частный трансфер",
    description:
      "Мы предоставляем частные трансферы и экскурсионные услуги в Стамбуле, Анталии, Фетхие и других городах. Наслаждайтесь безопасными и комфортными трансферами из аэропорта, городским транспортом и лучшими турами по Турции. Бронируйте прямо сейчас!",
  },
  tr: {
    title: "APL Transfers | Türkiye Transfer ve Turları",
    keywords:
      "İstanbul havalimanı transfer, Sabiha Gökçen transfer, Beşiktaş taksi, Taksim ulaşım, Antalya turları, Fethiye tekne turu, Ölüdeniz yamaç paraşütü, Kapadokya balon turu, Türkiye turları, özel transfer hizmeti",
    description:
      "İstanbul, Antalya, Fethiye ve daha birçok şehirde özel transfer ve tur hizmetleri sunuyoruz. Havalimanı transferi, şehir içi ulaşım ve en popüler turlar ile güvenli ve konforlu seyahat edin. Hemen rezervasyon yapın!",
  },
  ar: {
    title: "APL Transfers | خدمات النقل والجولات في تركيا",
    keywords:
      "نقل مطار اسطنبول, نقل صبيحة كوكجن, تاكسي بشكتاش, مواصلات تقسيم, جولات أنطاليا, جولة القارب في فتحية, الطيران الشراعي أولودينيز, منطاد كابادوكيا, جولات تركيا, خدمة النقل الخاص",
    description:
      "نحن نقدم خدمات النقل والجولات الخاصة في اسطنبول، أنطاليا، فتحية والمزيد. استمتع برحلات نقل آمنة ومريحة من المطار، وخدمات التنقل داخل المدينة، والجولات الأكثر تميزًا في تركيا. احجز الآن لتجربة خالية من المتاعب!",
  },
  es: {
    title: "APL Transfers | Traslados y Tours en Turquía",
    keywords:
      "traslado aeropuerto Estambul, traslado Sabiha Gokcen, taxi Beşiktaş, transporte Taksim, tours en Antalya, tour en barco Fethiye, parapente Oludeniz, globo aerostático Capadocia, tours en Turquía, servicio de traslado privado",
    description:
      "Ofrecemos servicios de traslados y tours privados en Estambul, Antalya, Fethiye y más. Disfruta de traslados seguros y cómodos desde el aeropuerto, transporte por la ciudad y los mejores tours en Turquía. ¡Reserva ahora!",
  },
  it: {
    title: "APL Transfers | Trasferimenti e Tour in Turchia",
    keywords:
      "trasferimento aeroporto Istanbul, trasferimento Sabiha Gokcen, taxi Beşiktaş, trasporto Taksim, tour Antalya, tour in barca Fethiye, parapendio Oludeniz, mongolfiera Cappadocia, tour in Turchia, servizio di trasferimento privato",
    description:
      "Offriamo servizi di trasferimento privato e tour a Istanbul, Antalya, Fethiye e altro ancora. Goditi trasferimenti aeroportuali sicuri e confortevoli, trasporti in città e i migliori tour in Turchia. Prenota ora per un'esperienza senza stress!",
  },
  zh: {
    title: "APL Transfers | 土耳其接送与旅游服务",
    keywords:
      "伊斯坦布尔机场接送, 萨比哈·格克琴接送, 贝西克塔斯出租车, 塔克西姆交通, 安塔利亚旅游, 费特希耶游船, 厄吕代尼兹滑翔伞, 卡帕多奇亚热气球, 土耳其旅游, 私人接送服务",
    description:
      "我们在伊斯坦布尔、安塔利亚、费特希耶等地提供私人接送和旅游服务。享受安全舒适的机场接送、市区交通，以及土耳其最受欢迎的旅行路线。立即预订，轻松出行！",
  },
};

export async function getServerSideProps({ req, res, query, resolvedUrl }) {
  // setNoCacheHeader(res, false);
  // Cache'i kapat
  console.log("getServerSideProps called");

  return {
    //we pass tourdetails fot adding inside redux generally all together
    props: {}
  };
}
