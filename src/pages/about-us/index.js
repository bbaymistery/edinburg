import React from 'react'
import { isUrlLoverCase } from '../../helpers/isUrlLoverCase';
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl';
import GlobalLayout from '../../components/layouts/GlobalLayout';
import DangerouslyInnerHtml from '../../components/elements/DangerouslyInnerHtml';
import { generalAllTranslations } from '../../constants/generalTranslataions';
import { parse } from 'url';
import { parseCookies } from '../../helpers/cokieesFunc';
import { aboutUsKeywords } from '../../constants/keywordsAndContents/aboutus/keywordsAndContents';
import { adjustPathnameForLanguage } from '../../helpers/adjustedPageLanguage';
import { useSelector } from 'react-redux';
import styles from "./styles.module.scss"
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader';
import { fetchConfig } from '../../resources/getEnvConfig';
const aboutContents = {
  en: `
    <h1>About Us – APL Edinburgh</h1>
    <p>
      <strong>APL Edinburgh</strong> is proud to be part of <strong>Airport Pickups London (APL)</strong> — a London-based, 5-star rated airport transportation company with over <strong>730 active vehicles</strong> operating across the UK.
    </p>
    <p>
      With nearly two decades of experience in premium airport transfers, APL has earned a trusted reputation for exceptional service, advanced technology, and customer satisfaction. Now, we bring that same level of professionalism, reliability, and care to passengers and drivers throughout <strong>Scotland</strong>.
    </p>
    <p>
      At APL Edinburgh, we specialise in <strong>private airport transfers</strong>, <strong>long-distance journeys</strong>, and <strong>VIP transportation</strong> to and from <strong>Edinburgh Airport</strong> and all major Scottish cities and towns. Our service is tailored for families, business travellers, tourists, and groups — always with comfort, safety, and punctuality at the heart of everything we do.
    </p>
    <p>
      As part of the APL Group, we combine the strength of a nationwide company with local expertise and attention to detail. Every booking is supported by a dedicated team, <strong>24/7 customer service</strong>, and a fleet of fully licensed, modern vehicles.
    </p>

    <hr />

    <h2>Why Choose APL Edinburgh?</h2>
    <ul>
      <li>Backed by one of the UK’s largest and highest-rated transfer companies</li>
      <li>Over <strong>730</strong> licensed vehicles nationwide</li>
      <li>Trusted by thousands of UK and international passengers</li>
      <li>5-star reviews on platforms like <strong>Trustpilot</strong> and <strong>TripAdvisor</strong></li>
      <li>Transparent pricing and easy online booking</li>
      <li>Fully insured, clean, and professional vehicles with experienced drivers</li>
    </ul>

    <hr />

    <p>
      Whether you're travelling for business, tourism, or family reasons — choose <strong>APL Edinburgh</strong> for a smooth, comfortable, and stress-free journey.
    </p>
  `,
  tr: `
    <h1>Hakkımızda – APL Edinburgh</h1>
    <p>
      <strong>APL Edinburgh</strong>, <strong>Airport Pickups London (APL)</strong>’ın bir parçası olmaktan gurur duyar — Londra merkezli, 5 yıldızlı ve Birleşik Krallık genelinde <strong>730’dan fazla aktif araca</strong> sahip bir havaalanı ulaşım şirketidir.
    </p>
    <p>
      Yaklaşık yirmi yıllık premium havaalanı transferi deneyimiyle APL, olağanüstü hizmet, ileri teknoloji ve müşteri memnuniyeti konusunda güvenilir bir itibar kazanmıştır. Şimdi, aynı profesyonellik, güvenilirlik ve özen standartlarını <strong>İskoçya</strong> genelindeki yolculara ve şoförlere sunuyoruz.
    </p>
    <p>
      APL Edinburgh olarak, <strong>özel havaalanı transferleri</strong>, <strong>uzun mesafe yolculuklar</strong> ve <strong>VIP ulaşım</strong> konusunda uzmanız. <strong>Edinburgh Havalimanı</strong>’ndan ve tüm büyük İskoç şehir ve kasabalarına hizmet veriyoruz. Hizmetimiz aileler, iş seyahatinde olanlar, turistler ve gruplar için özel olarak hazırlanmıştır — her zaman konfor, güvenlik ve dakiklik ön planda tutulur.
    </p>
    <p>
      APL Group’un bir parçası olarak, ulusal bir şirketin gücünü yerel uzmanlık ve ayrıntılara dikkatle birleştiriyoruz. Her rezervasyon, özel bir ekip, <strong>7/24 müşteri hizmeti</strong> ve tamamen lisanslı, modern araçlardan oluşan bir filo tarafından desteklenmektedir.
    </p>

    <hr />

    <h2>Neden APL Edinburgh?</h2>
    <ul>
      <li>Birleşik Krallık’ın en büyük ve en yüksek puanlı transfer şirketlerinden biri tarafından desteklenir</li>
      <li>Ülke genelinde <strong>730’dan fazla</strong> lisanslı araç</li>
      <li>Binlerce Birleşik Krallık ve uluslararası yolcu tarafından tercih edilmektedir</li>
      <li><strong>Trustpilot</strong> ve <strong>TripAdvisor</strong> gibi platformlarda 5 yıldızlı yorumlar</li>
      <li>Şeffaf fiyatlandırma ve kolay online rezervasyon</li>
      <li>Tamamen sigortalı, temiz ve profesyonel araçlar ile deneyimli şoförler</li>
    </ul>

    <hr />

    <p>
      İster iş, ister turizm, ister aile seyahati için yolculuk yapıyor olun — <strong>APL Edinburgh</strong>’u seçin ve sorunsuz, konforlu ve stressiz bir yolculuğun keyfini çıkarın.
    </p>
  `,
  ru: `
    <h1>О нас – APL Edinburgh</h1>
    <p>
      <strong>APL Edinburgh</strong> гордится тем, что является частью <strong>Airport Pickups London (APL)</strong> — лондонской компании с 5-звёздочным рейтингом, которая располагает более чем <strong>730 активными автомобилями</strong>, работающими по всей Великобритании.
    </p>
    <p>
      Почти двадцать лет опыта в сфере премиальных трансферов сделали APL надёжным партнёром, известным своим исключительным сервисом, современными технологиями и высоким уровнем удовлетворенности клиентов. Теперь мы привносим тот же уровень профессионализма, надёжности и заботы о пассажирах и водителях по всей <strong>Шотландии</strong>.
    </p>
    <p>
      В APL Edinburgh мы специализируемся на <strong>индивидуальных трансферах из аэропорта</strong>, <strong>дальних поездках</strong> и <strong>VIP-транспортировке</strong> из и в <strong>аэропорт Эдинбурга</strong>, а также во все крупные города и посёлки Шотландии. Наш сервис подходит для семей, деловых путешественников, туристов и групп — всегда с комфортом, безопасностью и пунктуальностью в центре всего, что мы делаем.
    </p>
    <p>
      Будучи частью группы APL, мы объединяем силу национальной компании с местным опытом и вниманием к деталям. Каждое бронирование сопровождается поддержкой нашей специализированной команды, <strong>круглосуточной службой поддержки 24/7</strong> и автопарком современных лицензированных автомобилей.
    </p>

    <hr />

    <h2>Почему выбирают APL Edinburgh?</h2>
    <ul>
      <li>Поддержка одной из крупнейших и самых высоко оценённых трансферных компаний Великобритании</li>
      <li>Более <strong>730</strong> лицензированных автомобилей по всей стране</li>
      <li>Доверие тысяч пассажиров из Великобритании и всего мира</li>
      <li>5-звёздочные отзывы на таких платформах, как <strong>Trustpilot</strong> и <strong>TripAdvisor</strong></li>
      <li>Прозрачные цены и удобное онлайн-бронирование</li>
      <li>Полностью застрахованные, чистые и профессиональные автомобили с опытными водителями</li>
    </ul>

    <hr />

    <p>
      Путешествуете ли вы по работе, в туристических целях или с семьёй — выбирайте <strong>APL Edinburgh</strong> для комфортной, спокойной и беззаботной поездки.
    </p>
  `,
  ar: `
    <h1>معلومات عنا – APL Edinburgh</h1>
    <p>
      <strong>APL Edinburgh</strong> تفخر بكونها جزءًا من <strong>Airport Pickups London (APL)</strong> — شركة نقل مطار مقرها لندن حاصلة على تقييم 5 نجوم، وتدير أكثر من <strong>730 مركبة نشطة</strong> في جميع أنحاء المملكة المتحدة.
    </p>
    <p>
      مع ما يقرب من عشرين عامًا من الخبرة في خدمات النقل المميزة من وإلى المطارات، اكتسبت APL سمعة موثوقة بفضل الخدمة الاستثنائية، التكنولوجيا المتقدمة، ورضا العملاء. والآن، نقدم نفس المستوى من الاحترافية والموثوقية والعناية للركاب والسائقين في جميع أنحاء <strong>اسكتلندا</strong>.
    </p>
    <p>
      نحن في APL Edinburgh متخصصون في <strong>خدمات النقل الخاصة من المطارات</strong>، <strong>الرحلات الطويلة</strong>، و<strong>خدمات النقل لكبار الشخصيات (VIP)</strong> من وإلى <strong>مطار إدنبرة</strong> وجميع المدن والبلدات الكبرى في اسكتلندا. خدمتنا مصممة خصيصًا للعائلات، رجال الأعمال، السياح، والمجموعات — دائمًا مع مراعاة الراحة، السلامة، والدقة في المواعيد.
    </p>
    <p>
      كجزء من مجموعة APL، نحن نجمع بين قوة شركة وطنية وخبرة محلية مع اهتمام بأدق التفاصيل. كل حجز مدعوم بفريق متخصص، <strong>خدمة عملاء متوفرة 24/7</strong>، وأسطول من المركبات الحديثة المرخصة بالكامل.
    </p>

    <hr />

    <h2>لماذا تختار APL Edinburgh؟</h2>
    <ul>
      <li>مدعومة من واحدة من أكبر وأعلى شركات النقل تقييمًا في المملكة المتحدة</li>
      <li>أكثر من <strong>730</strong> مركبة مرخصة في جميع أنحاء البلاد</li>
      <li>موثوق بها من قبل آلاف الركاب المحليين والدوليين</li>
      <li>تقييمات 5 نجوم على منصات مثل <strong>Trustpilot</strong> و<strong>TripAdvisor</strong></li>
      <li>تسعير شفاف وحجز إلكتروني سهل</li>
      <li>مركبات نظيفة، مؤمنة بالكامل، يقودها سائقون محترفون ذوو خبرة</li>
    </ul>

    <hr />

    <p>
      سواء كنت مسافرًا للعمل، السياحة، أو مع العائلة — اختر <strong>APL Edinburgh</strong> لرحلة سلسة، مريحة وخالية من التوتر.
    </p>
  `,
  it: `
    <h1>Chi Siamo – APL Edinburgh</h1>
    <p>
      <strong>APL Edinburgh</strong> è orgogliosa di far parte di <strong>Airport Pickups London (APL)</strong> — un'azienda di trasporti aeroportuali con sede a Londra, valutata 5 stelle, con oltre <strong>730 veicoli attivi</strong> operanti in tutto il Regno Unito.
    </p>
    <p>
      Con quasi vent’anni di esperienza nei trasferimenti aeroportuali di lusso, APL ha guadagnato una reputazione affidabile per il servizio eccezionale, la tecnologia avanzata e la soddisfazione del cliente. Ora portiamo lo stesso livello di professionalità, affidabilità e cura ai passeggeri e agli autisti in tutta la <strong>Scozia</strong>.
    </p>
    <p>
      Presso APL Edinburgh siamo specializzati in <strong>trasferimenti aeroportuali privati</strong>, <strong>viaggi a lunga distanza</strong> e <strong>trasporto VIP</strong> da e per <strong>l’Aeroporto di Edimburgo</strong> e tutte le principali città e paesi scozzesi. Il nostro servizio è pensato per famiglie, viaggiatori d’affari, turisti e gruppi — sempre con comfort, sicurezza e puntualità al centro di tutto ciò che facciamo.
    </p>
    <p>
      Come parte del gruppo APL, uniamo la forza di una compagnia nazionale con l’esperienza locale e l’attenzione ai dettagli. Ogni prenotazione è supportata da un team dedicato, <strong>assistenza clienti 24/7</strong> e una flotta di veicoli moderni e completamente autorizzati.
    </p>

    <hr />

    <h2>Perché scegliere APL Edinburgh?</h2>
    <ul>
      <li>Sostenuta da una delle più grandi e meglio valutate compagnie di trasferimenti del Regno Unito</li>
      <li>Oltre <strong>730</strong> veicoli autorizzati in tutto il paese</li>
      <li>Scelta da migliaia di passeggeri britannici e internazionali</li>
      <li>Recensioni a 5 stelle su piattaforme come <strong>Trustpilot</strong> e <strong>TripAdvisor</strong></li>
      <li>Prezzi trasparenti e prenotazione online semplice</li>
      <li>Veicoli puliti, assicurati e professionali con autisti esperti</li>
    </ul>

    <hr />

    <p>
      Che tu stia viaggiando per lavoro, turismo o motivi familiari — scegli <strong>APL Edinburgh</strong> per un viaggio fluido, confortevole e senza stress.
    </p>
  `,

  es: `
    <h1>Sobre Nosotros – APL Edinburgh</h1>
    <p>
      <strong>APL Edinburgh</strong> se enorgullece de ser parte de <strong>Airport Pickups London (APL)</strong> — una empresa de transporte aeroportuario con sede en Londres, calificada con 5 estrellas, que cuenta con más de <strong>730 vehículos activos</strong> en funcionamiento en todo el Reino Unido.
    </p>
    <p>
      Con casi dos décadas de experiencia en traslados aeroportuarios premium, APL ha ganado una reputación de confianza por su servicio excepcional, tecnología avanzada y satisfacción del cliente. Ahora llevamos el mismo nivel de profesionalismo, fiabilidad y cuidado a pasajeros y conductores en toda <strong>Escocia</strong>.
    </p>
    <p>
      En APL Edinburgh nos especializamos en <strong>traslados privados desde/hacia aeropuertos</strong>, <strong>viajes de larga distancia</strong> y <strong>transporte VIP</strong> desde y hacia el <strong>Aeropuerto de Edimburgo</strong> y todas las principales ciudades y pueblos de Escocia. Nuestro servicio está diseñado para familias, viajeros de negocios, turistas y grupos — siempre con comodidad, seguridad y puntualidad en el centro de todo lo que hacemos.
    </p>
    <p>
      Como parte del grupo APL, combinamos la fuerza de una empresa nacional con la experiencia local y la atención al detalle. Cada reserva está respaldada por un equipo dedicado, <strong>atención al cliente 24/7</strong> y una flota de vehículos modernos totalmente autorizados.
    </p>

    <hr />

    <h2>¿Por qué elegir APL Edinburgh?</h2>
    <ul>
      <li>Respaldada por una de las compañías de traslados más grandes y mejor valoradas del Reino Unido</li>
      <li>Más de <strong>730</strong> vehículos autorizados en todo el país</li>
      <li>De confianza para miles de pasajeros del Reino Unido e internacionales</li>
      <li>Reseñas de 5 estrellas en plataformas como <strong>Trustpilot</strong> y <strong>TripAdvisor</strong></li>
      <li>Precios transparentes y fácil reserva en línea</li>
      <li>Vehículos totalmente asegurados, limpios y profesionales con conductores experimentados</li>
    </ul>

    <hr />

    <p>
      Ya sea que viajes por negocios, turismo o con tu familia — elige <strong>APL Edinburgh</strong> para un viaje cómodo, seguro y sin estrés.
    </p>
  `,
  zh: `
    <h1>关于我们 – APL Edinburgh</h1>
    <p>
      <strong>APL Edinburgh</strong> 很荣幸成为 <strong>Airport Pickups London (APL)</strong> 的一部分 —— 这是一家总部位于伦敦的五星级机场接送公司，在英国拥有超过 <strong>730 辆活跃车辆</strong>。
    </p>
    <p>
      凭借近二十年的高端机场接送经验，APL 以卓越的服务、先进的技术和客户满意度赢得了良好的声誉。如今，我们将同样的专业性、可靠性和关怀带给整个 <strong>苏格兰</strong> 的乘客和司机。
    </p>
    <p>
      在 APL Edinburgh，我们专注于 <strong>私人机场接送</strong>、<strong>长途出行</strong> 和 <strong>VIP 专车服务</strong>，往返于 <strong>爱丁堡机场</strong> 及苏格兰所有主要城市和城镇。我们的服务特别为家庭、商务旅客、游客和团队设计 —— 始终以舒适、安全和准时为核心。
    </p>
    <p>
      作为 APL 集团的一部分，我们将全国公司的实力与本地的专业知识和对细节的关注相结合。每一笔预订都由专业团队提供支持，配有 <strong>24/7 全天候客户服务</strong>，以及一支完全合规、现代化的车队。
    </p>

    <hr />

    <h2>为什么选择 APL Edinburgh？</h2>
    <ul>
      <li>由英国最大、评价最高的接送公司之一提供支持</li>
      <li>全国范围内拥有超过 <strong>730</strong> 辆认证车辆</li>
      <li>赢得数千名英国及国际旅客的信赖</li>
      <li>在 <strong>Trustpilot</strong> 和 <strong>TripAdvisor</strong> 等平台上获得五星好评</li>
      <li>价格透明，在线预订方便快捷</li>
      <li>全保险、干净整洁、专业的车辆，经验丰富的司机</li>
    </ul>

    <hr />

    <p>
      无论您是商务出行、旅游，还是与家人同行 —— 请选择 <strong>APL Edinburgh</strong>，享受顺畅、舒适、无忧的旅程。
    </p>
  `,

};

