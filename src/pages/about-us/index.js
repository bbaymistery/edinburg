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
    <h1>About Us</h1>
  <p>
    At APL Transfers Turkey, we are dedicated to delivering a premium travel experience for our valued customers. As an extension of the trusted Airport Pickups London (APL Cars) brand in London, we uphold the same high standards of quality, reliability, and customer satisfaction that have defined our reputation for years.
  </p>

  <h2>Who We Are</h2>
  <p>
    APL Transfers Turkey is your reliable partner for airport transfers and daily tours across Turkey’s most popular destinations. From Istanbul to Antalya, Dalaman to Bodrum, and beyond, our professional team is committed to exceeding your expectations. With operation offices in <strong>Istanbul Kadikoy</strong> and <strong>Fethiye Central</strong>, and our <strong>London office serving as the central hub</strong>, we combine local expertise with international standards to create an unparalleled experience for every traveler.
  </p>

  <h2>What Sets Us Apart</h2>
  <ul>
    <li><strong>Trusted Legacy:</strong> Backed by years of excellence with APL in London.</li>
    <li><strong>Professional Drivers:</strong> Experienced, courteous, and committed to providing the best service.</li>
    <li><strong>Modern Fleet:</strong> A range of well-maintained vehicles to suit your travel needs.</li>
    <li><strong>Customer-Centric Approach:</strong> Tailored services designed with your comfort and satisfaction in mind.</li>
  </ul>

  <h2>Our Services</h2>
  <ul>
    <li><strong>Airport Transfers:</strong> Fixed-price transfers with a meet-and-greet service from major Turkish airports.</li>
    <li><strong>Daily Tours:</strong> Explore Turkey’s rich cultural and historical sites with our curated tour options.</li>
  </ul>

  <h2>Why Choose APL Transfers Turkey?</h2>
  <ul>
    <li><strong>Reliability:</strong> Punctual and professional service you can count on.</li>
    <li><strong>24/7 Contact Line:</strong> Our dedicated team is available around the clock to assist you with your travel needs.</li>
    <li><strong>Comfort:</strong> Spacious, air-conditioned vehicles for a relaxed journey.</li>
    <li><strong>Transparency:</strong> No hidden charges; all prices are fixed upfront.</li>
  </ul>

  <p>
    At APL Transfers Turkey, we strive to make every trip memorable, whether you’re visiting for business or leisure. We’re proud to be your trusted travel partner in Turkey.
  </p>

  <p><strong>Experience the difference with APL Transfers Turkey.</strong></p>
    `,
    tr: `
     <h1>Hakkımızda</h1>
<p>
  APL Transfers Turkey olarak, değerli müşterilerimize üstün bir seyahat deneyimi sunmaya kendimizi adadık. Londra'daki güvenilir Airport Pickups London (APL Cars) markasının bir uzantısı olarak, yıllardır bizi tanımlayan kalite, güvenilirlik ve müşteri memnuniyeti konusundaki yüksek standartları sürdürüyoruz.
</p>

<h2>Biz Kimiz</h2>
<p>
  APL Transfers Turkey, Türkiye'nin en popüler destinasyonlarında havaalanı transferleri ve günlük turlar için güvenilir ortağınızdır. İstanbul'dan Antalya'ya, Dalaman'dan Bodrum’a kadar profesyonel ekibimiz beklentilerinizi aşmaya kararlıdır. <strong>İstanbul Kadıköy</strong> ve <strong>Fethiye Merkez</strong>deki operasyon ofislerimiz ve <strong>Londra’daki merkez ofisimiz</strong> ile yerel uzmanlığı uluslararası standartlarla birleştirerek her gezgin için eşsiz bir deneyim sunuyoruz.
</p>

<h2>Bizi Farklı Kılan Nedir?</h2>
<ul>
  <li><strong>Güvenilir Miras:</strong> Londra’daki APL ile yıllara dayanan mükemmellik.</li>
  <li><strong>Profesyonel Sürücüler:</strong> Deneyimli, nazik ve en iyi hizmeti sunmaya kendini adamış sürücüler.</li>
  <li><strong>Modern Araç Filosu:</strong> Seyahat ihtiyaçlarınıza uygun, iyi bakımlı araçlardan oluşan geniş bir filo.</li>
  <li><strong>Müşteri Odaklı Yaklaşım:</strong> Konforunuz ve memnuniyetiniz için özel olarak tasarlanmış hizmetler.</li>
