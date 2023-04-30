import { HTMLAttributes, useRef } from "react";

export default function KeyboardNavigationAwareContainer({
    children,
    ...rest
}: HTMLAttributes<HTMLDivElement>) {

    const containerRef = useRef(null);

    function handleKeyUp(e: any) {

        let delta = 0;

        if (e.key === "ArrowLeft") {
            delta = -1;
        } else if (e.key === "ArrowRight") {
            delta = 1;
        } else {
            return;
        }

        const container = containerRef.current as unknown as HTMLDivElement;
        const children = Array.from(container.children);
        const activeElemIndex = children.findIndex((elem) => elem === document.activeElement);
        let nextActiveElemIndex = 0;
        
        if (activeElemIndex >= 0) {
            nextActiveElemIndex = activeElemIndex + delta;
        }

        if (nextActiveElemIndex < 0) {
            nextActiveElemIndex = children.length - 1;
        } else if (nextActiveElemIndex >= children.length) {
            nextActiveElemIndex = 0;
        }

        (children[nextActiveElemIndex] as HTMLElement).focus();
    }

    return (
        <div ref={containerRef} onKeyUp={handleKeyUp} {...rest}>
            {children}
        </div>
    );
}