const AboutUs = (props) => {
  const state = useSelector(state => state.pickUpDropOffActions)
  let { params: { direction, language } } = state
  let { metaDescription, keywords, headTitle } = props

  return (
    <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription} mainCanonical={props.mainCanonical}>
      <div className={`${styles.aboutus} ${direction} page`} >
        <div className={`${styles.aboutus_section} page_section`}>
          <div className={`${styles.aboutus_section_container} page_section_container`}>
            <div className={styles.breadcrumb}>
              <span><a href="/">{generalAllTranslations.strHome[language]}</a></span>
              <span>{">"}</span>
              <span><a href="/about-us">{generalAllTranslations.strAboutUs[language]} </a> </span>
            </div>
            <div className={styles.aboutus_container}>
              <DangerouslyInnerHtml htmContent={aboutContents[language]} />
            </div>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
}
export async function getServerSideProps({ req, res, query, resolvedUrl }) {

  setNoCacheHeader(res, true);

  isUrlLoverCase(resolvedUrl, res)

  //get cookie and pathnames
  let cookies = parseCookies(req.headers.cookie);
  let { pathname } = parse(req.url, true)
  let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url)

  // Adjust pathname and language based on initial language
  const adjusted = adjustPathnameForLanguage(pathname, pageStartLanguage, cookies);
  pathname = adjusted.pathname;
  pageStartLanguage = adjusted.pageStartLanguage;

  let metaDescription = aboutUsKeywords.metaDescription[pageStartLanguage]
  let keywords = aboutUsKeywords.keywords[pageStartLanguage];
  let headTitle = aboutUsKeywords.headTitle[pageStartLanguage];
  const env = await fetchConfig();
  const mainCanonical = `${env.websiteDomain}${pageStartLanguage === 'en' ? "/about-us" : `/${pageStartLanguage}/about-us`}`
  return {
    //we pass tourdetails fot adding inside redux generally all together
    props: { metaDescription, keywords, headTitle, mainCanonical }
  };


}
export default AboutUs