</ul>

<h2>Hizmetlerimiz</h2>
<ul>
  <li><strong>Havaalanı Transferleri:</strong> Türkiye'deki büyük havaalanlarından sabit fiyatlı, karşılama hizmeti içeren transferler.</li>
  <li><strong>Günlük Turlar:</strong> Türkiye’nin zengin kültürel ve tarihi alanlarını özenle hazırlanmış tur seçeneklerimizle keşfedin.</li>
</ul>

<h2>Neden APL Transfers Turkey?</h2>
<ul>
  <li><strong>Güvenilirlik:</strong> Dakik ve profesyonel hizmete güvenebilirsiniz.</li>
  <li><strong>7/24 İletişim Hattı:</strong> Seyahat ihtiyaçlarınızda size yardımcı olmak için günün her saati ulaşılabilir ekibimiz mevcut.</li>
  <li><strong>Konfor:</strong> Rahat bir yolculuk için ferah ve klimalı araçlar.</li>
  <li><strong>Şeffaflık:</strong> Gizli ücret yoktur; tüm fiyatlar önceden belirlenmiştir.</li>
</ul>

<p>
  APL Transfers Turkey olarak, ister iş ister tatil için seyahat ediyor olun, her yolculuğunuzu unutulmaz kılmak için çabalıyoruz. Türkiye'deki güvenilir seyahat ortağınız olmaktan gurur duyuyoruz.
</p>

<p><strong>Farkı APL Transfers Turkey ile yaşayın.</strong></p>

    `,
    es: ` 
    <h1>Sobre Nosotros</h1>
<p>
  En APL Transfers Turkey, estamos dedicados a ofrecer una experiencia de viaje premium para nuestros valiosos clientes. Como una extensión de la reconocida marca Airport Pickups London (APL Cars) en Londres, mantenemos los mismos altos estándares de calidad, confiabilidad y satisfacción del cliente que nos han definido durante años.
</p>

<h2>Quiénes Somos</h2>
<p>
  APL Transfers Turkey es su socio confiable para traslados al aeropuerto y excursiones diarias a los destinos más populares de Turquía. Desde Estambul hasta Antalya, de Dalaman a Bodrum y más allá, nuestro equipo profesional está comprometido a superar sus expectativas. Con oficinas operativas en <strong>Estambul Kadikoy</strong> y <strong>Fethiye Central</strong>, y nuestra <strong>oficina central en Londres</strong>, combinamos experiencia local con estándares internacionales para crear una experiencia inigualable para cada viajero.
</p>

<h2>Qué Nos Distingue</h2>
<ul>
  <li><strong>Legado de Confianza:</strong> Respaldado por años de excelencia con APL en Londres.</li>
  <li><strong>Conductores Profesionales:</strong> Con experiencia, corteses y comprometidos a brindar el mejor servicio.</li>
  <li><strong>Flota Moderna:</strong> Una gama de vehículos bien mantenidos para satisfacer sus necesidades de viaje.</li>
  <li><strong>Enfoque Centrado en el Cliente:</strong> Servicios personalizados diseñados para su comodidad y satisfacción.</li>
</ul>

<h2>Nuestros Servicios</h2>
<ul>
  <li><strong>Traslados al Aeropuerto:</strong> Traslados con precio fijo y servicio de bienvenida desde los principales aeropuertos de Turquía.</li>
  <li><strong>Excursiones Diarias:</strong> Explore los ricos sitios culturales e históricos de Turquía con nuestras opciones de tours curados.</li>
</ul>

