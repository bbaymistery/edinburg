import { generalAllTranslations } from "../../constants/generalTranslataions";

export const validateForm = (formState, language) => {
  const errors = {};

  // Driver Personal Info
  if (!formState.fullname.trim()) {
    errors.fullname = generalAllTranslations.strErrorFullNameRequired[language];
  }

  if (!formState.birthdate) {
    errors.birthdate = generalAllTranslations.strErrorBirthDateRequired[language];
  }

  if (!formState.phone.trim()) {
    errors.phone = generalAllTranslations.strErrorPhoneRequired[language];
  }

  if (!formState.email.trim()) {
    errors.email = generalAllTranslations.strErrorEmailRequired[language];
  } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
    errors.email = generalAllTranslations.strErrorEmailInvalid[language];
  }

  if (!formState.address.trim()) {
    errors.address = generalAllTranslations.strErrorAddressRequired[language];
  }

  // Driver Vehicle Info
  if (!formState.isOwner || (formState.isOwner !== 'yes' && formState.isOwner !== 'no')) {
    errors.isOwner = generalAllTranslations.strErrorIsOwnerRequired[language];
  }

  if (!formState.vehicleMakeModel.trim()) {
    errors.vehicleMakeModel = generalAllTranslations.strErrorVehicleMakeModelRequired[language];
  }

  if (!formState.vehicleYear.trim()) {
    errors.vehicleYear = generalAllTranslations.strErrorVehicleYearRequired[language];
  } else if (!/^\d{4}$/.test(formState.vehicleYear)) {
    errors.vehicleYear = generalAllTranslations.strErrorVehicleYearInvalid[language];
  }

  if (!formState.licensePlate.trim()) {
    errors.licensePlate = generalAllTranslations.strErrorLicensePlateRequired[language];
  }

  if (!formState.passengerCapacity.trim()) {
    errors.passengerCapacity = generalAllTranslations.strErrorVehicleCapacityRequired[language];
  }

  // --- Service areas (checkbox group) - unified validation ---
  const hasSelection = Array.isArray(formState.preferredLocation) && formState.preferredLocation.length > 0;

  const selectedOther = hasSelection && formState.preferredLocation.includes("other");

  const otherTextGiven = !!(formState.otherLocation && formState.otherLocation.trim());

  // Tercih edilen mesaj: "Lütfen en az bir hizmet bölgesi seçin veya 'Diğer'i belirtin."
  // Eğer bu stringi eklemediysen fallback olarak strErrorServiceArea'yı kullanır.

  if (!hasSelection) {
    // Hiç seçim yok -> hata
    errors.preferredLocation = generalAllTranslations.strErrorServiceAreaRequired[language];
  } else if (selectedOther && !otherTextGiven) {
    // "Other" seçili ama metin boş -> aynı hatayı preferredLocation'a yaz
    errors.preferredLocation = generalAllTranslations.strErrorOtherServiceArea[language];
  }
  // --- /Service areas ---

  return errors;
};


// Fonksiyon versiyonu
export const getLocationOptions = (language) => [
  { label: generalAllTranslations.strEdinburgh[language], value: "edinburgh" },
  { label: generalAllTranslations.strGlasgow[language], value: "glasgow" },
  { label: generalAllTranslations.strStAndrews[language], value: "st-andrews" },
  { label: generalAllTranslations.strInverness[language], value: "inverness" },
  { label: generalAllTranslations.strAberdeen[language], value: "aberdeen" },
  { label: generalAllTranslations.strFortWilliam[language], value: "fort-william" },
  { label: generalAllTranslations.strDundee[language], value: "dundee" },
  { label: generalAllTranslations.strOther[language], value: "other" },
];

export const formatPreferredLocations = (selected, otherText, language) => {
  // Eğer 'selected' array değilse veya boşsa, kullanıcı hiçbir lokasyon seçmemiştir → "-"
  if (!Array.isArray(selected) || selected.length === 0) return "-";

  // Seçili lokasyonları dönüştür → label olarak yazdır
  return selected
    .map((val) => {
      // LOCATION_OPTIONS içinden o değere (value) karşılık gelen label'ı bul
      const opt = getLocationOptions(language).find(o => o.value === val);

      // Eğer eşleşen bir option bulunamadıysa (beklenmeyen durum) → direkt value döndür
      if (!opt) return val;

      // Eğer seçilen değer "other" ise, yani kullanıcı "Other" seçeneğini seçtiyse
      if (val === "other") {
        // Kullanıcının yazdığı serbest metni al (boşsa "")
        const txt = (otherText || "").trim();

        // Eğer kullanıcı "Other" için ek metin yazmışsa → "Other: yazılan metin"
        // Eğer metin boşsa → sadece "Other"
        return txt ? `${opt.label}: ${txt}` : opt.label;
      }

      // Normal seçenekler için → sadece label döndür
      return opt.label;
    })
    // Tüm label'ları virgül ile ayırarak tek string haline getir
    .join(", ");
};

