import { useEffect, useRef } from "react";

// Custom hook by Dan Abramov
export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // pamti posledno povikuvanje
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // napravi intervalot
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => {
                clearInterval(id);
            };
        }
    }, [delay]);
};
