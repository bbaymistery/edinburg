import { useEffect } from 'react';

export default function AppDataInitializer() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("appData");
      localStorage.removeItem("direction");
      localStorage.removeItem("path");
    };

    // Sadece browser'da çağır
    if (typeof window !== 'undefined') {
      import('../../helpers/fetchAllLanguagesAppDatas').then(module => {
        module.fetchAllLanguagesAppDatas({ initialFetch: false });
      });

      window.addEventListener("beforeunload", handleBeforeUnload);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      }
    };
  }, []);

  return null;
}