export const htmlTemplate = (internalState) => {
  return (
    `
  <h2 style="color:#333;">Driver Application Form</h2>

  <h3>Personal Information</h3>
  <ul>
    <li><strong>Full Name:</strong> ${internalState.fullname}</li>
    <li><strong>Date of Birth:</strong> ${internalState.birthdate}</li>
    <li><strong>Phone:</strong> ${internalState.phone}</li>
    <li><strong>Email:</strong> ${internalState.email}</li>
    <li><strong>Address:</strong> ${internalState.address}</li>
  </ul>

  <h3>Vehicle Information</h3>
  <ul>
    <li><strong>Are you the owner?:</strong> ${internalState.isOwner === 'yes' ? 'Yes' : 'No'}</li>
    <li><strong>Make / Model:</strong> ${internalState.vehicleMakeModel}</li>
    <li><strong>Year:</strong> ${internalState.vehicleYear}</li>
    <li><strong>License Plate:</strong> ${internalState.licensePlate}</li>
    <li><strong>Passenger Capacity:</strong> ${internalState.passengerCapacity}</li>
    <li><strong>Preferred Location(s):</strong> 
      ${formatPreferredLocations(internalState.preferredLocation, internalState.otherLocation, language)}
    </li>
  </ul>
  <hr />
  <p style="font-size: 12px; color: #888;">
    Submission Date: ${new Date().toLocaleString("en-GB")}
  </p>
`
  )
}


