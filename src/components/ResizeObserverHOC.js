import { useEffect, useRef } from "react";

// Resize Observer HOC
const withResizeObserver = (WrappedComponent) => {
    const ResizeObserverHOC = ({ onResize, ...props }) => {
        const containerRef = useRef(null);
        const resizeObserverRef = useRef(null);

        useEffect(() => {
            if (typeof onResize !== "function") {
                console.warn(
                    "The 'onResize' prop is not a function. Resize events will be ignored."
                );
                return;
            }

            const observeResize = () => {
                resizeObserverRef.current = new ResizeObserver((entries) => {
                    handleResize(entries);
                });
                resizeObserverRef.current.observe(containerRef.current);
            };

            const handleResize = (entries) => {
                for (let entry of entries) {
                    const { width, height } = entry.contentRect;
                    onResize({ width, height });
                }
            };

            const cleanup = () => {
                if (resizeObserverRef.current) {
                    resizeObserverRef.current.disconnect();
                }
            };

            observeResize();

            return cleanup;
        }, [onResize]);

        return (
            <div ref={containerRef}>
                <WrappedComponent {...props} />
            </div>
        );
    };

    return ResizeObserverHOC;
};
