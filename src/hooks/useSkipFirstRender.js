import { useRef, useEffect } from "react";

/**
 * Custom React hook to optionally skip running an effect on the first render.
 *
 * Useful when you want an effect (e.g., API call, dispatch, animation) to only run
 * when dependencies change AFTER the first render — not immediately on page load.
 *
 * @param {Function} callback - The function you want to execute after dependency changes.
 * @param {Array} deps - Dependency array for when to rerun the effect.
 * @param {boolean} [skipFirstRender=true] - 
 *        - If true (default), it will skip running `callback` on first page load (first render).
 *        - If false, `callback` will also run on the first render just like a normal useEffect.
 *
 * @example
 *  Example 1: Skip first render, only react to user-triggered currency change
 * useSkipFirstRender(() => {
 *   console.log("Currency changed, fetching quotations...");
 * }, [currencyId]);
 *
 * @example
 * Example 2: Run even on first render (like useEffect)
 * useSkipFirstRender(() => {
 *   console.log("Initializing data fetch...");
 * }, [], false);
 */
export const useSkipFirstRender = (callback, deps, skipFirstRender = true) => {
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (skipFirstRender && firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        callback();
    }, deps);
};
