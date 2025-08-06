import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollPositionManager() {
    const router = useRouter();

    const saveScrollPosition = () => {
        const currentScrollPosition = window.scrollY;
        localStorage.setItem('scrollPosition', currentScrollPosition);
    };

    const restoreScrollPosition = () => {
        const savedPosition = localStorage.getItem('scrollPosition');
        if (savedPosition) {
            const parsedPosition = parseInt(savedPosition, 10);
            window.scrollTo(0, parsedPosition);
            localStorage.removeItem('scrollPosition');
        }
    };

    useEffect(() => {
        restoreScrollPosition();
        router.events.on('routeChangeStart', saveScrollPosition);
        router.events.on('routeChangeComplete', restoreScrollPosition);
        return () => {
            router.events.off('routeChangeStart', saveScrollPosition);
            router.events.off('routeChangeComplete', restoreScrollPosition);
        };
    }, [router]);

    return null;
}
