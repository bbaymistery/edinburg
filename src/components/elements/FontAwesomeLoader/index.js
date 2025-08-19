import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function FontAwesomeHeadLoader() {
    const router = useRouter();
    const [interactionHappened, setInteractionHappened] = useState(false);
    const isHome = router.pathname === '/';

    useEffect(() => {
        const handleInteraction = () => {
            setInteractionHappened(true);
            // Temizle — sadece ilk etkileşimde olsun
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };

        // Etkileşim dinleyicileri ekle
        window.addEventListener('mousemove', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);

        return () => {
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };
    }, []);


    const preloadHref = (isHome && !interactionHappened) ? '/fontawesome/css/all.min.css' : '/fontawesomeAll/css/all.min.css';

    return (
        <Head>
            {!interactionHappened && (
                <>
                    <link rel="preload" as="style" href={preloadHref} onLoad="this.rel='stylesheet'; this.media='all';" />
                    <noscript> <link rel="stylesheet" href={preloadHref} />  </noscript>
                </>
            )}

            {interactionHappened && (<link rel="stylesheet" href={preloadHref} />)}
        </Head>
    );
}
