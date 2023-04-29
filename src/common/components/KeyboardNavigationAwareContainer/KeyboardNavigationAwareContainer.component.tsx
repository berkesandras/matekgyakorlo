import { PropsWithChildren } from "react";

export default function KeyboardNavigationAwareContainer({
    children,
}: PropsWithChildren) {

    return (
        <div>
            {children}
        </div>
    );
}