<h2>¿Por Qué Elegir APL Transfers Turkey?</h2>
<ul>
  <li><strong>Fiabilidad:</strong> Servicio puntual y profesional en el que puede confiar.</li>
  <li><strong>Línea de Contacto 24/7:</strong> Nuestro equipo está disponible las 24 horas para ayudarle con sus necesidades de viaje.</li>
  <li><strong>Comodidad:</strong> Vehículos espaciosos y con aire acondicionado para un viaje relajado.</li>
  <li><strong>Transparencia:</strong> Sin cargos ocultos; todos los precios están definidos por adelantado.</li>
</ul>

<p>
  En APL Transfers Turkey, nos esforzamos por hacer que cada viaje sea memorable, ya sea que visite por negocios o por placer. Estamos orgullosos de ser su socio de confianza para viajar en Turquía.
</p>

<p><strong>Viva la diferencia con APL Transfers Turkey.</strong></p>
    `,
    ar: `
    <h1>من نحن</h1>
<p>
  في APL Transfers Turkey، نحن ملتزمون بتقديم تجربة سفر فاخرة لعملائنا الكرام. كامتداد للعلامة التجارية الموثوقة Airport Pickups London (APL Cars) في لندن، نتمسك بنفس المعايير العالية للجودة والموثوقية ورضا العملاء التي عُرفنا بها لسنوات.
</p>

<h2>من نكون</h2>
<p>
  APL Transfers Turkey هي شريكك الموثوق به في خدمات النقل من وإلى المطارات والجولات اليومية إلى أشهر الوجهات السياحية في تركيا. من إسطنبول إلى أنطاليا، ومن دالامان إلى بودروم وما بعدها، يلتزم فريقنا المحترف بتجاوز توقعاتك. من خلال مكاتبنا في <strong>إسطنبول كاديكوي</strong> و<strong>مركز فتحية</strong>، ومع <strong>مكتبنا الرئيسي في لندن</strong>، نجمع بين الخبرة المحلية والمعايير الدولية لتقديم تجربة لا مثيل لها لكل مسافر.
</p>

<h2>ما يميزنا</h2>
<ul>
  <li><strong>إرث موثوق:</strong> مدعوم بسنوات من التميز مع APL في لندن.</li>
  <li><strong>سائقون محترفون:</strong> ذوو خبرة، مؤدبون، ومكرسون لتقديم أفضل خدمة.</li>
  <li><strong>أسطول حديث:</strong> مجموعة من المركبات المُصانة جيدًا لتناسب احتياجاتك في السفر.</li>
  <li><strong>نهج يركز على العميل:</strong> خدمات مخصصة مصممة لراحتك ورضاك التام.</li>
</ul>

<h2>خدماتنا</h2>
<ul>
  <li><strong>خدمات التوصيل من وإلى المطار:</strong> أسعار ثابتة مع خدمة استقبال من المطارات التركية الرئيسية.</li>
  <li><strong>الجولات اليومية:</strong> اكتشف المواقع الثقافية والتاريخية الغنية في تركيا من خلال خيارات الجولات المُعدة بعناية.</li>
</ul>

<h2>لماذا تختار APL Transfers Turkey؟</h2>
<ul>
  <li><strong>الاعتمادية:</strong> خدمة دقيقة ومحترفة يمكنك الاعتماد عليها.</li>
  <li><strong>خط اتصال على مدار الساعة:</strong> فريقنا جاهز دائمًا لمساعدتك في تلبية احتياجات السفر الخاصة بك.</li>
  <li><strong>الراحة:</strong> مركبات واسعة ومكيفة لضمان رحلة مريحة.</li>
  <li><strong>الشفافية:</strong> لا رسوم خفية؛ جميع الأسعار محددة مسبقًا.</li>
</ul>

<p>
  في APL Transfers Turkey، نسعى لجعل كل رحلة تجربة لا تُنسى، سواء كنت في زيارة للعمل أو للترفيه. نحن فخورون بكوننا شريكك الموثوق للسفر في تركيا.
</p>

<p><strong>اختبر الفرق مع APL Transfers Turkey.</strong></p>

    `,
    ru: `
    <h1>О нас</h1>
<p>
  В компании APL Transfers Turkey мы стремимся предоставить нашим клиентам первоклассный уровень обслуживания. Как подразделение авторитетного бренда Airport Pickups London (APL Cars) в Лондоне, мы поддерживаем такие же высокие стандарты качества, надежности и удовлетворенности клиентов, которые характеризуют нас на протяжении многих лет.
