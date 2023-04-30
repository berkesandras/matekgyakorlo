import { HTMLAttributes, useRef } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    forwardKey?: string;
    backwardKey?: string;
}

export default function KeyboardNavigationAwareContainer({
    children,
    onKeyDown,
    forwardKey,
    backwardKey,
    ...rest
}: Props) {

    const containerRef = useRef(null);

    function handleKeyDown(e: any) {

        let delta = 0;

        if (e.key === (backwardKey || "ArrowLeft")) {
            delta = -1;
        } else if (e.key === (forwardKey || "ArrowRight")) {
            delta = 1;
        } else {
            if (onKeyDown) {
                onKeyDown(e);
            }
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

        if (onKeyDown) {
            onKeyDown(e);
        }

        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <div ref={containerRef} onKeyDown={handleKeyDown} {...rest}>
            {children}
        </div>
    );
}