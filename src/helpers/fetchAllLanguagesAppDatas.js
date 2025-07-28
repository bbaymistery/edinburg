
import { fetchConfig } from "../resources/getEnvConfig";
import { getDataApi } from "./fetchDatas";


export const fetchAllLanguagesAppDatas = async (params = {}) => {
  let { initialFetch = false } = params;
  const env = await fetchConfig();

  const allLanguages = initialFetch ? ["en"] : ["en", "tr", "ar", "es", "zh", "it", "ru"];
  let allAppDatas = {};

  try {
    await Promise.all(allLanguages.map(async (lang) => {
      const appDataUrl = `${env.apiDomain}/app/${lang}`;
      const data = await getDataApi({ url: appDataUrl });
      allAppDatas[lang] = data;
    }));

    sessionStorage.setItem('allAppDatas', JSON.stringify(allAppDatas)); // ✅ Tüm işlemler bittiğinde tek sefer yaz

  } catch (error) {
    console.log(error);
  }
};