</p>

<h2>Кто мы</h2>
<p>
  APL Transfers Turkey — ваш надежный партнер по трансферам из аэропорта и ежедневным турам по самым популярным направлениям Турции. От Стамбула до Антальи, от Даламанa до Бодрума и далее — наша профессиональная команда стремится превзойти ваши ожидания. С офисами в <strong>Стамбуле (Кадыкёй)</strong> и <strong>центре Фетхие</strong>, а также с <strong>лондонским офисом как центральным узлом</strong>, мы объединяем местный опыт с международными стандартами, чтобы обеспечить незабываемые впечатления для каждого путешественника.
</p>

<h2>Что отличает нас</h2>
<ul>
  <li><strong>Надёжное наследие:</strong> Многолетний опыт и успех в Лондоне с APL.</li>
  <li><strong>Профессиональные водители:</strong> Опытные, вежливые и ориентированные на качественное обслуживание.</li>
  <li><strong>Современный автопарк:</strong> Хорошо обслуживаемые автомобили на любой вкус и нужды.</li>
  <li><strong>Ориентация на клиента:</strong> Индивидуальный подход и забота о вашем комфорте и удовлетворении.</li>
</ul>

<h2>Наши услуги</h2>
<ul>
  <li><strong>Трансферы из аэропорта:</strong> Фиксированная стоимость и встреча в аэропортах Турции.</li>
  <li><strong>Ежедневные туры:</strong> Исследуйте богатое культурное и историческое наследие Турции с нашими тщательно подобранными экскурсиями.</li>
</ul>

<h2>Почему выбирают APL Transfers Turkey?</h2>
<ul>
  <li><strong>Надежность:</strong> Точный и профессиональный сервис, на который можно положиться.</li>
  <li><strong>Круглосуточная поддержка:</strong> Наша команда доступна 24/7 для ваших потребностей в поездках.</li>
  <li><strong>Комфорт:</strong> Просторные автомобили с кондиционером для вашего удобства.</li>
  <li><strong>Прозрачность:</strong> Без скрытых платежей; все цены заранее известны.</li>
</ul>

<p>
  В APL Transfers Turkey мы делаем всё возможное, чтобы каждая поездка стала незабываемой — будь то деловая поездка или отдых. Мы гордимся тем, что являемся вашим надежным партнёром в путешествиях по Турции.
</p>

<p><strong>Ощутите разницу с APL Transfers Turkey.</strong></p>

    `,
    zh: `
    <h1>关于我们</h1>
<p>
  在 APL Transfers Turkey，我们致力于为尊贵的客户提供高品质的出行体验。作为伦敦知名品牌 Airport Pickups London（APL Cars）的延伸，我们始终秉持多年来形成的高标准：优质服务、可靠性和客户满意度。
</p>

<h2>我们是谁</h2>
<p>
  APL Transfers Turkey 是您在土耳其各大热门旅游城市中，机场接送和日间旅游的可靠合作伙伴。从伊斯坦布尔到安塔利亚，从达拉曼到博德鲁姆及更多城市，我们的专业团队始终致力于超越您的期望。我们在<strong>伊斯坦布尔卡德柯伊</strong>和<strong>费特希耶市中心</strong>设有运营办公室，<strong>伦敦办事处</strong>作为总部，结合本地经验与国际标准，为每一位旅客带来无与伦比的旅行体验。
</p>

<h2>我们的优势</h2>
<ul>
  <li><strong>值得信赖的品牌：</strong>源自伦敦 APL 多年的卓越服务。</li>
  <li><strong>专业司机：</strong>经验丰富、彬彬有礼，致力于提供最优质的服务。</li>
  <li><strong>现代化车队：</strong>多种车型，维护良好，满足您的出行需求。</li>
  <li><strong>以客户为中心：</strong>为您的舒适与满意量身定制服务。</li>
</ul>

