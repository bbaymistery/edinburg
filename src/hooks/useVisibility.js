import { useEffect, useRef, useState } from 'react';

/**
 * A custom React hook that uses the Intersection Observer API to check when the
 * referenced element becomes visible in the viewport.
 * 
 * @returns [isVisible, ref] - isVisible is a boolean state indicating visibility, 
 * and ref is a ref object to be attached to the DOM element.
 */
export function useVisibility() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                observer.disconnect();  // Optional: Disconnect if you only want to trigger once
            }
        }, {
            // You can add options here for root, rootMargin or threshold
        });

        const currentElement = ref.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return [isVisible, ref];
}
