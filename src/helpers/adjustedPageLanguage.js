export function adjustPathnameForLanguage(pathname, pageStartLanguage, cookies) {
    if (pageStartLanguage === 'en') {
        pathname = pathname.replace(/^\/_next\/data\/[^/]+\//, '/').replace(/\.[^/.]+$/, '').replace(/\.json$/, '');
        pageStartLanguage = cookies['lang'] || 'en';  // Default to 'en' if no lang cookie is present
    } else {
        //let pathname ='/tr/tours/cambridge-daily-tour'  let pagestartLanguage="tr"
        pathname = pathname.replace(`/${pageStartLanguage}`, '');

    }
    return { pathname, pageStartLanguage };
}