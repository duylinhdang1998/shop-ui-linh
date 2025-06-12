import { useState, useEffect } from "react";

const useIsNotMobileViewport = () => {
    const [isNotMobileViewport, setIsNotMobileViewport] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)"); // Adjust breakpoint for 'not mobile' as needed
        const handleChange = () => setIsNotMobileViewport(mediaQuery.matches);

        handleChange(); // Initial check
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return isNotMobileViewport;
};

export default useIsNotMobileViewport;