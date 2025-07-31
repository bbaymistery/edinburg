/**
 * Retrieves the airport page content for the given pathname and language.
 *
 * @param {string} pathname - The pathname of the airport page.
 * @param {string} [language="en"] - The language of the airport page content.
 * @returns {string} The airport page content for the given pathname and language.
 */
export const getAirportPageContentByPathname = (pathname, language = "en") => {
    console.log({pathname})
    return airportPageContents[pathname][language]
}
const airportPageContents = {
    "/istanbul-airport-taxi-prices": {
        en: `
        <h1>Istanbul Airport Taxi Prices – Fixed & Transparent Transfers</h1>

<h2>Reliable, Comfortable & Affordable Istanbul Airport Transfers</h2>

<p>
    Arriving at <strong>Istanbul Airport (IST)</strong>? Let <strong>APL Transfers</strong> take care of your journey with our premium, 
    fixed-price private airport transfers. Whether you need a saloon car, a spacious people carrier for five passengers, 
    an eight-seater minibus, or a luxury Mercedes business-class vehicle, we have the perfect ride for you.
</p>

<p>
    With our <strong>free meet & greet service, no hidden fees, and 24/7 customer support</strong>, we ensure a seamless 
    and stress-free transfer experience from <strong>Istanbul Airport</strong> to your hotel, Airbnb, or business destination.
</p>

<h2>Our Vehicle Options</h2>
<ul>
    <li><strong>Saloon Car</strong> – Perfect for solo travelers and couples.</li>
    <li><strong>People Carrier (5 Passengers)</strong> – Ideal for families or small groups.</li>
    <li><strong>8-Seater Minibus</strong> – Comfortable for larger groups with luggage.</li>
    <li><strong>Business-Class Mercedes Vehicles</strong> – Premium comfort for executives and VIPs.</li>
</ul>

<h2>Why Choose APL Transfers?</h2>
<ul>
    <li><strong>Free Meet & Greet & Waiting Time</strong> – Your driver will be waiting at the arrivals hall with a name board.</li>
    <li><strong>APL Transfers Office Inside Istanbul Airport (IST)</strong> – Convenient in-terminal assistance.</li>
    <li>
        <strong>Stunning Travel – APL Transfers Office at IST</strong><br>
        After collecting your luggage and clearing customs at <strong>Istanbul Airport</strong>, turn right upon entering the Arrival Hall. 
        You’ll find the <strong>Taxi Transfer Offices</strong> area on your left. Look for the <strong>Stunning Travel Turizm – APL Transfer</strong> sign. 
        One of our friendly staff members will meet you at the office and escort you to your driver.
    </li>
    <li><strong>Free Child Seats for 8 & 9-Seater Private Vehicles</strong> – Ensuring family-friendly travel.</li>
    <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Book with peace of mind.</li>
    <li><strong>Fixed Prices – No Hidden Costs</strong> – What you see is what you pay.</li>
    <li><strong>24/7 Customer Support</strong> – We're available anytime you need us.</li>
    <li><strong>Corporate Travel Solutions</strong> – Reliable transfers for business professionals.</li>
    <li><strong>Luxury, Clean & Well-Maintained Vehicles</strong> – Enjoy a smooth and stylish ride.</li>
</ul>

<h2>Book Your Istanbul Airport Taxi Now</h2>

<p>
    Reserve your transfer today and enjoy a stress-free journey from <strong>Istanbul Airport (IST)</strong> to your hotel, Airbnb, or business location.
</p>

<p>
    We proudly offer transfers <strong>across Istanbul</strong> and to nearby cities such as <strong>Bursa, Edirne, and Gebze</strong>. 
    Whether you're headed to the city center or a destination further afield, APL Transfers ensures a reliable and comfortable journey.
</p>

<ul>
    <li><strong>Instant Online Booking</strong></li>
    <li><strong>Secure Payment</strong> – We accept <strong>Euro, GBP, US Dollar, and Turkish Lira</strong>, with full support for 
        <strong>Google Pay, Apple Pay, AMEX, Visa, and Mastercard</strong>.</li>
    <li><strong>No Hidden Fees</strong> – Fixed, Competitive Pricing</li>
</ul>

<p>
    Need assistance? Contact our <strong>24/7 customer support</strong> for a smooth travel experience.<br>
    <a href="/">Book Now</a> and <strong>travel with confidence</strong>.
</p>

        `,
        tr: `
        <h1>İstanbul Havalimanı Taksi Fiyatları – Sabit ve Şeffaf Ücretler</h1>

<h2>Güvenilir, Konforlu ve Uygun Fiyatlı İstanbul Havalimanı Transferleri</h2>

<p>
    <strong>İstanbul Havalimanı (IST)</strong>'na mı geliyorsunuz? <strong>APL Transfers</strong> ile yolculuğunuzu konforlu, sabit fiyatlı özel havalimanı transfer hizmetimizle biz üstlenelim. 
    İster bir sedan araç, ister beş kişilik geniş bir araç, sekiz kişilik minibüs veya lüks Mercedes business sınıfı araç arıyor olun, size uygun aracı sunuyoruz.
</p>

<p>
    <strong>Ücretsiz karşılama hizmeti, gizli ücret yok ve 7/24 müşteri desteği</strong> ile <strong>İstanbul Havalimanı</strong>’ndan otelinize, Airbnb’nize veya iş yerinize sorunsuz ve stressiz bir transfer deneyimi sağlıyoruz.
</p>

<h2>Araç Seçeneklerimiz</h2>
<ul>
    <li><strong>Sedan Araç</strong> – Tek başına seyahat edenler ve çiftler için ideal.</li>
    <li><strong>5 Kişilik Aile Aracı</strong> – Aileler veya küçük gruplar için uygun.</li>
    <li><strong>8 Kişilik Minibüs</strong> – Bagajlı kalabalık gruplar için konforlu.</li>
    <li><strong>Business Sınıfı Mercedes Araçlar</strong> – Yöneticiler ve VIP misafirler için üst düzey konfor.</li>
</ul>

<h2>Neden APL Transfers?</h2>
<ul>
    <li><strong>Ücretsiz Karşılama & Bekleme Süresi</strong> – Şoförünüz sizi adınızın yazılı olduğu tabela ile varış salonunda karşılayacaktır.</li>
    <li><strong>İstanbul Havalimanı İçinde APL Transfers Ofisi</strong> – Terminal içinde kolay yardım imkânı.</li>
    <li>
        <strong>Stunning Travel – İstanbul Havalimanı’ndaki APL Transfers Ofisi</strong><br>
        Bagajınızı aldıktan ve <strong>İstanbul Havalimanı</strong>’ndaki gümrükten geçtikten sonra, Varış Salonu’na girerken sağa dönün. 
        Sol tarafta <strong>Taksi Transfer Ofisleri</strong> bölümünü göreceksiniz. <strong>Stunning Travel Turizm – APL Transfer</strong> tabelasını arayın. 
        Güler yüzlü personelimiz sizi karşılayacak ve şoförünüze yönlendirecektir.
    </li>
    <li><strong>8 ve 9 Kişilik Özel Araçlar için Ücretsiz Çocuk Koltuğu</strong> – Aile dostu bir yolculuk için.</li>
    <li><strong>Varıştan 24 Saat Önceye Kadar Ücretsiz İptal</strong> – Gönül rahatlığıyla rezervasyon yapın.</li>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Ne görüyorsanız onu ödersiniz.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – Ne zaman ihtiyacınız olursa buradayız.</li>
    <li><strong>Kurumsal Seyahat Çözümleri</strong> – İş seyahatleri için güvenilir transfer hizmeti.</li>
    <li><strong>Lüks, Temiz ve Bakımlı Araçlar</strong> – Konforlu ve şık bir yolculuk yapın.</li>
</ul>

<h2>Hemen İstanbul Havalimanı Taksi Rezervasyonu Yapın</h2>

<p>
    Bugün rezervasyonunuzu yapın ve <strong>İstanbul Havalimanı (IST)</strong>'ndan otelinize, Airbnb’nize veya iş yerinize stressiz bir şekilde ulaşın.
</p>

<p>
    İstanbul geneline ve <strong>Bursa, Edirne ve Gebze</strong> gibi yakın şehirlere transfer hizmeti sunuyoruz. 
    İster şehir merkezine ister uzak bir noktaya gidin, APL Transfers ile güvenilir ve konforlu bir yolculuk sizi bekliyor.
</p>

<ul>
    <li><strong>Anında Online Rezervasyon</strong></li>
    <li><strong>Güvenli Ödeme</strong> – <strong>Euro, GBP, Amerikan Doları ve Türk Lirası</strong> kabul edilir. 
        <strong>Google Pay, Apple Pay, AMEX, Visa ve Mastercard</strong> ile tam uyumludur.</li>
    <li><strong>Gizli Ücret Yok</strong> – Sabit ve Rekabetçi Fiyatlandırma</li>
</ul>

<p>
    Yardıma mı ihtiyacınız var? Sorunsuz bir seyahat deneyimi için <strong>7/24 müşteri hizmetlerimizle</strong> iletişime geçin.<br>
    <a href="/">Hemen Rezervasyon Yapın</a> ve <strong>güvenle yolculuk yapın</strong>.
</p>

        `,
        ar: `
        <h1>أسعار سيارات الأجرة من مطار إسطنبول – أسعار ثابتة وشفافة</h1>

<h2>خدمة نقل من مطار إسطنبول موثوقة، مريحة وبأسعار معقولة</h2>

<p>
    هل وصلت إلى <strong>مطار إسطنبول (IST)</strong>؟ دع <strong>APL Transfers</strong> تتولى رحلتك مع خدمة النقل الخاصة الممتازة بأسعار ثابتة. 
    سواء كنت بحاجة إلى سيارة سيدان، أو مركبة عائلية تتسع لخمسة أشخاص، أو حافلة صغيرة تتسع لثمانية أشخاص، أو سيارة مرسيدس فاخرة لرجال الأعمال – لدينا السيارة المناسبة لك.
</p>

<p>
    مع <strong>خدمة الاستقبال المجانية، وعدم وجود رسوم خفية، ودعم العملاء على مدار الساعة</strong>، نضمن لك تجربة نقل سلسة وخالية من التوتر من <strong>مطار إسطنبول</strong> إلى فندقك، أو Airbnb، أو مكان عملك.
</p>

<h2>خيارات المركبات لدينا</h2>
<ul>
    <li><strong>سيارة سيدان</strong> – مثالية للمسافرين بمفردهم أو الأزواج.</li>
    <li><strong>مركبة عائلية (5 ركاب)</strong> – مثالية للعائلات أو المجموعات الصغيرة.</li>
    <li><strong>حافلة صغيرة بـ 8 مقاعد</strong> – مريحة للمجموعات الكبيرة مع الأمتعة.</li>
    <li><strong>سيارات مرسيدس لفئة رجال الأعمال</strong> – راحة فاخرة لرجال الأعمال وكبار الشخصيات.</li>
</ul>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>الاستقبال المجاني ووقت الانتظار</strong> – سيكون السائق في صالة الوصول يحمل لافتة باسمك.</li>
    <li><strong>مكتب APL Transfers داخل مطار إسطنبول (IST)</strong> – دعم مباشر داخل المطار.</li>
    <li>
        <strong>Stunning Travel – مكتب APL Transfers في المطار</strong><br>
        بعد استلام الأمتعة والانتهاء من الجمارك في <strong>مطار إسطنبول</strong>، اتجه إلى اليمين عند دخولك صالة الوصول. 
        ستجد منطقة <strong>مكاتب سيارات الأجرة</strong> على يسارك. ابحث عن لافتة <strong>Stunning Travel Turizm – APL Transfer</strong>. 
        أحد موظفينا الودودين سيرافقك إلى سائقك.
    </li>
    <li><strong>مقاعد أطفال مجانية للمركبات الخاصة بـ 8 و9 ركاب</strong> – لتوفير سفر آمن ومريح للعائلات.</li>
    <li><strong>إلغاء مجاني حتى 24 ساعة قبل الوصول</strong> – احجز براحة بال.</li>
    <li><strong>أسعار ثابتة – بدون رسوم خفية</strong> – ما تراه هو ما تدفعه.</li>
    <li><strong>دعم عملاء على مدار الساعة</strong> – نحن هنا متى احتجت إلينا.</li>
    <li><strong>حلول سفر للشركات</strong> – تنقل موثوق للمحترفين.</li>
    <li><strong>مركبات فاخرة ونظيفة ومصانة جيداً</strong> – استمتع برحلة أنيقة ومريحة.</li>
</ul>

<h2>احجز سيارة أجرة من مطار إسطنبول الآن</h2>

<p>
    احجز رحلتك اليوم وتمتع بتجربة نقل خالية من التوتر من <strong>مطار إسطنبول (IST)</strong> إلى فندقك أو Airbnb أو مكان عملك.
</p>

<p>
    نقدم خدمات النقل عبر <strong>إسطنبول</strong> وإلى مدن قريبة مثل <strong>بورصة، أدرنة، وجبزة</strong>. 
    سواء كنت متجهاً إلى وسط المدينة أو إلى وجهة بعيدة، تضمن لك APL Transfers رحلة مريحة وموثوقة.
</p>

<ul>
    <li><strong>حجز فوري عبر الإنترنت</strong></li>
    <li><strong>دفع آمن</strong> – نقبل <strong>اليورو، الجنيه الإسترليني، الدولار الأمريكي، والليرة التركية</strong>، وندعم الدفع عبر 
        <strong>Google Pay، Apple Pay، AMEX، Visa، وMastercard</strong>.</li>
    <li><strong>بدون رسوم خفية</strong> – أسعار ثابتة وتنافسية</li>
</ul>

<p>
    هل تحتاج المساعدة؟ تواصل مع <strong>دعم العملاء 24/7</strong> لتجربة سفر سلسة.<br>
    <a href="/">احجز الآن</a> وسافر بثقة.
</p>

        `,
        es: `
        <h1>Precios de Taxi en el Aeropuerto de Estambul – Traslados Fijos y Transparentes</h1>

<h2>Traslados desde el Aeropuerto de Estambul Confiables, Cómodos y Económicos</h2>

<p>
    ¿Llegas al <strong>Aeropuerto de Estambul (IST)</strong>? Deja que <strong>APL Transfers</strong> se encargue de tu viaje con nuestro servicio de traslado privado de alta calidad y precio fijo.
    Ya sea que necesites un coche sedán, un vehículo amplio para cinco personas, una minibús para ocho pasajeros o un lujoso Mercedes clase ejecutiva, tenemos el vehículo ideal para ti.
</p>

<p>
    Con nuestro <strong>servicio de bienvenida gratuito, sin cargos ocultos y atención al cliente 24/7</strong>, garantizamos una experiencia de traslado fluida y sin estrés desde el <strong>Aeropuerto de Estambul</strong> hasta tu hotel, Airbnb o lugar de trabajo.
</p>

<h2>Nuestras Opciones de Vehículos</h2>
<ul>
    <li><strong>Coche Sedán</strong> – Perfecto para viajeros solos o parejas.</li>
    <li><strong>Vehículo para 5 Pasajeros</strong> – Ideal para familias o grupos pequeños.</li>
    <li><strong>Minibús de 8 Plazas</strong> – Cómodo para grupos grandes con equipaje.</li>
    <li><strong>Vehículos Mercedes Clase Ejecutiva</strong> – Máxima comodidad para ejecutivos y clientes VIP.</li>
</ul>

<h2>¿Por Qué Elegir APL Transfers?</h2>
<ul>
    <li><strong>Servicio de Bienvenida y Tiempo de Espera Gratis</strong> – Tu conductor te esperará en la sala de llegadas con un cartel con tu nombre.</li>
    <li><strong>Oficina de APL Transfers Dentro del Aeropuerto de Estambul (IST)</strong> – Asistencia directa dentro del terminal.</li>
    <li>
        <strong>Stunning Travel – Oficina de APL Transfers en el aeropuerto</strong><br>
        Después de recoger tu equipaje y pasar por aduanas en el <strong>Aeropuerto de Estambul</strong>, gira a la derecha al entrar a la sala de llegadas. 
        Verás el área de <strong>Oficinas de Taxis</strong> a tu izquierda. Busca el letrero <strong>Stunning Travel Turizm – APL Transfer</strong>.
        Uno de nuestros amables empleados te acompañará hasta tu conductor.
    </li>
    <li><strong>Asientos Infantiles Gratis para Vehículos Privados de 8 y 9 Plazas</strong> – Viaje seguro y cómodo para familias.</li>
    <li><strong>Cancelación Gratuita Hasta 24 Horas Antes de la Llegada</strong> – Reserva con tranquilidad.</li>
    <li><strong>Precios Fijos – Sin Costes Ocultos</strong> – Lo que ves es lo que pagas.</li>
    <li><strong>Atención al Cliente 24/7</strong> – Estamos disponibles cuando nos necesites.</li>
    <li><strong>Soluciones de Viaje Corporativo</strong> – Traslados confiables para profesionales.</li>
    <li><strong>Vehículos Lujosos, Limpios y Bien Mantenidos</strong> – Disfruta de un viaje elegante y cómodo.</li>
</ul>

<h2>Reserva Tu Taxi en el Aeropuerto de Estambul Ahora</h2>

<p>
    Reserva hoy y disfruta de un viaje sin complicaciones desde el <strong>Aeropuerto de Estambul (IST)</strong> hasta tu hotel, Airbnb o destino comercial.
</p>

<p>
    Ofrecemos traslados en <strong>todo Estambul</strong> y a ciudades cercanas como <strong>Bursa, Edirne y Gebze</strong>.
    Ya sea al centro de la ciudad o a un destino más lejano, APL Transfers garantiza un viaje confiable y cómodo.
</p>

<ul>
    <li><strong>Reserva Online Instantánea</strong></li>
    <li><strong>Pago Seguro</strong> – Aceptamos <strong>euros, libras esterlinas, dólares estadounidenses y liras turcas</strong>,
        con soporte completo para <strong>Google Pay, Apple Pay, AMEX, Visa y Mastercard</strong>.</li>
    <li><strong>Sin Cargos Ocultos</strong> – Precios Fijos y Competitivos</li>
</ul>

<p>
    ¿Necesitas ayuda? Contacta a nuestro <strong>servicio de atención al cliente 24/7</strong> para una experiencia de viaje sin estrés.<br>
    <a href="/">Reserva Ahora</a> y <strong>viaja con confianza</strong>.
</p>

        `,
        it: `
        <h1>Prezzi Taxi Aeroporto di Istanbul – Trasferimenti Fissi e Trasparenti</h1>

<h2>Trasferimenti Affidabili, Comodi ed Economici dall'Aeroporto di Istanbul</h2>

<p>
    Arrivi all'<strong>Aeroporto di Istanbul (IST)</strong>? Lascia che <strong>APL Transfers</strong> si occupi del tuo viaggio con i nostri trasferimenti privati premium a prezzo fisso.
    Che tu abbia bisogno di una berlina, di un veicolo spazioso per cinque passeggeri, di un minibus per otto persone o di una lussuosa Mercedes classe business, abbiamo il mezzo perfetto per te.
</p>

<p>
    Con il nostro <strong>servizio di accoglienza gratuito, nessun costo nascosto e assistenza clienti 24/7</strong>, garantiamo un trasferimento senza stress e senza sorprese dall'<strong>Aeroporto di Istanbul</strong> al tuo hotel, Airbnb o luogo di lavoro.
</p>

<h2>Le Nostre Opzioni di Veicoli</h2>
<ul>
    <li><strong>Auto Berlina</strong> – Perfetta per viaggiatori singoli o coppie.</li>
    <li><strong>Veicolo per 5 Passeggeri</strong> – Ideale per famiglie o piccoli gruppi.</li>
    <li><strong>Minibus 8 Posti</strong> – Comodo per gruppi numerosi con bagagli.</li>
    <li><strong>Mercedes Classe Business</strong> – Comfort premium per dirigenti e VIP.</li>
</ul>

<h2>Perché Scegliere APL Transfers?</h2>
<ul>
    <li><strong>Servizio di Accoglienza e Attesa Gratuito</strong> – Il tuo autista ti aspetterà nella sala arrivi con un cartello con il tuo nome.</li>
    <li><strong>Ufficio APL Transfers all'interno dell'Aeroporto di Istanbul (IST)</strong> – Assistenza comoda direttamente in aeroporto.</li>
    <li>
        <strong>Stunning Travel – Ufficio APL Transfers presso l'aeroporto</strong><br>
        Dopo aver ritirato i bagagli e superato la dogana all'<strong>Aeroporto di Istanbul</strong>, gira a destra entrando nella sala arrivi.
        Troverai l’area <strong>Uffici Transfer Taxi</strong> sulla sinistra. Cerca il cartello <strong>Stunning Travel Turizm – APL Transfer</strong>.
        Uno dei nostri collaboratori ti accoglierà e ti accompagnerà dal tuo autista.
    </li>
    <li><strong>Seggiolini per Bambini Gratuiti per Veicoli da 8 e 9 Posti</strong> – Viaggio sicuro e comodo per famiglie.</li>
    <li><strong>Cancellazione Gratuita fino a 24 Ore Prima dell’Arrivo</strong> – Prenota in tutta tranquillità.</li>
    <li><strong>Prezzi Fissi – Nessun Costo Nascosto</strong> – Paghi solo quanto vedi.</li>
    <li><strong>Assistenza Clienti 24/7</strong> – Siamo disponibili ogni volta che ne hai bisogno.</li>
    <li><strong>Soluzioni di Viaggio Aziendale</strong> – Trasferimenti affidabili per professionisti.</li>
    <li><strong>Veicoli di Lusso, Puliti e Ben Tenuti</strong> – Viaggia con eleganza e comfort.</li>
</ul>

<h2>Prenota Ora il Tuo Taxi dall'Aeroporto di Istanbul</h2>

<p>
    Prenota oggi il tuo trasferimento e goditi un viaggio senza pensieri dall'<strong>Aeroporto di Istanbul (IST)</strong> al tuo hotel, Airbnb o sede aziendale.
</p>

<p>
    Offriamo trasferimenti in <strong>tutta Istanbul</strong> e verso città vicine come <strong>Bursa, Edirne e Gebze</strong>.
    Che tu stia andando verso il centro città o verso una destinazione più lontana, APL Transfers ti garantisce un viaggio comodo e affidabile.
</p>

<ul>
    <li><strong>Prenotazione Online Immediata</strong></li>
    <li><strong>Pagamento Sicuro</strong> – Accettiamo <strong>euro, sterline, dollari americani e lire turche</strong>, con pieno supporto a
        <strong>Google Pay, Apple Pay, AMEX, Visa e Mastercard</strong>.</li>
    <li><strong>Nessun Costo Nascosto</strong> – Prezzi fissi e competitivi</li>
</ul>

<p>
    Hai bisogno di aiuto? Contatta il nostro <strong>servizio clienti attivo 24/7</strong> per un'esperienza di viaggio fluida.<br>
    <a href="/">Prenota Ora</a> e <strong>viaggia con fiducia</strong>.
</p>

        `,
        ru: `
        <h1>Цены на такси из аэропорта Стамбула – Фиксированные и Прозрачные Тарифы</h1>

<h2>Надежные, Комфортные и Доступные Трансферы из аэропорта Стамбула</h2>

<p>
    Прилетаете в <strong>аэропорт Стамбула (IST)</strong>? Доверьте свою поездку <strong>APL Transfers</strong> – мы предлагаем высококачественные частные трансферы по фиксированной цене.
    Нужен седан, просторный автомобиль для 5 человек, микроавтобус на 8 мест или роскошный Mercedes бизнес-класса? У нас есть идеальный вариант для вас.
</p>

<p>
    Благодаря <strong>бесплатной встрече, отсутствию скрытых платежей и круглосуточной поддержке</strong> мы обеспечим вам комфортную и спокойную поездку из <strong>аэропорта Стамбула</strong> в ваш отель, Airbnb или офис.
</p>

<h2>Наши варианты автомобилей</h2>
<ul>
    <li><strong>Седан</strong> – Идеально для одного пассажира или пары.</li>
    <li><strong>Автомобиль на 5 человек</strong> – Подходит для семей или небольших групп.</li>
    <li><strong>Микроавтобус на 8 мест</strong> – Удобен для больших групп с багажом.</li>
    <li><strong>Mercedes бизнес-класса</strong> – Максимальный комфорт для руководителей и VIP-клиентов.</li>
</ul>

<h2>Почему выбирают APL Transfers?</h2>
<ul>
    <li><strong>Бесплатная встреча и ожидание</strong> – Водитель будет ждать вас в зале прилета с табличкой с вашим именем.</li>
    <li><strong>Офис APL Transfers внутри аэропорта Стамбула (IST)</strong> – Удобная помощь прямо в терминале.</li>
    <li>
        <strong>Stunning Travel – офис APL Transfers в аэропорту</strong><br>
        После получения багажа и прохождения таможни в <strong>аэропорту Стамбула</strong> поверните направо при входе в зал прибытия. 
        Слева вы увидите зону <strong>таксопарков и трансферов</strong>. Ищите табличку <strong>Stunning Travel Turizm – APL Transfer</strong>.
        Наш сотрудник встретит вас и проводит к вашему водителю.
    </li>
    <li><strong>Бесплатные детские кресла для автомобилей на 8 и 9 мест</strong> – Безопасная поездка для всей семьи.</li>
    <li><strong>Бесплатная отмена за 24 часа до прибытия</strong> – Бронируйте без риска.</li>
    <li><strong>Фиксированные цены – Без скрытых платежей</strong> – Вы платите ровно столько, сколько указано.</li>
    <li><strong>Круглосуточная поддержка клиентов</strong> – Мы на связи 24/7.</li>
    <li><strong>Корпоративные трансферы</strong> – Надежные поездки для бизнес-клиентов.</li>
    <li><strong>Роскошные, чистые и ухоженные автомобили</strong> – Наслаждайтесь стильной и удобной поездкой.</li>
</ul>

<h2>Забронируйте такси из аэропорта Стамбула прямо сейчас</h2>

<p>
    Забронируйте трансфер уже сегодня и наслаждайтесь спокойной поездкой из <strong>аэропорта Стамбула (IST)</strong> в отель, Airbnb или офис.
</p>

<p>
    Мы предлагаем трансферы по всему <strong>Стамбулу</strong> и в близлежащие города, такие как <strong>Бурса, Эдирне и Гебзе</strong>.
    Куда бы вы ни направлялись – в центр города или дальше – <strong>APL Transfers</strong> гарантирует комфорт и надежность.
</p>

<ul>
    <li><strong>Мгновенное онлайн-бронирование</strong></li>
    <li><strong>Безопасная оплата</strong> – Мы принимаем <strong>евро, фунты стерлингов, доллары США и турецкие лиры</strong>, поддерживаем
        <strong>Google Pay, Apple Pay, AMEX, Visa и Mastercard</strong>.</li>
    <li><strong>Без скрытых платежей</strong> – Фиксированные и конкурентоспособные цены</li>
</ul>

<p>
    Нужна помощь? Свяжитесь с нашей <strong>службой поддержки 24/7</strong> для беспроблемной поездки.<br>
    <a href="/">Забронировать сейчас</a> и <strong>путешествуйте с уверенностью</strong>.
</p>

        `,
        zh: `
        <h1>伊斯坦布尔机场出租车价格 – 固定且透明的费用</h1>

<h2>可靠、舒适且实惠的伊斯坦布尔机场接送服务</h2>

<p>
    抵达 <strong>伊斯坦布尔机场 (IST)</strong>？让 <strong>APL Transfers</strong> 为您的旅程保驾护航，享受高品质、固定价格的私人机场接送服务。
    无论您需要一辆轿车、一辆可容纳五人的宽敞车型、一辆八座小巴，还是一辆豪华的奔驰商务车，我们都能满足您的需求。
</p>

<p>
    借助我们提供的<strong>免费接机服务、无隐藏费用以及全天候（24/7）客户支持</strong>，我们确保您从 <strong>伊斯坦布尔机场</strong> 前往酒店、Airbnb 或商务地点的旅程轻松无忧。
</p>

<h2>我们的车辆选择</h2>
<ul>
    <li><strong>轿车</strong> – 适合单人或情侣出行。</li>
    <li><strong>5人车型</strong> – 非常适合家庭或小型团体。</li>
    <li><strong>8座小巴</strong> – 适合携带行李的大型团体。</li>
    <li><strong>奔驰商务车型</strong> – 为高管和贵宾提供尊贵舒适体验。</li>
</ul>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>免费接机和等待服务</strong> – 司机将在到达大厅举牌等候。</li>
    <li><strong>APL Transfers 办公室设在伊斯坦布尔机场内</strong> – 机场内提供便捷协助。</li>
    <li>
        <strong>Stunning Travel – APL Transfers 办公室</strong><br>
        在 <strong>伊斯坦布尔机场</strong> 领取行李并通过海关后，进入到达大厅后右转。
        您将在左侧看到<strong>出租车接送办公室</strong>区域。请寻找 <strong>Stunning Travel Turizm – APL Transfer</strong> 标志。
        我们友善的工作人员会在办公室接您，并带您前往车辆。
    </li>
    <li><strong>8座和9座专车提供免费儿童座椅</strong> – 保障家庭出行安全。</li>
    <li><strong>到达前24小时内可免费取消</strong> – 让您安心预订。</li>
    <li><strong>固定价格 – 无隐藏费用</strong> – 所见即所得。</li>
    <li><strong>全天候客户服务（24/7）</strong> – 无论何时，我们都在您身边。</li>
    <li><strong>企业出行方案</strong> – 为商务人士提供可靠接送服务。</li>
    <li><strong>豪华、整洁且维护良好的车辆</strong> – 享受顺畅舒适的旅程。</li>
</ul>

<h2>立即预订伊斯坦布尔机场出租车</h2>

<p>
    现在就预订，让您的旅程从 <strong>伊斯坦布尔机场 (IST)</strong> 到酒店、Airbnb 或商务地点轻松无忧。
</p>

<p>
    我们在<strong>伊斯坦布尔全市</strong>及周边城市提供接送服务，如 <strong>布尔萨（Bursa）、埃迪尔内（Edirne）和盖布兹（Gebze）</strong>。
    无论您的目的地是在市中心还是其他地方，APL Transfers 都能为您提供舒适可靠的出行体验。
</p>

<ul>
    <li><strong>即时在线预订</strong></li>
    <li><strong>安全支付</strong> – 支持 <strong>欧元、英镑、美元和土耳其里拉</strong>，并支持
        <strong>Google Pay、Apple Pay、AMEX、Visa 和 Mastercard</strong>。</li>
    <li><strong>无隐藏费用</strong> – 固定、具有竞争力的价格</li>
</ul>

<p>
    需要帮助吗？请联系 <strong>24/7 客户支持</strong>，确保您的出行顺利无忧。<br>
    <a href="/">立即预订</a>，<strong>安心出行</strong>。
</p>

        ` ,
    },
    "/sabiha-gokcen-airport-taxi-prices": {
        en: `
        <h1>Sabiha Gökçen Airport Taxi Prices – Fixed & Private Transfers</h1>

<h2>Reliable and Hassle-Free Transfers from Sabiha Gökçen Airport (SAW)</h2>

<p>
    Looking for a private taxi from <strong>Sabiha Gökçen Airport (SAW)</strong>? APL Transfers provides fixed-price, 
    private airport transfers with no hidden fees. Whether you need a saloon car, a spacious minibus, 
    or a luxury Mercedes vehicle, we ensure a smooth and comfortable journey to your destination.
</p>

<p>
    Our professional drivers offer a meet & greet service at Column 13, ensuring you can quickly and 
    easily locate your driver upon arrival.
</p>

<h2>Vehicle Options for Sabiha Gökçen Airport Transfers</h2>
<ul>
    <li><strong>Saloon Car</strong> – Ideal for individuals and couples.</li>
    <li><strong>People Carrier (5 Passengers)</strong> – Great for families and small groups.</li>
    <li><strong>8-Seater Minibus</strong> – Spacious and perfect for larger groups with luggage.</li>
    <li><strong>Business-Class Mercedes Vehicles</strong> – Premium travel for executives and VIPs.</li>
</ul>

<h2>Meet & Greet Service – Where to Find Your Driver</h2>
<ul>
    <li><strong>Location:</strong> Upon arrival at <strong>Sabiha Gökçen Airport (SAW)</strong>, your driver will be waiting at Column 13, 
        located at the end of the pedestrian crossing.</li>
    <li><strong>Identification:</strong> The driver will be holding a passenger name board for easy recognition.</li>
    <li><strong>Seamless Transfers:</strong> No need to wait for taxis—your private driver will take you directly to your destination.</li>
</ul>

<h2>Why Choose APL Transfers?</h2>
<ul>
    <li><strong>Fixed Prices – No Hidden Costs</strong> – What you see is what you pay.</li>
    <li><strong>Free Meet & Greet & Waiting Time</strong> – Driver meets you at Column 13 with a name board.</li>
    <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Flexible and risk-free booking.</li>
    <li><strong>24/7 Customer Support</strong> – Assistance whenever you need it.</li>
    <li><strong>Corporate Travel Solutions</strong> – Reliable transfers for business travelers.</li>
    <li><strong>Clean, Comfortable & Well-Maintained Vehicles</strong> – Travel in comfort and style.</li>
    <li><strong>Secure Payments Accepted</strong> – Pay in Euro, GBP, US Dollar & Turkish Lira.</li>
</ul>

<h2>Book Your Sabiha Gökçen Airport Taxi Now</h2>

<p>
    Avoid the hassle of searching for a taxi at the airport. Pre-book your Sabiha Gökçen Airport 
    transfer for a stress-free journey.
</p>

<ul>
    <li><strong>Instant Online Booking</strong></li>
    <li><strong>Secure Payment</strong> (Euro, GBP, US Dollar & Turkish Lira Accepted)</li>
    <li><strong>No Hidden Fees – Fixed, Competitive Pricing</strong></li>
</ul>

<p>
    Need assistance? Contact our <strong>24/7 customer support</strong> for a seamless transfer experience.
    <a href="/">Book Now</a> and travel with confidence.
</p>

        `,
        tr: `
        <h1>Sabiha Gökçen Havalimanı Taksi Fiyatları – Sabit ve Özel Transferler</h1>

<h2>Sabiha Gökçen Havalimanı’ndan Güvenilir ve Konforlu Transferler</h2>

<p>
    <strong>Sabiha Gökçen Havalimanı (SAW)</strong>’dan özel bir taksi mi arıyorsunuz? APL Transfers, gizli ücret olmadan 
    sabit fiyatlı özel havalimanı transferleri sunar. Sedan araç, geniş minibüs veya lüks Mercedes araç seçenekleriyle, 
    varış noktanıza konforlu ve sorunsuz bir yolculuk sağlıyoruz.
</p>

<p>
    Profesyonel şoförlerimiz, Kolon 13’te ücretsiz karşılama hizmeti sunarak, varışınızda sürücünüzü hızlı ve kolayca bulmanızı sağlar.
</p>

<h2>Sabiha Gökçen Havalimanı Transfer Araç Seçenekleri</h2>
<ul>
    <li><strong>Sedan Araç</strong> – Bireysel yolcular ve çiftler için ideal.</li>
    <li><strong>Minivan (5 Yolcu)</strong> – Aileler ve küçük gruplar için mükemmel.</li>
    <li><strong>8 Kişilik Minibüs</strong> – Daha büyük gruplar ve fazla bagaj için geniş ve rahat.</li>
    <li><strong>Mercedes İş Sınıfı Araçlar</strong> – VIP ve iş seyahatleri için üst düzey konfor.</li>
</ul>

<h2>Karşılama Hizmeti – Sürücünüzü Nerede Bulabilirsiniz?</h2>
<ul>
    <li><strong>Konum:</strong> <strong>Sabiha Gökçen Havalimanı (SAW)</strong>’na vardığınızda, sürücünüz sizi yaya geçidinin sonunda, Kolon 13’te bekliyor olacak.</li>
    <li><strong>Tanıma:</strong> Sürücünüz, kolay tanınabilmeniz için adınızı taşıyan bir pano tutacaktır.</li>
    <li><strong>Hızlı ve Kolay Transfer:</strong> Taksi beklemenize gerek yok – özel şoförünüz sizi doğrudan hedefinize götürecek.</li>
</ul>

<h2>Neden APL Transfers’i Tercih Etmelisiniz?</h2>
<ul>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Ne görüyorsanız onu ödersiniz.</li>
    <li><strong>Ücretsiz Karşılama ve Bekleme Süresi</strong> – Şoförünüz, Kolon 13’te isminizin yazılı olduğu pano ile sizi karşılar.</li>
    <li><strong>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal</strong> – Esnek ve risksiz rezervasyon.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – İhtiyacınız olduğunda her an yanınızdayız.</li>
    <li><strong>Kurumsal Seyahat Çözümleri</strong> – İş seyahatleri için güvenilir transferler.</li>
    <li><strong>Temiz, Konforlu ve Bakımlı Araçlar</strong> – Konforlu ve şık bir yolculuk deneyimi.</li>
    <li><strong>Güvenli Ödeme Seçenekleri</strong> – Euro, GBP, ABD Doları ve Türk Lirası ile ödeme yapabilirsiniz.</li>
</ul>

<h2>Sabiha Gökçen Havalimanı Taksi Rezervasyonu Yapın</h2>

<p>
    Havalimanında taksi arama zahmetinden kaçının. Önceden rezervasyon yaparak <strong>Sabiha Gökçen Havalimanı</strong> transferinizi stressiz hale getirin.
</p>

<ul>
    <li><strong>Anında Online Rezervasyon</strong></li>
    <li><strong>Güvenli Ödeme</strong> (Euro, GBP, ABD Doları ve Türk Lirası kabul edilir)</li>
    <li><strong>Gizli Ücret Yok – Sabit ve Rekabetçi Fiyatlandırma</strong></li>
</ul>

<p>
    Yardıma mı ihtiyacınız var? Sorunsuz bir transfer deneyimi için <strong>7/24 müşteri destek</strong> ekibimizle iletişime geçin.
    <a href="/">Hemen Rezervasyon Yapın</a> ve güvenle seyahat edin.
</p>

        `,
        ar: `
        <h1>أسعار سيارات الأجرة في مطار صبيحة كوكجن – تحويلات خاصة وثابتة</h1>

<h2>تحويلات موثوقة وسلسة من مطار صبيحة كوكجن (SAW)</h2>

<p>
    هل تبحث عن سيارة أجرة خاصة من <strong>مطار صبيحة كوكجن (SAW)</strong>؟ توفر APL Transfers تحويلات خاصة من المطار بأسعار ثابتة 
    وبدون أي رسوم خفية. سواء كنت بحاجة إلى سيارة سيدان، أو حافلة صغيرة فسيحة، أو سيارة مرسيدس فاخرة، 
    فإننا نضمن لك رحلة مريحة وسلسة إلى وجهتك.
</p>

<p>
    يقدم سائقونا المحترفون خدمة استقبال مجانية عند العمود 13، مما يضمن لك العثور على سائقك بسرعة وسهولة فور وصولك.
</p>

<h2>خيارات المركبات لنقل مطار صبيحة كوكجن</h2>
<ul>
    <li><strong>سيارة سيدان</strong> – مثالية للمسافرين الأفراد والأزواج.</li>
    <li><strong>حافلة صغيرة (5 ركاب)</strong> – رائعة للعائلات والمجموعات الصغيرة.</li>
    <li><strong>حافلة صغيرة بـ 8 مقاعد</strong> – فسيحة ومناسبة للمجموعات الكبيرة مع الأمتعة.</li>
    <li><strong>سيارات مرسيدس للأعمال</strong> – راحة فاخرة للمسافرين من رجال الأعمال وVIP.</li>
</ul>

<h2>خدمة الاستقبال – أين تجد سائقك؟</h2>
<ul>
    <li><strong>الموقع:</strong> عند وصولك إلى <strong>مطار صبيحة كوكجن (SAW)</strong>، سيكون سائقك بانتظارك عند العمود 13، 
        الواقع في نهاية معبر المشاة.</li>
    <li><strong>التعريف:</strong> سيحمل السائق لوحة تحمل اسمك ليسهل عليك التعرف عليه.</li>
    <li><strong>تحويلات سلسة:</strong> لا داعي لانتظار سيارات الأجرة – سيوصلك سائقك الخاص مباشرة إلى وجهتك.</li>
</ul>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>أسعار ثابتة – لا رسوم خفية</strong> – ما تراه هو ما تدفعه.</li>
    <li><strong>خدمة استقبال وانتظار مجانية</strong> – سيلتقي بك السائق عند العمود 13 بلوحة اسمك.</li>
    <li><strong>إمكانية الإلغاء المجاني حتى 24 ساعة قبل الوصول</strong> – احجز بثقة ومرونة.</li>
    <li><strong>دعم العملاء 24/7</strong> – نحن هنا لمساعدتك في أي وقت تحتاج فيه.</li>
    <li><strong>حلول السفر للشركات</strong> – تحويلات موثوقة للمسافرين من رجال الأعمال.</li>
    <li><strong>مركبات نظيفة ومريحة ومصانة جيدًا</strong> – استمتع برحلة فاخرة ومريحة.</li>
    <li><strong>خيارات دفع آمنة</strong> – ادفع باليورو، الجنيه الإسترليني، الدولار الأمريكي أو الليرة التركية.</li>
</ul>

<h2>احجز سيارة أجرة مطار صبيحة كوكجن الآن</h2>

<p>
    تجنب عناء البحث عن سيارة أجرة في المطار. احجز تحويلك من مطار صبيحة كوكجن مسبقًا 
    لرحلة سلسة وخالية من المتاعب.
</p>

<ul>
    <li><strong>حجز فوري عبر الإنترنت</strong></li>
    <li><strong>دفع آمن</strong> (يتم قبول اليورو، الجنيه الإسترليني، الدولار الأمريكي والليرة التركية)</li>
    <li><strong>لا رسوم خفية – أسعار ثابتة وتنافسية</strong></li>
</ul>

<p>
    هل تحتاج إلى مساعدة؟ تواصل مع <strong>دعم العملاء 24/7</strong> للحصول على تجربة تحويل سلسة.
    <a href="/">احجز الآن</a> وسافر بثقة!
</p>

        `,
        es: `
 <h1>Precios de Taxi en el Aeropuerto Sabiha Gökçen – Traslados Privados y Fijos</h1>

<h2>Traslados Confiables y Sin Estrés desde el Aeropuerto Sabiha Gökçen (SAW)</h2>

<p>
    ¿Buscas un taxi privado desde el <strong>Aeropuerto Sabiha Gökçen (SAW)</strong>? APL Transfers ofrece traslados privados 
    con precios fijos y sin cargos ocultos. Ya sea que necesites un sedán, un minibús espacioso 
    o un lujoso vehículo Mercedes, te garantizamos un viaje cómodo y sin complicaciones a tu destino.
</p>

<p>
    Nuestros conductores profesionales ofrecen un servicio de bienvenida en la Columna 13, asegurando 
    que puedas encontrar a tu conductor de manera rápida y sencilla a tu llegada.
</p>

<h2>Opciones de Vehículos para Traslados en el Aeropuerto Sabiha Gökçen</h2>
<ul>
    <li><strong>Sedán</strong> – Ideal para viajeros solos y parejas.</li>
    <li><strong>Monovolumen (5 Pasajeros)</strong> – Perfecto para familias y grupos pequeños.</li>
    <li><strong>Minibús de 8 Plazas</strong> – Espacioso y perfecto para grupos más grandes con equipaje.</li>
    <li><strong>Vehículos Mercedes de Clase Ejecutiva</strong> – Viajes de lujo para ejecutivos y VIPs.</li>
</ul>

<h2>Servicio de Bienvenida – ¿Dónde Encontrar a tu Conductor?</h2>
<ul>
    <li><strong>Ubicación:</strong> Al llegar al <strong>Aeropuerto Sabiha Gökçen (SAW)</strong>, tu conductor te estará esperando 
        en la Columna 13, ubicada al final del cruce peatonal.</li>
    <li><strong>Identificación:</strong> El conductor llevará un cartel con tu nombre para que puedas reconocerlo fácilmente.</li>
    <li><strong>Traslados sin Esperas:</strong> No necesitas hacer fila para un taxi: tu conductor privado te llevará directamente a tu destino.</li>
</ul>

<h2>¿Por Qué Elegir APL Transfers?</h2>
<ul>
    <li><strong>Precios Fijos – Sin Costos Ocultos</strong> – Lo que ves es lo que pagas.</li>
    <li><strong>Bienvenida y Tiempo de Espera Gratis</strong> – Tu conductor te recibirá en la Columna 13 con un cartel con tu nombre.</li>
    <li><strong>Cancelación Gratuita Hasta 24 Horas Antes de la Llegada</strong> – Reserva flexible y sin riesgos.</li>
    <li><strong>Atención al Cliente 24/7</strong> – Asistencia siempre que la necesites.</li>
    <li><strong>Soluciones de Viaje Corporativo</strong> – Traslados confiables para profesionales.</li>
    <li><strong>Vehículos Limpios, Cómodos y Bien Mantenidos</strong> – Viaja con comodidad y estilo.</li>
    <li><strong>Pagos Seguros Aceptados</strong> – Puedes pagar en Euros, GBP, Dólares Estadounidenses y Lira Turca.</li>
</ul>

<h2>Reserva Ahora tu Taxi en el Aeropuerto Sabiha Gökçen</h2>

<p>
    Evita la molestia de buscar un taxi en el aeropuerto. Reserva tu traslado desde el 
    <strong>Aeropuerto Sabiha Gökçen</strong> con anticipación para un viaje sin estrés.
</p>

<ul>
    <li><strong>Reserva Online al Instante</strong></li>
    <li><strong>Pago Seguro</strong> (Se aceptan Euros, GBP, Dólares Estadounidenses y Lira Turca)</li>
    <li><strong>Sin Costos Ocultos – Precios Fijos y Competitivos</strong></li>
</ul>

<p>
    ¿Necesitas ayuda? Contacta con nuestro <strong>soporte al cliente 24/7</strong> para una experiencia de traslado sin complicaciones.
    <a href="/">Reserva Ahora</a> y viaja con confianza.
</p>


        `,
        it: `
        <h1>Prezzi Taxi Aeroporto Sabiha Gökçen – Trasferimenti Privati e a Prezzo Fisso</h1>

<h2>Trasferimenti Affidabili e Senza Stress dall'Aeroporto di Sabiha Gökçen (SAW)</h2>

<p>
    Cerchi un taxi privato dall'<strong>Aeroporto di Sabiha Gökçen (SAW)</strong>? APL Transfers offre trasferimenti privati 
    a prezzo fisso, senza costi nascosti. Che tu abbia bisogno di una berlina, di un minibus spazioso 
    o di un lussuoso veicolo Mercedes, garantiamo un viaggio confortevole e senza problemi fino alla tua destinazione.
</p>

<p>
    I nostri autisti professionisti offrono un servizio di accoglienza alla Colonna 13, per assicurarti di trovare 
    rapidamente e facilmente il tuo autista al tuo arrivo.
</p>

<h2>Opzioni di Veicoli per i Trasferimenti all'Aeroporto di Sabiha Gökçen</h2>
<ul>
    <li><strong>Berlina</strong> – Ideale per viaggiatori singoli e coppie.</li>
    <li><strong>Monovolume (5 Passeggeri)</strong> – Perfetto per famiglie e piccoli gruppi.</li>
    <li><strong>Minibus a 8 Posti</strong> – Spazioso e ideale per gruppi più numerosi con bagagli.</li>
    <li><strong>Veicoli Mercedes Business-Class</strong> – Viaggi di lusso per dirigenti ed ospiti VIP.</li>
</ul>

<h2>Servizio di Accoglienza – Dove Trovare il Tuo Autista?</h2>
<ul>
    <li><strong>Posizione:</strong> All'arrivo all'<strong>Aeroporto di Sabiha Gökçen (SAW)</strong>, il tuo autista ti aspetterà 
        alla Colonna 13, situata alla fine dell'attraversamento pedonale.</li>
    <li><strong>Identificazione:</strong> L'autista terrà un cartello con il tuo nome per essere facilmente riconosciuto.</li>
    <li><strong>Trasferimenti senza Attese:</strong> Nessuna coda per un taxi – il tuo autista privato ti porterà direttamente alla tua destinazione.</li>
</ul>

<h2>Perché Scegliere APL Transfers?</h2>
<ul>
    <li><strong>Prezzi Fissi – Nessun Costo Nascosto</strong> – Paghi solo quello che vedi.</li>
    <li><strong>Accoglienza e Attesa Gratuite</strong> – Il tuo autista ti accoglierà alla Colonna 13 con un cartello con il tuo nome.</li>
    <li><strong>Cancellazione Gratuita fino a 24 Ore Prima dell'Arrivo</strong> – Prenotazione flessibile e senza rischi.</li>
    <li><strong>Supporto Clienti 24/7</strong> – Assistenza disponibile in qualsiasi momento.</li>
    <li><strong>Soluzioni per Viaggi Aziendali</strong> – Trasferimenti affidabili per professionisti.</li>
    <li><strong>Veicoli Puliti, Confortevoli e Ben Manutenuti</strong> – Viaggia in totale relax e stile.</li>
    <li><strong>Pagamenti Sicuri Accettati</strong> – Puoi pagare in Euro, GBP, Dollari USA o Lira Turca.</li>
</ul>

<h2>Prenota Ora il Tuo Taxi all'Aeroporto di Sabiha Gökçen</h2>

<p>
    Evita lo stress di cercare un taxi all’aeroporto. Prenota in anticipo il tuo trasferimento 
    dall'<strong>Aeroporto di Sabiha Gökçen</strong> per un viaggio senza preoccupazioni.
</p>

<ul>
    <li><strong>Prenotazione Online Immediata</strong></li>
    <li><strong>Pagamento Sicuro</strong> (Accettati Euro, GBP, Dollari USA e Lira Turca)</li>
    <li><strong>Nessun Costo Nascosto – Prezzi Fissi e Competitivi</strong></li>
</ul>

<p>
    Hai bisogno di aiuto? Contatta il nostro <strong>servizio clienti 24/7</strong> per un’esperienza di trasferimento senza problemi.
    <a href="/">Prenota Ora</a> e viaggia con tranquillità!
</p>

        `,
        ru: `
        <h1>Цены на такси в аэропорту Сабиха Гёкчен – Фиксированные и частные трансферы</h1>

<h2>Надежные и комфортные трансферы из аэропорта Сабиха Гёкчен (SAW)</h2>

<p>
    Ищете частное такси из <strong>аэропорта Сабиха Гёкчен (SAW)</strong>? APL Transfers предлагает фиксированные 
    цены на частные трансферы без скрытых платежей. Независимо от того, нужна ли вам седановая машина, 
    просторный минивэн или роскошный автомобиль Mercedes, мы гарантируем комфортную и удобную поездку 
    до вашего пункта назначения.
</p>

<p>
    Наши профессиональные водители предлагают бесплатную встречу в зоне Колонна 13, 
    что позволяет вам быстро и легко найти своего водителя по прибытии.
</p>

<h2>Варианты транспорта для трансфера из аэропорта Сабиха Гёкчен</h2>
<ul>
    <li><strong>Седан</strong> – Идеально для одиночных путешественников и пар.</li>
    <li><strong>Минивэн (5 пассажиров)</strong> – Отлично подходит для семей и небольших групп.</li>
    <li><strong>Микроавтобус на 8 мест</strong> – Просторный и удобный для больших групп с багажом.</li>
    <li><strong>Автомобили Mercedes бизнес-класса</strong> – Премиальный комфорт для деловых путешественников и VIP-гостей.</li>
</ul>

<h2>Где найти вашего водителя?</h2>
<ul>
    <li><strong>Местоположение:</strong> По прибытии в <strong>аэропорт Сабиха Гёкчен (SAW)</strong> ваш водитель будет ждать вас 
        у Колонны 13, расположенной в конце пешеходного перехода.</li>
    <li><strong>Опознание:</strong> Водитель будет держать табличку с вашим именем для удобства.</li>
    <li><strong>Без задержек:</strong> Вам не нужно стоять в очереди на такси — ваш личный водитель отвезет вас прямо к месту назначения.</li>
</ul>

<h2>Почему выбирают APL Transfers?</h2>
<ul>
    <li><strong>Фиксированные цены – Без скрытых платежей</strong> – Вы платите ровно столько, сколько указано.</li>
    <li><strong>Бесплатная встреча и ожидание</strong> – Водитель встретит вас у Колонны 13 с табличкой с вашим именем.</li>
    <li><strong>Бесплатная отмена бронирования за 24 часа до прибытия</strong> – Гибкие условия бронирования без риска.</li>
    <li><strong>Круглосуточная поддержка клиентов</strong> – Мы всегда готовы помочь вам.</li>
    <li><strong>Корпоративные трансферы</strong> – Надежные поездки для деловых клиентов.</li>
    <li><strong>Чистые, комфортные и ухоженные автомобили</strong> – Наслаждайтесь поездкой с максимальным комфортом.</li>
    <li><strong>Безопасная оплата</strong> – Принимаются платежи в евро, фунтах стерлингов, долларах США и турецких лирах.</li>
</ul>

<h2>Забронируйте такси из аэропорта Сабиха Гёкчен</h2>

<p>
    Избегайте поиска такси по прилету. Забронируйте свой трансфер из <strong>аэропорта Сабиха Гёкчен</strong> заранее 
    для удобного и беспроблемного путешествия.
</p>

<ul>
    <li><strong>Мгновенное онлайн-бронирование</strong></li>
    <li><strong>Безопасная оплата</strong> (Принимаются евро, GBP, доллары США и турецкие лиры)</li>
    <li><strong>Без скрытых платежей – Фиксированные и конкурентные цены</strong></li>
</ul>

<p>
    Нужна помощь? Свяжитесь с нашей <strong>службой поддержки 24/7</strong> для комфортного трансфера.
    <a href="/">Забронировать сейчас</a> и путешествуйте без забот!
</p>

        `,
        zh: `
        <h1>萨比哈·格克琴机场出租车价格 – 固定价格 & 私人接送</h1>

<h2>可靠、无忧的萨比哈·格克琴机场 (SAW) 接送服务</h2>

<p>
    需要从 <strong>萨比哈·格克琴机场 (SAW)</strong> 乘坐私人出租车？APL Transfers 提供固定价格的私人机场接送服务，<br>
    无隐藏费用。无论您需要轿车、宽敞的面包车，还是豪华奔驰商务车，我们都能确保您舒适、顺畅地抵达目的地。
</p>

<p>
    我们的专业司机将在 13 号柱提供免费接机服务，确保您抵达后能快速、轻松地找到您的司机。
</p>

<h2>萨比哈·格克琴机场接送车辆选择</h2>
<ul>
    <li><strong>轿车</strong> – 适合个人和情侣出行。</li>
    <li><strong>面包车（5 人座）</strong> – 适合家庭和小型团体。</li>
    <li><strong>8 座小型巴士</strong> – 空间宽敞，适合携带大件行李的团队。</li>
    <li><strong>奔驰商务车型</strong> – 提供高端商务人士和 VIP 旅客的尊贵出行体验。</li>
</ul>

<h2>接机服务 – 在哪里找到您的司机？</h2>
<ul>
    <li><strong>位置：</strong> 抵达 <strong>萨比哈·格克琴机场 (SAW)</strong> 后，您的司机将在 13 号柱等候，位于人行横道尽头。</li>
    <li><strong>识别方式：</strong> 司机将举着写有您姓名的接机牌，方便您认出。</li>
    <li><strong>无缝衔接：</strong> 无需排队等出租车，您的私人司机将直接送您到达目的地。</li>
</ul>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>固定价格，无隐藏费用</strong> – 透明定价，无额外收费。</li>
    <li><strong>免费接机 & 等待时间</strong> – 司机将在 13 号柱举牌迎接您。</li>
    <li><strong>支持 24 小时前免费取消</strong> – 预订灵活，无后顾之忧。</li>
    <li><strong>24/7 客户支持</strong> – 随时提供帮助。</li>
    <li><strong>企业差旅解决方案</strong> – 为商务人士提供可靠的接送服务。</li>
    <li><strong>干净、舒适且维护良好的车辆</strong> – 享受高品质的舒适旅行体验。</li>
    <li><strong>安全支付方式</strong> – 可使用欧元 (EUR)、英镑 (GBP)、美元 (USD) 和土耳其里拉 (TRY) 支付。</li>
</ul>

<h2>立即预订萨比哈·格克琴机场出租车</h2>

<p>
    避免在机场排队等待出租车，提前预订您的 <strong>萨比哈·格克琴机场</strong> 接送服务，享受轻松无忧的旅程。
</p>

<ul>
    <li><strong>即时在线预订</strong></li>
    <li><strong>安全支付</strong>（支持欧元、英镑、美元和土耳其里拉支付）</li>
    <li><strong>无隐藏费用 – 透明固定价格，经济实惠</strong></li>
</ul>

<p>
    需要帮助？请联系 <strong>24/7 客服支持</strong>，确保您拥有顺畅的接送体验。
    <a href="/">立即预订</a>，享受安心之旅！
</p>

        `,
    },
    "/dalaman-airport-taxi-prices": {
        en: `
        <h1>Dalaman Airport Taxi Transfer Prices – Private & Fixed-Price Transfers</h1>

<h2>Reliable & Comfortable Transfers from Dalaman Airport (DLM)</h2>

<p>
    Traveling to <strong>Fethiye, Marmaris, Oludeniz, Icmeler, or Hisaronu</strong>? APL Transfers offers 
    <strong>private, fixed-price airport taxi services</strong> from <strong>Dalaman Airport (DLM)</strong> to your destination. 
    Whether you need a <strong>saloon car, a spacious people carrier for five passengers, an eight-seater minibus, 
    or a luxury Mercedes business-class vehicle</strong>, we provide a smooth and hassle-free transfer experience.
</p>

<p>
    Our professional drivers offer a <strong>meet & greet service at the arrival gates</strong>, ensuring that 
    you are welcomed as soon as you exit the terminal.
</p>

<h2>Vehicle Options for Dalaman Airport Transfers</h2>
<ul>
    <li><strong>Saloon Car</strong> – Ideal for solo travelers and couples.</li>
    <li><strong>People Carrier (5 Passengers)</strong> – Great for families and small groups.</li>
    <li><strong>8-Seater Minibus</strong> – Spacious and perfect for larger groups with luggage.</li>
    <li><strong>Business-Class Mercedes Vehicles</strong> – Luxury and comfort for executive travelers.</li>
</ul>

<h2>Meet & Greet Service – Where to Find Your Driver</h2>
<ul>
    <li><strong>Location:</strong> Upon arrival at <strong>Dalaman Airport (DLM)</strong>, your driver will be 
        waiting <strong>by the arrival gates</strong>, holding a passenger name board for easy recognition.</li>
    <li><strong>No delays:</strong> Even if your flight is early or delayed, our drivers track your arrival 
        time and adjust accordingly.</li>
    <li><strong>Seamless Transfers:</strong> No need to wait for taxis or deal with last-minute negotiations—
        your private driver will be ready to take you directly to your destination.</li>
</ul>

<h2>Why Choose APL Transfers?</h2>
<ul>
    <li><strong>Meet & Greet at the Arrival Gates</strong> – Your driver will be waiting for you with a name board.</li>
    <li><strong>Fixed Prices – No Hidden Costs</strong> – What you see is what you pay.</li>
    <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Book with confidence.</li>
    <li><strong>Free Child Seats for 8 & 9-Seater Private Vehicles</strong> – Safety for families at no extra cost.</li>
    <li><strong>24/7 Customer Support</strong> – Always available to assist with your journey.</li>
    <li><strong>Corporate Travel Solutions</strong> – Reliable airport transfers for business professionals.</li>
    <li><strong>Luxury, Clean & Well-Maintained Vehicles</strong> – Enjoy a comfortable ride to your destination.</li>
    <li><strong>Destinations Across the Region</strong> – Transfers available to <strong>Fethiye, Marmaris, Oludeniz, 
        Icmeler, Hisaronu</strong>, and more.</li>
</ul>

<h2>Book Your Dalaman Airport Taxi Now</h2>

<p>
    Make your arrival at <strong>Dalaman Airport (DLM)</strong> stress-free by pre-booking your 
    <strong>private taxi transfer</strong>. Whether you're heading to the stunning beaches of 
    <strong>Oludeniz, the lively town of Marmaris, the scenic resort of Hisaronu, or the relaxing 
    retreat of Icmeler</strong>, we ensure a smooth, fixed-price transfer with no hidden fees.
</p>

<ul>
    <li><strong>Instant Online Booking</strong></li>
    <li><strong>Secure Payment</strong> (Euro, GBP, US Dollar & Turkish Lira Accepted)</li>
    <li><strong>No Hidden Fees – Transparent Pricing</strong></li>
</ul>

<p>
    Need help? Contact our <strong>24/7 customer support</strong> for assistance.
    <a href="/">Book Now</a> and travel with ease.
</p>

        `,
        tr: `
        <h1>Dalaman Havalimanı Taksi Transfer Fiyatları – Özel ve Sabit Fiyatlı Transferler</h1>

<h2>Dalaman Havalimanı’ndan Güvenilir ve Konforlu Transferler (DLM)</h2>

<p>
    <strong>Fethiye, Marmaris, Ölüdeniz, İçmeler veya Hisarönü</strong>’ne mi seyahat ediyorsunuz? APL Transfers, 
    <strong>Dalaman Havalimanı (DLM)</strong>’dan özel ve sabit fiyatlı havalimanı taksi transfer hizmetleri sunar. 
    İhtiyacınız ister <strong>sedan bir araç, beş yolcu kapasiteli geniş bir araç, sekiz kişilik bir minibüs 
    veya lüks bir Mercedes iş sınıfı araç</strong> olsun, yolculuğunuzun sorunsuz ve konforlu geçmesini sağlıyoruz.
</p>

<p>
    Profesyonel şoförlerimiz, <strong>varış kapılarında karşılama hizmeti</strong> sunarak, havalimanı terminalinden 
    çıktığınız anda size sıcak bir karşılama sağlar.
</p>

<h2>Dalaman Havalimanı Transfer Araç Seçenekleri</h2>
<ul>
    <li><strong>Sedan Araç</strong> – Bireysel yolcular ve çiftler için ideal.</li>
    <li><strong>Minivan (5 Yolcu)</strong> – Aileler ve küçük gruplar için mükemmel.</li>
    <li><strong>8 Kişilik Minibüs</strong> – Daha büyük gruplar ve fazla bagaj için geniş ve rahat.</li>
    <li><strong>Mercedes İş Sınıfı Araçlar</strong> – VIP ve iş seyahatleri için üst düzey konfor.</li>
</ul>

<h2>Karşılama Hizmeti – Sürücünüzü Nerede Bulabilirsiniz?</h2>
<ul>
    <li><strong>Konum:</strong> <strong>Dalaman Havalimanı (DLM)</strong>’na vardığınızda, şoförünüz sizi 
        <strong>varış kapılarında</strong> isminizin yazılı olduğu bir tabela ile karşılayacaktır.</li>
    <li><strong>Gecikme Yok:</strong> Uçağınız erken inse veya rötar yapsa bile, şoförlerimiz varış saatlerinizi 
        takip ederek programlarını buna göre ayarlar.</li>
    <li><strong>Hızlı ve Kolay Transfer:</strong> Taksi beklemenize veya son dakika pazarlıkları yapmanıza gerek kalmaz – 
        özel şoförünüz sizi doğrudan gitmek istediğiniz yere götürecektir.</li>
</ul>

<h2>Neden APL Transfers’i Seçmelisiniz?</h2>
<ul>
    <li><strong>Varış Kapılarında Karşılama</strong> – Şoförünüz sizi isminizin yazılı olduğu bir tabela ile bekliyor olacak.</li>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Ne görüyorsanız onu ödersiniz.</li>
    <li><strong>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal</strong> – Esnek ve risksiz rezervasyon.</li>
    <li><strong>8 ve 9 Kişilik Özel Araçlar İçin Ücretsiz Çocuk Koltuğu</strong> – Aileler için ekstra güvenlik, ek ücret olmadan.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – Seyahatinizde her zaman yardıma hazırız.</li>
    <li><strong>Kurumsal Seyahat Çözümleri</strong> – İş seyahatleri için güvenilir transfer hizmetleri.</li>
    <li><strong>Temiz, Konforlu ve Bakımlı Araçlar</strong> – Varış noktanıza konfor içinde ulaşın.</li>
    <li><strong>Bölgedeki Popüler Destinasyonlar</strong> – <strong>Fethiye, Marmaris, Ölüdeniz, 
        İçmeler, Hisarönü</strong> ve daha birçok yere transfer hizmeti sağlıyoruz.</li>
</ul>

<h2>Dalaman Havalimanı Taksi Rezervasyonu Yapın</h2>

<p>
    <strong>Dalaman Havalimanı (DLM)</strong>’na vardığınızda taksi arama stresinden kaçının. 
    <strong>Özel havalimanı taksi transferinizi</strong> önceden rezerve edin ve konforlu bir yolculuk yapın. 
    İster <strong>Ölüdeniz’in eşsiz plajlarına, Marmaris’in hareketli şehir merkezine, Hisarönü’nün 
    doğal güzelliklerine ya da İçmeler’in huzurlu tatil köyüne</strong> gidiyor olun, gizli ücret olmadan 
    sabit fiyatlı ve sorunsuz bir transfer hizmeti sunuyoruz.
</p>

<ul>
    <li><strong>Anında Online Rezervasyon</strong></li>
    <li><strong>Güvenli Ödeme</strong> (Euro, GBP, ABD Doları & Türk Lirası kabul edilir)</li>
    <li><strong>Gizli Ücret Yok – Şeffaf Fiyatlandırma</strong></li>
</ul>

<p>
    Yardıma mı ihtiyacınız var? <strong>7/24 müşteri destek</strong> ekibimizle iletişime geçin.
    <a href="/">Hemen Rezervasyon Yapın</a> ve rahat bir yolculuk yapın.
</p>
        `,
        ar: `
        <h1>أسعار سيارات الأجرة في مطار دالامان – خدمات نقل خاصة وبأسعار ثابتة</h1>

<h2>نقل موثوق ومريح من مطار دالامان (DLM)</h2>

<p>
    هل تخطط للسفر إلى <strong>فتحية، مرمريس، أولودينيز، إيشملر أو هيسارونو</strong>؟ تقدم APL Transfers  
    <strong>خدمات نقل خاصة من مطار دالامان (DLM) بأسعار ثابتة</strong> إلى وجهتك.  
    سواء كنت بحاجة إلى <strong>سيارة سيدان، حافلة صغيرة تتسع لخمسة ركاب، حافلة صغيرة بثمانية مقاعد، 
    أو سيارة مرسيدس فاخرة للأعمال</strong>، فإننا نضمن لك رحلة سلسة ومريحة بدون أي متاعب.
</p>

<p>
    يوفر سائقونا المحترفون <strong>خدمة استقبال عند بوابات الوصول</strong>، مما يضمن لك ترحيبًا فوريًا  
    بمجرد خروجك من مبنى المطار.
</p>

<h2>خيارات المركبات لخدمة النقل من مطار دالامان</h2>
<ul>
    <li><strong>سيارة سيدان</strong> – مثالية للمسافرين الأفراد والأزواج.</li>
    <li><strong>حافلة صغيرة (5 ركاب)</strong> – مثالية للعائلات والمجموعات الصغيرة.</li>
    <li><strong>حافلة صغيرة بـ 8 مقاعد</strong> – فسيحة ومناسبة للمجموعات الكبيرة مع الأمتعة.</li>
    <li><strong>سيارات مرسيدس للأعمال</strong> – توفر الراحة والفخامة للمسافرين من رجال الأعمال.</li>
</ul>

<h2>خدمة الاستقبال – أين تجد سائقك؟</h2>
<ul>
    <li><strong>الموقع:</strong> عند وصولك إلى <strong>مطار دالامان (DLM)</strong>،  
        سيكون سائقك في انتظارك <strong>عند بوابات الوصول</strong> حاملًا لوحة تحمل اسمك لسهولة التعرف عليه.</li>
    <li><strong>بدون تأخير:</strong> حتى إذا كان وصول رحلتك مبكرًا أو متأخرًا،  
        فإن سائقينا يتابعون وقت وصولك ويعدّلون جدولهم وفقًا لذلك.</li>
    <li><strong>نقل سلس:</strong> لا داعي للانتظار لسيارات الأجرة أو التفاوض في اللحظة الأخيرة –  
        سيكون سائقك الخاص جاهزًا لنقلك مباشرة إلى وجهتك.</li>
</ul>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>الاستقبال عند بوابات الوصول</strong> – سيكون السائق في انتظارك بلوحة تحمل اسمك.</li>
    <li><strong>أسعار ثابتة – بدون رسوم خفية</strong> – لا يوجد أي تكاليف إضافية.</li>
    <li><strong>إمكانية الإلغاء المجاني حتى 24 ساعة قبل الوصول</strong> – حجز مرن وآمن.</li>
    <li><strong>مقاعد أطفال مجانية للمركبات الخاصة بـ 8 و 9 مقاعد</strong> – لضمان سلامة العائلات.</li>
    <li><strong>دعم العملاء 24/7</strong> – متاح دائمًا لمساعدتك أثناء رحلتك.</li>
    <li><strong>حلول سفر الشركات</strong> – خدمات نقل موثوقة للمسافرين من رجال الأعمال.</li>
    <li><strong>مركبات فاخرة ونظيفة ومُصانة جيدًا</strong> – استمتع برحلة مريحة إلى وجهتك.</li>
    <li><strong>وجهات متعددة في المنطقة</strong> – تتوفر خدمات النقل إلى  
        <strong>فتحية، مرمريس، أولودينيز، إيشملر، هيسارونو</strong> والمزيد.</li>
</ul>

<h2>احجز سيارة الأجرة من مطار دالامان الآن</h2>

<p>
    تجنب عناء البحث عن سيارة أجرة عند وصولك إلى <strong>مطار دالامان (DLM)</strong>.  
    احجز <strong>خدمة النقل الخاصة</strong> مسبقًا وتمتع برحلة مريحة وخالية من المتاعب.<br>  
    سواء كنت متجهًا إلى <strong>الشواطئ الساحرة لأولودينيز، المدينة النابضة بالحياة مرمريس،  
    المنتجع الخلاب في هيسارونو أو الملاذ الهادئ في إيشملر</strong>، فإننا نوفر لك خدمة نقل  
    بأسعار ثابتة وبدون أي رسوم خفية.
</p>

<ul>
    <li><strong>حجز فوري عبر الإنترنت</strong></li>
    <li><strong>دفع آمن</strong> (نقبل اليورو، الجنيه الإسترليني، الدولار الأمريكي والليرة التركية)</li>
    <li><strong>بدون رسوم خفية – تسعير شفاف</strong></li>
</ul>

<p>
    هل تحتاج إلى مساعدة؟ تواصل مع <strong>خدمة العملاء المتوفرة 24/7</strong> لضمان تجربة نقل سلسة.
    <a href="/">احجز الآن</a> وسافر براحة وطمأنينة!
</p>

        `,
        es: `
        <h1>Precios de Taxi en el Aeropuerto de Dalaman – Traslados Privados y a Precio Fijo</h1>

<h2>Traslados Confiables y Cómodos desde el Aeropuerto de Dalaman (DLM)</h2>

<p>
    ¿Viajas a <strong>Fethiye, Marmaris, Oludeniz, Icmeler o Hisaronu</strong>?  
    APL Transfers ofrece <strong>servicios de taxi privado con tarifa fija</strong>  
    desde el <strong>Aeropuerto de Dalaman (DLM)</strong> hasta tu destino.  
    Ya sea que necesites un <strong>sedán, un monovolumen espacioso para cinco pasajeros,  
    un minibús de ocho plazas o un lujoso Mercedes de clase ejecutiva</strong>,  
    garantizamos un traslado fluido y sin complicaciones.
</p>

<p>
    Nuestros conductores profesionales ofrecen un <strong>servicio de bienvenida en las puertas de llegada</strong>,  
    asegurando que seas recibido tan pronto como salgas de la terminal.
</p>

<h2>Opciones de Vehículos para Traslados desde el Aeropuerto de Dalaman</h2>
<ul>
    <li><strong>Sedán</strong> – Ideal para viajeros solos y parejas.</li>
    <li><strong>Monovolumen (5 Pasajeros)</strong> – Perfecto para familias y grupos pequeños.</li>
    <li><strong>Minibús de 8 Plazas</strong> – Espacioso y adecuado para grupos grandes con equipaje.</li>
    <li><strong>Vehículos Mercedes de Clase Ejecutiva</strong> – Viajes de lujo para ejecutivos y VIPs.</li>
</ul>

<h2>Servicio de Bienvenida – ¿Dónde Encontrar a tu Conductor?</h2>
<ul>
    <li><strong>Ubicación:</strong> Al llegar al <strong>Aeropuerto de Dalaman (DLM)</strong>,  
        tu conductor te estará esperando <strong>en las puertas de llegada</strong>,  
        sosteniendo un cartel con tu nombre para que lo reconozcas fácilmente.</li>
    <li><strong>Sin retrasos:</strong> Incluso si tu vuelo llega antes o se retrasa,  
        nuestros conductores monitorean la hora de llegada y ajustan el horario según sea necesario.</li>
    <li><strong>Traslados sin Esperas:</strong> No es necesario hacer fila para un taxi  
        ni negociar precios de última hora – tu conductor privado estará listo  
        para llevarte directamente a tu destino.</li>
</ul>

<h2>¿Por Qué Elegir APL Transfers?</h2>
<ul>
    <li><strong>Servicio de Bienvenida en las Puertas de Llegada</strong> – Tu conductor te estará esperando con un cartel con tu nombre.</li>
    <li><strong>Precios Fijos – Sin Costos Ocultos</strong> – Lo que ves es lo que pagas.</li>
    <li><strong>Cancelación Gratuita Hasta 24 Horas Antes de la Llegada</strong> – Reserva con total confianza.</li>
    <li><strong>Asientos para Niños Gratis en Vehículos de 8 y 9 Plazas</strong> – Seguridad para familias sin costo adicional.</li>
    <li><strong>Atención al Cliente 24/7</strong> – Siempre disponible para ayudarte en tu viaje.</li>
    <li><strong>Soluciones de Viaje para Empresas</strong> – Traslados confiables para viajeros de negocios.</li>
    <li><strong>Vehículos de Lujo, Limpios y Bien Mantenidos</strong> – Disfruta de un viaje cómodo a tu destino.</li>
    <li><strong>Traslados a Diversos Destinos</strong> – Servicio disponible para  
        <strong>Fethiye, Marmaris, Oludeniz, Icmeler, Hisaronu</strong> y más.</li>
</ul>

<h2>Reserva Ahora tu Taxi en el Aeropuerto de Dalaman</h2>

<p>
    Evita el estrés de buscar un taxi al llegar al <strong>Aeropuerto de Dalaman (DLM)</strong>.  
    Reserva con anticipación tu <strong>traslado privado</strong> y disfruta de un viaje sin preocupaciones.<br>  
    Ya sea que te dirijas a <strong>las impresionantes playas de Oludeniz, la animada ciudad de Marmaris,  
    el tranquilo resort de Hisaronu o el retiro relajante de Icmeler</strong>, garantizamos  
    un traslado a precio fijo sin costos ocultos.
</p>

<ul>
    <li><strong>Reserva Online al Instante</strong></li>
    <li><strong>Pago Seguro</strong> (Se aceptan Euros, GBP, Dólares Estadounidenses y Liras Turcas)</li>
    <li><strong>Sin Costos Ocultos – Tarifas Transparentes</strong></li>
</ul>

<p>
    ¿Necesitas ayuda? Contacta con nuestro <strong>soporte al cliente 24/7</strong> para una experiencia de traslado sin inconvenientes.
    <a href="/">Reserva Ahora</a> y viaja con tranquilidad.
</p>

        `,
        it: `
        <h1>Prezzi Taxi Aeroporto di Dalaman – Trasferimenti Privati e a Prezzo Fisso</h1>

<h2>Trasferimenti Affidabili e Confortevoli dall'Aeroporto di Dalaman (DLM)</h2>

<p>
    Viaggi verso <strong>Fethiye, Marmaris, Oludeniz, Icmeler o Hisaronu</strong>? APL Transfers offre 
    <strong>servizi di trasferimento privato in taxi a prezzo fisso</strong> dall'<strong>Aeroporto di Dalaman (DLM)</strong> 
    alla tua destinazione. Che tu abbia bisogno di una <strong>berlina, un monovolume spazioso per cinque passeggeri, 
    un minibus a otto posti o un lussuoso veicolo Mercedes business-class</strong>, garantiamo un viaggio fluido e senza stress.
</p>

<p>
    I nostri autisti professionisti offrono un <strong>servizio di accoglienza ai cancelli di arrivo</strong>, assicurandoti 
    un benvenuto immediato non appena esci dal terminal.
</p>

<h2>Opzioni di Veicoli per i Trasferimenti all'Aeroporto di Dalaman</h2>
<ul>
    <li><strong>Berlina</strong> – Ideale per viaggiatori singoli e coppie.</li>
    <li><strong>Monovolume (5 Passeggeri)</strong> – Perfetto per famiglie e piccoli gruppi.</li>
    <li><strong>Minibus a 8 Posti</strong> – Spazioso e ideale per gruppi numerosi con bagagli.</li>
    <li><strong>Veicoli Mercedes Business-Class</strong> – Lusso e comfort per viaggiatori d'affari.</li>
</ul>

<h2>Servizio di Accoglienza – Dove Trovare il Tuo Autista?</h2>
<ul>
    <li><strong>Posizione:</strong> All'arrivo all'<strong>Aeroporto di Dalaman (DLM)</strong>, il tuo autista ti 
        aspetterà <strong>ai cancelli di arrivo</strong>, tenendo un cartello con il tuo nome per un facile riconoscimento.</li>
    <li><strong>Nessun ritardo:</strong> Anche se il tuo volo è in anticipo o in ritardo, i nostri autisti monitorano 
        l'orario di arrivo e si adattano di conseguenza.</li>
    <li><strong>Trasferimenti senza Attese:</strong> Nessuna fila per un taxi o trattative dell'ultimo minuto – il tuo autista 
        privato sarà pronto a portarti direttamente alla tua destinazione.</li>
</ul>

<h2>Perché Scegliere APL Transfers?</h2>
<ul>
    <li><strong>Accoglienza ai Cancelli di Arrivo</strong> – Il tuo autista ti attenderà con un cartello con il tuo nome.</li>
    <li><strong>Prezzi Fissi – Nessun Costo Nascosto</strong> – Paghi solo quello che vedi.</li>
    <li><strong>Cancellazione Gratuita fino a 24 Ore Prima dell'Arrivo</strong> – Prenotazione flessibile e sicura.</li>
    <li><strong>Seggiolini per Bambini Gratuiti per Veicoli Privati a 8 e 9 Posti</strong> – Sicurezza per le famiglie senza costi aggiuntivi.</li>
    <li><strong>Supporto Clienti 24/7</strong> – Sempre disponibile per assisterti nel tuo viaggio.</li>
    <li><strong>Soluzioni per Viaggi Aziendali</strong> – Trasferimenti affidabili per professionisti.</li>
    <li><strong>Veicoli di Lusso, Puliti e Ben Manutenuti</strong> – Viaggia in totale comfort fino alla tua destinazione.</li>
    <li><strong>Destinazioni in Tutta la Regione</strong> – Trasferimenti disponibili per <strong>Fethiye, Marmaris, Oludeniz, 
        Icmeler, Hisaronu</strong> e molte altre.</li>
</ul>

<h2>Prenota Ora il Tuo Taxi dall'Aeroporto di Dalaman</h2>

<p>
    Arriva all'<strong>Aeroporto di Dalaman (DLM)</strong> senza stress prenotando in anticipo il tuo 
    <strong>trasferimento in taxi privato</strong>. Che tu stia andando alle splendide spiagge di 
    <strong>Oludeniz, alla vivace città di Marmaris, alla località panoramica di Hisaronu o al rifugio 
    rilassante di Icmeler</strong>, garantiamo un trasferimento fluido e a prezzo fisso senza costi nascosti.
</p>

<ul>
    <li><strong>Prenotazione Online Immediata</strong></li>
    <li><strong>Pagamento Sicuro</strong> (Accettati Euro, GBP, Dollari USA e Lira Turca)</li>
    <li><strong>Nessun Costo Nascosto – Prezzi Trasparenti</strong></li>
</ul>

<p>
    Hai bisogno di aiuto? Contatta il nostro <strong>supporto clienti 24/7</strong> per assistenza.
    <a href="/">Prenota Ora</a> e viaggia con tranquillità.
</p>

        `,
        ru: `
        <h1>Цены на такси в аэропорту Даламан – Частные и фиксированные трансферы</h1>

<h2>Надежные и комфортные трансферы из аэропорта Даламан (DLM)</h2>

<p>
    Путешествуете в <strong>Фетхие, Мармарис, Олюдениз, Ичмелер или Хисарону</strong>?  
    APL Transfers предлагает <strong>частные трансферы по фиксированной цене</strong>  
    из <strong>аэропорта Даламан (DLM)</strong> до вашего пункта назначения.  
    Независимо от того, нужна ли вам <strong>седан, просторный минивэн на пять пассажиров,  
    микроавтобус на восемь мест или роскошный автомобиль Mercedes бизнес-класса</strong>,  
    мы обеспечим вам комфортную и беззаботную поездку.
</p>

<p>
    Наши профессиональные водители предлагают <strong>услугу встречи у выходов из зоны прилета</strong>,  
    чтобы вы могли сразу найти вашего водителя после выхода из терминала.
</p>

<h2>Варианты транспорта для трансфера из аэропорта Даламан</h2>
<ul>
    <li><strong>Седан</strong> – Идеально подходит для индивидуальных путешественников и пар.</li>
    <li><strong>Минивэн (5 пассажиров)</strong> – Отличный вариант для семей и небольших групп.</li>
    <li><strong>Микроавтобус на 8 мест</strong> – Просторное решение для больших групп с багажом.</li>
    <li><strong>Автомобили Mercedes бизнес-класса</strong> – Премиальный комфорт для деловых поездок и VIP-гостей.</li>
</ul>

<h2>Где найти вашего водителя?</h2>
<ul>
    <li><strong>Местоположение:</strong> По прибытии в <strong>аэропорт Даламан (DLM)</strong>  
        ваш водитель будет ждать вас <strong>у выходов из зоны прилета</strong>,  
        держа табличку с вашим именем для легкого опознания.</li>
    <li><strong>Без задержек:</strong> Даже если ваш рейс прибудет раньше или с опозданием,  
        наши водители отслеживают время прилета и корректируют расписание.</li>
    <li><strong>Быстрый и удобный трансфер:</strong> Вам не нужно стоять в очереди на такси  
        или договариваться о цене – ваш личный водитель отвезет вас прямо в пункт назначения.</li>
</ul>

<h2>Почему выбирают APL Transfers?</h2>
<ul>
    <li><strong>Встреча у выходов из зоны прилета</strong> – Водитель будет ждать вас с табличкой с вашим именем.</li>
    <li><strong>Фиксированные цены – Без скрытых платежей</strong> – Вы платите ровно столько, сколько указано.</li>
    <li><strong>Бесплатная отмена бронирования за 24 часа до прибытия</strong> – Гибкие условия бронирования без риска.</li>
    <li><strong>Бесплатные детские кресла в автомобилях на 8 и 9 мест</strong> – Дополнительная безопасность для семей.</li>
    <li><strong>Круглосуточная поддержка клиентов</strong> – Мы всегда готовы помочь вам.</li>
    <li><strong>Корпоративные трансферы</strong> – Надежные поездки для деловых клиентов.</li>
    <li><strong>Роскошные, чистые и ухоженные автомобили</strong> – Наслаждайтесь комфортной поездкой.</li>
    <li><strong>Популярные направления</strong> – Трансферы доступны в  
        <strong>Фетхие, Мармарис, Олюдениз, Ичмелер, Хисарону</strong> и другие города.</li>
</ul>

<h2>Забронируйте такси из аэропорта Даламан</h2>

<p>
    Избегайте поисков такси по прилету в <strong>аэропорт Даламан (DLM)</strong>.  
    Забронируйте <strong>частный трансфер</strong> заранее и наслаждайтесь спокойной поездкой.<br>  
    Независимо от того, направляетесь ли вы на <strong>живописные пляжи Олюдениз,  
    в оживленный Мармарис, в курортный город Хисарону или в уединенный Ичмелер</strong>,  
    мы обеспечим вам фиксированную цену без скрытых платежей.
</p>

<ul>
    <li><strong>Мгновенное онлайн-бронирование</strong></li>
    <li><strong>Безопасная оплата</strong> (Принимаются евро, фунты стерлингов, доллары США и турецкие лиры)</li>
    <li><strong>Без скрытых платежей – Прозрачные цены</strong></li>
</ul>

<p>
    Нужна помощь? Свяжитесь с нашей <strong>службой поддержки 24/7</strong> для комфортного трансфера.
    <a href="/">Забронировать сейчас</a> и путешествуйте без забот!
</p>

        `,
        zh: `
        <h1>达拉曼机场出租车价格 – 私人接送 & 固定价格</h1>

<h2>可靠 & 舒适的达拉曼机场 (DLM) 接送服务</h2>

<p>
    计划前往<strong>费特希耶 (Fethiye)、马尔马里斯 (Marmaris)、厄吕代尼兹 (Oludeniz)、伊克梅勒 (Icmeler) 或 希萨罗努 (Hisaronu)</strong>？
    APL Transfers 提供<strong>达拉曼机场 (DLM) 的私人固定价格机场出租车接送服务</strong>。<br>
    无论您需要<strong>轿车、可容纳五名乘客的宽敞 MPV、八座小型巴士，还是豪华奔驰商务车</strong>，我们都能为您提供顺畅无忧的接送服务。
</p>

<p>
    我们的专业司机将在<strong>到达门提供迎接服务</strong>，确保您一走出航站楼就能立即受到欢迎。
</p>

<h2>达拉曼机场接送车辆选择</h2>
<ul>
    <li><strong>轿车</strong> – 适合个人和情侣出行。</li>
    <li><strong>MPV（5 人座）</strong> – 适合家庭和小团体。</li>
    <li><strong>8 座小型巴士</strong> – 空间宽敞，适合较大的团队和行李较多的旅客。</li>
    <li><strong>奔驰商务车型</strong> – 为高端商务人士和 VIP 旅客提供尊贵舒适的乘坐体验。</li>
</ul>

<h2>接机服务 – 在哪里找到您的司机？</h2>
<ul>
    <li><strong>位置：</strong> 抵达 <strong>达拉曼机场 (DLM)</strong> 后，您的司机将在
        <strong>到达门</strong> 等候，并举着写有您的姓名的接机牌，方便您认出。</li>
    <li><strong>无延误：</strong> 即使您的航班提前或延误，我们的司机也会实时跟踪您的抵达时间并相应调整。</li>
    <li><strong>快速便捷：</strong> 无需排队等待出租车或与司机议价，您的私人司机将直接送您到达目的地。</li>
</ul>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>到达门迎接服务</strong> – 司机将在到达门举着您的姓名牌等待。</li>
    <li><strong>固定价格 – 无隐藏费用</strong> – 透明价格，无额外收费。</li>
    <li><strong>支持 24 小时前免费取消</strong> – 预订灵活，无后顾之忧。</li>
    <li><strong>8 座和 9 座私人车辆提供免费儿童座椅</strong> – 确保家庭旅客的安全。</li>
    <li><strong>24/7 客户支持</strong> – 随时提供帮助。</li>
    <li><strong>企业差旅解决方案</strong> – 提供可靠的商务接送服务。</li>
    <li><strong>豪华、干净且维护良好的车辆</strong> – 享受高品质的舒适旅行体验。</li>
    <li><strong>覆盖广泛的目的地</strong> – 接送范围包括 <strong>费特希耶 (Fethiye)、马尔马里斯 (Marmaris)、厄吕代尼兹 (Oludeniz)、伊克梅勒 (Icmeler)、希萨罗努 (Hisaronu)</strong> 等地。</li>
</ul>

<h2>立即预订达拉曼机场出租车</h2>

<p>
    抵达 <strong>达拉曼机场 (DLM)</strong> 后无需费心寻找出租车。提前预订
    <strong>私人机场接送服务</strong>，享受轻松无忧的旅程。<br>
    无论您前往<strong>厄吕代尼兹 (Oludeniz) 的绝美海滩、马尔马里斯 (Marmaris) 的繁华小镇、
    希萨罗努 (Hisaronu) 的风景度假区，还是伊克梅勒 (Icmeler) 的静谧度假村</strong>，我们都提供无隐藏费用的固定价格接送服务。
</p>

<ul>
    <li><strong>即时在线预订</strong></li>
    <li><strong>安全支付</strong>（支持欧元 (EUR)、英镑 (GBP)、美元 (USD) 和土耳其里拉 (TRY)）</li>
    <li><strong>无隐藏费用 – 透明定价</strong></li>
</ul>

<p>
    需要帮助？请联系 <strong>24/7 客户支持</strong>，确保您拥有顺畅的接送体验。
    <a href="/">立即预订</a>，享受安心之旅！
</p>

        `,
    },
    "/antalya-airport-taxi-prices": {
        en: `
        <h1>Antalya Airport Taxi Transfer Prices – Private & Fixed-Price Transfers</h1>

<h2>Reliable & Comfortable Transfers from Antalya Airport (AYT)</h2>

<p>
    Traveling to <strong>Kemer, Belek, Side, Alanya, Lara Beach, or Konyaaltı</strong>?  
    APL Transfers offers <strong>fixed-price private airport transfers</strong> from  
    <strong>Antalya Airport (AYT)</strong> to all major resorts and hotels across the region.  
    Whether you need a <strong>saloon car, a people carrier for five passengers,  
    an eight-seater minibus, or a luxury Mercedes business-class vehicle</strong>,  
    we ensure a smooth, comfortable journey.
</p>

<p>
    Our <strong>meet & greet service at the arrival gates</strong> guarantees  
    that your driver will be waiting for you as soon as you land.
</p>

<h2>Vehicle Options for Antalya Airport Transfers</h2>
<ul>
    <li><strong>Saloon Car</strong> – Ideal for solo travelers and couples.</li>
    <li><strong>People Carrier (5 Passengers)</strong> – Perfect for families and small groups.</li>
    <li><strong>8-Seater Minibus</strong> – Spacious for larger groups with luggage.</li>
    <li><strong>Business-Class Mercedes Vehicles</strong> – Luxury travel for business and VIP passengers.</li>
</ul>

<h2>Meet & Greet Service – Where to Find Your Driver</h2>
<ul>
    <li><strong>Location:</strong> Upon arrival at <strong>Antalya Airport (AYT)</strong>,  
        your driver will be waiting <strong>by the arrival gates</strong>,  
        holding a passenger name board for easy recognition.</li>
    <li><strong>No delays:</strong> Even if your flight arrives early or is delayed,  
        our drivers track your arrival and adjust accordingly.</li>
    <li><strong>Seamless Transfers:</strong> Avoid the hassle of last-minute taxi negotiations—  
        your private driver will be ready to take you to your destination.</li>
</ul>

<h2>Top Destinations for Antalya Airport Transfers</h2>

<p>We provide private transfers from <strong>Antalya Airport (AYT)</strong> to:</p>
<ul>
    <li><strong>Kemer</strong> – A scenic coastal resort known for its beaches, marina, and luxury hotels.</li>
    <li><strong>Belek</strong> – Famous for its world-class golf courses and 5-star resorts.</li>
    <li><strong>Side</strong> – A historic seaside town with ancient ruins and golden beaches.</li>
    <li><strong>Alanya</strong> – A lively city with a vibrant nightlife, sandy beaches, and historical sites.</li>
    <li><strong>Lara Beach</strong> – Home to some of the best all-inclusive resorts in Antalya.</li>
    <li><strong>Konyaaltı</strong> – A beautiful beach district with crystal-clear waters and scenic mountains.</li>
</ul>

<p>
    Whether you're heading to a <strong>luxury resort, boutique hotel, or private villa</strong>,  
    APL Transfers provides a stress-free, fixed-price transfer service.
</p>

<h2>Why Choose APL Transfers?</h2>
<ul>
    <li><strong>Meet & Greet at the Arrival Gates</strong> – Your driver will be waiting for you with a name board.</li>
    <li><strong>Fixed Prices – No Hidden Costs</strong> – What you see is what you pay.</li>
    <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Book with confidence.</li>
    <li><strong>Free Child Seats for 8 & 9-Seater Private Vehicles</strong> – Safety for families at no extra cost.</li>
    <li><strong>24/7 Customer Support</strong> – Always available to assist with your journey.</li>
    <li><strong>Corporate Travel Solutions</strong> – Reliable airport transfers for business travelers.</li>
    <li><strong>Luxury, Clean & Well-Maintained Vehicles</strong> – Enjoy a smooth and comfortable ride.</li>
</ul>

<h2>Book Your Antalya Airport Taxi Now</h2>

<p>
    Make your arrival at <strong>Antalya Airport (AYT)</strong> stress-free by pre-booking  
    your <strong>private taxi transfer</strong>. Whether you're traveling to the  
    <strong>beach resorts of Lara and Konyaaltı, the golf courses of Belek,  
    or the historic sites of Side</strong>, our fixed-price transfers  
    ensure a smooth and affordable journey.
</p>

<ul>
    <li><strong>Instant Online Booking</strong></li>
    <li><strong>Secure Payment</strong> (Euro, GBP, US Dollar & Turkish Lira Accepted)</li>
    <li><strong>No Hidden Fees – Transparent Pricing</strong></li>
</ul>

<p>
    Need help? Contact our <strong>24/7 customer support</strong> for assistance.
    <a href="/">Book Now</a> and travel with ease.
</p>

        `,
        tr: `
        <h1>Antalya Havalimanı Taksi Transfer Fiyatları – Özel ve Sabit Fiyatlı Transferler</h1>

<h2>Antalya Havalimanı'ndan Güvenilir ve Konforlu Transferler (AYT)</h2>

<p>
    <strong>Kemer, Belek, Side, Alanya, Lara Plajı veya Konyaaltı</strong>’na mı seyahat ediyorsunuz?  
    APL Transfers, <strong>Antalya Havalimanı (AYT)</strong>’ndan tüm büyük tatil köylerine ve otellere  
    <strong>sabit fiyatlı özel havalimanı transferleri</strong> sunar.  
    İhtiyacınız ister <strong>sedan bir araç, beş yolcu kapasiteli geniş bir araç,  
    sekiz kişilik bir minibüs veya lüks bir Mercedes iş sınıfı araç</strong> olsun,  
    konforlu ve sorunsuz bir yolculuk sağlıyoruz.
</p>

<p>
    <strong>Varış kapılarında karşılama hizmetimiz</strong>, şoförünüzün uçaktan indiğiniz anda  
    sizi bekliyor olmasını garanti eder.
</p>

<h2>Antalya Havalimanı Transfer Araç Seçenekleri</h2>
<ul>
    <li><strong>Sedan Araç</strong> – Bireysel yolcular ve çiftler için ideal.</li>
    <li><strong>Minivan (5 Yolcu)</strong> – Aileler ve küçük gruplar için mükemmel.</li>
    <li><strong>8 Kişilik Minibüs</strong> – Daha büyük gruplar ve fazla bagaj için geniş ve rahat.</li>
    <li><strong>Mercedes İş Sınıfı Araçlar</strong> – VIP ve iş seyahatleri için üst düzey konfor.</li>
</ul>

<h2>Karşılama Hizmeti – Sürücünüzü Nerede Bulabilirsiniz?</h2>
<ul>
    <li><strong>Konum:</strong> <strong>Antalya Havalimanı (AYT)</strong>’na vardığınızda,  
        şoförünüz sizi <strong>varış kapılarında</strong> isminizin yazılı olduğu bir tabela ile bekliyor olacak.</li>
    <li><strong>Gecikme Yok:</strong> Uçağınız erken inse veya rötar yapsa bile,  
        şoförlerimiz varış saatlerinizi takip ederek programlarını buna göre ayarlar.</li>
    <li><strong>Hızlı ve Kolay Transfer:</strong> Taksi beklemenize veya son dakika pazarlıkları yapmanıza gerek yok –  
        özel şoförünüz sizi doğrudan gitmek istediğiniz yere götürecektir.</li>
</ul>

<h2>Antalya Havalimanı Transferlerinde Popüler Destinasyonlar</h2>

<p>Antalya Havalimanı’ndan (AYT) özel transferler sağlıyoruz:</p>
<ul>
    <li><strong>Kemer</strong> – Muhteşem plajları, marinası ve lüks otelleriyle ünlü bir tatil beldesi.</li>
    <li><strong>Belek</strong> – Dünya standartlarında golf sahaları ve 5 yıldızlı tatil köyleri ile tanınır.</li>
    <li><strong>Side</strong> – Tarihi kalıntıları ve altın kumsallarıyla ünlü bir sahil kasabası.</li>
    <li><strong>Alanya</strong> – Canlı gece hayatı, geniş kumsalları ve tarihi mekanlarıyla popüler.</li>
    <li><strong>Lara Plajı</strong> – Antalya’nın en iyi her şey dahil tatil köylerine ev sahipliği yapar.</li>
    <li><strong>Konyaaltı</strong> – Kristal berraklığındaki denizi ve muhteşem dağ manzaraları ile ünlü bir sahil bölgesi.</li>
</ul>

<p>
    İster bir <strong>lüks tatil köyüne, butik bir otele veya özel bir villaya</strong> gidiyor olun,  
    APL Transfers size konforlu ve sabit fiyatlı bir transfer hizmeti sunar.
</p>

<h2>Neden APL Transfers’i Seçmelisiniz?</h2>
<ul>
    <li><strong>Varış Kapılarında Karşılama</strong> – Şoförünüz isminizin yazılı olduğu bir tabela ile bekleyecek.</li>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Ne görüyorsanız onu ödersiniz.</li>
    <li><strong>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal</strong> – Esnek ve risksiz rezervasyon.</li>
    <li><strong>8 ve 9 Kişilik Özel Araçlar İçin Ücretsiz Çocuk Koltuğu</strong> – Aileler için ekstra güvenlik, ek ücret olmadan.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – Seyahatinizde her zaman yardıma hazırız.</li>
    <li><strong>Kurumsal Seyahat Çözümleri</strong> – İş seyahatleri için güvenilir transfer hizmetleri.</li>
    <li><strong>Temiz, Konforlu ve Bakımlı Araçlar</strong> – Varış noktanıza konfor içinde ulaşın.</li>
</ul>

<h2>Antalya Havalimanı Taksi Rezervasyonu Yapın</h2>

<p>
    <strong>Antalya Havalimanı (AYT)</strong>’na vardığınızda taksi arama stresinden kaçının.  
    <strong>Özel havalimanı taksi transferinizi</strong> önceden rezerve edin ve konforlu bir yolculuk yapın.  
    İster <strong>Lara ve Konyaaltı’nın muhteşem sahillerine, Belek’in ünlü golf sahalarına  
    veya Side’nin tarihi güzelliklerine</strong> gidiyor olun, sabit fiyatlarımız  
    size ekonomik ve sorunsuz bir transfer sağlar.
</p>

<ul>
    <li><strong>Anında Online Rezervasyon</strong></li>
    <li><strong>Güvenli Ödeme</strong> (Euro, GBP, ABD Doları & Türk Lirası kabul edilir)</li>
    <li><strong>Gizli Ücret Yok – Şeffaf Fiyatlandırma</strong></li>
</ul>

<p>
    Yardıma mı ihtiyacınız var? <strong>7/24 müşteri destek</strong> ekibimizle iletişime geçin.
    <a href="/">Hemen Rezervasyon Yapın</a> ve rahat bir yolculuk yapın.
</p>

        `,
        ar: `
        <h1>أسعار سيارات الأجرة في مطار أنطاليا – خدمات نقل خاصة وثابتة</h1>

<h2>خدمات نقل موثوقة ومريحة من مطار أنطاليا (AYT)</h2>

<p>
    هل تسافر إلى <strong>كيمر، بيليك، سايد، ألانيا، شاطئ لارا أو كونيالتي</strong>؟  
    تقدم APL Transfers <strong>خدمات نقل خاصة بأسعار ثابتة</strong>  
    من <strong>مطار أنطاليا (AYT)</strong> إلى جميع المنتجعات والفنادق الرئيسية في المنطقة.  
    سواء كنت بحاجة إلى <strong>سيارة سيدان، حافلة صغيرة تتسع لخمسة ركاب،  
    حافلة صغيرة بثمانية مقاعد، أو سيارة مرسيدس فاخرة للأعمال</strong>،  
    نضمن لك رحلة سلسة ومريحة.
</p>

<p>
    <strong>خدمة الاستقبال عند بوابات الوصول</strong> تضمن لك أن يكون سائقك  
    في انتظارك فور وصولك.
</p>

<h2>خيارات المركبات لخدمة النقل من مطار أنطاليا</h2>
<ul>
    <li><strong>سيارة سيدان</strong> – مثالية للمسافرين الأفراد والأزواج.</li>
    <li><strong>حافلة صغيرة (5 ركاب)</strong> – رائعة للعائلات والمجموعات الصغيرة.</li>
    <li><strong>حافلة صغيرة بـ 8 مقاعد</strong> – فسيحة ومناسبة للمجموعات الكبيرة مع الأمتعة.</li>
    <li><strong>سيارات مرسيدس للأعمال</strong> – توفر الراحة والفخامة للمسافرين من رجال الأعمال وVIP.</li>
</ul>

<h2>خدمة الاستقبال – أين تجد سائقك؟</h2>
<ul>
    <li><strong>الموقع:</strong> عند وصولك إلى <strong>مطار أنطاليا (AYT)</strong>،  
        سيكون سائقك بانتظارك <strong>عند بوابات الوصول</strong>  
        حاملًا لوحة تحمل اسمك لسهولة التعرف عليه.</li>
    <li><strong>بدون تأخير:</strong> حتى إذا كان وصول رحلتك مبكرًا أو متأخرًا،  
        فإن سائقينا يتابعون وقت وصولك ويعدّلون جدولهم وفقًا لذلك.</li>
    <li><strong>نقل سلس:</strong> لا داعي للانتظار لسيارات الأجرة أو التفاوض في اللحظة الأخيرة –  
        سيكون سائقك الخاص جاهزًا لنقلك مباشرة إلى وجهتك.</li>
</ul>

<h2>أهم الوجهات لخدمة النقل من مطار أنطاليا</h2>

<p>نحن نقدم خدمات نقل خاصة من <strong>مطار أنطاليا (AYT)</strong> إلى:</p>
<ul>
    <li><strong>كيمر</strong> – منتجع ساحلي خلاب معروف بشواطئه ومينائه وفنادقه الفاخرة.</li>
    <li><strong>بيليك</strong> – مشهورة بملاعب الجولف ذات المستوى العالمي ومنتجعاتها الفاخرة ذات الخمس نجوم.</li>
    <li><strong>سايد</strong> – مدينة ساحلية تاريخية تحتوي على آثار قديمة وشواطئ ذهبية.</li>
    <li><strong>ألانيا</strong> – مدينة نابضة بالحياة تضم حياة ليلية رائعة، شواطئ رملية، ومواقع تاريخية.</li>
    <li><strong>شاطئ لارا</strong> – موطن لبعض أفضل المنتجعات الشاملة في أنطاليا.</li>
    <li><strong>كونيالتي</strong> – منطقة شاطئية رائعة بمياهها الصافية وجبالها الخلابة.</li>
</ul>

<p>
    سواء كنت متجهًا إلى <strong>منتجع فاخر، فندق بوتيك أو فيلا خاصة</strong>،  
    توفر APL Transfers خدمة نقل خالية من الإجهاد وبأسعار ثابتة.
</p>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>الاستقبال عند بوابات الوصول</strong> – سيكون السائق بانتظارك بلوحة تحمل اسمك.</li>
    <li><strong>أسعار ثابتة – بدون رسوم خفية</strong> – لا يوجد أي تكاليف إضافية.</li>
    <li><strong>إمكانية الإلغاء المجاني حتى 24 ساعة قبل الوصول</strong> – احجز بثقة وراحة بال.</li>
    <li><strong>مقاعد أطفال مجانية للمركبات الخاصة بـ 8 و 9 مقاعد</strong> – لضمان سلامة العائلات.</li>
    <li><strong>دعم العملاء 24/7</strong> – متاح دائمًا لمساعدتك أثناء رحلتك.</li>
    <li><strong>حلول سفر الشركات</strong> – خدمات نقل موثوقة للمسافرين من رجال الأعمال.</li>
    <li><strong>مركبات فاخرة ونظيفة ومُصانة جيدًا</strong> – استمتع برحلة مريحة إلى وجهتك.</li>
</ul>

<h2>احجز سيارة الأجرة من مطار أنطاليا الآن</h2>

<p>
    تجنب عناء البحث عن سيارة أجرة عند وصولك إلى <strong>مطار أنطاليا (AYT)</strong>.  
    احجز <strong>خدمة النقل الخاصة</strong> مسبقًا وتمتع برحلة مريحة وخالية من المتاعب.<br>  
    سواء كنت متجهًا إلى <strong>المنتجعات الشاطئية في لارا وكونيالتي، ملاعب الجولف في بيليك،  
    أو المواقع التاريخية في سايد</strong>، فإننا نوفر لك خدمة نقل  
    بأسعار ثابتة وبدون أي رسوم خفية.
</p>

<ul>
    <li><strong>حجز فوري عبر الإنترنت</strong></li>
    <li><strong>دفع آمن</strong> (نقبل اليورو، الجنيه الإسترليني، الدولار الأمريكي والليرة التركية)</li>
    <li><strong>بدون رسوم خفية – تسعير شفاف</strong></li>
</ul>

<p>
    هل تحتاج إلى مساعدة؟ تواصل مع <strong>خدمة العملاء المتوفرة 24/7</strong> لضمان تجربة نقل سلسة.
    <a href="/">احجز الآن</a> وسافر براحة وطمأنينة!
</p>

        `,
        es: `
        <h1>Precios de Taxi en el Aeropuerto de Antalya – Traslados Privados y a Precio Fijo</h1>

<h2>Traslados Confiables y Cómodos desde el Aeropuerto de Antalya (AYT)</h2>

<p>
    ¿Viajas a <strong>Kemer, Belek, Side, Alanya, Playa de Lara o Konyaaltı</strong>?  
    APL Transfers ofrece <strong>traslados privados con tarifa fija</strong>  
    desde el <strong>Aeropuerto de Antalya (AYT)</strong> a todos los principales resorts y hoteles de la región.  
    Ya sea que necesites un <strong>sedán, un monovolumen espacioso para cinco pasajeros,  
    un minibús de ocho plazas o un lujoso Mercedes de clase ejecutiva</strong>,  
    garantizamos un traslado cómodo y sin complicaciones.
</p>

<p>
    Nuestro <strong>servicio de bienvenida en las puertas de llegada</strong> garantiza  
    que tu conductor estará esperándote tan pronto como aterrices.
</p>

<h2>Opciones de Vehículos para Traslados desde el Aeropuerto de Antalya</h2>
<ul>
    <li><strong>Sedán</strong> – Ideal para viajeros solos y parejas.</li>
    <li><strong>Monovolumen (5 Pasajeros)</strong> – Perfecto para familias y grupos pequeños.</li>
    <li><strong>Minibús de 8 Plazas</strong> – Espacioso y adecuado para grupos grandes con equipaje.</li>
    <li><strong>Vehículos Mercedes de Clase Ejecutiva</strong> – Viajes de lujo para ejecutivos y VIPs.</li>
</ul>

<h2>Servicio de Bienvenida – ¿Dónde Encontrar a tu Conductor?</h2>
<ul>
    <li><strong>Ubicación:</strong> Al llegar al <strong>Aeropuerto de Antalya (AYT)</strong>,  
        tu conductor te estará esperando <strong>en las puertas de llegada</strong>,  
        sosteniendo un cartel con tu nombre para que lo reconozcas fácilmente.</li>
    <li><strong>Sin retrasos:</strong> Incluso si tu vuelo llega antes o se retrasa,  
        nuestros conductores monitorean la hora de llegada y ajustan el horario según sea necesario.</li>
    <li><strong>Traslados sin Esperas:</strong> No es necesario hacer fila para un taxi  
        ni negociar precios de última hora – tu conductor privado estará listo  
        para llevarte directamente a tu destino.</li>
</ul>

<h2>Destinos Populares para Traslados desde el Aeropuerto de Antalya</h2>

<p>Ofrecemos traslados privados desde el <strong>Aeropuerto de Antalya (AYT)</strong> a:</p>
<ul>
    <li><strong>Kemer</strong> – Un resort costero pintoresco, conocido por sus playas, marina y hoteles de lujo.</li>
    <li><strong>Belek</strong> – Famoso por sus campos de golf de clase mundial y resorts de 5 estrellas.</li>
    <li><strong>Side</strong> – Un histórico pueblo costero con ruinas antiguas y playas doradas.</li>
    <li><strong>Alanya</strong> – Una ciudad vibrante con una animada vida nocturna, playas de arena y sitios históricos.</li>
    <li><strong>Playa de Lara</strong> – Hogar de algunos de los mejores resorts con todo incluido en Antalya.</li>
    <li><strong>Konyaaltı</strong> – Un hermoso distrito de playa con aguas cristalinas y montañas escénicas.</li>
</ul>

<p>
    Ya sea que te dirijas a un <strong>resort de lujo, un hotel boutique o una villa privada</strong>,  
    APL Transfers ofrece un servicio de traslado sin estrés y con tarifa fija.
</p>

<h2>¿Por Qué Elegir APL Transfers?</h2>
<ul>
    <li><strong>Servicio de Bienvenida en las Puertas de Llegada</strong> – Tu conductor te estará esperando con un cartel con tu nombre.</li>
    <li><strong>Precios Fijos – Sin Costos Ocultos</strong> – Lo que ves es lo que pagas.</li>
    <li><strong>Cancelación Gratuita Hasta 24 Horas Antes de la Llegada</strong> – Reserva con total confianza.</li>
    <li><strong>Asientos para Niños Gratis en Vehículos de 8 y 9 Plazas</strong> – Seguridad para familias sin costo adicional.</li>
    <li><strong>Atención al Cliente 24/7</strong> – Siempre disponible para ayudarte en tu viaje.</li>
    <li><strong>Soluciones de Viaje para Empresas</strong> – Traslados confiables para viajeros de negocios.</li>
    <li><strong>Vehículos de Lujo, Limpios y Bien Mantenidos</strong> – Disfruta de un viaje cómodo a tu destino.</li>
</ul>

<h2>Reserva Ahora tu Taxi en el Aeropuerto de Antalya</h2>

<p>
    Evita el estrés de buscar un taxi al llegar al <strong>Aeropuerto de Antalya (AYT)</strong>.  
    Reserva con anticipación tu <strong>traslado privado</strong> y disfruta de un viaje sin preocupaciones.<br>  
    Ya sea que te dirijas a los <strong>resorts de playa de Lara y Konyaaltı, los campos de golf de Belek,  
    o los sitios históricos de Side</strong>, nuestros traslados con tarifa fija  
    garantizan un servicio fluido y asequible.
</p>

<ul>
    <li><strong>Reserva Online al Instante</strong></li>
    <li><strong>Pago Seguro</strong> (Se aceptan Euros, GBP, Dólares Estadounidenses y Liras Turcas)</li>
    <li><strong>Sin Costos Ocultos – Tarifas Transparentes</strong></li>
</ul>

<p>
    ¿Necesitas ayuda? Contacta con nuestro <strong>soporte al cliente 24/7</strong> para una experiencia de traslado sin inconvenientes.
    <a href="/">Reserva Ahora</a> y viaja con tranquilidad.
</p>

        `,
        it: `
        <h1>Prezzi Taxi Aeroporto di Antalya – Trasferimenti Privati e a Prezzo Fisso</h1>

<h2>Trasferimenti Affidabili e Confortevoli dall'Aeroporto di Antalya (AYT)</h2>

<p>
    Viaggi verso <strong>Kemer, Belek, Side, Alanya, Spiaggia di Lara o Konyaaltı</strong>?  
    APL Transfers offre <strong>trasferimenti privati con tariffa fissa</strong>  
    dall'<strong>Aeroporto di Antalya (AYT)</strong> a tutti i principali resort e hotel della regione.  
    Che tu abbia bisogno di una <strong>berlina, un monovolume spazioso per cinque passeggeri,  
    un minibus a otto posti o un lussuoso veicolo Mercedes business-class</strong>,  
    garantiamo un viaggio confortevole e senza stress.
</p>

<p>
    Il nostro <strong>servizio di accoglienza alle porte di arrivo</strong> garantisce  
    che il tuo autista ti stia aspettando non appena atterri.
</p>

<h2>Opzioni di Veicoli per i Trasferimenti dall'Aeroporto di Antalya</h2>
<ul>
    <li><strong>Berlina</strong> – Ideale per viaggiatori singoli e coppie.</li>
    <li><strong>Monovolume (5 Passeggeri)</strong> – Perfetto per famiglie e piccoli gruppi.</li>
    <li><strong>Minibus a 8 Posti</strong> – Spazioso e ideale per gruppi numerosi con bagagli.</li>
    <li><strong>Veicoli Mercedes Business-Class</strong> – Viaggi di lusso per dirigenti e VIP.</li>
</ul>

<h2>Servizio di Accoglienza – Dove Trovare il Tuo Autista?</h2>
<ul>
    <li><strong>Posizione:</strong> All'arrivo all'<strong>Aeroporto di Antalya (AYT)</strong>,  
        il tuo autista ti aspetterà <strong>alle porte di arrivo</strong>,  
        tenendo un cartello con il tuo nome per un facile riconoscimento.</li>
    <li><strong>Nessun ritardo:</strong> Anche se il tuo volo arriva in anticipo o è in ritardo,  
        i nostri autisti monitorano l'orario di arrivo e si adattano di conseguenza.</li>
    <li><strong>Trasferimenti senza Attese:</strong> Evita lo stress delle negoziazioni dell'ultimo minuto per un taxi –  
        il tuo autista privato sarà pronto a portarti direttamente a destinazione.</li>
</ul>

<h2>Destinazioni Popolari per i Trasferimenti dall'Aeroporto di Antalya</h2>

<p>Forniamo trasferimenti privati dall'<strong>Aeroporto di Antalya (AYT)</strong> a:</p>
<ul>
    <li><strong>Kemer</strong> – Un suggestivo resort costiero noto per le sue spiagge, il porto turistico e gli hotel di lusso.</li>
    <li><strong>Belek</strong> – Famoso per i suoi campi da golf di livello mondiale e resort a 5 stelle.</li>
    <li><strong>Side</strong> – Una storica città costiera con rovine antiche e spiagge dorate.</li>
    <li><strong>Alanya</strong> – Una città vivace con una vita notturna animata, spiagge sabbiose e siti storici.</li>
    <li><strong>Spiaggia di Lara</strong> – Sede di alcuni dei migliori resort all-inclusive di Antalya.</li>
    <li><strong>Konyaaltı</strong> – Una splendida zona balneare con acque cristalline e montagne panoramiche.</li>
</ul>

<p>
    Che tu stia andando in un <strong>resort di lusso, un hotel boutique o una villa privata</strong>,  
    APL Transfers offre un servizio di trasferimento senza stress con prezzo fisso.
</p>

<h2>Perché Scegliere APL Transfers?</h2>
<ul>
    <li><strong>Accoglienza alle Porte di Arrivo</strong> – Il tuo autista ti attenderà con un cartello con il tuo nome.</li>
    <li><strong>Prezzi Fissi – Nessun Costo Nascosto</strong> – Paghi solo quello che vedi.</li>
    <li><strong>Cancellazione Gratuita fino a 24 Ore Prima dell'Arrivo</strong> – Prenotazione flessibile e sicura.</li>
    <li><strong>Seggiolini per Bambini Gratuiti per Veicoli Privati a 8 e 9 Posti</strong> – Sicurezza per le famiglie senza costi aggiuntivi.</li>
    <li><strong>Supporto Clienti 24/7</strong> – Sempre disponibile per assisterti nel tuo viaggio.</li>
    <li><strong>Soluzioni per Viaggi Aziendali</strong> – Trasferimenti affidabili per professionisti.</li>
    <li><strong>Veicoli di Lusso, Puliti e Ben Manutenuti</strong> – Viaggia in totale comfort fino alla tua destinazione.</li>
</ul>

<h2>Prenota Ora il Tuo Taxi dall'Aeroporto di Antalya</h2>

<p>
    Evita lo stress di cercare un taxi all'arrivo all'<strong>Aeroporto di Antalya (AYT)</strong>.  
    Prenota in anticipo il tuo <strong>trasferimento privato</strong> e goditi un viaggio senza pensieri.<br>  
    Che tu stia andando nei <strong>resort balneari di Lara e Konyaaltı, nei campi da golf di Belek  
    o nei siti storici di Side</strong>, i nostri trasferimenti a prezzo fisso  
    garantiscono un viaggio fluido e conveniente.
</p>

<ul>
    <li><strong>Prenotazione Online Immediata</strong></li>
    <li><strong>Pagamento Sicuro</strong> (Accettati Euro, GBP, Dollari USA e Lira Turca)</li>
    <li><strong>Nessun Costo Nascosto – Prezzi Trasparenti</strong></li>
</ul>

<p>
    Hai bisogno di aiuto? Contatta il nostro <strong>supporto clienti 24/7</strong> per assistenza.
    <a href="/">Prenota Ora</a> e viaggia con tranquillità.
</p>

        `,
        ru: `
        <h1>Цены на такси в аэропорту Антальи – Частные и фиксированные трансферы</h1>

<h2>Надежные и комфортные трансферы из аэропорта Антальи (AYT)</h2>

<p>
    Путешествуете в <strong>Кемер, Белек, Сиде, Аланья, пляж Лара или Коньяалты</strong>?  
    APL Transfers предлагает <strong>частные трансферы по фиксированной цене</strong>  
    из <strong>аэропорта Антальи (AYT)</strong> в крупнейшие курорты и отели региона.  
    Независимо от того, нужен ли вам <strong>седан, просторный минивэн на пять пассажиров,  
    микроавтобус на восемь мест или роскошный автомобиль Mercedes бизнес-класса</strong>,  
    мы обеспечим вам комфортную и беззаботную поездку.
</p>

<p>
    <strong>Услуга встречи у выходов из зоны прилета</strong> гарантирует,  
    что ваш водитель будет ожидать вас сразу после посадки.
</p>

<h2>Варианты транспорта для трансфера из аэропорта Антальи</h2>
<ul>
    <li><strong>Седан</strong> – Идеально для индивидуальных путешественников и пар.</li>
    <li><strong>Минивэн (5 пассажиров)</strong> – Отличный вариант для семей и небольших групп.</li>
    <li><strong>Микроавтобус на 8 мест</strong> – Просторное решение для больших групп с багажом.</li>
    <li><strong>Автомобили Mercedes бизнес-класса</strong> – Премиальный комфорт для деловых поездок и VIP-гостей.</li>
</ul>

<h2>Где найти вашего водителя?</h2>
<ul>
    <li><strong>Местоположение:</strong> По прибытии в <strong>аэропорт Антальи (AYT)</strong>  
        ваш водитель будет ждать вас <strong>у выходов из зоны прилета</strong>,  
        держа табличку с вашим именем для удобного опознания.</li>
    <li><strong>Без задержек:</strong> Даже если ваш рейс прибывает раньше или с опозданием,  
        наши водители отслеживают время прилета и корректируют расписание.</li>
    <li><strong>Быстрый и удобный трансфер:</strong> Вам не нужно стоять в очереди на такси  
        или договариваться о цене – ваш личный водитель отвезет вас прямо в пункт назначения.</li>
</ul>

<h2>Популярные направления для трансфера из аэропорта Антальи</h2>

<p>Мы предоставляем частные трансферы из <strong>аэропорта Антальи (AYT)</strong> в:</p>
<ul>
    <li><strong>Кемер</strong> – Живописный курорт на побережье, известный своими пляжами, яхтенной гаванью и роскошными отелями.</li>
    <li><strong>Белек</strong> – Знаменитый своими полями для гольфа мирового уровня и курортами 5 звезд.</li>
    <li><strong>Сиде</strong> – Исторический приморский город с древними руинами и золотыми пляжами.</li>
    <li><strong>Аланья</strong> – Оживленный город с активной ночной жизнью, песчаными пляжами и историческими достопримечательностями.</li>
    <li><strong>Пляж Лара</strong> – Место расположения лучших отелей "все включено" в Анталье.</li>
    <li><strong>Коньяалты</strong> – Живописный пляжный район с кристально чистой водой и величественными горами.</li>
</ul>

<p>
    Независимо от того, направляетесь ли вы в <strong>роскошный курорт, бутик-отель или частную виллу</strong>,  
    APL Transfers предлагает удобный трансфер по фиксированной цене.
</p>

<h2>Почему выбирают APL Transfers?</h2>
<ul>
    <li><strong>Встреча у выходов из зоны прилета</strong> – Водитель будет ждать вас с табличкой с вашим именем.</li>
    <li><strong>Фиксированные цены – Без скрытых платежей</strong> – Вы платите ровно столько, сколько указано.</li>
    <li><strong>Бесплатная отмена бронирования за 24 часа до прибытия</strong> – Гибкие условия бронирования без риска.</li>
    <li><strong>Бесплатные детские кресла в автомобилях на 8 и 9 мест</strong> – Дополнительная безопасность для семей.</li>
    <li><strong>Круглосуточная поддержка клиентов</strong> – Мы всегда готовы помочь вам.</li>
    <li><strong>Корпоративные трансферы</strong> – Надежные поездки для деловых клиентов.</li>
    <li><strong>Роскошные, чистые и ухоженные автомобили</strong> – Наслаждайтесь комфортной поездкой.</li>
</ul>

<h2>Забронируйте такси из аэропорта Антальи</h2>

<p>
    Избегайте поисков такси по прилету в <strong>аэропорт Антальи (AYT)</strong>.  
    Забронируйте <strong>частный трансфер</strong> заранее и наслаждайтесь спокойной поездкой.<br>  
    Независимо от того, направляетесь ли вы на <strong>побережье Лара и Коньяалты,  
    на гольф-поля Белека или к историческим достопримечательностям Сиде</strong>,  
    наши трансферы по фиксированной цене обеспечат вам комфорт и доступность.
</p>

<ul>
    <li><strong>Мгновенное онлайн-бронирование</strong></li>
    <li><strong>Безопасная оплата</strong> (Принимаются евро, фунты стерлингов, доллары США и турецкие лиры)</li>
    <li><strong>Без скрытых платежей – Прозрачные цены</strong></li>
</ul>

<p>
    Нужна помощь? Свяжитесь с нашей <strong>службой поддержки 24/7</strong> для комфортного трансфера.
    <a href="/">Забронировать сейчас</a> и путешествуйте без забот!
</p>

        `,
        zh: `
        <h1>安塔利亚机场出租车价格 – 私人接送 & 固定价格</h1>

<h2>可靠 & 舒适的安塔利亚机场 (AYT) 接送服务</h2>

<p>
    计划前往 <strong>凯梅尔 (Kemer)、贝莱克 (Belek)、西戴 (Side)、阿兰亚 (Alanya)、拉腊海滩 (Lara Beach) 或 孔亚尔特 (Konyaaltı)</strong>？  
    APL Transfers 提供 <strong>安塔利亚机场 (AYT) 的私人固定价格机场出租车接送服务</strong>。<br>
    无论您需要 <strong>轿车、可容纳五名乘客的宽敞 MPV、八座小型巴士，还是豪华奔驰商务车</strong>，我们都能为您提供顺畅无忧的接送服务。
</p>

<p>
    我们的 <strong>到达门迎接服务</strong> 确保您的司机将在您降落后立即等候。
</p>

<h2>安塔利亚机场接送车辆选择</h2>
<ul>
    <li><strong>轿车</strong> – 适合个人和情侣出行。</li>
    <li><strong>MPV（5 人座）</strong> – 适合家庭和小团体。</li>
    <li><strong>8 座小型巴士</strong> – 空间宽敞，适合较大的团队和行李较多的旅客。</li>
    <li><strong>奔驰商务车型</strong> – 为高端商务人士和 VIP 旅客提供尊贵舒适的乘坐体验。</li>
</ul>

<h2>接机服务 – 在哪里找到您的司机？</h2>
<ul>
    <li><strong>位置：</strong> 抵达 <strong>安塔利亚机场 (AYT)</strong> 后，您的司机将在
        <strong>到达门</strong> 等候，并举着写有您的姓名的接机牌，方便您认出。</li>
    <li><strong>无延误：</strong> 即使您的航班提前或延误，我们的司机也会实时跟踪您的抵达时间并相应调整。</li>
    <li><strong>快速便捷：</strong> 无需排队等待出租车或与司机议价，您的私人司机将直接送您到达目的地。</li>
</ul>

<h2>安塔利亚机场接送热门目的地</h2>

<p>我们提供从 <strong>安塔利亚机场 (AYT)</strong> 出发的私人接送服务：</p>
<ul>
    <li><strong>凯梅尔 (Kemer)</strong> – 以海滩、码头和豪华酒店闻名的风景胜地。</li>
    <li><strong>贝莱克 (Belek)</strong> – 以世界级高尔夫球场和五星级度假村而闻名。</li>
    <li><strong>西戴 (Side)</strong> – 拥有古代遗址和金色沙滩的历史悠久的海滨小镇。</li>
    <li><strong>阿兰亚 (Alanya)</strong> – 拥有热闹的夜生活、细腻沙滩和历史景点的活力城市。</li>
    <li><strong>拉腊海滩 (Lara Beach)</strong> – 安塔利亚最好的全包式度假胜地之一。</li>
    <li><strong>孔亚尔特 (Konyaaltı)</strong> – 拥有清澈海水和壮丽山景的美丽海滩区。</li>
</ul>

<p>
    无论您前往 <strong>豪华度假村、精品酒店或私人别墅</strong>，  
    APL Transfers 都能为您提供无忧的固定价格接送服务。
</p>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>到达门迎接服务</strong> – 司机将在到达门举牌等候，方便识别。</li>
    <li><strong>固定价格 – 无隐藏费用</strong> – 透明定价，无额外收费。</li>
    <li><strong>支持 24 小时前免费取消</strong> – 预订灵活，无后顾之忧。</li>
    <li><strong>8 座和 9 座私人车辆提供免费儿童座椅</strong> – 确保家庭旅客的安全。</li>
    <li><strong>24/7 客户支持</strong> – 随时提供帮助。</li>
    <li><strong>企业差旅解决方案</strong> – 提供可靠的商务接送服务。</li>
    <li><strong>豪华、干净且维护良好的车辆</strong> – 享受高品质的舒适旅行体验。</li>
</ul>

<h2>立即预订安塔利亚机场出租车</h2>

<p>
    抵达 <strong>安塔利亚机场 (AYT)</strong> 后无需费心寻找出租车。提前预订
    <strong>私人机场接送服务</strong>，享受轻松无忧的旅程。<br>
    无论您前往 <strong>拉腊和孔亚尔特的海滩度假胜地、贝莱克的高尔夫球场  
    或西戴的历史遗址</strong>，我们的固定价格接送服务可确保顺畅和实惠的出行体验。
</p>

<ul>
    <li><strong>即时在线预订</strong></li>
    <li><strong>安全支付</strong>（支持欧元 (EUR)、英镑 (GBP)、美元 (USD) 和土耳其里拉 (TRY)）</li>
    <li><strong>无隐藏费用 – 透明定价</strong></li>
</ul>

<p>
    需要帮助？请联系 <strong>24/7 客户支持</strong>，确保您拥有顺畅的接送体验。
    <a href="/">立即预订</a>，享受安心之旅！
</p>

        `,
    },
    "/bodrum-milas-airport-taxi-prices": {
        en: `
        <h1>Bodrum Milas Airport Taxi Transfer Prices – Private & Fixed-Price Transfers</h1>

<h2>Reliable & Comfortable Transfers from Bodrum Milas Airport (BJV)</h2>

<p>
    Planning a trip to <strong>Bodrum, Gumbet, Torba, Bitez, Yalikavak, or Turgutreis</strong>?  
    APL Transfers offers <strong>fixed-price private airport taxi transfers</strong>  
    from <strong>Bodrum Milas Airport (BJV)</strong> to all major resorts and towns in the region.  
    Whether you need a <strong>saloon car, a people carrier for five passengers,  
    an eight-seater minibus, or a luxury Mercedes business-class vehicle</strong>,  
    we ensure a stress-free, comfortable journey.
</p>

<p>
    Our <strong>meet & greet service at the arrival gates</strong> means your driver  
    will be ready to welcome you as soon as you land.
</p>

<h2>Vehicle Options for Bodrum Milas Airport Transfers</h2>
<ul>
    <li><strong>Saloon Car</strong> – Perfect for solo travelers and couples.</li>
    <li><strong>People Carrier (5 Passengers)</strong> – Ideal for families and small groups.</li>
    <li><strong>8-Seater Minibus</strong> – Spacious for larger groups with luggage.</li>
    <li><strong>Business-Class Mercedes Vehicles</strong> – Luxury travel for business and VIP passengers.</li>
</ul>

<h2>Meet & Greet Service – Where to Find Your Driver</h2>
<ul>
    <li><strong>Location:</strong> Upon arrival at <strong>Bodrum Milas Airport (BJV)</strong>,  
        your driver will be waiting <strong>by the arrival gates</strong>,  
        holding a passenger name board for easy recognition.</li>
    <li><strong>No delays:</strong> Even if your flight is early or delayed,  
        our drivers track your arrival time and adjust accordingly.</li>
    <li><strong>Seamless Transfers:</strong> Avoid the hassle of searching for taxis—  
        your private driver will be ready to take you directly to your hotel, villa, or resort.</li>
</ul>

<h2>Top Destinations for Bodrum Milas Airport Transfers</h2>

<p>We provide private transfers from <strong>Bodrum Milas Airport (BJV)</strong> to:</p>
<ul>
    <li><strong>Bodrum</strong> – The heart of the region, famous for its marina, nightlife, and beaches.</li>
    <li><strong>Gumbet</strong> – A lively beach town known for water sports and entertainment.</li>
    <li><strong>Torba</strong> – A peaceful bay area just minutes from Bodrum.</li>
    <li><strong>Bitez</strong> – A relaxed coastal town, ideal for windsurfing and beachfront dining.</li>
    <li><strong>Yalikavak</strong> – A luxury resort area with stunning marinas and upmarket restaurants.</li>
    <li><strong>Turgutreis</strong> – Known for its breathtaking sunsets and charming seafront.</li>
</ul>

<p>
    No matter your destination, APL Transfers provides a  
    <strong>fixed-price, no-hassle</strong> transfer service for a smooth start to your holiday.
</p>

<h2>Why Choose APL Transfers?</h2>
<ul>
    <li><strong>Meet & Greet at the Arrival Gates</strong> – Your driver will be waiting for you with a name board.</li>
    <li><strong>Fixed Prices – No Hidden Costs</strong> – What you see is what you pay.</li>
    <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Book with confidence.</li>
    <li><strong>Free Child Seats for 8 & 9-Seater Private Vehicles</strong> – Safety for families at no extra cost.</li>
    <li><strong>24/7 Customer Support</strong> – Always available to assist with your journey.</li>
    <li><strong>Corporate Travel Solutions</strong> – Reliable airport transfers for business travelers.</li>
    <li><strong>Luxury, Clean & Well-Maintained Vehicles</strong> – Enjoy a smooth and comfortable ride.</li>
</ul>

<h2>Book Your Bodrum Milas Airport Taxi Now</h2>

<p>
    Make your arrival at <strong>Bodrum Milas Airport (BJV)</strong> stress-free  
    by pre-booking your <strong>private taxi transfer</strong>.  
    Whether you're traveling to the <strong>bustling town of Bodrum,  
    the scenic beaches of Bitez, or the luxury resorts of Yalikavak</strong>,  
    we provide an affordable and reliable transfer service.
</p>

<ul>
    <li><strong>Instant Online Booking</strong></li>
    <li><strong>Secure Payment</strong> (Euro, GBP, US Dollar & Turkish Lira Accepted)</li>
    <li><strong>No Hidden Fees – Transparent Pricing</strong></li>
</ul>

<p>
    Need help? Contact our <strong>24/7 customer support</strong> for assistance.
    <a href="/">Book Now</a> and travel with ease.
</p>

        `,
        tr: `
        <h1>Bodrum Milas Havalimanı Taksi Transfer Fiyatları – Özel ve Sabit Fiyatlı Transferler</h1>

<h2>Bodrum Milas Havalimanı’ndan (BJV) Güvenilir ve Konforlu Transferler</h2>

<p>
    <strong>Bodrum, Gümbet, Torba, Bitez, Yalıkavak veya Turgutreis</strong>’e mi seyahat ediyorsunuz?  
    APL Transfers, <strong>Bodrum Milas Havalimanı (BJV)</strong>’dan  
    <strong>sabit fiyatlı özel havalimanı taksi transferleri</strong> sunmaktadır.  
    İhtiyacınız ister <strong>sedan bir araç, beş yolcu kapasiteli geniş bir araç,  
    sekiz kişilik bir minibüs veya lüks bir Mercedes iş sınıfı araç</strong> olsun,  
    konforlu ve sorunsuz bir yolculuk sağlıyoruz.
</p>

<p>
    <strong>Varış kapılarında karşılama hizmetimiz</strong>, şoförünüzün uçaktan indiğiniz anda  
    sizi bekliyor olmasını garanti eder.
</p>

<h2>Bodrum Milas Havalimanı Transfer Araç Seçenekleri</h2>
<ul>
    <li><strong>Sedan Araç</strong> – Bireysel yolcular ve çiftler için ideal.</li>
    <li><strong>Minivan (5 Yolcu)</strong> – Aileler ve küçük gruplar için mükemmel.</li>
    <li><strong>8 Kişilik Minibüs</strong> – Daha büyük gruplar ve fazla bagaj için geniş ve rahat.</li>
    <li><strong>Mercedes İş Sınıfı Araçlar</strong> – VIP ve iş seyahatleri için üst düzey konfor.</li>
</ul>

<h2>Karşılama Hizmeti – Sürücünüzü Nerede Bulabilirsiniz?</h2>
<ul>
    <li><strong>Konum:</strong> <strong>Bodrum Milas Havalimanı (BJV)</strong>’na vardığınızda,  
        şoförünüz sizi <strong>varış kapılarında</strong> isminizin yazılı olduğu bir tabela ile bekliyor olacak.</li>
    <li><strong>Gecikme Yok:</strong> Uçağınız erken inse veya rötar yapsa bile,  
        şoförlerimiz varış saatlerinizi takip ederek programlarını buna göre ayarlar.</li>
    <li><strong>Hızlı ve Kolay Transfer:</strong> Taksi beklemenize veya son dakika pazarlıkları yapmanıza gerek yok –  
        özel şoförünüz sizi doğrudan gitmek istediğiniz yere götürecektir.</li>
</ul>

<h2>Bodrum Milas Havalimanı Transferlerinde Popüler Destinasyonlar</h2>

<p>Bodrum Milas Havalimanı’ndan (BJV) özel transferler sağlıyoruz:</p>
<ul>
    <li><strong>Bodrum</strong> – Marina, gece hayatı ve plajlarıyla ünlü bölgenin merkezi.</li>
    <li><strong>Gümbet</strong> – Su sporları ve eğlence hayatı ile tanınan hareketli bir tatil beldesi.</li>
    <li><strong>Torba</strong> – Bodrum’a sadece birkaç dakika uzaklıkta, huzurlu bir koy bölgesi.</li>
    <li><strong>Bitez</strong> – Rüzgar sörfü ve sahil restoranları için mükemmel olan sakin bir kıyı kasabası.</li>
    <li><strong>Yalıkavak</strong> – Muhteşem marinaları ve lüks restoranlarıyla ünlü bir tatil merkezi.</li>
    <li><strong>Turgutreis</strong> – Nefes kesen gün batımları ve şirin sahil şeridi ile tanınır.</li>
</ul>

<p>
    Hangi destinasyona giderseniz gidin, APL Transfers  
    <strong>sabit fiyatlı, zahmetsiz</strong> bir transfer hizmeti sunmaktadır.
</p>

<h2>Neden APL Transfers’i Seçmelisiniz?</h2>
<ul>
    <li><strong>Varış Kapılarında Karşılama</strong> – Şoförünüz isminizin yazılı olduğu bir tabela ile bekleyecek.</li>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Ne görüyorsanız onu ödersiniz.</li>
    <li><strong>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal</strong> – Esnek ve risksiz rezervasyon.</li>
    <li><strong>8 ve 9 Kişilik Özel Araçlar İçin Ücretsiz Çocuk Koltuğu</strong> – Aileler için ekstra güvenlik, ek ücret olmadan.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – Seyahatinizde her zaman yardıma hazırız.</li>
    <li><strong>Kurumsal Seyahat Çözümleri</strong> – İş seyahatleri için güvenilir transfer hizmetleri.</li>
    <li><strong>Temiz, Konforlu ve Bakımlı Araçlar</strong> – Varış noktanıza konfor içinde ulaşın.</li>
</ul>

<h2>Bodrum Milas Havalimanı Taksi Rezervasyonu Yapın</h2>

<p>
    <strong>Bodrum Milas Havalimanı (BJV)</strong>’na vardığınızda taksi arama stresinden kaçının.  
    <strong>Özel havalimanı taksi transferinizi</strong> önceden rezerve edin ve konforlu bir yolculuk yapın.  
    İster <strong>canlı Bodrum şehir merkezine, Bitez’in huzurlu plajlarına  
    veya Yalıkavak’ın lüks tatil köylerine</strong> gidiyor olun, ekonomik ve güvenilir bir transfer hizmeti sunuyoruz.
</p>

<ul>
    <li><strong>Anında Online Rezervasyon</strong></li>
    <li><strong>Güvenli Ödeme</strong> (Euro, GBP, ABD Doları & Türk Lirası kabul edilir)</li>
    <li><strong>Gizli Ücret Yok – Şeffaf Fiyatlandırma</strong></li>
</ul>

<p>
    Yardıma mı ihtiyacınız var? <strong>7/24 müşteri destek</strong> ekibimizle iletişime geçin.
    <a href="/">Hemen Rezervasyon Yapın</a> ve rahat bir yolculuk yapın.
</p>

        `,
        ar: `<h1>أسعار سيارات الأجرة في مطار بودروم ميلاس – خدمات نقل خاصة وثابتة</h1>

<h2>خدمات نقل موثوقة ومريحة من مطار بودروم ميلاس (BJV)</h2>

<p>
    هل تخطط للسفر إلى <strong>بودروم، غومبيت، توربا، بيتز، ياليكافاك، أو تورغوترييس</strong>؟  
    تقدم APL Transfers <strong>خدمات نقل خاصة بأسعار ثابتة</strong>  
    من <strong>مطار بودروم ميلاس (BJV)</strong> إلى جميع المنتجعات والبلدات الرئيسية في المنطقة.  
    سواء كنت بحاجة إلى <strong>سيارة سيدان، حافلة صغيرة تتسع لخمسة ركاب،  
    حافلة صغيرة بثمانية مقاعد، أو سيارة مرسيدس فاخرة للأعمال</strong>،  
    نضمن لك رحلة مريحة وخالية من المتاعب.
</p>

<p>
    <strong>خدمة الاستقبال عند بوابات الوصول</strong> تضمن أن يكون سائقك  
    في انتظارك فور وصولك.
</p>

<h2>خيارات المركبات لخدمة النقل من مطار بودروم ميلاس</h2>
<ul>
    <li><strong>سيارة سيدان</strong> – مثالية للمسافرين الأفراد والأزواج.</li>
    <li><strong>حافلة صغيرة (5 ركاب)</strong> – مثالية للعائلات والمجموعات الصغيرة.</li>
    <li><strong>حافلة صغيرة بـ 8 مقاعد</strong> – فسيحة ومناسبة للمجموعات الكبيرة مع الأمتعة.</li>
    <li><strong>سيارات مرسيدس للأعمال</strong> – توفر الراحة والفخامة للمسافرين من رجال الأعمال وVIP.</li>
</ul>

<h2>خدمة الاستقبال – أين تجد سائقك؟</h2>
<ul>
    <li><strong>الموقع:</strong> عند وصولك إلى <strong>مطار بودروم ميلاس (BJV)</strong>،  
        سيكون سائقك بانتظارك <strong>عند بوابات الوصول</strong>  
        حاملًا لوحة تحمل اسمك لسهولة التعرف عليه.</li>
    <li><strong>بدون تأخير:</strong> حتى إذا كان وصول رحلتك مبكرًا أو متأخرًا،  
        فإن سائقينا يتابعون وقت وصولك ويعدّلون جدولهم وفقًا لذلك.</li>
    <li><strong>نقل سلس:</strong> لا داعي للانتظار لسيارات الأجرة أو التفاوض في اللحظة الأخيرة –  
        سيكون سائقك الخاص جاهزًا لنقلك مباشرة إلى وجهتك.</li>
</ul>

<h2>الوجهات الشهيرة لخدمة النقل من مطار بودروم ميلاس</h2>

<p>نحن نقدم خدمات نقل خاصة من <strong>مطار بودروم ميلاس (BJV)</strong> إلى:</p>
<ul>
    <li><strong>بودروم</strong> – قلب المنطقة، يشتهر بماريناه وحياته الليلية وشواطئه.</li>
    <li><strong>غومبيت</strong> – مدينة شاطئية حيوية تشتهر بالرياضات المائية والترفيه.</li>
    <li><strong>توربا</strong> – منطقة خليج هادئة على بُعد دقائق فقط من بودروم.</li>
    <li><strong>بيتز</strong> – مدينة ساحلية هادئة، مثالية لركوب الأمواج وتناول الطعام على الشاطئ.</li>
    <li><strong>ياليكافاك</strong> – منطقة منتجعات فاخرة مع مراسي خلابة ومطاعم راقية.</li>
    <li><strong>تورغوترييس</strong> – معروفة بغروبها الساحر وساحلها الخلاب.</li>
</ul>

<p>
    بغض النظر عن وجهتك، تقدم APL Transfers  
    <strong>خدمة نقل بسعر ثابت وبدون متاعب</strong> لضمان بداية سلسة لعطلتك.
</p>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>الاستقبال عند بوابات الوصول</strong> – سيكون السائق في انتظارك بلوحة تحمل اسمك.</li>
    <li><strong>أسعار ثابتة – بدون رسوم خفية</strong> – لا يوجد أي تكاليف إضافية.</li>
    <li><strong>إمكانية الإلغاء المجاني حتى 24 ساعة قبل الوصول</strong> – احجز بثقة وراحة بال.</li>
    <li><strong>مقاعد أطفال مجانية للمركبات الخاصة بـ 8 و 9 مقاعد</strong> – لضمان سلامة العائلات.</li>
    <li><strong>دعم العملاء 24/7</strong> – متاح دائمًا لمساعدتك أثناء رحلتك.</li>
    <li><strong>حلول سفر الشركات</strong> – خدمات نقل موثوقة للمسافرين من رجال الأعمال.</li>
    <li><strong>مركبات فاخرة ونظيفة ومُصانة جيدًا</strong> – استمتع برحلة مريحة إلى وجهتك.</li>
</ul>

<h2>احجز سيارة الأجرة من مطار بودروم ميلاس الآن</h2>

<p>
    تجنب عناء البحث عن سيارة أجرة عند وصولك إلى <strong>مطار بودروم ميلاس (BJV)</strong>.  
    احجز <strong>خدمة النقل الخاصة</strong> مسبقًا وتمتع برحلة مريحة وخالية من المتاعب.<br>  
    سواء كنت متجهًا إلى <strong>وسط مدينة بودروم النابضة بالحياة،  
    شواطئ بيتز الخلابة، أو منتجعات ياليكافاك الفاخرة</strong>،  
    فإننا نوفر لك خدمة نقل بأسعار معقولة وموثوقة.
</p>

<ul>
    <li><strong>حجز فوري عبر الإنترنت</strong></li>
    <li><strong>دفع آمن</strong> (نقبل اليورو، الجنيه الإسترليني، الدولار الأمريكي والليرة التركية)</li>
    <li><strong>بدون رسوم خفية – تسعير شفاف</strong></li>
</ul>

<p>
    هل تحتاج إلى مساعدة؟ تواصل مع <strong>خدمة العملاء المتوفرة 24/7</strong> لضمان تجربة نقل سلسة.
    <a href="/">احجز الآن</a> وسافر براحة وطمأنينة!
</p>
`,
        es: `
        <h1>Precios de Taxi en el Aeropuerto de Bodrum Milas – Traslados Privados y a Precio Fijo</h1>

<h2>Traslados Confiables y Cómodos desde el Aeropuerto de Bodrum Milas (BJV)</h2>

<p>
    ¿Viajas a <strong>Bodrum, Gümbet, Torba, Bitez, Yalıkavak o Turgutreis</strong>?  
    APL Transfers ofrece <strong>traslados privados con tarifa fija</strong>  
    desde el <strong>Aeropuerto de Bodrum Milas (BJV)</strong> a todos los principales resorts y ciudades de la región.  
    Ya sea que necesites un <strong>sedán, un monovolumen espacioso para cinco pasajeros,  
    un minibús de ocho plazas o un lujoso Mercedes de clase ejecutiva</strong>,  
    garantizamos un traslado cómodo y sin preocupaciones.
</p>

<p>
    Nuestro <strong>servicio de bienvenida en las puertas de llegada</strong> garantiza  
    que tu conductor estará esperándote tan pronto como aterrices.
</p>

<h2>Opciones de Vehículos para Traslados desde el Aeropuerto de Bodrum Milas</h2>
<ul>
    <li><strong>Vehículo Sedán</strong> – Ideal para viajeros solos y parejas.</li>
    <li><strong>Monovolumen (5 Pasajeros)</strong> – Perfecto para familias y grupos pequeños.</li>
    <li><strong>Minibús de 8 Plazas</strong> – Espacioso y adecuado para grupos grandes con equipaje.</li>
    <li><strong>Vehículos Mercedes de Clase Ejecutiva</strong> – Viajes de lujo para ejecutivos y pasajeros VIP.</li>
</ul>

<h2>Servicio de Bienvenida – ¿Dónde Encontrar a tu Conductor?</h2>
<ul>
    <li><strong>Ubicación:</strong> Al llegar al <strong>Aeropuerto de Bodrum Milas (BJV)</strong>,  
        tu conductor te estará esperando <strong>en las puertas de llegada</strong>,  
        sosteniendo un cartel con tu nombre para que lo reconozcas fácilmente.</li>
    <li><strong>Sin retrasos:</strong> Incluso si tu vuelo llega antes o se retrasa,  
        nuestros conductores monitorean la hora de llegada y ajustan el horario según sea necesario.</li>
    <li><strong>Traslados sin Esperas:</strong> No es necesario hacer fila para un taxi  
        ni negociar precios de última hora – tu conductor privado estará listo  
        para llevarte directamente a tu destino.</li>
</ul>

<h2>Destinos Populares para Traslados desde el Aeropuerto de Bodrum Milas</h2>

<p>Ofrecemos traslados privados desde el <strong>Aeropuerto de Bodrum Milas (BJV)</strong> a:</p>
<ul>
    <li><strong>Bodrum</strong> – El corazón de la región, famoso por su marina, vida nocturna y playas.</li>
    <li><strong>Gümbet</strong> – Una animada ciudad costera conocida por sus deportes acuáticos y entretenimiento.</li>
    <li><strong>Torba</strong> – Una tranquila zona de bahía a pocos minutos de Bodrum.</li>
    <li><strong>Bitez</strong> – Un relajado pueblo costero, ideal para practicar windsurf y cenar junto al mar.</li>
    <li><strong>Yalıkavak</strong> – Una zona de resorts de lujo con impresionantes marinas y restaurantes de alta gama.</li>
    <li><strong>Turgutreis</strong> – Conocida por sus impresionantes puestas de sol y su encantador paseo marítimo.</li>
</ul>

<p>
    No importa cuál sea tu destino, APL Transfers ofrece  
    un servicio de traslado <strong>con tarifa fija y sin complicaciones</strong>  
    para un inicio perfecto de tus vacaciones.
</p>

<h2>¿Por Qué Elegir APL Transfers?</h2>
<ul>
    <li><strong>Servicio de Bienvenida en las Puertas de Llegada</strong> – Tu conductor te estará esperando con un cartel con tu nombre.</li>
    <li><strong>Precios Fijos – Sin Costos Ocultos</strong> – Lo que ves es lo que pagas.</li>
    <li><strong>Cancelación Gratuita Hasta 24 Horas Antes de la Llegada</strong> – Reserva con total confianza.</li>
    <li><strong>Asientos para Niños Gratis en Vehículos de 8 y 9 Plazas</strong> – Seguridad para familias sin costo adicional.</li>
    <li><strong>Atención al Cliente 24/7</strong> – Siempre disponible para ayudarte en tu viaje.</li>
    <li><strong>Soluciones de Viaje para Empresas</strong> – Traslados confiables para viajeros de negocios.</li>
    <li><strong>Vehículos de Lujo, Limpios y Bien Mantenidos</strong> – Disfruta de un viaje cómodo a tu destino.</li>
</ul>

<h2>Reserva Ahora tu Taxi en el Aeropuerto de Bodrum Milas</h2>

<p>
    Evita el estrés de buscar un taxi al llegar al <strong>Aeropuerto de Bodrum Milas (BJV)</strong>.  
    Reserva con anticipación tu <strong>traslado privado</strong> y disfruta de un viaje sin preocupaciones.<br>  
    Ya sea que te dirijas a <strong>la animada ciudad de Bodrum,  
    las tranquilas playas de Bitez o los resorts de lujo de Yalıkavak</strong>,  
    ofrecemos un servicio de traslado económico y confiable.
</p>

<ul>
    <li><strong>Reserva Online al Instante</strong></li>
    <li><strong>Pago Seguro</strong> (Se aceptan Euros, GBP, Dólares Estadounidenses y Liras Turcas)</li>
    <li><strong>Sin Costos Ocultos – Tarifas Transparentes</strong></li>
</ul>

<p>
    ¿Necesitas ayuda? Contacta con nuestro <strong>soporte al cliente 24/7</strong> para una experiencia de traslado sin inconvenientes.
    <a href="/">Reserva Ahora</a> y viaja con tranquilidad.
</p>

        `,
        it: `
        <h1>Prezzi Taxi Aeroporto di Bodrum Milas – Trasferimenti Privati e a Prezzo Fisso</h1>

<h2>Trasferimenti Affidabili e Confortevoli dall'Aeroporto di Bodrum Milas (BJV)</h2>

<p>
    Stai viaggiando verso <strong>Bodrum, Gümbet, Torba, Bitez, Yalıkavak o Turgutreis</strong>?  
    APL Transfers offre <strong>trasferimenti privati a prezzo fisso</strong>  
    dall'<strong>Aeroporto di Bodrum Milas (BJV)</strong> a tutte le principali località turistiche della regione.  
    Che tu abbia bisogno di una <strong>berlina, un monovolume spazioso per cinque passeggeri,  
    un minibus a otto posti o un lussuoso veicolo Mercedes business-class</strong>,  
    garantiamo un viaggio confortevole e senza stress.
</p>

<p>
    Il nostro <strong>servizio di accoglienza alle porte di arrivo</strong> garantisce  
    che il tuo autista sarà pronto ad accoglierti non appena atterri.
</p>

<h2>Opzioni di Veicoli per i Trasferimenti dall'Aeroporto di Bodrum Milas</h2>
<ul>
    <li><strong>Berlina</strong> – Ideale per viaggiatori singoli e coppie.</li>
    <li><strong>Monovolume (5 Passeggeri)</strong> – Perfetto per famiglie e piccoli gruppi.</li>
    <li><strong>Minibus a 8 Posti</strong> – Spazioso e ideale per gruppi numerosi con bagagli.</li>
    <li><strong>Veicoli Mercedes Business-Class</strong> – Viaggi di lusso per dirigenti e VIP.</li>
</ul>

<h2>Servizio di Accoglienza – Dove Trovare il Tuo Autista?</h2>
<ul>
    <li><strong>Posizione:</strong> All'arrivo all'<strong>Aeroporto di Bodrum Milas (BJV)</strong>,  
        il tuo autista ti aspetterà <strong>alle porte di arrivo</strong>,  
        tenendo un cartello con il tuo nome per un facile riconoscimento.</li>
    <li><strong>Nessun ritardo:</strong> Anche se il tuo volo arriva in anticipo o è in ritardo,  
        i nostri autisti monitorano l'orario di arrivo e si adattano di conseguenza.</li>
    <li><strong>Trasferimenti senza Attese:</strong> Evita lo stress delle negoziazioni dell'ultimo minuto per un taxi –  
        il tuo autista privato sarà pronto a portarti direttamente a destinazione.</li>
</ul>

<h2>Destinazioni Popolari per i Trasferimenti dall'Aeroporto di Bodrum Milas</h2>

<p>Forniamo trasferimenti privati dall'<strong>Aeroporto di Bodrum Milas (BJV)</strong> a:</p>
<ul>
    <li><strong>Bodrum</strong> – Il cuore della regione, famosa per il suo porto turistico, la vita notturna e le spiagge.</li>
    <li><strong>Gümbet</strong> – Una vivace località balneare nota per gli sport acquatici e l’intrattenimento.</li>
    <li><strong>Torba</strong> – Una tranquilla area di baia a pochi minuti da Bodrum.</li>
    <li><strong>Bitez</strong> – Una rilassante cittadina costiera, ideale per il windsurf e la ristorazione sul lungomare.</li>
    <li><strong>Yalıkavak</strong> – Una lussuosa zona turistica con splendidi porti turistici e ristoranti esclusivi.</li>
    <li><strong>Turgutreis</strong> – Nota per i suoi spettacolari tramonti e il suo incantevole lungomare.</li>
</ul>

<p>
    Qualunque sia la tua destinazione, APL Transfers offre  
    un servizio di trasferimento <strong>a prezzo fisso e senza problemi</strong>  
    per un inizio di vacanza perfetto.
</p>

<h2>Perché Scegliere APL Transfers?</h2>
<ul>
    <li><strong>Accoglienza alle Porte di Arrivo</strong> – Il tuo autista ti attenderà con un cartello con il tuo nome.</li>
    <li><strong>Prezzi Fissi – Nessun Costo Nascosto</strong> – Paghi solo quello che vedi.</li>
    <li><strong>Cancellazione Gratuita fino a 24 Ore Prima dell'Arrivo</strong> – Prenotazione flessibile e sicura.</li>
    <li><strong>Seggiolini per Bambini Gratuiti per Veicoli Privati a 8 e 9 Posti</strong> – Sicurezza per le famiglie senza costi aggiuntivi.</li>
    <li><strong>Supporto Clienti 24/7</strong> – Sempre disponibile per assisterti nel tuo viaggio.</li>
    <li><strong>Soluzioni per Viaggi Aziendali</strong> – Trasferimenti affidabili per professionisti.</li>
    <li><strong>Veicoli di Lusso, Puliti e Ben Manutenuti</strong> – Viaggia in totale comfort fino alla tua destinazione.</li>
</ul>

<h2>Prenota Ora il Tuo Taxi dall'Aeroporto di Bodrum Milas</h2>

<p>
    Evita lo stress di cercare un taxi all'arrivo all'<strong>Aeroporto di Bodrum Milas (BJV)</strong>.  
    Prenota in anticipo il tuo <strong>trasferimento privato</strong> e goditi un viaggio senza pensieri.<br>  
    Che tu stia andando nella <strong>vivace città di Bodrum,  
    nelle tranquille spiagge di Bitez o nei lussuosi resort di Yalıkavak</strong>,  
    offriamo un servizio di trasferimento economico e affidabile.
</p>

<ul>
    <li><strong>Prenotazione Online Immediata</strong></li>
    <li><strong>Pagamento Sicuro</strong> (Accettati Euro, GBP, Dollari USA e Lira Turca)</li>
    <li><strong>Nessun Costo Nascosto – Prezzi Trasparenti</strong></li>
</ul>

<p>
    Hai bisogno di aiuto? Contatta il nostro <strong>supporto clienti 24/7</strong> per assistenza.
    <a href="/">Prenota Ora</a> e viaggia con tranquillità.
</p>

        `,
        ru: `
        <h1>Цены на такси из аэропорта Бодрум Милас – Частные и фиксированные трансферы</h1>

<h2>Надежные и комфортные трансферы из аэропорта Бодрум Милас (BJV)</h2>

<p>
    Путешествуете в <strong>Бодрум, Гюмбет, Торба, Битез, Ялыкавак или Тургутрейс</strong>?  
    APL Transfers предлагает <strong>частные трансферы по фиксированной цене</strong>  
    из <strong>аэропорта Бодрум Милас (BJV)</strong> во все популярные курортные зоны и города региона.  
    Независимо от того, нужен ли вам <strong>седан, просторный минивэн на пять пассажиров,  
    микроавтобус на восемь мест или роскошный автомобиль Mercedes бизнес-класса</strong>,  
    мы обеспечим вам комфортную и беззаботную поездку.
</p>

<p>
    <strong>Услуга встречи у выходов из зоны прилета</strong> гарантирует,  
    что ваш водитель будет ждать вас сразу после посадки.
</p>

<h2>Варианты транспорта для трансфера из аэропорта Бодрум Милас</h2>
<ul>
    <li><strong>Седан</strong> – Идеально для индивидуальных путешественников и пар.</li>
    <li><strong>Минивэн (5 пассажиров)</strong> – Отличный вариант для семей и небольших групп.</li>
    <li><strong>Микроавтобус на 8 мест</strong> – Просторное решение для больших групп с багажом.</li>
    <li><strong>Автомобили Mercedes бизнес-класса</strong> – Премиальный комфорт для деловых поездок и VIP-гостей.</li>
</ul>

<h2>Где найти вашего водителя?</h2>
<ul>
    <li><strong>Местоположение:</strong> По прибытии в <strong>аэропорт Бодрум Милас (BJV)</strong>  
        ваш водитель будет ждать вас <strong>у выходов из зоны прилета</strong>,  
        держа табличку с вашим именем для удобного опознания.</li>
    <li><strong>Без задержек:</strong> Даже если ваш рейс прибывает раньше или с опозданием,  
        наши водители отслеживают время прилета и корректируют расписание.</li>
    <li><strong>Быстрый и удобный трансфер:</strong> Вам не нужно стоять в очереди на такси  
        или договариваться о цене – ваш личный водитель отвезет вас прямо в пункт назначения.</li>
</ul>

<h2>Популярные направления для трансфера из аэропорта Бодрум Милас</h2>

<p>Мы предоставляем частные трансферы из <strong>аэропорта Бодрум Милас (BJV)</strong> в:</p>
<ul>
    <li><strong>Бодрум</strong> – Центр региона, знаменитый своей гаванью, ночной жизнью и пляжами.</li>
    <li><strong>Гюмбет</strong> – Оживленный курортный город, известный водными видами спорта и развлечениями.</li>
    <li><strong>Торба</strong> – Спокойный залив всего в нескольких минутах от Бодрума.</li>
    <li><strong>Битез</strong> – Уютный курортный поселок, идеально подходящий для виндсерфинга и ресторанов на берегу.</li>
    <li><strong>Ялыкавак</strong> – Роскошный курорт с живописными пристанями и первоклассными ресторанами.</li>
    <li><strong>Тургутрейс</strong> – Известен своими потрясающими закатами и очаровательной набережной.</li>
</ul>

<p>
    Независимо от вашего пункта назначения, APL Transfers предлагает  
    <strong>фиксированный тариф и удобный трансфер</strong>,  
    чтобы ваше путешествие началось без лишних хлопот.
</p>

<h2>Почему выбирают APL Transfers?</h2>
<ul>
    <li><strong>Встреча у выходов из зоны прилета</strong> – Водитель будет ждать вас с табличкой с вашим именем.</li>
    <li><strong>Фиксированные цены – Без скрытых платежей</strong> – Вы платите ровно столько, сколько указано.</li>
    <li><strong>Бесплатная отмена бронирования за 24 часа до прибытия</strong> – Гибкие условия бронирования без риска.</li>
    <li><strong>Бесплатные детские кресла в автомобилях на 8 и 9 мест</strong> – Дополнительная безопасность для семей.</li>
    <li><strong>Круглосуточная поддержка клиентов</strong> – Мы всегда готовы помочь вам.</li>
    <li><strong>Корпоративные трансферы</strong> – Надежные поездки для деловых клиентов.</li>
    <li><strong>Роскошные, чистые и ухоженные автомобили</strong> – Наслаждайтесь комфортной поездкой.</li>
</ul>

<h2>Забронируйте такси из аэропорта Бодрум Милас</h2>

<p>
    Избегайте поисков такси по прилету в <strong>аэропорт Бодрум Милас (BJV)</strong>.  
    Забронируйте <strong>частный трансфер</strong> заранее и наслаждайтесь спокойной поездкой.<br>  
    Независимо от того, направляетесь ли вы в <strong>оживленный центр Бодрума,  
    живописные пляжи Битеза или роскошные курорты Ялыкавака</strong>,  
    наши фиксированные тарифы гарантируют вам удобный и надежный трансфер.
</p>

<ul>
    <li><strong>Мгновенное онлайн-бронирование</strong></li>
    <li><strong>Безопасная оплата</strong> (Принимаются евро, фунты стерлингов, доллары США и турецкие лиры)</li>
    <li><strong>Без скрытых платежей – Прозрачные цены</strong></li>
</ul>

<p>
    Нужна помощь? Свяжитесь с нашей <strong>службой поддержки 24/7</strong> для комфортного трансфера.
    <a href="/">Забронировать сейчас</a> и путешествуйте без забот!
</p>

        `,
        zh: `
        <h1>博德鲁姆米拉斯机场出租车价格 – 私人接送 & 固定价格</h1>

<h2>博德鲁姆米拉斯机场 (BJV) 可靠 & 舒适的接送服务</h2>

<p>
    计划前往 <strong>博德鲁姆 (Bodrum)、古姆贝特 (Gümbet)、托尔巴 (Torba)、比泰兹 (Bitez)、亚利卡瓦克 (Yalıkavak) 或 图尔古特雷斯 (Turgutreis)</strong>？  
    APL Transfers 提供 <strong>博德鲁姆米拉斯机场 (BJV) 的固定价格私人机场出租车接送服务</strong>。<br>
    无论您需要 <strong>轿车、可容纳五名乘客的宽敞 MPV、八座小型巴士，还是豪华奔驰商务车</strong>，我们都能为您提供顺畅无忧的接送服务。
</p>

<p>
    我们的 <strong>到达门迎接服务</strong> 确保您的司机将在您降落后立即等候。
</p>

<h2>博德鲁姆米拉斯机场接送车辆选择</h2>
<ul>
    <li><strong>轿车</strong> – 适合个人和情侣出行。</li>
    <li><strong>MPV（5 人座）</strong> – 适合家庭和小团体。</li>
    <li><strong>8 座小型巴士</strong> – 空间宽敞，适合较大的团队和行李较多的旅客。</li>
    <li><strong>奔驰商务车型</strong> – 为高端商务人士和 VIP 旅客提供尊贵舒适的乘坐体验。</li>
</ul>

<h2>接机服务 – 在哪里找到您的司机？</h2>
<ul>
    <li><strong>位置：</strong> 抵达 <strong>博德鲁姆米拉斯机场 (BJV)</strong> 后，您的司机将在
        <strong>到达门</strong> 等候，并举着写有您的姓名的接机牌，方便您认出。</li>
    <li><strong>无延误：</strong> 即使您的航班提前或延误，我们的司机也会实时跟踪您的抵达时间并相应调整。</li>
    <li><strong>快速便捷：</strong> 无需排队等待出租车或与司机议价，您的私人司机将直接送您到达目的地。</li>
</ul>

<h2>博德鲁姆米拉斯机场接送热门目的地</h2>

<p>我们提供从 <strong>博德鲁姆米拉斯机场 (BJV)</strong> 出发的私人接送服务：</p>
<ul>
    <li><strong>博德鲁姆 (Bodrum)</strong> – 该地区的中心，以其码头、夜生活和海滩而闻名。</li>
    <li><strong>古姆贝特 (Gümbet)</strong> – 热闹的海滨城镇，以水上运动和娱乐活动著称。</li>
    <li><strong>托尔巴 (Torba)</strong> – 一个宁静的海湾，距离博德鲁姆仅几分钟车程。</li>
    <li><strong>比泰兹 (Bitez)</strong> – 一个休闲的海滨小镇，适合风帆冲浪和海滨餐饮。</li>
    <li><strong>亚利卡瓦克 (Yalıkavak)</strong> – 一个豪华度假胜地，拥有壮观的游艇码头和高端餐厅。</li>
    <li><strong>图尔古特雷斯 (Turgutreis)</strong> – 以其壮丽的日落和迷人的海滨而闻名。</li>
</ul>

<p>
    无论您的目的地在哪里，APL Transfers 都提供  
    <strong>固定价格、无忧接送</strong>，  
    让您的旅程从一开始就顺畅轻松。
</p>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>到达门迎接服务</strong> – 司机将在到达门举牌等候，方便识别。</li>
    <li><strong>固定价格 – 无隐藏费用</strong> – 透明定价，无额外收费。</li>
    <li><strong>支持 24 小时前免费取消</strong> – 预订灵活，无后顾之忧。</li>
    <li><strong>8 座和 9 座私人车辆提供免费儿童座椅</strong> – 确保家庭旅客的安全。</li>
    <li><strong>24/7 客户支持</strong> – 随时提供帮助。</li>
    <li><strong>企业差旅解决方案</strong> – 提供可靠的商务接送服务。</li>
    <li><strong>豪华、干净且维护良好的车辆</strong> – 享受高品质的舒适旅行体验。</li>
</ul>

<h2>立即预订博德鲁姆米拉斯机场出租车</h2>

<p>
    抵达 <strong>博德鲁姆米拉斯机场 (BJV)</strong> 后无需费心寻找出租车。提前预订
    <strong>私人机场接送服务</strong>，享受轻松无忧的旅程。<br>
    无论您前往 <strong>热闹的博德鲁姆市中心、  
    宁静的比泰兹海滩，或豪华的亚利卡瓦克度假村</strong>，  
    我们提供经济实惠且可靠的接送服务。
</p>

<ul>
    <li><strong>即时在线预订</strong></li>
    <li><strong>安全支付</strong>（支持欧元 (EUR)、英镑 (GBP)、美元 (USD) 和土耳其里拉 (TRY)）</li>
    <li><strong>无隐藏费用 – 透明定价</strong></li>
</ul>

<p>
    需要帮助？请联系 <strong>24/7 客户支持</strong>，确保您拥有顺畅的接送体验。
    <a href="/">立即预订</a>，享受安心之旅！
</p>

        `,
    },
    "/izmir-adnan-menderes-airport-taxi-prices": {
        en: `
        <h1>Izmir Adnan Menderes Airport Taxi Prices – Private & Fixed-Price Transfers</h1>

<h2>Reliable & Comfortable Transfers from Izmir Adnan Menderes Airport (ADB)</h2>

<p>
    Planning a trip to <strong>Kusadasi, Cesme, Alacati, Selcuk, or Ephesus</strong>?  
    APL Transfers offers <strong>fixed-price private airport taxi transfers</strong>  
    from <strong>Izmir Adnan Menderes Airport (ADB)</strong> to major destinations across the region.  
    Whether you need a <strong>saloon car, a people carrier for five passengers,  
    an eight-seater minibus, or a luxury Mercedes business-class vehicle</strong>,  
    we provide a hassle-free, comfortable transfer experience.
</p>

<p>
    Our <strong>meet & greet service at the arrival gates</strong> ensures  
    your driver will be waiting for you as soon as you land.
</p>

<h2>Vehicle Options for Izmir Adnan Menderes Airport Transfers</h2>
<ul>
    <li><strong>Saloon Car</strong> – Ideal for solo travelers and couples.</li>
    <li><strong>People Carrier (5 Passengers)</strong> – Perfect for families and small groups.</li>
    <li><strong>8-Seater Minibus</strong> – Spacious for larger groups with luggage.</li>
    <li><strong>Business-Class Mercedes Vehicles</strong> – Premium travel for business and VIP passengers.</li>
</ul>

<h2>Meet & Greet Service – Where to Find Your Driver</h2>
<ul>
    <li><strong>Location:</strong> Upon arrival at <strong>Izmir Adnan Menderes Airport (ADB)</strong>,  
        your driver will be waiting <strong>by the arrival gates</strong>,  
        holding a passenger name board for easy recognition.</li>
    <li><strong>Flight tracking:</strong> Even if your flight arrives early or is delayed,  
        our drivers track your arrival time and adjust accordingly.</li>
    <li><strong>Seamless Transfers:</strong> Avoid the hassle of searching for taxis—  
        your private driver will be ready to take you to your hotel, resort, or private villa.</li>
</ul>

<h2>Top Destinations for Izmir Airport Transfers</h2>

<p>We provide private transfers from <strong>Izmir Adnan Menderes Airport (ADB)</strong> to:</p>
<ul>
    <li><strong>Kusadasi</strong> – A vibrant coastal town with stunning beaches and luxury resorts.</li>
    <li><strong>Cesme</strong> – A popular seaside destination known for its thermal waters and lively atmosphere.</li>
    <li><strong>Alacati</strong> – A charming village famous for its windsurfing spots, boutique hotels, and cobblestone streets.</li>
    <li><strong>Selcuk</strong> – Home to ancient ruins, including the <strong>Temple of Artemis</strong>,  
        one of the Seven Wonders of the Ancient World.</li>
    <li><strong>Ephesus</strong> – A must-visit UNESCO World Heritage Site featuring well-preserved Roman ruins.</li>
</ul>

<p>
    Whether you're traveling for a <strong>holiday, business, or sightseeing</strong>,  
    APL Transfers ensures a <strong>smooth, fixed-price transfer</strong> to your destination.
</p>

<h2>Why Choose APL Transfers?</h2>
<ul>
    <li><strong>Meet & Greet at the Arrival Gates</strong> – Your driver will be waiting for you with a name board.</li>
    <li><strong>Fixed Prices – No Hidden Costs</strong> – What you see is what you pay.</li>
    <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Book with confidence.</li>
    <li><strong>Free Child Seats for 8 & 9-Seater Private Vehicles</strong> – Safety for families at no extra cost.</li>
    <li><strong>24/7 Customer Support</strong> – Always available to assist with your journey.</li>
    <li><strong>Corporate Travel Solutions</strong> – Reliable airport transfers for business travelers.</li>
    <li><strong>Luxury, Clean & Well-Maintained Vehicles</strong> – Enjoy a smooth and comfortable ride.</li>
</ul>

<h2>Book Your Izmir Airport Taxi Now</h2>

<p>
    Make your arrival at <strong>Izmir Adnan Menderes Airport (ADB)</strong> stress-free  
    by pre-booking your <strong>private taxi transfer</strong>.  
    Whether you're traveling to <strong>the beach resorts of Cesme,  
    the ancient city of Ephesus, or the vibrant town of Kusadasi</strong>,  
    our fixed-price transfers ensure a smooth and affordable journey.
</p>

<ul>
    <li><strong>Instant Online Booking</strong></li>
    <li><strong>Secure Payment</strong> (Euro, GBP, US Dollar & Turkish Lira Accepted)</li>
    <li><strong>No Hidden Fees – Transparent Pricing</strong></li>
</ul>

<p>
    Need help? Contact our <strong>24/7 customer support</strong> for assistance.
    <a href="/">Book Now</a> and travel with ease.
</p>

        `,
        tr: `
        <h1>İzmir Adnan Menderes Havalimanı Taksi Transfer Fiyatları – Özel ve Sabit Fiyatlı Transferler</h1>

<h2>İzmir Adnan Menderes Havalimanı'ndan (ADB) Güvenilir ve Konforlu Transferler</h2>

<p>
    <strong>Kuşadası, Çeşme, Alaçatı, Selçuk veya Efes</strong>’e mi seyahat ediyorsunuz?  
    APL Transfers, <strong>İzmir Adnan Menderes Havalimanı (ADB)</strong>’ndan  
    <strong>sabit fiyatlı özel havalimanı taksi transferleri</strong> sunmaktadır.  
    İhtiyacınız ister <strong>sedan bir araç, beş yolcu kapasiteli geniş bir araç,  
    sekiz kişilik bir minibüs veya lüks bir Mercedes iş sınıfı araç</strong> olsun,  
    konforlu ve sorunsuz bir yolculuk sağlıyoruz.
</p>

<p>
    <strong>Varış kapılarında karşılama hizmetimiz</strong>, şoförünüzün uçaktan indiğiniz anda  
    sizi bekliyor olmasını garanti eder.
</p>

<h2>İzmir Adnan Menderes Havalimanı Transfer Araç Seçenekleri</h2>
<ul>
    <li><strong>Sedan Araç</strong> – Bireysel yolcular ve çiftler için ideal.</li>
    <li><strong>Minivan (5 Yolcu)</strong> – Aileler ve küçük gruplar için mükemmel.</li>
    <li><strong>8 Kişilik Minibüs</strong> – Daha büyük gruplar ve fazla bagaj için geniş ve rahat.</li>
    <li><strong>Mercedes İş Sınıfı Araçlar</strong> – VIP ve iş seyahatleri için üst düzey konfor.</li>
</ul>

<h2>Karşılama Hizmeti – Sürücünüzü Nerede Bulabilirsiniz?</h2>
<ul>
    <li><strong>Konum:</strong> <strong>İzmir Adnan Menderes Havalimanı (ADB)</strong>’na vardığınızda,  
        şoförünüz sizi <strong>varış kapılarında</strong> isminizin yazılı olduğu bir tabela ile bekliyor olacak.</li>
    <li><strong>Uçuş Takibi:</strong> Uçağınız erken inse veya rötar yapsa bile,  
        şoförlerimiz varış saatlerinizi takip ederek programlarını buna göre ayarlar.</li>
    <li><strong>Hızlı ve Kolay Transfer:</strong> Taksi beklemenize veya son dakika pazarlıkları yapmanıza gerek yok –  
        özel şoförünüz sizi doğrudan gitmek istediğiniz yere götürecektir.</li>
</ul>

<h2>İzmir Havalimanı Transferlerinde Popüler Destinasyonlar</h2>

<p>İzmir Adnan Menderes Havalimanı’ndan (ADB) özel transferler sağlıyoruz:</p>
<ul>
    <li><strong>Kuşadası</strong> – Muhteşem plajları ve lüks tatil köyleriyle ünlü canlı bir sahil kasabası.</li>
    <li><strong>Çeşme</strong> – Termal suları ve hareketli atmosferi ile ünlü popüler bir tatil beldesi.</li>
    <li><strong>Alaçatı</strong> – Rüzgar sörfü noktaları, butik otelleri ve taş sokaklarıyla ünlü büyüleyici bir kasaba.</li>
    <li><strong>Selçuk</strong> – <strong>Artemis Tapınağı</strong> gibi antik kalıntılara ev sahipliği yapan,  
        Antik Dünyanın Yedi Harikasından biri.</li>
    <li><strong>Efes</strong> – İyi korunmuş Roma kalıntılarını içeren, mutlaka ziyaret edilmesi gereken  
        bir UNESCO Dünya Mirası Alanı.</li>
</ul>

<p>
    Tatil, iş veya turistik gezi için seyahat ediyor olun,  
    APL Transfers <strong>konforlu ve sabit fiyatlı transfer</strong> hizmeti sunar.
</p>

<h2>Neden APL Transfers’i Seçmelisiniz?</h2>
<ul>
    <li><strong>Varış Kapılarında Karşılama</strong> – Şoförünüz isminizin yazılı olduğu bir tabela ile bekleyecek.</li>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Ne görüyorsanız onu ödersiniz.</li>
    <li><strong>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal</strong> – Esnek ve risksiz rezervasyon.</li>
    <li><strong>8 ve 9 Kişilik Özel Araçlar İçin Ücretsiz Çocuk Koltuğu</strong> – Aileler için ekstra güvenlik, ek ücret olmadan.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – Seyahatinizde her zaman yardıma hazırız.</li>
    <li><strong>Kurumsal Seyahat Çözümleri</strong> – İş seyahatleri için güvenilir transfer hizmetleri.</li>
    <li><strong>Temiz, Konforlu ve Bakımlı Araçlar</strong> – Varış noktanıza konfor içinde ulaşın.</li>
</ul>

<h2>İzmir Havalimanı Taksi Rezervasyonu Yapın</h2>

<p>
    <strong>İzmir Adnan Menderes Havalimanı (ADB)</strong>’na vardığınızda taksi arama stresinden kaçının.  
    <strong>Özel havalimanı taksi transferinizi</strong> önceden rezerve edin ve konforlu bir yolculuk yapın.  
    İster <strong>Çeşme’nin sahil tatil köylerine,  
    Efes’in antik kentine veya Kuşadası’nın hareketli şehir merkezine</strong> gidiyor olun,  
    ekonomik ve güvenilir bir transfer hizmeti sunuyoruz.
</p>

<ul>
    <li><strong>Anında Online Rezervasyon</strong></li>
    <li><strong>Güvenli Ödeme</strong> (Euro, GBP, ABD Doları & Türk Lirası kabul edilir)</li>
    <li><strong>Gizli Ücret Yok – Şeffaf Fiyatlandırma</strong></li>
</ul>

<p>
    Yardıma mı ihtiyacınız var? <strong>7/24 müşteri destek</strong> ekibimizle iletişime geçin.
    <a href="/">Hemen Rezervasyon Yapın</a> ve rahat bir yolculuk yapın.
</p>

        `,
        ar: `
        <h1>أسعار سيارات الأجرة في مطار إزمير عدنان مندريس – خدمات نقل خاصة وثابتة</h1>

<h2>خدمات نقل موثوقة ومريحة من مطار إزمير عدنان مندريس (ADB)</h2>

<p>
    هل تخطط للسفر إلى <strong>كوشاداسي، تشيشمي، ألاكاتي، سلجوق، أو أفسس</strong>؟  
    تقدم APL Transfers <strong>خدمات نقل خاصة بأسعار ثابتة</strong>  
    من <strong>مطار إزمير عدنان مندريس (ADB)</strong> إلى الوجهات الرئيسية في المنطقة.  
    سواء كنت بحاجة إلى <strong>سيارة سيدان، حافلة صغيرة تتسع لخمسة ركاب،  
    حافلة صغيرة بثمانية مقاعد، أو سيارة مرسيدس فاخرة للأعمال</strong>،  
    نضمن لك تجربة نقل مريحة وخالية من المتاعب.
</p>

<p>
    <strong>خدمة الاستقبال عند بوابات الوصول</strong> تضمن أن يكون سائقك  
    في انتظارك فور وصولك.
</p>

<h2>خيارات المركبات لخدمة النقل من مطار إزمير عدنان مندريس</h2>
<ul>
    <li><strong>سيارة سيدان</strong> – مثالية للمسافرين الأفراد والأزواج.</li>
    <li><strong>حافلة صغيرة (5 ركاب)</strong> – مثالية للعائلات والمجموعات الصغيرة.</li>
    <li><strong>حافلة صغيرة بـ 8 مقاعد</strong> – فسيحة ومناسبة للمجموعات الكبيرة مع الأمتعة.</li>
    <li><strong>سيارات مرسيدس للأعمال</strong> – توفر الراحة والفخامة للمسافرين من رجال الأعمال وVIP.</li>
</ul>

<h2>خدمة الاستقبال – أين تجد سائقك؟</h2>
<ul>
    <li><strong>الموقع:</strong> عند وصولك إلى <strong>مطار إزمير عدنان مندريس (ADB)</strong>،  
        سيكون سائقك بانتظارك <strong>عند بوابات الوصول</strong>  
        حاملًا لوحة تحمل اسمك لسهولة التعرف عليه.</li>
    <li><strong>تتبع الرحلات:</strong> حتى إذا كان وصول رحلتك مبكرًا أو متأخرًا،  
        فإن سائقينا يتابعون وقت وصولك ويعدّلون جدولهم وفقًا لذلك.</li>
    <li><strong>نقل سلس:</strong> لا داعي للانتظار لسيارات الأجرة أو التفاوض في اللحظة الأخيرة –  
        سيكون سائقك الخاص جاهزًا لنقلك مباشرة إلى وجهتك.</li>
</ul>

<h2>الوجهات الشهيرة لخدمة النقل من مطار إزمير</h2>

<p>نحن نقدم خدمات نقل خاصة من <strong>مطار إزمير عدنان مندريس (ADB)</strong> إلى:</p>
<ul>
    <li><strong>كوشاداسي</strong> – مدينة ساحلية حيوية بشواطئ خلابة ومنتجعات فاخرة.</li>
    <li><strong>تشيشمي</strong> – وجهة ساحلية شهيرة معروفة بمياهها الحرارية وأجوائها النابضة بالحياة.</li>
    <li><strong>ألاكاتي</strong> – قرية ساحرة تشتهر برياضة ركوب الأمواج، والفنادق البوتيكية، وشوارعها المرصوفة بالحصى.</li>
    <li><strong>سلجوق</strong> – موطن للآثار القديمة، بما في ذلك <strong>معبد أرتميس</strong>،  
        أحد عجائب الدنيا السبع في العالم القديم.</li>
    <li><strong>أفسس</strong> – موقع تراث عالمي لليونسكو يجب زيارته، ويضم أنقاضًا رومانية محفوظة جيدًا.</li>
</ul>

<p>
    سواء كنت مسافرًا من أجل <strong>العطلات، أو العمل، أو السياحة</strong>،  
    تضمن APL Transfers <strong>نقلًا سلسًا بأسعار ثابتة</strong> إلى وجهتك.
</p>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>الاستقبال عند بوابات الوصول</strong> – سيكون السائق في انتظارك بلوحة تحمل اسمك.</li>
    <li><strong>أسعار ثابتة – بدون رسوم خفية</strong> – لا يوجد أي تكاليف إضافية.</li>
    <li><strong>إمكانية الإلغاء المجاني حتى 24 ساعة قبل الوصول</strong> – احجز بثقة وراحة بال.</li>
    <li><strong>مقاعد أطفال مجانية للمركبات الخاصة بـ 8 و 9 مقاعد</strong> – لضمان سلامة العائلات.</li>
    <li><strong>دعم العملاء 24/7</strong> – متاح دائمًا لمساعدتك أثناء رحلتك.</li>
    <li><strong>حلول سفر الشركات</strong> – خدمات نقل موثوقة للمسافرين من رجال الأعمال.</li>
    <li><strong>مركبات فاخرة ونظيفة ومُصانة جيدًا</strong> – استمتع برحلة مريحة إلى وجهتك.</li>
</ul>

<h2>احجز سيارة الأجرة من مطار إزمير الآن</h2>

<p>
    تجنب عناء البحث عن سيارة أجرة عند وصولك إلى <strong>مطار إزمير عدنان مندريس (ADB)</strong>.  
    احجز <strong>خدمة النقل الخاصة</strong> مسبقًا وتمتع برحلة مريحة وخالية من المتاعب.<br>  
    سواء كنت متجهًا إلى <strong>منتجعات شاطئ تشيشمي،  
    المدينة القديمة في أفسس، أو مدينة كوشاداسي النابضة بالحياة</strong>،  
    فإننا نوفر لك خدمة نقل بأسعار معقولة وموثوقة.
</p>

<ul>
    <li><strong>حجز فوري عبر الإنترنت</strong></li>
    <li><strong>دفع آمن</strong> (نقبل اليورو، الجنيه الإسترليني، الدولار الأمريكي والليرة التركية)</li>
    <li><strong>بدون رسوم خفية – تسعير شفاف</strong></li>
</ul>

<p>
    هل تحتاج إلى مساعدة؟ تواصل مع <strong>خدمة العملاء المتوفرة 24/7</strong> لضمان تجربة نقل سلسة.
    <a href="/">احجز الآن</a> وسافر براحة وطمأنينة!
</p>

        `,
        es: `
        <h1>Precios de Taxi en el Aeropuerto de Izmir Adnan Menderes – Traslados Privados y a Precio Fijo</h1>

<h2>Traslados Confiables y Cómodos desde el Aeropuerto de Izmir Adnan Menderes (ADB)</h2>

<p>
    ¿Viajas a <strong>Kusadasi, Cesme, Alacati, Selcuk o Éfeso</strong>?  
    APL Transfers ofrece <strong>traslados privados con tarifa fija</strong>  
    desde el <strong>Aeropuerto de Izmir Adnan Menderes (ADB)</strong> a todos los principales destinos de la región.  
    Ya sea que necesites un <strong>sedán, un monovolumen espacioso para cinco pasajeros,  
    un minibús de ocho plazas o un lujoso Mercedes de clase ejecutiva</strong>,  
    garantizamos un traslado cómodo y sin preocupaciones.
</p>

<p>
    Nuestro <strong>servicio de bienvenida en las puertas de llegada</strong> garantiza  
    que tu conductor estará esperándote tan pronto como aterrices.
</p>

<h2>Opciones de Vehículos para Traslados desde el Aeropuerto de Izmir Adnan Menderes</h2>
<ul>
    <li><strong>Vehículo Sedán</strong> – Ideal para viajeros solos y parejas.</li>
    <li><strong>Monovolumen (5 Pasajeros)</strong> – Perfecto para familias y grupos pequeños.</li>
    <li><strong>Minibús de 8 Plazas</strong> – Espacioso y adecuado para grupos grandes con equipaje.</li>
    <li><strong>Vehículos Mercedes de Clase Ejecutiva</strong> – Viajes de lujo para ejecutivos y pasajeros VIP.</li>
</ul>

<h2>Servicio de Bienvenida – ¿Dónde Encontrar a tu Conductor?</h2>
<ul>
    <li><strong>Ubicación:</strong> Al llegar al <strong>Aeropuerto de Izmir Adnan Menderes (ADB)</strong>,  
        tu conductor te estará esperando <strong>en las puertas de llegada</strong>,  
        sosteniendo un cartel con tu nombre para que lo reconozcas fácilmente.</li>
    <li><strong>Seguimiento de vuelos:</strong> Incluso si tu vuelo llega antes o se retrasa,  
        nuestros conductores monitorean la hora de llegada y ajustan el horario según sea necesario.</li>
    <li><strong>Traslados sin Esperas:</strong> Evita el estrés de buscar un taxi  
        o negociar precios de última hora – tu conductor privado estará listo  
        para llevarte directamente a tu destino.</li>
</ul>

<h2>Destinos Populares para Traslados desde el Aeropuerto de Izmir</h2>

<p>Ofrecemos traslados privados desde el <strong>Aeropuerto de Izmir Adnan Menderes (ADB)</strong> a:</p>
<ul>
    <li><strong>Kusadasi</strong> – Una vibrante ciudad costera con impresionantes playas y lujosos resorts.</li>
    <li><strong>Cesme</strong> – Un popular destino de playa conocido por sus aguas termales y su animado ambiente.</li>
    <li><strong>Alacati</strong> – Un encantador pueblo famoso por sus zonas de windsurf, hoteles boutique y calles empedradas.</li>
    <li><strong>Selcuk</strong> – Hogar de ruinas antiguas, incluido el <strong>Templo de Artemisa</strong>,  
        una de las Siete Maravillas del Mundo Antiguo.</li>
    <li><strong>Éfeso</strong> – Un sitio del Patrimonio Mundial de la UNESCO imprescindible,  
        con bien conservadas ruinas romanas.</li>
</ul>

<p>
    Ya sea que viajes por <strong>vacaciones, negocios o turismo</strong>,  
    APL Transfers garantiza un <strong>traslado cómodo y con tarifa fija</strong> a tu destino.
</p>

<h2>¿Por Qué Elegir APL Transfers?</h2>
<ul>
    <li><strong>Servicio de Bienvenida en las Puertas de Llegada</strong> – Tu conductor te estará esperando con un cartel con tu nombre.</li>
    <li><strong>Precios Fijos – Sin Costos Ocultos</strong> – Lo que ves es lo que pagas.</li>
    <li><strong>Cancelación Gratuita Hasta 24 Horas Antes de la Llegada</strong> – Reserva con total confianza.</li>
    <li><strong>Asientos para Niños Gratis en Vehículos de 8 y 9 Plazas</strong> – Seguridad para familias sin costo adicional.</li>
    <li><strong>Atención al Cliente 24/7</strong> – Siempre disponible para ayudarte en tu viaje.</li>
    <li><strong>Soluciones de Viaje para Empresas</strong> – Traslados confiables para viajeros de negocios.</li>
    <li><strong>Vehículos de Lujo, Limpios y Bien Mantenidos</strong> – Disfruta de un viaje cómodo a tu destino.</li>
</ul>

<h2>Reserva Ahora tu Taxi en el Aeropuerto de Izmir</h2>

<p>
    Evita el estrés de buscar un taxi al llegar al <strong>Aeropuerto de Izmir Adnan Menderes (ADB)</strong>.  
    Reserva con anticipación tu <strong>traslado privado</strong> y disfruta de un viaje sin preocupaciones.<br>  
    Ya sea que te dirijas a <strong>los resorts de playa en Cesme,  
    la antigua ciudad de Éfeso o la vibrante ciudad de Kusadasi</strong>,  
    ofrecemos un servicio de traslado económico y confiable.
</p>

<ul>
    <li><strong>Reserva Online al Instante</strong></li>
    <li><strong>Pago Seguro</strong> (Se aceptan Euros, GBP, Dólares Estadounidenses y Liras Turcas)</li>
    <li><strong>Sin Costos Ocultos – Tarifas Transparentes</strong></li>
</ul>

<p>
    ¿Necesitas ayuda? Contacta con nuestro <strong>soporte al cliente 24/7</strong> para una experiencia de traslado sin inconvenientes.
    <a href="/">Reserva Ahora</a> y viaja con tranquilidad.
</p>

        `,
        it: `
        <h1>Precios de Taxi en el Aeropuerto de Izmir Adnan Menderes – Traslados Privados y a Precio Fijo</h1>

<h2>Traslados Confiables y Cómodos desde el Aeropuerto de Izmir Adnan Menderes (ADB)</h2>

<p>
    ¿Viajas a <strong>Kusadasi, Cesme, Alacati, Selcuk o Éfeso</strong>?  
    APL Transfers ofrece <strong>traslados privados con tarifa fija</strong>  
    desde el <strong>Aeropuerto de Izmir Adnan Menderes (ADB)</strong> a todos los principales destinos de la región.  
    Ya sea que necesites un <strong>sedán, un monovolumen espacioso para cinco pasajeros,  
    un minibús de ocho plazas o un lujoso Mercedes de clase ejecutiva</strong>,  
    garantizamos un traslado cómodo y sin preocupaciones.
</p>

<p>
    Nuestro <strong>servicio de bienvenida en las puertas de llegada</strong> garantiza  
    que tu conductor estará esperándote tan pronto como aterrices.
</p>

<h2>Opciones de Vehículos para Traslados desde el Aeropuerto de Izmir Adnan Menderes</h2>
<ul>
    <li><strong>Vehículo Sedán</strong> – Ideal para viajeros solos y parejas.</li>
    <li><strong>Monovolumen (5 Pasajeros)</strong> – Perfecto para familias y grupos pequeños.</li>
    <li><strong>Minibús de 8 Plazas</strong> – Espacioso y adecuado para grupos grandes con equipaje.</li>
    <li><strong>Vehículos Mercedes de Clase Ejecutiva</strong> – Viajes de lujo para ejecutivos y pasajeros VIP.</li>
</ul>

<h2>Servicio de Bienvenida – ¿Dónde Encontrar a tu Conductor?</h2>
<ul>
    <li><strong>Ubicación:</strong> Al llegar al <strong>Aeropuerto de Izmir Adnan Menderes (ADB)</strong>,  
        tu conductor te estará esperando <strong>en las puertas de llegada</strong>,  
        sosteniendo un cartel con tu nombre para que lo reconozcas fácilmente.</li>
    <li><strong>Seguimiento de vuelos:</strong> Incluso si tu vuelo llega antes o se retrasa,  
        nuestros conductores monitorean la hora de llegada y ajustan el horario según sea necesario.</li>
    <li><strong>Traslados sin Esperas:</strong> Evita el estrés de buscar un taxi  
        o negociar precios de última hora – tu conductor privado estará listo  
        para llevarte directamente a tu destino.</li>
</ul>

<h2>Destinos Populares para Traslados desde el Aeropuerto de Izmir</h2>

<p>Ofrecemos traslados privados desde el <strong>Aeropuerto de Izmir Adnan Menderes (ADB)</strong> a:</p>
<ul>
    <li><strong>Kusadasi</strong> – Una vibrante ciudad costera con impresionantes playas y lujosos resorts.</li>
    <li><strong>Cesme</strong> – Un popular destino de playa conocido por sus aguas termales y su animado ambiente.</li>
    <li><strong>Alacati</strong> – Un encantador pueblo famoso por sus zonas de windsurf, hoteles boutique y calles empedradas.</li>
    <li><strong>Selcuk</strong> – Hogar de ruinas antiguas, incluido el <strong>Templo de Artemisa</strong>,  
        una de las Siete Maravillas del Mundo Antiguo.</li>
    <li><strong>Éfeso</strong> – Un sitio del Patrimonio Mundial de la UNESCO imprescindible,  
        con bien conservadas ruinas romanas.</li>
</ul>

<p>
    Ya sea que viajes por <strong>vacaciones, negocios o turismo</strong>,  
    APL Transfers garantiza un <strong>traslado cómodo y con tarifa fija</strong> a tu destino.
</p>

<h2>¿Por Qué Elegir APL Transfers?</h2>
<ul>
    <li><strong>Servicio de Bienvenida en las Puertas de Llegada</strong> – Tu conductor te estará esperando con un cartel con tu nombre.</li>
    <li><strong>Precios Fijos – Sin Costos Ocultos</strong> – Lo que ves es lo que pagas.</li>
    <li><strong>Cancelación Gratuita Hasta 24 Horas Antes de la Llegada</strong> – Reserva con total confianza.</li>
    <li><strong>Asientos para Niños Gratis en Vehículos de 8 y 9 Plazas</strong> – Seguridad para familias sin costo adicional.</li>
    <li><strong>Atención al Cliente 24/7</strong> – Siempre disponible para ayudarte en tu viaje.</li>
    <li><strong>Soluciones de Viaje para Empresas</strong> – Traslados confiables para viajeros de negocios.</li>
    <li><strong>Vehículos de Lujo, Limpios y Bien Mantenidos</strong> – Disfruta de un viaje cómodo a tu destino.</li>
</ul>

<h2>Reserva Ahora tu Taxi en el Aeropuerto de Izmir</h2>

<p>
    Evita el estrés de buscar un taxi al llegar al <strong>Aeropuerto de Izmir Adnan Menderes (ADB)</strong>.  
    Reserva con anticipación tu <strong>traslado privado</strong> y disfruta de un viaje sin preocupaciones.<br>  
    Ya sea que te dirijas a <strong>los resorts de playa en Cesme,  
    la antigua ciudad de Éfeso o la vibrante ciudad de Kusadasi</strong>,  
    ofrecemos un servicio de traslado económico y confiable.
</p>

<ul>
    <li><strong>Reserva Online al Instante</strong></li>
    <li><strong>Pago Seguro</strong> (Se aceptan Euros, GBP, Dólares Estadounidenses y Liras Turcas)</li>
    <li><strong>Sin Costos Ocultos – Tarifas Transparentes</strong></li>
</ul>

<p>
    ¿Necesitas ayuda? Contacta con nuestro <strong>soporte al cliente 24/7</strong> para una experiencia de traslado sin inconvenientes.
    <a href="/">Reserva Ahora</a> y viaja con tranquilidad.
</p>

        `,
        ru: `
        <h1>Цены на такси из аэропорта Измир Аднан Мендерес – Частные и фиксированные трансферы</h1>

<h2>Надежные и комфортные трансферы из аэропорта Измир Аднан Мендерес (ADB)</h2>

<p>
    Путешествуете в <strong>Кушадасы, Чешме, Алачаты, Сельчук или Эфес</strong>?  
    APL Transfers предлагает <strong>частные трансферы по фиксированной цене</strong>  
    из <strong>аэропорта Измир Аднан Мендерес (ADB)</strong> в популярные направления региона.  
    Независимо от того, нужен ли вам <strong>седан, просторный минивэн на пять пассажиров,  
    микроавтобус на восемь мест или роскошный автомобиль Mercedes бизнес-класса</strong>,  
    мы обеспечим вам комфортную и беззаботную поездку.
</p>

<p>
    <strong>Услуга встречи у выходов из зоны прилета</strong> гарантирует,  
    что ваш водитель будет ждать вас сразу после посадки.
</p>

<h2>Варианты транспорта для трансфера из аэропорта Измир Аднан Мендерес</h2>
<ul>
    <li><strong>Седан</strong> – Идеально для индивидуальных путешественников и пар.</li>
    <li><strong>Минивэн (5 пассажиров)</strong> – Отличный вариант для семей и небольших групп.</li>
    <li><strong>Микроавтобус на 8 мест</strong> – Просторное решение для больших групп с багажом.</li>
    <li><strong>Автомобили Mercedes бизнес-класса</strong> – Премиальный комфорт для деловых поездок и VIP-гостей.</li>
</ul>

<h2>Где найти вашего водителя?</h2>
<ul>
    <li><strong>Местоположение:</strong> По прибытии в <strong>аэропорт Измир Аднан Мендерес (ADB)</strong>  
        ваш водитель будет ждать вас <strong>у выходов из зоны прилета</strong>,  
        держа табличку с вашим именем для удобного опознания.</li>
    <li><strong>Отслеживание рейсов:</strong> Даже если ваш рейс прибывает раньше или с опозданием,  
        наши водители отслеживают время прилета и корректируют расписание.</li>
    <li><strong>Быстрый и удобный трансфер:</strong> Вам не нужно стоять в очереди на такси  
        или договариваться о цене – ваш личный водитель отвезет вас прямо в пункт назначения.</li>
</ul>

<h2>Популярные направления для трансфера из аэропорта Измир</h2>

<p>Мы предоставляем частные трансферы из <strong>аэропорта Измир Аднан Мендерес (ADB)</strong> в:</p>
<ul>
    <li><strong>Кушадасы</strong> – Оживленный прибрежный город с потрясающими пляжами и роскошными курортами.</li>
    <li><strong>Чешме</strong> – Популярное морское направление, известное своими термальными водами и живой атмосферой.</li>
    <li><strong>Алачаты</strong> – Очаровательная деревня, известная своими местами для виндсерфинга,  
        бутиковыми отелями и мощеными улочками.</li>
    <li><strong>Сельчук</strong> – Здесь находятся древние руины, включая <strong>Храм Артемиды</strong>,  
        одно из Семи Чудес Древнего мира.</li>
    <li><strong>Эфес</strong> – Объект Всемирного наследия ЮНЕСКО, который стоит посетить.  
        Здесь сохранились древнеримские руины.</li>
</ul>

<p>
    Независимо от цели вашей поездки – <strong>отдых, бизнес или экскурсия</strong>,  
    APL Transfers предлагает <strong>удобный трансфер по фиксированной цене</strong> до вашего пункта назначения.
</p>

<h2>Почему выбирают APL Transfers?</h2>
<ul>
    <li><strong>Встреча у выходов из зоны прилета</strong> – Водитель будет ждать вас с табличкой с вашим именем.</li>
    <li><strong>Фиксированные цены – Без скрытых платежей</strong> – Вы платите ровно столько, сколько указано.</li>
    <li><strong>Бесплатная отмена бронирования за 24 часа до прибытия</strong> – Гибкие условия бронирования без риска.</li>
    <li><strong>Бесплатные детские кресла в автомобилях на 8 и 9 мест</strong> – Дополнительная безопасность для семей.</li>
    <li><strong>Круглосуточная поддержка клиентов</strong> – Мы всегда готовы помочь вам.</li>
    <li><strong>Корпоративные трансферы</strong> – Надежные поездки для деловых клиентов.</li>
    <li><strong>Роскошные, чистые и ухоженные автомобили</strong> – Наслаждайтесь комфортной поездкой.</li>
</ul>

<h2>Забронируйте такси из аэропорта Измир</h2>

<p>
    Избегайте поисков такси по прилету в <strong>аэропорт Измир Аднан Мендерес (ADB)</strong>.  
    Забронируйте <strong>частный трансфер</strong> заранее и наслаждайтесь спокойной поездкой.<br>  
    Независимо от того, направляетесь ли вы на <strong>пляжные курорты Чешме,  
    в древний город Эфес или в оживленный центр Кушадасы</strong>,  
    наши фиксированные тарифы гарантируют вам удобный и надежный трансфер.
</p>

<ul>
    <li><strong>Мгновенное онлайн-бронирование</strong></li>
    <li><strong>Безопасная оплата</strong> (Принимаются евро, фунты стерлингов, доллары США и турецкие лиры)</li>
    <li><strong>Без скрытых платежей – Прозрачные цены</strong></li>
</ul>

<p>
    Нужна помощь? Свяжитесь с нашей <strong>службой поддержки 24/7</strong> для комфортного трансфера.
    <a href="/">Забронировать сейчас</a> и путешествуйте без забот!
</p>

        `,
        zh: `
        <h1>伊兹密尔阿德南·门德列斯机场出租车价格 – 私人接送 & 固定价格</h1>

<h2>伊兹密尔阿德南·门德列斯机场 (ADB) 可靠 & 舒适的接送服务</h2>

<p>
    计划前往 <strong>库萨达斯 (Kusadasi)、切什梅 (Cesme)、阿拉恰特 (Alacati)、塞尔丘克 (Selcuk) 或 以弗所 (Ephesus)</strong>？  
    APL Transfers 提供 <strong>伊兹密尔阿德南·门德列斯机场 (ADB) 的固定价格私人机场出租车接送服务</strong>。<br>
    无论您需要 <strong>轿车、可容纳五名乘客的宽敞 MPV、八座小型巴士，还是豪华奔驰商务车</strong>，我们都能为您提供顺畅无忧的接送服务。
</p>

<p>
    我们的 <strong>到达门迎接服务</strong> 确保您的司机将在您降落后立即等候。
</p>

<h2>伊兹密尔阿德南·门德列斯机场接送车辆选择</h2>
<ul>
    <li><strong>轿车</strong> – 适合个人和情侣出行。</li>
    <li><strong>MPV（5 人座）</strong> – 适合家庭和小团体。</li>
    <li><strong>8 座小型巴士</strong> – 空间宽敞，适合较大的团队和行李较多的旅客。</li>
    <li><strong>奔驰商务车型</strong> – 为高端商务人士和 VIP 旅客提供尊贵舒适的乘坐体验。</li>
</ul>

<h2>接机服务 – 在哪里找到您的司机？</h2>
<ul>
    <li><strong>位置：</strong> 抵达 <strong>伊兹密尔阿德南·门德列斯机场 (ADB)</strong> 后，您的司机将在
        <strong>到达门</strong> 等候，并举着写有您的姓名的接机牌，方便您认出。</li>
    <li><strong>航班追踪：</strong> 即使您的航班提前或延误，我们的司机也会实时跟踪您的抵达时间并相应调整。</li>
    <li><strong>快速便捷：</strong> 无需排队等待出租车或与司机议价，您的私人司机将直接送您到达目的地。</li>
</ul>

<h2>伊兹密尔阿德南·门德列斯机场接送热门目的地</h2>

<p>我们提供从 <strong>伊兹密尔阿德南·门德列斯机场 (ADB)</strong> 出发的私人接送服务：</p>
<ul>
    <li><strong>库萨达斯 (Kusadasi)</strong> – 充满活力的海滨城镇，拥有迷人的海滩和豪华度假村。</li>
    <li><strong>切什梅 (Cesme)</strong> – 以温泉水疗和热闹的氛围而闻名的海滨目的地。</li>
    <li><strong>阿拉恰特 (Alacati)</strong> – 迷人的村庄，以风帆冲浪、精品酒店和鹅卵石街道而闻名。</li>
    <li><strong>塞尔丘克 (Selcuk)</strong> – 这里拥有著名的古代遗址，包括 <strong>阿尔忒弥斯神庙</strong>，  
        这是古代世界七大奇迹之一。</li>
    <li><strong>以弗所 (Ephesus)</strong> – 联合国教科文组织世界遗产地，保留完好的古罗马遗址，不容错过。</li>
</ul>

<p>
    无论您是为了 <strong>度假、商务还是观光</strong> 而旅行，  
    APL Transfers 都能确保您享受 <strong>舒适且价格透明的接送服务</strong>。
</p>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>到达门迎接服务</strong> – 司机将在到达门举牌等候，方便识别。</li>
    <li><strong>固定价格 – 无隐藏费用</strong> – 透明定价，无额外收费。</li>
    <li><strong>支持 24 小时前免费取消</strong> – 预订灵活，无后顾之忧。</li>
    <li><strong>8 座和 9 座私人车辆提供免费儿童座椅</strong> – 确保家庭旅客的安全。</li>
    <li><strong>24/7 客户支持</strong> – 随时提供帮助。</li>
    <li><strong>企业差旅解决方案</strong> – 提供可靠的商务接送服务。</li>
    <li><strong>豪华、干净且维护良好的车辆</strong> – 享受高品质的舒适旅行体验。</li>
</ul>

<h2>立即预订伊兹密尔阿德南·门德列斯机场出租车</h2>

<p>
    抵达 <strong>伊兹密尔阿德南·门德列斯机场 (ADB)</strong> 后无需费心寻找出租车。提前预订
    <strong>私人机场接送服务</strong>，享受轻松无忧的旅程。<br>
    无论您前往 <strong>切什梅的海滨度假村、  
    以弗所的古城，还是库萨达斯的活力小镇</strong>，  
    我们提供经济实惠且可靠的接送服务。
</p>

<ul>
    <li><strong>即时在线预订</strong></li>
    <li><strong>安全支付</strong>（支持欧元 (EUR)、英镑 (GBP)、美元 (USD) 和土耳其里拉 (TRY)）</li>
    <li><strong>无隐藏费用 – 透明定价</strong></li>
</ul>

<p>
    需要帮助？请联系 <strong>24/7 客户支持</strong>，确保您拥有顺畅的接送体验。
    <a href="/">立即预订</a>，享受安心之旅！
</p>

        `,
    },
    "/gazipasha-alanya-airport-taxi-prices": {
        en: `
        <h1>Gazipaşa-Alanya Airport Taxi Prices – Private & Fixed-Price Transfers</h1>

<h2>Reliable & Comfortable Transfers from Gazipaşa-Alanya Airport (GZP)</h2>

<p>
    Traveling to <strong>Alanya, Mahmutlar, Kargicak, Anamur, or Avsallar</strong>?  
    APL Transfers provides <strong>fixed-price private airport transfers</strong>  
    from <strong>Gazipaşa-Alanya Airport (GZP)</strong> to major resorts and towns along  
    the stunning Mediterranean coast. Whether you need a  
    <strong>saloon car, a people carrier for five passengers,  
    an eight-seater minibus, or a luxury Mercedes business-class vehicle</strong>,  
    we ensure a smooth and hassle-free journey.
</p>

<p>
    Our <strong>meet & greet service at the arrival gates</strong> guarantees  
    that your driver will be waiting for you as soon as you land.
</p>

<h2>Vehicle Options for Gazipaşa-Alanya Airport Transfers</h2>
<ul>
    <li><strong>Saloon Car</strong> – Ideal for solo travelers and couples.</li>
    <li><strong>People Carrier (5 Passengers)</strong> – Perfect for families and small groups.</li>
    <li><strong>8-Seater Minibus</strong> – Spacious for larger groups with luggage.</li>
    <li><strong>Business-Class Mercedes Vehicles</strong> – Luxury travel for business and VIP passengers.</li>
</ul>

<h2>Meet & Greet Service – Where to Find Your Driver</h2>
<ul>
    <li><strong>Location:</strong> Upon arrival at <strong>Gazipaşa-Alanya Airport (GZP)</strong>,  
        your driver will be waiting <strong>by the arrival gates</strong>,  
        holding a passenger name board for easy recognition.</li>
    <li><strong>No delays:</strong> Even if your flight is early or delayed,  
        our drivers track your arrival time and adjust accordingly.</li>
    <li><strong>Seamless Transfers:</strong> Avoid long taxi queues—  
        your private driver will take you directly to your hotel, resort, or private villa.</li>
</ul>

<h2>Top Destinations for Gazipaşa-Alanya Airport Transfers</h2>

<p>We provide private transfers from <strong>Gazipaşa-Alanya Airport (GZP)</strong> to:</p>
<ul>
    <li><strong>Alanya</strong> – A lively coastal city famous for its beaches, nightlife,  
        and historical landmarks like Alanya Castle.</li>
    <li><strong>Mahmutlar</strong> – A growing resort area known for its relaxed atmosphere and long sandy beaches.</li>
    <li><strong>Kargicak</strong> – A peaceful coastal town with scenic views and luxurious villa accommodations.</li>
    <li><strong>Anamur</strong> – A hidden gem with unspoiled beaches, historical sites,  
        and a laid-back atmosphere.</li>
    <li><strong>Avsallar</strong> – Home to some of the best family-friendly resorts and stunning sandy beaches.</li>
</ul>

<p>
    Whether you're visiting for a <strong>beach holiday, a sightseeing trip, or a business stay</strong>,  
    APL Transfers provides <strong>fixed-price, hassle-free</strong> transport to your destination.
</p>

<h2>Why Choose APL Transfers?</h2>
<ul>
    <li><strong>Meet & Greet at the Arrival Gates</strong> – Your driver will be waiting for you with a name board.</li>
    <li><strong>Fixed Prices – No Hidden Costs</strong> – What you see is what you pay.</li>
    <li><strong>Free Cancellation Up to 24 Hours Before Arrival</strong> – Book with confidence.</li>
    <li><strong>Free Child Seats for 8 & 9-Seater Private Vehicles</strong> – Safety for families at no extra cost.</li>
    <li><strong>24/7 Customer Support</strong> – Always available to assist with your journey.</li>
    <li><strong>Corporate Travel Solutions</strong> – Reliable airport transfers for business travelers.</li>
    <li><strong>Luxury, Clean & Well-Maintained Vehicles</strong> – Enjoy a smooth and comfortable ride.</li>
</ul>

<h2>Book Your Gazipaşa-Alanya Airport Taxi Now</h2>

<p>
    Make your arrival at <strong>Gazipaşa-Alanya Airport (GZP)</strong> stress-free  
    by pre-booking your <strong>private taxi transfer</strong>.  
    Whether you're traveling to <strong>the beaches of Alanya,  
    the peaceful retreat of Anamur, or the vibrant town of Mahmutlar</strong>,  
    our fixed-price transfers guarantee a smooth and affordable journey.
</p>

<ul>
    <li><strong>Instant Online Booking</strong></li>
    <li><strong>Secure Payment</strong> (Euro, GBP, US Dollar & Turkish Lira Accepted)</li>
    <li><strong>No Hidden Fees – Transparent Pricing</strong></li>
</ul>

<p>
    Need help? Contact our <strong>24/7 customer support</strong> for assistance.
    <a href="/">Book Now</a> and travel with ease.
</p>

        `,
        tr: `
        <h1>Gazipaşa-Alanya Havalimanı Taksi Fiyatları – Özel ve Sabit Fiyatlı Transferler</h1>

<h2>Gazipaşa-Alanya Havalimanı'ndan (GZP) Güvenilir ve Konforlu Transferler</h2>

<p>
    <strong>Alanya, Mahmutlar, Kargıcak, Anamur veya Avsallar</strong>’a mı seyahat ediyorsunuz?  
    APL Transfers, <strong>Gazipaşa-Alanya Havalimanı (GZP)</strong>’ndan  
    <strong>sabit fiyatlı özel havalimanı taksi transferleri</strong> sunmaktadır.  
    Akdeniz'in muhteşem kıyıları boyunca büyük tatil köylerine ve kasabalara transfer sağlıyoruz.  
    İhtiyacınız ister <strong>sedan bir araç, beş yolcu kapasiteli geniş bir araç,  
    sekiz kişilik bir minibüs veya lüks bir Mercedes iş sınıfı araç</strong> olsun,  
    konforlu ve sorunsuz bir yolculuk sağlıyoruz.
</p>

<p>
    <strong>Varış kapılarında karşılama hizmetimiz</strong>, şoförünüzün uçaktan indiğiniz anda  
    sizi bekliyor olmasını garanti eder.
</p>

<h2>Gazipaşa-Alanya Havalimanı Transfer Araç Seçenekleri</h2>
<ul>
    <li><strong>Sedan Araç</strong> – Bireysel yolcular ve çiftler için ideal.</li>
    <li><strong>Minivan (5 Yolcu)</strong> – Aileler ve küçük gruplar için mükemmel.</li>
    <li><strong>8 Kişilik Minibüs</strong> – Daha büyük gruplar ve fazla bagaj için geniş ve rahat.</li>
    <li><strong>Mercedes İş Sınıfı Araçlar</strong> – VIP ve iş seyahatleri için üst düzey konfor.</li>
</ul>

<h2>Karşılama Hizmeti – Sürücünüzü Nerede Bulabilirsiniz?</h2>
<ul>
    <li><strong>Konum:</strong> <strong>Gazipaşa-Alanya Havalimanı (GZP)</strong>’na vardığınızda,  
        şoförünüz sizi <strong>varış kapılarında</strong> isminizin yazılı olduğu bir tabela ile bekliyor olacak.</li>
    <li><strong>Gecikme Yok:</strong> Uçağınız erken inse veya rötar yapsa bile,  
        şoförlerimiz varış saatlerinizi takip ederek programlarını buna göre ayarlar.</li>
    <li><strong>Hızlı ve Kolay Transfer:</strong> Taksi beklemenize veya uzun kuyruklarla uğraşmanıza gerek yok –  
        özel şoförünüz sizi doğrudan gitmek istediğiniz yere götürecektir.</li>
</ul>

<h2>Gazipaşa-Alanya Havalimanı Transferlerinde Popüler Destinasyonlar</h2>

<p>Gazipaşa-Alanya Havalimanı’ndan (GZP) özel transferler sağlıyoruz:</p>
<ul>
    <li><strong>Alanya</strong> – Plajları, gece hayatı ve Alanya Kalesi gibi tarihi yerleriyle ünlü hareketli bir sahil şehri.</li>
    <li><strong>Mahmutlar</strong> – Rahat atmosferi ve uzun kumlu plajlarıyla tanınan büyüyen bir tatil bölgesi.</li>
    <li><strong>Kargıcak</strong> – Muhteşem manzaraları ve lüks villa konaklama seçenekleriyle huzurlu bir sahil kasabası.</li>
    <li><strong>Anamur</strong> – Bozulmamış plajları, tarihi yerleri ve sakin atmosferiyle gizli bir cennet.</li>
    <li><strong>Avsallar</strong> – Aile dostu tatil köyleri ve büyüleyici kumlu plajlara ev sahipliği yapmaktadır.</li>
</ul>

<p>
    İster <strong>plaj tatili, şehir turu veya iş seyahati</strong> için seyahat ediyor olun,  
    APL Transfers <strong>sabit fiyatlı, zahmetsiz</strong> bir transfer hizmeti sunmaktadır.
</p>

<h2>Neden APL Transfers’i Seçmelisiniz?</h2>
<ul>
    <li><strong>Varış Kapılarında Karşılama</strong> – Şoförünüz isminizin yazılı olduğu bir tabela ile bekleyecek.</li>
    <li><strong>Sabit Fiyatlar – Gizli Ücret Yok</strong> – Ne görüyorsanız onu ödersiniz.</li>
    <li><strong>Varıştan 24 Saat Öncesine Kadar Ücretsiz İptal</strong> – Esnek ve risksiz rezervasyon.</li>
    <li><strong>8 ve 9 Kişilik Özel Araçlar İçin Ücretsiz Çocuk Koltuğu</strong> – Aileler için ekstra güvenlik, ek ücret olmadan.</li>
    <li><strong>7/24 Müşteri Desteği</strong> – Seyahatinizde her zaman yardıma hazırız.</li>
    <li><strong>Kurumsal Seyahat Çözümleri</strong> – İş seyahatleri için güvenilir transfer hizmetleri.</li>
    <li><strong>Temiz, Konforlu ve Bakımlı Araçlar</strong> – Varış noktanıza konfor içinde ulaşın.</li>
</ul>

<h2>Gazipaşa-Alanya Havalimanı Taksi Rezervasyonu Yapın</h2>

<p>
    <strong>Gazipaşa-Alanya Havalimanı (GZP)</strong>’na vardığınızda taksi arama stresinden kaçının.  
    <strong>Özel havalimanı taksi transferinizi</strong> önceden rezerve edin ve konforlu bir yolculuk yapın.  
    İster <strong>Alanya’nın plajlarına, Anamur’un huzurlu doğasına  
    veya Mahmutlar’ın hareketli merkezine</strong> gidiyor olun,  
    ekonomik ve güvenilir bir transfer hizmeti sunuyoruz.
</p>

<ul>
    <li><strong>Anında Online Rezervasyon</strong></li>
    <li><strong>Güvenli Ödeme</strong> (Euro, GBP, ABD Doları & Türk Lirası kabul edilir)</li>
    <li><strong>Gizli Ücret Yok – Şeffaf Fiyatlandırma</strong></li>
</ul>

<p>
    Yardıma mı ihtiyacınız var? <strong>7/24 müşteri destek</strong> ekibimizle iletişime geçin.
    <a href="/">Hemen Rezervasyon Yapın</a> ve rahat bir yolculuk yapın.
</p>
`,
        ar: `
        <h1>أسعار سيارات الأجرة في مطار غازي باشا-ألانيا – خدمات نقل خاصة وثابتة</h1>

<h2>خدمات نقل موثوقة ومريحة من مطار غازي باشا-ألانيا (GZP)</h2>

<p>
    هل تخطط للسفر إلى <strong>ألانيا، محمودلار، كارجيجاك، أنامور، أو أفسالار</strong>؟  
    توفر APL Transfers <strong>خدمات نقل خاصة بأسعار ثابتة</strong>  
    من <strong>مطار غازي باشا-ألانيا (GZP)</strong> إلى المنتجعات والمدن الرئيسية  
    على طول ساحل البحر الأبيض المتوسط الرائع. سواء كنت بحاجة إلى  
    <strong>سيارة سيدان، حافلة صغيرة تتسع لخمسة ركاب،  
    حافلة صغيرة بثمانية مقاعد، أو سيارة مرسيدس فاخرة للأعمال</strong>،  
    نضمن لك رحلة سلسة وخالية من المتاعب.
</p>

<p>
    <strong>خدمة الاستقبال عند بوابات الوصول</strong> تضمن أن يكون سائقك  
    في انتظارك فور وصولك.
</p>

<h2>خيارات المركبات لخدمة النقل من مطار غازي باشا-ألانيا</h2>
<ul>
    <li><strong>سيارة سيدان</strong> – مثالية للمسافرين الأفراد والأزواج.</li>
    <li><strong>حافلة صغيرة (5 ركاب)</strong> – مثالية للعائلات والمجموعات الصغيرة.</li>
    <li><strong>حافلة صغيرة بـ 8 مقاعد</strong> – فسيحة ومناسبة للمجموعات الكبيرة مع الأمتعة.</li>
    <li><strong>سيارات مرسيدس للأعمال</strong> – توفر الراحة والفخامة للمسافرين من رجال الأعمال وVIP.</li>
</ul>

<h2>خدمة الاستقبال – أين تجد سائقك؟</h2>
<ul>
    <li><strong>الموقع:</strong> عند وصولك إلى <strong>مطار غازي باشا-ألانيا (GZP)</strong>،  
        سيكون سائقك بانتظارك <strong>عند بوابات الوصول</strong>  
        حاملًا لوحة تحمل اسمك لسهولة التعرف عليه.</li>
    <li><strong>لا تأخير:</strong> حتى إذا كان وصول رحلتك مبكرًا أو متأخرًا،  
        فإن سائقينا يتابعون وقت وصولك ويعدّلون جدولهم وفقًا لذلك.</li>
    <li><strong>نقل سلس:</strong> تجنب طوابير سيارات الأجرة الطويلة –  
        سيأخذك سائقك الخاص مباشرة إلى الفندق أو المنتجع أو الفيلا الخاصة بك.</li>
</ul>

<h2>الوجهات الشهيرة لخدمة النقل من مطار غازي باشا-ألانيا</h2>

<p>نحن نقدم خدمات نقل خاصة من <strong>مطار غازي باشا-ألانيا (GZP)</strong> إلى:</p>
<ul>
    <li><strong>ألانيا</strong> – مدينة ساحلية حيوية مشهورة بشواطئها، وحياتها الليلية،  
        والمعالم التاريخية مثل قلعة ألانيا.</li>
    <li><strong>محمودلار</strong> – منطقة منتجعات متنامية تشتهر بأجوائها الهادئة وشواطئها الرملية الطويلة.</li>
    <li><strong>كارجيجاك</strong> – مدينة ساحلية هادئة تتمتع بإطلالات خلابة وفيلات فاخرة.</li>
    <li><strong>أنامور</strong> – جوهرة مخفية بشواطئها البكر ومواقعها التاريخية  
        وأجوائها الهادئة.</li>
    <li><strong>أفسالار</strong> – موطن لبعض أفضل المنتجعات العائلية والشواطئ الرملية الخلابة.</li>
</ul>

<p>
    سواء كنت تزور لأجل <strong>عطلة شاطئية، أو جولة سياحية، أو رحلة عمل</strong>،  
    فإن APL Transfers تقدم لك <strong>نقلًا ثابت السعر وخاليًا من المتاعب</strong> إلى وجهتك.
</p>

<h2>لماذا تختار APL Transfers؟</h2>
<ul>
    <li><strong>الاستقبال عند بوابات الوصول</strong> – سيكون السائق في انتظارك بلوحة تحمل اسمك.</li>
    <li><strong>أسعار ثابتة – بدون رسوم خفية</strong> – لا يوجد أي تكاليف إضافية.</li>
    <li><strong>إمكانية الإلغاء المجاني حتى 24 ساعة قبل الوصول</strong> – احجز بثقة وراحة بال.</li>
    <li><strong>مقاعد أطفال مجانية للمركبات الخاصة بـ 8 و 9 مقاعد</strong> – لضمان سلامة العائلات.</li>
    <li><strong>دعم العملاء 24/7</strong> – متاح دائمًا لمساعدتك أثناء رحلتك.</li>
    <li><strong>حلول سفر الشركات</strong> – خدمات نقل موثوقة للمسافرين من رجال الأعمال.</li>
    <li><strong>مركبات فاخرة ونظيفة ومُصانة جيدًا</strong> – استمتع برحلة مريحة إلى وجهتك.</li>
</ul>

<h2>احجز سيارة الأجرة من مطار غازي باشا-ألانيا الآن</h2>

<p>
    تجنب عناء البحث عن سيارة أجرة عند وصولك إلى <strong>مطار غازي باشا-ألانيا (GZP)</strong>.  
    احجز <strong>خدمة النقل الخاصة</strong> مسبقًا وتمتع برحلة مريحة وخالية من المتاعب.<br>  
    سواء كنت متجهًا إلى <strong>شواطئ ألانيا،  
    أو الملاذ الهادئ في أنامور، أو مدينة محمودلار النابضة بالحياة</strong>،  
    فإننا نوفر لك خدمة نقل بأسعار معقولة وموثوقة.
</p>

<ul>
    <li><strong>حجز فوري عبر الإنترنت</strong></li>
    <li><strong>دفع آمن</strong> (نقبل اليورو، الجنيه الإسترليني، الدولار الأمريكي والليرة التركية)</li>
    <li><strong>بدون رسوم خفية – تسعير شفاف</strong></li>
</ul>

<p>
    هل تحتاج إلى مساعدة؟ تواصل مع <strong>خدمة العملاء المتوفرة 24/7</strong> لضمان تجربة نقل سلسة.
    <a href="/">احجز الآن</a> وسافر براحة وطمأنينة!
</p>

        `,
        es: `
        
        <h1>Precios de Taxi en el Aeropuerto de Gazipaşa-Alanya – Traslados Privados y a Precio Fijo</h1>

<h2>Traslados Confiables y Cómodos desde el Aeropuerto de Gazipaşa-Alanya (GZP)</h2>

<p>
    ¿Viajas a <strong>Alanya, Mahmutlar, Kargicak, Anamur o Avsallar</strong>?  
    APL Transfers ofrece <strong>traslados privados con tarifa fija</strong>  
    desde el <strong>Aeropuerto de Gazipaşa-Alanya (GZP)</strong> a los principales resorts y ciudades  
    a lo largo de la impresionante costa mediterránea. Ya sea que necesites  
    un <strong>sedán, un monovolumen espacioso para cinco pasajeros,  
    un minibús de ocho plazas o un lujoso Mercedes de clase ejecutiva</strong>,  
    garantizamos un traslado cómodo y sin preocupaciones.
</p>

<p>
    Nuestro <strong>servicio de bienvenida en las puertas de llegada</strong> garantiza  
    que tu conductor estará esperándote tan pronto como aterrices.
</p>

<h2>Opciones de Vehículos para Traslados desde el Aeropuerto de Gazipaşa-Alanya</h2>
<ul>
    <li><strong>Vehículo Sedán</strong> – Ideal para viajeros solos y parejas.</li>
    <li><strong>Monovolumen (5 Pasajeros)</strong> – Perfecto para familias y grupos pequeños.</li>
    <li><strong>Minibús de 8 Plazas</strong> – Espacioso y adecuado para grupos grandes con equipaje.</li>
    <li><strong>Vehículos Mercedes de Clase Ejecutiva</strong> – Viajes de lujo para ejecutivos y pasajeros VIP.</li>
</ul>

<h2>Servicio de Bienvenida – ¿Dónde Encontrar a tu Conductor?</h2>
<ul>
    <li><strong>Ubicación:</strong> Al llegar al <strong>Aeropuerto de Gazipaşa-Alanya (GZP)</strong>,  
        tu conductor te estará esperando <strong>en las puertas de llegada</strong>,  
        sosteniendo un cartel con tu nombre para que lo reconozcas fácilmente.</li>
    <li><strong>Sin demoras:</strong> Incluso si tu vuelo llega antes o se retrasa,  
        nuestros conductores monitorean la hora de llegada y ajustan el horario según sea necesario.</li>
    <li><strong>Traslados sin Esperas:</strong> Evita largas filas para tomar un taxi –  
        tu conductor privado te llevará directamente a tu hotel, resort o villa privada.</li>
</ul>

<h2>Destinos Populares para Traslados desde el Aeropuerto de Gazipaşa-Alanya</h2>

<p>Ofrecemos traslados privados desde el <strong>Aeropuerto de Gazipaşa-Alanya (GZP)</strong> a:</p>
<ul>
    <li><strong>Alanya</strong> – Una vibrante ciudad costera famosa por sus playas, vida nocturna  
        y lugares históricos como el Castillo de Alanya.</li>
    <li><strong>Mahmutlar</strong> – Una creciente zona turística conocida por su ambiente relajado y largas playas de arena.</li>
    <li><strong>Kargicak</strong> – Un tranquilo pueblo costero con vistas panorámicas y lujosas villas.</li>
    <li><strong>Anamur</strong> – Un tesoro escondido con playas vírgenes, sitios históricos y un ambiente relajado.</li>
    <li><strong>Avsallar</strong> – Hogar de algunos de los mejores resorts familiares y hermosas playas de arena.</li>
</ul>

<p>
    Ya sea que viajes por <strong>vacaciones en la playa, turismo o negocios</strong>,  
    APL Transfers garantiza un <strong>traslado con tarifa fija y sin complicaciones</strong> hasta tu destino.
</p>

<h2>¿Por Qué Elegir APL Transfers?</h2>
<ul>
    <li><strong>Servicio de Bienvenida en las Puertas de Llegada</strong> – Tu conductor te estará esperando con un cartel con tu nombre.</li>
    <li><strong>Precios Fijos – Sin Costos Ocultos</strong> – Lo que ves es lo que pagas.</li>
    <li><strong>Cancelación Gratuita Hasta 24 Horas Antes de la Llegada</strong> – Reserva con total confianza.</li>
    <li><strong>Asientos para Niños Gratis en Vehículos de 8 y 9 Plazas</strong> – Seguridad para familias sin costo adicional.</li>
    <li><strong>Atención al Cliente 24/7</strong> – Siempre disponible para ayudarte en tu viaje.</li>
    <li><strong>Soluciones para Viajes Corporativos</strong> – Traslados confiables para viajeros de negocios.</li>
    <li><strong>Vehículos de Lujo, Limpios y Bien Mantenidos</strong> – Disfruta de un viaje cómodo a tu destino.</li>
</ul>

<h2>Reserva Ahora tu Taxi en el Aeropuerto de Gazipaşa-Alanya</h2>

<p>
    Evita el estrés de buscar un taxi al llegar al <strong>Aeropuerto de Gazipaşa-Alanya (GZP)</strong>.  
    Reserva con anticipación tu <strong>traslado privado</strong> y disfruta de un viaje sin preocupaciones.<br>  
    Ya sea que te dirijas a <strong>las playas de Alanya,  
    el refugio tranquilo de Anamur o la vibrante ciudad de Mahmutlar</strong>,  
    ofrecemos un servicio de traslado económico y confiable.
</p>

<ul>
    <li><strong>Reserva Online al Instante</strong></li>
    <li><strong>Pago Seguro</strong> (Se aceptan Euros, GBP, Dólares Estadounidenses y Liras Turcas)</li>
    <li><strong>Sin Costos Ocultos – Tarifas Transparentes</strong></li>
</ul>

<p>
    ¿Necesitas ayuda? Contacta con nuestro <strong>soporte al cliente 24/7</strong> para una experiencia de traslado sin inconvenientes.
    <a href="/">Reserva Ahora</a> y viaja con tranquilidad.
</p>
`,
        it: `
        <h1>Prezzi Taxi Aeroporto di Gazipaşa-Alanya – Trasferimenti Privati e a Prezzo Fisso</h1>

<h2>Trasferimenti Affidabili e Confortevoli dall'Aeroporto di Gazipaşa-Alanya (GZP)</h2>

<p>
    Stai viaggiando verso <strong>Alanya, Mahmutlar, Kargicak, Anamur o Avsallar</strong>?  
    APL Transfers offre <strong>trasferimenti privati a prezzo fisso</strong>  
    dall'<strong>Aeroporto di Gazipaşa-Alanya (GZP)</strong> alle principali località turistiche  
    lungo la splendida costa mediterranea. Che tu abbia bisogno di  
    un <strong>berlina, un monovolume spazioso per cinque passeggeri,  
    un minibus a otto posti o un lussuoso Mercedes business-class</strong>,  
    garantiamo un trasferimento comodo e senza stress.
</p>

<p>
    Il nostro <strong>servizio di accoglienza alle porte di arrivo</strong> garantisce  
    che il tuo autista sarà pronto ad accoglierti non appena atterri.
</p>

<h2>Opzioni di Veicoli per i Trasferimenti dall'Aeroporto di Gazipaşa-Alanya</h2>
<ul>
    <li><strong>Berlina</strong> – Ideale per viaggiatori singoli e coppie.</li>
    <li><strong>Monovolume (5 Passeggeri)</strong> – Perfetto per famiglie e piccoli gruppi.</li>
    <li><strong>Minibus a 8 Posti</strong> – Spazioso e ideale per gruppi numerosi con bagagli.</li>
    <li><strong>Veicoli Mercedes Business-Class</strong> – Viaggi di lusso per dirigenti e VIP.</li>
</ul>

<h2>Servizio di Accoglienza – Dove Trovare il Tuo Autista?</h2>
<ul>
    <li><strong>Posizione:</strong> All'arrivo all'<strong>Aeroporto di Gazipaşa-Alanya (GZP)</strong>,  
        il tuo autista ti aspetterà <strong>alle porte di arrivo</strong>,  
        tenendo un cartello con il tuo nome per un facile riconoscimento.</li>
    <li><strong>Nessun Ritardo:</strong> Anche se il tuo volo arriva in anticipo o è in ritardo,  
        i nostri autisti monitorano l'orario di arrivo e si adattano di conseguenza.</li>
    <li><strong>Trasferimenti senza Attese:</strong> Evita lo stress di cercare un taxi –  
        il tuo autista privato sarà pronto a portarti direttamente a destinazione.</li>
</ul>

<h2>Destinazioni Popolari per i Trasferimenti dall'Aeroporto di Gazipaşa-Alanya</h2>

<p>Forniamo trasferimenti privati dall'<strong>Aeroporto di Gazipaşa-Alanya (GZP)</strong> a:</p>
<ul>
    <li><strong>Alanya</strong> – Una vivace città costiera famosa per le sue spiagge,  
        la vita notturna e i suoi monumenti storici come il Castello di Alanya.</li>
    <li><strong>Mahmutlar</strong> – Un'area turistica emergente nota per la sua atmosfera rilassata  
        e le sue lunghe spiagge sabbiose.</li>
    <li><strong>Kargicak</strong> – Un tranquillo villaggio costiero con viste panoramiche  
        e ville di lusso.</li>
    <li><strong>Anamur</strong> – Un gioiello nascosto con spiagge incontaminate,  
        siti storici e un'atmosfera rilassata.</li>
    <li><strong>Avsallar</strong> – Sede di alcuni dei migliori resort per famiglie  
        e di splendide spiagge sabbiose.</li>
</ul>

<p>
    Che tu stia viaggiando per <strong>una vacanza al mare, un tour turistico o un viaggio di lavoro</strong>,  
    APL Transfers offre <strong>trasferimenti a prezzo fisso e senza stress</strong> fino alla tua destinazione.
</p>

<h2>Perché Scegliere APL Transfers?</h2>
<ul>
    <li><strong>Accoglienza alle Porte di Arrivo</strong> – Il tuo autista ti attenderà con un cartello con il tuo nome.</li>
    <li><strong>Prezzi Fissi – Nessun Costo Nascosto</strong> – Paghi solo quello che vedi.</li>
    <li><strong>Cancellazione Gratuita fino a 24 Ore Prima dell'Arrivo</strong> – Prenotazione flessibile e sicura.</li>
    <li><strong>Seggiolini per Bambini Gratuiti per Veicoli Privati a 8 e 9 Posti</strong> – Sicurezza per le famiglie senza costi aggiuntivi.</li>
    <li><strong>Supporto Clienti 24/7</strong> – Sempre disponibile per assisterti nel tuo viaggio.</li>
    <li><strong>Soluzioni per Viaggi Aziendali</strong> – Trasferimenti affidabili per professionisti.</li>
    <li><strong>Veicoli di Lusso, Puliti e Ben Manutenuti</strong> – Viaggia in totale comfort fino alla tua destinazione.</li>
</ul>

<h2>Prenota Ora il Tuo Taxi dall'Aeroporto di Gazipaşa-Alanya</h2>

<p>
    Evita lo stress di cercare un taxi all'arrivo all'<strong>Aeroporto di Gazipaşa-Alanya (GZP)</strong>.  
    Prenota in anticipo il tuo <strong>trasferimento privato</strong> e goditi un viaggio senza pensieri.<br>  
    Che tu stia andando alle <strong>spiagge di Alanya,  
    al tranquillo rifugio di Anamur o alla vivace città di Mahmutlar</strong>,  
    offriamo un servizio di trasferimento economico e affidabile.
</p>

<ul>
    <li><strong>Prenotazione Online Immediata</strong></li>
    <li><strong>Pagamento Sicuro</strong> (Accettati Euro, GBP, Dollari USA e Lira Turca)</li>
    <li><strong>Nessun Costo Nascosto – Prezzi Trasparenti</strong></li>
</ul>

<p>
    Hai bisogno di aiuto? Contatta il nostro <strong>supporto clienti 24/7</strong> per assistenza.
    <a href="/">Prenota Ora</a> e viaggia con tranquillità.
</p>

        `,
        ru: `
        <h1>Цены на такси в аэропорту Газипаша-Аланья – Частные и фиксированные трансферы</h1>

<h2>Надежные и комфортные трансферы из аэропорта Газипаша-Аланья (GZP)</h2>

<p>
    Путешествуете в <strong>Аланью, Махмутлар, Каргыджак, Анамур или Авсаллар</strong>?  
    APL Transfers предлагает <strong>частные трансферы по фиксированной цене</strong>  
    из <strong>аэропорта Газипаша-Аланья (GZP)</strong> в популярные курорты и города  
    вдоль живописного Средиземного побережья. Независимо от того, нужен ли вам  
    <strong>седан, просторный минивэн на пять пассажиров,  
    микроавтобус на восемь мест или роскошный автомобиль Mercedes бизнес-класса</strong>,  
    мы обеспечим вам комфортный и беззаботный трансфер.
</p>

<p>
    <strong>Услуга встречи у выходов из зоны прилета</strong> гарантирует,  
    что ваш водитель будет ждать вас сразу после посадки.
</p>

<h2>Варианты транспорта для трансфера из аэропорта Газипаша-Аланья</h2>
<ul>
    <li><strong>Седан</strong> – Идеально для индивидуальных путешественников и пар.</li>
    <li><strong>Минивэн (5 пассажиров)</strong> – Отличный вариант для семей и небольших групп.</li>
    <li><strong>Микроавтобус на 8 мест</strong> – Просторный и удобный вариант для больших групп с багажом.</li>
    <li><strong>Автомобили Mercedes бизнес-класса</strong> – Премиальный комфорт для деловых поездок и VIP-гостей.</li>
</ul>

<h2>Где найти вашего водителя?</h2>
<ul>
    <li><strong>Местоположение:</strong> По прибытии в <strong>аэропорт Газипаша-Аланья (GZP)</strong>,  
        ваш водитель будет ждать вас <strong>у выходов из зоны прилета</strong>,  
        держа табличку с вашим именем для удобного опознания.</li>
    <li><strong>Отслеживание рейсов:</strong> Даже если ваш рейс прибывает раньше или с опозданием,  
        наши водители отслеживают время прилета и корректируют расписание.</li>
    <li><strong>Быстрый и удобный трансфер:</strong> Вам не нужно стоять в очереди на такси  
        или договариваться о цене – ваш личный водитель отвезет вас прямо в пункт назначения.</li>
</ul>

<h2>Популярные направления для трансфера из аэропорта Газипаша-Аланья</h2>

<p>Мы предоставляем частные трансферы из <strong>аэропорта Газипаша-Аланья (GZP)</strong> в:</p>
<ul>
    <li><strong>Аланья</strong> – Оживленный прибрежный город, известный своими пляжами,  
        ночной жизнью и историческими достопримечательностями, такими как замок Аланьи.</li>
    <li><strong>Махмутлар</strong> – Развивающийся курортный район с расслабляющей атмосферой  
        и длинными песчаными пляжами.</li>
    <li><strong>Каргыджак</strong> – Спокойный прибрежный город с живописными видами  
        и роскошными виллами.</li>
    <li><strong>Анамур</strong> – Скрытая жемчужина с нетронутыми пляжами,  
        историческими местами и расслабляющей атмосферой.</li>
    <li><strong>Авсаллар</strong> – Популярное место с лучшими семейными курортами  
        и прекрасными песчаными пляжами.</li>
</ul>

<p>
    Независимо от цели вашей поездки – <strong>пляжный отдых, экскурсия или деловая поездка</strong>,  
    APL Transfers предлагает <strong>удобный трансфер по фиксированной цене</strong> до вашего пункта назначения.
</p>

<h2>Почему выбирают APL Transfers?</h2>
<ul>
    <li><strong>Встреча у выходов из зоны прилета</strong> – Водитель будет ждать вас с табличкой с вашим именем.</li>
    <li><strong>Фиксированные цены – Без скрытых платежей</strong> – Вы платите ровно столько, сколько указано.</li>
    <li><strong>Бесплатная отмена бронирования за 24 часа до прибытия</strong> – Гибкие условия бронирования без риска.</li>
    <li><strong>Бесплатные детские кресла в автомобилях на 8 и 9 мест</strong> – Дополнительная безопасность для семей.</li>
    <li><strong>Круглосуточная поддержка клиентов</strong> – Мы всегда готовы помочь вам.</li>
    <li><strong>Корпоративные трансферы</strong> – Надежные поездки для деловых клиентов.</li>
    <li><strong>Роскошные, чистые и ухоженные автомобили</strong> – Наслаждайтесь комфортной поездкой.</li>
</ul>

<h2>Забронируйте такси из аэропорта Газипаша-Аланья</h2>

<p>
    Избегайте поисков такси по прилету в <strong>аэропорт Газипаша-Аланья (GZP)</strong>.  
    Забронируйте <strong>частный трансфер</strong> заранее и наслаждайтесь спокойной поездкой.<br>  
    Независимо от того, направляетесь ли вы на <strong>пляжи Аланьи,  
    уединенные места Анамура или оживленный центр Махмутлара</strong>,  
    наши фиксированные тарифы гарантируют вам удобный и надежный трансфер.
</p>

<ul>
    <li><strong>Мгновенное онлайн-бронирование</strong></li>
    <li><strong>Безопасная оплата</strong> (Принимаются евро, фунты стерлингов, доллары США и турецкие лиры)</li>
    <li><strong>Без скрытых платежей – Прозрачные цены</strong></li>
</ul>

<p>
    Нужна помощь? Свяжитесь с нашей <strong>службой поддержки 24/7</strong> для комфортного трансфера.
    <a href="/">Забронировать сейчас</a> и путешествуйте без забот!
</p>

        `,
        zh: `
        <h1>加济帕夏-阿兰亚机场出租车价格 – 私人接送 & 固定价格</h1>

<h2>加济帕夏-阿兰亚机场 (GZP) 可靠 & 舒适的接送服务</h2>

<p>
    计划前往 <strong>阿兰亚 (Alanya)、马赫穆特拉 (Mahmutlar)、卡尔吉贾克 (Kargicak)、阿纳穆尔 (Anamur) 或 阿夫萨拉尔 (Avsallar)</strong>？  
    APL Transfers 提供 <strong>加济帕夏-阿兰亚机场 (GZP) 的固定价格私人机场出租车接送服务</strong>。<br>
    我们为前往地中海沿岸的主要度假胜地和城镇的旅客提供服务。  
    无论您需要 <strong>轿车、可容纳五名乘客的宽敞 MPV、八座小型巴士，还是豪华奔驰商务车</strong>，我们都能为您提供顺畅无忧的接送服务。
</p>

<p>
    我们的 <strong>到达门迎接服务</strong> 确保您的司机将在您降落后立即等候。
</p>

<h2>加济帕夏-阿兰亚机场接送车辆选择</h2>
<ul>
    <li><strong>轿车</strong> – 适合个人和情侣出行。</li>
    <li><strong>MPV（5 人座）</strong> – 适合家庭和小团体。</li>
    <li><strong>8 座小型巴士</strong> – 空间宽敞，适合较大的团队和行李较多的旅客。</li>
    <li><strong>奔驰商务车型</strong> – 为高端商务人士和 VIP 旅客提供尊贵舒适的乘坐体验。</li>
</ul>

<h2>接机服务 – 在哪里找到您的司机？</h2>
<ul>
    <li><strong>位置：</strong> 抵达 <strong>加济帕夏-阿兰亚机场 (GZP)</strong> 后，您的司机将在
        <strong>到达门</strong> 等候，并举着写有您的姓名的接机牌，方便您认出。</li>
    <li><strong>航班追踪：</strong> 即使您的航班提前或延误，我们的司机也会实时跟踪您的抵达时间并相应调整。</li>
    <li><strong>快速便捷：</strong> 无需排队等待出租车或与司机议价，您的私人司机将直接送您到达目的地。</li>
</ul>

<h2>加济帕夏-阿兰亚机场接送热门目的地</h2>

<p>我们提供从 <strong>加济帕夏-阿兰亚机场 (GZP)</strong> 出发的私人接送服务：</p>
<ul>
    <li><strong>阿兰亚 (Alanya)</strong> – 充满活力的海滨城市，因其美丽的海滩、夜生活和历史地标（如阿兰亚城堡）而闻名。</li>
    <li><strong>马赫穆特拉 (Mahmutlar)</strong> – 发展中的度假区，以其悠闲的氛围和绵长的沙滩而闻名。</li>
    <li><strong>卡尔吉贾克 (Kargicak)</strong> – 风景如画的海滨小镇，拥有豪华别墅和迷人景色。</li>
    <li><strong>阿纳穆尔 (Anamur)</strong> – 隐藏的瑰宝，拥有原始海滩、历史遗迹和宁静的氛围。</li>
    <li><strong>阿夫萨拉尔 (Avsallar)</strong> – 家庭友好型度假村所在地，拥有美丽的沙滩。</li>
</ul>

<p>
    无论您是为了 <strong>度假、观光还是商务出行</strong>，  
    APL Transfers 都能确保您享受 <strong>舒适且价格透明的接送服务</strong>。
</p>

<h2>为什么选择 APL Transfers？</h2>
<ul>
    <li><strong>到达门迎接服务</strong> – 司机将在到达门举牌等候，方便识别。</li>
    <li><strong>固定价格 – 无隐藏费用</strong> – 透明定价，无额外收费。</li>
    <li><strong>支持 24 小时前免费取消</strong> – 预订灵活，无后顾之忧。</li>
    <li><strong>8 座和 9 座私人车辆提供免费儿童座椅</strong> – 确保家庭旅客的安全。</li>
    <li><strong>24/7 客户支持</strong> – 随时提供帮助。</li>
    <li><strong>企业差旅解决方案</strong> – 提供可靠的商务接送服务。</li>
    <li><strong>豪华、干净且维护良好的车辆</strong> – 享受高品质的舒适旅行体验。</li>
</ul>

<h2>立即预订加济帕夏-阿兰亚机场出租车</h2>

<p>
    抵达 <strong>加济帕夏-阿兰亚机场 (GZP)</strong> 后无需费心寻找出租车。提前预订
    <strong>私人机场接送服务</strong>，享受轻松无忧的旅程。<br>
    无论您前往 <strong>阿兰亚的海滩、  
    阿纳穆尔的宁静度假胜地，还是马赫穆特拉的繁华城镇</strong>，  
    我们提供经济实惠且可靠的接送服务。
</p>

<ul>
    <li><strong>即时在线预订</strong></li>
    <li><strong>安全支付</strong>（支持欧元 (EUR)、英镑 (GBP)、美元 (USD) 和土耳其里拉 (TRY)）</li>
    <li><strong>无隐藏费用 – 透明定价</strong></li>
</ul>

<p>
    需要帮助？请联系 <strong>24/7 客户支持</strong>，确保您拥有顺畅的接送体验。
    <a href="/">立即预订</a>，享受安心之旅！
</p>

        `,
    },
}

//*****************************************
//*****************************************

/**
 * Retrieves the single airport schema for the given pathname and language.
 * If the schema is not found for the given pathname and language, it returns `null`.
 *
 * @param {string} pathname - The pathname to look up the airport schema for.
 * @param {string} language - The language to retrieve the airport schema for.
 * @returns {object|null} The single airport schema, or `null` if not found.
 */
export const getSingleAirportSchemaByPathname = (pathname, language) => {
    return singleAirportSchema[pathname]?.[language] || null; // ✅ Returns `null` instead of `undefined`
};
const singleAirportSchema = {
    "/istanbul-airport-taxi-prices": {
        en: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Where will my driver meet me at Istanbul Airport?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your driver will meet you by our APL Transfers office in the Arrival Hall at Istanbul Airport, holding a name board for easy identification."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are the taxi prices from Istanbul Airport fixed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, all our taxi prices are fixed with no hidden charges, providing transparent and competitive rates."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer free cancellations for Istanbul Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you can cancel your booking free of charge up to 24 hours before arrival."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What payment methods do you accept?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We accept payments in Euro, GBP, US Dollar, and Turkish Lira via secure online payment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide child seats for Istanbul Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer free child seats for 8 and 9-seater private vehicles to ensure safety for families."
                    }
                }
            ]
        },
        tr: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Sürücüm beni İstanbul Havalimanı'nda nerede karşılayacak?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sürücünüz sizi İstanbul Havalimanı Geliş Salonu'ndaki APL Transfers ofisimizde karşılayacak ve kolay tanınmanız için bir isim tabelası tutacaktır."
                    }
                },
                {
                    "@type": "Question",
                    "name": "İstanbul Havalimanı'ndan taksi ücretleri sabit mi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, tüm taksi fiyatlarımız sabittir ve gizli ücret yoktur, şeffaf ve rekabetçi fiyatlar sunarız."
                    }
                },
                {
                    "@type": "Question",
                    "name": "İstanbul Havalimanı transferleri için ücretsiz iptal seçeneği sunuyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, rezervasyonunuzu varıştan 24 saat öncesine kadar ücretsiz iptal edebilirsiniz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ödemeleri Euro, GBP, ABD Doları ve Türk Lirası cinsinden güvenli çevrimiçi ödeme yöntemiyle kabul ediyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "İstanbul Havalimanı transferleri için çocuk koltuğu sağlıyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, ailelerin güvenliği için 8 ve 9 kişilik özel araçlarımızda ücretsiz çocuk koltuğu sunuyoruz."
                    }
                }
            ]
        }
        ,
        ar: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "أين سيلتقيني السائق في مطار إسطنبول؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "سيلتقي بك سائقك في مكتب APL Transfers في صالة الوصول بمطار إسطنبول، وهو يحمل لافتة تحمل اسمك لسهولة التعرف عليه."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل أسعار سيارات الأجرة من مطار إسطنبول ثابتة؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، جميع أسعار سيارات الأجرة لدينا ثابتة بدون أي رسوم مخفية، مما يضمن أسعار شفافة وتنافسية."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل تقدمون إلغاء مجاني لخدمات النقل من مطار إسطنبول؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، يمكنك إلغاء حجزك مجانًا حتى 24 ساعة قبل الوصول."
                    }
                },
                {
                    "@type": "Question",
                    "name": "ما هي طرق الدفع التي تقبلونها؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نحن نقبل المدفوعات باليورو والجنيه الإسترليني والدولار الأمريكي والليرة التركية من خلال الدفع الآمن عبر الإنترنت."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل توفرون مقاعد للأطفال في خدمات النقل من مطار إسطنبول؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، نقدم مقاعد مجانية للأطفال في المركبات الخاصة التي تتسع لـ 8 و9 ركاب لضمان سلامة العائلات."
                    }
                }
            ]
        }
        ,
        es: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "¿Dónde me encontrará mi conductor en el Aeropuerto de Estambul?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Su conductor lo recibirá en nuestra oficina de APL Transfers en la sala de llegadas del Aeropuerto de Estambul, sosteniendo un cartel con su nombre para una fácil identificación."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Los precios de los taxis desde el Aeropuerto de Estambul son fijos?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, todos nuestros precios de taxi son fijos y no tienen cargos ocultos, ofreciendo tarifas transparentes y competitivas."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Ofrecen cancelaciones gratuitas para los traslados desde el Aeropuerto de Estambul?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, puede cancelar su reserva sin costo hasta 24 horas antes de la llegada."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Qué métodos de pago aceptan?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aceptamos pagos en euros, libras esterlinas, dólares estadounidenses y liras turcas a través de un pago seguro en línea."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Proporcionan asientos para niños en los traslados desde el Aeropuerto de Estambul?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, ofrecemos asientos para niños gratuitos en vehículos privados de 8 y 9 plazas para garantizar la seguridad de las familias."
                    }
                }
            ]
        }
        ,
        it: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Dove mi incontrerà il mio autista all'Aeroporto di Istanbul?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Il tuo autista ti aspetterà presso il nostro ufficio APL Transfers nella sala arrivi dell'Aeroporto di Istanbul, tenendo un cartello con il tuo nome per un facile riconoscimento."
                    }
                },
                {
                    "@type": "Question",
                    "name": "I prezzi dei taxi dall'Aeroporto di Istanbul sono fissi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, tutti i nostri prezzi per i taxi sono fissi e senza costi nascosti, offrendo tariffe trasparenti e competitive."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Offrite cancellazioni gratuite per i trasferimenti dall'Aeroporto di Istanbul?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, puoi cancellare la tua prenotazione gratuitamente fino a 24 ore prima dell'arrivo."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quali metodi di pagamento accettate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Accettiamo pagamenti in Euro, Sterline britanniche, Dollari americani e Lire turche tramite pagamento online sicuro."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Fornite seggiolini per bambini nei trasferimenti dall'Aeroporto di Istanbul?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, offriamo seggiolini per bambini gratuiti nei veicoli privati da 8 e 9 posti per garantire la sicurezza delle famiglie."
                    }
                }
            ]
        }
        ,
        ru: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Где меня встретит водитель в аэропорту Стамбула?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ваш водитель встретит вас в нашем офисе APL Transfers в зале прибытия аэропорта Стамбула, держа табличку с вашим именем для удобного опознания."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Являются ли тарифы на такси из аэропорта Стамбула фиксированными?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, все наши тарифы на такси фиксированы, без скрытых платежей, обеспечивая прозрачные и конкурентоспособные цены."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы бесплатную отмену бронирования для трансферов из аэропорта Стамбула?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, вы можете отменить свое бронирование бесплатно за 24 часа до прибытия."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Какие способы оплаты вы принимаете?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Мы принимаем платежи в евро, фунтах стерлингов, долларах США и турецких лирах через безопасный онлайн-платеж."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы детские сиденья для трансферов из аэропорта Стамбула?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, мы предоставляем бесплатные детские сиденья в частных автомобилях на 8 и 9 мест для обеспечения безопасности семей."
                    }
                }
            ]
        }
        ,
        zh: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "我的司机会在伊斯坦布尔机场哪里接我？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "您的司机将在伊斯坦布尔机场抵达大厅的 APL Transfers 办公室接您，并举着带有您姓名的牌子，方便识别。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "从伊斯坦布尔机场出发的出租车价格是固定的吗？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们所有的出租车价格都是固定的，没有隐藏费用，提供透明且具有竞争力的价格。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您提供伊斯坦布尔机场接送的免费取消服务吗？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，您可以在抵达前 24 小时免费取消您的预订。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您接受哪些付款方式？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "我们接受欧元、英镑、美元和土耳其里拉的在线安全支付。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您是否为伊斯坦布尔机场接送提供儿童座椅？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们为 8 座和 9 座的私人车辆免费提供儿童座椅，以确保家庭旅客的安全。"
                    }
                }
            ]
        }
    },
    "/sabiha-gokcen-airport-taxi-prices": {
        en: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Where will my driver meet me at Sabiha Gökçen Airport?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your driver will be waiting at Column 13, located at the end of the pedestrian crossing, holding a passenger name board."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are the taxi prices from Sabiha Gökçen Airport fixed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, all our taxi prices are fixed with no hidden charges, providing transparent and competitive rates."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer free cancellations for Sabiha Gökçen Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you can cancel your booking free of charge up to 24 hours before arrival."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What payment methods do you accept?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We accept payments in Euro, GBP, US Dollar, and Turkish Lira via secure online payment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide child seats for Sabiha Gökçen Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer free child seats for 8 and 9-seater private vehicles to ensure safety for families."
                    }
                }
            ]
        },
        tr: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Sürücüm beni Sabiha Gökçen Havalimanı'nda nerede karşılayacak?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sürücünüz, yaya geçidinin sonunda bulunan 13. Kolonun yanında sizi bekliyor olacak ve üzerinde isminiz yazılı bir tabela tutacaktır."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Sabiha Gökçen Havalimanı'ndan taksi ücretleri sabit mi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, tüm taksi fiyatlarımız sabittir ve gizli ücret bulunmamaktadır, şeffaf ve rekabetçi fiyatlar sunuyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Sabiha Gökçen Havalimanı transferleri için ücretsiz iptal seçeneği sunuyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, rezervasyonunuzu varıştan 24 saat öncesine kadar ücretsiz iptal edebilirsiniz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ödemeleri Euro, GBP, ABD Doları ve Türk Lirası cinsinden güvenli çevrimiçi ödeme yöntemiyle kabul ediyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Sabiha Gökçen Havalimanı transferleri için çocuk koltuğu sağlıyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, ailelerin güvenliği için 8 ve 9 kişilik özel araçlarımızda ücretsiz çocuk koltuğu sunuyoruz."
                    }
                }
            ]
        },
        ru: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Где меня встретит водитель в аэропорту Сабиха Гёкчен?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ваш водитель будет ждать вас у Колонны 13, расположенной в конце пешеходного перехода, держа табличку с вашим именем."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Фиксированные ли цены на такси из аэропорта Сабиха Гёкчен?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, все наши цены на такси фиксированы, без скрытых платежей, обеспечивая прозрачные и конкурентоспособные тарифы."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы бесплатную отмену бронирования для трансферов из аэропорта Сабиха Гёкчен?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, вы можете отменить свое бронирование бесплатно за 24 часа до прибытия."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Какие способы оплаты вы принимаете?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Мы принимаем платежи в евро, фунтах стерлингов, долларах США и турецких лирах через безопасный онлайн-платеж."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы детские сиденья для трансферов из аэропорта Сабиха Гёкчен?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, мы предоставляем бесплатные детские сиденья в частных автомобилях на 8 и 9 мест для обеспечения безопасности семей."
                    }
                }
            ]
        }
        ,
        zh: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "我的司机会在萨比哈·格克琴机场哪里接我？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "您的司机将在人行横道尽头的13号柱附近等待，并举着写有您姓名的接机牌。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "萨比哈·格克琴机场的出租车价格是固定的吗？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们所有的出租车价格都是固定的，没有隐藏费用，提供透明且具有竞争力的价格。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您是否提供萨比哈·格克琴机场接送的免费取消服务？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，您可以在抵达前 24 小时免费取消您的预订。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您接受哪些付款方式？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "我们接受欧元、英镑、美元和土耳其里拉的在线安全支付。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您是否为萨比哈·格克琴机场接送提供儿童座椅？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们为 8 座和 9 座的私人车辆免费提供儿童座椅，以确保家庭旅客的安全。"
                    }
                }
            ]
        }
        ,
        es: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "¿Dónde me encontrará mi conductor en el Aeropuerto de Sabiha Gökçen?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Su conductor lo estará esperando en la Columna 13, ubicada al final del paso de peatones, sosteniendo un cartel con su nombre."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Los precios de los taxis desde el Aeropuerto de Sabiha Gökçen son fijos?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, todos nuestros precios de taxi son fijos y no tienen cargos ocultos, ofreciendo tarifas transparentes y competitivas."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Ofrecen cancelaciones gratuitas para los traslados desde el Aeropuerto de Sabiha Gökçen?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, puede cancelar su reserva sin costo hasta 24 horas antes de la llegada."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Qué métodos de pago aceptan?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aceptamos pagos en euros, libras esterlinas, dólares estadounidenses y liras turcas a través de un pago seguro en línea."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Proporcionan asientos para niños en los traslados desde el Aeropuerto de Sabiha Gökçen?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, ofrecemos asientos para niños gratuitos en vehículos privados de 8 y 9 plazas para garantizar la seguridad de las familias."
                    }
                }
            ]
        }
        ,
        it: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Dove mi incontrerà il mio autista all'Aeroporto di Sabiha Gökçen?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Il tuo autista ti aspetterà alla Colonna 13, situata alla fine del passaggio pedonale, tenendo un cartello con il tuo nome."
                    }
                },
                {
                    "@type": "Question",
                    "name": "I prezzi dei taxi dall'Aeroporto di Sabiha Gökçen sono fissi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, tutti i nostri prezzi per i taxi sono fissi e senza costi nascosti, offrendo tariffe trasparenti e competitive."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Offrite cancellazioni gratuite per i trasferimenti dall'Aeroporto di Sabiha Gökçen?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, puoi cancellare la tua prenotazione gratuitamente fino a 24 ore prima dell'arrivo."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quali metodi di pagamento accettate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Accettiamo pagamenti in Euro, Sterline britanniche, Dollari americani e Lire turche tramite pagamento online sicuro."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Fornite seggiolini per bambini nei trasferimenti dall'Aeroporto di Sabiha Gökçen?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, offriamo seggiolini per bambini gratuiti nei veicoli privati da 8 e 9 posti per garantire la sicurezza delle famiglie."
                    }
                }
            ]
        }
        ,
        ar: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "أين سيلتقيني السائق في مطار صبيحة كوكجن؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "سينتظرك سائقك عند العمود رقم 13، الواقع في نهاية ممر المشاة، حاملًا لافتة تحمل اسمك."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل أسعار سيارات الأجرة من مطار صبيحة كوكجن ثابتة؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، جميع أسعار سيارات الأجرة لدينا ثابتة بدون أي رسوم مخفية، مما يضمن أسعار شفافة وتنافسية."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل تقدمون إلغاء مجاني لخدمات النقل من مطار صبيحة كوكجن؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، يمكنك إلغاء حجزك مجانًا حتى 24 ساعة قبل الوصول."
                    }
                },
                {
                    "@type": "Question",
                    "name": "ما هي طرق الدفع التي تقبلونها؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نحن نقبل المدفوعات باليورو والجنيه الإسترليني والدولار الأمريكي والليرة التركية من خلال الدفع الآمن عبر الإنترنت."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل توفرون مقاعد للأطفال في خدمات النقل من مطار صبيحة كوكجن؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، نقدم مقاعد مجانية للأطفال في المركبات الخاصة التي تتسع لـ 8 و9 ركاب لضمان سلامة العائلات."
                    }
                }
            ]
        }

    },
    "/dalaman-airport-taxi-prices": {
        en: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Where will my driver meet me at Dalaman Airport?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your driver will meet you by the arrival gates at Dalaman Airport (DLM), holding a passenger name board for easy identification."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are the taxi prices from Dalaman Airport fixed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, all our taxi prices are fixed with no hidden charges, ensuring transparent and competitive rates."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer free cancellations for Dalaman Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you can cancel your booking free of charge up to 24 hours before arrival."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What payment methods do you accept?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We accept payments in Euro, GBP, US Dollar, and Turkish Lira via secure online payment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide child seats for Dalaman Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer free child seats for 8 and 9-seater private vehicles to ensure safety for families."
                    }
                }
            ]
        }
        ,
        tr: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Sürücüm beni Dalaman Havalimanı'nda nerede karşılayacak?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sürücünüz sizi Dalaman Havalimanı (DLM) geliş kapılarında, üzerinde adınızın yazılı olduğu bir tabela ile karşılayacaktır."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Dalaman Havalimanı'ndan taksi ücretleri sabit mi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, tüm taksi fiyatlarımız sabittir ve gizli ücretler yoktur, şeffaf ve rekabetçi fiyatlar sunuyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Dalaman Havalimanı transferleri için ücretsiz iptal seçeneği sunuyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, rezervasyonunuzu varıştan 24 saat öncesine kadar ücretsiz iptal edebilirsiniz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ödemeleri Euro, GBP, ABD Doları ve Türk Lirası cinsinden güvenli çevrimiçi ödeme yöntemiyle kabul ediyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Dalaman Havalimanı transferleri için çocuk koltuğu sağlıyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, ailelerin güvenliği için 8 ve 9 kişilik özel araçlarımızda ücretsiz çocuk koltuğu sunuyoruz."
                    }
                }
            ]
        }
        ,
        ru: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Где меня встретит водитель в аэропорту Даламан?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ваш водитель встретит вас у выхода для прибывающих пассажиров в аэропорту Даламан (DLM), держа табличку с вашим именем для удобного опознания."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Фиксированные ли цены на такси из аэропорта Даламан?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, все наши цены на такси фиксированы, без скрытых платежей, обеспечивая прозрачные и конкурентоспособные тарифы."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы бесплатную отмену бронирования для трансферов из аэропорта Даламан?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, вы можете отменить свое бронирование бесплатно за 24 часа до прибытия."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Какие способы оплаты вы принимаете?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Мы принимаем платежи в евро, фунтах стерлингов, долларах США и турецких лирах через безопасный онлайн-платеж."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы детские сиденья для трансферов из аэропорта Даламан?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, мы предоставляем бесплатные детские сиденья в частных автомобилях на 8 и 9 мест для обеспечения безопасности семей."
                    }
                }
            ]
        }
        ,
        es: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "¿Dónde me encontrará mi conductor en el Aeropuerto de Dalaman?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Su conductor lo recibirá en las puertas de llegada del Aeropuerto de Dalaman (DLM), sosteniendo un cartel con su nombre para una fácil identificación."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Los precios de los taxis desde el Aeropuerto de Dalaman son fijos?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, todos nuestros precios de taxi son fijos y no tienen cargos ocultos, ofreciendo tarifas transparentes y competitivas."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Ofrecen cancelaciones gratuitas para los traslados desde el Aeropuerto de Dalaman?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, puede cancelar su reserva sin costo hasta 24 horas antes de la llegada."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Qué métodos de pago aceptan?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aceptamos pagos en euros, libras esterlinas, dólares estadounidenses y liras turcas a través de un pago seguro en línea."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Proporcionan asientos para niños en los traslados desde el Aeropuerto de Dalaman?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, ofrecemos asientos para niños gratuitos en vehículos privados de 8 y 9 plazas para garantizar la seguridad de las familias."
                    }
                }
            ]
        }
        ,
        it: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Dove mi incontrerà il mio autista all'Aeroporto di Dalaman?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Il tuo autista ti aspetterà ai cancelli di arrivo dell'Aeroporto di Dalaman (DLM), tenendo un cartello con il tuo nome per un facile riconoscimento."
                    }
                },
                {
                    "@type": "Question",
                    "name": "I prezzi dei taxi dall'Aeroporto di Dalaman sono fissi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, tutti i nostri prezzi per i taxi sono fissi e senza costi nascosti, offrendo tariffe trasparenti e competitive."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Offrite cancellazioni gratuite per i trasferimenti dall'Aeroporto di Dalaman?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, puoi cancellare la tua prenotazione gratuitamente fino a 24 ore prima dell'arrivo."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quali metodi di pagamento accettate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Accettiamo pagamenti in Euro, Sterline britanniche, Dollari americani e Lire turche tramite pagamento online sicuro."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Fornite seggiolini per bambini nei trasferimenti dall'Aeroporto di Dalaman?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, offriamo seggiolini per bambini gratuiti nei veicoli privati da 8 e 9 posti per garantire la sicurezza delle famiglie."
                    }
                }
            ]
        }
        ,
        ar: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "أين سيلتقيني السائق في مطار دالامان؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "سينتظرك سائقك عند بوابات الوصول في مطار دالامان (DLM)، حاملًا لافتة تحمل اسمك لسهولة التعرف عليه."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل أسعار سيارات الأجرة من مطار دالامان ثابتة؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، جميع أسعار سيارات الأجرة لدينا ثابتة بدون أي رسوم مخفية، مما يضمن أسعار شفافة وتنافسية."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل تقدمون إلغاء مجاني لخدمات النقل من مطار دالامان؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، يمكنك إلغاء حجزك مجانًا حتى 24 ساعة قبل الوصول."
                    }
                },
                {
                    "@type": "Question",
                    "name": "ما هي طرق الدفع التي تقبلونها؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نحن نقبل المدفوعات باليورو والجنيه الإسترليني والدولار الأمريكي والليرة التركية من خلال الدفع الآمن عبر الإنترنت."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل توفرون مقاعد للأطفال في خدمات النقل من مطار دالامان؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، نقدم مقاعد مجانية للأطفال في المركبات الخاصة التي تتسع لـ 8 و9 ركاب لضمان سلامة العائلات."
                    }
                }
            ]
        }
        ,
        zh: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "我的司机会在达拉曼机场哪里接我？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "您的司机将在达拉曼机场 (DLM) 到达门口等候，并举着写有您姓名的接机牌，以便识别。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "从达拉曼机场出发的出租车价格是固定的吗？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们所有的出租车价格都是固定的，没有隐藏费用，提供透明且具有竞争力的价格。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您提供达拉曼机场接送的免费取消服务吗？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，您可以在抵达前 24 小时免费取消您的预订。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您接受哪些付款方式？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "我们接受欧元、英镑、美元和土耳其里拉的在线安全支付。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您是否为达拉曼机场接送提供儿童座椅？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们为 8 座和 9 座的私人车辆免费提供儿童座椅，以确保家庭旅客的安全。"
                    }
                }
            ]
        }

    },
    "/antalya-airport-taxi-prices": {
        en: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Where will my driver meet me at Antalya Airport?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your driver will meet you by the arrival gates at Antalya Airport (AYT), holding a passenger name board for easy identification."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are the taxi prices from Antalya Airport fixed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, all our taxi prices are fixed with no hidden charges, ensuring transparent and competitive rates."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer free cancellations for Antalya Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you can cancel your booking free of charge up to 24 hours before arrival."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What payment methods do you accept?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We accept payments in Euro, GBP, US Dollar, and Turkish Lira via secure online payment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide child seats for Antalya Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer free child seats for 8 and 9-seater private vehicles to ensure safety for families."
                    }
                }
            ]
        }
        ,
        tr: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Sürücüm beni Antalya Havalimanı'nda nerede karşılayacak?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sürücünüz sizi Antalya Havalimanı (AYT) geliş kapılarında, üzerinde adınızın yazılı olduğu bir tabela ile karşılayacaktır."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Antalya Havalimanı'ndan taksi ücretleri sabit mi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, tüm taksi fiyatlarımız sabittir ve gizli ücretler yoktur, şeffaf ve rekabetçi fiyatlar sunuyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Antalya Havalimanı transferleri için ücretsiz iptal seçeneği sunuyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, rezervasyonunuzu varıştan 24 saat öncesine kadar ücretsiz iptal edebilirsiniz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ödemeleri Euro, GBP, ABD Doları ve Türk Lirası cinsinden güvenli çevrimiçi ödeme yöntemiyle kabul ediyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Antalya Havalimanı transferleri için çocuk koltuğu sağlıyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, ailelerin güvenliği için 8 ve 9 kişilik özel araçlarımızda ücretsiz çocuk koltuğu sunuyoruz."
                    }
                }
            ]
        }
        ,
        ru: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Где меня встретит водитель в аэропорту Анталии?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ваш водитель встретит вас у выхода для прибывающих пассажиров в аэропорту Анталии (AYT), держа табличку с вашим именем для удобного опознания."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Фиксированные ли цены на такси из аэропорта Анталии?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, все наши цены на такси фиксированы, без скрытых платежей, обеспечивая прозрачные и конкурентоспособные тарифы."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы бесплатную отмену бронирования для трансферов из аэропорта Анталии?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, вы можете отменить свое бронирование бесплатно за 24 часа до прибытия."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Какие способы оплаты вы принимаете?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Мы принимаем платежи в евро, фунтах стерлингов, долларах США и турецких лирах через безопасный онлайн-платеж."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы детские сиденья для трансферов из аэропорта Анталии?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, мы предоставляем бесплатные детские сиденья в частных автомобилях на 8 и 9 мест для обеспечения безопасности семей."
                    }
                }
            ]
        }
        ,
        es: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "¿Dónde me encontrará mi conductor en el Aeropuerto de Antalya?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Su conductor lo recibirá en las puertas de llegada del Aeropuerto de Antalya (AYT), sosteniendo un cartel con su nombre para una fácil identificación."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Los precios de los taxis desde el Aeropuerto de Antalya son fijos?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, todos nuestros precios de taxi son fijos y no tienen cargos ocultos, ofreciendo tarifas transparentes y competitivas."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Ofrecen cancelaciones gratuitas para los traslados desde el Aeropuerto de Antalya?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, puede cancelar su reserva sin costo hasta 24 horas antes de la llegada."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Qué métodos de pago aceptan?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aceptamos pagos en euros, libras esterlinas, dólares estadounidenses y liras turcas a través de un pago seguro en línea."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Proporcionan asientos para niños en los traslados desde el Aeropuerto de Antalya?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, ofrecemos asientos para niños gratuitos en vehículos privados de 8 y 9 plazas para garantizar la seguridad de las familias."
                    }
                }
            ]
        }
        ,
        it: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Dove mi incontrerà il mio autista all'Aeroporto di Antalya?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Il tuo autista ti aspetterà ai cancelli di arrivo dell'Aeroporto di Antalya (AYT), tenendo un cartello con il tuo nome per un facile riconoscimento."
                    }
                },
                {
                    "@type": "Question",
                    "name": "I prezzi dei taxi dall'Aeroporto di Antalya sono fissi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, tutti i nostri prezzi per i taxi sono fissi e senza costi nascosti, offrendo tariffe trasparenti e competitive."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Offrite cancellazioni gratuite per i trasferimenti dall'Aeroporto di Antalya?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, puoi cancellare la tua prenotazione gratuitamente fino a 24 ore prima dell'arrivo."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quali metodi di pagamento accettate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Accettiamo pagamenti in Euro, Sterline britanniche, Dollari americani e Lire turche tramite pagamento online sicuro."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Fornite seggiolini per bambini nei trasferimenti dall'Aeroporto di Antalya?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, offriamo seggiolini per bambini gratuiti nei veicoli privati da 8 e 9 posti per garantire la sicurezza delle famiglie."
                    }
                }
            ]
        }
        ,
        ar: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "أين سيلتقيني السائق في مطار أنطاليا؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "سينتظرك سائقك عند بوابات الوصول في مطار أنطاليا (AYT)، حاملًا لافتة تحمل اسمك لسهولة التعرف عليه."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل أسعار سيارات الأجرة من مطار أنطاليا ثابتة؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، جميع أسعار سيارات الأجرة لدينا ثابتة بدون أي رسوم مخفية، مما يضمن أسعار شفافة وتنافسية."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل تقدمون إلغاء مجاني لخدمات النقل من مطار أنطاليا؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، يمكنك إلغاء حجزك مجانًا حتى 24 ساعة قبل الوصول."
                    }
                },
                {
                    "@type": "Question",
                    "name": "ما هي طرق الدفع التي تقبلونها؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نحن نقبل المدفوعات باليورو والجنيه الإسترليني والدولار الأمريكي والليرة التركية من خلال الدفع الآمن عبر الإنترنت."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل توفرون مقاعد للأطفال في خدمات النقل من مطار أنطاليا؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، نقدم مقاعد مجانية للأطفال في المركبات الخاصة التي تتسع لـ 8 و9 ركاب لضمان سلامة العائلات."
                    }
                }
            ]
        }
        ,
        zh: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "我的司机会在安塔利亚机场哪里接我？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "您的司机将在安塔利亚机场 (AYT) 到达门口等候，并举着写有您姓名的接机牌，以便识别。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "从安塔利亚机场出发的出租车价格是固定的吗？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们所有的出租车价格都是固定的，没有隐藏费用，提供透明且具有竞争力的价格。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您提供安塔利亚机场接送的免费取消服务吗？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，您可以在抵达前 24 小时免费取消您的预订。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您接受哪些付款方式？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "我们接受欧元、英镑、美元和土耳其里拉的在线安全支付。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您是否为安塔利亚机场接送提供儿童座椅？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们为 8 座和 9 座的私人车辆免费提供儿童座椅，以确保家庭旅客的安全。"
                    }
                }
            ]
        }

    },
    "/bodrum-milas-airport-taxi-prices": {
        en: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Where will my driver meet me at Bodrum Milas Airport?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your driver will meet you by the arrival gates at Bodrum Milas Airport (BJV), holding a passenger name board for easy identification."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are the taxi prices from Bodrum Milas Airport fixed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, all our taxi prices are fixed with no hidden charges, ensuring transparent and competitive rates."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer free cancellations for Bodrum Milas Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you can cancel your booking free of charge up to 24 hours before arrival."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What payment methods do you accept?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We accept payments in Euro, GBP, US Dollar, and Turkish Lira via secure online payment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide child seats for Bodrum Milas Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer free child seats for 8 and 9-seater private vehicles to ensure safety for families."
                    }
                }
            ]
        }
        ,
        tr: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Sürücüm beni Bodrum Milas Havalimanı'nda nerede karşılayacak?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sürücünüz sizi Bodrum Milas Havalimanı (BJV) geliş kapılarında, üzerinde adınızın yazılı olduğu bir tabela ile karşılayacaktır."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Bodrum Milas Havalimanı'ndan taksi ücretleri sabit mi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, tüm taksi fiyatlarımız sabittir ve gizli ücretler yoktur, şeffaf ve rekabetçi fiyatlar sunuyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Bodrum Milas Havalimanı transferleri için ücretsiz iptal seçeneği sunuyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, rezervasyonunuzu varıştan 24 saat öncesine kadar ücretsiz iptal edebilirsiniz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ödemeleri Euro, GBP, ABD Doları ve Türk Lirası cinsinden güvenli çevrimiçi ödeme yöntemiyle kabul ediyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Bodrum Milas Havalimanı transferleri için çocuk koltuğu sağlıyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, ailelerin güvenliği için 8 ve 9 kişilik özel araçlarımızda ücretsiz çocuk koltuğu sunuyoruz."
                    }
                }
            ]
        }
        ,
        ru: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Где меня встретит водитель в аэропорту Бодрум-Милас?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ваш водитель встретит вас у выхода для прибывающих пассажиров в аэропорту Бодрум-Милас (BJV), держа табличку с вашим именем для удобного опознания."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Фиксированные ли цены на такси из аэропорта Бодрум-Милас?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, все наши цены на такси фиксированы, без скрытых платежей, обеспечивая прозрачные и конкурентоспособные тарифы."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы бесплатную отмену бронирования для трансферов из аэропорта Бодрум-Милас?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, вы можете отменить свое бронирование бесплатно за 24 часа до прибытия."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Какие способы оплаты вы принимаете?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Мы принимаем платежи в евро, фунтах стерлингов, долларах США и турецких лирах через безопасный онлайн-платеж."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы детские сиденья для трансферов из аэропорта Бодрум-Милас?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, мы предоставляем бесплатные детские сиденья в частных автомобилях на 8 и 9 мест для обеспечения безопасности семей."
                    }
                }
            ]
        }
        ,
        es: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "¿Dónde me encontrará mi conductor en el Aeropuerto de Bodrum Milas?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Su conductor lo recibirá en las puertas de llegada del Aeropuerto de Bodrum Milas (BJV), sosteniendo un cartel con su nombre para una fácil identificación."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Los precios de los taxis desde el Aeropuerto de Bodrum Milas son fijos?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, todos nuestros precios de taxi son fijos y no tienen cargos ocultos, ofreciendo tarifas transparentes y competitivas."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Ofrecen cancelaciones gratuitas para los traslados desde el Aeropuerto de Bodrum Milas?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, puede cancelar su reserva sin costo hasta 24 horas antes de la llegada."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Qué métodos de pago aceptan?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aceptamos pagos en euros, libras esterlinas, dólares estadounidenses y liras turcas a través de un pago seguro en línea."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Proporcionan asientos para niños en los traslados desde el Aeropuerto de Bodrum Milas?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, ofrecemos asientos para niños gratuitos en vehículos privados de 8 y 9 plazas para garantizar la seguridad de las familias."
                    }
                }
            ]
        }
        ,
        it: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Dove mi incontrerà il mio autista all'Aeroporto di Bodrum Milas?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Il tuo autista ti aspetterà ai cancelli di arrivo dell'Aeroporto di Bodrum Milas (BJV), tenendo un cartello con il tuo nome per un facile riconoscimento."
                    }
                },
                {
                    "@type": "Question",
                    "name": "I prezzi dei taxi dall'Aeroporto di Bodrum Milas sono fissi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, tutti i nostri prezzi per i taxi sono fissi e senza costi nascosti, offrendo tariffe trasparenti e competitive."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Offrite cancellazioni gratuite per i trasferimenti dall'Aeroporto di Bodrum Milas?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, puoi cancellare la tua prenotazione gratuitamente fino a 24 ore prima dell'arrivo."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quali metodi di pagamento accettate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Accettiamo pagamenti in Euro, Sterline britanniche, Dollari americani e Lire turche tramite pagamento online sicuro."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Fornite seggiolini per bambini nei trasferimenti dall'Aeroporto di Bodrum Milas?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, offriamo seggiolini per bambini gratuiti nei veicoli privati da 8 e 9 posti per garantire la sicurezza delle famiglie."
                    }
                }
            ]
        }
        ,
        ar: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "أين سيلتقيني السائق في مطار بودروم ميلاس؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "سينتظرك سائقك عند بوابات الوصول في مطار بودروم ميلاس (BJV)، حاملًا لافتة تحمل اسمك لسهولة التعرف عليه."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل أسعار سيارات الأجرة من مطار بودروم ميلاس ثابتة؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، جميع أسعار سيارات الأجرة لدينا ثابتة بدون أي رسوم مخفية، مما يضمن أسعار شفافة وتنافسية."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل تقدمون إلغاء مجاني لخدمات النقل من مطار بودروم ميلاس؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، يمكنك إلغاء حجزك مجانًا حتى 24 ساعة قبل الوصول."
                    }
                },
                {
                    "@type": "Question",
                    "name": "ما هي طرق الدفع التي تقبلونها؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نحن نقبل المدفوعات باليورو والجنيه الإسترليني والدولار الأمريكي والليرة التركية من خلال الدفع الآمن عبر الإنترنت."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل توفرون مقاعد للأطفال في خدمات النقل من مطار بودروم ميلاس؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، نقدم مقاعد مجانية للأطفال في المركبات الخاصة التي تتسع لـ 8 و9 ركاب لضمان سلامة العائلات."
                    }
                }
            ]
        }
        ,
        zh: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "我的司机会在博德鲁姆米拉斯机场哪里接我？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "您的司机将在博德鲁姆米拉斯机场 (BJV) 到达门口等候，并举着写有您姓名的接机牌，以便识别。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "从博德鲁姆米拉斯机场出发的出租车价格是固定的吗？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们所有的出租车价格都是固定的，没有隐藏费用，提供透明且具有竞争力的价格。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您提供博德鲁姆米拉斯机场接送的免费取消服务吗？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，您可以在抵达前 24 小时免费取消您的预订。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您接受哪些付款方式？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "我们接受欧元、英镑、美元和土耳其里拉的在线安全支付。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您是否为博德鲁姆米拉斯机场接送提供儿童座椅？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们为 8 座和 9 座的私人车辆免费提供儿童座椅，以确保家庭旅客的安全。"
                    }
                }
            ]
        }

    },
    "/izmir-adnan-menderes-airport-taxi-prices": {
        en: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Where will my driver meet me at Izmir Adnan Menderes Airport?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your driver will meet you by the arrival gates at Izmir Adnan Menderes Airport (ADB), holding a passenger name board for easy identification."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are the taxi prices from Izmir Airport fixed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, all our taxi prices are fixed with no hidden charges, ensuring transparent and competitive rates."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer free cancellations for Izmir Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you can cancel your booking free of charge up to 24 hours before arrival."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What payment methods do you accept?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We accept payments in Euro, GBP, US Dollar, and Turkish Lira via secure online payment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide child seats for Izmir Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer free child seats for 8 and 9-seater private vehicles to ensure safety for families."
                    }
                }
            ]
        }
        ,
        tr: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Sürücüm beni İzmir Adnan Menderes Havalimanı'nda nerede karşılayacak?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sürücünüz sizi İzmir Adnan Menderes Havalimanı (ADB) geliş kapılarında, üzerinde adınızın yazılı olduğu bir tabela ile karşılayacaktır."
                    }
                },
                {
                    "@type": "Question",
                    "name": "İzmir Havalimanı'ndan taksi ücretleri sabit mi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, tüm taksi fiyatlarımız sabittir ve gizli ücretler yoktur, şeffaf ve rekabetçi fiyatlar sunuyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "İzmir Havalimanı transferleri için ücretsiz iptal seçeneği sunuyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, rezervasyonunuzu varıştan 24 saat öncesine kadar ücretsiz iptal edebilirsiniz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ödemeleri Euro, GBP, ABD Doları ve Türk Lirası cinsinden güvenli çevrimiçi ödeme yöntemiyle kabul ediyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "İzmir Havalimanı transferleri için çocuk koltuğu sağlıyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, ailelerin güvenliği için 8 ve 9 kişilik özel araçlarımızda ücretsiz çocuk koltuğu sunuyoruz."
                    }
                }
            ]
        }
        ,
        ru: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Где меня встретит водитель в аэропорту Измир Аднан Мендерес?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ваш водитель встретит вас у выхода для прибывающих пассажиров в аэропорту Измир Аднан Мендерес (ADB), держа табличку с вашим именем для удобного опознания."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Фиксированные ли цены на такси из аэропорта Измир?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, все наши цены на такси фиксированы, без скрытых платежей, обеспечивая прозрачные и конкурентоспособные тарифы."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы бесплатную отмену бронирования для трансферов из аэропорта Измир?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, вы можете отменить свое бронирование бесплатно за 24 часа до прибытия."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Какие способы оплаты вы принимаете?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Мы принимаем платежи в евро, фунтах стерлингов, долларах США и турецких лирах через безопасный онлайн-платеж."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы детские сиденья для трансферов из аэропорта Измир?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, мы предоставляем бесплатные детские сиденья в частных автомобилях на 8 и 9 мест для обеспечения безопасности семей."
                    }
                }
            ]
        }
        ,
        es: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "¿Dónde me encontrará mi conductor en el Aeropuerto de Izmir Adnan Menderes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Su conductor lo recibirá en las puertas de llegada del Aeropuerto de Izmir Adnan Menderes (ADB), sosteniendo un cartel con su nombre para una fácil identificación."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Los precios de los taxis desde el Aeropuerto de Izmir son fijos?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, todos nuestros precios de taxi son fijos y no tienen cargos ocultos, ofreciendo tarifas transparentes y competitivas."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Ofrecen cancelaciones gratuitas para los traslados desde el Aeropuerto de Izmir?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, puede cancelar su reserva sin costo hasta 24 horas antes de la llegada."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Qué métodos de pago aceptan?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aceptamos pagos en euros, libras esterlinas, dólares estadounidenses y liras turcas a través de un pago seguro en línea."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Proporcionan asientos para niños en los traslados desde el Aeropuerto de Izmir?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, ofrecemos asientos para niños gratuitos en vehículos privados de 8 y 9 plazas para garantizar la seguridad de las familias."
                    }
                }
            ]
        }
        ,
        it: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Dove mi incontrerà il mio autista all'Aeroporto di Izmir Adnan Menderes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Il tuo autista ti aspetterà ai cancelli di arrivo dell'Aeroporto di Izmir Adnan Menderes (ADB), tenendo un cartello con il tuo nome per un facile riconoscimento."
                    }
                },
                {
                    "@type": "Question",
                    "name": "I prezzi dei taxi dall'Aeroporto di Izmir sono fissi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, tutti i nostri prezzi per i taxi sono fissi e senza costi nascosti, offrendo tariffe trasparenti e competitive."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Offrite cancellazioni gratuite per i trasferimenti dall'Aeroporto di Izmir?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, puoi cancellare la tua prenotazione gratuitamente fino a 24 ore prima dell'arrivo."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quali metodi di pagamento accettate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Accettiamo pagamenti in Euro, Sterline britanniche, Dollari americani e Lire turche tramite pagamento online sicuro."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Fornite seggiolini per bambini nei trasferimenti dall'Aeroporto di Izmir?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, offriamo seggiolini per bambini gratuiti nei veicoli privati da 8 e 9 posti per garantire la sicurezza delle famiglie."
                    }
                }
            ]
        }
        ,
        ar: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "أين سيلتقيني السائق في مطار إزمير عدنان مندريس؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "سينتظرك سائقك عند بوابات الوصول في مطار إزمير عدنان مندريس (ADB)، حاملًا لافتة تحمل اسمك لسهولة التعرف عليه."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل أسعار سيارات الأجرة من مطار إزمير ثابتة؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، جميع أسعار سيارات الأجرة لدينا ثابتة بدون أي رسوم مخفية، مما يضمن أسعار شفافة وتنافسية."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل تقدمون إلغاء مجاني لخدمات النقل من مطار إزمير؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، يمكنك إلغاء حجزك مجانًا حتى 24 ساعة قبل الوصول."
                    }
                },
                {
                    "@type": "Question",
                    "name": "ما هي طرق الدفع التي تقبلونها؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نحن نقبل المدفوعات باليورو والجنيه الإسترليني والدولار الأمريكي والليرة التركية من خلال الدفع الآمن عبر الإنترنت."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل توفرون مقاعد للأطفال في خدمات النقل من مطار إزمير؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، نقدم مقاعد مجانية للأطفال في المركبات الخاصة التي تتسع لـ 8 و9 ركاب لضمان سلامة العائلات."
                    }
                }
            ]
        }
        ,
        zh: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "我的司机会在伊兹密尔阿德南·门德雷斯机场哪里接我？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "您的司机将在伊兹密尔阿德南·门德雷斯机场 (ADB) 到达门口等候，并举着写有您姓名的接机牌，以便识别。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "从伊兹密尔机场出发的出租车价格是固定的吗？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们所有的出租车价格都是固定的，没有隐藏费用，提供透明且具有竞争力的价格。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您提供伊兹密尔机场接送的免费取消服务吗？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，您可以在抵达前 24 小时免费取消您的预订。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您接受哪些付款方式？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "我们接受欧元、英镑、美元和土耳其里拉的在线安全支付。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您是否为伊兹密尔机场接送提供儿童座椅？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们为 8 座和 9 座的私人车辆免费提供儿童座椅，以确保家庭旅客的安全。"
                    }
                }
            ]
        }

    },
    "/gazipasha-alanya-airport-taxi-prices": {
        en: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Where will my driver meet me at Gazipaşa-Alanya Airport?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your driver will meet you by the arrival gates at Gazipaşa-Alanya Airport (GZP), holding a passenger name board for easy identification."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are the taxi prices from Gazipaşa-Alanya Airport fixed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, all our taxi prices are fixed with no hidden charges, ensuring transparent and competitive rates."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer free cancellations for Gazipaşa-Alanya Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you can cancel your booking free of charge up to 24 hours before arrival."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What payment methods do you accept?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We accept payments in Euro, GBP, US Dollar, and Turkish Lira via secure online payment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide child seats for Gazipaşa-Alanya Airport transfers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer free child seats for 8 and 9-seater private vehicles to ensure safety for families."
                    }
                }
            ]
        }
        ,
        tr: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Sürücüm beni Gazipaşa-Alanya Havalimanı'nda nerede karşılayacak?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sürücünüz sizi Gazipaşa-Alanya Havalimanı (GZP) geliş kapılarında, üzerinde adınızın yazılı olduğu bir tabela ile karşılayacaktır."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Gazipaşa-Alanya Havalimanı'ndan taksi ücretleri sabit mi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, tüm taksi fiyatlarımız sabittir ve gizli ücretler yoktur, şeffaf ve rekabetçi fiyatlar sunuyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Gazipaşa-Alanya Havalimanı transferleri için ücretsiz iptal seçeneği sunuyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, rezervasyonunuzu varıştan 24 saat öncesine kadar ücretsiz iptal edebilirsiniz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ödemeleri Euro, GBP, ABD Doları ve Türk Lirası cinsinden güvenli çevrimiçi ödeme yöntemiyle kabul ediyoruz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Gazipaşa-Alanya Havalimanı transferleri için çocuk koltuğu sağlıyor musunuz?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, ailelerin güvenliği için 8 ve 9 kişilik özel araçlarımızda ücretsiz çocuk koltuğu sunuyoruz."
                    }
                }
            ]
        }
        ,
        ru: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Где меня встретит водитель в аэропорту Газипаша-Алания?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ваш водитель встретит вас у выхода для прибывающих пассажиров в аэропорту Газипаша-Алания (GZP), держа табличку с вашим именем для удобного опознания."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Фиксированные ли цены на такси из аэропорта Газипаша-Алания?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, все наши цены на такси фиксированы, без скрытых платежей, обеспечивая прозрачные и конкурентоспособные тарифы."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы бесплатную отмену бронирования для трансферов из аэропорта Газипаша-Алания?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, вы можете отменить свое бронирование бесплатно за 24 часа до прибытия."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Какие способы оплаты вы принимаете?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Мы принимаем платежи в евро, фунтах стерлингов, долларах США и турецких лирах через безопасный онлайн-платеж."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Предоставляете ли вы детские сиденья для трансферов из аэропорта Газипаша-Алания?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, мы предоставляем бесплатные детские сиденья в частных автомобилях на 8 и 9 мест для обеспечения безопасности семей."
                    }
                }
            ]
        }
        ,
        es: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "¿Dónde me encontrará mi conductor en el Aeropuerto de Gazipaşa-Alanya?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Su conductor lo recibirá en las puertas de llegada del Aeropuerto de Gazipaşa-Alanya (GZP), sosteniendo un cartel con su nombre para una fácil identificación."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Los precios de los taxis desde el Aeropuerto de Gazipaşa-Alanya son fijos?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, todos nuestros precios de taxi son fijos y no tienen cargos ocultos, ofreciendo tarifas transparentes y competitivas."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Ofrecen cancelaciones gratuitas para los traslados desde el Aeropuerto de Gazipaşa-Alanya?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, puede cancelar su reserva sin costo hasta 24 horas antes de la llegada."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Qué métodos de pago aceptan?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aceptamos pagos en euros, libras esterlinas, dólares estadounidenses y liras turcas a través de un pago seguro en línea."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Proporcionan asientos para niños en los traslados desde el Aeropuerto de Gazipaşa-Alanya?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, ofrecemos asientos para niños gratuitos en vehículos privados de 8 y 9 plazas para garantizar la seguridad de las familias."
                    }
                }
            ]
        }
        ,
        it: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Dove mi incontrerà il mio autista all'Aeroporto di Gazipaşa-Alanya?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Il tuo autista ti aspetterà ai cancelli di arrivo dell'Aeroporto di Gazipaşa-Alanya (GZP), tenendo un cartello con il tuo nome per un facile riconoscimento."
                    }
                },
                {
                    "@type": "Question",
                    "name": "I prezzi dei taxi dall'Aeroporto di Gazipaşa-Alanya sono fissi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, tutti i nostri prezzi per i taxi sono fissi e senza costi nascosti, offrendo tariffe trasparenti e competitive."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Offrite cancellazioni gratuite per i trasferimenti dall'Aeroporto di Gazipaşa-Alanya?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, puoi cancellare la tua prenotazione gratuitamente fino a 24 ore prima dell'arrivo."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quali metodi di pagamento accettate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Accettiamo pagamenti in Euro, Sterline britanniche, Dollari americani e Lire turche tramite pagamento online sicuro."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Fornite seggiolini per bambini nei trasferimenti dall'Aeroporto di Gazipaşa-Alanya?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, offriamo seggiolini per bambini gratuiti nei veicoli privati da 8 e 9 posti per garantire la sicurezza delle famiglie."
                    }
                }
            ]
        }
        ,
        ar: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "أين سيلتقيني السائق في مطار غازي باشا-ألانيا؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "سينتظرك سائقك عند بوابات الوصول في مطار غازي باشا-ألانيا (GZP)، حاملًا لافتة تحمل اسمك لسهولة التعرف عليه."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل أسعار سيارات الأجرة من مطار غازي باشا-ألانيا ثابتة؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، جميع أسعار سيارات الأجرة لدينا ثابتة بدون أي رسوم مخفية، مما يضمن أسعار شفافة وتنافسية."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل تقدمون إلغاء مجاني لخدمات النقل من مطار غازي باشا-ألانيا؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، يمكنك إلغاء حجزك مجانًا حتى 24 ساعة قبل الوصول."
                    }
                },
                {
                    "@type": "Question",
                    "name": "ما هي طرق الدفع التي تقبلونها؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نحن نقبل المدفوعات باليورو والجنيه الإسترليني والدولار الأمريكي والليرة التركية من خلال الدفع الآمن عبر الإنترنت."
                    }
                },
                {
                    "@type": "Question",
                    "name": "هل توفرون مقاعد للأطفال في خدمات النقل من مطار غازي باشا-ألانيا؟",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "نعم، نقدم مقاعد مجانية للأطفال في المركبات الخاصة التي تتسع لـ 8 و9 ركاب لضمان سلامة العائلات."
                    }
                }
            ]
        }
        ,
        zh: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "我的司机会在加济帕夏-阿拉尼亚机场哪里接我？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "您的司机将在加济帕夏-阿拉尼亚机场 (GZP) 到达门口等候，并举着写有您姓名的接机牌，以便识别。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "从加济帕夏-阿拉尼亚机场出发的出租车价格是固定的吗？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们所有的出租车价格都是固定的，没有隐藏费用，提供透明且具有竞争力的价格。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您提供加济帕夏-阿拉尼亚机场接送的免费取消服务吗？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，您可以在抵达前 24 小时免费取消您的预订。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您接受哪些付款方式？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "我们接受欧元、英镑、美元和土耳其里拉的在线安全支付。"
                    }
                },
                {
                    "@type": "Question",
                    "name": "您是否为加济帕夏-阿拉尼亚机场接送提供儿童座椅？",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "是的，我们为 8 座和 9 座的私人车辆免费提供儿童座椅，以确保家庭旅客的安全。"
                    }
                }
            ]
        }

    }

}

//*****************************************
//*****************************************
export const getMetaTagSingleAirportPage = (pathname, language, env) => {
    const metaTagsData = metaTagSingleAirportPage(env); // Get all meta tag data
    return metaTagsData[pathname]?.[language] || []; // Return the meta tags for the specific pathname and language
};
const metaTagSingleAirportPage = (env) => ({
    "/istanbul-airport-taxi-prices": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Istanbul Airport Taxi Prices | Fixed & Private Transfers\">",
            "<meta property=\"og:description\" content=\"Book a private taxi from Istanbul Airport (IST) with fixed prices, free meet & greet, and no hidden fees. Secure online booking & 24/7 customer support.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-taxi-prices\">`,
            `<meta property=\"og:image\"content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Istanbul Airport Taxi Prices | Fixed & Private Transfers\">",
            "<meta name=\"twitter:description\" content=\"Book a private taxi from Istanbul Airport (IST) with fixed prices, free meet & greet, and no hidden fees. Secure online booking & 24/7 customer support.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
        ],
        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"İstanbul Havalimanı Taksi Fiyatları | Sabit ve Özel Transferler\">",
            "<meta property=\"og:description\" content=\"İstanbul Havalimanı'ndan (IST) sabit fiyatlarla özel taksi rezervasyonu yapın, ücretsiz karşılama hizmeti ve gizli ücretler olmadan seyahat edin. Güvenli online rezervasyon ve 7/24 müşteri desteği.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-taxi-prices\">`,
            `<meta property=\"og:image\"content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"İstanbul Havalimanı Taksi Fiyatları | Sabit ve Özel Transferler\">",
            "<meta name=\"twitter:description\" content=\"İstanbul Havalimanı'ndan (IST) sabit fiyatlarla özel taksi rezervasyonu yapın, ücretsiz karşılama hizmeti ve gizli ücretler olmadan seyahat edin. Güvenli online rezervasyon ve 7/24 müşteri desteği.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Цены на такси из аэропорта Стамбула | Фиксированные и частные трансферы\">",
            "<meta property=\"og:description\" content=\"Закажите частное такси из аэропорта Стамбула (IST) по фиксированной цене, с бесплатной встречей и без скрытых платежей. Безопасное онлайн-бронирование и круглосуточная поддержка клиентов.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Цены на такси из аэропорта Стамбула | Фиксированные и частные трансферы\">",
            "<meta name=\"twitter:description\" content=\"Закажите частное такси из аэропорта Стамбула (IST) по фиксированной цене, с бесплатной встречей и без скрытых платежей. Безопасное онлайн-бронирование и круглосуточная поддержка клиентов.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
        ],
        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Precios de taxi del aeropuerto de Estambul | Traslados privados y con tarifa fija\">",
            "<meta property=\"og:description\" content=\"Reserve un taxi privado desde el aeropuerto de Estambul (IST) con tarifas fijas, servicio de bienvenida gratuito y sin cargos ocultos. Reserva en línea segura y atención al cliente 24/7.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Precios de taxi del aeropuerto de Estambul | Traslados privados y con tarifa fija\">",
            "<meta name=\"twitter:description\" content=\"Reserve un taxi privado desde el aeropuerto de Estambul (IST) con tarifas fijas, servicio de bienvenida gratuito y sin cargos ocultos. Reserva en línea segura y atención al cliente 24/7.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
        ],
        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Prezzi taxi Aeroporto di Istanbul | Trasferimenti privati e a tariffa fissa\">",
            "<meta property=\"og:description\" content=\"Prenota un taxi privato dall'Aeroporto di Istanbul (IST) con tariffe fisse, accoglienza gratuita e senza costi nascosti. Prenotazione online sicura e assistenza clienti 24/7.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Prezzi taxi Aeroporto di Istanbul | Trasferimenti privati e a tariffa fissa\">",
            "<meta name=\"twitter:description\" content=\"Prenota un taxi privato dall'Aeroporto di Istanbul (IST) con tariffe fisse, accoglienza gratuita e senza costi nascosti. Prenotazione online sicura e assistenza clienti 24/7.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
        ],
        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"伊斯坦布尔机场出租车价格 | 固定价格和私人接送\">",
            "<meta property=\"og:description\" content=\"从伊斯坦布尔机场 (IST) 预订私人出租车，固定价格，免费迎接，无隐藏费用。安全的在线预订和 24/7 客户支持。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"伊斯坦布尔机场出租车价格 | 固定价格和私人接送\">",
            "<meta name=\"twitter:description\" content=\"从伊斯坦布尔机场 (IST) 预订私人出租车，固定价格，免费迎接，无隐藏费用。安全的在线预订和 24/7 客户支持。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
        ],
        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/istanbul-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/istanbul-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"أسعار سيارات الأجرة في مطار إسطنبول | خدمات النقل الخاصة والثابتة\">",
            "<meta property=\"og:description\" content=\"احجز سيارة أجرة خاصة من مطار إسطنبول (IST) بأسعار ثابتة، مع استقبال مجاني وبدون رسوم مخفية. حجز آمن عبر الإنترنت ودعم العملاء على مدار الساعة طوال أيام الأسبوع.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/istanbul-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"أسعار سيارات الأجرة في مطار إسطنبول | خدمات النقل الخاصة والثابتة\">",
            "<meta name=\"twitter:description\" content=\"احجز سيارة أجرة خاصة من مطار إسطنبول (IST) بأسعار ثابتة، مع استقبال مجاني وبدون رسوم مخفية. حجز آمن عبر الإنترنت ودعم العملاء على مدار الساعة طوال أيام الأسبوع.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/istanbul-airport-taxi.webp\">`,
        ],
    },
    "/sabiha-gokcen-airport-taxi-prices": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,

            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Sabiha Gökçen Airport Taxi Prices | Fixed & Private Transfers\">",
            "<meta property=\"og:description\" content=\"Book a private taxi from Sabiha Gökçen Airport (SAW) with fixed prices, free meet & greet at Column 13, and no hidden fees. 24/7 support & secure booking.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Sabiha Gökçen Airport Taxi Prices | Fixed & Private Transfers\">",
            "<meta name=\"twitter:description\" content=\"Book a private taxi from Sabiha Gökçen Airport (SAW) with fixed prices, free meet & greet at Column 13, and no hidden fees. 24/7 support & secure booking.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Цены на такси из аэропорта Сабиха Гёкчен | Фиксированные и частные трансферы\">",
            "<meta property=\"og:description\" content=\"Закажите частное такси из аэропорта Сабиха Гёкчен (SAW) по фиксированной цене, с бесплатной встречей у Колонны 13 и без скрытых платежей. Круглосуточная поддержка и безопасное бронирование.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Цены на такси из аэропорта Сабиха Гёкчен | Фиксированные и частные трансферы\">",
            "<meta name=\"twitter:description\" content=\"Закажите частное такси из аэропорта Сабиха Гёкчен (SAW) по фиксированной цене, с бесплатной встречей у Колонны 13 и без скрытых платежей. Круглосуточная поддержка и безопасное бронирование.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
        ],

        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Sabiha Gökçen Havalimanı Taksi Fiyatları | Sabit ve Özel Transferler\">",
            "<meta property=\"og:description\" content=\"Sabiha Gökçen Havalimanı'ndan (SAW) sabit fiyatlarla özel taksi rezervasyonu yapın, 13. Kolonda ücretsiz karşılama hizmeti ve gizli ücretler olmadan seyahat edin. 7/24 destek ve güvenli rezervasyon imkanı.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Sabiha Gökçen Havalimanı Taksi Fiyatları | Sabit ve Özel Transferler\">",
            "<meta name=\"twitter:description\" content=\"Sabiha Gökçen Havalimanı'ndan (SAW) sabit fiyatlarla özel taksi rezervasyonu yapın, 13. Kolonda ücretsiz karşılama hizmeti ve gizli ücretler olmadan seyahat edin. 7/24 destek ve güvenli rezervasyon imkanı.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
        ],

        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Precios de taxi del Aeropuerto Sabiha Gökçen | Traslados privados y con tarifa fija\">",
            "<meta property=\"og:description\" content=\"Reserve un taxi privado desde el Aeropuerto Sabiha Gökçen (SAW) con tarifas fijas, servicio de bienvenida gratuito en la Columna 13 y sin cargos ocultos. Soporte 24/7 y reserva segura.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Precios de taxi del Aeropuerto Sabiha Gökçen | Traslados privados y con tarifa fija\">",
            "<meta name=\"twitter:description\" content=\"Reserve un taxi privado desde el Aeropuerto Sabiha Gökçen (SAW) con tarifas fijas, servicio de bienvenida gratuito en la Columna 13 y sin cargos ocultos. Soporte 24/7 y reserva segura.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
        ],

        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Prezzi dei taxi dell'Aeroporto Sabiha Gökçen | Trasferimenti privati e a tariffa fissa\">",
            "<meta property=\"og:description\" content=\"Prenota un taxi privato dall'Aeroporto Sabiha Gökçen (SAW) con tariffe fisse, accoglienza gratuita alla Colonna 13 e nessun costo nascosto. Assistenza 24/7 e prenotazione sicura.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Prezzi dei taxi dell'Aeroporto Sabiha Gökçen | Trasferimenti privati e a tariffa fissa\">",
            "<meta name=\"twitter:description\" content=\"Prenota un taxi privato dall'Aeroporto Sabiha Gökçen (SAW) con tariffe fisse, accoglienza gratuita alla Colonna 13 e nessun costo nascosto. Assistenza 24/7 e prenotazione sicura.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
        ],

        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"萨比哈·格克琴机场出租车价格 | 固定价格和私人接送服务\">",
            "<meta property=\"og:description\" content=\"从萨比哈·格克琴机场 (SAW) 预订私人出租车，固定价格，免费迎接（第13柱），无隐藏费用。24/7 客户支持和安全预订。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"萨比哈·格克琴机场出租车价格 | 固定价格和私人接送服务\">",
            "<meta name=\"twitter:description\" content=\"从萨比哈·格克琴机场 (SAW) 预订私人出租车，固定价格，免费迎接（第13柱），无隐藏费用。24/7 客户支持和安全预订。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
        ],

        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/sabiha-gokcen-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/sabiha-gokcen-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"أسعار سيارات الأجرة في مطار صبيحة كوكجن | خدمات النقل الخاصة والثابتة\">",
            "<meta property=\"og:description\" content=\"احجز سيارة أجرة خاصة من مطار صبيحة كوكجن (SAW) بأسعار ثابتة، مع استقبال مجاني عند العمود 13 وبدون رسوم مخفية. دعم على مدار 24/7 وحجز آمن.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/sabiha-gokcen-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"أسعار سيارات الأجرة في مطار صبيحة كوكجن | خدمات النقل الخاصة والثابتة\">",
            "<meta name=\"twitter:description\" content=\"احجز سيارة أجرة خاصة من مطار صبيحة كوكجن (SAW) بأسعار ثابتة، مع استقبال مجاني عند العمود 13 وبدون رسوم مخفية. دعم على مدار 24/7 وحجز آمن.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/sabiha-airport-taxi.webp\">`,
        ],

    },
    "/dalaman-airport-taxi-prices": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Book a private taxi from Dalaman Airport (DLM) to Fethiye, Marmaris, Oludeniz, Icmeler & Hisaronu with fixed prices, meet & greet, and no hidden fees. 24/7 support.\">",
            "<meta property=\"og:description\" content=\"n unforgettable adrenaline rush.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/dalaman-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Dalaman Airport Taxi Transfer Prices | Fixed-Price Private Transfers\">",
            "<meta name=\"twitter:description\" content=\"Book a private taxi from Dalaman Airport (DLM) to Fethiye, Marmaris, Oludeniz, Icmeler & Hisaronu with fixed prices, meet & greet, and no hidden fees. 24/7 support.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Забронируйте частное такси из аэропорта Даламан (DLM) до Фетхие, Мармариса, Олюдениза, Ичмелера и Хисарону по фиксированной цене, с встречей и без скрытых платежей. Круглосуточная поддержка.\">",
            "<meta property=\"og:description\" content=\"Незабываемый выброс адреналина.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/dalaman-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Цены на трансфер из аэропорта Даламан | Частные трансферы по фиксированной цене\">",
            "<meta name=\"twitter:description\" content=\"Забронируйте частное такси из аэропорта Даламан (DLM) до Фетхие, Мармариса, Олюдениза, Ичмелера и Хисарону по фиксированной цене, с встречей и без скрытых платежей. Круглосуточная поддержка.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
        ],
        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Dalaman Havalimanı'ndan (DLM) Fethiye, Marmaris, Ölüdeniz, İçmeler ve Hisarönü'ne sabit fiyatlarla, karşılama hizmeti ve gizli ücretler olmadan özel taksi rezervasyonu yapın. 7/24 destek.\" >",
            "<meta property=\"og:description\" content=\"Unutulmaz bir adrenalin patlaması.\" >",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/dalaman-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Dalaman Havalimanı Taksi Transfer Fiyatları | Sabit Fiyatlı Özel Transferler\">",
            "<meta name=\"twitter:description\" content=\"Dalaman Havalimanı'ndan (DLM) Fethiye, Marmaris, Ölüdeniz, İçmeler ve Hisarönü'ne sabit fiyatlarla, karşılama hizmeti ve gizli ücretler olmadan özel taksi rezervasyonu yapın. 7/24 destek.\" >",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
        ],

        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Reserva un taxi privado desde el aeropuerto de Dalaman (DLM) a Fethiye, Marmaris, Oludeniz, Icmeler y Hisaronu con precios fijos, servicio de bienvenida y sin tarifas ocultas. Soporte 24/7.\">",
            "<meta property=\"og:description\" content=\"Una descarga de adrenalina inolvidable.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/dalaman-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Precios de traslados en taxi desde el aeropuerto de Dalaman | Traslados privados a precio fijo\">",
            "<meta name=\"twitter:description\" content=\"Reserva un taxi privado desde el aeropuerto de Dalaman (DLM) a Fethiye, Marmaris, Oludeniz, Icmeler y Hisaronu con precios fijos, servicio de bienvenida y sin tarifas ocultas. Soporte 24/7.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
        ],

        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Prenota un taxi privato dall'aeroporto di Dalaman (DLM) per Fethiye, Marmaris, Oludeniz, Icmeler e Hisaronu a prezzi fissi, con accoglienza e senza costi nascosti. Supporto 24/7.\" >",
            "<meta property=\"og:description\" content=\"Un'indimenticabile scarica di adrenalina.\" >",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/dalaman-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Prezzi trasferimento taxi aeroporto di Dalaman | Trasferimenti privati a prezzo fisso\">",
            "<meta name=\"twitter:description\" content=\"Prenota un taxi privato dall'aeroporto di Dalaman (DLM) per Fethiye, Marmaris, Oludeniz, Icmeler e Hisaronu a prezzi fissi, con accoglienza e senza costi nascosti. Supporto 24/7.\" >",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
        ],
        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"预订从达拉曼机场 (DLM) 前往费特希耶、马尔马里斯、厄吕代尼兹、伊奇梅勒和希萨鲁努的私人出租车，固定价格，接机服务，无隐藏费用。24/7 支持。\">",
            "<meta property=\"og:description\" content=\"难忘的肾上腺素飙升体验。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/dalaman-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"达拉曼机场出租车接送价格 | 固定价格私人接送\">",
            "<meta name=\"twitter:description\" content=\"预订从达拉曼机场 (DLM) 前往费特希耶、马尔马里斯、厄吕代尼兹、伊奇梅勒和希萨鲁努的私人出租车，固定价格，接机服务，无隐藏费用。24/7 支持。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
        ],
        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/dalaman-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/dalaman-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/dalaman-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"احجز سيارة أجرة خاصة من مطار دالامان (DLM) إلى فتحية، مارماريس، أولودينيز، إيشميلر وحصارونو بأسعار ثابتة، مع استقبال مجاني وبدون رسوم مخفية. دعم متوفر على مدار الساعة.\">",
            "<meta property=\"og:description\" content=\"تجربة اندفاع أدرينالين لا تُنسى.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/dalaman-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"أسعار خدمة النقل بسيارات الأجرة من مطار دالامان | تنقلات خاصة بأسعار ثابتة\">",
            "<meta name=\"twitter:description\" content=\"احجز سيارة أجرة خاصة من مطار دالامان (DLM) إلى فتحية، مارماريس، أولودينيز، إيشميلر وحصارونو بأسعار ثابتة، مع استقبال مجاني وبدون رسوم مخفية. دعم متوفر على مدار الساعة.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/dalaman-airport-taxi.webp\">`,
        ],
    },
    "/antalya-airport-taxi-prices": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Antalya Airport Taxi Transfer Prices | Fixed-Price Private Transfers\">",
            "<meta property=\"og:description\" content=\"Book a private taxi from Antalya Airport (AYT) to Kemer, Belek, Side, Alanya, Lara Beach & Konyaaltı. Fixed prices, meet & greet, no hidden fees. 24/7 support.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/antalya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Antalya Airport Taxi Transfer Prices | Fixed-Price Private Transfers\">",
            "<meta name=\"twitter:description\" content=\"Book a private taxi from Antalya Airport (AYT) to Kemer, Belek, Side, Alanya, Lara Beach & Konyaaltı. Fixed prices, meet & greet, no hidden fees. 24/7 support.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/antalya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/antalya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Цены на такси из аэропорта Анталии | Частные трансферы по фиксированной цене\">",
            "<meta property=\"og:description\" content=\"Забронируйте частное такси из аэропорта Анталии (AYT) до Кемера, Белека, Сиде, Алании, пляжа Лара и Коньяалты. Фиксированные цены, встреча, без скрытых платежей. Круглосуточная поддержка.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/antalya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Цены на такси из аэропорта Анталии | Частные трансферы по фиксированной цене\">",
            "<meta name=\"twitter:description\" content=\"Забронируйте частное такси из аэропорта Анталии (AYT) до Кемера, Белека, Сиде, Алании, пляжа Лара и Коньяалты. Фиксированные цены, встреча, без скрытых платежей. Круглосуточная поддержка.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
        ],

        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/antalya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/antalya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Antalya Havalimanı Taksi Transfer Fiyatları | Sabit Fiyatlı Özel Transferler\">",
            "<meta property=\"og:description\" content=\"Antalya Havalimanı'ndan (AYT) Kemer, Belek, Side, Alanya, Lara Plajı ve Konyaaltı'na özel taksi rezervasyonu yapın. Sabit fiyatlar, karşılama hizmeti, gizli ücret yok. 7/24 destek.\" >",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/antalya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Antalya Havalimanı Taksi Transfer Fiyatları | Sabit Fiyatlı Özel Transferler\">",
            "<meta name=\"twitter:description\" content=\"Antalya Havalimanı'ndan (AYT) Kemer, Belek, Side, Alanya, Lara Plajı ve Konyaaltı'na özel taksi rezervasyonu yapın. Sabit fiyatlar, karşılama hizmeti, gizli ücret yok. 7/24 destek.\" >",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
        ],

        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/antalya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/antalya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Precios de traslado en taxi desde el aeropuerto de Antalya | Traslados privados a precio fijo\">",
            "<meta property=\"og:description\" content=\"Reserva un taxi privado desde el aeropuerto de Antalya (AYT) a Kemer, Belek, Side, Alanya, Playa de Lara y Konyaaltı. Precios fijos, servicio de bienvenida, sin tarifas ocultas. Soporte 24/7.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/antalya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Precios de traslado en taxi desde el aeropuerto de Antalya | Traslados privados a precio fijo\">",
            "<meta name=\"twitter:description\" content=\"Reserva un taxi privado desde el aeropuerto de Antalya (AYT) a Kemer, Belek, Side, Alanya, Playa de Lara y Konyaaltı. Precios fijos, servicio de bienvenida, sin tarifas ocultas. Soporte 24/7.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
        ],

        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/antalya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/antalya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Prezzi dei trasferimenti in taxi dall'Aeroporto di Antalya | Trasferimenti privati a prezzo fisso\">",
            "<meta property=\"og:description\" content=\"Prenota un taxi privato dall'Aeroporto di Antalya (AYT) per Kemer, Belek, Side, Alanya, Lara Beach e Konyaaltı. Prezzi fissi, accoglienza, nessun costo nascosto. Supporto 24/7.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/antalya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Prezzi dei trasferimenti in taxi dall'Aeroporto di Antalya | Trasferimenti privati a prezzo fisso\">",
            "<meta name=\"twitter:description\" content=\"Prenota un taxi privato dall'Aeroporto di Antalya (AYT) per Kemer, Belek, Side, Alanya, Lara Beach e Konyaaltı. Prezzi fissi, accoglienza, nessun costo nascosto. Supporto 24/7.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
        ],

        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/antalya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/antalya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"安塔利亚机场出租车接送价格 | 固定价格私人接送\">",
            "<meta property=\"og:description\" content=\"预订从安塔利亚机场 (AYT) 前往凯梅尔、贝莱克、西代、阿兰亚、拉腊海滩和孔亚尔特的私人出租车。固定价格，接机服务，无隐藏费用。24/7 支持。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/antalya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"安塔利亚机场出租车接送价格 | 固定价格私人接送\">",
            "<meta name=\"twitter:description\" content=\"预订从安塔利亚机场 (AYT) 前往凯梅尔、贝莱克、西代、阿兰亚、拉腊海滩和孔亚尔特的私人出租车。固定价格，接机服务，无隐藏费用。24/7 支持。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
        ],

        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/antalya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/antalya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/antalya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/antalya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"أسعار النقل بسيارات الأجرة من مطار أنطاليا | تنقلات خاصة بأسعار ثابتة\">",
            "<meta property=\"og:description\" content=\"احجز سيارة أجرة خاصة من مطار أنطاليا (AYT) إلى كيمير، بيليك، سيد، ألانيا، شاطئ لارا وكونيالتي. أسعار ثابتة، استقبال مجاني، بدون رسوم مخفية. دعم على مدار الساعة.\" >",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/antalya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"أسعار النقل بسيارات الأجرة من مطار أنطاليا | تنقلات خاصة بأسعار ثابتة\">",
            "<meta name=\"twitter:description\" content=\"احجز سيارة أجرة خاصة من مطار أنطاليا (AYT) إلى كيمير، بيليك، سيد، ألانيا، شاطئ لارا وكونيالتي. أسعار ثابتة، استقبال مجاني، بدون رسوم مخفية. دعم على مدار الساعة.\" >",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/antalya-airport-taxi.webp\">`,
        ],

    },
    "/bodrum-milas-airport-taxi-prices": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Bodrum Milas Airport Taxi Transfer Prices | Fixed-Price Private Transfers\">",
            "<meta property=\"og:description\" content=\"Book a private taxi from Bodrum Milas Airport (BJV) to Bodrum, Gumbet, Torba, Bitez, Yalikavak & Turgutreis. Fixed prices, meet & greet, no hidden fees. 24/7 support.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Bodrum Milas Airport Taxi Transfer Prices | Fixed-Price Private Transfers\">",
            "<meta name=\"twitter:description\" content=\"Book a private taxi from Bodrum Milas Airport (BJV) to Bodrum, Gumbet, Torba, Bitez, Yalikavak & Turgutreis. Fixed prices, meet & greet, no hidden fees. 24/7 support.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Цены на трансфер из аэропорта Бодрум-Милас | Частные трансферы по фиксированной цене\">",
            "<meta property=\"og:description\" content=\"Забронируйте частное такси из аэропорта Бодрум-Милас (BJV) до Бодрума, Гюмбета, Торбы, Битеза, Ялыкавак и Тургутрейса. Фиксированные цены, встреча и приветствие, без скрытых платежей. Круглосуточная поддержка.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Цены на трансфер из аэропорта Бодрум-Милас | Частные трансферы по фиксированной цене\">",
            "<meta name=\"twitter:description\" content=\"Забронируйте частное такси из аэропорта Бодрум-Милас (BJV) до Бодрума, Гюмбета, Торбы, Битеза, Ялыкавак и Тургутрейса. Фиксированные цены, встреча и приветствие, без скрытых платежей. Круглосуточная поддержка.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
        ],

        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Bodrum Milas Havalimanı Taksi Transfer Fiyatları | Sabit Fiyatlı Özel Transferler\">",
            "<meta property=\"og:description\" content=\"Bodrum Milas Havalimanı'ndan (BJV) Bodrum, Gümbet, Torba, Bitez, Yalıkavak ve Turgutreis'e özel taksi rezervasyonu yapın. Sabit fiyatlar, karşılama hizmeti, gizli ücret yok. 7/24 destek.\" >",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Bodrum Milas Havalimanı Taksi Transfer Fiyatları | Sabit Fiyatlı Özel Transferler\">",
            "<meta name=\"twitter:description\" content=\"Bodrum Milas Havalimanı'ndan (BJV) Bodrum, Gümbet, Torba, Bitez, Yalıkavak ve Turgutreis'e özel taksi rezervasyonu yapın. Sabit fiyatlar, karşılama hizmeti, gizli ücret yok. 7/24 destek.\" >",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
        ],

        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Precios de traslado en taxi desde el Aeropuerto de Bodrum Milas | Traslados privados a precio fijo\">",
            "<meta property=\"og:description\" content=\"Reserva un taxi privado desde el Aeropuerto de Bodrum Milas (BJV) a Bodrum, Gumbet, Torba, Bitez, Yalikavak y Turgutreis. Precios fijos, servicio de bienvenida, sin tarifas ocultas. Soporte 24/7.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Precios de traslado en taxi desde el Aeropuerto de Bodrum Milas | Traslados privados a precio fijo\">",
            "<meta name=\"twitter:description\" content=\"Reserva un taxi privado desde el Aeropuerto de Bodrum Milas (BJV) a Bodrum, Gumbet, Torba, Bitez, Yalikavak y Turgutreis. Precios fijos, servicio de bienvenida, sin tarifas ocultas. Soporte 24/7.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
        ],

        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Prezzi dei trasferimenti in taxi dall'Aeroporto di Bodrum Milas | Trasferimenti privati a prezzo fisso\">",
            "<meta property=\"og:description\" content=\"Prenota un taxi privato dall'Aeroporto di Bodrum Milas (BJV) per Bodrum, Gumbet, Torba, Bitez, Yalikavak e Turgutreis. Prezzi fissi, accoglienza, nessun costo nascosto. Supporto 24/7.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Prezzi dei trasferimenti in taxi dall'Aeroporto di Bodrum Milas | Trasferimenti privati a prezzo fisso\">",
            "<meta name=\"twitter:description\" content=\"Prenota un taxi privato dall'Aeroporto di Bodrum Milas (BJV) per Bodrum, Gumbet, Torba, Bitez, Yalikavak e Turgutreis. Prezzi fissi, accoglienza, nessun costo nascosto. Supporto 24/7.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
        ],
        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"博德鲁姆米拉斯机场出租车接送价格 | 固定价格私人接送\">",
            "<meta property=\"og:description\" content=\"预订从博德鲁姆米拉斯机场 (BJV) 前往博德鲁姆、居姆贝特、托尔巴、比泰兹、亚利卡瓦克和图尔古特雷斯的私人出租车。固定价格，接机服务，无隐藏费用。24/7 支持。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"博德鲁姆米拉斯机场出租车接送价格 | 固定价格私人接送\">",
            "<meta name=\"twitter:description\" content=\"预订从博德鲁姆米拉斯机场 (BJV) 前往博德鲁姆、居姆贝特、托尔巴、比泰兹、亚利卡瓦克和图尔古特雷斯的私人出租车。固定价格，接机服务，无隐藏费用。24/7 支持。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
        ],
        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/bodrum-milas-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/bodrum-milas-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"أسعار النقل بسيارات الأجرة من مطار بودروم ميلاس | تنقلات خاصة بأسعار ثابتة\">",
            "<meta property=\"og:description\" content=\"احجز سيارة أجرة خاصة من مطار بودروم ميلاس (BJV) إلى بودروم، جومبيت، توربا، بيتز، ياليكافاك وتورغوتريس. أسعار ثابتة، استقبال مجاني، بدون رسوم مخفية. دعم على مدار الساعة.\" >",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/bodrum-milas-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"أسعار النقل بسيارات الأجرة من مطار بودروم ميلاس | تنقلات خاصة بأسعار ثابتة\">",
            "<meta name=\"twitter:description\" content=\"احجز سيارة أجرة خاصة من مطار بودروم ميلاس (BJV) إلى بودروم، جومبيت، توربا، بيتز، ياليكافاك وتورغوتريس. أسعار ثابتة، استقبال مجاني، بدون رسوم مخفية. دعم على مدار الساعة.\" >",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/bodrum-airport-taxi.webp\">`,
        ],

    },
    "/izmir-adnan-menderes-airport-taxi-prices": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Izmir Adnan Menderes Airport Taxi Prices | Fixed-Price Private Transfers\">",
            "<meta property=\"og:description\" content=\"Book a private taxi from Izmir Adnan Menderes Airport (ADB) to Kusadasi, Cesme, Alacati, Selcuk & Ephesus. Fixed prices, meet & greet, no hidden fees. 24/7 support.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Izmir Adnan Menderes Airport Taxi Prices | Fixed-Price Private Transfers\">",
            "<meta name=\"twitter:description\" content=\"Book a private taxi from Izmir Adnan Menderes Airport (ADB) to Kusadasi, Cesme, Alacati, Selcuk & Ephesus. Fixed prices, meet & greet, no hidden fees. 24/7 support.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Цены на такси из аэропорта Измир Аднан Мендерес | Частные трансферы по фиксированной цене\">",
            "<meta property=\"og:description\" content=\"Забронируйте частное такси из аэропорта Измир Аднан Мендерес (ADB) до Кушадасы, Чешме, Алачаты, Сельчук и Эфеса. Фиксированные цены, встреча, без скрытых платежей. Круглосуточная поддержка.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Цены на такси из аэропорта Измир Аднан Мендерес | Частные трансферы по фиксированной цене\">",
            "<meta name=\"twitter:description\" content=\"Забронируйте частное такси из аэропорта Измир Аднан Мендерес (ADB) до Кушадасы, Чешме, Алачаты, Сельчук и Эфеса. Фиксированные цены, встреча, без скрытых платежей. Круглосуточная поддержка.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
        ],

        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"İzmir Adnan Menderes Havalimanı Taksi Fiyatları | Sabit Fiyatlı Özel Transferler\">",
            "<meta property=\"og:description\" content=\"İzmir Adnan Menderes Havalimanı'ndan (ADB) Kuşadası, Çeşme, Alaçatı, Selçuk ve Efes'e özel taksi rezervasyonu yapın. Sabit fiyatlar, karşılama hizmeti, gizli ücret yok. 7/24 destek.\" >",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"İzmir Adnan Menderes Havalimanı Taksi Fiyatları | Sabit Fiyatlı Özel Transferler\">",
            "<meta name=\"twitter:description\" content=\"İzmir Adnan Menderes Havalimanı'ndan (ADB) Kuşadası, Çeşme, Alaçatı, Selçuk ve Efes'e özel taksi rezervasyonu yapın. Sabit fiyatlar, karşılama hizmeti, gizli ücret yok. 7/24 destek.\" >",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
        ],
        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Precios de taxis del Aeropuerto de Esmirna Adnan Menderes | Traslados privados a precio fijo\">",
            "<meta property=\"og:description\" content=\"Reserva un taxi privado desde el Aeropuerto de Esmirna Adnan Menderes (ADB) a Kusadasi, Cesme, Alacati, Selcuk y Éfeso. Precios fijos, servicio de bienvenida, sin tarifas ocultas. Soporte 24/7.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Precios de taxis del Aeropuerto de Esmirna Adnan Menderes | Traslados privados a precio fijo\">",
            "<meta name=\"twitter:description\" content=\"Reserva un taxi privado desde el Aeropuerto de Esmirna Adnan Menderes (ADB) a Kusadasi, Cesme, Alacati, Selcuk y Éfeso. Precios fijos, servicio de bienvenida, sin tarifas ocultas. Soporte 24/7.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
        ],

        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Prezzi dei taxi dell'Aeroporto di Smirne Adnan Menderes | Trasferimenti privati a prezzo fisso\">",
            "<meta property=\"og:description\" content=\"Prenota un taxi privato dall'Aeroporto di Smirne Adnan Menderes (ADB) per Kusadasi, Cesme, Alacati, Selcuk ed Efeso. Prezzi fissi, accoglienza, nessun costo nascosto. Supporto 24/7.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Prezzi dei taxi dell'Aeroporto di Smirne Adnan Menderes | Trasferimenti privati a prezzo fisso\">",
            "<meta name=\"twitter:description\" content=\"Prenota un taxi privato dall'Aeroporto di Smirne Adnan Menderes (ADB) per Kusadasi, Cesme, Alacati, Selcuk ed Efeso. Prezzi fissi, accoglienza, nessun costo nascosto. Supporto 24/7.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
        ],

        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"伊兹密尔阿德南·门德列斯机场出租车价格 | 固定价格私人接送\">",
            "<meta property=\"og:description\" content=\"预订从伊兹密尔阿德南·门德列斯机场 (ADB) 前往库萨达斯、切什梅、阿拉恰特、塞尔丘克和以弗所的私人出租车。固定价格，接机服务，无隐藏费用。24/7 支持。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"伊兹密尔阿德南·门德列斯机场出租车价格 | 固定价格私人接送\">",
            "<meta name=\"twitter:description\" content=\"预订从伊兹密尔阿德南·门德列斯机场 (ADB) 前往库萨达斯、切什梅、阿拉恰特、塞尔丘克和以弗所的私人出租车。固定价格，接机服务，无隐藏费用。24/7 支持。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
        ],

        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/izmir-adnan-menderes-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/izmir-adnan-menderes-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"أسعار سيارات الأجرة في مطار إزمير عدنان مندريس | التنقلات الخاصة بأسعار ثابتة\">",
            "<meta property=\"og:description\" content=\"احجز سيارة أجرة خاصة من مطار إزمير عدنان مندريس (ADB) إلى كوساداسي، تشيشمي، ألاكاتي، سيلجوق وأفسس. أسعار ثابتة، استقبال مجاني، بدون رسوم مخفية. دعم على مدار الساعة.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/izmir-adnan-menderes-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"أسعار سيارات الأجرة في مطار إزمير عدنان مندريس | التنقلات الخاصة بأسعار ثابتة\">",
            "<meta name=\"twitter:description\" content=\"احجز سيارة أجرة خاصة من مطار إزمير عدنان مندريس (ADB) إلى كوساداسي، تشيشمي، ألاكاتي، سيلجوق وأفسس. أسعار ثابتة، استقبال مجاني، بدون رسوم مخفية. دعم على مدار الساعة.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/izmir-airport-taxi.webp\">`,
        ],

    },
    "/gazipasha-alanya-airport-taxi-prices": {
        en: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Gazipaşa-Alanya Airport Taxi Prices | Fixed-Price Private Transfers\">",
            "<meta property=\"og:description\" content=\"Book a private taxi from Gazipaşa-Alanya Airport (GZP) to Alanya, Mahmutlar, Kargicak, Anamur & Avsallar. Fixed prices, meet & greet, no hidden fees. 24/7 support.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Gazipaşa-Alanya Airport Taxi Prices | Fixed-Price Private Transfers\">",
            "<meta name=\"twitter:description\" content=\"Book a private taxi from Gazipaşa-Alanya Airport (GZP) to Alanya, Mahmutlar, Kargicak, Anamur & Avsallar. Fixed prices, meet & greet, no hidden fees. 24/7 support\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
        ],
        ru: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ru/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Цены на такси из аэропорта Газипаша-Аланья | Частные трансферы по фиксированной цене\">",
            "<meta property=\"og:description\" content=\"Забронируйте частное такси из аэропорта Газипаша-Аланья (GZP) до Аланьи, Махмутлара, Каргыджака, Анамура и Авсаллара. Фиксированные цены, встреча, без скрытых платежей. Круглосуточная поддержка.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Цены на такси из аэропорта Газипаша-Аланья | Частные трансферы по фиксированной цене\">",
            "<meta name=\"twitter:description\" content=\"Забронируйте частное такси из аэропорта Газипаша-Аланья (GZP) до Аланьи, Махмутлара, Каргыджака, Анамура и Авсаллара. Фиксированные цены, встреча, без скрытых платежей. Круглосуточная поддержка.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
        ],

        tr: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/tr/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Gazipaşa-Alanya Havalimanı Taksi Fiyatları | Sabit Fiyatlı Özel Transferler\">",
            "<meta property=\"og:description\" content=\"Gazipaşa-Alanya Havalimanı'ndan (GZP) Alanya, Mahmutlar, Kargıcak, Anamur ve Avsallar'a özel taksi rezervasyonu yapın. Sabit fiyatlar, karşılama hizmeti, gizli ücret yok. 7/24 destek.\" >",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Gazipaşa-Alanya Havalimanı Taksi Fiyatları | Sabit Fiyatlı Özel Transferler\">",
            "<meta name=\"twitter:description\" content=\"Gazipaşa-Alanya Havalimanı'ndan (GZP) Alanya, Mahmutlar, Kargıcak, Anamur ve Avsallar'a özel taksi rezervasyonu yapın. Sabit fiyatlar, karşılama hizmeti, gizli ücret yok. 7/24 destek.\" >",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
        ],
        es: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/es/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Precios de taxis del Aeropuerto de Gazipaşa-Alanya | Traslados privados a precio fijo\">",
            "<meta property=\"og:description\" content=\"Reserva un taxi privado desde el Aeropuerto de Gazipaşa-Alanya (GZP) a Alanya, Mahmutlar, Kargicak, Anamur y Avsallar. Precios fijos, servicio de bienvenida, sin tarifas ocultas. Soporte 24/7.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Precios de taxis del Aeropuerto de Gazipaşa-Alanya | Traslados privados a precio fijo\">",
            "<meta name=\"twitter:description\" content=\"Reserva un taxi privado desde el Aeropuerto de Gazipaşa-Alanya (GZP) a Alanya, Mahmutlar, Kargicak, Anamur y Avsallar. Precios fijos, servicio de bienvenida, sin tarifas ocultas. Soporte 24/7.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
        ],
        it: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/it/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"Prezzi dei taxi dall'Aeroporto di Gazipaşa-Alanya | Trasferimenti privati a prezzo fisso\">",
            "<meta property=\"og:description\" content=\"Prenota un taxi privato dall'Aeroporto di Gazipaşa-Alanya (GZP) per Alanya, Mahmutlar, Kargicak, Anamur e Avsallar. Prezzi fissi, accoglienza, nessun costo nascosto. Supporto 24/7.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"Prezzi dei taxi dall'Aeroporto di Gazipaşa-Alanya | Trasferimenti privati a prezzo fisso\">",
            "<meta name=\"twitter:description\" content=\"Prenota un taxi privato dall'Aeroporto di Gazipaşa-Alanya (GZP) per Alanya, Mahmutlar, Kargicak, Anamur e Avsallar. Prezzi fissi, accoglienza, nessun costo nascosto. Supporto 24/7.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
        ],

        zh: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/zh/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"加济帕夏-阿兰亚机场出租车价格 | 固定价格私人接送\">",
            "<meta property=\"og:description\" content=\"预订从加济帕夏-阿兰亚机场 (GZP) 前往阿兰亚、马赫穆特拉尔、卡尔吉贾克、阿纳穆尔和阿夫萨拉尔的私人出租车。固定价格，接机服务，无隐藏费用。24/7 支持。\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"加济帕夏-阿兰亚机场出租车价格 | 固定价格私人接送\">",
            "<meta name=\"twitter:description\" content=\"预订从加济帕夏-阿兰亚机场 (GZP) 前往阿兰亚、马赫穆特拉尔、卡尔吉贾克、阿纳穆尔和阿夫萨拉尔的私人出租车。固定价格，接机服务，无隐藏费用。24/7 支持。\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
        ],

        ar: [
            `<link rel=\"canonical\" href=\"${env.websiteDomain}/ar/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"en\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ar\" href=\"${env.websiteDomain}/ar/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"tr\" href=\"${env.websiteDomain}/tr/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"es\" href=\"${env.websiteDomain}/es/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"it\" href=\"${env.websiteDomain}/it/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"ru\" href=\"${env.websiteDomain}/ru/gazipasha-alanya-airport-taxi-prices\" />`,

            `<link rel=\"alternate\" hrefLang=\"zh\" href=\"${env.websiteDomain}/zh/gazipasha-alanya-airport-taxi-prices\" />`,
            `<link rel=\"alternate\" hrefLang=\"x-default\" href=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\" />`,
            "<meta property=\"og:type\" content=\"website\">",
            "<meta property=\"og:title\" content=\"أسعار سيارات الأجرة في مطار غازي باشا-ألانيا | تنقلات خاصة بأسعار ثابتة\">",
            "<meta property=\"og:description\" content=\"احجز سيارة أجرة خاصة من مطار غازي باشا-ألانيا (GZP) إلى ألانيا، محمودلار، كارجيجاك، أنامور وأفسلار. أسعار ثابتة، استقبال مجاني، بدون رسوم مخفية. دعم على مدار الساعة.\">",
            `<meta property=\"og:url\" content=\"${env.websiteDomain}/gazipasha-alanya-airport-taxi-prices\">`,
            `<meta property=\"og:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
            "<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "<meta name=\"twitter:title\" content=\"أسعار سيارات الأجرة في مطار غازي باشا-ألانيا | تنقلات خاصة بأسعار ثابتة\">",
            "<meta name=\"twitter:description\" content=\"احجز سيارة أجرة خاصة من مطار غازي باشا-ألانيا (GZP) إلى ألانيا، محمودلار، كارجيجاك، أنامور وأفسلار. أسعار ثابتة، استقبال مجاني، بدون رسوم مخفية. دعم على مدار الساعة.\">",
            `<meta name=\"twitter:image\" content=\"${env.websiteDomain}/images/matchingItemImages/gazipasa-airport-taxi.webp\">`,
        ],

    },

})



//*****************************************
//*****************************************
export const getSinglekeywordsTitleAirportPage = (pathname, language) => {
    const headTitle = keywordsTitleAirportPage[pathname]?.headTitle[language] || ""
    const keywords = keywordsTitleAirportPage[pathname]?.keywords[language] || ""
    const metaDescription = keywordsTitleAirportPage[pathname]?.metaDescription[language] || ""
    return { headTitle, keywords, metaDescription }
};
const keywordsTitleAirportPage = {
    "/istanbul-airport-taxi-prices": {
        "headTitle": {
            "en": "Istanbul Airport Taxi Prices | Fixed & Private Transfers",
            "tr": "İstanbul Havalimanı Taksi Fiyatları | Sabit ve Özel Transferler",
            "zh": "伊斯坦布尔机场出租车价格 | 固定价格 & 私人接送",
            "ru": "Цены на такси в аэропорту Стамбула | Фиксированные и частные трансферы",
            "es": "Precios de Taxi en el Aeropuerto de Estambul | Traslados Fijos y Privados",
            "it": "Prezzi Taxi Aeroporto di Istanbul | Trasferimenti Fissi e Privati",
            "ar": "أسعار سيارات الأجرة في مطار إسطنبول | انتقالات خاصة وثابتة"
        },
        "keywords": {
            "en": "Istanbul airport taxi, IST airport transfer, fixed price taxi Istanbul, private airport taxi Istanbul, Istanbul airport transfer prices",
            "tr": "İstanbul havalimanı taksi, IST havalimanı transferi, sabit fiyat taksi İstanbul, özel havalimanı taksi İstanbul, İstanbul havalimanı transfer fiyatları",
            "zh": "伊斯坦布尔机场出租车, IST机场接送, 固定价格出租车伊斯坦布尔, 私人机场出租车伊斯坦布尔, 伊斯坦布尔机场接送价格",
            "ru": "Такси в аэропорту Стамбула, трансфер из аэропорта IST, такси с фиксированной ценой Стамбул, частное такси в аэропорт Стамбула, цены на трансфер в аэропорт Стамбула",
            "es": "Taxi aeropuerto Estambul, traslado aeropuerto IST, taxi de precio fijo Estambul, taxi privado aeropuerto Estambul, precios de traslados aeropuerto Estambul",
            "it": "Taxi aeroporto Istanbul, trasferimento aeroporto IST, taxi a prezzo fisso Istanbul, taxi privato aeroporto Istanbul, prezzi trasferimenti aeroporto Istanbul",
            "ar": "سيارة أجرة مطار إسطنبول, نقل مطار IST, سيارة أجرة بسعر ثابت في إسطنبول, سيارة أجرة خاصة بمطار إسطنبول, أسعار نقل مطار إسطنبول"
        },
        "metaDescription": {
            "en": "Book a private taxi from Istanbul Airport (IST) with fixed prices, free meet & greet, and no hidden fees. Secure online booking & 24/7 customer support.",
            "tr": "İstanbul Havalimanı'ndan (IST) sabit fiyatlarla özel taksi rezervasyonu yapın. Ücretsiz karşılama, gizli ücret yok. Güvenli online rezervasyon ve 7/24 müşteri desteği.",
            "zh": "预订伊斯坦布尔机场（IST）私人出租车，固定价格，免费接机，无隐藏费用。安全在线预订 & 24/7客户支持。",
            "ru": "Закажите частное такси из аэропорта Стамбула (IST) по фиксированным ценам, с бесплатной встречей и без скрытых платежей. Безопасное онлайн-бронирование и круглосуточная поддержка.",
            "es": "Reserva un taxi privado desde el Aeropuerto de Estambul (IST) con precios fijos, bienvenida gratuita y sin tarifas ocultas. Reserva en línea segura y atención al cliente 24/7.",
            "it": "Prenota un taxi privato dall'Aeroporto di Istanbul (IST) con prezzi fissi, accoglienza gratuita e nessun costo nascosto. Prenotazione online sicura e supporto clienti 24/7.",
            "ar": "احجز سيارة أجرة خاصة من مطار إسطنبول (IST) بأسعار ثابتة، استقبال مجاني، وبدون رسوم مخفية. حجز آمن عبر الإنترنت ودعم العملاء 24/7."
        }
    },
    "/sabiha-gokcen-airport-taxi-prices": {
        "headTitle": {
            "en": "Sabiha Gökçen Airport Taxi Prices | Fixed & Private Transfers",
            "tr": "Sabiha Gökçen Havalimanı Taksi Fiyatları | Sabit ve Özel Transferler",
            "zh": "萨比哈·格克琴机场出租车价格 | 固定价格 & 私人接送",
            "ru": "Цены на такси в аэропорту Сабиха Гёкчен | Фиксированные и частные трансферы",
            "es": "Precios de Taxi en el Aeropuerto Sabiha Gökçen | Traslados Fijos y Privados",
            "it": "Prezzi Taxi Aeroporto Sabiha Gökçen | Trasferimenti Fissi e Privati",
            "ar": "أسعار سيارات الأجرة في مطار صبيحة كوكجن | انتقالات خاصة وثابتة"
        },
        "keywords": {
            "en": "Sabiha Gökçen airport taxi, SAW airport transfer, Istanbul private transfer, fixed price taxi Sabiha Gökçen, Sabiha Gökçen airport taxi Column 13, SAW taxi prices",
            "tr": "Sabiha Gökçen havalimanı taksi, SAW havalimanı transferi, İstanbul özel transfer, sabit fiyat taksi Sabiha Gökçen, Sabiha Gökçen havalimanı taksi Kolon 13, SAW taksi fiyatları",
            "zh": "萨比哈·格克琴机场出租车, SAW机场接送, 伊斯坦布尔私人接送, 固定价格出租车萨比哈·格克琴, 萨比哈·格克琴机场出租车柱13, SAW出租车价格",
            "ru": "Такси в аэропорту Сабиха Гёкчен, трансфер из аэропорта SAW, частный трансфер в Стамбул, такси с фиксированной ценой Сабиха Гёкчен, такси в аэропорту Сабиха Гёкчен Колонна 13, цены на такси SAW",
            "es": "Taxi aeropuerto Sabiha Gökçen, traslado aeropuerto SAW, traslado privado Estambul, taxi de precio fijo Sabiha Gökçen, taxi aeropuerto Sabiha Gökçen Columna 13, precios de taxi SAW",
            "it": "Taxi aeroporto Sabiha Gökçen, trasferimento aeroporto SAW, trasferimento privato Istanbul, taxi a prezzo fisso Sabiha Gökçen, taxi aeroporto Sabiha Gökçen Colonna 13, prezzi taxi SAW",
            "ar": "سيارة أجرة مطار صبيحة كوكجن, نقل مطار SAW, انتقال خاص في إسطنبول, سيارة أجرة بسعر ثابت صبيحة كوكجن, سيارة أجرة مطار صبيحة كوكجن العمود 13, أسعار سيارات الأجرة SAW"
        },
        "metaDescription": {
            "en": "Book a private taxi from Sabiha Gökçen Airport (SAW) with fixed prices, free meet & greet at Column 13, and no hidden fees. 24/7 support & secure booking.",
            "tr": "Sabiha Gökçen Havalimanı'ndan (SAW) sabit fiyatlarla özel taksi rezervasyonu yapın. Kolon 13'te ücretsiz karşılama, gizli ücret yok. 7/24 destek ve güvenli rezervasyon.",
            "zh": "预订萨比哈·格克琴机场（SAW）私人出租车，固定价格，柱13免费接机，无隐藏费用。24/7支持 & 安全预订。",
            "ru": "Закажите частное такси из аэропорта Сабиха Гёкчен (SAW) по фиксированным ценам, с бесплатной встречей у Колонны 13 и без скрытых платежей. Круглосуточная поддержка и безопасное бронирование.",
            "es": "Reserva un taxi privado desde el Aeropuerto Sabiha Gökçen (SAW) con precios fijos, bienvenida gratuita en la Columna 13 y sin tarifas ocultas. Atención 24/7 y reserva segura.",
            "it": "Prenota un taxi privato dall'Aeroporto Sabiha Gökçen (SAW) con prezzi fissi, accoglienza gratuita alla Colonna 13 e nessun costo nascosto. Supporto 24/7 e prenotazione sicura.",
            "ar": "احجز سيارة أجرة خاصة من مطار صبيحة كوكجن (SAW) بأسعار ثابتة، استقبال مجاني عند العمود 13، وبدون رسوم مخفية. دعم 24/7 وحجز آمن."
        }
    },
    "/dalaman-airport-taxi-prices": {
        "headTitle": {
            "en": "Dalaman Airport Taxi Transfer Prices | Fixed-Price Private Transfers",
            "tr": "Dalaman Havalimanı Taksi Transfer Fiyatları | Sabit Fiyatlı Özel Transferler",
            "zh": "达拉曼机场出租车价格 | 固定价格 & 私人接送",
            "ru": "Цены на такси в аэропорту Даламан | Фиксированные частные трансферы",
            "es": "Precios de Taxi en el Aeropuerto de Dalaman | Traslados Privados con Precio Fijo",
            "it": "Prezzi Taxi Aeroporto di Dalaman | Trasferimenti Privati a Prezzo Fisso",
            "ar": "أسعار سيارات الأجرة في مطار دالامان | انتقالات خاصة بأسعار ثابتة"
        },
        "keywords": {
            "en": "Dalaman airport taxi, DLM airport transfer, private transfer Dalaman, Dalaman airport taxi prices, fixed price taxi Dalaman, Fethiye taxi transfer, Oludeniz taxi, Marmaris airport taxi, Hisaronu transfer, Icmeler taxi service",
            "tr": "Dalaman havalimanı taksi, DLM havalimanı transferi, Dalaman özel transfer, Dalaman havalimanı taksi fiyatları, sabit fiyat taksi Dalaman, Fethiye taksi transferi, Ölüdeniz taksi, Marmaris havalimanı taksi, Hisarönü transferi, İçmeler taksi hizmeti",
            "zh": "达拉曼机场出租车, DLM机场接送, 达拉曼私人接送, 达拉曼机场出租车价格, 固定价格出租车达拉曼, 费特希耶出租车接送, 厄吕代尼兹出租车, 马尔马里斯机场出租车, 希萨鲁努接送, 伊切梅勒出租车服务",
            "ru": "Такси в аэропорту Даламан, трансфер из аэропорта DLM, частный трансфер Даламан, цены на такси в аэропорту Даламан, такси с фиксированной ценой Даламан, трансфер в Фетхие, такси в Олюдениз, такси в аэропорт Мармариса, трансфер в Хисароню, такси в Ичмелер",
            "es": "Taxi aeropuerto Dalaman, traslado aeropuerto DLM, traslado privado Dalaman, precios de taxi aeropuerto Dalaman, taxi de precio fijo Dalaman, traslado taxi Fethiye, taxi Oludeniz, taxi aeropuerto Marmaris, traslado Hisaronu, servicio de taxi Icmeler",
            "it": "Taxi aeroporto Dalaman, trasferimento aeroporto DLM, trasferimento privato Dalaman, prezzi taxi aeroporto Dalaman, taxi a prezzo fisso Dalaman, trasferimento taxi Fethiye, taxi Oludeniz, taxi aeroporto Marmaris, trasferimento Hisaronu, servizio taxi Icmeler",
            "ar": "سيارة أجرة مطار دالامان, نقل مطار DLM, انتقال خاص في دالامان, أسعار سيارات الأجرة في مطار دالامان, سيارة أجرة بسعر ثابت دالامان, نقل تاكسي فتحية, سيارة أجرة أولودينيز, سيارة أجرة مطار مارماريس, نقل هيسارونو, خدمة سيارات الأجرة إيسميلر"
        },
        "metaDescription": {
            "en": "Book a private taxi from Dalaman Airport (DLM) to Fethiye, Marmaris, Oludeniz, Icmeler & Hisaronu with fixed prices, meet & greet, and no hidden fees. 24/7 support.",
            "tr": "Dalaman Havalimanı'ndan (DLM) Fethiye, Marmaris, Ölüdeniz, İçmeler ve Hisarönü'ne özel taksi rezervasyonu yapın. Sabit fiyatlar, karşılama hizmeti, gizli ücret yok. 7/24 destek.",
            "zh": "预订从达拉曼机场（DLM）到费特希耶、马尔马里斯、厄吕代尼兹、伊切梅勒和希萨鲁努的私人出租车。固定价格，迎接服务，无隐藏费用。24/7支持。",
            "ru": "Закажите частное такси из аэропорта Даламан (DLM) в Фетхие, Мармарис, Олюдениз, Ичмелер и Хисароню. Фиксированные цены, встреча, без скрытых платежей. Круглосуточная поддержка.",
            "es": "Reserva un taxi privado desde el Aeropuerto de Dalaman (DLM) a Fethiye, Marmaris, Oludeniz, Icmeler y Hisaronu. Precios fijos, bienvenida, sin tarifas ocultas. Atención 24/7.",
            "it": "Prenota un taxi privato dall'Aeroporto di Dalaman (DLM) per Fethiye, Marmaris, Oludeniz, Icmeler e Hisaronu. Prezzi fissi, accoglienza, nessun costo nascosto. Supporto 24/7.",
            "ar": "احجز سيارة أجرة خاصة من مطار دالامان (DLM) إلى فتحية، مارماريس، أولودينيز، إيسميلر وهيسارونو. أسعار ثابتة، استقبال، بدون رسوم مخفية. دعم 24/7."
        }
    }
    ,
    "/antalya-airport-taxi-prices": {
        "headTitle": {
            "en": "Antalya Airport Taxi Transfer Prices | Fixed-Price Private Transfers",
            "tr": "Antalya Havalimanı Taksi Transfer Fiyatları | Sabit Fiyatlı Özel Transferler",
            "zh": "安塔利亚机场出租车价格 | 固定价格 & 私人接送",
            "ru": "Цены на такси в аэропорту Антальи | Фиксированные частные трансферы",
            "es": "Precios de Taxi en el Aeropuerto de Antalya | Traslados Privados con Precio Fijo",
            "it": "Prezzi Taxi Aeroporto di Antalya | Trasferimenti Privati a Prezzo Fisso",
            "ar": "أسعار سيارات الأجرة في مطار أنطاليا | انتقالات خاصة بأسعار ثابتة"
        },
        "keywords": {
            "en": "Antalya airport taxi, AYT airport transfer, private transfer Antalya, Antalya airport taxi prices, fixed price taxi Antalya, Kemer taxi transfer, Belek airport taxi, Side transfer, Alanya taxi service, Lara Beach taxi, Konyaaltı transfer",
            "tr": "Antalya havalimanı taksi, AYT havalimanı transferi, Antalya özel transfer, Antalya havalimanı taksi fiyatları, sabit fiyat taksi Antalya, Kemer taksi transferi, Belek havalimanı taksi, Side transferi, Alanya taksi hizmeti, Lara Plajı taksi, Konyaaltı transferi",
            "zh": "安塔利亚机场出租车, AYT机场接送, 安塔利亚私人接送, 安塔利亚机场出租车价格, 固定价格出租车安塔利亚, 凯梅尔出租车接送, 贝莱克机场出租车, 锡德接送, 阿拉尼亚出租车服务, 拉拉海滩出租车, 孔雅尔特接送",
            "ru": "Такси в аэропорту Антальи, трансфер из аэропорта AYT, частный трансфер Анталья, цены на такси в аэропорту Антальи, такси с фиксированной ценой Анталья, трансфер в Кемер, такси в аэропорт Белек, трансфер в Сиде, такси в Аланье, такси на пляж Лара, трансфер в Коньяалты",
            "es": "Taxi aeropuerto Antalya, traslado aeropuerto AYT, traslado privado Antalya, precios de taxi aeropuerto Antalya, taxi de precio fijo Antalya, traslado taxi Kemer, taxi aeropuerto Belek, traslado Side, servicio de taxi Alanya, taxi Playa Lara, traslado Konyaaltı",
            "it": "Taxi aeroporto Antalya, trasferimento aeroporto AYT, trasferimento privato Antalya, prezzi taxi aeroporto Antalya, taxi a prezzo fisso Antalya, trasferimento taxi Kemer, taxi aeroporto Belek, trasferimento Side, servizio taxi Alanya, taxi Spiaggia Lara, trasferimento Konyaaltı",
            "ar": "سيارة أجرة مطار أنطاليا, نقل مطار AYT, انتقال خاص في أنطاليا, أسعار سيارات الأجرة في مطار أنطاليا, سيارة أجرة بسعر ثابت أنطاليا, نقل تاكسي كيمير, سيارة أجرة مطار بيليك, نقل سايد, خدمة سيارات الأجرة في ألانيا, سيارة أجرة شاطئ لارا, نقل كونيا ألتي"
        },
        "metaDescription": {
            "en": "Book a private taxi from Antalya Airport (AYT) to Kemer, Belek, Side, Alanya, Lara Beach & Konyaaltı. Fixed prices, meet & greet, no hidden fees. 24/7 support.",
            "tr": "Antalya Havalimanı'ndan (AYT) Kemer, Belek, Side, Alanya, Lara Plajı ve Konyaaltı'na özel taksi rezervasyonu yapın. Sabit fiyatlar, karşılama hizmeti, gizli ücret yok. 7/24 destek.",
            "zh": "预订从安塔利亚机场（AYT）到凯梅尔、贝莱克、锡德、阿拉尼亚、拉拉海滩和孔雅尔特的私人出租车。固定价格，迎接服务，无隐藏费用。24/7支持。",
            "ru": "Закажите частное такси из аэропорта Антальи (AYT) в Кемер, Белек, Сиде, Аланью, на пляж Лара и в Коньяалты. Фиксированные цены, встреча, без скрытых платежей. Круглосуточная поддержка.",
            "es": "Reserva un taxi privado desde el Aeropuerto de Antalya (AYT) a Kemer, Belek, Side, Alanya, Playa Lara y Konyaaltı. Precios fijos, bienvenida, sin tarifas ocultas. Atención 24/7.",
            "it": "Prenota un taxi privato dall'Aeroporto di Antalya (AYT) per Kemer, Belek, Side, Alanya, Spiaggia Lara e Konyaaltı. Prezzi fissi, accoglienza, nessun costo nascosto. Supporto 24/7.",
            "ar": "احجز سيارة أجرة خاصة من مطار أنطاليا (AYT) إلى كيمير، بيليك، سايد، ألانيا، شاطئ لارا وكونيا ألتي. أسعار ثابتة، استقبال، بدون رسوم مخفية. دعم 24/7."
        }
    }
    ,
    "/bodrum-milas-airport-taxi-prices": {
        "headTitle": {
            "en": "Bodrum Milas Airport Taxi Transfer Prices | Fixed-Price Private Transfers",
            "tr": "Bodrum Milas Havalimanı Taksi Transfer Fiyatları | Sabit Fiyatlı Özel Transferler",
            "zh": "博德鲁姆米拉斯机场出租车价格 | 固定价格 & 私人接送",
            "ru": "Цены на такси в аэропорту Бодрум-Милас | Фиксированные частные трансферы",
            "es": "Precios de Taxi en el Aeropuerto de Bodrum Milas | Traslados Privados con Precio Fijo",
            "it": "Prezzi Taxi Aeroporto di Bodrum Milas | Trasferimenti Privati a Prezzo Fisso",
            "ar": "أسعار سيارات الأجرة في مطار بودروم ميلاس | انتقالات خاصة بأسعار ثابتة"
        },
        "keywords": {
            "en": "Bodrum airport taxi, BJV airport transfer, private transfer Bodrum, Bodrum airport taxi prices, fixed price taxi Bodrum, Gumbet taxi transfer, Torba airport taxi, Bitez transfer, Yalikavak taxi service, Turgutreis airport taxi",
            "tr": "Bodrum havalimanı taksi, BJV havalimanı transferi, Bodrum özel transfer, Bodrum havalimanı taksi fiyatları, sabit fiyat taksi Bodrum, Gümbet taksi transferi, Torba havalimanı taksi, Bitez transferi, Yalıkavak taksi hizmeti, Turgutreis havalimanı taksi",
            "zh": "博德鲁姆机场出租车, BJV机场接送, 博德鲁姆私人接送, 博德鲁姆机场出租车价格, 固定价格出租车博德鲁姆, 居姆贝特出租车接送, 托尔巴机场出租车, 比泰兹接送, 雅利卡瓦克出租车服务, 图尔古特雷斯机场出租车",
            "ru": "Такси в аэропорту Бодрум, трансфер из аэропорта BJV, частный трансфер Бодрум, цены на такси в аэропорту Бодрума, такси с фиксированной ценой Бодрум, трансфер в Гюмбет, такси в аэропорт Торба, трансфер в Битез, такси в Ялыкавак, такси в Тургутрейс",
            "es": "Taxi aeropuerto Bodrum, traslado aeropuerto BJV, traslado privado Bodrum, precios de taxi aeropuerto Bodrum, taxi de precio fijo Bodrum, traslado taxi Gumbet, taxi aeropuerto Torba, traslado Bitez, servicio de taxi Yalikavak, taxi aeropuerto Turgutreis",
            "it": "Taxi aeroporto Bodrum, trasferimento aeroporto BJV, trasferimento privato Bodrum, prezzi taxi aeroporto Bodrum, taxi a prezzo fisso Bodrum, trasferimento taxi Gumbet, taxi aeroporto Torba, trasferimento Bitez, servizio taxi Yalikavak, taxi aeroporto Turgutreis",
            "ar": "سيارة أجرة مطار بودروم, نقل مطار BJV, انتقال خاص في بودروم, أسعار سيارات الأجرة في مطار بودروم, سيارة أجرة بسعر ثابت بودروم, نقل تاكسي جومبيت, سيارة أجرة مطار توربا, نقل بيتز, خدمة سيارات الأجرة في ياليكافاك, سيارة أجرة مطار تورغوتريس"
        },
        "metaDescription": {
            "en": "Book a private taxi from Bodrum Milas Airport (BJV) to Bodrum, Gumbet, Torba, Bitez, Yalikavak & Turgutreis. Fixed prices, meet & greet, no hidden fees. 24/7 support.",
            "tr": "Bodrum Milas Havalimanı'ndan (BJV) Bodrum, Gümbet, Torba, Bitez, Yalıkavak ve Turgutreis'e özel taksi rezervasyonu yapın. Sabit fiyatlar, karşılama hizmeti, gizli ücret yok. 7/24 destek.",
            "zh": "预订从博德鲁姆米拉斯机场（BJV）到博德鲁姆、居姆贝特、托尔巴、比泰兹、雅利卡瓦克和图尔古特雷斯的私人出租车。固定价格，迎接服务，无隐藏费用。24/7支持。",
            "ru": "Закажите частное такси из аэропорта Бодрум-Милас (BJV) в Бодрум, Гюмбет, Торба, Битез, Ялыкавак и Тургутрейс. Фиксированные цены, встреча, без скрытых платежей. Круглосуточная поддержка.",
            "es": "Reserva un taxi privado desde el Aeropuerto de Bodrum Milas (BJV) a Bodrum, Gumbet, Torba, Bitez, Yalikavak y Turgutreis. Precios fijos, bienvenida, sin tarifas ocultas. Atención 24/7.",
            "it": "Prenota un taxi privato dall'Aeroporto di Bodrum Milas (BJV) per Bodrum, Gumbet, Torba, Bitez, Yalikavak e Turgutreis. Prezzi fissi, accoglienza, nessun costo nascosto. Supporto 24/7.",
            "ar": "احجز سيارة أجرة خاصة من مطار بودروم ميلاس (BJV) إلى بودروم، جومبيت، توربا، بيتز، ياليكافاك وتورغوتريس. أسعار ثابتة، استقبال، بدون رسوم مخفية. دعم 24/7."
        }
    }
    ,
    "/izmir-adnan-menderes-airport-taxi-prices": {
        "headTitle": {
            "en": "Izmir Adnan Menderes Airport Taxi Prices | Fixed-Price Private Transfers",
            "tr": "İzmir Adnan Menderes Havalimanı Taksi Fiyatları | Sabit Fiyatlı Özel Transferler",
            "zh": "伊兹密尔阿德南·曼德列斯机场出租车价格 | 固定价格 & 私人接送",
            "ru": "Цены на такси в аэропорту Измир Аднан Мендерес | Фиксированные частные трансферы",
            "es": "Precios de Taxi en el Aeropuerto de Izmir Adnan Menderes | Traslados Privados con Precio Fijo",
            "it": "Prezzi Taxi Aeroporto di Izmir Adnan Menderes | Trasferimenti Privati a Prezzo Fisso",
            "ar": "أسعار سيارات الأجرة في مطار إزمير عدنان مندريس | انتقالات خاصة بأسعار ثابتة"
        },
        "keywords": {
            "en": "Izmir airport taxi, ADB airport transfer, private transfer Izmir, Izmir airport taxi prices, fixed price taxi Izmir, Kusadasi taxi transfer, Cesme airport taxi, Alacati transfer, Ephesus taxi service, Selcuk transfer",
            "tr": "İzmir havalimanı taksi, ADB havalimanı transferi, İzmir özel transfer, İzmir havalimanı taksi fiyatları, sabit fiyat taksi İzmir, Kuşadası taksi transferi, Çeşme havalimanı taksi, Alaçatı transferi, Efes taksi hizmeti, Selçuk transferi",
            "zh": "伊兹密尔机场出租车, ADB机场接送, 伊兹密尔私人接送, 伊兹密尔机场出租车价格, 固定价格出租车伊兹密尔, 库萨达斯出租车接送, 切什梅机场出租车, 阿拉恰特接送, 以弗所出租车服务, 塞尔丘克接送",
            "ru": "Такси в аэропорту Измир, трансфер из аэропорта ADB, частный трансфер Измир, цены на такси в аэропорту Измир, такси с фиксированной ценой Измир, трансфер в Кушадасы, такси в аэропорт Чешме, трансфер в Алачаты, такси в Эфес, трансфер в Сельчук",
            "es": "Taxi aeropuerto Izmir, traslado aeropuerto ADB, traslado privado Izmir, precios de taxi aeropuerto Izmir, taxi de precio fijo Izmir, traslado taxi Kusadasi, taxi aeropuerto Cesme, traslado Alacati, servicio de taxi Éfeso, traslado Selcuk",
            "it": "Taxi aeroporto Izmir, trasferimento aeroporto ADB, trasferimento privato Izmir, prezzi taxi aeroporto Izmir, taxi a prezzo fisso Izmir, trasferimento taxi Kusadasi, taxi aeroporto Cesme, trasferimento Alacati, servizio taxi Efeso, trasferimento Selcuk",
            "ar": "سيارة أجرة مطار إزمير, نقل مطار ADB, انتقال خاص في إزمير, أسعار سيارات الأجرة في مطار إزمير, سيارة أجرة بسعر ثابت إزمير, نقل تاكسي كوشاداسي, سيارة أجرة مطار تشيشمي, نقل ألاكاتي, خدمة سيارات الأجرة في أفسس, نقل سيلجوق"
        },
        "metaDescription": {
            "en": "Book a private taxi from Izmir Adnan Menderes Airport (ADB) to Kusadasi, Cesme, Alacati, Selcuk & Ephesus. Fixed prices, meet & greet, no hidden fees. 24/7 support.",
            "tr": "İzmir Adnan Menderes Havalimanı'ndan (ADB) Kuşadası, Çeşme, Alaçatı, Selçuk ve Efes'e özel taksi rezervasyonu yapın. Sabit fiyatlar, karşılama hizmeti, gizli ücret yok. 7/24 destek.",
            "zh": "预订从伊兹密尔阿德南·曼德列斯机场（ADB）到库萨达斯、切什梅、阿拉恰特、塞尔丘克和以弗所的私人出租车。固定价格，迎接服务，无隐藏费用。24/7支持。",
            "ru": "Закажите частное такси из аэропорта Измир Аднан Мендерес (ADB) в Кушадасы, Чешме, Алачаты, Сельчук и Эфес. Фиксированные цены, встреча, без скрытых платежей. Круглосуточная поддержка.",
            "es": "Reserva un taxi privado desde el Aeropuerto de Izmir Adnan Menderes (ADB) a Kusadasi, Cesme, Alacati, Selcuk y Éfeso. Precios fijos, bienvenida, sin tarifas ocultas. Atención 24/7.",
            "it": "Prenota un taxi privato dall'Aeroporto di Izmir Adnan Menderes (ADB) per Kusadasi, Cesme, Alacati, Selcuk e Efeso. Prezzi fissi, accoglienza, nessun costo nascosto. Supporto 24/7.",
            "ar": "احجز سيارة أجرة خاصة من مطار إزمير عدنان مندريس (ADB) إلى كوشاداسي، تشيشمي، ألاكاتي، سيلجوق وأفسس. أسعار ثابتة، استقبال، بدون رسوم مخفية. دعم 24/7."
        }
    }
    ,
    "/gazipasha-alanya-airport-taxi-prices": {
        "headTitle": {
            "en": "Gazipaşa-Alanya Airport Taxi Prices | Fixed-Price Private Transfers",
            "tr": "Gazipaşa-Alanya Havalimanı Taksi Fiyatları | Sabit Fiyatlı Özel Transferler",
            "zh": "加济帕夏-阿兰亚机场出租车价格 | 固定价格 & 私人接送",
            "ru": "Цены на такси в аэропорту Газипаша-Аланья | Фиксированные частные трансферы",
            "es": "Precios de Taxi en el Aeropuerto de Gazipaşa-Alanya | Traslados Privados con Precio Fijo",
            "it": "Prezzi Taxi Aeroporto di Gazipaşa-Alanya | Trasferimenti Privati a Prezzo Fisso",
            "ar": "أسعار سيارات الأجرة في مطار غازي باشا - ألانيا | انتقالات خاصة بأسعار ثابتة"
        },
        "keywords": {
            "en": "Gazipaşa airport taxi, GZP airport transfer, private transfer Gazipaşa, Gazipaşa airport taxi prices, fixed price taxi Alanya, Mahmutlar taxi transfer, Kargicak airport taxi, Anamur transfer, Avsallar taxi service",
            "tr": "Gazipaşa havalimanı taksi, GZP havalimanı transferi, Gazipaşa özel transfer, Gazipaşa havalimanı taksi fiyatları, sabit fiyat taksi Alanya, Mahmutlar taksi transferi, Kargıcak havalimanı taksi, Anamur transferi, Avsallar taksi hizmeti",
            "zh": "加济帕夏机场出租车, GZP机场接送, 加济帕夏私人接送, 加济帕夏机场出租车价格, 固定价格出租车阿兰亚, 马赫穆特拉尔出租车接送, 卡尔吉贾克机场出租车, 阿纳穆尔接送, 阿夫萨拉尔出租车服务",
            "ru": "Такси в аэропорту Газипаша, трансфер из аэропорта GZP, частный трансфер Газипаша, цены на такси в аэропорту Газипаша, такси с фиксированной ценой Аланья, трансфер в Махмутлар, такси в аэропорт Каргыджак, трансфер в Анамур, такси в Авсаллар",
            "es": "Taxi aeropuerto Gazipaşa, traslado aeropuerto GZP, traslado privado Gazipaşa, precios de taxi aeropuerto Gazipaşa, taxi de precio fijo Alanya, traslado taxi Mahmutlar, taxi aeropuerto Kargicak, traslado Anamur, servicio de taxi Avsallar",
            "it": "Taxi aeroporto Gazipaşa, trasferimento aeroporto GZP, trasferimento privato Gazipaşa, prezzi taxi aeroporto Gazipaşa, taxi a prezzo fisso Alanya, trasferimento taxi Mahmutlar, taxi aeroporto Kargicak, trasferimento Anamur, servizio taxi Avsallar",
            "ar": "سيارة أجرة مطار غازي باشا, نقل مطار GZP, انتقال خاص في غازي باشا, أسعار سيارات الأجرة في مطار غازي باشا, سيارة أجرة بسعر ثابت ألانيا, نقل تاكسي محمودلار, سيارة أجرة مطار كارجيجاك, نقل أنامور, خدمة سيارات الأجرة في أفسالار"
        },
        "metaDescription": {
            "en": "Book a private taxi from Gazipaşa-Alanya Airport (GZP) to Alanya, Mahmutlar, Kargicak, Anamur & Avsallar. Fixed prices, meet & greet, no hidden fees. 24/7 support.",
            "tr": "Gazipaşa-Alanya Havalimanı'ndan (GZP) Alanya, Mahmutlar, Kargıcak, Anamur ve Avsallar'a özel taksi rezervasyonu yapın. Sabit fiyatlar, karşılama hizmeti, gizli ücret yok. 7/24 destek.",
            "zh": "预订从加济帕夏-阿兰亚机场（GZP）到阿兰亚、马赫穆特拉尔、卡尔吉贾克、阿纳穆尔和阿夫萨拉尔的私人出租车。固定价格，迎接服务，无隐藏费用。24/7支持。",
            "ru": "Закажите частное такси из аэропорта Газипаша-Аланья (GZP) в Аланью, Махмутлар, Каргыджак, Анамур и Авсаллар. Фиксированные цены, встреча, без скрытых платежей. Круглосуточная поддержка.",
            "es": "Reserva un taxi privado desde el Aeropuerto de Gazipaşa-Alanya (GZP) a Alanya, Mahmutlar, Kargicak, Anamur y Avsallar. Precios fijos, bienvenida, sin tarifas ocultas. Atención 24/7.",
            "it": "Prenota un taxi privato dall'Aeroporto di Gazipaşa-Alanya (GZP) per Alanya, Mahmutlar, Kargicak, Anamur e Avsallar. Prezzi fissi, accoglienza, nessun costo nascosto. Supporto 24/7.",
            "ar": "احجز سيارة أجرة خاصة من مطار غازي باشا - ألانيا (GZP) إلى ألانيا، محمودلار، كارجيجاك، أنامور وأفسالار. أسعار ثابتة، استقبال، بدون رسوم مخفية. دعم 24/7."
        }
    }
}
