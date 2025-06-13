import { useState, useEffect } from "react";

const useIsNotMobileViewport = (minWidth: number = 1024) => {
    const [isNotMobileViewport, setIsNotMobileViewport] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);
        const handleChange = () => setIsNotMobileViewport(mediaQuery.matches);

        handleChange(); // Initial check
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [minWidth]);

    return isNotMobileViewport;
};

export default useIsNotMobileViewport;