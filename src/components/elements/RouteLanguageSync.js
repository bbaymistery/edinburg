import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie, setCookie } from '../../helpers/cokieesFunc';

export default function RouteLanguageSync({ hasLanguage, setLanguage }) {
    const router = useRouter();

    //when we r on payment page and change lang twice then go back with browser then our content changes
    useEffect(() => {

        const language = getCookie("lang")
        //when cahnge on home page language then click browser back btn we update language vai  first condirtione
        if (language !== router.asPath.split("/")[1] && router.asPath.split("/")[1].length === 2) {
            setCookie("lang", router.asPath.split("/")[1], 7);
            setLanguage({ language: router.asPath.split("/")[1], })
        }
        else {
            setLanguage({ language: hasLanguage !== 'en' ? hasLanguage : language, })
        }

    }, [router.asPath])

    return null;
}
