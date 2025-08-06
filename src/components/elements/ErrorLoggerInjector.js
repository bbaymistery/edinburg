import { useEffect } from 'react';
import { setCookie } from '../../helpers/cokieesFunc';

export default function ErrorLoggerInjector({ env, hasLanguage, setLanguage }) {
    useEffect(() => {
        if (typeof window === 'object') {

            window.handelErrorLogs = (error = {}, location = '', logs = {}) => {
                let raw = {};
                try {
                    let { name, message, stack } = typeof error === 'string' ? new Error(error) : error;
                    raw = { error: { name, message, stack }, location, logs };
                } catch (e) {
                    raw = { error: { ...e, ...error }, location, logs };
                }

                let requestOptions = {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(raw),
                    redirect: 'follow',
                };

                if (!env.websiteDomain.includes("localhost")) {
                    try {
                        fetch(`${env.apiDomain}/tools/add-error-logs`, requestOptions)
                            .then(res => res.text())
                            .then(console.log)
                            .catch(console.error);
                    } catch (err) {
                        console.error(err);
                    }
                }
            };

        }
        //set language and bring appDAtas  when user write loaclhost3500/tr
        if (hasLanguage?.length === 2) {
            setLanguage({ language: hasLanguage })
            setCookie("lang", hasLanguage, 7);

        } else {
            setLanguage({ language: "en" })
            setCookie("lang", "en", 7);

        }
    }, []);

    return null;
}
