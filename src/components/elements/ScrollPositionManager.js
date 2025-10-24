import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ScrollPositionManager() {
    const router = useRouter();

    const saveScrollPosition = () => {
        sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    const restoreScrollPosition = () => {
        const saved = sessionStorage.getItem("scrollPosition");
        if (saved) {
            const y = parseInt(saved, 10);
            setTimeout(() => {
                window.scrollTo({ top: y, behavior: "smooth" });
                sessionStorage.removeItem("scrollPosition");
            }, 750); // 🕒 1 saniye gecikme
        }
    };

    useEffect(() => {
        window.addEventListener("beforeunload", saveScrollPosition);
        restoreScrollPosition();
        router.events.on("routeChangeStart", saveScrollPosition);
        router.events.on("routeChangeComplete", restoreScrollPosition);
        return () => {
            window.removeEventListener("beforeunload", saveScrollPosition);
            router.events.off("routeChangeStart", saveScrollPosition);
            router.events.off("routeChangeComplete", restoreScrollPosition);
        };
    }, []);

    return null;
}
