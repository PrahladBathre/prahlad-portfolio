import { useEffect, useRef, useState } from "react";

const LazySection = ({ children, minHeight = "100vh" }) => {
    const containerRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const element = containerRef.current;

        if (!element) return;

        const scrollContainer =
            element.closest(".portfolio-scrollable");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            {
                root: scrollContainer,
                rootMargin: "300px",
                threshold: 0,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{ minHeight }}
        >
            {shouldLoad ? children : null}
        </div>
    );
};

export default LazySection;