export const htmlContentDriverResult = {
  en: `
<h1>Thank You for Your Application</h1>
<p>Your driver application has been successfully submitted.</p>

<p>One of our admin staff will review your details and contact you shortly to help with:</p>
<ul>
  <li>Downloading the APL Driver App</li>
  <li>Setting up your driver account</li>
  <li>Completing the activation process</li>
</ul>

<p>We’re excited to welcome you to the APL Edinburgh team.</p>

<h2>Need Help in the Meantime?</h2>
<p>If you have any urgent questions, please feel free to contact us directly:</p>
<ul>
  <li><strong>WhatsApp (Admin):</strong> +44 7809 536620</li>
  <li><strong>Email:</strong> <a href="mailto:documents@aplcars.com">documents@aplcars.com</a></li>
</ul>

<p>Thank you for choosing APL Edinburgh.<br>We’ll be in touch soon!</p>
`
  ,
  tr: `
<h1>Başvurunuz İçin Teşekkürler</h1>
<p>Sürücü başvurunuz başarıyla gönderildi.</p>

<p>Yönetim ekibimiz bilgilerinizı inceleyip kısa süre içinde sizinle iletişime geçerek aşağıdaki konularda yardımcı olacaktır:</p>
<ul>
  <li>APL Sürücü Uygulamasının indirilmesi</li>
  <li>Sürücü hesabınızın oluşturulması</li>
  <li>Aktivasyon sürecinin tamamlanması</li>
</ul>

<p>APL Edinburgh ekibine katılacağınız için heyecanlıyız.</p>

<h2>Bu arada yardıma mı ihtiyacınız var?</h2>
<p>Acil sorularınız için bizimle doğrudan iletişime geçebilirsiniz:</p>
<ul>
  <li><strong>WhatsApp (Admin):</strong> +44 7809 536620</li>
  <li><strong>E-posta:</strong> <a href="mailto:documents@aplcars.com">documents@aplcars.com</a></li>
</ul>

<p>APL Edinburgh’u seçtiğiniz için teşekkür ederiz.<br>Kısa süre içinde sizinle iletişime geçeceğiz.</p>
`,
  ar: `
<h1>شكرًا لتقديم طلبك</h1>
<p>تم إرسال طلبك كسائق بنجاح.</p>

<p>سيقوم فريق الإدارة لدينا بمراجعة بياناتك والتواصل معك قريبًا لمساعدتك في الأمور التالية:</p>
<ul>
  <li>تحميل تطبيق السائق APL</li>
  <li>إعداد حساب السائق الخاص بك</li>
  <li>إكمال عملية التفعيل</li>
</ul>

<p>نحن متحمسون للترحيب بك في فريق APL Edinburgh.</p>

<h2>هل تحتاج إلى مساعدة في هذه الأثناء؟</h2>
<p>إذا كان لديك أي أسئلة عاجلة، يمكنك التواصل معنا مباشرةً:</p>
<ul>
  <li><strong>واتساب (الإدارة):</strong> +44 7809 536620</li>
  <li><strong>البريد الإلكتروني:</strong> <a href="mailto:documents@aplcars.com">documents@aplcars.com</a></li>
</ul>

<p>شكرًا لاختيارك APL Edinburgh.<br>سنتواصل معك قريبًا!</p>
`,
  es: `
<h1>Gracias por su solicitud</h1>
<p>Su solicitud como conductor se ha enviado con éxito.</p>

<p>Uno de nuestros administradores revisará sus datos y se pondrá en contacto con usted en breve para ayudarle con lo siguiente:</p>
<ul>
  <li>Descargar la aplicación APL Driver</li>
  <li>Configurar su cuenta de conductor</li>
  <li>Completar el proceso de activación</li>
</ul>

<p>Estamos encantados de darle la bienvenida al equipo de APL Edinburgh.</p>

<h2>¿Necesita ayuda mientras tanto?</h2>
<p>Si tiene alguna pregunta urgente, no dude en ponerse en contacto con nosotros directamente:</p>
<ul>
  <li><strong>WhatsApp (Admin):</strong> +44 7809 536620</li>
  <li><strong>Email:</strong> <a href="mailto:documents@aplcars.com">documents@aplcars.com</a></li>
</ul>

<p>Gracias por elegir APL Edinburgh.<br>¡Nos pondremos en contacto con usted pronto!</p>
`
  ,
  it: `
<h1>Grazie per la tua candidatura</h1>
<p>La tua domanda come autista è stata inviata con successo.</p>

<p>Uno dei nostri membri dello staff amministrativo esaminerà i tuoi dati e ti contatterà a breve per aiutarti con:</p>
<ul>
  <li>Scaricare l’App APL Driver</li>
  <li>Creare il tuo account autista</li>
  <li>Completare il processo di attivazione</li>
</ul>

<p>Siamo entusiasti di darti il benvenuto nel team di APL Edinburgh.</p>

<h2>Hai bisogno di aiuto nel frattempo?</h2>
<p>Se hai domande urgenti, non esitare a contattarci direttamente:</p>
<ul>
  <li><strong>WhatsApp (Admin):</strong> +44 7809 536620</li>
  <li><strong>Email:</strong> <a href="mailto:documents@aplcars.com">documents@aplcars.com</a></li>
</ul>

<p>Grazie per aver scelto APL Edinburgh.<br>Ti contatteremo presto!</p>
`,


  ru: `
<h1>Спасибо за вашу заявку</h1>
<p>Ваша заявка водителя была успешно отправлена.</p>

<p>Один из наших администраторов проверит ваши данные и свяжется с вами в ближайшее время, чтобы помочь с:</p>
<ul>
  <li>Загрузкой приложения APL Driver</li>
  <li>Созданием вашей учетной записи водителя</li>
  <li>Завершением процесса активации</li>
</ul>

<p>Мы рады приветствовать вас в команде APL Edinburgh.</p>

<h2>Нужна помощь в это время?</h2>
<p>Если у вас есть срочные вопросы, пожалуйста, свяжитесь с нами напрямую:</p>
<ul>
  <li><strong>WhatsApp (Администратор):</strong> +44 7809 536620</li>
  <li><strong>Email:</strong> <a href="mailto:documents@aplcars.com">documents@aplcars.com</a></li>
</ul>

<p>Спасибо, что выбрали APL Edinburgh.<br>Мы свяжемся с вами в ближайшее время!</p>
`
  ,
  zh: `
<h1>感谢您的申请</h1>
<p>您的司机申请已成功提交。</p>

<p>我们的管理员将很快审核您的资料，并与您联系以协助以下事项：</p>
<ul>
  <li>下载 APL Driver 应用程序</li>
  <li>设置您的司机账户</li>
  <li>完成激活流程</li>
</ul>

<p>我们非常高兴欢迎您加入 APL Edinburgh 团队。</p>

<h2>同时需要帮助吗？</h2>
<p>如果您有任何紧急问题，请随时直接联系我们：</p>
<ul>
  <li><strong>WhatsApp (管理员):</strong> +44 7809 536620</li>
  <li><strong>电子邮件:</strong> <a href="mailto:documents@aplcars.com">documents@aplcars.com</a></li>
</ul>

<p>感谢您选择 APL Edinburgh。<br>我们会尽快与您联系！</p>
`



}