<h2>我们的服务</h2>
<ul>
  <li><strong>机场接送：</strong>固定价格、包含接机服务，覆盖土耳其主要机场。</li>
  <li><strong>日间旅游：</strong>通过我们精心策划的路线，探索土耳其丰富的文化与历史景点。</li>
</ul>

<h2>为什么选择 APL Transfers Turkey？</h2>
<ul>
  <li><strong>可靠性：</strong>守时专业，值得信赖。</li>
  <li><strong>全天候客服：</strong>我们的团队全天 24 小时为您提供协助。</li>
  <li><strong>舒适体验：</strong>宽敞空调车辆，确保旅途轻松舒适。</li>
  <li><strong>价格透明：</strong>无隐藏费用，价格预先明确。</li>
</ul>

<p>
  无论是商务出行还是休闲旅游，APL Transfers Turkey 始终致力于让每一次旅程都难以忘怀。我们为成为您在土耳其值得信赖的旅行伙伴而感到自豪。
</p>

<p><strong>体验 APL Transfers Turkey 的不同之处。</strong></p>
`,
    it: `
    <h1>Chi Siamo</h1>
<p>
  In APL Transfers Turkey, siamo impegnati a offrire un'esperienza di viaggio di alta qualità ai nostri preziosi clienti. Come estensione del rinomato marchio Airport Pickups London (APL Cars) a Londra, manteniamo gli stessi elevati standard di qualità, affidabilità e soddisfazione del cliente che ci contraddistinguono da anni.
</p>

<h2>Chi Siamo</h2>
<p>
  APL Transfers Turkey è il tuo partner affidabile per i transfer aeroportuali e i tour giornalieri nelle destinazioni più popolari della Turchia. Da Istanbul ad Antalya, da Dalaman a Bodrum e oltre, il nostro team professionale è impegnato a superare le tue aspettative. Con uffici operativi a <strong>Istanbul Kadikoy</strong> e <strong>Fethiye Centro</strong>, e con <strong>l’ufficio centrale a Londra</strong>, uniamo la conoscenza locale agli standard internazionali per offrire un'esperienza impareggiabile a ogni viaggiatore.
</p>

<h2>Cosa ci Distingue</h2>
<ul>
  <li><strong>Eredità Affidabile:</strong> Anni di eccellenza con APL a Londra.</li>
  <li><strong>Autisti Professionisti:</strong> Esperti, cortesi e dedicati a fornire il miglior servizio.</li>
  <li><strong>Flotta Moderna:</strong> Una gamma di veicoli ben mantenuti per soddisfare le tue esigenze di viaggio.</li>
  <li><strong>Approccio Orientato al Cliente:</strong> Servizi su misura pensati per il tuo comfort e la tua soddisfazione.</li>
</ul>

<h2>I Nostri Servizi</h2>
<ul>
  <li><strong>Transfer Aeroportuali:</strong> Trasferimenti a prezzo fisso con accoglienza dagli aeroporti principali della Turchia.</li>
  <li><strong>Tour Giornalieri:</strong> Esplora i ricchi siti culturali e storici della Turchia con le nostre proposte di tour curati.</li>
</ul>

<h2>Perché Scegliere APL Transfers Turkey?</h2>
<ul>
  <li><strong>Affidabilità:</strong> Servizio puntuale e professionale su cui puoi contare.</li>
  <li><strong>Assistenza 24/7:</strong> Il nostro team è sempre disponibile per supportarti in ogni esigenza di viaggio.</li>
  <li><strong>Comfort:</strong> Veicoli spaziosi e climatizzati per un viaggio rilassante.</li>
  <li><strong>Trasparenza:</strong> Nessun costo nascosto; tutti i prezzi sono fissi e comunicati in anticipo.</li>
</ul>

<p>
  In APL Transfers Turkey ci impegniamo a rendere ogni viaggio memorabile, sia che tu stia viaggiando per affari o per piacere. Siamo orgogliosi di essere il tuo partner di fiducia per i viaggi in Turchia.
</p>

<p><strong>Vivi la differenza con APL Transfers Turkey.</strong></p>

    `
}
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
        props: { metaDescription, keywords, headTitle,mainCanonical }
    };


}
export default AboutUs