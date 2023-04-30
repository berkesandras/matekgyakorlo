import { PropsWithChildren, useRef } from "react";

export default function KeyboardNavigationAwareContainer({
    children,
}: PropsWithChildren) {

    const containerRef = useRef(null);

    function handleKeyUp(e: any) {
        const container = containerRef.current as unknown as HTMLDivElement;
        for (const child of container.children) {
            
        }
    }

    return (
        <div ref={containerRef} onKeyUp={handleKeyUp}>
            {children}
        </div>
    );
}